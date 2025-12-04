# Mobile UX Testing Quickstart

## Prerequisites

- Modern browser with DevTools (Chrome 80+, Firefox 75+, Safari 13+)
- Optional: Physical mobile devices (iOS/Android)
- Portfolio site running locally (python -m http.server 8000)

## Quick Start

1. **Start local server**:
   ```bash
   cd /home/noahdarwich/code/portfolio
   python -m http.server 8000
   ```

2. **Open in browser with DevTools**:
   - Navigate to http://localhost:8000/portfolio.html
   - Open DevTools (F12 or Cmd+Option+I)
   - Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
   - Select "iPhone SE" or custom 375x667 viewport

3. **Run test scenarios** (see below)

## Test Scenarios

### Scenario 1: CV Navigation Touch Targets

**Goal**: Verify navigation buttons meet WCAG 2.1 AA touch target guidelines

1. Open http://localhost:8000/portfolio.html in Chrome DevTools
2. Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
3. Set viewport to 375x667 (iPhone SE)
4. Inspect navigation buttons (right-click > Inspect)
5. Verify: All 4 buttons (Experience, Skills, Education, Download) are 44x44px minimum
6. Verify: 2x2 grid layout with 10-12px gaps
7. Tap each button and observe:
   - Immediate visual feedback (<100ms)
   - Section loads smoothly
   - Active state clearly visible

**Pass Criteria**:
- ✅ All buttons ≥44x44px touch target
- ✅ Grid gap ≥10px
- ✅ Visual feedback on tap

### Scenario 2: Skills Section Single Column

**Goal**: Ensure skills are readable on small screens without horizontal scrolling

1. Navigate to Skills section on 375px viewport
2. Verify: Skill categories display in single column (not 2-column cramped layout)
3. Verify: 30px vertical gaps between categories
4. Verify: Skill tags have:
   - Padding: 6px 12px
   - Font size: 0.85rem
   - Proper wrapping (no broken words)
5. Zoom to 200% (Cmd+ / Ctrl+)
6. Scroll through all categories

**Pass Criteria**:
- ✅ Single-column layout on mobile
- ✅ No horizontal scrolling at 200% zoom
- ✅ Tags wrap properly, text readable

### Scenario 3: Timeline Readability

**Goal**: Verify timeline is simplified for mobile with readable text

1. Navigate to Experience section on 375px viewport
2. Inspect timeline elements:
   - Timeline bars: Should be 3px width, 0.2 opacity (subtle, not prominent)
   - Position titles: Should be 1rem minimum font size
   - Date badges and locations: Should stack vertically (flex-direction: column)
3. Check text line-height:
   - Responsibilities list: Should be 1.6+ line-height
   - Position descriptions: Should be comfortable to read
4. Verify no text truncation or awkward wrapping

**Pass Criteria**:
- ✅ Timeline bars visually de-emphasized (3px, 0.2 opacity)
- ✅ Position titles ≥1rem, clearly readable
- ✅ Metadata stacks vertically
- ✅ Line-height ≥1.6 for comfortable reading

### Scenario 4: Interactive Card Touch

**Goal**: Ensure expandable position cards work smoothly on touch devices

1. Tap an expandable position card (e.g., "Georgetown University - Project Manager")
2. Observe expansion animation:
   - Should be smooth (<300ms transition)
   - No layout shifts or overlaps with other cards
3. Verify expanded content:
   - Skill bars display vertically
   - Skill names and percentages clearly labeled
   - Responsibilities list is readable
4. Tap the same card again to collapse
5. Observe collapse animation (smooth, <300ms)
6. Repeat with multiple cards to test interaction

**Pass Criteria**:
- ✅ Smooth expand/collapse animations
- ✅ No layout shifts or content overlap
- ✅ Skill bars stack vertically with labels
- ✅ Can tap to toggle open/closed state

### Scenario 5: Extreme Viewport Tests

**Goal**: Verify layout works on smallest and largest mobile viewports

**Test 1: Smallest viewport (320px - iPhone SE 1st gen)**
1. Set viewport to 320x568
2. Navigate through all CV sections
3. Verify: No horizontal scrolling
4. Verify: Navigation buttons remain tappable
5. Verify: Text is readable (may be small but not truncated)

**Test 2: Tablet boundary (768px)**
1. Set viewport to 768x1024
2. Verify: Mobile styles still apply
3. Navigation should be 2x2 grid
4. Skills should be single column

**Test 3: Desktop activation (769px)**
1. Set viewport to 769x1024
2. Verify: Desktop styles activate
3. Skills should be 2-column grid
4. Timeline should have full desktop styling
5. No mobile-specific layouts visible

**Pass Criteria**:
- ✅ 320px: No horizontal scroll, all content accessible
- ✅ 768px: Mobile styles active
- ✅ 769px: Desktop styles active, mobile styles hidden

## Validation Checklist

Use this checklist to verify all improvements are implemented correctly:

### Touch Targets & Accessibility
- [ ] All touch targets ≥44x44px (use element inspector to measure)
- [ ] Navigation buttons provide immediate visual feedback on tap
- [ ] No hover-only interactions on mobile (all actions work via tap)
- [ ] Text contrast meets WCAG 2.1 AA (4.5:1 minimum)

