# Content Section Contracts: Solutions Page

**Feature**: Solutions Page Redesign
**Date**: 2025-11-13

---

## Contract Definition

Each section contract defines:
- **Purpose**: What the section must achieve (mapped to Success Criteria)
- **Required Elements**: Content that MUST be present
- **Success Criteria**: How to verify the section works correctly
- **Design Constraints**: Visual/layout requirements
- **Acceptance Tests**: Specific validation checks

---

## Hero Section Contract

### Purpose
Communicate core value proposition within 30 seconds (SC-001) and ensure primary CTA is visible above fold on desktop (SC-003).

### Required Elements

1. **Trust Indicator** (one of):
   - Institutional logos: 3-5 university/research institution logos, greyscale
   - Researcher count: "Used by 500+ researchers" with icon
   - Display height: 80-100px

2. **Main Headline** (required):
   - Content: Must communicate automation + research data + LLM/AI technology
   - Example: "Automate Research Data Collection with LLM Intelligence"
   - Max length: 8-12 words
   - Font: 56-64px (desktop), 36-42px (mobile)
   - Color: `#2d3748` (primary text)
   - Max width: 900px, centered

3. **Subheadline** (required):
   - Content: Problem → Solution bridge with time metrics
   - Example: "Transform weeks of manual paper review into hours. AI-powered extraction from PDFs, journals, and academic databases—built for researchers."
   - Length: 2-3 sentences (40-60 words)
   - Font: 20-24px (desktop), 16-18px (mobile)
   - Color: `#4a5568` (secondary text)
   - Max width: 700px, centered

4. **Credibility Stats Bar** (required):
   - Count: Exactly 3 stats
   - Required types: Volume + Quality + Speed
   - Examples:
     - Volume: "500+ Papers Analyzed" or "10,000+ Data Points"
     - Quality: "94% Accuracy Rate" or "Peer-Reviewed Methods"
     - Speed: "10x Faster" or "Save 30 Hours/Week"
   - Layout: 3-column grid, 60px gap
   - Font sizes: Number 48px, Descriptor 16px
   - Colors: Number gradient/`#667eea`, Descriptor `#64748b`

5. **Primary CTA Button** (required):
   - Text: "Start Free Trial" OR "Try the Tool" OR "Try It Free"
   - URL: `https://noahdarwich.streamlit.app`
   - Style: `.btn-primary` (gradient background)
   - Size: 56px height, 18px font, adequate padding
   - Icon: Optional right arrow
   - **CRITICAL**: Must be visible without scrolling on 1920x1080 desktop

6. **Secondary CTA Button** (optional but recommended):
   - Text: "Watch 2-Min Demo" OR "See It In Action"
   - URL: Demo video or `#how-it-works` anchor
   - Style: `.btn-secondary` (outlined)
   - Same size as primary
   - Position: 20px right of primary CTA

7. **Product Visual** (required):
   - Type: Animated GIF (preferred) or static screenshot
   - Content: Must show workflow: upload → processing → output
   - Dimensions: 900px wide × 400-500px tall
   - Treatment: 2px border `#e2e8f0`, 8px radius, shadow `0 20px 60px rgba(0,0,0,0.1)`
   - Alt text: Descriptive workflow explanation
   - Optional caption: "Extract structured data from any research paper in seconds"

### Success Criteria

- ✅ **SC-001 Verification**: Test with 5 users—can they explain "LLM-powered research data collection automation" after 30 seconds?
- ✅ **SC-003 Verification**: On 1920x1080 desktop, primary CTA visible without scrolling (position ~500-600px from top)
- ✅ **FR-001**: Headline/subheadline clearly communicate tool automates data collection from qualitative sources
- ✅ **FR-004**: Subheadline identifies "researchers" as target audience
- ✅ **FR-008**: Primary CTA links to external tool

### Design Constraints

