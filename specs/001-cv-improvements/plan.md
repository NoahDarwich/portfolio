# CV Page Improvements - Implementation Plan

## Tech Stack

**Frontend:**
- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, Transforms, Animations)
- JavaScript ES6+ (vanilla, no frameworks)

**Key Browser APIs:**
- Intersection Observer API (scroll animations)
- requestAnimationFrame (smooth number animations)
- DOMContentLoaded event

**Existing Dependencies:**
- Font Awesome 6.x (icons)
- Google Fonts: Inter family
- No build tools or bundlers

## Project Structure

```
/home/noahdarwich/code/portfolio/
├── portfolio.html          # Main CV page (MODIFY)
├── styles.css              # Global styles (MODIFY)
├── script.js               # Global JavaScript (MODIFY)
├── cv-data.js              # NEW: Position data structure
└── NoahDarwich_CV.pdf      # Existing PDF download (unchanged)
```

## Data Structure

### cv-data.js Structure
New file containing structured position data:

```javascript
const cvPositions = {
    'position-id': {
        title: String,
        organization: String,
        location: String,
        dates: String,
        responsibilities: Array<String>,
        skills: Array<{
            name: String,
            percentage: Number,
            category: 'technical'|'management'|'research'|'communication'|'process'|'domain'
        }>
    }
}

const skillCategoryColors = {
    technical: '#667eea',
    management: '#764ba2',
    research: '#4ecdc4',
    communication: '#f6ad55',
    process: '#48bb78',
    domain: '#ed64a6'
}
```

**Positions to Include:**
- rockwool-2024: Research Data Scientist at Rockwool Foundation
- freelance-yale-2025: Yale University Jordan Protest Events
- freelance-oxford-2025: Oxford University Exploitation Research
- georgetown-pm-2023: Project Manager at Georgetown
- georgetown-sra-2021: Senior Research Assistant at Georgetown
- lewagon-lecturer-2023: Data Science Lecturer at Le Wagon
- lewagon-ta-2022: Senior Teaching Assistant at Le Wagon
- princeton-ra-2018: Research Assistant at Princeton (dataset construction)
- princeton-fieldwork-2019: Research Assistant at Princeton (fieldwork)
- aub-ra-2019: Research Assistant at AUB

## Implementation Phases

### Phase 0: Data Preparation
**File:** cv-data.js (NEW)
- Create JavaScript object with all 10 position entries
- Extract responsibilities from cv.txt and structure as arrays
- Map skills to categories with percentages
- Define color palette for skill categories

### Phase 1: Hero Section Redesign
**Files:** portfolio.html (lines 48-87), styles.css (lines 644-709), script.js

**HTML Changes:**
- Replace `.cv-intro` section with `.cv-hero`
- Add `.cv-stats-grid` with 5 stat cards
- Add `.cv-institutions` with tagline and institution badges
- Update `.cv-nav` to remove Languages button

**CSS Changes:**
- Dark gradient background with pattern overlay
- Stat card glassmorphism styling (backdrop-blur)
- Responsive grid: 5→3→2→1 columns
- Hover animations on stat cards
- Gradient text effect for stat numbers

**JavaScript Changes:**
- Trigger `animateStats()` on DOMContentLoaded
- Reuse existing `animateNumber()` function (script.js:298-349)
- Animate all `.cv-stat-number` elements from 0 to data-target

### Phase 1.5: Interactive Position Cards
**Files:** portfolio.html (lines 97-261), styles.css, script.js, cv-data.js

**HTML Changes:**
- Add `data-position-id` attribute to each `.timeline-item`
- Add `.timeline-interactive` class
- Add `.hover-indicator` element
- Add `.timeline-details` container with:
  - `.responsibilities-section` (populated via JS)
  - `.skills-breakdown-section` (populated via JS)
    - `.skills-stacked-bar` (compact overview)
    - `.skills-individual-bars` (detailed breakdown)

