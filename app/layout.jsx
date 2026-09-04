import { Montserrat, Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import CookieBanner from "@components/CookieBanner";
import "@styles/global.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cardinaltorch.com"),
  title: {
    default: "Cardinal Torch UK",
    template: "%s - Cardinal Torch UK",
  },
  description:
    "Cardinal Torch Company UK Limited is a London-based trade intermediary and procurement company connecting Sub-Saharan African and European commodity markets.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Cardinal Torch UK",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <Toaster />
        <Navbar />
        <main className="min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
