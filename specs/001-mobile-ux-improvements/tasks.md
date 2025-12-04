# Tasks: Mobile UX Improvements

**Input**: Design documents from `/specs/001-mobile-ux-improvements/`
**Prerequisites**: plan.md, spec.md, quickstart.md

**Tests**: No automated tests (manual browser testing only per quickstart.md)

**Organization**: Tasks are grouped by user story priority (P1→P5) to enable incremental delivery and independent testing of each mobile UX improvement.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different CSS sections, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5)
- All paths relative to repository root

## Path Conventions

- **Static site**: Modifications to `styles.css` and `script.js` at repository root
- **No build process**: Direct file edits, manual browser testing
- **Target file**: `styles.css` (mobile media queries at lines 788-901, 2691-2953, 3765-3833)

---

## Phase 1: Setup (Baseline Preparation)

**Purpose**: Establish testing environment and backup current state

- [ ] T001 Start local development server with `python -m http.server 8000` for testing
- [ ] T002 Take before screenshots of portfolio.html at 375px, 768px, and 320px viewports for visual regression
- [ ] T003 Document current CSS file size of styles.css for performance comparison
- [ ] T004 Create backup branch point with `git add . && git commit -m "Baseline before mobile UX improvements"`

---

## Phase 2: User Story 1 - CV Experience Section Browsing (Priority: P1) 🎯 MVP

**Goal**: Make CV timeline readable and navigable on mobile without zooming or horizontal scrolling

**Independent Test**: Open portfolio.html on 375px viewport, navigate to Experience section, verify position titles ≥1rem, timeline bars 3px/0.2 opacity, metadata stacks vertically, line-height ≥1.6, no horizontal scroll

**Why P1**: Critical conversion point - poor mobile experience directly impacts hiring opportunities

### Implementation for User Story 1

- [ ] T005 [US1] Simplify timeline duration bars for mobile in styles.css @media (max-width: 768px) .timeline-duration-bar to width: 3px, opacity: 0.2
- [ ] T006 [US1] Ensure position titles readable on mobile in styles.css @media (max-width: 768px) .timeline-content h3 to font-size: 1rem minimum
- [ ] T007 [US1] Stack timeline metadata vertically in styles.css @media (max-width: 768px) .timeline-meta to flex-direction: column, gap: 6px
- [ ] T008 [US1] Improve text readability in position cards in styles.css @media (max-width: 768px) .timeline-details to line-height: 1.6 minimum
- [ ] T009 [US1] Add adequate spacing between position blocks in styles.css @media (max-width: 768px) .position-block to margin-bottom: 18px
- [ ] T010 [US1] Test Experience section on 375px viewport per quickstart.md Scenario 3 and verify all acceptance criteria

**Checkpoint**: User Story 1 complete - Experience section is readable and navigable on mobile (MVP ready)

---

## Phase 3: User Story 2 - CV Navigation Usability (Priority: P2)

**Goal**: Ensure CV navigation buttons are touch-friendly with 44x44px minimum tap targets and immediate visual feedback

**Independent Test**: Open portfolio.html on 375px viewport, inspect navigation buttons with DevTools, verify all 4 buttons ≥44x44px, 2x2 grid with 10-12px gaps, immediate visual feedback on tap

**Why P2**: Second most frequent user action after browsing content - poor navigation increases bounce rates

### Implementation for User Story 2

- [ ] T011 [P] [US2] Verify CV navigation 2x2 grid layout in styles.css @media (max-width: 768px) .cv-nav has grid-template-columns: repeat(2, 1fr) and gap: 12px
- [ ] T012 [P] [US2] Ensure navigation buttons meet 44x44px touch target in styles.css @media (max-width: 768px) .cv-nav-link to padding: 16px 12px minimum (calculates to ≥44px height)
- [ ] T013 [US2] Add immediate tap feedback to navigation buttons in styles.css .cv-nav-link:active to background: rgba(102, 126, 234, 0.1), transform: translateY(-2px)
- [ ] T014 [US2] Ensure download button matches other buttons in styles.css @media (max-width: 768px) .cv-nav-download to padding: 16px 12px, same grid sizing
- [ ] T015 [US2] Test navigation on 375px and 320px viewports per quickstart.md Scenario 1 and verify all acceptance criteria

**Checkpoint**: User Story 2 complete - Navigation is touch-friendly and accessible on all mobile devices

---

## Phase 4: User Story 3 - Skills Section Readability (Priority: P3)

**Goal**: Convert skills grid from cramped 2-column to readable 1-column layout on mobile with proper spacing

**Independent Test**: Open portfolio.html on 375px viewport, navigate to Skills section, verify single-column layout, 30px gaps, skill tags 0.85rem with 6px 12px padding, no horizontal scroll at 200% zoom

**Why P3**: Important for technical evaluation but lower priority than experience and navigation

### Implementation for User Story 3

