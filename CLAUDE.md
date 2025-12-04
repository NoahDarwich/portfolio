# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Noah Darwich, an AI Research Expert. The site is built with vanilla HTML, CSS, and JavaScript (no build process required) and showcases data science expertise, research automation tools, and academic research projects.

**Tech Stack:**
- Pure HTML5, CSS3, and JavaScript (ES6+)
- No frameworks, bundlers, or build tools
- Font Awesome for icons
- Google Fonts (Inter family)

**Primary Pages:**
- [index.html](index.html) - Homepage with hero section and capabilities overview
- [portfolio.html](portfolio.html) - CV and professional experience
- [research-tools.html](research-tools.html) - **Solutions Page** - Showcase of LLM-powered research automation tool
- [about.html](about.html) - Detailed about/services page
- [contact.html](contact.html) - Contact form and information
- [services.html](services.html) - Service offerings (legacy/alternative version)

### Solutions Page (research-tools.html)

The Solutions page showcases the LLM-powered research automation tool as a professional solution for academic institutions and researchers. Redesigned from "Projects" page to emphasize value proposition for potential clients.

**Key Sections:**
- **Hero**: Value proposition + CTA above fold (max-height: 950px ensures CTA visibility on 1920x1080 desktop)
- **Benefits**: 6 benefit cards focused on researcher pain points (time savings, entity extraction, multi-source processing, reproducibility, data structuring, quality assurance)
- **Primary CTA**: "Try the Tool Now" linking to https://noahdarwich.streamlit.app
- **Secondary Projects**: PRO-TEST card for additional credibility

**Design Notes:**
- Hero headline emphasizes "Automate Research Data Collection with LLM Intelligence"
- Stats bar highlights speed (10x Faster), quality (94% Accuracy), and capability (Multi-Source Processing)
- Navigation uses "Solutions" terminology site-wide (updated across all 6 HTML files)
- Stat numbers use gradient effect for prominence (styles.css:3253-3261)
- Mobile: Hero max-height removed on mobile (CTA may be below fold - acceptable per specification)

**Success Criteria:**
- CTA must be visible without scrolling on 1920x1080 desktop
- Visitors should understand tool purpose within 30 seconds
- At least 4 benefit cards clearly describe researcher value propositions

## Development Commands

### Local Development Server

**Option 1 - Python HTTP Server:**
```bash
python -m http.server 8000
# Then open http://localhost:8000
```

**Option 2 - Node.js HTTP Server:**
```bash
npx http-server
# Then open the URL shown in terminal
```

**Option 3 - VS Code Live Server:**
- Install "Live Server" extension
- Right-click on index.html and select "Open with Live Server"

### Testing
There is no formal test suite. Manual testing in browser required for all changes.

## Architecture and Code Structure