**CSS Changes:**
- Hover state: max-height transition for `.timeline-details`
- Card lift animation (translateY, box-shadow)
- Skill bar styling (stacked segments, individual bars)
- Shimmer animation on skill bar fills
- Mobile tap-to-expand styles

**JavaScript Changes:**
- `initializeInteractiveTimeline()` function
- `populateTimelineDetails(item, data)` function
- Load cv-data.js and map positions to timeline items
- Create stacked bar HTML from skills array
- Create individual skill bars with animation
- Intersection Observer to animate bars on scroll
- Mobile: click event to toggle `.expanded` class

### Phase 2: Auto-Load Experience Section
**File:** script.js (line 406)

**Changes:**
- Uncomment existing `showTab('experience')` call
- Ensure call happens after DOMContentLoaded
- Verify smooth transition with no flash

### Phase 3: Merge Languages into Skills
**Files:** portfolio.html (lines 264-314, 382-404, 78-80), styles.css

**HTML Changes:**
- Remove standalone Languages section (lines 382-404)
- Remove Languages navigation button (lines 78-80)
- Add Languages category to Skills section:
  - Category header with globe icon
  - 4 language tags with name + proficiency level structure

**CSS Changes:**
- `.language-tag` special styling (vertical flex, centered)
- `.language-name` and `.language-level` sub-elements
- Ensure consistent spacing in 2-column grid

### Phase 4: Enhanced Skills Grid
**Files:** portfolio.html (lines 264-314), styles.css

**HTML Changes:**
- Update section title to "Technical Skills & Expertise"
- Add icons to all category headers
- Expand skill tags in each category:
  - Programming: Add Git, VS Code
  - ML/AI: Add PyTorch, NLP, LLMs
  - Data Analysis: Add Plotly, Jupyter
  - Research/PM: Add more management skills
  - Domain Expertise: Add more domain areas

**CSS Changes:**
- Update `.skills-grid-enhanced` to 2-column explicit grid
- Increase category gap to 40px
- Increase skill tag font size to 0.95rem
- Add `.skill-category-header` styles with icon positioning

### Phase 5: Testing & Refinement
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS Safari, Android Chrome)
- Performance profiling (Lighthouse)
- Accessibility audit (ARIA labels, keyboard navigation)
- Visual regression testing at all breakpoints

## Implementation Strategy

**MVP Approach:**
- Core: User Stories 1, 2, 5 (Hero, Auto-load, Languages merge) - **MUST HAVE**
- Enhancement: User Stories 3, 4 (Interactive cards, skill viz) - **SHOULD HAVE**
- Polish: User Story 6 (Enhanced grid) - **NICE TO HAVE**

**Incremental Delivery:**
1. Deploy MVP first (hero + auto-load + languages merge)
2. Test in production with real users
3. Add interactive features in follow-up release
4. Iterate based on user feedback

**Risk Mitigation:**
- Test stat animation on low-end devices before deploying
- Ensure hero height doesn't push content too far down
- Validate skill data accuracy against cv.txt
- Create fallback for browsers without Intersection Observer

## Browser Compatibility

**Target Support:**
- Chrome 60+ ✅
- Firefox 55+ ✅
- Safari 12+ ✅
- Edge 79+ ✅

**Not Supported:**
- IE11 (uses IntersectionObserver, ES6 features)

## Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s
- **Animation Frame Rate:** 60fps

## Accessibility Considerations

- ARIA labels for stat cards: `aria-label="6 years of experience"`
- Keyboard navigation for timeline cards (tab + enter to expand)
- Focus states on all interactive elements
- Reduced motion media query for animation preferences
- Color contrast ratio 4.5:1 for all text
- Screen reader announcements for dynamic content

## Deployment

No build step required. Direct file upload:
1. Update portfolio.html, styles.css, script.js
2. Upload new cv-data.js
3. Test on staging environment
4. Deploy to production (GitHub Pages, Netlify, etc.)

## Rollback Plan

Keep backup copies of:
- portfolio.html (original CV intro section)
- styles.css (original CV styles)
- script.js (original CV tab logic)

If issues arise, restore original files and redeploy.
