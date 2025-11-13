# Implementation Plan: Solutions Page Redesign

**Branch**: `003-solutions-page-redesign` | **Date**: 2025-11-13 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/003-solutions-page-redesign/spec.md`

## Summary

Transform the "Projects" page (research-tools.html) into a "Solutions" page that better showcases the LLM-powered research automation tool as a professional solution for research institutions. The redesign focuses on clearer value proposition communication, highlighting benefits for potential clients (researchers, academics, PIs), and emphasizing the tool's capabilities in automating qualitative-to-quantitative data collection. All site navigation will be updated from "Projects" to "Solutions" while maintaining the existing design system and static HTML architecture.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+ (no build process)
**Primary Dependencies**:
- Font Awesome 6.0.0 (icons via CDN)
- Google Fonts Inter family (via CDN)
- Pure vanilla JavaScript (no frameworks)

**Storage**: N/A (static content, no backend)
**Testing**: Manual browser testing (Chrome, Firefox, Safari, Edge)
**Target Platform**: Modern web browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
**Project Type**: Static website (single-page updates with multi-file navigation consistency)
**Performance Goals**:
- Page load < 2 seconds on 3G
- Lighthouse performance score > 90
- No Cumulative Layout Shift (CLS)

**Constraints**:
- Must maintain static HTML/CSS/JS architecture (no build tools)
- Desktop/mobile responsive at breakpoints: 768px, 1200px
- Visual consistency with existing brand (purple gradient `#667eea` to `#764ba2`, Inter font)
- Navigation changes require updates across 6 HTML files

**Scale/Scope**:
- 1 primary page redesign (research-tools.html)
- 6 HTML files for navigation updates (index, portfolio, research-tools, about, contact, services)
- Estimated CSS additions: 50-100 lines for new content sections
- No new JavaScript required (reuse existing animation/navigation code)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Status**: ✅ N/A - No project constitution defined

This is a static portfolio website without a formal constitution file. The constitution template shows placeholder content only. For this project, we follow the documented architectural patterns in CLAUDE.md:

**Key Architectural Standards** (from CLAUDE.md):
- ✅ Pure HTML/CSS/JS (no frameworks) - ADHERED
- ✅ CSS Grid for layouts, not Flexbox - ADHERED
- ✅ Gradient-based design system maintained - ADHERED
- ✅ Intersection Observer for animations - ADHERED
- ✅ Mobile-first responsive breakpoints - ADHERED
- ✅ No build process required - ADHERED

**No violations detected**. This feature maintains all existing architectural patterns.

## Project Structure

### Documentation (this feature)

```text
specs/003-solutions-page-redesign/
├── spec.md              # Feature specification
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output - content strategy research
├── data-model.md        # Phase 1 output - page content structure
├── quickstart.md        # Phase 1 output - implementation guide
├── contracts/           # Phase 1 output - content sections spec
│   └── content-sections.md
└── checklists/
    └── requirements.md  # Spec validation checklist
```

### Source Code (repository root)

```text
portfolio/ (root)
├── research-tools.html      # PRIMARY: Solutions page content
├── styles.css               # UPDATE: New styles for redesigned sections
├── script.js                # NO CHANGE: Reuse existing animation code
├── index.html               # UPDATE: Navigation "Projects" → "Solutions"
├── portfolio.html           # UPDATE: Navigation "Projects" → "Solutions"
├── about.html               # UPDATE: Navigation "Projects" → "Solutions"
├── contact.html             # UPDATE: Navigation "Projects" → "Solutions"
├── services.html            # UPDATE: Navigation "Projects" → "Solutions"
└── CLAUDE.md                # UPDATE: Document new Solutions page structure

assets/ (if needed)
└── (no new assets expected - reuse existing icons/fonts)
```

**Structure Decision**: Static website structure with single primary file update (research-tools.html) and navigation consistency updates across all pages. No new directories or build configuration required. All CSS changes go into the existing styles.css file, following the current pattern of defining page-specific styles inline.

## Complexity Tracking

> **No complexity violations detected**

This feature maintains the existing simple static architecture without introducing new patterns, frameworks, or complexity. The implementation reuses all existing design patterns, CSS conventions, and JavaScript animation utilities.

---

# Phase 0: Outline & Research

