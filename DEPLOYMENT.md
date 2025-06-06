# Deployment Checklist for IntelHero Website

## Pre-Deployment Steps

### 1. Code Quality
- [x] All pages load correctly
- [x] Newsletter signup form works
- [x] Privacy policy page accessible
- [x] Responsive design tested
- [x] SEO meta tags added
- [x] Sitemap and robots.txt created

### 2. Content Review
- [x] Landing page copy reviewed
- [x] Privacy policy content accurate
- [x] Contact information correct
- [x] Extension download links ready (need to update with actual store URLs)

### 3. Technical Setup
- [x] Next.js app configured
- [x] Vercel configuration file added
- [x] API endpoint for newsletter created
- [x] Error boundaries implemented
- [ ] Email service integration (optional, can be done post-launch)

## Deployment Steps

### 1. GitHub Repository
```bash
# Initialize git repository (if not done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: IntelHero website with landing page and privacy policy"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/intelhero/intelhero-website.git

# Push to GitHub
git push -u origin main
```

### 2. Vercel Deployment
1. **Sign up/Login to Vercel**: https://vercel.com
2. **Import Project**: Connect your GitHub repository
3. **Configure Build Settings**: 
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next`
4. **Deploy**: Click "Deploy" button

### 3. Custom Domain Setup
1. **Add Domain in Vercel**: 
   - Go to your project settings
   - Add `intelhero.com` and `www.intelhero.com`
2. **Configure DNS**:
   - Add A record: `@` → `76.76.19.19`
   - Add CNAME record: `www` → `cname.vercel-dns.com`
3. **Verify Domain**: Wait for DNS propagation (can take up to 48 hours)

### 4. Environment Variables (if using email service)
Add these in Vercel dashboard under Project Settings > Environment Variables:
- `MAILCHIMP_API_KEY`
- `MAILCHIMP_LIST_ID`
- `MAILCHIMP_DC`

## Post-Deployment Tasks

### 1. Testing
- [ ] Test website on live URL
- [ ] Test newsletter signup functionality
- [ ] Test privacy policy page
- [ ] Test mobile responsiveness
- [ ] Test loading speed

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify website ownership in Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test Open Graph tags with Facebook debugger
- [ ] Test Twitter Card tags

### 3. Monitoring
- [ ] Set up Vercel Analytics
- [ ] Monitor Core Web Vitals
- [ ] Set up error tracking (Sentry, optional)

### 4. Content Updates
- [ ] Update Chrome Web Store link when extension is published
- [ ] Update Edge Add-ons link when extension is published
- [ ] Add actual extension screenshots/demo
- [ ] Consider adding testimonials section

## Email Service Integration (Optional)

### Mailchimp Setup
1. Create Mailchimp account
2. Create audience/list
3. Generate API key
4. Update environment variables
5. Deploy changes

### Alternative Services
- **ConvertKit**: Good for creators, easy automation
- **SendGrid**: Developer-friendly, good deliverability
- **Resend**: Modern, simple API
- **EmailOctopus**: Cost-effective, good for startups

## Performance Optimizations

### Current Status
- [x] Next.js optimizations enabled
- [x] Tailwind CSS for minimal bundle size
- [x] Image optimization ready
- [x] Code splitting automatic

### Future Improvements
- [ ] Add actual logo/favicon
- [ ] Optimize images with next/image
- [ ] Add loading states
- [ ] Implement service worker (PWA)

## Security Checklist

### Current Status
- [x] HTTPS enabled (Vercel default)
- [x] Security headers configured in vercel.json
- [x] No sensitive data in client-side code
- [x] API routes protected against common attacks

### Future Considerations
- [ ] Rate limiting for newsletter API
- [ ] CAPTCHA for newsletter signup (if spam becomes an issue)
- [ ] CSP headers for additional security

## Launch Timeline

1. **Day 1**: Deploy to Vercel, test functionality
2. **Day 2**: Configure custom domain, verify DNS
3. **Day 3**: Submit to search engines, set up analytics
4. **Day 7**: Monitor performance, gather feedback
5. **Day 14**: Optimize based on initial data

## Support & Maintenance

### Regular Tasks
- Monitor Vercel deployment logs
- Check newsletter signups
- Update privacy policy as needed
- Update extension download links when available
- Monitor website performance and security

### Emergency Contacts
- Vercel Support: https://vercel.com/help
- Domain Registrar Support
- Email Service Provider Support
