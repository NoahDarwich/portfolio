# Implementation Plan: Mobile UX Improvements

**Branch**: `001-mobile-ux-improvements` | **Date**: 2025-12-04 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-mobile-ux-improvements/spec.md`

## Summary

Improve mobile user experience on the CV page (portfolio.html) by enhancing touch-friendly interactions, optimizing layouts for small screens, and ensuring WCAG 2.1 Level AA compliance. Primary changes include:
- Converting skills grid from 2-column to 1-column on mobile
- Ensuring all touch targets meet 44x44px minimum size
- Improving text readability with 1.6+ line-height
- Simplifying timeline visualizations for mobile
- Optimizing navigation button layout and feedback

**Approach**: CSS-only modifications within existing `@media (max-width: 768px)` and `@media (max-width: 480px)` breakpoints in styles.css. Minimal JavaScript changes to ensure touch interactions work properly.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+ (vanilla, no build process)
**Primary Dependencies**: None (static site with CDN resources: Font Awesome 6.0.0, Google Fonts Inter)
**Storage**: N/A (static content, no backend)
**Testing**: Manual browser testing (Chrome DevTools mobile emulation, physical devices)
**Target Platform**: Mobile browsers (iOS Safari 12+, Chrome Mobile 60+, Samsung Internet 8+)
**Project Type**: Static web (single HTML/CSS/JS files)
**Performance Goals**: <10KB CSS additions, <100ms tap feedback, <300ms transitions
**Constraints**: No horizontal scroll on 320px+ viewports, desktop views unchanged, no new dependencies
**Scale/Scope**: 6 HTML files, 1 CSS file (3834 lines), 1 JS file, focus on portfolio.html mobile UX

## Constitution Check

**Status**: ✅ PASS (No constitution defined yet, project uses standard static web practices)

Since `.specify/memory/constitution.md` is a template placeholder, no formal gates apply. However, this feature adheres to best practices:
- **No new dependencies**: Uses existing vanilla HTML/CSS/JS
- **Progressive enhancement**: Works without JavaScript
- **Backwards compatible**: Desktop views unchanged
- **Accessibility-first**: WCAG 2.1 Level AA compliance
- **Performance budget**: <10KB additions

## Project Structure

### Documentation (this feature)

```text
specs/001-mobile-ux-improvements/
├── spec.md              # Feature specification (completed)
├── plan.md              # This file (current)
├── research.md          # Phase 0: Not needed (clear CSS/mobile UX patterns)
├── data-model.md        # Phase 1: Not needed (no data model changes)
├── quickstart.md        # Phase 1: Manual testing instructions
├── contracts/           # Phase 1: Not needed (no API contracts)
└── checklists/
    └── requirements.md  # Validation checklist (completed)
```

### Source Code (repository root)

```text
portfolio/
├── portfolio.html          # CV page (primary target for mobile improvements)
├── styles.css              # All styles including mobile media queries (MODIFY)
├── script.js               # JavaScript for interactions (MINOR MODIFY)
├── cv-data.js              # CV content data (NO CHANGES)
├── index.html              # Homepage (NO CHANGES)
├── research-tools.html     # Solutions page (NO CHANGES)
├── contact.html            # Contact page (NO CHANGES)
├── about.html              # About page (NO CHANGES)
└── services.html           # Services page (NO CHANGES)

# No test directory (manual browser testing)
# No build process (static files deployed directly)
```

**Structure Decision**: This is a static website with no source/build separation. All modifications are direct edits to styles.css and minimal changes to script.js. The focus is exclusively on portfolio.html mobile UX within existing media queries (lines 788-901, 2691-2953, 3765-3833 in styles.css).

## Complexity Tracking

> **No constitution violations to justify**

This feature adds no complexity:
- No new libraries or frameworks
- No architectural changes
- No new file structures
- Pure CSS refinements to existing mobile breakpoints
- Minimal JavaScript for touch event handling improvements

## Phase 0: Research (SKIPPED)

**Rationale**: No research needed because:
1. **Mobile UX patterns are well-established**: Touch targets (44x44px), viewport breakpoints (768px/480px), and accessibility guidelines (WCAG 2.1 AA) are industry standards
2. **Current implementation analyzed**: Spec already documents existing mobile styles (styles.css lines 788-901, 2691-2953) with specific issues identified
3. **Clear technical approach**: CSS media query modifications are straightforward with no ambiguity
4. **No technology choices**: No new tools, libraries, or frameworks being evaluated

**Decision**: Proceed directly to Phase 1 (quickstart.md for testing) since all technical decisions are predetermined by the specification and existing codebase structure.

## Phase 1: Design & Contracts

### Data Model (data-model.md)

**Status**: ✅ NOT NEEDED

This feature involves no data model changes:
- CV content data (cv-data.js) remains unchanged
- No new entities or relationships
- Purely presentational CSS modifications
- Existing data structure (positions, skills, education) already documented in CLAUDE.md

### API Contracts (contracts/)

**Status**: ✅ NOT NEEDED

This feature has no API or backend interactions:
- Static HTML/CSS/JS with no server communication
- No endpoints, schemas, or integration contracts
- Download button links to static PDF file
- No data fetching or state synchronization

### Quickstart Guide (quickstart.md)

**Status**: ✅ REQUIRED

Manual testing procedures for mobile UX validation:

```markdown
# Mobile UX Testing Quickstart

## Prerequisites
- Modern browser with DevTools (Chrome 80+, Firefox 75+, Safari 13+)
- Optional: Physical mobile devices (iOS/Android)
- Portfolio site running locally (python -m http.server 8000)

## Test Scenarios

