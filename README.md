# IntelHero Website

This is the official website for IntelHero, built with [Next.js](https://nextjs.org).

## Features

- 🎯 Google Analytics integration
- 📧 Early access email collection with notifications
- 🎥 YouTube video modal with thumbnail
- 📱 Responsive design
- 🎨 Colorful section backgrounds

## Getting Started

First, install dependencies:

```bash
npm install
```

Set up environment variables by copying the example file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Resend API key for email notifications:

```
RESEND_API_KEY=your_actual_resend_api_key
```

Run the development server:

```bash
make dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Email Notifications Setup ✅ COMPLETED

The website sends email notifications to `dan@intelhero.com` when users sign up for early access.

### Current Status
- ✅ Resend account configured
- ✅ Domain `intelhero.com` verified
- ✅ DNS records (DKIM, SPF, DMARC) configured
- ✅ Email notifications working perfectly

### Configuration
- API Key: Configured in `.env.local`
- From Address: `IntelHero <noreply@intelhero.com>`
- Reply-To: `dan@intelhero.com` (enables direct replies)
- Recipient: `dan@intelhero.com`

### For Production Deployment
1. Add the `RESEND_API_KEY` environment variable in your Vercel project settings
2. Deploy - the email system will work immediately since the domain is already verified

## Project Structure

- `/app/page.tsx` - Main homepage with sections
- `/app/api/early-access/route.ts` - API endpoint for email collection
- `/app/lib/gtag.ts` - Google Analytics utilities
- `/public/promo1.png` - Video thumbnail image

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
