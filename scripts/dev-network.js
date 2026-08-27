const { spawn } = require("child_process");
const net = require("net");
const os = require("os");
const path = require("path");

const getLocalIp = () => {
  const nets = os.networkInterfaces();
  const candidates = [];

  for (const iface of Object.values(nets)) {
    for (const netInfo of iface ?? []) {
      const family = netInfo.family;
      if ((family === "IPv4" || family === 4) && !netInfo.internal) {
        candidates.push(netInfo.address);
      }
    }
  }

  const preferred = candidates.find(
    (addr) =>
      addr.startsWith("192.168.") ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(addr) ||
      addr.startsWith("10.")
  );

  return preferred ?? candidates[0] ?? null;
};

const canConnect = (port, host) =>
  new Promise((resolve) => {
    const socket = net.connect({ port, host }, () => {
      socket.destroy();
      resolve(true);
    });
    socket.setTimeout(300, () => {
      socket.destroy();
      resolve(false);
    });
    socket.on("error", () => {
      socket.destroy();
      resolve(false);
    });
  });

const canListen = (port) =>
  new Promise((resolve) => {
    const server = net.createServer();
    const done = (result) => {
      server.removeAllListeners();
      try {
        server.close();
      } catch (_) {
        /* ignore */
      }
      resolve(result);
    };

    server.once("error", () => done(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    // No host = OS default; more accurate on Windows than forcing 0.0.0.0
    server.listen(port);
  });

const isPortAvailable = async (port) => {
  const takenOnIpv4 = await canConnect(port, "127.0.0.1");
  if (takenOnIpv4) return false;

  const takenOnIpv6 = await canConnect(port, "::1");
  if (takenOnIpv6) return false;

  return canListen(port);
};

const findFreePort = async (startPort) => {
  const start = Number(startPort) || 3000;
  for (let port = start; port < start + 100; port += 1) {
    if (await isPortAvailable(port)) return port;
  }
  throw new Error(`No free port found between ${start} and ${start + 99}`);
};

const start = async () => {
  const preferredPort = Number(process.env.PORT) || 3000;
  const port = await findFreePort(preferredPort);

  if (port !== preferredPort) {
    console.log(
      `\nPort ${preferredPort} is in use — switching to port ${port}.\n`
    );
  }

  const localUrl = `http://localhost:${port}`;
  const ip = getLocalIp();
  const networkUrl = ip ? `http://${ip}:${port}` : null;

  console.log("\n────────────────────────────────────────");
  console.log(`  Local:      ${localUrl}`);
  if (networkUrl) {
    console.log(`  Network:    ${networkUrl}`);
  } else {
    console.log("  Network:    (no network IP detected)");
  }
  console.log("────────────────────────────────────────\n");

  const nextCli = path.join(
    __dirname,
    "..",
    "node_modules",
    "next",
    "dist",
    "bin",
    "next"
  );

  const child = spawn(
    process.execPath,
    [nextCli, "dev", "-H", "0.0.0.0", "-p", String(port)],
    {
      stdio: "inherit",
      cwd: path.join(__dirname, ".."),
      env: {
        ...process.env,
        PORT: String(port),
        NEXT_PUBLIC_SITE_URL: localUrl,
      },
    }
  );

  child.on("exit", (code, signal) => {
    if (signal) process.exit(1);
    process.exit(code ?? 0);
  });
};

start().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
