---
description: "Task list for CV page improvements implementation"
---

# Tasks: CV Page Improvements

**Input**: Design documents from `/specs/001-cv-improvements/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: No automated tests requested for this static site feature. Manual browser testing will be performed.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

This is a static site with files at repository root:
- `/home/noahdarwich/code/portfolio/portfolio.html` - CV page
- `/home/noahdarwich/code/portfolio/styles.css` - Global styles
- `/home/noahdarwich/code/portfolio/script.js` - Global JavaScript
- `/home/noahdarwich/code/portfolio/cv-data.js` - NEW: Position data

---

## Phase 1: Setup (Data Preparation)

**Purpose**: Create structured data for CV positions before implementing UI changes

- [X] T001 Create cv-data.js file at /home/noahdarwich/code/portfolio/cv-data.js
- [X] T002 [P] Define skillCategoryColors object in cv-data.js with 6 color mappings (technical, management, research, communication, process, domain)
- [X] T003 [P] Add Rockwool Foundation position data to cvPositions object in cv-data.js
- [X] T004 [P] Add Yale University freelance position data to cvPositions object in cv-data.js
- [X] T005 [P] Add Oxford University freelance position data to cvPositions object in cv-data.js
- [X] T006 [P] Add Georgetown Project Manager position data to cvPositions object in cv-data.js
- [X] T007 [P] Add Georgetown Senior Research Assistant position data to cvPositions object in cv-data.js
- [X] T008 [P] Add Le Wagon Data Science Lecturer position data to cvPositions object in cv-data.js
- [X] T009 [P] Add Le Wagon Senior Teaching Assistant position data to cvPositions object in cv-data.js
- [X] T010 [P] Add Princeton Research Assistant (dataset) position data to cvPositions object in cv-data.js
- [X] T011 [P] Add Princeton Research Assistant (fieldwork) position data to cvPositions object in cv-data.js
- [X] T012 [P] Add AUB Research Assistant position data to cvPositions object in cv-data.js

**Checkpoint**: cv-data.js complete with all 10 positions and skill data

---

## Phase 2: Foundational (No blocking prerequisites for this feature)

**Purpose**: No foundational infrastructure needed - existing site architecture supports all changes

**Note**: This phase is empty because we're modifying an existing static site with all dependencies already in place (Font Awesome, Google Fonts, existing JS utilities).

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Creative Hero Section with Statistics Dashboard (Priority: P1) 🎯 MVP

**Goal**: Replace generic CV intro with engaging statistics-driven hero section showing years of experience, top universities, event records, languages, and major projects.

**Independent Test**: Load portfolio.html in browser, verify hero section displays with 5 animated stat cards, institution badges, and navigation buttons. Test responsive layouts at 1200px, 768px, 480px breakpoints.

### Implementation for User Story 1

- [X] T013 [US1] Replace CV intro HTML section (lines 48-87) with new cv-hero structure in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T014 [US1] Add cv-hero-content div with hero title and subtitle in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T015 [US1] Create cv-stats-grid with 5 stat cards in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T016 [US1] Add data-target attributes to stat numbers (6, 5, 100000, 4, 3) in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T017 [US1] Add cv-institutions section with tagline and 5 institution badges in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T018 [US1] Remove Languages button from cv-nav in /home/noahdarwich/code/portfolio/portfolio.html (leave Experience, Skills, Education, Download)
- [X] T019 [US1] Add cv-hero base styles (dark gradient background, padding, overflow) in /home/noahdarwich/code/portfolio/styles.css
- [X] T020 [P] [US1] Add cv-hero pattern overlay pseudo-element in /home/noahdarwich/code/portfolio/styles.css
- [X] T021 [P] [US1] Add cv-hero-title and cv-hero-subtitle styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T022 [P] [US1] Add cv-stats-grid responsive grid styles (5→3→2→1 columns) in /home/noahdarwich/code/portfolio/styles.css
- [X] T023 [P] [US1] Add cv-stat-card glassmorphism styles with hover effects in /home/noahdarwich/code/portfolio/styles.css
- [X] T024 [P] [US1] Add cv-stat-number gradient text effect in /home/noahdarwich/code/portfolio/styles.css
- [X] T025 [P] [US1] Add cv-stat-label text styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T026 [P] [US1] Add cv-institutions and cv-tagline styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T027 [P] [US1] Add institution-badge styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T028 [P] [US1] Add responsive breakpoints for hero section (1024px, 768px, 480px) in /home/noahdarwich/code/portfolio/styles.css
- [X] T029 [US1] Create animateStats function in /home/noahdarwich/code/portfolio/script.js
- [X] T030 [US1] Add stat counter animation trigger on DOMContentLoaded in /home/noahdarwich/code/portfolio/script.js
- [X] T031 [US1] Integrate with existing animateNumber utility (lines 298-349) in /home/noahdarwich/code/portfolio/script.js

**Checkpoint**: Hero section complete with animated stats, responsive design, and institution badges

---

## Phase 4: User Story 2 - Auto-Load Experience Section (Priority: P1) 🎯 MVP

**Goal**: Display Experience section automatically on page load instead of empty state, eliminating the need for user to click.

**Independent Test**: Load portfolio.html in browser, verify Experience section is visible immediately without clicking, Experience tab shows active state, no flash or layout shift.

### Implementation for User Story 2

- [X] T032 [US2] Locate CV tab switching logic in /home/noahdarwich/code/portfolio/script.js around line 406
- [X] T033 [US2] Uncomment and ensure showTab('experience') is called on DOMContentLoaded in /home/noahdarwich/code/portfolio/script.js
- [X] T034 [US2] Verify smooth transition with no flash by testing initial opacity states in /home/noahdarwich/code/portfolio/script.js
- [X] T035 [US2] Add active class to Experience nav button by default in /home/noahdarwich/code/portfolio/portfolio.html

**Checkpoint**: Experience section auto-loads on page load with smooth transition

---

## Phase 5: User Story 5 - Merge Languages into Skills Section (Priority: P1) 🎯 MVP

**Goal**: Consolidate Languages into Skills section as 6th category, simplifying navigation from 4 buttons to 3.

**Independent Test**: Navigate to Skills section, verify Languages category displays with 4 languages (Arabic Native, English Fluent, German Fluent, Turkish Conversational), verify no standalone Languages section exists, verify navigation has only 3 buttons.

### Implementation for User Story 5

- [X] T036 [US5] Remove standalone Languages section (lines 382-404) from /home/noahdarwich/code/portfolio/portfolio.html
- [X] T037 [US5] Update Skills section title to "Technical Skills & Expertise" in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T038 [US5] Add Languages skill-category div with globe icon header in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T039 [US5] Add 4 language-tag elements with language-name and language-level spans in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T040 [US5] Set Arabic (Native), English (Fluent), German (Fluent), Turkish (Conversational) in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T041 [P] [US5] Add language-tag flex layout styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T042 [P] [US5] Add language-name and language-level typography styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T043 [US5] Verify Languages navigation button already removed in Phase 3 T018

**Checkpoint**: Languages merged into Skills section, navigation simplified to 3 buttons

---

## Phase 6: User Story 6 - Enhanced Skills Grid Organization (Priority: P2)

**Goal**: Reorganize skills into professional 2-column grid with 6 categories, icons, and expanded skill tags for better readability.

**Independent Test**: Navigate to Skills section, verify 6 categories in 2-column grid on desktop, 1-column on mobile, all category headers have icons, skill tags are readable size.

### Implementation for User Story 6

- [X] T044 [US6] Update skills section to use skills-grid-enhanced class in /home/noahdarwich/code/portfolio/portfolio.html (lines 264-314)
- [X] T045 [P] [US6] Add icon to Programming & Development category header in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T046 [P] [US6] Add icon to Machine Learning & AI category header in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T047 [P] [US6] Add icon to Data Analysis & Visualization category header in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T048 [P] [US6] Add icon to Research & Project Management category header in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T049 [P] [US6] Add icon to Domain Expertise category header in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T050 [P] [US6] Expand Programming category with Git and VS Code tags in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T051 [P] [US6] Expand ML/AI category with PyTorch, NLP, LLMs tags in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T052 [P] [US6] Expand Data Analysis category with Plotly and Jupyter tags in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T053 [P] [US6] Expand Research/PM category with Team Management and Research Design tags in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T054 [P] [US6] Expand Domain Expertise category with Political Science, Middle East Studies, Computational Social Science in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T055 [US6] Add skills-grid-enhanced 2-column grid layout in /home/noahdarwich/code/portfolio/styles.css
- [X] T056 [P] [US6] Add skill-category-header flex layout with icon positioning in /home/noahdarwich/code/portfolio/styles.css
- [X] T057 [P] [US6] Update skill-tag font size to 0.95rem and padding in /home/noahdarwich/code/portfolio/styles.css
- [X] T058 [P] [US6] Increase skills grid gap to 40px in /home/noahdarwich/code/portfolio/styles.css
- [X] T059 [P] [US6] Add icon color styling (#667eea) for category headers in /home/noahdarwich/code/portfolio/styles.css
- [X] T060 [P] [US6] Add mobile responsive breakpoint (768px) for 1-column grid in /home/noahdarwich/code/portfolio/styles.css

**Checkpoint**: Skills section has professional 6-category 2-column layout with icons and expanded tags

---

## Phase 7: User Story 3 - Interactive Position Cards with Hover Details (Priority: P2)

**Goal**: Transform timeline position cards into interactive elements that reveal detailed responsibilities on hover (tap on mobile).

**Independent Test**: Hover over any position card, verify it expands to show responsibilities list, hover indicator disappears, card lifts with shadow. Test mobile tap-to-expand.

### Implementation for User Story 3

- [X] T061 [P] [US3] Add timeline-interactive class to all timeline-item divs in /home/noahdarwich/code/portfolio/portfolio.html (lines 97-261)
- [X] T062 [P] [US3] Add data-position-id attributes to timeline items matching cv-data.js keys in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T063 [P] [US3] Add hover-indicator div with chevron icon and text to each timeline item in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T064 [P] [US3] Add timeline-details container div to each timeline item in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T065 [P] [US3] Add responsibilities-section div with empty ul.responsibilities-list in timeline-details in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T066 [US3] Add timeline-interactive cursor and transition styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T067 [P] [US3] Add hover-indicator flex layout with bounce animation in /home/noahdarwich/code/portfolio/styles.css
- [X] T068 [P] [US3] Add timeline-details max-height transition (0 to 1000px) in /home/noahdarwich/code/portfolio/styles.css
- [X] T069 [P] [US3] Add hover state to expand timeline-details in /home/noahdarwich/code/portfolio/styles.css
- [X] T070 [P] [US3] Add hover state to hide hover-indicator in /home/noahdarwich/code/portfolio/styles.css
- [X] T071 [P] [US3] Add card lift animation (translateY -5px, box-shadow) on hover in /home/noahdarwich/code/portfolio/styles.css
- [X] T072 [P] [US3] Add responsibilities-section heading and list styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T073 [P] [US3] Add custom bullet point styling for responsibilities list in /home/noahdarwich/code/portfolio/styles.css
- [X] T074 [P] [US3] Add mobile tap-to-expand styles (.expanded class) in /home/noahdarwich/code/portfolio/styles.css
- [X] T075 [US3] Include cv-data.js script tag in portfolio.html before script.js
- [X] T076 [US3] Create initializeInteractiveTimeline function in /home/noahdarwich/code/portfolio/script.js
- [X] T077 [US3] Create populateTimelineDetails function in /home/noahdarwich/code/portfolio/script.js
- [X] T078 [US3] Query all timeline-interactive elements and iterate in initializeInteractiveTimeline in /home/noahdarwich/code/portfolio/script.js
- [X] T079 [US3] Map data-position-id to cvPositions object and populate responsibilities in /home/noahdarwich/code/portfolio/script.js
- [X] T080 [US3] Add mobile click event listener to toggle expanded class in /home/noahdarwich/code/portfolio/script.js
- [X] T081 [US3] Call initializeInteractiveTimeline on DOMContentLoaded in /home/noahdarwich/code/portfolio/script.js

**Checkpoint**: Position cards expand on hover showing responsibilities, work on mobile with tap

---

## Phase 8: User Story 4 - Visual Skill Breakdown per Position (Priority: P2)

**Goal**: Add visual skill composition charts (stacked bar + individual bars) to each position card showing percentage distribution by category.

**Independent Test**: Expand any position card, verify stacked skill bar displays in collapsed view, individual skill bars with percentages display on expand, bars are color-coded by category, animations trigger on scroll.

### Implementation for User Story 4

- [X] T082 [P] [US4] Add skills-breakdown-section div to timeline-details in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T083 [P] [US4] Add skills-stacked-bar container div in skills-breakdown-section in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T084 [P] [US4] Add skills-individual-bars container div in skills-breakdown-section in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T085 [US4] Add skills-breakdown-section background and padding styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T086 [P] [US4] Add skills-stacked-bar flex layout and height styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T087 [P] [US4] Add skill-segment styles (color, text, transition) in /home/noahdarwich/code/portfolio/styles.css
- [X] T088 [P] [US4] Add skill-segment hover effect (brightness, scaleY) in /home/noahdarwich/code/portfolio/styles.css
- [X] T089 [P] [US4] Add skills-individual-bars flex column layout in /home/noahdarwich/code/portfolio/styles.css
- [X] T090 [P] [US4] Add skill-bar-item structure styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T091 [P] [US4] Add skill-bar-track and skill-bar-fill styles in /home/noahdarwich/code/portfolio/styles.css
- [X] T092 [P] [US4] Add shimmer animation keyframes for skill-bar-fill in /home/noahdarwich/code/portfolio/styles.css
- [X] T093 [P] [US4] Add skill category color classes (technical, management, research, communication, process, domain) in /home/noahdarwich/code/portfolio/styles.css
- [X] T094 [P] [US4] Add mobile responsive styles for skill bars in /home/noahdarwich/code/portfolio/styles.css
- [X] T095 [US4] Create stacked bar HTML from skills array in populateTimelineDetails in /home/noahdarwich/code/portfolio/script.js
- [X] T096 [US4] Set segment width to skill.percentage, background to category color in /home/noahdarwich/code/portfolio/script.js
- [X] T097 [US4] Add segment labels showing percentage if >= 15% in /home/noahdarwich/code/portfolio/script.js
- [X] T098 [US4] Create individual skill bars HTML from skills array in populateTimelineDetails in /home/noahdarwich/code/portfolio/script.js
- [X] T099 [US4] Set skill-bar-fill data-percentage attribute and initial width 0 in /home/noahdarwich/code/portfolio/script.js
- [X] T100 [US4] Apply category color to skill-bar-fill background in /home/noahdarwich/code/portfolio/script.js
- [X] T101 [US4] Create IntersectionObserver to animate skill bars on scroll in /home/noahdarwich/code/portfolio/script.js
- [X] T102 [US4] Set skill-bar-fill width to data-percentage when in viewport in /home/noahdarwich/code/portfolio/script.js
- [X] T103 [US4] Observe all timeline-interactive elements for scroll animations in /home/noahdarwich/code/portfolio/script.js

**Checkpoint**: Skill visualizations display in position cards with stacked and individual bars, animated on scroll

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Cross-browser testing, performance optimization, and final refinements

### Bug Fixes

- [X] T104 [BUG] Fix timeline-summary visibility - hide timeline-summary when hovering/expanded to show detailed view in /home/noahdarwich/code/portfolio/styles.css
- [X] T105 [BUG] Debug empty skills visualization boxes - investigate why skills-stacked-bar and skills-individual-bars are empty in /home/noahdarwich/code/portfolio/script.js
- [X] T106 [BUG] Verify cv-data.js is properly loaded and accessible to populateSkillBreakdown function

### Testing & Quality Assurance

- [ ] T107 [P] Manual browser test in Chrome (latest) on desktop and mobile
- [ ] T108 [P] Manual browser test in Firefox (latest) on desktop and mobile
- [ ] T109 [P] Manual browser test in Safari (latest) on desktop and iOS
- [ ] T110 [P] Manual browser test in Edge (latest) on desktop
- [ ] T111 Test hero section stat animation performance on low-end device
- [ ] T112 Test all responsive breakpoints (1200px, 1024px, 768px, 480px, 320px)
- [ ] T113 Verify no console errors in browser developer tools
- [ ] T114 Test smooth scrolling behavior for all navigation links
- [ ] T115 Verify hover states work correctly on all interactive elements
- [ ] T116 Test mobile tap interactions for timeline cards
- [ ] T117 Verify skill bar animations trigger correctly on scroll
- [ ] T118 Test page load performance (target < 2s)
- [ ] T119 Run Lighthouse audit for performance, accessibility, best practices
- [ ] T120 Test keyboard navigation for all interactive elements
- [ ] T121 Verify color contrast ratios meet WCAG AA standards (4.5:1)
- [ ] T122 Test with screen reader (basic verification)
- [X] T123 Verify download PDF link still works correctly
- [X] T124 Code review: Check for any hardcoded values that should be in cv-data.js
- [X] T125 Code cleanup: Remove any commented-out code or console.logs
- [ ] T126 Create backup copies of original portfolio.html, styles.css, script.js for rollback
- [ ] T127 Final visual regression check comparing to original design

**Checkpoint**: All testing complete, ready for deployment

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
  - Creates cv-data.js with all position data
  - All tasks parallelizable (T002-T012 can run together)
- **Foundational (Phase 2)**: Empty - no blocking infrastructure needed
- **User Stories (Phase 3-8)**: Organized by priority and dependencies
  - **Phase 3 (US1 - Hero)**: Depends on Setup completion
  - **Phase 4 (US2 - Auto-load)**: Depends on Phase 3 (needs hero/nav structure)
  - **Phase 5 (US5 - Languages merge)**: Depends on Setup completion (independent of hero)
  - **Phase 6 (US6 - Skills grid)**: Depends on Phase 5 (builds on merged skills structure)
  - **Phase 7 (US3 - Interactive cards)**: Depends on Setup completion (needs cv-data.js)
  - **Phase 8 (US4 - Skill viz)**: Depends on Phase 7 (adds to interactive card structure)
- **Polish (Phase 9)**: Depends on all desired user stories being complete

### User Story Dependencies

**MVP Stories (P1 - Can run in parallel after Setup):**
- **User Story 1 (Hero Section)**: Depends only on Setup (Phase 1)
- **User Story 2 (Auto-load)**: Depends on User Story 1 (needs hero/nav structure in place)
- **User Story 5 (Languages merge)**: Depends only on Setup (Phase 1) - independent of hero

**Enhancement Stories (P2 - Can run in parallel after MVP):**
- **User Story 6 (Skills grid)**: Depends on User Story 5 (builds on merged structure)
- **User Story 3 (Interactive cards)**: Depends only on Setup (Phase 1) - independent path
- **User Story 4 (Skill viz)**: Depends on User Story 3 (adds to card structure)

### Recommended Execution Paths

**Path 1: MVP First (Fastest time to value)**
1. Phase 1 (Setup) → T001-T012 ✅
2. Phase 3 (US1 - Hero) → T013-T031 ✅
3. Phase 4 (US2 - Auto-load) → T032-T035 ✅
4. Phase 5 (US5 - Languages) → T036-T043 ✅
5. **DEPLOY MVP** - Test in production
6. Phase 6 (US6 - Skills grid) → T044-T060
7. Phase 7 (US3 - Interactive) → T061-T081
8. Phase 8 (US4 - Skill viz) → T082-T103
9. Phase 9 (Polish) → T104-T124

**Path 2: Parallel Team Strategy**
1. Phase 1 (Setup) → All team members collaborate
2. Split into 3 parallel tracks after Setup:
   - **Track A**: Phase 3 (US1) → Phase 4 (US2)
   - **Track B**: Phase 5 (US5) → Phase 6 (US6)
   - **Track C**: Phase 7 (US3) → Phase 8 (US4)
3. Merge and integrate
4. Phase 9 (Polish) → All team members test

### Parallel Opportunities

**Phase 1 (Setup)**: ALL tasks parallelizable
- T002-T012 all write to different positions in cv-data.js
- Can launch all 11 tasks simultaneously

**Phase 3 (User Story 1 - Hero Section)**: Many parallel tasks
- HTML tasks: T013-T018 (sequential due to same file edits)
- CSS tasks: T020-T028 (all parallel, different sections)
- JS tasks: T029-T031 (sequential, small set)

**Phase 6 (User Story 6 - Skills Grid)**: High parallelism
- HTML tasks: T045-T054 (all parallel, different categories)
- CSS tasks: T056-T060 (all parallel, different rules)

**Phase 8 (User Story 4 - Skill Viz)**: High parallelism
- HTML tasks: T082-T084 (all parallel)
- CSS tasks: T086-T094 (all parallel)
- JS tasks: T095-T103 (sequential, build on each other)

**Phase 9 (Polish)**: High parallelism
- Browser tests: T104-T107 (all parallel)
- All validation tasks can run in parallel once implementation complete

---

## Parallel Example: User Story 1 (Hero Section)

```bash
# After HTML structure is in place (T013-T018), launch all CSS tasks together:
Task: T020 "Add cv-hero base styles in styles.css"
Task: T021 "Add cv-hero-title and cv-hero-subtitle styles in styles.css"
Task: T022 "Add cv-stats-grid responsive grid styles in styles.css"
Task: T023 "Add cv-stat-card glassmorphism styles in styles.css"
Task: T024 "Add cv-stat-number gradient text effect in styles.css"
Task: T025 "Add cv-stat-label text styles in styles.css"
Task: T026 "Add cv-institutions and cv-tagline styles in styles.css"
Task: T027 "Add institution-badge styles in styles.css"
Task: T028 "Add responsive breakpoints for hero section in styles.css"
```

---

## Parallel Example: Setup Phase (Data Preparation)

```bash
# All position data tasks can run simultaneously:
Task: T003 "Add Rockwool Foundation position data to cv-data.js"
Task: T004 "Add Yale University freelance position data to cv-data.js"
Task: T005 "Add Oxford University freelance position data to cv-data.js"
Task: T006 "Add Georgetown Project Manager position data to cv-data.js"
Task: T007 "Add Georgetown Senior Research Assistant position data to cv-data.js"
Task: T008 "Add Le Wagon Data Science Lecturer position data to cv-data.js"
Task: T009 "Add Le Wagon Senior Teaching Assistant position data to cv-data.js"
Task: T010 "Add Princeton Research Assistant (dataset) position data to cv-data.js"
Task: T011 "Add Princeton Research Assistant (fieldwork) position data to cv-data.js"
Task: T012 "Add AUB Research Assistant position data to cv-data.js"
```

---

## Implementation Strategy

### MVP First (User Stories 1, 2, 5 Only)

**Goal**: Ship the core visual redesign with hero section, auto-loaded experience, and consolidated navigation as quickly as possible.

1. Complete Phase 1: Setup (T001-T012) - ~60 min
2. Complete Phase 3: User Story 1 (T013-T031) - ~90 min
3. Complete Phase 4: User Story 2 (T032-T035) - ~30 min
4. Complete Phase 5: User Story 5 (T036-T043) - ~60 min
5. **STOP and VALIDATE**: Test MVP independently
6. Run critical tests from Phase 9 (T104-T111, T116-T118)
7. Deploy/demo MVP if ready - **Total: ~4 hours to MVP**

**MVP Deliverables:**
- ✅ Modern statistics-driven hero section
- ✅ Experience section auto-loads (no empty state)
- ✅ Languages consolidated into Skills
- ✅ Simplified navigation (3 buttons instead of 4)
- ✅ Responsive across all devices
- ✅ Animated stat counters

### Incremental Delivery (Full Feature)

**Goal**: Add interactive enhancements and visual skill breakdowns after MVP is validated.

1. Complete MVP (Phases 1, 3, 4, 5) → Test → Deploy
2. Add Phase 6: Enhanced Skills Grid (T044-T060) → Test independently → Deploy (~60 min)
3. Add Phase 7: Interactive Position Cards (T061-T081) → Test independently → Deploy (~90 min)
4. Add Phase 8: Skill Visualizations (T082-T103) → Test independently → Deploy (~90 min)
5. Complete Phase 9: Polish & Testing (T104-T124) → Final deployment (~90 min)

**Total estimated time: 6-8 hours for complete feature**

### Parallel Team Strategy

With 3 developers working simultaneously:

**Phase 1: Setup (All team members - 30 min)**
- Developer A: T001-T002, T003-T005 (base structure + 3 positions)
- Developer B: T006-T008 (3 positions)
- Developer C: T009-T012 (4 positions)

**Phase 2: MVP Stories (Parallel tracks - 2 hours)**
- **Developer A**: Phase 3 + Phase 4 (Hero + Auto-load)
- **Developer B**: Phase 5 (Languages merge)
- **Developer C**: Start Phase 6 (Skills grid planning/research)

**Phase 3: Enhancement Stories (Parallel tracks - 2 hours)**
- **Developer A**: Phase 6 (Skills grid enhancement)
- **Developer B**: Phase 7 (Interactive cards)
- **Developer C**: Phase 8 (Skill visualizations)

**Phase 4: Integration & Polish (All team members - 1 hour)**
- Merge all changes
- Run Phase 9 testing in parallel
- Fix any integration issues

**Total parallel time: ~5.5 hours with 3 developers**

---

## Task Count Summary

- **Phase 1 (Setup)**: 12 tasks
- **Phase 2 (Foundational)**: 0 tasks
- **Phase 3 (US1 - Hero)**: 19 tasks
- **Phase 4 (US2 - Auto-load)**: 4 tasks
- **Phase 5 (US5 - Languages)**: 8 tasks
- **Phase 6 (US6 - Skills Grid)**: 17 tasks
- **Phase 7 (US3 - Interactive Cards)**: 21 tasks
- **Phase 8 (US4 - Skill Viz)**: 22 tasks
- **Phase 9 (Polish)**: 21 tasks

**Total: 124 tasks**

**MVP Task Count**: 43 tasks (Phases 1, 3, 4, 5)
**Enhancement Task Count**: 60 tasks (Phases 6, 7, 8)
**Testing Task Count**: 21 tasks (Phase 9)

---

## Notes

- [P] tasks = different files or different sections, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Manual browser testing required (no automated test suite for static site)
- Commit after each phase or logical group of tasks
- Stop at any checkpoint to validate story independently
- All file paths are absolute to avoid ambiguity
- cv-data.js must be loaded before script.js in portfolio.html
- Existing script.js utilities (throttle, animateNumber, IntersectionObserver) will be reused
- No build process - direct file editing and browser refresh for testing