### Layout & Spacing
- [ ] No horizontal scroll on 320px-768px viewports
- [ ] Skills grid is 1-column on mobile (not 2-column)
- [ ] Skill categories have 30px vertical gaps
- [ ] Position cards have 16-20px vertical spacing
- [ ] Navigation grid has 10-12px gaps between buttons

### Typography & Readability
- [ ] Line-height ≥1.6 in all mobile sections
- [ ] Position titles ≥1rem font size
- [ ] Skill tags ≥0.85rem font size with 6px 12px padding
- [ ] Date badges ≥0.85rem, readable on small screens

### Visual Indicators
- [ ] Timeline bars are 3px width, 0.2 opacity (de-emphasized)
- [ ] Timeline metadata stacks vertically (dates, locations)
- [ ] Hover indicators hidden on mobile
- [ ] Active states clearly visible for all interactive elements

### Animations & Transitions
- [ ] Position cards expand/collapse smoothly (<300ms)
- [ ] Tap feedback appears within 100ms
- [ ] No layout shifts during expand/collapse
- [ ] Animations work smoothly even on slower devices

### Cross-Viewport Compatibility
- [ ] Desktop views (>768px) are unchanged from original
- [ ] Mobile styles activate correctly at 768px breakpoint
- [ ] Extreme viewports (320px, 768px) handle gracefully
- [ ] Zoom to 200% works without horizontal scroll

## Accessibility Testing

### Lighthouse Audit
1. Open Chrome DevTools > Lighthouse tab
2. Select "Mobile" device
3. Check "Accessibility" category
4. Run audit
5. Target score: ≥95

**Common issues to check**:
- Touch target sizes
- Color contrast ratios
- Text readability
- Focus indicators

### Manual Accessibility Checks
1. **Keyboard navigation**: Ensure CV sections accessible via Tab key
2. **Screen reader**: Test with VoiceOver (Mac) or TalkBack (Android)
3. **Zoom**: Verify 200% zoom doesn't break layout
4. **Color blindness**: Check color contrast for all text

## Physical Device Testing (Optional)

If you have access to physical devices, test on:

### iOS Devices
- iPhone SE (1st or 2nd gen) - 4.7" screen
- iPhone 12/13/14 standard - 6.1" screen
- iPad Mini - 8.3" screen (should show desktop view at 769px width)

### Android Devices
- Google Pixel 6 - Chrome Mobile
- Samsung Galaxy S21 - Samsung Internet
- OnePlus 9 - Chrome Mobile

**Test checklist per device**:
- [ ] Navigation buttons tappable with thumb
- [ ] Text readable without zooming
- [ ] Smooth scrolling through timeline
- [ ] No layout shifts or flickering
- [ ] Download button works (CV PDF downloads)

## Performance Testing

### Load Time
1. Open DevTools > Network tab
2. Enable "Slow 3G" throttling
3. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
4. Measure: Time to Interactive (TTI)
5. Target: <3 seconds

### CSS Size
1. Check styles.css file size before and after changes
2. Verify: Additions <10KB (uncompressed)
3. Optional: Use gzip to check compressed size difference

### Animation Performance
1. Open DevTools > Performance tab
2. Start recording
3. Expand/collapse multiple position cards
4. Stop recording
5. Verify: 60fps maintained (no dropped frames)

## Troubleshooting

### Navigation buttons too small
- Inspect `.cv-nav-link` in DevTools
- Check padding and min-height values
- Ensure grid template doesn't constrain button size

### Skills still showing 2 columns
- Verify media query `@media (max-width: 768px)` is active
- Check `.skills-grid-enhanced` has `grid-template-columns: 1fr`
- Clear browser cache (hard refresh)

### Timeline bars still prominent
- Inspect `.timeline-duration-bar` in mobile view
- Verify `width: 3px` and `opacity: 0.2`
- Check media query is correctly scoped

### Horizontal scrolling on 320px
- Inspect elements exceeding viewport width
- Check for:
  - Fixed-width elements without max-width
  - Padding/margin causing overflow
  - Long words without word-wrap
  - Images without max-width: 100%

## Reporting Issues

When reporting issues found during testing, include:

1. **Viewport size**: (e.g., 375x667)
2. **Browser/Device**: (e.g., Chrome 120 on macOS, iOS Safari 16)
3. **Section**: (e.g., Experience, Skills, Education)
4. **Expected behavior**: (from acceptance scenarios)
5. **Actual behavior**: (what you observed)
6. **Screenshot**: (if visual issue)
7. **Severity**: (Critical, High, Medium, Low)

Example:
```
Viewport: 375x667
Browser: Chrome 120 DevTools on macOS
Section: Skills
Expected: Single-column layout with 30px gaps
Actual: Two-column layout, categories cramped
Screenshot: [attach]
Severity: High (affects readability)
```

## Next Steps After Testing

Once all validation checklist items pass:

1. ✅ Mark this quickstart as completed
2. ✅ Document any edge cases discovered
3. ✅ Update CLAUDE.md if new patterns established
4. ✅ Create PR with before/after screenshots
5. ✅ Request stakeholder review on physical devices