### Scenario 1: CV Navigation Touch Targets
1. Open http://localhost:8000/portfolio.html in Chrome DevTools
2. Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
3. Set viewport to 375x667 (iPhone SE)
4. Verify: All 4 navigation buttons are 44x44px minimum (inspect element)
5. Verify: 2x2 grid layout with 10-12px gaps
6. Tap each button: Experience, Skills, Education, Download
7. Expected: Immediate visual feedback (<100ms), section loads smoothly

### Scenario 2: Skills Section Single Column
1. Navigate to Skills section on 375px viewport
2. Verify: Skill categories display in single column (not 2-column)
3. Verify: 30px gaps between categories
4. Verify: Skill tags have 6px 12px padding, 0.85rem font size
5. Zoom to 200% (Cmd+/Ctrl+)
6. Expected: No horizontal scrolling, tags wrap properly

### Scenario 3: Timeline Readability
1. Navigate to Experience section on 375px viewport
2. Verify: Timeline bars are 3px width, 0.2 opacity
3. Verify: Position titles are 1rem minimum
4. Verify: Date badges and locations stack vertically
5. Verify: Line-height is 1.6+ for responsibilities
6. Expected: All text readable without zooming

### Scenario 4: Interactive Card Touch
1. Tap an expandable position card (e.g., Georgetown Project Manager)
2. Verify: Smooth expansion (<300ms transition)
3. Verify: Skill bars display vertically with labels
4. Tap again to collapse
5. Verify: Smooth collapse animation
6. Expected: No layout shifts, no overlap with other cards

### Scenario 5: Extreme Viewport Tests
1. Test 320px viewport (smallest modern phone)
2. Verify: No horizontal scrolling
3. Verify: Navigation buttons remain tappable
4. Test 768px viewport (tablet boundary)
5. Verify: Mobile styles still apply
6. Test 769px viewport
7. Verify: Desktop styles activate (no mobile changes visible)

## Validation Checklist
- [ ] All touch targets ≥44x44px (use element inspector)
- [ ] No horizontal scroll on 320px-768px viewports
- [ ] Skills grid is 1-column on mobile (not 2-column)
- [ ] Line-height ≥1.6 in all mobile sections
- [ ] Timeline bars are 3px width, 0.2 opacity
- [ ] Navigation buttons have immediate tap feedback
- [ ] Position cards expand/collapse smoothly (<300ms)
- [ ] Desktop views (>768px) are unchanged
```

### Agent Context Update

**Status**: ✅ COMPLETED (CLAUDE.md already documents this project)

Current CLAUDE.md already includes:
- Tech stack: HTML5, CSS3, JavaScript ES6+ (no build process)
- File structure: portfolio.html, styles.css, script.js
- Mobile breakpoints: 768px, 480px
- Recent changes documenting 003-solutions-page-redesign

No new technologies introduced by this feature, so no agent context update needed. CLAUDE.md line 263 already states "HTML5, CSS3, JavaScript ES6+ (no build process)" which covers our implementation approach.

## Implementation Strategy

### Approach: CSS-First Mobile Refinement

1. **Primary Changes (styles.css)**:
   - Modify existing `@media (max-width: 768px)` block (lines 788-901, 2691-2793)
   - Modify existing `@media (max-width: 480px)` block (lines 2795-2953)
   - Focus areas:
     - Skills grid: Change from `repeat(2, 1fr)` to `1fr`
     - Navigation buttons: Verify 44x44px touch targets
     - Timeline: Simplify visual indicators (opacity, width)
     - Text: Ensure 1.6+ line-height
     - Touch feedback: Enhance active states

2. **Secondary Changes (script.js - optional)**:
   - Review timeline card expand/collapse for touch events
   - Verify no hover-dependent interactions on mobile
   - Ensure smooth transitions (<300ms)

3. **Validation (manual testing)**:
   - Chrome DevTools device emulation (375px, 320px, 768px)
   - Physical device testing (iOS Safari, Chrome Mobile)
   - Accessibility audit (Lighthouse, axe DevTools)

### File Modification Summary

| File | Change Type | Lines Affected | Description |
|------|-------------|----------------|-------------|
| styles.css | MODIFY | ~788-901, 2691-2953 | Mobile media query refinements |
| script.js | REVIEW/MINOR | TBD | Touch interaction verification |
| portfolio.html | NO CHANGE | N/A | Structure remains unchanged |
| cv-data.js | NO CHANGE | N/A | Content data unchanged |

### Testing Strategy

**Manual Testing Only** (no automated test suite for static CSS):
1. **Visual Regression**: Compare before/after screenshots at key breakpoints
2. **Touch Target Audit**: Use browser inspector to measure button dimensions
3. **Accessibility Scan**: Run Lighthouse mobile audit (target score: 95+)
4. **Cross-Browser**: Test on iOS Safari, Chrome Mobile, Samsung Internet
5. **Performance**: Verify CSS additions <10KB, no render performance impact

## Next Steps

1. ✅ **Phase 0 Research**: SKIPPED (standard mobile UX patterns)
2. ✅ **Phase 1 Design**: COMPLETED
   - ✅ data-model.md: Not needed (no data changes)
   - ✅ contracts/: Not needed (no API)
   - ✅ quickstart.md: Manual testing guide created (embedded above)
   - ✅ Agent context: No updates needed (already documented)
3. ⏭️ **Phase 2 Tasks**: Run `/speckit.tasks` to generate task breakdown
4. ⏭️ **Implementation**: Run `/speckit.implement` to execute tasks

## Phase 1 Artifacts

- ✅ plan.md: This file
- ✅ quickstart.md: Manual testing procedures (embedded in plan)
- ❌ research.md: Skipped (standard patterns, no research needed)
- ❌ data-model.md: Not applicable (no data model)
- ❌ contracts/: Not applicable (no API contracts)

**Ready for Phase 2**: Run `/speckit.tasks` to generate the implementation task list.
