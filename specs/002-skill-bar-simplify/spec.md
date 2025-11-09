# Feature Specification: Simplified Skill Bar Visualization

**Feature Branch**: `002-skill-bar-simplify`
**Created**: 2025-11-09
**Status**: Draft
**Input**: User description: "for the skill bar, plan for only one colored paragraph with percentages, find the best visual for that, and keep unified color code for the skills. Update the md files"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Unified Skill Display (Priority: P1)

Portfolio visitors need to quickly understand the skill composition for each position without cognitive overload from multiple color-coded categories. The current multi-color stacked bar creates visual complexity that may distract from the actual skill information.

**Why this priority**: This is the core change - simplifying the visual representation to a single-color display with clear percentage labels. Without this, the feature has no value.

**Independent Test**: Can be fully tested by loading the CV page, expanding any position card, and verifying that skill bars display in a unified color with percentage labels visible on each bar.

**Acceptance Scenarios**:

1. **Given** a portfolio visitor views a position's skills section, **When** the skills are displayed, **Then** all skill bars use a single unified color (the primary brand gradient color #667eea)
2. **Given** a portfolio visitor views a position's skills section, **When** looking at the skill bars, **Then** each bar shows the skill name and percentage value clearly labeled
3. **Given** a portfolio visitor views a position's skills section, **When** the skills are displayed, **Then** no category-based color coding is used (no technical=blue, management=purple, etc.)

---

### User Story 2 - Remove Stacked Bar Visualization (Priority: P1)

Portfolio visitors currently see two skill visualizations per position: a stacked horizontal bar and individual skill bars. The stacked bar uses multiple colors representing categories, which is being removed in favor of simplicity.

**Why this priority**: Essential to the simplification goal - removing the multi-colored stacked bar reduces visual clutter and focuses attention on individual skill percentages.

**Independent Test**: Can be tested by viewing any position card and confirming that only individual skill bars are visible, with no stacked multi-color bar present.

**Acceptance Scenarios**:

1. **Given** a portfolio visitor views a position's skills section, **When** the section loads, **Then** the stacked horizontal bar (showing all skills in different colors) is not displayed
2. **Given** a portfolio visitor views a position's skills section, **When** the section loads, **Then** only individual skill bars with percentages are shown

---

### User Story 3 - Clear Percentage Labels (Priority: P2)

Portfolio visitors need to see exact skill percentages clearly without needing to hover or inspect closely. The unified color scheme makes percentage text critical for understanding skill distribution.

**Why this priority**: With a single color, percentage values become the primary differentiator between skills. Clear labeling is essential for usability.

**Independent Test**: Can be tested by viewing skill bars and verifying percentage text is readable, properly positioned, and visible on all skill bars regardless of bar width.

**Acceptance Scenarios**:

1. **Given** a portfolio visitor views individual skill bars, **When** the bars are displayed, **Then** each bar shows its percentage value clearly labeled (e.g., "Python 30%")
2. **Given** a skill bar with a low percentage value (e.g., 10%), **When** displayed, **Then** the percentage text remains readable and doesn't overflow the bar
3. **Given** a portfolio visitor views skill bars, **When** looking at the percentage labels, **Then** the text contrasts well with the bar color for readability

---

### Edge Cases

- What happens when a skill percentage is very small (e.g., 5%)? The bar should still be visible and the label should remain readable
- How does the system handle long skill names with percentages? Text should truncate gracefully or wrap without breaking layout
- What if a position has many skills (10+)? All bars should display without performance degradation or layout issues

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display all skill bars using a single unified color (#667eea, the primary brand color)
- **FR-002**: System MUST remove all category-based color coding from skill visualizations (no technical/management/research/communication/process/domain color distinctions)
- **FR-003**: System MUST remove the stacked horizontal bar visualization from position skill sections
- **FR-004**: System MUST display skill name and percentage value on each individual skill bar (e.g., "Python 30%")
- **FR-005**: System MUST ensure percentage text is readable and properly contrasted against the bar background
- **FR-006**: System MUST maintain the animated skill bar fill behavior when scrolling into view
- **FR-007**: System MUST preserve the existing skill data structure in cv-data.js (skill name, percentage, category) for future use
- **FR-008**: System MUST update the CV improvements specification document (specs/001-cv-improvements/spec.md) to reflect the new simplified skill visualization approach

### Key Entities *(include if feature involves data)*

- **Skill Bar**: Individual visual representation of a skill showing name and percentage value in unified color
- **Skill Data**: Existing data structure containing name, percentage, and category (category preserved but not visually displayed)
- **Position Card**: Container displaying responsibilities and skill visualizations for each work position

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Portfolio visitors can identify the top skill for any position in under 3 seconds (previously required parsing multiple colors)
- **SC-002**: All skill bars render with consistent visual styling across all 10 positions on the CV page
- **SC-003**: Percentage values are readable at normal viewing distance (equivalent to 16px+ font size) for all skill bars
- **SC-004**: Page load and rendering performance remains unchanged (under 2 seconds for full CV page load)
- **SC-005**: Skill bar animations maintain 60fps smoothness when scrolling into view

## Design Considerations

### Visual Design

The simplified skill bar design should:
- Use a single color (#667eea) for all skill bars to reduce visual noise
- Display percentage values prominently on or near each bar
- Maintain adequate spacing between skill bars for readability
- Ensure text contrast meets WCAG AA standards (4.5:1 minimum)

### Layout Options

Recommended layout for individual skill bars:
```
[Skill Name]                    [30%]
████████████░░░░░░░░░░░░░░░░░░░

or

[Skill Name 30%]
████████████░░░░░░░░░░░░░░░░░░░
```

The skill name and percentage should be clearly associated with the visual bar.

## Out of Scope

- Adding skill proficiency levels beyond percentages
- Filterable or sortable skill displays
- Skill comparison across positions
- Dark mode color variations
- Print stylesheet optimization for skill bars
- Adding skill icons or badges

## Assumptions

- The primary brand color #667eea provides sufficient visual appeal as a single color
- Portfolio visitors prefer simplicity over detailed categorization in skill displays
- Percentage values provide sufficient information without category labels
- The existing skill animation behavior should be preserved
- The category field in cv-data.js may be useful for future features (e.g., filtering) and should remain in the data structure

## Dependencies

- Existing CSS styles for skill bars (styles.css)
- Existing JavaScript for skill bar population and animation (script.js)
- Skill data structure in cv-data.js
- CV improvements specification document (specs/001-cv-improvements/spec.md)