- Total hero section height: 900-950px (ensures CTA above fold)
- Background: White or subtle gradient (not full purple—reserve for accents)
- Spacing: 40-60px between major elements
- Alignment: All text centered
- Container: Max-width 1200px
- Mobile: Stack elements vertically, CTA may be below fold (acceptable per SC-003 "desktop viewports")

### Acceptance Tests

```
Test 1: Above-fold CTA
- Open research-tools.html on 1920x1080 screen
- Viewport height: 1000px (browser chrome considered)
- PASS: Primary CTA button fully visible without scrolling

Test 2: 30-second comprehension
- Show hero section to 5 research professionals for 30 seconds
- Ask: "What does this tool do?"
- PASS: 4/5 can articulate automation, data collection, and LLM/AI

Test 3: Content completeness
- Hero includes trust indicator: ✓
- Hero includes headline (8-12 words): ✓
- Hero includes subheadline (2-3 sentences): ✓
- Hero includes 3 stats (volume, quality, speed): ✓
- Hero includes primary CTA linking to Streamlit: ✓
- Hero includes product visual (900×400-500px): ✓
```

---

## Benefits Section Contract

### Purpose
Enable 90% of researchers to identify at least 3 key benefits relevant to their work (SC-002) by highlighting time savings, entity extraction, reproducibility, and multi-source processing.

### Required Elements

1. **Section Title** (required):
   - Text: "Why Researchers Choose This Solution" OR "Key Benefits"
   - Style: `.section-title` (2.5rem, centered, gradient underline)

2. **Benefit Cards** (4-6 cards, required):

   **Mandatory Benefits** (must include all 4):

   a. **Time/Resource Savings** (FR-006):
   - Icon: `fa-clock` or `fa-bolt`
   - Title: "Save 80% of Data Collection Time" or similar
   - Description: Must mention automation eliminates manual work
   - Max length: 2 sentences, ~40 words

   b. **Entity Extraction** (FR-005):
   - Icon: `fa-search` or `fa-tags`
   - Title: "Automatic Entity Recognition" or "Extract Key Data Points"
   - Description: Must mention dates, locations, actors, attributes
   - Max length: 2 sentences

   c. **Multi-Source Processing** (implied in FR-001):
   - Icon: `fa-database` or `fa-layer-group`
   - Title: "Process Multiple Sources Simultaneously"
   - Description: Must mention news, reports, databases
   - Max length: 2 sentences

   d. **Transparency & Reproducibility** (FR-007):
   - Icon: `fa-check-circle` or `fa-shield-alt`
   - Title: "Maintain Research Standards" or "Reproducible Workflows"
   - Description: Must mention research standards, methodology transparency
   - Max length: 2 sentences

   **Optional Benefits** (add 1-2 if space allows):

   e. **Event Structuring** (FR-003):
   - Icon: `fa-table` or `fa-stream`
   - Title: "Structure Unstructured Data"
   - Description: Convert qualitative to quantitative datasets

   f. **Quality Assurance**:
   - Icon: `fa-tasks` or `fa-balance-scale`
   - Title: "Validated Output Quality"
   - Description: Built-in quality checks and validation

### Success Criteria

- ✅ **SC-002 Verification**: Survey researchers viewing page—can they identify 3+ benefits?
- ✅ **FR-006**: Time/resource savings communicated
- ✅ **FR-007**: Transparency/reproducibility mentioned
- ✅ **FR-012**: Information helps evaluate tool fit for research needs

### Design Constraints

- Grid: `repeat(auto-fit, minmax(300px, 1fr))`
- Gap: 30-40px
- Card style: White background, 2px transparent border → `#667eea` on hover
- Hover effect: `translateY(-10px)` + increased shadow
- Padding: 30px internal padding per card
- Icon size: 40-48px, gradient color or primary purple
- Title: 1.5rem, bold
- Description: 1rem, line-height 1.6

### Acceptance Tests