## Research Tasks

### 1. Content Strategy for B2B/Research Solutions Pages

**Research Question**: What are best practices for presenting technical tools to academic/research decision-makers?

**Focus Areas**:
- B2B SaaS landing page structure for research/academic audiences
- How to communicate technical capabilities without overwhelming non-technical PIs
- Balancing "portfolio showcase" vs "lead generation tool"
- Above-the-fold CTA placement and conversion optimization

**Output**: Content hierarchy and messaging framework for the Solutions page

---

### 2. Hero Section Design for Solution Showcases

**Research Question**: How should the hero section structure differ from the current project showcase approach?

**Focus Areas**:
- Value proposition clarity within first 30 seconds (SC-001)
- Problem-solution-benefit messaging hierarchy
- Stats/credibility indicators for research tools
- CTA prominence (must be above fold per SC-003)

**Output**: Hero section wireframe and content requirements

---

### 3. Technical Capabilities Presentation

**Research Question**: How to present LLM-based automation capabilities to researchers who need to evaluate technical fit?

**Focus Areas**:
- Feature descriptions that explain "what" without "how"
- Entity extraction, event structuring, and multi-source processing clarity
- Use case examples for different research domains
- Transparency/reproducibility messaging for academic credibility

**Output**: Technical capabilities section structure and content guidelines

---

### 4. Navigation Terminology: Projects vs Solutions

**Research Question**: Best practices for positioning research tools as professional solutions vs portfolio projects

**Focus Areas**:
- Semantic implications of "Solutions" for B2B positioning
- How navigation naming affects visitor perception and expectations
- Consistency with portfolio site branding (research data scientist positioning)
- SEO implications of page title/metadata changes

**Output**: Navigation terminology decision and metadata updates

---

### 5. Existing Design System Reuse

**Research Question**: Which existing CSS components and patterns should be reused for visual consistency?

**Focus Areas**:
- Review existing hero sections: index.html, portfolio.html patterns
- Analyze `.project-card`, `.feature-item`, `.section-title` styles
- Grid patterns: `repeat(auto-fit, minmax(Xpx, 1fr))` implementations
- Hover effects, animations, gradient applications

**Output**: Component mapping - which existing classes to reuse, which new styles needed

---

## Research Consolidation

All findings will be documented in `research.md` with the following structure for each decision:

- **Decision**: [Selected approach]
- **Rationale**: [Why this choice best meets requirements]
- **Alternatives Considered**: [Other options evaluated]
- **Implementation Notes**: [Key details for execution]

---

# Phase 1: Design & Contracts

## Prerequisites
- ✅ `research.md` complete with all content strategy decisions
- ✅ Hero section structure defined
- ✅ Technical capabilities presentation framework established

## Design Artifacts

### 1. Data Model (`data-model.md`)

Define the content structure for the Solutions page:

**Entities**:
- **Hero Section**: Value proposition, problem statement, primary CTA, stats/credibility
- **Benefits Section**: 4-6 key benefits targeting researcher pain points
- **Technical Capabilities**: Entity extraction, event structuring, multi-source processing
- **Use Cases**: Research domains served (protests, conflicts, policy changes)
- **Tool Access CTA**: Prominent link to https://noahdarwich.streamlit.app
- **Secondary Projects**: PRO-TEST project card (repositioned)

**Relationships**:
- Hero → Benefits (immediate value communication)
- Benefits → Technical Capabilities (how benefits are achieved)
- Technical Capabilities → Use Cases (practical applications)
- Use Cases → Tool Access CTA (conversion point)

---

### 2. Content Contracts (`contracts/content-sections.md`)

Define each page section as a "contract" with:

```markdown
## Hero Section Contract

**Purpose**: Communicate core value proposition within 30 seconds (SC-001)

**Required Elements**:
- Main headline: Tool automation benefit
- Subheadline: LLM-powered data collection from qualitative sources
- Problem statement: Manual research data collection challenges
- Primary CTA: "Try the Tool" button linking to Streamlit app (above fold, SC-003)
- 3 credibility stats (languages, sources, automation type)

**Success Criteria**:
- Visitor understands tool purpose in <30s (SC-001)
- CTA visible without scrolling on desktop (SC-003)

**Design Constraints**:
- Maintain existing `.project-hero` pattern
- Purple gradient background or white with gradient accents
- Min-height: ensure CTA above fold on 1920x1080 displays
```

