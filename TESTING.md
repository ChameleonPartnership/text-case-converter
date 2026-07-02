# Testing Guide

Comprehensive testing procedures for the Text Case Converter.

## Test Cases

### 1. Case Conversion Functions

#### 1.1 UPPERCASE
- Input: `hello world`
- Expected: `HELLO WORLD`
- Edge case: Numbers `hello123` → `HELLO123`
- Edge case: Special chars `hello-world` → `HELLO-WORLD`

#### 1.2 lowercase
- Input: `HELLO WORLD`
- Expected: `hello world`
- Edge case: Mixed `HeLLo WoRLd` → `hello world`
- Edge case: Numbers `Hello123` → `hello123`

#### 1.3 Title Case
- Input: `hello world`
- Expected: `Hello World`
- Edge case: Multiple spaces `hello  world` → `Hello World`
- Edge case: Single word `hello` → `Hello`
- Edge case: Numbers `hello 123` → `Hello 123`

#### 1.4 Sentence case
- Input: `HELLO WORLD`
- Expected: `Hello world`
- Edge case: Already started `Hello world` → `Hello world`
- Edge case: Empty string `` → ``
- Edge case: Special chars `!hello` → `!hello`

#### 1.5 camelCase
- Input: `hello world`
- Expected: `helloWorld`
- Input: `hello_world` → `helloWorld`
- Input: `hello-world` → `helloWorld`
- Input: `HelloWorld` → `helloWorld`
- Edge case: Multiple spaces `hello  world` → `helloWorld`
- Edge case: Leading space ` hello` → `hello`

#### 1.6 snake_case
- Input: `hello world`
- Expected: `hello_world`
- Input: `helloWorld` → `hello_world`
- Input: `hello-world` → `hello_world`
- Input: `HELLO WORLD` → `hello_world`
- Edge case: Multiple underscores `hello__world` → `hello_world`
- Edge case: Leading space ` hello` → `hello`

#### 1.7 kebab-case
- Input: `hello world`
- Expected: `hello-world`
- Input: `helloWorld` → `hello-world`
- Input: `hello_world` → `hello_world`
- Input: `HELLO WORLD` → `hello-world`
- Edge case: Multiple hyphens `hello--world` → `hello-world`
- Edge case: Leading/trailing dashes `hello-` → `hello`

#### 1.8 PascalCase
- Input: `hello world`
- Expected: `HelloWorld`
- Input: `hello_world` → `HelloWorld`
- Input: `hello-world` → `HelloWorld`
- Input: `helloWorld` → `HelloWorld`
- Edge case: Numbers `hello 123 world` → `Hello123World`

#### 1.9 CONSTANT_CASE
- Input: `hello world`
- Expected: `HELLO_WORLD`
- Input: `helloWorld` → `HELLO_WORLD`
- Input: `hello-world` → `HELLO_WORLD`
- Edge case: Multiple underscores `HELLO__WORLD` → `HELLO_WORLD`

#### 1.10 tOGGLE cASE
- Input: `Hello World`
- Expected: `hELLO wORLD`
- Input: `hello` → `HELLO`
- Input: `HELLO` → `hello`
- Edge case: Numbers `Hello123` → `hELLO123` (no change)
- Edge case: Special `Hello-World` → `hELLO-wORLD`

### 2. UI Interaction Tests

#### 2.1 Input Handling
- [ ] Type text appears in input field
- [ ] Paste text from clipboard works
- [ ] Clear button appears only when text is present
- [ ] Clear button clears input and all outputs
- [ ] Character counter updates in real-time
- [ ] Character counter shows correct count

#### 2.2 Copy to Clipboard
- [ ] Click copy button copies text to clipboard
- [ ] Copy button shows "Copied!" feedback
- [ ] Copy button reverts after 2 seconds
- [ ] Toast notification shows on successful copy
- [ ] Toast disappears after 3 seconds
- [ ] Copy works on all 10 variant cards
- [ ] Empty output cannot be copied (shows message)

#### 2.3 Real-time Preview
- [ ] All variants update as you type
- [ ] No lag or delay in conversion
- [ ] Updates are instant (<100ms)
- [ ] All 10 variants update simultaneously

#### 2.4 Dark Mode
- [ ] Theme toggle button appears in header
- [ ] Click toggle switches between light/dark
- [ ] Dark mode applies to entire page
- [ ] Theme persists on page reload
- [ ] System preference detected on first visit
- [ ] Toggle overrides system preference
- [ ] All text remains readable in both modes

#### 2.5 Clear Button
- [ ] Clear button visible only with text
- [ ] Click clears input field
- [ ] Click clears all output fields
- [ ] Focus returns to input after clear
- [ ] Toast notification shows

### 3. Accessibility Tests

#### 3.1 Keyboard Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Shift+Tab navigates backwards
- [ ] Enter/Space activates buttons
- [ ] Focus indicator visible on all elements
- [ ] Focus order is logical (left to right, top to bottom)
- [ ] Ctrl/Cmd + L focuses input field

#### 3.2 Screen Reader
- [ ] ARIA labels on buttons are appropriate
- [ ] Input textarea has descriptive label
- [ ] Output cards have semantic structure
- [ ] Status updates announced with aria-live
- [ ] Toast notifications announced
- [ ] Links have proper text (no "click here")

#### 3.3 Color Contrast
- [ ] Text contrast ratio meets WCAG AA (4.5:1 for normal text)
- [ ] Button contrast meets WCAG AA
- [ ] Links distinguishable without color alone
- [ ] Works with colorblind simulators (Chromatic Vision Simulator)

#### 3.4 Semantic HTML
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Form elements properly labeled
- [ ] Lists use `<ul>` or `<ol>` correctly
- [ ] Buttons are `<button>` elements, not `<div>`
- [ ] Links are `<a>` elements when appropriate

