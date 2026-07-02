# Quick Start Guide

Get the Text Case Converter running in 2 minutes.

## 30-Second Setup

```bash
# Clone the repo
git clone <repo-url>
cd text-case-converter

# Run locally (pick one)
python -m http.server 8000        # Python
npx http-server                    # Node.js
php -S localhost:8000              # PHP

# Open browser
# http://localhost:8000
```

Done! ✅

## 2-Minute Deployment

### Deploy to Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

That's it. Your app is live at `https://[your-project].vercel.app`

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Done!

## Project Structure

```
text-case-converter/
├── index.html              ← Main file (load this in browser)
├── assets/
│   ├── css/styles.css     ← All styles
│   └── js/app.js          ← All JavaScript
├── README.md              ← Full documentation
├── DEPLOYMENT.md          ← Deployment guide
└── TESTING.md             ← Testing guide
```

## What It Does

1. **Enter Text** → Type or paste in the input field
2. **Real-Time Preview** → All 11 case formats appear instantly
3. **Copy** → Click any variant to copy to clipboard
4. **Toggle Dark Mode** → Click sun/moon icon in header

## 11 Supported Case Formats

1. **UPPERCASE** - ALL CAPS
2. **lowercase** - all lowercase
3. **Title Case** - First Letter Of Each Word
4. **Sentence case** - First letter only
5. **camelCase** - camelCaseFormatting
6. **snake_case** - snake_case_formatting
7. **kebab-case** - kebab-case-formatting
8. **PascalCase** - PascalCaseFormatting
9. **CONSTANT_CASE** - CONSTANT_CASE_FORMATTING
10. **tOGGLE cASE** - tOGGLE cASE fORMATTING

## Features at a Glance

✅ Real-time preview (all variants at once)
✅ One-click copy to clipboard
✅ Dark mode with system preference detection
✅ Mobile responsive (works on any device)
✅ WCAG AA accessibility
✅ Zero external dependencies
✅ ~50KB total (HTML + CSS + JS)
✅ Lightweight and fast

## Common Tasks

### Test Locally

```bash
# Start server
python -m http.server 8000

# Open http://localhost:8000
# Try entering: "hello world"
# See all 11 formats appear instantly
# Click Copy on any variant
# Try dark mode toggle
```

### Make Changes

Edit these files:
- `index.html` - Content and HTML structure
- `assets/css/styles.css` - Styling and dark mode
- `assets/js/app.js` - Case conversion logic and interactivity

Changes reload automatically (refresh browser).

### Deploy to Production

1. **Test locally first**
   ```bash
   python -m http.server 8000
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

3. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

### Custom Domain

1. Go to your deployment platform (Vercel/Netlify)
2. Add custom domain
3. Update DNS records at your registrar
4. Done!

## Keyboard Shortcuts

- **Ctrl/Cmd + L** - Focus input field
- **Tab** - Navigate between elements
- **Enter** - Activate button

## Performance Metrics

- Load time: < 100ms
- Conversion speed: < 1ms
- Total size: ~50KB
- Lighthouse: 85+

## Browser Support

✅ Chrome 88+
✅ Firefox 87+
✅ Safari 14+
✅ Edge 88+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### "Cannot find file"
- Make sure you're in the right directory
- Use `ls` or `dir` to check files exist

### "Port 8000 in use"
```bash
# Use different port
python -m http.server 8001
```

### "Copy doesn't work"
- Check browser console for errors
- Ensure JavaScript is enabled
- Try different browser

### "Dark mode not persisting"
- Clear localStorage: `localStorage.clear()`
- Refresh page
- Check browser storage permissions

## File Structure Explained

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Content, SEO, structure | 20KB |
| `assets/css/styles.css` | Styling, dark mode, responsive | 16KB |
| `assets/js/app.js` | Case conversion, interactivity | 16KB |
| `robots.txt` | Search engine instructions | <1KB |
| `sitemap.xml` | URL sitemap for SEO | <1KB |
| `README.md` | Full documentation | 8KB |

## Next Steps

1. ✅ **Get it running locally** (python -m http.server 8000)
2. ✅ **Test a few conversions** (try "hello world")
3. ✅ **Deploy to Vercel** (vercel --prod)
4. ✅ **Add custom domain** (in Vercel settings)
5. ✅ **Monitor performance** (Lighthouse)

## Learn More

- **Full README:** See `README.md` for detailed features
- **Deployment:** See `DEPLOYMENT.md` for platform guides
- **Testing:** See `TESTING.md` for QA procedures
- **Code:** See `index.html`, `assets/css/styles.css`, `assets/js/app.js`

## Need Help?

1. Check the [README.md](README.md)
2. Review [DEPLOYMENT.md](DEPLOYMENT.md)
3. Check browser console for errors
4. Test in a different browser

---

**You're all set! Start using the Text Case Converter now. 🚀**