```
Test 1: Mandatory benefits present
- Time savings benefit: ✓
- Entity extraction benefit: ✓
- Multi-source benefit: ✓
- Transparency benefit: ✓

Test 2: User comprehension
- Show benefits section to 10 researchers
- Ask: "What are the key advantages of this tool?"
- PASS: 9/10 identify at least 3 benefits

Test 3: Visual consistency
- Cards use existing `.feature-item` or similar class: ✓
- Hover animation works (translateY): ✓
- Grid responsive at 768px (stacks to 1-2 columns): ✓
```

---

## Technical Capabilities Section Contract

### Purpose
Help researchers understand technical fit for their methodology (SC-004) by explaining LLM integration, entity extraction, event structuring, and pipeline architecture.

### Required Elements

1. **Section Title** (required):
   - Text: "How It Works" OR "Technical Capabilities"
   - Style: `.section-title`

2. **Capability Cards** (4-6 cards, required):

   **Mandatory Capabilities** (must include all):

   a. **LLM Integration** (FR-002):
   - Icon: `fa-brain`
   - Title: "LLM-Powered Text Understanding" or "Intelligent Parsing"
   - Description: Must mention Large Language Models + text parsing
   - Optional detail: Model type, multilingual support

   b. **Entity Extraction** (FR-005):
   - Icon: `fa-crosshairs`
   - Title: "Extract Entities & Attributes"
   - Description: Must list dates, locations, actors, event attributes
   - Optional detail: Custom entity types, export formats

   c. **Event Structuring** (FR-003):
   - Icon: `fa-sitemap`
   - Title: "Standardize Event Data"
   - Description: Must mention protests, conflicts, policy changes
   - Optional detail: Schema consistency, comparative analysis

   d. **Python Pipelines** (FR-002):
   - Icon: `fa-code`
   - Title: "Flexible Python Data Pipelines"
   - Description: Must mention Python + data pipelines
   - Optional detail: Customization, extensibility

   **Optional Capabilities**:

   e. **API-Driven Retrieval** (implied in FR-002):
   - Icon: `fa-plug`
   - Title: "Multi-Source Integration"
   - Description: APIs, web scraping, database connections

   f. **Quality Control**:
   - Icon: `fa-clipboard-check`
   - Title: "Validation & Deduplication"
   - Description: Automated checks, consistency validation

### Success Criteria

- ✅ **SC-004 Verification**: Researchers can determine technical fit within 2 minutes
- ✅ **FR-002**: LLM + Python pipeline integration explained
- ✅ **FR-003**: Event structuring (protests, conflicts, policy) highlighted
- ✅ **FR-005**: Entity/attribute identification capability described

### Design Constraints

- Same grid pattern as Benefits section
- Optional: Expandable "Learn more" details per capability
- Optional: Visual workflow diagram showing pipeline stages
- Mobile: Cards stack responsively

### Acceptance Tests

```
Test 1: Mandatory capabilities present
- LLM integration explained: ✓
- Entity extraction detailed: ✓
- Event structuring described: ✓
- Python pipelines mentioned: ✓

Test 2: Technical evaluation
- Show section to data scientists
- Ask: "Can you determine if this fits your research workflow?"
- PASS: 8/10 say yes, can evaluate technical fit

Test 3: Jargon balance
- Non-technical PI can understand purpose: ✓
- Technical researcher finds sufficient detail: ✓
```

---

## Use Cases Section Contract

### Purpose
Help visitors understand research domains served (SC-004) and see practical applications of the tool.

### Required Elements

1. **Section Title** (required):
   - Text: "Research Applications" OR "Use Cases Across Domains"
   - Style: `.section-title`

2. **Use Case Examples** (3-4 cases, required):

   **Mandatory Use Cases** (must include 2-3):

   a. **Protest Research** (FR-003 mentions protests):
   - Domain tag: "Social Movements & Protest Studies"
   - Scenario: Multi-sentence description of use case
   - Outcome: Concrete result achieved

   b. **Conflict Analysis** (FR-003 mentions conflicts):
   - Domain tag: "Conflict & Security Studies"
   - Scenario: Description
   - Outcome: Result

   c. **Policy Change Tracking** (FR-003 mentions policy changes):
   - Domain tag: "Public Policy & Governance"
   - Scenario: Description
   - Outcome: Result

   **Optional Use Cases**:

   d. Media/News Analysis, Event Monitoring, etc.