#### 3.5 Mobile Accessibility
- [ ] Touch targets are at least 44x44px
- [ ] Input textarea is easily tappable
- [ ] Copy buttons are easily tappable
- [ ] No small text that requires zooming
- [ ] Works with mobile keyboards

### 4. Performance Tests

#### 4.1 Load Time
- [ ] Initial page load < 2s (3G network)
- [ ] DOM ready < 1s
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

#### 4.2 Conversion Speed
- [ ] Conversion happens < 1ms for typical input
- [ ] No freezing or jank during typing
- [ ] Handles 10,000+ character input smoothly
- [ ] Memory usage stays constant with repeated conversions

#### 4.3 File Sizes
- [ ] HTML < 20KB
- [ ] CSS < 20KB
- [ ] JavaScript < 15KB
- [ ] Total bundle < 55KB

#### 4.4 Lighthouse Score
- [ ] Performance score 85+
- [ ] Accessibility score 95+
- [ ] Best Practices score 100
- [ ] SEO score 100

### 5. Browser Compatibility

#### 5.1 Desktop Browsers
- [ ] Chrome 88+ (Windows, Mac, Linux)
- [ ] Firefox 87+ (Windows, Mac, Linux)
- [ ] Safari 14+ (Mac)
- [ ] Edge 88+ (Windows)

#### 5.2 Mobile Browsers
- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS 14+)
- [ ] Firefox Mobile (Android)
- [ ] Samsung Internet (Android)

#### 5.3 Older Browsers
- [ ] Graceful degradation for IE11 (not fully supported)
- [ ] Fallback for missing features

### 6. Responsive Design Tests

#### 6.1 Mobile (320px)
- [ ] Layout stacks vertically
- [ ] Text readable without zooming
- [ ] Buttons easily tappable
- [ ] Input area usable
- [ ] All features work

#### 6.2 Tablet (768px)
- [ ] Grid adjusts appropriately
- [ ] All content visible
- [ ] No horizontal scrolling
- [ ] Landscape and portrait work

#### 6.3 Desktop (1200px+)
- [ ] Grid displays multi-column
- [ ] Maximum width constraint
- [ ] Centered content
- [ ] Proper spacing

### 7. SEO Tests

#### 7.1 Meta Tags
- [ ] Title tag is descriptive and includes keywords
- [ ] Meta description is present and compelling
- [ ] Canonical URL is correct
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present

#### 7.2 Structured Data
- [ ] Valid JSON-LD markup
- [ ] SoftwareApplication schema present
- [ ] Name, description, URL fields correct
- [ ] Rating structure valid

#### 7.3 Robots & Sitemap
- [ ] robots.txt returns 200 status
- [ ] robots.txt allows crawling
- [ ] sitemap.xml returns 200 status
- [ ] sitemap.xml valid XML format

### 8. Error Handling

#### 8.1 Edge Cases
- [ ] Empty input shows placeholder text
- [ ] Very long input (10000+ chars) handled
- [ ] Special characters preserved
- [ ] Unicode characters handled (emojis, etc.)
- [ ] Whitespace preserved appropriately

#### 8.2 Copy Failures
- [ ] Graceful fallback if clipboard API unavailable
- [ ] Error message displayed
- [ ] User can still manually select text

#### 8.3 JavaScript Disabled
- [ ] Page still loads (graceful degradation)
- [ ] Message displayed suggesting JavaScript
- [ ] SEO content still visible

## Test Environment Setup

### Local Testing

```bash
# Start local server
npx http-server .

# Or with Python
python -m http.server 8000
```

### Testing Tools

1. **Browser DevTools**
   - Chrome DevTools
   - Firefox Developer Tools
   - Safari Web Inspector

2. **Accessibility Tools**
   - axe DevTools (Chrome/Firefox)
   - WAVE (Chrome/Firefox)
   - Lighthouse (built into Chrome DevTools)
   - NVDA (Windows screen reader)
   - JAWS (Windows screen reader)
   - VoiceOver (Mac/iOS)

3. **Performance Tools**
   - Lighthouse (Chrome DevTools)
   - WebPageTest (online)
   - GTmetrix (online)
   - Chrome UX Report

4. **SEO Tools**
   - Google Search Console
   - Open Graph Debugger
   - Twitter Card Validator
   - Schema.org Validator

5. **Responsive Design**
   - Chrome DevTools Device Mode
   - Responsively App
   - BrowserStack (cross-browser testing)

## Test Execution Checklist

- [ ] Run all case conversion tests
- [ ] Test all UI interactions
- [ ] Complete keyboard navigation audit
- [ ] Screen reader testing
- [ ] Color contrast verification
- [ ] Performance measurement
- [ ] Cross-browser testing
- [ ] Responsive design testing
- [ ] SEO validation
- [ ] Error handling verification

## Automated Testing (Optional)

### Jest Unit Tests

```javascript
describe('CaseConverter', () => {
  test('converts to UPPERCASE', () => {
    expect(CaseConverter.toUpperCase('hello')).toBe('HELLO');
  });

  test('converts to camelCase', () => {
    expect(CaseConverter.toCamelCase('hello world')).toBe('helloWorld');
  });

  // Additional test cases...
});
```

### Lighthouse CI

```bash
npx lhci autorun
```

## Regression Testing

After each update:

1. Run full test suite
2. Test affected features
3. Verify no regressions
4. Update documentation
5. Tag release in git

## Performance Baseline

Target metrics:
- **FCP:** < 1.5s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **Speed Index:** < 2s
- **Lighthouse:** 85+

---

**Last Updated:** 2024-01-15
