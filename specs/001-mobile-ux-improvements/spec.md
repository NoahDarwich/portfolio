# Feature Specification: Mobile UX Improvements

**Feature Branch**: `001-mobile-ux-improvements`
**Created**: 2025-12-04
**Status**: Draft
**Input**: User description: "the mobile view of the website is not user friendly, escpissially the CV page and the sections there. you need research and plan a better display solution for the mobile view only."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - CV Experience Section Browsing (Priority: P1)

A mobile user visiting the CV page wants to easily browse through professional experience entries on their phone without struggling with tiny text, cramped layouts, or confusing interactive elements that don't work well on touch devices.

**Why this priority**: The CV page is a critical conversion point where potential clients/employers evaluate qualifications. Poor mobile UX directly impacts hiring and business opportunities. This is the most commonly reported pain point.

**Independent Test**: Can be fully tested by opening portfolio.html on a mobile device (or mobile viewport), tapping through experience section cards, reading content, and verifying all text is readable without zooming, all interactive elements are touch-friendly, and the timeline visualization is understandable.

**Acceptance Scenarios**:

1. **Given** a user opens the CV page on a mobile device (viewport width < 768px), **When** the Experience section loads by default, **Then** all position titles, dates, and responsibilities are readable without horizontal scrolling or zooming
2. **Given** a user views the timeline on mobile, **When** they see multiple positions under one organization, **Then** the hierarchy and progression are visually clear with adequate spacing between positions
3. **Given** a user taps on an expandable position card, **When** the details expand, **Then** the expanded content doesn't cause layout shifts or overlap with other elements
4. **Given** a user reads responsibilities within a position card, **When** viewing a bulleted list, **Then** bullets don't wrap awkwardly and text has sufficient line-height for comfortable reading

---

### User Story 2 - CV Navigation Usability (Priority: P2)

A mobile user needs to quickly switch between Experience, Skills, and Education sections using the CV navigation buttons without dealing with tiny tap targets or confusing layouts.

**Why this priority**: After experience browsing (P1), navigation between sections is the second most frequent user action. Poor navigation creates friction and increases bounce rates.

**Independent Test**: Can be fully tested by loading the CV page on mobile, tapping each navigation button (Experience, Skills, Education, Download), and verifying all buttons are easily tappable (minimum 44x44px touch target), clearly labeled, and provide visual feedback on tap.

**Acceptance Scenarios**:

1. **Given** a user views the CV page on mobile, **When** they see the navigation section, **Then** all four buttons (Experience, Skills, Education, Download) are displayed in a 2x2 grid with adequate spacing (minimum 10px gaps)
2. **Given** a user taps a navigation button, **When** the button is pressed, **Then** visual feedback is immediate (color change, subtle transform) and the corresponding section loads smoothly
3. **Given** a user has small hands or uses one-handed mode, **When** they try to tap navigation buttons, **Then** all tap targets are at least 44x44px (iOS/Android accessibility guidelines)
4. **Given** a user taps the Download button, **When** the action completes, **Then** the CV file downloads without navigation confusion

---

### User Story 3 - Skills Section Readability (Priority: P3)

A mobile user wants to quickly scan technical skills across different categories without dealing with a cramped multi-column layout that's hard to parse on a small screen.

**Why this priority**: While important for technical evaluation, skills are typically scanned rather than read in depth. This is lower priority than experience browsing and navigation.

**Independent Test**: Can be fully tested by navigating to the Skills section on mobile, scrolling through all skill categories, and verifying each category is displayed in a single column with clear separation, skill tags are readable and wrap properly, and category headers are prominent.

**Acceptance Scenarios**:

1. **Given** a user views the Skills section on mobile, **When** the grid loads, **Then** skill categories are displayed in a single column (not 2 columns) with 30px gaps between categories
2. **Given** a user reads skill tags within a category, **When** viewing the tags, **Then** text is at least 0.85rem with adequate padding (6px 12px) and tags wrap to new lines without breaking words
3. **Given** a user scrolls through all 6 skill categories, **When** reading category headers, **Then** icons and titles are clearly visible and distinguishable at a glance
4. **Given** a user with vision impairment increases font size, **When** zooming to 200%, **Then** skill tags and categories remain readable and usable without horizontal scrolling

---

### User Story 4 - Interactive Timeline Touch Targets (Priority: P4)

A mobile user exploring the CV timeline wants to tap on expandable position cards and see skill breakdowns without dealing with hover-based interactions that don't work on touch devices.

**Why this priority**: This enhances the experience after the core browsing (P1) is functional. It's a nice-to-have that improves engagement but isn't critical for basic CV consumption.

