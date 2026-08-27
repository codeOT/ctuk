# Cardinal Torch UK

Standalone Next.js site for **Cardinal Torch Company UK Limited**.

## Setup

```bash
cd "C:\Users\Damilare\Desktop\Company Projects\ctuk"
npm install
cp .env.example .env.local
```

Fill `.env.local` with Gmail SMTP credentials used for the contact form:

- `MAIL_USER` — sending mailbox
- `MAIL_KEY` — app password

Enquiries are delivered to **info_uk@cardinaltorch.com**.

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- This app is independent of the main Cardinal Torch site (`ctcl`).
- The main site still hosts `/uk_office`; redirecting that route can be done later when a UK domain is ready.
- Slim chrome: UK navbar (Contact + Main site link), UK footer, homepage content, and contact API only.
