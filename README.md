# IntelHero Website

Official website for IntelHero Scout browser extension, hosted at [intelhero.com](https://intelhero.com).

## Features

- **Modern Landing Page**: Showcases IntelHero Scout extension with hero section, features grid, and download links
- **Privacy Policy**: Comprehensive privacy policy page detailing data handling practices
- **Newsletter Signup**: Functional email subscription with API endpoint
- **Responsive Design**: Mobile-first design with dark mode support
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for search engine optimization

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Deployment**: Vercel
- **Email Service**: Ready for integration with Mailchimp, ConvertKit, or similar

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

## Deployment

### Vercel (Recommended)

1. **Connect to GitHub**:
   - Push your code to a GitHub repository
   - Connect your Vercel account to GitHub

2. **Deploy**:
   - Import your repository in Vercel
   - Vercel will automatically detect Next.js and configure build settings
   - Deploy with default settings

3. **Custom Domain**:
   - Add `intelhero.com` as custom domain in Vercel dashboard
   - Configure DNS records as instructed by Vercel

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## Email Integration

The newsletter signup is ready for integration with email service providers. To connect:

1. **Choose an email service** (Mailchimp, ConvertKit, SendGrid, etc.)
2. **Update the API route** at `src/app/api/newsletter/route.ts`
3. **Add environment variables** for your email service API keys
4. **Deploy the changes**

### Example: Mailchimp Integration

```typescript
// Add to your .env.local file
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_DC=your_datacenter

// Update the API route to use Mailchimp
const response = await fetch(`https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email_address: email,
    status: 'subscribed',
  }),
});
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Email Service Configuration
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_mailchimp_list_id
MAILCHIMP_DC=your_mailchimp_datacenter

# Or for other services
CONVERTKIT_API_KEY=your_convertkit_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
```

## Project Structure

```
src/
├── app/
│   ├── api/newsletter/          # Newsletter signup API
│   ├── privacy/                 # Privacy policy page
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Main landing page
│   └── sitemap.ts               # XML sitemap
├── components/                  # Reusable components (future)
└── styles/                      # Additional styles (future)
```

## SEO Features

- **Meta tags**: Comprehensive Open Graph and Twitter Card tags
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Structured data**: Ready for implementation
- **Performance**: Optimized images and code splitting

## License

All rights reserved. Copyright © 2025 IntelHero.