- [ ] T016 [P] [US3] Convert skills grid to single column in styles.css @media (max-width: 768px) .skills-grid-enhanced to grid-template-columns: 1fr (currently repeat(2, 1fr))
- [ ] T017 [P] [US3] Add adequate spacing between skill categories in styles.css @media (max-width: 768px) .skills-grid-enhanced to gap: 30px
- [ ] T018 [P] [US3] Ensure skill tags are touch-friendly in styles.css @media (max-width: 768px) .skill-tag to padding: 6px 12px, font-size: 0.85rem, word-wrap: break-word
- [ ] T019 [US3] Verify skill category headers prominent in styles.css @media (max-width: 768px) .skill-category h3 to font-size: 1.2rem minimum, margin-bottom: 15px
- [ ] T020 [US3] Test Skills section on 375px viewport per quickstart.md Scenario 2 and verify all acceptance criteria including 200% zoom

**Checkpoint**: User Story 3 complete - Skills are scannable and readable on small screens

---

## Phase 5: User Story 4 - Interactive Timeline Touch Targets (Priority: P4)

**Goal**: Ensure expandable position cards work smoothly on touch devices with <300ms transitions and no hover dependencies

**Independent Test**: Open portfolio.html on 375px viewport, tap interactive position cards (Georgetown, Le Wagon), verify smooth expand/collapse <300ms, skill bars stack vertically, no hover indicators visible

**Why P4**: Enhances engagement but not critical for basic CV consumption

### Implementation for User Story 4

- [ ] T021 [P] [US4] Hide hover indicators on mobile in styles.css @media (max-width: 768px) .timeline-interactive .hover-indicator to display: none
- [ ] T022 [P] [US4] Ensure smooth card expansion transitions in styles.css .timeline-interactive .timeline-details to transition: max-height 0.3s ease, opacity 0.3s ease
- [ ] T023 [US4] Stack skill bars vertically within cards in styles.css @media (max-width: 768px) .timeline-skills .skills-individual-bars to flex-direction: column, gap: 10px
- [ ] T024 [US4] Review script.js for touch event handling on .timeline-interactive elements and ensure no hover dependencies (lines TBD)
- [ ] T025 [US4] Test interactive cards on 375px viewport per quickstart.md Scenario 4 and verify smooth animations and vertical skill bars

**Checkpoint**: User Story 4 complete - Interactive elements work seamlessly on touch devices

---

## Phase 6: User Story 5 - Education Section Mobile Layout (Priority: P5)

**Goal**: Simplify Education timeline for mobile with de-emphasized visual indicators and readable metadata

**Independent Test**: Open portfolio.html on 375px viewport, navigate to Education section, verify timeline bars 3px/0.2 opacity, metadata stacks vertically, 20-30px spacing between entries

**Why P5**: Least-viewed CV section - lowest impact on user decisions but completes mobile experience

### Implementation for User Story 5

- [ ] T026 [P] [US5] Apply timeline simplification to Education section in styles.css @media (max-width: 768px) verify .timeline-duration-bar applies to #education .timeline-item
- [ ] T027 [P] [US5] Ensure Education metadata stacks vertically in styles.css @media (max-width: 768px) verify .timeline-meta applies to #education .timeline-item
- [ ] T028 [P] [US5] Add adequate spacing between education entries in styles.css @media (max-width: 768px) #education .timeline-item to margin-bottom: 25px
- [ ] T029 [US5] Verify date badge readability in styles.css @media (max-width: 480px) .timeline-date-badge to font-size: 0.85rem minimum
- [ ] T030 [US5] Test Education section on 375px and 320px viewports and verify all acceptance criteria from spec

**Checkpoint**: User Story 5 complete - All CV sections optimized for mobile

---

## Phase 7: Polish & Cross-Viewport Validation

**Purpose**: Final validation across all viewports and edge cases

- [ ] T031 Run quickstart.md Scenario 5 extreme viewport tests (320px, 768px, 769px)
- [ ] T032 Verify no horizontal scrolling on 320px-768px viewports across all CV sections
- [ ] T033 [P] Verify desktop views (>768px) remain unchanged with before/after screenshot comparison
- [ ] T034 [P] Run Lighthouse mobile accessibility audit and verify score ≥95
- [ ] T035 Measure CSS file size increase and verify <10KB additions to styles.css
- [ ] T036 Test tap feedback timing with DevTools Performance tab and verify <100ms response
- [ ] T037 Document any edge cases discovered in quickstart.md Troubleshooting section
- [ ] T038 Update CLAUDE.md Recent Changes section with "001-mobile-ux-improvements: Optimized CV page mobile UX"

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately
- **User Story 1 (Phase 2)**: Depends on Setup - can start after T001-T004
- **User Story 2 (Phase 3)**: Independent of US1 - can start after Setup (parallel with US1)
- **User Story 3 (Phase 4)**: Independent of US1/US2 - can start after Setup (parallel with US1/US2)
- **User Story 4 (Phase 5)**: Independent of US1-US3 - can start after Setup (parallel)
- **User Story 5 (Phase 6)**: Independent of US1-US4 - can start after Setup (parallel)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