**Independent Test**: Can be fully tested by opening the Experience section on mobile, tapping position cards that have the `timeline-interactive` class, observing the expand/collapse behavior, and verifying skill bars display correctly within expanded cards.

**Acceptance Scenarios**:

1. **Given** a user taps an interactive position card, **When** the card expands, **Then** the expansion is smooth (CSS transition) and doesn't shift surrounding content unexpectedly
2. **Given** a user views skill bars within an expanded position, **When** the skills section displays, **Then** skill names and bars stack vertically with each bar clearly labeled and percentage visible
3. **Given** a user taps an already-expanded card, **When** they tap again, **Then** the card collapses smoothly back to summary view
4. **Given** a user scrolls past multiple position cards, **When** observing hover indicators (desktop-only), **Then** these indicators are hidden on mobile to avoid confusion

---

### User Story 5 - Education Section Mobile Layout (Priority: P5)

A mobile user wants to read education and training history with clear date ranges and institution names without dealing with timeline visualizations that are too complex for small screens.

**Why this priority**: Education is typically the least-viewed section on a CV (after experience and skills). Improvements here are valuable but have the lowest impact on user decisions.

**Independent Test**: Can be fully tested by navigating to the Education section on mobile, scrolling through all education entries, and verifying dates, institutions, and descriptions are clearly readable with appropriate spacing.

**Acceptance Scenarios**:

1. **Given** a user views the Education section on mobile, **When** the timeline loads, **Then** the timeline bar is simplified (3px width, 0.2 opacity) to reduce visual clutter
2. **Given** a user reads education entries, **When** viewing date badges and locations, **Then** metadata is stacked vertically (flex-direction: column) with 6px gaps for better readability
3. **Given** a user views multiple education entries, **When** scrolling through the list, **Then** adequate vertical spacing (20-30px) separates entries for visual clarity
4. **Given** a user with a small phone (< 480px width), **When** viewing dates and locations, **Then** font size is reduced to 0.85rem but remains readable

---

### Edge Cases

- **Very small screens (< 375px)**: How does the CV navigation 2x2 grid handle extremely narrow viewports like iPhone SE (1st gen)? Does text truncate or wrap?
- **Landscape mode on phones**: When a user rotates to landscape, should the CV navigation remain 2x2 or switch to horizontal layout?
- **Touch precision**: What happens when a user accidentally taps between two navigation buttons in the 10px gap? Should buttons have larger tap areas with negative margin?
- **Zoomed view**: When a user zooms to 200% for accessibility, do interactive timeline cards still expand/collapse properly?
- **Slow connections**: If skill bars have animations, how do they behave when CSS/JS loads slowly on mobile networks?
- **Multiple rapid taps**: What happens if a user rapidly taps an expandable position card before the animation completes?
- **Long position titles**: How do position titles that exceed available width handle wrapping on very small screens (e.g., "Senior Research Assistant — American University of Beirut")?
- **Empty sections**: If a section like Education has very few entries, does the mobile layout still look balanced and not overly sparse?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: CV page MUST display Experience section by default on mobile (already implemented, verify consistency)
- **FR-002**: CV navigation MUST use a 2x2 grid layout on mobile devices (< 768px) with 10-12px gaps between buttons
- **FR-003**: All navigation buttons MUST have minimum touch target size of 44x44px (iOS/Android accessibility standard)
- **FR-004**: Skills section MUST display skill categories in a single-column layout on mobile (< 768px)
- **FR-005**: Timeline items MUST stack vertically with simplified visual indicators (3px width timeline bars at 0.2 opacity)
- **FR-006**: Position titles MUST be at least 1rem font size on mobile for readability
- **FR-007**: Interactive position cards MUST expand/collapse on tap without relying on hover effects
- **FR-008**: Skill tags MUST have minimum padding of 6px 12px and font size of 0.85rem for touch-friendly interaction
- **FR-009**: Timeline metadata (dates, locations) MUST stack vertically on mobile (< 768px) with 6px gaps
- **FR-010**: All text content MUST remain readable without horizontal scrolling on viewports as small as 320px
- **FR-011**: Buttons MUST provide immediate visual feedback on tap (color change, transform, or ripple effect)
- **FR-012**: Timeline duration bars MUST be visually de-emphasized on mobile (reduced opacity, no hover animations)
- **FR-013**: Skill category grid MUST collapse from 2 columns to 1 column on mobile (< 768px)
- **FR-014**: Position cards MUST have adequate vertical spacing (16-20px gaps) to prevent accidental taps
- **FR-015**: Download button MUST maintain consistent sizing and styling with other CV navigation buttons on mobile
- **FR-016**: All hover-dependent UI elements (hover indicators, tooltips) MUST be hidden or adapted for touch on mobile
- **FR-017**: Text line-height MUST be at least 1.6 for comfortable reading on small screens
- **FR-018**: Timeline date badges MUST have reduced font size (0.85rem) but remain readable on mobile