### Success Criteria

- ✅ **SC-004**: Visitors determine if tool fits their domain within 2 minutes
- ✅ **FR-003**: Protests, conflicts, and/or policy changes mentioned
- ✅ **FR-012**: Information helps evaluate tool fit

### Design Constraints

- Display: Carousel, tabs, or 2-column grid
- Each case: Domain tag (colored badge) + scenario + outcome
- Optional: Small icon or illustration per domain
- Mobile: Stack to single column

### Acceptance Tests

```
Test 1: Required domains covered
- At least 2 of: protests, conflicts, policy changes: ✓
- Each use case has domain, scenario, outcome: ✓

Test 2: Relevance evaluation
- Show to researchers in different domains
- Ask: "Could you use this for your research?"
- PASS: Researchers see applicable use case
```

---

## Tool Access CTA Section Contract

### Purpose
Drive final conversion to external tool (SC-008) with clear next steps.

### Required Elements

1. **Headline** (required):
   - Text: "Ready to Accelerate Your Research?" or "See It In Action"
   - Style: Large (2.5-3rem), gradient or gradient underline

2. **Description** (required):
   - Text: Must communicate accessing demo is next step
   - Example: "Try the research automation tool now with our interactive demo. No signup required."
   - Style: 1.25rem, centered, max-width 800px

3. **Primary CTA** (required):
   - Text: "Try the Tool Now" or "Access the Demo"
   - URL: `https://noahdarwich.streamlit.app`
   - Style: `.btn-primary .btn-large` (56-60px height, large font)
   - Icon: `fa-external-link-alt` (indicates external link)

4. **Support Text** (optional):
   - Text: "Have questions? Contact us to discuss your research needs."
   - Link: Anchor to contact page or email

### Success Criteria

- ✅ **SC-008 Verification**: Visitors understand accessing demo tool is clear primary action
- ✅ **FR-008**: CTA links to external tool (Streamlit app)

### Design Constraints

- Full-width section
- Background: Gradient or white with gradient accent
- Content: Centered, max-width 800px
- CTA: Extra-large, highly prominent
- Spacing: 100px padding vertical

### Acceptance Tests

```
Test 1: CTA clarity
- Show section to users
- Ask: "What should you do next?"
- PASS: 9/10 say "try the tool" or "access the demo"

Test 2: Link functionality
- Click CTA button
- PASS: Opens https://noahdarwich.streamlit.app in new tab
```

---

## Secondary Projects Section Contract

### Purpose
Provide additional credibility through PRO-TEST project showcase while keeping focus on primary solution.

### Required Elements

1. **Section Title** (required):
   - Text: "Additional Research Projects" OR "Other Work"
   - Style: `.section-title`

2. **PRO-TEST Project Card** (required):
   - Badge: "Proof of Concept" (`.proof-of-concept` style)
   - Title: "PRO-TEST: Protest Violence Prediction"
   - Description: ~50-word explanation
   - Highlights: 3 bullet points with icons
   - Tech badges: Python, Scikit-learn, Pandas, etc.
   - Note: Educational project disclaimer

### Success Criteria

- ✅ PRO-TEST project visible but doesn't overshadow primary solution
- ✅ Maintains visual consistency with current design

### Design Constraints

- Use existing `.project-card` styling
- Position: Below primary CTAsections (low priority in visual hierarchy)
- Grid: Single card or prepare for future additions

### Acceptance Tests

```
Test 1: Visual hierarchy
- PRO-TEST card present: ✓
- PRO-TEST doesn't dominate page (below primary content): ✓
- Card style matches existing design: ✓
```

---

## Navigation Updates Contract

### Purpose
Ensure consistent "Solutions" terminology across site (SC-005) and maintain active link functionality.

