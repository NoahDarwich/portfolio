# Implementation Plan: Simplified Skill Bar Visualization

**Branch**: `002-skill-bar-simplify` | **Date**: 2025-11-09 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-skill-bar-simplify/spec.md`

## Summary

Replace the multi-colored category-based skill bar visualization with a simplified single-color approach. Remove the stacked horizontal bar showing all skills in different colors, keep only individual skill bars using unified brand color (#667eea), and ensure percentage labels are clearly readable. This change reduces visual complexity while maintaining all existing skill data structure and animation behaviors.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+
**Primary Dependencies**: None (vanilla JavaScript, no frameworks or build tools)
**Storage**: Static JSON data structure in cv-data.js
**Testing**: Manual browser testing (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
**Target Platform**: Static website, all modern browsers
**Project Type**: Single static website (no build process)
**Performance Goals**: Page load < 2s, animations at 60fps, no layout shift
**Constraints**: No build tools, no frameworks, GPU-accelerated animations only (transform/opacity)
**Scale/Scope**: 10 position cards, ~50 total skill bars across CV page

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Constitution Status**: No constitution.md file populated - using default gates for static website project.

### Default Gates for Static Website

✅ **Simplicity**: Feature removes complexity (eliminates multi-color system, removes stacked bar)
✅ **Performance**: No new dependencies, maintains existing animation approach
✅ **Maintainability**: Simplifies CSS rules, reduces color management code
✅ **Compatibility**: Uses existing browser APIs (Intersection Observer), no new requirements
✅ **Data Preservation**: Maintains skill data structure for future use

**Gate Result**: PASS - Feature aligns with simplification and maintainability principles

## Project Structure

### Documentation (this feature)

```text
specs/002-skill-bar-simplify/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Feature specification (already created)
├── research.md          # Phase 0 output (visual design research)
├── data-model.md        # Phase 1 output (skill data structure)
├── quickstart.md        # Phase 1 output (implementation guide)
├── contracts/           # N/A (no API contracts for static site)
├── checklists/          # Quality checklists directory
│   └── requirements.md  # Spec quality checklist (already created)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created yet)
```

### Source Code (repository root)

```text
/home/noahdarwich/code/portfolio/
├── portfolio.html       # CV page HTML (skill section structure)
├── styles.css           # All CSS including skill bar styles (3623 lines)
├── script.js            # JavaScript for skill bar population & animation (20175 bytes)
├── cv-data.js           # Skill data for all positions (9632 bytes)
├── index.html           # Homepage
├── contact.html         # Contact page
├── research-tools.html  # Projects page
├── about.html           # About page
├── services.html        # Services page (legacy)
├── logos/               # Logo assets
├── profile1.jpg         # Profile image
├── specs/               # Feature specifications
│   ├── 001-cv-improvements/  # Previous CV feature
│   └── 002-skill-bar-simplify/  # This feature
└── .specify/            # Specification tooling
```

**Structure Decision**: Static website with flat file structure. All HTML/CSS/JS files in root directory. No build process or module bundling. Changes will be made to:
1. `styles.css` - Update skill bar CSS classes
2. `script.js` - Update skill bar rendering logic
3. `portfolio.html` - Remove stacked bar container if needed
4. `cv-data.js` - No changes (preserve data structure)

## Complexity Tracking

> **No violations - this section not applicable**

This feature reduces complexity by removing multi-color category system.

## Phase 0: Research & Design Decisions

### Research Tasks

1. **Visual Design Best Practices**
   - Research optimal skill bar layouts for single-color designs
   - Evaluate text positioning options (inside bar, outside bar, split label/percentage)
   - Determine contrast ratios for #667eea background with white/light text
   - Investigate WCAG AA compliance for text on colored backgrounds

2. **Animation & Performance**
   - Review existing animation approach (IntersectionObserver + CSS transitions)
   - Confirm GPU-accelerated properties usage (transform, opacity)
   - Verify no layout thrashing or reflow issues

3. **Edge Case Handling**
   - Research text overflow strategies for long skill names
   - Evaluate minimum bar width for readability with small percentages
   - Consider mobile responsive behavior

4. **Reference Implementations**
   - Survey portfolio websites using single-color skill bars
   - Identify common patterns for percentage display
   - Note accessibility best practices

### Design Decisions to Document

1. **Layout Choice**: Determine exact layout pattern:
   - Option A: Skill name left, percentage right, bar below
   - Option B: Skill name + percentage on same line, bar below
   - Option C: Percentage inside bar (if width permits)

2. **Color Specification**: Document exact color usage:
   - Bar fill: #667eea (primary brand color)
   - Bar background: Light gray or transparent with border
   - Text color: White on bar vs dark outside bar

3. **Typography**: Font size, weight, spacing for skill labels

4. **Spacing**: Vertical gap between individual skill bars

## Phase 1: Data Model & Contracts

### Data Model

**File**: `data-model.md`

Document the existing skill data structure in cv-data.js:

```javascript
skills: [
  {
    name: string,        // Skill name (e.g., "Python")
    percentage: number,  // 0-100 representing skill emphasis
    category: string     // Preserved but not visually displayed
                        // Values: technical, management, research,
                        //         communication, process, domain
  }
]
```

**Key Points**:
- Category field preserved for future features (e.g., filtering, sorting)
- Percentage represents skill emphasis in that position, not proficiency
- Name length varies (shortest: "SQL", longest: "Event Dataset Curation")
- Percentage range: 5% (minimum) to 40% (maximum) in current data

### CSS Class Structure

**Before (Multi-color)**:
```css
.skills-stacked-bar          /* Container for multi-color bar */
.skill-segment               /* Individual colored segment */
.skill-technical             /* Blue color */
.skill-management            /* Purple color */
.skill-research              /* Teal color */
.skill-communication         /* Orange color */
.skill-process               /* Green color */
.skill-domain                /* Pink color */
.skills-individual-bars      /* Container for individual bars */
.skill-bar-item              /* Individual skill bar wrapper */
.skill-bar-fill              /* Animated fill element */
```

**After (Unified color)**:
```css
/* REMOVE: .skills-stacked-bar and .skill-segment */
/* REMOVE: All .skill-{category} color classes */
/* KEEP: .skills-individual-bars, .skill-bar-item */
/* UPDATE: .skill-bar-fill to use unified #667eea */
```

### JavaScript Functions

**Functions to Update** (in script.js):

1. `populateSkillBreakdown(element, skills)` - Lines ~469-527
   - Remove stacked bar creation logic
   - Keep individual bar creation
   - Update color class assignment

2. CSS class generation in skill bar rendering
   - Remove category-based class application
   - Apply unified color class

**Functions to Preserve**:
- Animation logic (IntersectionObserver)
- Data population from cvPositions object
- Percentage width calculation

### Contracts

**N/A** - No API contracts for static website. All data is hardcoded in cv-data.js.

### Quickstart Guide

**File**: `quickstart.md`

Will contain:
1. Local development server setup (Python http.server or Live Server)
2. Files to modify (styles.css, script.js, portfolio.html)
3. Browser testing checklist
4. Responsive design testing breakpoints
5. Visual regression testing guidance

## Implementation Strategy

### Phase 2 Preview (Task Breakdown)

Tasks will be generated by `/speckit.tasks` command, but high-level phases:

1. **Setup & Verification**
   - Verify current implementation
   - Create backup/branch confirmation
   - Document current CSS/JS baseline

2. **CSS Updates**
   - Remove stacked bar styles
   - Remove category color classes
   - Update skill bar fill to unified color
   - Adjust text contrast/readability

3. **JavaScript Updates**
   - Remove stacked bar DOM creation
   - Update skill bar rendering to skip category classes
   - Verify animation behavior preserved

4. **HTML Updates** (if needed)
   - Remove stacked bar container from portfolio.html
   - Verify skill section structure

5. **Testing**
   - Visual verification across all 10 positions
   - Responsive design testing (mobile/tablet/desktop)
   - Animation smoothness testing
   - Accessibility testing (contrast ratios)

6. **Documentation**
   - Update specs/001-cv-improvements/spec.md (already done)
   - Verify CLAUDE.md reflects new patterns

### Dependencies & Order

1. Research must complete before CSS changes (to determine exact layout)
2. CSS changes must complete before JavaScript changes (to use new classes)
3. All changes before testing phase

### Rollback Plan

Changes are isolated to 3 files:
- `git diff styles.css` - Review CSS changes
- `git diff script.js` - Review JS changes
- `git diff portfolio.html` - Review HTML changes
- `git checkout -- <file>` - Rollback individual files if needed

## Risk Assessment

### Low Risk
- Single-color approach is simpler than current multi-color system
- No new browser APIs or dependencies
- Changes isolated to visual presentation
- Data structure unchanged (easy rollback)

### Mitigation
- Manual testing in all target browsers before merge
- Visual screenshots of before/after for comparison
- Verify animation performance with browser DevTools

## Success Validation

After implementation, verify against success criteria from spec:

- [ ] **SC-001**: Identify top skill in under 3 seconds (manual testing)
- [ ] **SC-002**: Consistent styling across all 10 positions (visual inspection)
- [ ] **SC-003**: Readable percentages at 16px+ (DevTools font size check)
- [ ] **SC-004**: Page load under 2 seconds (Lighthouse/DevTools)
- [ ] **SC-005**: Animations at 60fps (DevTools Performance tab)

## Next Steps

1. Run `/speckit.tasks` to generate detailed implementation tasks
2. Execute research phase (visual design decisions)
3. Begin CSS/JavaScript modifications
4. Test and validate changes
5. Merge to main branch after validation
