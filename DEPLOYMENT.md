# Deployment Guide

This guide covers deploying the Text Case Converter to production platforms.

## Prerequisites

- Git installed
- A domain name (optional, can use free .vercel.app domain)
- GitHub account (optional but recommended)

## Vercel Deployment (Recommended)

Vercel is the optimal choice for static sites built with vanilla JavaScript.

### Option 1: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd text-case-converter

# Deploy
vercel

# For production
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub:

```bash
git remote add origin https://github.com/yourusername/text-case-converter.git
git branch -M main
git push -u origin main
```

2. Go to https://vercel.com/new
3. Select "Continue with GitHub"
4. Authorize and select the repository
5. Click "Deploy"

### Vercel Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "",
  "devCommand": "python -m http.server 8000",
  "outputDirectory": ".",
  "framework": "static",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Netlify Deployment

### Option 1: CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: GitHub Integration

1. Push to GitHub (see Vercel section above)
2. Go to https://app.netlify.com/signup
3. Select "GitHub" and authorize
4. Select repository
5. Click "Deploy"

## GitHub Pages Deployment

### User/Organization Site

```bash
# Push to main branch
git push origin main

# Enable Pages in repository settings
# Go to Settings → Pages → Source: main branch
```

### Project Site

```bash
# Create gh-pages branch
git checkout --orphan gh-pages

# Remove all files except the ones you want to deploy
git reset

# Add and commit
git add .
git commit -m "Initial GitHub Pages deployment"

# Push
git push origin gh-pages
```

## Custom Domain Setup

### Update Domain Registrar

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add CNAME record pointing to your deployment:

**For Vercel:**
```
CNAME: text-case-converter.vercel.app
```

**For Netlify:**
```
CNAME: text-case-converter.netlify.app
```

### Vercel Domain Setup

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your domain
4. Follow DNS configuration instructions

### Netlify Domain Setup

1. Go to your Netlify site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records as instructed

## SSL/TLS Certificate

All modern platforms (Vercel, Netlify, GitHub Pages) provide free SSL certificates automatically.

## Environment-Specific Configuration

### Production
- Enable caching headers
- Minify if not automatic
- Enable security headers
- Enable analytics

### Staging
- Short cache expiry
- Verbose logging
- Analytics disabled

## Performance Optimization

### Caching Headers

```
# Cache static assets for 1 year
Cache-Control: public, max-age=31536000, immutable

# Cache HTML for 1 hour
Cache-Control: public, max-age=3600
```

### Security Headers

Add to deployment platform:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Monitoring & Analytics

### Google Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Lighthouse CI

```bash
npm install -g @lhci/cli@*
lhci autorun
```

### Sentry (Error Tracking)

```html
<script src="https://browser.sentry-cdn.com/7.64.0/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    environment: "production"
  });
</script>
```

## Continuous Deployment (CI/CD)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Rollback Procedures

### Vercel

```bash
# View deployments
vercel ls

# Rollback to previous
vercel rollback
```

### Netlify

1. Go to Deploys
2. Click on previous deploy
3. Click "Publish deploy"

## Troubleshooting

### 404 Errors

Ensure `index.html` is deployed as the default document.

### CORS Issues

Not applicable for client-side only app.

### CSS/JS Not Loading

Check:
1. File paths are correct (relative)
2. Cache is cleared
3. Files are deployed
4. Browser console for errors

### Dark Mode Not Working

1. Clear localStorage
2. Check CSS custom properties
3. Verify JavaScript is loaded and running

## Post-Deployment Checklist

- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS Safari, Chrome Mobile)
- [ ] Verify dark mode toggle works
- [ ] Test copy-to-clipboard on all cards
- [ ] Check Lighthouse score (85+)
- [ ] Verify meta tags with https://www.opengraph.xyz/
- [ ] Test keyboard navigation (Tab, Ctrl+L)
- [ ] Check accessibility with axe DevTools
- [ ] Verify 404 handling
- [ ] Test performance with DevTools
- [ ] Monitor error rates
- [ ] Check Core Web Vitals

## Maintenance

### Regular Updates

```bash
# Pull latest changes
git pull origin main

# Deploy (automatic with CI/CD)
```

### Backup

```bash
# Local backup
cp -r text-case-converter text-case-converter-backup-$(date +%Y%m%d)

# Remote backup
git tag v1.0.0
git push origin v1.0.0
```

## Support

For deployment issues:
- Check platform documentation
- Review browser console errors
- Check network tab in DevTools
- Consult Lighthouse report

---

**Happy deploying! 🚀**
