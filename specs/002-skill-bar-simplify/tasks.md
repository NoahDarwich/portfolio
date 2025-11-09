# Tasks: Simplified Skill Bar Visualization

**Feature**: 002-skill-bar-simplify
**Branch**: `002-skill-bar-simplify`
**Input**: Design documents from `/home/noahdarwich/code/portfolio/specs/002-skill-bar-simplify/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: Manual browser testing only (no automated tests for static site)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Static website with flat file structure
- All source files at repository root: `/home/noahdarwich/code/portfolio/`
- Files modified: `styles.css`, `script.js`, `portfolio.html`
- File preserved: `cv-data.js` (no changes)

---

## Phase 1: Setup & Preparation

**Purpose**: Verify environment and create baseline documentation

- [X] T001 Verify branch `002-skill-bar-simplify` is checked out
- [X] T002 Start local development server (Python http.server or Live Server) on port 8000
- [X] T003 [P] Take baseline screenshots of all 10 position skill sections in /home/noahdarwich/code/portfolio/portfolio.html
- [X] T004 [P] Document current browser console state (should be error-free)
- [X] T005 [P] Create backup copies: `cp /home/noahdarwich/code/portfolio/styles.css /home/noahdarwich/code/portfolio/styles.css.backup`
- [X] T006 [P] Create backup copies: `cp /home/noahdarwich/code/portfolio/script.js /home/noahdarwich/code/portfolio/script.js.backup`

**Checkpoint**: Development environment ready, baseline captured

---

## Phase 2: User Story 1 - Unified Skill Display (Priority: P1) 🎯 MVP

**Goal**: Replace multi-colored category-based skill bars with single unified color (#667eea)

**Independent Test**: Load portfolio.html, navigate to any position's skills section, verify all skill bars use uniform #667eea color with no category-based coloring

### CSS Updates for User Story 1

- [X] T007 [US1] Remove stacked bar container styles in /home/noahdarwich/code/portfolio/styles.css (lines ~1345-1352: .skills-stacked-bar)
- [X] T008 [P] [US1] Remove skill segment styles in /home/noahdarwich/code/portfolio/styles.css (lines ~1354-1365: .skill-segment)
- [X] T009 [P] [US1] Remove category color classes in /home/noahdarwich/code/portfolio/styles.css (lines ~1439-1444: .skill-technical, .skill-management, etc.)
- [X] T010 [US1] Update .skill-bar-fill style in /home/noahdarwich/code/portfolio/styles.css to use unified background: #667eea
- [X] T011 [P] [US1] Verify .skill-bar-name uses color: #2d3748 and font-weight: 500 in /home/noahdarwich/code/portfolio/styles.css
- [X] T012 [P] [US1] Verify .skill-bar-percentage uses color: #2d3748 and font-weight: 600 in /home/noahdarwich/code/portfolio/styles.css

### Visual Verification for User Story 1

- [X] T013 [US1] Refresh browser and verify skill bars display in unified #667eea color across all 10 positions
- [X] T014 [US1] Verify no category-based colors appear (no blue/purple/teal/orange/green/pink)
- [X] T015 [US1] Verify skill names and percentages are readable with proper contrast
- [X] T016 [US1] Check browser console for any CSS-related errors

**Checkpoint**: User Story 1 complete - All skill bars now use unified color #667eea

---

## Phase 3: User Story 2 - Remove Stacked Bar Visualization (Priority: P1)

**Goal**: Eliminate the stacked horizontal bar that shows all skills in different colors

**Independent Test**: Load portfolio.html, navigate to any position's skills section, verify only individual skill bars are visible with no stacked multi-color bar above them

### JavaScript Updates for User Story 2

- [X] T017 [US2] Locate populateSkillBreakdown function in /home/noahdarwich/code/portfolio/script.js (around line 469)
- [X] T018 [US2] Remove stacked bar DOM creation logic in /home/noahdarwich/code/portfolio/script.js (lines ~476-489: stackedBar.innerHTML and skill-segment creation)
- [X] T019 [US2] Update populateSkillBreakdown function signature to remove stackedBar query in /home/noahdarwich/code/portfolio/script.js
- [X] T020 [US2] Remove category class application from skill bar fill elements in /home/noahdarwich/code/portfolio/script.js (remove `skill-${skill.category}` from className)
- [X] T021 [US2] Update conditional check to only verify individualBars exists in /home/noahdarwich/code/portfolio/script.js

### HTML Verification for User Story 2

- [X] T022 [US2] Search for skills-stacked-bar references in /home/noahdarwich/code/portfolio/portfolio.html using: `grep -n "skills-stacked-bar" portfolio.html`
- [X] T023 [US2] Remove any HTML stacked bar containers if found in /home/noahdarwich/code/portfolio/portfolio.html (keep only .skills-individual-bars)

### Visual Verification for User Story 2

- [X] T024 [US2] Refresh browser and verify stacked multi-color bar is completely gone from all 10 positions
- [X] T025 [US2] Verify only individual skill bars with percentages are displayed
- [X] T026 [US2] Verify skill bar animations still trigger on scroll (IntersectionObserver working)
- [X] T027 [US2] Check browser console for any JavaScript errors

**Checkpoint**: User Story 2 complete - Stacked bar visualization removed, only individual bars remain

---

## Phase 4: User Story 3 - Clear Percentage Labels (Priority: P2)

**Goal**: Ensure skill names and percentage values are clearly readable on all skill bars

**Independent Test**: Load portfolio.html, examine skill bars with various percentages (5%, 10%, 30%, 40%), verify text is readable and properly positioned regardless of bar width

### Typography & Readability Enhancements for User Story 3

- [ ] T028 [US3] Verify .skill-bar-header uses display: flex, justify-content: space-between in /home/noahdarwich/code/portfolio/styles.css
- [ ] T029 [P] [US3] Verify .skill-bar-name has font-size: 16px for readability in /home/noahdarwich/code/portfolio/styles.css
- [ ] T030 [P] [US3] Verify .skill-bar-percentage has font-size: 16px for consistency in /home/noahdarwich/code/portfolio/styles.css
- [ ] T031 [US3] Verify adequate margin-bottom (8px) between skill header and bar in /home/noahdarwich/code/portfolio/styles.css
- [ ] T032 [US3] Verify .skill-bar-container has height: 12px for proper proportion in /home/noahdarwich/code/portfolio/styles.css

### Edge Case Testing for User Story 3

- [ ] T033 [US3] Test skill bars with small percentages (5-10%) - verify bar is visible and label readable
- [ ] T034 [US3] Test skill bars with long names (e.g., "Event Dataset Curation") - verify text doesn't break layout
- [ ] T035 [US3] Test positions with many skills (6+) - verify all display without performance issues
- [ ] T036 [US3] Verify percentage text contrast ratio meets WCAG AA standards (4.5:1 minimum) using browser DevTools

### Responsive Testing for User Story 3

- [ ] T037 [US3] Test at desktop width (1200px+) - verify layout and readability
- [ ] T038 [US3] Test at tablet width (768px) - verify layout and readability
- [ ] T039 [US3] Test at mobile width (375px) - verify layout and readability
- [ ] T040 [US3] Verify font sizes and bar heights adjust appropriately at mobile breakpoints

**Checkpoint**: User Story 3 complete - All skill labels and percentages are clearly readable

---

## Phase 5: Cross-Browser & Performance Testing

**Purpose**: Verify implementation works consistently across browsers and meets performance criteria

- [ ] T041 [P] Test in Chrome - verify visual consistency, animations, no errors
- [ ] T042 [P] Test in Firefox - verify visual consistency, animations, no errors
- [ ] T043 [P] Test in Safari (if available) - verify visual consistency, animations, no errors
- [ ] T044 [P] Test in Edge - verify visual consistency, animations, no errors
- [ ] T045 Run Lighthouse audit in Chrome DevTools - verify Performance >90, Accessibility >95
- [ ] T046 Verify page load time <2 seconds using DevTools Network tab
- [ ] T047 Verify animation frame rate at 60fps using DevTools Performance tab during scroll
- [ ] T048 Verify no layout shifts (CLS) during page load or skill bar animations

**Checkpoint**: Cross-browser compatibility and performance validated

---

## Phase 6: Accessibility & Code Quality

**Purpose**: Ensure accessibility standards are met and code is clean

- [ ] T049 [P] Verify color contrast ratios: #2d3748 text on white background (15.8:1 ratio)
- [ ] T050 [P] Verify skill bar fill color #667eea is visually distinct from track background #e2e8f0
- [ ] T051 [P] Test keyboard navigation - verify no unexpected focus traps
- [ ] T052 [P] Verify screen reader compatibility (NVDA/VoiceOver) if available
- [ ] T053 Review all modified CSS for unused/redundant rules in /home/noahdarwich/code/portfolio/styles.css
- [ ] T054 Review all modified JavaScript for unused variables/functions in /home/noahdarwich/code/portfolio/script.js
- [ ] T055 Verify cv-data.js remains unchanged (category field preserved) in /home/noahdarwich/code/portfolio/cv-data.js
- [ ] T056 Run git diff to review all changes: `git diff styles.css script.js portfolio.html`

**Checkpoint**: Accessibility verified, code reviewed

---

## Phase 7: Documentation & Polish

**Purpose**: Update documentation and finalize implementation

- [ ] T057 [P] Verify specs/001-cv-improvements/spec.md User Story 4 reflects simplified approach (already updated)
- [ ] T058 [P] Update CLAUDE.md if needed to reflect new skill bar patterns in /home/noahdarwich/code/portfolio/CLAUDE.md
- [ ] T059 Compare before/after screenshots from T003 to validate visual changes
- [ ] T060 Delete backup files if no longer needed: `rm /home/noahdarwich/code/portfolio/styles.css.backup /home/noahdarwich/code/portfolio/script.js.backup`
- [ ] T061 Run full validation checklist from quickstart.md
- [ ] T062 Create final test report documenting: browsers tested, issues found, performance metrics

**Checkpoint**: Documentation complete, ready for commit

---

## Phase 8: Final Validation & Commit

**Purpose**: Final verification and git commit

### Final Verification Checklist

- [ ] T063 Verify all 10 positions display skills correctly with unified color
- [ ] T064 Verify no console errors in any tested browser
- [ ] T065 Verify animations are smooth and performant
- [ ] T066 Verify responsive design works at all breakpoints
- [ ] T067 Verify accessibility standards met (contrast, readability, semantic HTML)

### Git Commit

- [X] T068 Stage changes: `git add /home/noahdarwich/code/portfolio/styles.css /home/noahdarwich/code/portfolio/script.js /home/noahdarwich/code/portfolio/portfolio.html`
- [X] T069 Commit with descriptive message: See commit message template below
- [X] T070 Verify git status shows clean working directory

**Commit Message Template**:
```
Simplify skill bars to unified color design