### Key Entities *(include if feature involves data)*

- **Viewport Breakpoints**: Critical screen width thresholds (768px for tablet/mobile, 480px for small phones) that trigger layout changes
- **Touch Target**: Interactive UI element with minimum dimensions (44x44px) for reliable touch input
- **CV Section**: Distinct content area (Experience, Skills, Education) accessible via navigation
- **Timeline Item**: Individual employment or education entry with dates, organization, and details
- **Position Card**: Interactive expandable container showing job title, responsibilities, and skills
- **Skill Category**: Grouped collection of related technical or domain skills with header and tags
- **Navigation Button**: Touch-friendly button in CV navigation grid (Experience, Skills, Education, Download)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Mobile users can read all CV content without horizontal scrolling on devices as small as 320px width
- **SC-002**: All navigation buttons meet minimum 44x44px touch target size (measured via browser dev tools)
- **SC-003**: CV navigation buttons receive visual feedback within 100ms of tap (measured via performance profiling)
- **SC-004**: Users can successfully navigate between all CV sections (Experience, Skills, Education) within 3 taps maximum
- **SC-005**: Timeline position cards expand/collapse smoothly with transitions under 300ms
- **SC-006**: Text readability score improves to minimum 1.6 line-height across all mobile sections
- **SC-007**: Mobile bounce rate on CV page decreases by at least 20% (measured via analytics)
- **SC-008**: Average time on CV page increases by at least 30% on mobile devices (indicating improved engagement)
- **SC-009**: Zero instances of horizontal scrolling required for content consumption on 375px viewport
- **SC-010**: All interactive elements (buttons, cards, links) are tappable with 95%+ success rate in user testing
- **SC-011**: Mobile CV page loads and becomes interactive within 3 seconds on 3G connection
- **SC-012**: Accessibility audit shows zero critical issues for touch targets and text sizing on mobile

## Assumptions *(mandatory)*

1. **Device Coverage**: Mobile improvements target viewport widths from 320px (smallest modern phones) to 768px (tablet threshold), covering ~95% of mobile devices
2. **Browser Support**: Modern mobile browsers (iOS Safari 12+, Chrome Mobile 60+, Samsung Internet 8+) with CSS Grid and Flexbox support
3. **Existing Functionality**: Current desktop experience remains unchanged; all modifications are scoped to mobile-only media queries
4. **Touch-First Design**: Mobile users interact exclusively via touch (no mouse hover), requiring tap-based interactions for all functionality
5. **No Framework Changes**: Improvements use vanilla CSS/JS consistent with existing codebase architecture (no frameworks introduced)
6. **Progressive Enhancement**: All content remains accessible even if JavaScript fails to load (navigation, sections, text)
7. **Performance Budget**: Mobile CSS additions do not exceed 10KB gzipped to maintain fast load times
8. **Analytics Availability**: Website has analytics tracking (Google Analytics or similar) to measure success criteria like bounce rate and time on page
9. **Timeline Data Structure**: CV timeline data is already structured in cv-data.js with position IDs, dates, and responsibilities
10. **Download Functionality**: CV download link already points to valid PDF file (NoahDarwich_CV.pdf or cv_hq.pdf)

## Dependencies *(mandatory)*

### Technical Dependencies

- **Existing Files**: Modifications depend on portfolio.html, styles.css, script.js, and cv-data.js remaining in current structure
- **CSS Media Queries**: Implementation relies on existing @media (max-width: 768px) and @media (max-width: 480px) breakpoints
- **JavaScript Event Handling**: Touch interactions depend on existing event delegation and click handlers in script.js
- **Font Awesome**: Icons in navigation and timeline depend on Font Awesome 6.0.0 CDN availability
- **Google Fonts**: Inter font family must remain loaded for consistent typography
- **Browser Features**: CSS Grid, Flexbox, CSS Transitions, and Touch Events API must be supported

### Design Dependencies

