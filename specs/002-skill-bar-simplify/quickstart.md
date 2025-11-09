# Quickstart Guide: Implementing Simplified Skill Bars

**Feature**: 002-skill-bar-simplify
**Estimated Time**: 2-3 hours
**Difficulty**: Moderate

## Overview

This guide walks through implementing the simplified single-color skill bar design. The changes affect only visual presentation - no data structure modifications needed.

## Prerequisites

- ✅ Git repository cloned locally
- ✅ Branch `002-skill-bar-simplify` checked out
- ✅ Local development server available (Python, Node, or VS Code Live Server)
- ✅ Modern web browser with DevTools (Chrome/Firefox/Safari/Edge)
- ✅ [research.md](research.md) and [data-model.md](data-model.md) reviewed

## Files to Modify

| File | Changes | Complexity |
|------|---------|------------|
| `styles.css` | Remove multi-color classes, update skill bar styles | Medium |
| `script.js` | Remove stacked bar logic, simplify rendering | Low |
| `portfolio.html` | Remove stacked bar container (if present) | Low |
| `cv-data.js` | **No changes** | N/A |

## Step-by-Step Implementation

### Step 1: Set Up Development Environment

```bash
# Verify you're on the correct branch
git branch --show-current
# Should output: 002-skill-bar-simplify

# Start local development server

# Option 1: Python
cd /home/noahdarwich/code/portfolio
python3 -m http.server 8000
# Open: http://localhost:8000/portfolio.html

# Option 2: VS Code Live Server
# Right-click portfolio.html → "Open with Live Server"

# Option 3: Node http-server
npx http-server
# Open the URL shown in terminal
```

### Step 2: Document Current State

**Take screenshots BEFORE making changes:**

1. Open `portfolio.html` in browser
2. Navigate to Experience section (should auto-load)
3. Screenshot each position's skill section
4. Note current browser console (should be error-free)

**Optional: Create baseline file**
```bash
# Save current CSS/JS state for comparison
cp styles.css styles.css.backup
cp script.js script.js.backup
```

### Step 3: Update CSS (styles.css)

**Location**: `/home/noahdarwich/code/portfolio/styles.css`

#### 3.1: Remove Stacked Bar Styles

Find and **delete** or **comment out**:

```css
/* DELETE: Lines ~1345-1352 */
.skills-stacked-bar {
    display: flex;
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* DELETE: Lines ~1354-1365 */
.skill-segment {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    transition: all 0.3s ease;
}
```

#### 3.2: Remove Category Color Classes

Find and **delete** (around lines ~1439-1444):

```css
/* DELETE: Category-specific colors */
.skill-technical { background: #667eea; }
.skill-management { background: #764ba2; }
.skill-research { background: #4ecdc4; }
.skill-communication { background: #f6ad55; }
.skill-process { background: #48bb78; }
.skill-domain { background: #ed64a6; }
```

#### 3.3: Update Individual Skill Bar Styles

Find `.skill-bar-fill` (around line ~1403) and replace with:

```css
.skill-bar-fill {
    height: 100%;
    background: #667eea;  /* Unified brand color */
    border-radius: 3px;
    width: 0%;
    transition: width 1.5s cubic-bezier(0.4, 0.0, 0.2, 1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
}
```

#### 3.4: Verify/Update Text Styles

Ensure skill labels use readable colors (should already exist):

```css
.skill-bar-name {
    color: #2d3748;  /* Dark gray for readability */
    font-weight: 500;
}

.skill-bar-percentage {
    color: #2d3748;
    font-weight: 600;
}
```

**Save `styles.css`** and refresh browser to see changes.

### Step 4: Update JavaScript (script.js)

**Location**: `/home/noahdarwich/code/portfolio/script.js`

#### 4.1: Locate the populateSkillBreakdown Function

Find function around line ~469:

```javascript
function populateSkillBreakdown(element, skills) {
    const stackedBar = element.querySelector('.skills-stacked-bar');
    const individualBars = element.querySelector('.skills-individual-bars');

    if (!stackedBar || !individualBars) return;

    // ... function body
}
```

#### 4.2: Remove Stacked Bar Creation Logic

**Delete** this section (typically lines ~476-489):

```javascript
// DELETE THIS ENTIRE BLOCK:
// Create stacked bar segments
stackedBar.innerHTML = '';
skills.forEach(skill => {
    const segment = document.createElement('div');
    segment.className = `skill-segment skill-${skill.category}`;
    segment.style.width = `${skill.percentage}%`;

    // Only show label if segment is large enough
    if (skill.percentage >= 15) {
        segment.textContent = `${skill.percentage}%`;
    }

    segment.title = `${skill.name}: ${skill.percentage}%`;
    stackedBar.appendChild(segment);
});
```

#### 4.3: Update Individual Bar Creation Logic

Find this section (typically lines ~491-509) and **modify**:

**Before:**
```javascript
const barItem = document.createElement('div');
barItem.className = 'skill-bar-item';

barItem.innerHTML = `
    <div class="skill-bar-header">
        <span class="skill-bar-name">${skill.name}</span>
        <span class="skill-bar-percentage">${skill.percentage}%</span>
    </div>
    <div class="skill-bar-track">
        <div class="skill-bar-fill skill-${skill.category}" data-percentage="${skill.percentage}"></div>
    </div>
`;
```

**After (remove category class):**
```javascript
const barItem = document.createElement('div');
barItem.className = 'skill-bar-item';

barItem.innerHTML = `
    <div class="skill-bar-header">
        <span class="skill-bar-name">${skill.name}</span>
        <span class="skill-bar-percentage">${skill.percentage}%</span>
    </div>
    <div class="skill-bar-track">
        <div class="skill-bar-fill" data-percentage="${skill.percentage}"></div>
    </div>
`;
```

**Key Change**: Removed `skill-${skill.category}` from the class attribute.

#### 4.4: Update Function Signature

**Before:**
```javascript
function populateSkillBreakdown(element, skills) {
    const stackedBar = element.querySelector('.skills-stacked-bar');
    const individualBars = element.querySelector('.skills-individual-bars');

    if (!stackedBar || !individualBars) return;
```

**After:**
```javascript
function populateSkillBreakdown(element, skills) {
    const individualBars = element.querySelector('.skills-individual-bars');

    if (!individualBars) return;
```

**Save `script.js`** and refresh browser.

### Step 5: Update HTML (portfolio.html)

**Location**: `/home/noahdarwich/code/portfolio/portfolio.html`

This step may not be necessary if the stacked bar is only created via JavaScript. Verify by inspecting the HTML.

#### 5.1: Search for Stacked Bar Container

```bash
# Search for stacked bar references
grep -n "skills-stacked-bar" portfolio.html
```

If found, locate each instance and **remove**:

```html
<!-- DELETE if present: -->
<div class="skills-stacked-bar"></div>
```

**Keep everything else** in the skills section:

```html
<!-- KEEP THIS: -->
<div class="skills-breakdown-section">
    <h4>Skills</h4>
    <div class="skills-individual-bars"></div>
</div>
```

**Save `portfolio.html`** if changes were made.

### Step 6: Test Implementation

#### 6.1: Visual Verification

Open `portfolio.html` in browser and verify:

- [ ] Stacked multi-color bar is **gone**
- [ ] Individual skill bars display with **uniform #667eea color**
- [ ] Skill names and percentages are clearly readable
- [ ] Bars animate when scrolling into view
- [ ] No console errors in DevTools

#### 6.2: Test All Positions

The CV page has 10 positions with skills. Verify each:

1. Freelance Yale (2025)
2. Freelance Oxford (2025)
3. Rockwool Foundation (2024)
4. Georgetown Project Manager (2023)
5. Georgetown Senior RA (2021)
6. Le Wagon Lecturer (2023)
7. Le Wagon TA (2022)
8. Princeton RA (2018)
9. Princeton Fieldwork (2019)
10. AUB RA (2019)

**Checklist per position:**
- [ ] Skills section displays
- [ ] All skills rendered
- [ ] Unified color used
- [ ] Percentages visible
- [ ] Animation works

#### 6.3: Responsive Testing

Test at different viewport widths:

```javascript
// Desktop
// Window width: 1200px+
// Expected: Full layout, 12px bar height

// Tablet
// Window width: 768-1199px
// Expected: Full layout, 12px bar height

// Mobile
// Window width: 360-767px
// Expected: Full layout, 10px bar height (if CSS includes responsive rules)

// Small Mobile
// Window width: <360px
// Expected: Labels may stack vertically if very narrow
```

**Use Chrome DevTools**:
- Press `F12` → Toggle device toolbar (`Ctrl+Shift+M`)
- Test: iPhone SE (375px), iPad (768px), Desktop (1200px)

#### 6.4: Animation Performance

**Test scroll animation smoothness:**

1. Open DevTools → Performance tab
2. Start recording
3. Scroll to a position with skills (trigger animation)
4. Stop recording
5. Check for:
   - No frame drops (green bars should be under 16ms for 60fps)
   - No layout thrashing (minimal purple bars)
   - Smooth animation curve

**Verify no console errors:**
- Check DevTools Console tab
- Should be clean (no red errors)

### Step 7: Accessibility Testing

#### 7.1: Keyboard Navigation

Since skill bars are non-interactive, keyboard nav testing is minimal:

- [ ] Tab through page - no unexpected focus traps
- [ ] Screen reader announces skill percentages correctly

#### 7.2: Color Contrast

**Test with browser DevTools or online checker:**

1. Inspect `.skill-bar-name` element
2. Verify color contrast:
   - Text: #2d3748
   - Background: #ffffff (page background)
   - Expected ratio: 15.8:1 (passes WCAG AAA)

3. Verify bar visibility:
   - Bar: #667eea
   - Track: #e2e8f0
   - Sufficient contrast for visual distinction

#### 7.3: Screen Reader Testing (Optional)