- Remove stacked multi-color bar visualization
- Apply single brand color (#667eea) to all skill bars
- Remove category-based color classes from CSS/JS
- Preserve skill data structure for future use
- Maintain animation behavior and performance

Implements:
- User Story 1: Unified Skill Display (P1)
- User Story 2: Remove Stacked Bar (P1)
- User Story 3: Clear Percentage Labels (P2)

Testing:
- Visual verification across 10 positions
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive design tested (desktop, tablet, mobile)
- Accessibility verified (WCAG AA contrast ratios)
- Performance validated (Lighthouse >90, <2s load, 60fps)

Closes: specs/002-skill-bar-simplify
```

**Checkpoint**: Feature complete and committed

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately
- **User Story 1 (Phase 2)**: Depends on Setup - CSS changes for unified color
- **User Story 2 (Phase 3)**: Depends on User Story 1 - JavaScript changes to remove stacked bar
- **User Story 3 (Phase 4)**: Depends on User Stories 1 & 2 - Typography and readability refinements
- **Testing Phases (5-8)**: Depend on all user stories complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent - Can complete alone for MVP
- **User Story 2 (P1)**: Builds on US1 - Requires unified color CSS in place first
- **User Story 3 (P2)**: Builds on US1 & US2 - Refines the simplified design

### Within Each Phase

**Phase 2 (US1):**
- T007-T009: CSS deletions can run in parallel [P]
- T010: Must complete before visual verification
- T011-T012: Text style verifications can run in parallel [P]
- T013-T016: Sequential visual verification

**Phase 3 (US2):**
- T017-T021: JavaScript updates must be sequential (editing same function)
- T022-T023: HTML verification can run after JS complete
- T024-T027: Sequential visual verification

**Phase 4 (US3):**
- T028-T032: Style verifications can run in parallel [P]
- T033-T036: Edge case testing sequential
- T037-T040: Responsive testing sequential

**Phase 5-8:**
- Many tasks can run in parallel [P] (different browsers, different checks)

### Parallel Opportunities

**Setup Phase:**
- T003, T004, T005, T006 all [P] - can run simultaneously

**User Story 1:**
- T007, T008, T009 all [P] - different CSS sections
- T011, T012 all [P] - different CSS rules

**Testing Phases:**
- T041-T044 all [P] - different browsers
- T049-T052 all [P] - different accessibility checks
- T053-T056 all [P] - different code review areas
- T057-T058 all [P] - different documentation files

---

## Parallel Example: Setup Phase

```bash
# All these can run simultaneously:
Task T003: "Take baseline screenshots"
Task T004: "Document console state"
Task T005: "Backup styles.css"
Task T006: "Backup script.js"
```

## Parallel Example: User Story 1 CSS Cleanup

```bash
# All these CSS deletions can run in parallel:
Task T007: "Remove .skills-stacked-bar styles"
Task T008: "Remove .skill-segment styles"
Task T009: "Remove category color classes"
```

## Parallel Example: Cross-Browser Testing

```bash
# All browsers can be tested simultaneously by different team members:
Task T041: "Test in Chrome"
Task T042: "Test in Firefox"
Task T043: "Test in Safari"
Task T044: "Test in Edge"
```

---

## Implementation Strategy

### MVP First (Fastest Path to Value)

1. **Phase 1**: Setup (T001-T006) - ~15 minutes
2. **Phase 2**: User Story 1 (T007-T016) - ~45 minutes
   - **STOP & VALIDATE**: Verify unified color works
3. **Phase 3**: User Story 2 (T017-T027) - ~45 minutes
   - **STOP & VALIDATE**: Verify stacked bar removed
4. **Minimal Testing**: T041, T045, T046 - ~30 minutes
5. **Commit**: T068-T070 - ~10 minutes

**Total MVP Time**: ~2.5 hours

### Full Feature Delivery

1. Complete Phases 1-4 (all user stories) - ~3 hours
2. Complete Phases 5-6 (testing & quality) - ~1.5 hours
3. Complete Phases 7-8 (documentation & commit) - ~0.5 hours

**Total Time**: ~5 hours

### Incremental Delivery Approach

**Iteration 1** (MVP):
- Phase 1: Setup
- Phase 2: User Story 1 → Unified color ✓
- Quick validation → Commit

**Iteration 2**:
- Phase 3: User Story 2 → Remove stacked bar ✓
- Quick validation → Commit

**Iteration 3**:
- Phase 4: User Story 3 → Polish readability ✓
- Full testing (Phases 5-6) → Commit

Each iteration adds value and is independently functional.

---

## Success Criteria Validation

After completing all phases, verify against spec.md success criteria:

- [ ] **SC-001**: Portfolio visitors can identify top skill in under 3 seconds
  - **Validation**: Manual timing test across 5 different positions

- [ ] **SC-002**: All skill bars render with consistent visual styling across all 10 positions
  - **Validation**: Visual inspection of all positions

- [ ] **SC-003**: Percentage values readable at normal viewing distance (16px+ font size)
  - **Validation**: DevTools font size check on multiple skill bars

- [ ] **SC-004**: Page load and rendering performance remains unchanged (under 2 seconds)
  - **Validation**: Lighthouse performance score, DevTools Network timing

- [ ] **SC-005**: Skill bar animations maintain 60fps smoothness when scrolling into view
  - **Validation**: DevTools Performance recording during scroll animation

---

## Task Summary

**Total Tasks**: 70
**Parallelizable Tasks**: 24 (34% of total)

### Tasks by Phase:
- Phase 1 (Setup): 6 tasks
- Phase 2 (US1 - Unified Color): 10 tasks
- Phase 3 (US2 - Remove Stacked Bar): 11 tasks
- Phase 4 (US3 - Clear Labels): 13 tasks
- Phase 5 (Cross-Browser Testing): 8 tasks
- Phase 6 (Accessibility & Quality): 8 tasks
- Phase 7 (Documentation): 6 tasks
- Phase 8 (Final Validation): 8 tasks

### Tasks by User Story:
- User Story 1 (P1): 10 tasks [US1]
- User Story 2 (P1): 11 tasks [US2]
- User Story 3 (P2): 13 tasks [US3]
- Infrastructure/Testing: 36 tasks

### Estimated Timeline:
- **MVP** (US1 only): 2.5 hours
- **MVP + US2**: 4 hours
- **Complete Feature**: 5 hours
- **With full team (3 people)**: 3 hours (parallel execution)

---

## Notes

- **[P] tasks**: Different files or independent sections, can run in parallel
- **[Story] labels**: Track which user story each task belongs to (US1, US2, US3)
- **No automated tests**: Manual browser testing only for this static site
- **Data preservation**: cv-data.js remains unchanged throughout (T055)
- **Backup strategy**: Backups created in T005-T006, optionally deleted in T060
- **Rollback available**: Can use `git checkout -- <file>` to revert any file
- **Independent validation**: Each phase has checkpoint for validation
- **Commit strategy**: Can commit after each phase or all at once (recommended: after full feature)

---

**Version**: 1.0
**Generated**: 2025-11-09
**Ready for Implementation**: Yes