(Repeat for Benefits Section, Technical Capabilities, Use Cases, Tool Access CTA)

---

### 3. Quick Start Guide (`quickstart.md`)

Implementation sequence for developers:

1. **Phase 1**: Update research-tools.html hero section
   - Rewrite headline/subheadline for value proposition clarity
   - Adjust stats to emphasize automation benefits
   - Ensure CTA prominence above fold

2. **Phase 2**: Redesign benefits/features section
   - Focus on researcher pain points: time savings, reproducibility
   - Highlight entity extraction, event structuring capabilities
   - Use existing `.features-grid` pattern

3. **Phase 3**: Update navigation across all 6 HTML files
   - Replace "Projects" with "Solutions" in nav menus
   - Update footer navigation links
   - Verify `.active` class still works correctly

4. **Phase 4**: Update page metadata
   - Title: "Research Solutions - Noah Darwich"
   - Description: Focus on automation tool benefits for researchers
   - Keywords: Add "research automation", "LLM data collection"

5. **Phase 5**: CSS refinements
   - Add any new styles to styles.css
   - Test responsive behavior at 768px, 1200px breakpoints
   - Verify no CLS issues

6. **Phase 6**: Manual browser testing
   - Test in Chrome, Firefox, Safari, Edge
   - Verify mobile responsiveness
   - Check navigation consistency across all pages

---

### 4. Agent Context Update

Run the agent context update script:

```bash
.specify/scripts/bash/update-agent-context.sh claude
```

**Expected Updates**:
- Add "Solutions page content strategy" to agent context
- Document hero section structure for future reference
- Note navigation terminology change for consistency in future work

---

# Phase 2: Task Generation

**NOT EXECUTED BY `/speckit.plan`** - This phase is handled by the `/speckit.tasks` command.

The tasks will be generated from this plan using `/speckit.tasks` after the design artifacts are complete.

---

## Implementation Notes

### Critical Success Factors

1. **Above-the-fold CTA (SC-003)**: Hero section must be sized so primary CTA button is visible on desktop (1920x1080) without scrolling

2. **30-second comprehension (SC-001)**: Hero headline + subheadline must communicate "LLM-powered research data collection automation" immediately

3. **3+ benefits clarity (SC-002)**: Benefits section must highlight at least 3 concrete advantages (time savings, entity extraction, reproducibility, multi-source)

4. **Navigation consistency (SC-005)**: All 6 HTML files must use "Solutions" terminology consistently in nav menus and footers

5. **Professional positioning (SC-006)**: Tone and content must present the tool as a professional solution for institutions, not just a portfolio piece

### Technical Considerations

- **No JavaScript changes required**: Reuse existing Intersection Observer animation code
- **CSS additions estimated**: 50-100 lines for new section styles
- **Mobile testing critical**: Hero section sizing must work on mobile (CTA may be below fold on mobile - that's acceptable per SC-003 "desktop viewports" specification)
- **Existing components to reuse**: `.project-hero`, `.features-grid`, `.project-stat`, `.btn-primary`, `.section-title`

### Testing Checklist

After implementation:
- [ ] Hero CTA visible without scrolling on 1920x1080 desktop
- [ ] Value proposition clear in hero headline/subheadline
- [ ] 3+ benefits visible in benefits section
- [ ] Navigation shows "Solutions" on all 6 pages
- [ ] Footer navigation shows "Solutions"
- [ ] Page title and meta description updated
- [ ] Mobile responsive at 768px breakpoint
- [ ] No Cumulative Layout Shift (CLS) issues
- [ ] Hover animations work on cards
- [ ] External link to Streamlit app functional
- [ ] PRO-TEST project card still visible (secondary positioning)

---

## Next Steps

1. ✅ Complete Phase 0 research (`research.md`)
2. ✅ Complete Phase 1 design artifacts (`data-model.md`, `contracts/`, `quickstart.md`)
3. ⏳ Run `/speckit.tasks` to generate actionable task list
4. ⏳ Execute implementation following `quickstart.md` sequence
5. ⏳ Test against checklist above
6. ⏳ Commit changes and update CLAUDE.md documentation