### Required Elements

1. **Nav Menu Links** (6 files to update):
   - Files: index.html, portfolio.html, research-tools.html, about.html, contact.html, services.html
   - Change: `<a href="research-tools.html" class="nav-link">Projects</a>`
   - To: `<a href="research-tools.html" class="nav-link">Solutions</a>`

2. **Footer Links** (same 6 files):
   - Update footer navigation "Projects" → "Solutions"

3. **Active State**:
   - research-tools.html must have `.nav-link.active` class on Solutions link

### Success Criteria

- ✅ **SC-005 Verification**: "Solutions" replaces "Projects" in all menus and links across all pages

### Acceptance Tests

```
Test 1: Navigation consistency
- Visit each page (index, portfolio, research-tools, about, contact, services)
- Check nav menu shows "Solutions" not "Projects": ✓
- Check footer shows "Solutions": ✓

Test 2: Active state
- Visit research-tools.html
- "Solutions" nav link has .active class: ✓
```

---

## Page Metadata Contract

### Purpose
Update page title and description to reflect Solutions positioning and improve SEO.

### Required Elements

1. **Title Tag** (required):
   - Old: "Research Projects - Noah Darwich | Research Data Scientist Portfolio"
   - New: "Research Solutions - Noah Darwich | AI-Powered Data Collection Automation"
   - Format: Page name - Personal brand - Key value prop

2. **Meta Description** (required):
   - Old: "Research projects and proof-of-concept tools developed by Noah Darwich..."
   - New: "LLM-powered research automation solution for academics and institutions. Automate data collection from qualitative sources—extract entities, structure events, and build reproducible datasets 10x faster."
   - Length: 150-160 characters

3. **Meta Keywords** (optional but recommended):
   - Add: "research automation", "LLM data collection", "academic research tools", "automated data extraction", "research data collection", "event data coding"

### Success Criteria

- ✅ **FR-009**: Page uses "Solutions" branding in title
- ✅ **FR-013**: Metadata reflects Solutions positioning and tool benefits

### Acceptance Tests

```
Test 1: Meta tags updated
- <title> contains "Research Solutions": ✓
- <title> mentions automation or AI: ✓
- <meta name="description"> highlights tool benefits: ✓
- <meta name="keywords"> includes research automation terms: ✓

Test 2: SEO preview
- Google search result preview looks professional: ✓
- Description entices click from research professionals: ✓
```

---

## Contract Summary Table

| Section | Primary SC | Required Elements Count | Critical Validation |
|---------|-----------|------------------------|---------------------|
| Hero | SC-001, SC-003 | 7 (trust, headline, subheadline, 3 stats, 2 CTAs, visual) | CTA above fold, 30s comprehension |
| Benefits | SC-002 | 4-6 cards | 3+ benefits identifiable |
| Technical | SC-004 | 4-6 cards | Technical fit evaluable |
| Use Cases | SC-004 | 3-4 examples | Domain relevance clear |
| Tool CTA | SC-008 | 4 (headline, description, CTA, support) | Next step obvious |
| Projects | Credibility | 1 card (PRO-TEST) | Doesn't overshadow primary |
| Navigation | SC-005 | 6 files × 2 (nav + footer) | "Solutions" consistent |
| Metadata | FR-009, FR-013 | 3 (title, description, keywords) | SEO optimized |

---

## Implementation Order

Recommended sequence for implementing contracts:

1. **Hero Section** (P1) - Above-fold content and primary conversion point
2. **Benefits Section** (P1) - Immediate value communication
3. **Technical Capabilities** (P2) - Evaluation details for technical audience
4. **Use Cases** (P2) - Practical application examples
5. **Tool Access CTA** (P2) - Final conversion reinforcement
6. **Navigation Updates** (P3) - Site-wide consistency
7. **Page Metadata** (P3) - SEO optimization
8. **Secondary Projects** (P3) - Additional credibility

Each contract can be implemented and tested independently, allowing for iterative development and validation.
