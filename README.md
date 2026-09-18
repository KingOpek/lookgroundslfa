# LookGround

Street-level flood action. Lokogoma pilot.

Eyes on the ground. Action in your street.

Public site (after Vercel import): https://lookgroundslfa.vercel.app

## Field URLs

- Enrol: `/enrol`
- Confirm Ground: `/confirm`
- Dispatch: `/ops`
- I am safe: `/i-am-safe`

## Vercel env (Settings → Environment Variables)

Do not commit secrets.

- `BULKSMS_API_KEY`
- `BULKSMS_SENDER_ID` = `LOOKGROUND`
- `ADMIN_PHONE_NUMBER`
- `TWILIO_ACCOUNT_SID` / `TWILIO_AUTH_TOKEN` / `TWILIO_WHATSAPP_FROM` (or `WHAPI_TOKEN`)
- `LOOKGROUND_PUBLIC_URL` = `https://lookgroundslfa.vercel.app`
- `DATABASE_URL` (Neon or Vercel Postgres)
- `VITE_AUTH_ENABLED` = `false`