All user stories are **independently implementable** after Setup phase:

- **User Story 1 (P1)**: Timeline/Experience section (lines 831-900 in styles.css)
- **User Story 2 (P2)**: Navigation section (lines 2691-2740 in styles.css)
- **User Story 3 (P3)**: Skills section (lines 3000-3029 in styles.css)
- **User Story 4 (P4)**: Interactive cards (lines 1420-1430 in styles.css + script.js review)
- **User Story 5 (P5)**: Education section (same classes as US1, verify application)

**No cross-story dependencies** - each story modifies different CSS selectors or non-conflicting areas.

### Within Each User Story

- All [P] tasks can run in parallel (different CSS selectors)
- Final test task must run after all implementation tasks in that story
- Checkpoint validation before moving to next story (for sequential approach)

### Parallel Opportunities

**Maximum Parallelization** (if multiple developers or AI agents available):

- After Setup (T001-T004), ALL 5 user stories (US1-US5) can proceed in parallel
- Within each story, all [P] tasks can run simultaneously
- Example: T005-T009 (US1), T011-T014 (US2), T016-T019 (US3), T021-T023 (US4), T026-T029 (US5) can all run in parallel

**Single Developer Sequential** (recommended priority order):

1. Setup (T001-T004)
2. User Story 1 - Experience (T005-T010) - MVP checkpoint
3. User Story 2 - Navigation (T011-T015)
4. User Story 3 - Skills (T016-T020)
5. User Story 4 - Interactive (T021-T025)
6. User Story 5 - Education (T026-T030)
7. Polish (T031-T038)

---

## Parallel Example: User Stories 1-5

**All user stories modify different CSS selectors** - can execute completely in parallel:

```bash
# Example parallel agent execution after Setup:
Agent 1: US1 tasks (T005-T010) - Timeline improvements
Agent 2: US2 tasks (T011-T015) - Navigation improvements
Agent 3: US3 tasks (T016-T020) - Skills improvements
Agent 4: US4 tasks (T021-T025) - Interactive improvements
Agent 5: US5 tasks (T026-T030) - Education improvements

# Then final validation:
Agent 1: Polish tasks (T031-T038) - Cross-viewport validation
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

**Fastest path to value** - complete core timeline readability:

1. Complete Phase 1: Setup (T001-T004)
2. Complete Phase 2: User Story 1 (T005-T010)
3. **STOP and VALIDATE**: Test Experience section on mobile per quickstart.md
4. Deploy if ready - Users can now browse CV experience on mobile

### Incremental Delivery (Recommended)

**Progressive enhancement** - each story adds independent value:

1. Setup (T001-T004) → Environment ready
2. US1 (T005-T010) → Experience readable (MVP!)
3. US2 (T011-T015) → Navigation touch-friendly
4. US3 (T016-T020) → Skills scannable
5. US4 (T021-T025) → Interactive elements smooth
6. US5 (T026-T030) → Education simplified
7. Polish (T031-T038) → Full mobile UX optimized

**Each checkpoint** is deployable and independently testable.

### Parallel Team Strategy

With multiple developers or AI agents:

1. **Team** completes Setup together (T001-T004)
2. Once Setup done, **all stories can proceed in parallel**:
   - Developer A: User Story 1 (Timeline)
   - Developer B: User Story 2 (Navigation)
   - Developer C: User Story 3 (Skills)
   - Developer D: User Story 4 (Interactive)
   - Developer E: User Story 5 (Education)
3. **Team** completes Polish validation together (T031-T038)

**No merge conflicts** because each story modifies different CSS selectors.

---

## Notes

- **[P] tasks** = Different CSS selectors or files, no dependencies
- **[Story] label** maps task to specific user story for traceability
- **Each user story** is independently completable and testable
- **Manual testing** required per quickstart.md (no automated tests for CSS)
- **Commit strategy**: Commit after each completed user story phase for clean rollback points
- **Desktop preservation**: Verify >768px unchanged after each story (T033)
- **Performance budget**: Monitor CSS size after each story (target <10KB total additions)
- **Avoid**: Modifying HTML structure, changing desktop styles, adding JavaScript frameworks

---

## Task Summary

- **Total Tasks**: 38
- **Setup Tasks**: 4 (T001-T004)
- **User Story 1 (P1)**: 6 tasks (T005-T010) - Experience section
- **User Story 2 (P2)**: 5 tasks (T011-T015) - Navigation
- **User Story 3 (P3)**: 5 tasks (T016-T020) - Skills section
- **User Story 4 (P4)**: 5 tasks (T021-T025) - Interactive elements
- **User Story 5 (P5)**: 5 tasks (T026-T030) - Education section
- **Polish**: 8 tasks (T031-T038) - Validation and documentation

**Parallel Opportunities**: 23 tasks marked [P] can run in parallel within constraints

**MVP Scope**: Setup + User Story 1 (10 tasks total) delivers core mobile experience

**Full Scope**: All 38 tasks deliver complete mobile UX optimization per specification