### Navigation System
All pages share a consistent navigation bar with the following structure:
- Fixed navbar with backdrop blur effect ([styles.css:38-49](styles.css#L38-L49))
- Hamburger menu for mobile ([script.js:15-32](script.js#L15-L32))
- Active link highlighting using `.active` class
- Smooth scrolling for anchor links ([script.js:34-47](script.js#L34-L47))

**Key navigation classes:**
- `.navbar` - Fixed header container
- `.nav-menu` - Navigation links list (becomes mobile menu)
- `.hamburger` - Mobile menu toggle
- `.nav-link` - Individual navigation items
- `.nav-link.active` - Current page indicator

### Styling System
The design uses a gradient-based color scheme defined in [styles.css](styles.css):
- **Primary gradient:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Text colors:** `#2d3748` (primary), `#4a5568` (secondary), `#64748b` (muted)
- **Background:** White base with `#f8fafc` for alternating sections

**Important responsive breakpoints:**
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px ([styles.css:1633-1746](styles.css#L1633-L1746))

### JavaScript Features

**Performance Optimizations:**
- Throttled scroll events using custom `throttle()` function ([script.js:2-13](script.js#L2-L13))
- Intersection Observer for lazy animations ([script.js:52-70](script.js#L52-L70))
- Elements animated on scroll: `.expertise-item`, `.service-card`, `.project-card`, `.stat-item`, `.contact-method`

**Animation System:**
- `.fade-in-up` class applied when elements enter viewport
- Observer automatically unobserves after animation to improve performance
- Number animation for stat counters ([script.js:298-349](script.js#L298-L349))

**Contact Form:**
- Form ID must be `contactForm` ([script.js:99-131](script.js#L99-L131))
- Basic email validation included
- Notification system for success/error messages ([script.js:139-200](script.js#L139-L200))
- Currently shows mock success - needs backend integration for real functionality

### CSS Architecture Patterns

**Component Structure:**
Most UI components follow this pattern:
1. Container with padding and background
2. Grid-based layout (using CSS Grid, not Flexbox for main layouts)
3. Card components with hover effects (translateY + box-shadow)
4. 2px border on transparent, changing to `#667eea` on hover

**Common component classes:**
- `.container` - Max-width 1200px centered container ([styles.css:31-35](styles.css#L31-L35))
- `.btn` - Base button styles ([styles.css:198-209](styles.css#L198-L209))
- `.btn-primary` - Gradient background CTA
- `.btn-secondary` - Outlined style
- `.section-title` - Centered section headers with gradient underline ([styles.css:409-428](styles.css#L409-L428))

**Grid Patterns:**
Most sections use `repeat(auto-fit, minmax(Xpx, 1fr))` for responsive grids where X varies by component:
- Capabilities: 300px ([styles.css:290](styles.css#L290))
- Portfolio items: 350px ([styles.css:974](styles.css#L974))
- Service cards: 300px ([styles.css:712](styles.css#L712))

### Cumulative Layout Shift (CLS) Prevention
Several measures are in place to prevent layout shifts:
- Font fallback metrics defined ([styles.css:9-16](styles.css#L9-L16))
- Stats on CV page have `opacity: 1` initially to prevent flash ([styles.css:1870-1872](styles.css#L1870-L1872))
- Images have explicit width/height attributes
- `will-change` used sparingly on navbar ([styles.css:48](styles.css#L48))
- Min-height constraints on animated elements

## Common Modification Patterns

### Adding a New Section
1. Add HTML section with class matching component type (e.g., `.capabilities`, `.portfolio-section`)
2. Use `.container` for consistent max-width
3. Add `.section-title` for header with auto-generated underline
4. Create grid with appropriate `minmax()` value for cards
5. If cards should animate on scroll, add them to the observer in [script.js:68](script.js#L68)

### Modifying Colors/Branding
All brand colors are defined inline in CSS (no CSS variables used). Key locations:
- Gradient: Search for `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Text colors: `#2d3748`, `#4a5568`, `#64748b`
- Background sections: `#f8fafc`

### Adding New Navigation Links
1. Add `<li class="nav-item">` to `.nav-menu` in each HTML file
2. Add `class="active"` to the link matching current page
3. Update footer navigation if applicable

### Form Integration
The contact form requires backend integration:
- Form submit handler at [script.js:99-131](script.js#L99-L131)
- Replace `showNotification()` call with actual API request
- FormData is already collected and validated
- Consider using Formspree, Netlify Forms, or custom backend

## Design Principles

**Visual Hierarchy:**
- Large hero sections (100vh min-height)
- Alternating white and `#f8fafc` section backgrounds
- Consistent padding (100px vertical for sections)

**Interactivity:**
- Hover states on all clickable elements (cards, buttons, links)
- Transform + box-shadow transitions (typically `0.3s ease`)
- Cards lift on hover: `translateY(-10px)` with increased shadow

**Typography:**
- Hero names: 4rem (scales down on mobile to 2.5rem)
- Section titles: 2.5rem
- Body text: 1rem with 1.6-1.7 line-height for readability

## Browser Support
Modern browsers only:
- Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- Relies on ES6 features (arrow functions, const/let, template literals)
- Uses IntersectionObserver API (not IE11 compatible)

## Deployment

This is a static site requiring no build step. Simply upload all files to any static hosting:

**GitHub Pages:**
1. Push to GitHub repository
2. Settings > Pages > Select branch
3. Site will be at `https://username.github.io/repository-name`

**Netlify/Vercel:**
- Drag and drop the entire folder
- No build command needed

**Traditional Hosting:**
- Upload all files via FTP
- Ensure index.html is in root directory

## Known Issues & Limitations

1. Contact form is currently non-functional (shows mock success notification)
2. No backend/database - purely static content
3. No build process means no minification (acceptable for small site)
4. Some duplicate CSS for service cards due to multiple page versions
5. Mobile menu animation could be smoother with transform instead of left property

## Active Technologies
- HTML5, CSS3, JavaScript ES6+ (no build process) (003-solutions-page-redesign)
- N/A (static content, no backend) (003-solutions-page-redesign)
- HTML5, CSS3, JavaScript ES6+ (vanilla, no build process) + None (static site with CDN resources: Font Awesome 6.0.0, Google Fonts Inter) (001-mobile-ux-improvements)

## Recent Changes
- 001-mobile-ux-improvements: Optimized CV page mobile UX (single-column skills, 44px+ touch targets, 1.6 line-height, simplified timeline, tap feedback)
- 003-solutions-page-redesign: Added HTML5, CSS3, JavaScript ES6+ (no build process)
