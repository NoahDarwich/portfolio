# CV Page Improvements - Feature Specification

## Feature Overview

Redesign the CV page (portfolio.html) to create a more engaging, modern user experience with a creative hero section, auto-loaded experience content, interactive position cards, and consolidated skills organization.

## User Stories

### User Story 1 [P1] - Creative Hero Section with Statistics Dashboard
**As a** portfolio visitor
**I want to** immediately see impressive statistics and credentials when landing on the CV page
**So that** I can quickly assess qualifications and experience level

**Acceptance Criteria:**
- Hero section displays name, title, and professional tagline
- 5 key statistics displayed in animated cards (Years Experience, Top Universities, Event Records, Languages, Major Projects)
- Statistics animate from 0 to target value on page load
- Institution badges displayed (Yale, Oxford, Georgetown, Princeton, Rockwool)
- Dark gradient background with subtle pattern overlay
- Responsive design (5 columns → 3 → 2 → 1 based on screen size)
- Navigation buttons positioned below hero (Experience, Skills, Education, Download)

**Test Criteria:**
- Load portfolio.html and verify hero section displays with all 5 stat cards
- Verify stat numbers animate from 0 to target within 2 seconds
- Test responsive breakpoints: 1200px+ (5 cols), 768-1199px (3 cols), <768px (2 cols), <480px (1 col)
- Verify navigation buttons are present and clickable

### User Story 2 [P1] - Auto-Load Experience Section
**As a** portfolio visitor
**I want to** see experience content immediately without clicking
**So that** I don't land on an empty page state

**Acceptance Criteria:**
- Experience section displays automatically on page load
- No flash of empty content during load
- Smooth transition when tab loads
- Experience tab button shows active state
- Scroll position adjusted if needed

**Test Criteria:**
- Load portfolio.html and verify Experience section is visible without clicking
- Verify Experience tab has "active" class applied
- No visible flash or layout shift during load

### User Story 3 [P2] - Interactive Position Cards with Hover Details
**As a** portfolio visitor
**I want to** see detailed responsibilities and skill breakdowns for each position
**So that** I can understand the full scope of work without overwhelming initial view

**Acceptance Criteria:**
- Timeline cards show condensed view by default (title, dates, location)
- Hover indicator displays: "Hover to see details & skill breakdown"
- On hover: Card expands to show full responsibilities and skill visualization
- Card lifts with shadow on hover (translateY(-5px))
- Smooth transition animation (0.4s ease)
- Mobile: Tap to toggle expanded state instead of hover

**Test Criteria:**
- Hover over position card and verify expansion with details
- Verify hover indicator disappears when expanded
- Test mobile tap-to-expand functionality
- Verify smooth animation transitions

### User Story 4 [P2] - Visual Skill Breakdown per Position
**As a** portfolio visitor
**I want to** see visual representation of skill distribution for each role
**So that** I can quickly understand the technical composition of each position

**Acceptance Criteria:**
- Stacked horizontal bar shows skill composition at a glance
- Each skill segment color-coded by category (Technical, Management, Research, Communication, Process, Domain)
- On hover/expand: Individual skill bars with percentages displayed
- Skill bars animate when scrolling into view
- Shimmer animation on skill bar fills
- Percentage labels clearly visible
- Color palette consistent with brand gradient

**Test Criteria:**
- Verify stacked bar displays in collapsed position card view
- Expand card and verify individual skill bars display with percentages
- Verify color coding matches category (6 distinct colors)
- Test animation triggers when scrolling position into viewport

### User Story 5 [P1] - Merge Languages into Skills Section
**As a** portfolio visitor
**I want to** see languages as part of the skills section
**So that** navigation is simplified and information is consolidated

**Acceptance Criteria:**
- Languages section removed from standalone navigation
- Languages added as 6th category in Skills section
- Languages display with proficiency levels (Native, Fluent, Conversational)
- Globe icon used for Languages category header
- Visual styling consistent with other skill categories
- Navigation updated to 3 buttons (Experience, Skills, Education)

**Test Criteria:**
- Verify Languages navigation button removed
- Navigate to Skills section and verify Languages category displays
- Verify 4 languages with proficiency levels: Arabic (Native), English (Fluent), German (Fluent), Turkish (Conversational)
- Verify consistent visual styling with other categories

### User Story 6 [P2] - Enhanced Skills Grid Organization
**As a** portfolio visitor
**I want to** see skills organized in a professional, visually balanced grid
**So that** I can quickly scan technical capabilities

**Acceptance Criteria:**
- Skills organized into 6 categories (Programming, ML/AI, Data Analysis, Research/PM, Domain Expertise, Languages)
- 2-column grid layout on desktop, 1-column on mobile
- Category headers with icons
- Skill tags slightly larger (0.95rem) for better readability
- Increased spacing between categories (40px gap)
- Languages category uses special layout showing name + proficiency level

**Test Criteria:**
- Verify 6 skill categories display in 2-column grid (desktop)
- Test mobile responsive layout (1 column)
- Verify all category headers have appropriate icons
- Count skill tags in each category and verify completeness

## Technical Constraints

- No build process or frameworks - vanilla HTML/CSS/JavaScript only
- Must maintain existing design system (gradient colors, typography, card layouts)
- All animations must use GPU-accelerated properties (transform, opacity)
- Intersection Observer for scroll-triggered animations
- Must work in Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- No console errors
- Performance: Page load < 2s, smooth animations (60fps)

## Out of Scope

- Backend integration
- PDF generation improvements
- Print stylesheet optimization
- Dark mode toggle
- Skill proficiency bars (reserved for future)
- Filterable/searchable skills
- Timeline filtering by technology

## Dependencies

- Font Awesome (already included)
- Google Fonts Inter family (already included)
- Existing script.js animation utilities (throttle, animateNumber, IntersectionObserver)
