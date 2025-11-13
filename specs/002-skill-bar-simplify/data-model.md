# Data Model: Skill Bar Visualization

**Feature**: 002-skill-bar-simplify
**Last Updated**: 2025-11-09

## Overview

This document defines the data structures used for skill visualization on the CV page. The data model preserves all existing structure while changing only the visual presentation layer.

## Core Data Structure

### Skill Object

Located in: `cv-data.js`

```javascript
{
  name: string,        // Skill name displayed to user
  percentage: number,  // Skill emphasis (0-100)
  category: string     // Preserved for future use, not visually displayed
}
```

### Field Definitions

#### `name` (string, required)
- **Purpose**: Human-readable skill name
- **Format**: Plain text, no special formatting
- **Length**: Variable (3-30 characters typical)
- **Examples**:
  - Short: "SQL", "Git", "Python"
  - Medium: "Data Analysis", "Machine Learning"
  - Long: "Event Dataset Curation", "Quality Control & Audits"
- **Validation**: Non-empty string
- **Display**: Rendered as-is in skill bar header

#### `percentage` (number, required)
- **Purpose**: Represents the emphasis/weight of this skill in the specific position
- **Range**: 5-100 (integers)
- **Interpretation**: Relative importance within that role, NOT absolute proficiency
- **Current Data Range**: 5% (minimum) to 40% (maximum)
- **Validation**: Integer between 0-100
- **Display**: Shown as "{value}%" next to skill name, controls bar width

**Important**: Percentage represents skill distribution within a single position. A 30% Python skill means Python represented 30% of the work in that role, not that the person has 30% Python proficiency.

#### `category` (string, required but not displayed)
- **Purpose**: Categorizes skills for potential future filtering/grouping features
- **Current Values**:
  - `technical`: Programming, tools, frameworks
  - `management`: Leadership, project management
  - `research`: Research methods, analysis techniques
  - `communication`: Teaching, writing, presentation
  - `process`: QA, audits, workflows
  - `domain`: Subject-matter expertise
- **Status**: **Preserved in data but not visually displayed** in simplified design
- **Validation**: Must be one of the six predefined categories
- **Future Use Cases**:
  - Filter positions by skill category
  - Sort skills by type
  - Aggregate skills across positions
  - Generate skill category summaries

## Position Object Structure

### Position with Skills

Located in: `cv-data.js` → `cvPositions` object

```javascript
{
  'position-id': {
    title: string,
    organization: string,
    location: string,
    dates: string,
    responsibilities: string[],
    skills: Skill[]  // Array of Skill objects
  }
}
```

### Example: Complete Position Entry

```javascript
'georgetown-pm-2023': {
  title: 'Project Manager',
  organization: 'Georgetown University',
  location: 'Washington, D.C., USA',
  dates: 'Apr 2023 – Oct 2024',
  responsibilities: [
    'Developed a data collection strategy for quantitative event datasets',
    'Oversaw all aspects of research projects, including planning and execution',
    'Designed and conducted training sessions for research assistants',
    // ... more responsibilities
  ],
  skills: [
    { name: 'Team Management', percentage: 25, category: 'management' },
    { name: 'Python', percentage: 20, category: 'technical' },
    { name: 'AI Automation', percentage: 20, category: 'technical' },
    { name: 'Quality Assurance', percentage: 15, category: 'process' },
    { name: 'Training & Mentoring', percentage: 10, category: 'communication' },
    { name: 'Arabic NLP', percentage: 10, category: 'domain' }
  ]
}
```

## Data Constraints

### Validation Rules

1. **Skill Array**:
   - Minimum: 1 skill per position (though typically 4-6)
   - Maximum: No hard limit (typically 5-7 for readability)
   - Order: Preserved from data file (typically sorted by percentage descending)

2. **Percentage Totals**:
   - Percentages within a position should sum to ~100%
   - Exact 100% not strictly enforced (some positions may be 95-105%)
   - Each skill should have meaningful percentage (≥5% recommended)

3. **Category Distribution**:
   - No constraints on category balance
   - A position may have all skills in one category
   - A position may span all six categories

### Current Dataset Statistics

**Total Positions**: 10
**Total Skills**: ~50 across all positions
**Skills Per Position**: 3-6 (average: 5)

**Percentage Distribution**:
- Minimum: 5% (rare, only for minor skills)
- Maximum: 40% (for dominant skills)
- Typical: 10-30%

**Category Distribution** (across all positions):
- Technical: ~40% of all skills
- Research: ~25%
- Management: ~15%
- Communication: ~10%
- Process: ~5%
- Domain: ~5%

## HTML Rendering Structure

### Current Implementation (to be simplified)

```html
<div class="timeline-skills">
  <div class="skills-breakdown-section">
    <h4>Skills</h4>

    <!-- REMOVE: Stacked bar showing all skills with category colors -->
    <div class="skills-stacked-bar">
      <!-- Multiple colored segments, one per skill -->
    </div>

    <!-- KEEP: Individual skill bars -->
    <div class="skills-individual-bars">
      <div class="skill-bar-item">
        <div class="skill-bar-header">
          <span class="skill-bar-name">Python</span>
          <span class="skill-bar-percentage">30%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-percentage="30"></div>
        </div>
      </div>
      <!-- More skill bars... -->
    </div>
  </div>
</div>
```