If available, test with screen reader:

- **NVDA (Windows)** or **VoiceOver (Mac)**
- Navigate to skills section
- Verify announcements include skill names and percentages

### Step 8: Cross-Browser Testing

Test in multiple browsers:

- [ ] **Chrome** (primary development browser)
- [ ] **Firefox**
- [ ] **Safari** (Mac/iOS)
- [ ] **Edge**

**Check for:**
- Visual consistency
- Animation smoothness
- No browser-specific errors

### Step 9: Performance Verification

#### 9.1: Page Load Speed

**Using Lighthouse:**

```bash
# Chrome DevTools → Lighthouse tab
# Run audit for Performance, Accessibility, Best Practices
```

**Expected Results:**
- Performance: >90
- Accessibility: >95
- Page load: <2 seconds

#### 9.2: Animation Frame Rate

**DevTools Performance Tab:**
- Record during skill bar animation
- Verify 60fps (16ms per frame)
- No long tasks (>50ms)

### Step 10: Final Checks

#### 10.1: Git Diff Review

```bash
# Review all changes
git diff styles.css
git diff script.js
git diff portfolio.html  # If modified

# Verify only intended changes
```

#### 10.2: Visual Comparison

Compare screenshots:
- Before (Step 2)
- After (Step 6)

**Expected differences:**
- ✅ Stacked bar removed
- ✅ Single color used throughout
- ✅ Text/layout unchanged

**Unexpected differences (fix if found):**
- ❌ Broken layouts
- ❌ Missing skills
- ❌ Wrong colors

## Troubleshooting

### Issue: Skill bars not displaying

**Check:**
1. JavaScript console for errors
2. Verify `populateSkillBreakdown` is called
3. Check `.skills-individual-bars` element exists in HTML
4. Verify cv-data.js is loaded

**Fix:**
```javascript
// Add debug logging
console.log('Skills data:', skills);
console.log('Individual bars container:', individualBars);
```

### Issue: Wrong colors showing

**Check:**
1. Old CSS still cached - hard refresh (Ctrl+Shift+R)
2. Category classes still being applied in JavaScript
3. Browser DevTools → Elements → Inspect `.skill-bar-fill`

**Fix:**
```bash
# Clear browser cache completely
# Verify changes saved to files
```

### Issue: Animation not working

**Check:**
1. Intersection Observer initialized correctly
2. CSS transition property present on `.skill-bar-fill`
3. `data-percentage` attribute set

**Fix:**
```javascript
// Verify observer is watching the right elements
const fills = document.querySelectorAll('.skill-bar-fill');
console.log('Found', fills.length, 'skill bars');
```

### Issue: Layout shifts on load

**Check:**
1. Bar height defined in CSS
2. Container has explicit dimensions
3. No content reflow during JavaScript execution

**Fix:**
```css
/* Ensure container height is set */
.skill-bar-track {
  height: 12px;  /* Explicit height prevents shift */
}
```

## Testing Checklist

Use this checklist for final validation:

### Visual
- [ ] No stacked bar visible
- [ ] All skill bars use #667eea color
- [ ] Skill names readable
- [ ] Percentages readable
- [ ] Proper spacing between bars

### Functional
- [ ] All 10 positions render correctly
- [ ] Animation triggers on scroll
- [ ] Animation is smooth (60fps)
- [ ] No console errors

### Responsive
- [ ] Desktop (1200px+) ✓
- [ ] Tablet (768px) ✓
- [ ] Mobile (375px) ✓

### Accessibility
- [ ] Color contrast passes WCAG AA
- [ ] Text readable at all sizes
- [ ] No keyboard traps
- [ ] Screen reader compatible

### Performance
- [ ] Page load <2s
- [ ] Lighthouse score >90
- [ ] No layout shifts
- [ ] Smooth animations

### Cross-Browser
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

## Next Steps

After successful testing:

1. **Commit changes**:
   ```bash
   git add styles.css script.js portfolio.html
   git commit -m "Simplify skill bars to unified color design

   - Remove stacked multi-color bar visualization
   - Apply single brand color (#667eea) to all skill bars
   - Remove category-based color classes
   - Preserve skill data structure for future use

   Closes: specs/002-skill-bar-simplify"
   ```

2. **Create tasks.md** (if using /speckit.tasks command):
   ```bash
   # Will generate detailed task breakdown for implementation
   ```

3. **Merge to main** (after validation):
   ```bash
   git checkout master
   git merge 002-skill-bar-simplify
   ```

## Resources

- [research.md](research.md) - Design decisions and rationale
- [data-model.md](data-model.md) - Data structure documentation
- [spec.md](spec.md) - Feature specification
- [plan.md](plan.md) - Implementation plan

## Support

If you encounter issues:

1. Check troubleshooting section above
2. Review browser console for errors
3. Compare with backup files (if created)
4. Rollback if necessary: `git checkout -- <filename>`

---

**Version**: 1.0
**Last Updated**: 2025-11-09
**Estimated Completion Time**: 2-3 hours