- **Color Scheme**: Mobile improvements must maintain existing gradient (#667eea to #764ba2) and text colors (#2d3748, #4a5568)
- **Spacing System**: Mobile layouts should align with existing spacing patterns (multiples of 4-8px)
- **Border Radius**: Maintain consistent 15-20px border radius on cards and buttons for visual cohesion
- **Box Shadows**: Use existing shadow definitions (0 10px 30px rgba(0,0,0,0.1)) adapted for mobile scale

## Constraints *(mandatory)*

### Technical Constraints

- **No Breaking Changes**: Desktop and tablet views (> 768px) must remain pixel-perfect identical to current implementation
- **CSS-Only Preferred**: Layout improvements should use CSS media queries; minimize JavaScript changes to reduce complexity
- **No New Dependencies**: Cannot introduce new libraries, frameworks, or external dependencies
- **File Size Limit**: Total CSS additions must not exceed 10KB to maintain mobile performance
- **Backwards Compatibility**: Must work on mobile browsers released in last 3 years (iOS 12+, Android 8+)

### Design Constraints

- **Brand Consistency**: All color, typography, and spacing changes must align with existing design system
- **Accessibility Standards**: Must meet WCAG 2.1 Level AA for touch targets (44x44px), color contrast (4.5:1), and text sizing
- **Content Preservation**: Cannot remove or significantly truncate existing CV content (all positions, skills, education must remain)
- **Visual Hierarchy**: Mobile layouts must preserve the importance hierarchy (Experience > Skills > Education)

### User Experience Constraints

- **No Horizontal Scroll**: Absolute requirement that no horizontal scrolling occurs on any viewport 320px or wider
- **Single-Hand Usability**: Navigation and primary interactions should be reachable with one-handed phone use
- **Instant Feedback**: All tap interactions must provide visual feedback within 100ms for perceived responsiveness
- **Graceful Degradation**: If JavaScript fails, CV content and navigation must remain accessible via standard HTML links

## Out of Scope *(mandatory)*

The following are explicitly **not** included in this specification:

1. **Homepage Mobile Improvements**: This spec focuses exclusively on the CV page (portfolio.html); homepage, contact, and solutions pages are separate features
2. **Content Changes**: No modifications to CV text, job descriptions, skills lists, or education details—purely layout/UX improvements
3. **New Features**: No new functionality (e.g., search, filtering, sorting) added to CV page
4. **Desktop Optimization**: No changes to desktop layouts, animations, or interactions (viewport > 768px)
5. **Performance Optimization**: While maintaining performance, this is not a performance-focused initiative (no image optimization, lazy loading, etc.)
6. **Cross-Browser Testing**: Focused on modern mobile browsers; no IE11 or legacy browser support
7. **Internationalization**: No changes to support multiple languages or RTL layouts
8. **Dark Mode**: No mobile-specific dark mode implementation
9. **Offline Support**: No Progressive Web App features or service workers
10. **Analytics Implementation**: Assumes analytics already exist; does not include setting up tracking
11. **A/B Testing**: No implementation of variant testing or feature flags
12. **Mobile Navigation Menu**: The global hamburger menu is separate; only CV section navigation is in scope

## Related Context *(optional)*

### Current Mobile Issues Identified

Based on analysis of existing mobile styles (styles.css lines 788-901, 2691-2953):

1. **Skills Grid**: Currently uses 2-column grid on mobile (line 3002: `grid-template-columns: repeat(2, 1fr)`), causing cramped category cards on small screens
2. **Timeline Complexity**: Desktop timeline visualization with duration bars, markers, and hover effects creates visual noise on mobile
3. **Interactive Cards**: Hover-dependent position card expansion (timeline-interactive class) doesn't translate well to touch devices
4. **Touch Targets**: Some navigation elements may be below 44x44px minimum, especially on very small screens (< 375px)
5. **Text Density**: Responsibilities lists and position descriptions may have insufficient line-height for comfortable mobile reading
6. **Visual Hierarchy**: Timeline date badges and metadata compete for attention with position titles on constrained mobile layouts

### Mobile-First Best Practices

- **Progressive Disclosure**: Show essential info by default; hide secondary details behind taps/expands
- **Thumb-Friendly Zones**: Place primary actions in bottom 1/3 of screen for one-handed use
- **Chunking**: Break long lists into scannable sections with clear visual separation
- **Feedback Loops**: Every touch interaction should have immediate visual/haptic response
- **Vertical Rhythm**: Maintain consistent vertical spacing (8px baseline grid) for visual comfort

### Existing Mobile Implementation Strengths

- CV navigation already uses 2x2 grid layout on mobile (lines 2696-2704)
- Hover effects already disabled for timeline items on mobile (lines 882-900)
- Timeline metadata already stacks vertically on mobile (lines 836-840)
- Font sizes appropriately reduced for mobile viewports (0.85-0.95rem range)
- Position progression blocks already have mobile-specific padding adjustments (lines 863-879)