### Target Implementation (simplified)

```html
<div class="timeline-skills">
  <div class="skills-breakdown-section">
    <h4>Skills</h4>

    <!-- ONLY: Individual skill bars with unified color -->
    <div class="skills-individual-bars">
      <div class="skill-bar-item">
        <div class="skill-bar-header">
          <span class="skill-bar-name">Python</span>
          <span class="skill-bar-percentage">30%</span>
        </div>
        <div class="skill-bar-track">
          <!-- No category class on fill element -->
          <div class="skill-bar-fill" data-percentage="30"></div>
        </div>
      </div>
      <!-- More skill bars... -->
    </div>
  </div>
</div>
```

## CSS Class Mapping

### Before (Multi-Color System)

```css
/* Stacked bar container */
.skills-stacked-bar { }

/* Individual segment in stacked bar */
.skill-segment { }

/* Category-based colors */
.skill-technical { background: #667eea; }
.skill-management { background: #764ba2; }
.skill-research { background: #4ecdc4; }
.skill-communication { background: #f6ad55; }
.skill-process { background: #48bb78; }
.skill-domain { background: #ed64a6; }

/* Individual bar elements */
.skills-individual-bars { }
.skill-bar-item { }
.skill-bar-header { }
.skill-bar-name { }
.skill-bar-percentage { }
.skill-bar-track { }
.skill-bar-fill { }  /* Has category class applied */
```

### After (Unified Color System)

```css
/* REMOVED: .skills-stacked-bar, .skill-segment */
/* REMOVED: All .skill-{category} classes */

/* Individual bar elements (kept) */
.skills-individual-bars { }
.skill-bar-item { }
.skill-bar-header { }
.skill-bar-name { }
.skill-bar-percentage { }
.skill-bar-track { }
.skill-bar-fill {
  background: #667eea;  /* Unified color, no category class */
}
```

## JavaScript Data Flow

### Data Retrieval

```javascript
// Function: populateSkillBreakdown(element, skills)
// Input: element (DOM node), skills (array of Skill objects)
// Source: script.js, lines ~469-527

// 1. Get skills array from position data
const positionId = element.getAttribute('data-position-id');
const positionData = cvPositions[positionId];
const skills = positionData.skills;

// 2. Iterate through skills array
skills.forEach(skill => {
  // skill.name → displayed as text
  // skill.percentage → used for bar width
  // skill.category → NOT USED in simplified version
});
```

### Rendering Logic Changes

**Before (Multi-Color)**:
```javascript
// Create stacked bar
const stackedBar = element.querySelector('.skills-stacked-bar');
skills.forEach(skill => {
  const segment = document.createElement('div');
  segment.className = `skill-segment skill-${skill.category}`;  // Category class
  segment.style.width = `${skill.percentage}%`;
  stackedBar.appendChild(segment);
});

// Create individual bars
skills.forEach(skill => {
  const fill = document.createElement('div');
  fill.className = `skill-bar-fill skill-${skill.category}`;  // Category class
  fill.setAttribute('data-percentage', skill.percentage);
  // ... append to DOM
});
```

**After (Unified Color)**:
```javascript
// Stacked bar removed entirely

// Create individual bars only
skills.forEach(skill => {
  const fill = document.createElement('div');
  fill.className = 'skill-bar-fill';  // NO category class
  fill.setAttribute('data-percentage', skill.percentage);
  // ... append to DOM
});
```

## Migration Notes

### Data Preservation

**No changes required to cv-data.js**:
- All skill objects remain unchanged
- Category field still present in data
- Percentages unchanged
- Skill names unchanged

**Why preserve category data?**:
1. Enables future features (filtering, grouping, analytics)
2. Maintains data semantics (skills have inherent categories)
3. Zero migration cost (no data transformation needed)
4. Easy to restore category visualization if needed

### Rollback Strategy

If the simplified design needs to be reverted:
1. Data is already in place (no changes needed)
2. Restore CSS classes for `.skill-{category}`
3. Restore stacked bar rendering logic in JavaScript
4. Restore HTML structure with stacked bar container

## Future Enhancements

### Potential Use Cases for Category Data

1. **Skill Filtering**:
   ```javascript
   // Filter positions by technical skills only
   const techSkills = position.skills.filter(s => s.category === 'technical');
   ```

2. **Category Aggregation**:
   ```javascript
   // Sum percentages by category across all positions
   const categoryTotals = positions.reduce((acc, pos) => {
     pos.skills.forEach(skill => {
       acc[skill.category] = (acc[skill.category] || 0) + skill.percentage;
     });
     return acc;
   }, {});
   ```

3. **Skill Recommendations**:
   - "This position emphasizes technical skills (60%)"
   - "Looking for roles with more management focus"

4. **Portfolio Analytics**:
   - Chart showing skill category distribution over career
   - Timeline of skill category evolution

## References

- **Data File**: `/cv-data.js`
- **Rendering Logic**: `/script.js` (function `populateSkillBreakdown`)
- **HTML Structure**: `/portfolio.html` (`.timeline-skills` sections)
- **CSS Styles**: `/styles.css` (`.skill-*` classes)

---

**Version**: 1.0
**Status**: Documented (data unchanged, visualization simplified)
