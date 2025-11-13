# Data Model: Solutions Page Content Structure

**Feature**: Solutions Page Redesign
**Date**: 2025-11-13

---

## Overview

This document defines the content structure for the Solutions page (research-tools.html). Since this is a static website with no database, the "data model" represents the semantic content entities and their relationships on the page.

---

## Content Entities

### 1. Hero Section

**Purpose**: Communicate core value proposition within 30 seconds and drive conversion

**Attributes**:
- **Trust Indicator** (String | Logo Array):
  - Type: Either text ("Used by 500+ researchers") or array of institutional logos
  - Purpose: Establish credibility immediately
  - Display: Horizontal bar, 80-100px height, greyscale logos or text with icon

- **Main Headline** (String, required):
  - Max length: 8-12 words
  - Formula: [Action Verb] + [What] + [How/Technology]
  - Example: "Automate Research Data Collection with LLM Intelligence"
  - Styling: 56-64px font, bold, primary color `#2d3748`

- **Subheadline** (String, required):
  - Max length: 2-3 sentences (40-60 words)
  - Formula: [Problem time] → [Solution time]. [Technology]—[Audience].
  - Example: "Transform weeks of manual paper review into hours. AI-powered extraction from PDFs, journals, and academic databases—built for researchers."
  - Styling: 20-24px font, regular weight, secondary color `#4a5568`

- **Credibility Stats** (Array of 3 objects, required):
  - Each stat: `{ number: String, descriptor: String }`
  - Examples:
    - `{ number: "500+", descriptor: "Papers Analyzed" }`
    - `{ number: "94%", descriptor: "Accuracy Rate" }`
    - `{ number: "10x", descriptor: "Faster" }`
  - Display: 3-column grid, 60px gap, centered

- **Primary CTA** (Object, required):
  - `{ text: String, url: String, style: "primary" }`
  - Text options: "Start Free Trial", "Try It Free", "Try the Tool"
  - URL: "https://noahdarwich.streamlit.app"
  - Must be visible above fold on 1920x1080 desktop

- **Secondary CTA** (Object, optional):
  - `{ text: String, url: String, style: "secondary" }`
  - Text options: "Watch 2-Min Demo", "See It In Action", "Learn More"
  - URL: Either external demo video or anchor to #how-it-works section

- **Product Visual** (Media, required):
  - Type: Animated GIF or static screenshot with play button
  - Dimensions: 900px × 400-500px
  - Content: Shows tool workflow (upload → processing → output)
  - Alt text: Descriptive explanation of demonstration

**Relationships**:
- Hero → Benefits Section (visitor clicks "Learn More" or scrolls)
- Hero → External Tool (visitor clicks Primary CTA)

---

### 2. Benefits Section

**Purpose**: Highlight key advantages targeting researcher pain points

**Attributes**:
- **Section Title** (String, required):
  - Text: "Why Researchers Choose This Solution" or "Key Benefits for Your Research"
  - Styling: `.section-title` (2.5rem, centered, gradient underline)

- **Benefit Cards** (Array of 4-6 objects, required):
  - Each benefit: `{ icon: String, title: String, description: String, learnMore: String? }`
  - Required benefits (from FR-006, FR-007):
    1. **Time Savings**:
       - Icon: `fa-clock` or `fa-bolt`
       - Title: "Save 80% of Data Collection Time"
       - Description: "Automate the manual work of extracting data from hundreds of papers. Focus on analysis, not data entry."

    2. **Entity Extraction**:
       - Icon: `fa-search` or `fa-tags`
       - Title: "Automatic Entity Recognition"
       - Description: "Identify dates, locations, actors, and event attributes from any text source with LLM-powered parsing."

    3. **Multi-Source Processing**:
       - Icon: `fa-database` or `fa-layer-group`
       - Title: "Process Multiple Sources Simultaneously"
       - Description: "Collect data from news articles, reports, academic databases, and policy documents in parallel."

    4. **Transparency & Reproducibility**:
       - Icon: `fa-check-circle` or `fa-shield-alt`
       - Title: "Maintain Research Standards"
       - Description: "Full methodology transparency and reproducible workflows that meet academic research requirements."

    5. **Event Structuring** (optional):
       - Icon: `fa-table` or `fa-stream`
       - Title: "Structure Unstructured Data"
       - Description: "Convert qualitative text into quantitative datasets ready for statistical analysis."

    6. **Quality Assurance** (optional):
       - Icon: `fa-tasks` or `fa-balance-scale`
       - Title: "Validated Output Quality"
       - Description: "Built-in quality checks and validation ensure data accuracy and consistency."

- **Display Pattern**:
  - Grid: `repeat(auto-fit, minmax(300px, 1fr))`
  - Gap: 30-40px
  - Card style: White background, hover lift effect
  - Animation: `.fade-in-up` on scroll

**Relationships**:
- Benefits → Technical Capabilities (how benefits are achieved)
- Benefits → Use Cases (where benefits apply)

---

### 3. Technical Capabilities Section

**Purpose**: Explain what the tool does technically for evaluation by researchers

**Attributes**:
- **Section Title** (String, required):
  - Text: "How It Works" or "Technical Capabilities"
  - Styling: `.section-title`

- **Capability Cards** (Array of 4-6 objects, required):
  - Each capability: `{ icon: String, title: String, description: String, details: String? }`
  - Required capabilities (from FR-002, FR-003, FR-005):
    1. **LLM-Powered Text Parsing**:
       - Icon: `fa-brain`
       - Title: "Intelligent Text Understanding"
       - Description: "Large Language Models analyze qualitative text to identify key information, just like a human researcher would—but 100x faster."
       - Details (expandable): "Uses state-of-the-art NLP models to understand context, disambiguate entities, and handle multi-lingual content."

    2. **Entity Extraction**:
       - Icon: `fa-crosshairs`
       - Title: "Extract Key Data Points"
       - Description: "Automatically identifies dates, locations, actors, event types, and custom attributes you define for your research."
       - Details: "Supports custom entity types and relationship extraction. Export to CSV, JSON, or Excel."

    3. **Event Structuring**:
       - Icon: `fa-sitemap`
       - Title: "Standardize Event Data"
       - Description: "Transforms unstructured mentions of events (protests, conflicts, policy changes) into standardized, analyzable datasets."
       - Details: "Consistent schema across sources enables comparative analysis and time-series studies."

    4. **Multi-Source Integration**:
       - Icon: `fa-plug`
       - Title: "API-Driven Data Retrieval"
       - Description: "Connects to news APIs, academic databases, and custom sources to collect data from multiple channels simultaneously."
       - Details: "Supports web scraping, RSS feeds, and direct API integration for comprehensive coverage."

    5. **Python Data Pipelines**:
       - Icon: `fa-code`
       - Title: "Flexible Data Processing"
       - Description: "Built on Python with customizable pipelines for data cleaning, validation, and transformation."
       - Details: "Open architecture allows researchers to extend and modify workflows for specific needs."

    6. **Quality Control**:
       - Icon: `fa-clipboard-check`
       - Title: "Validation & Deduplication"
       - Description: "Automated checks ensure data accuracy, remove duplicates, and flag inconsistencies for review."
       - Details: "Configurable validation rules and manual review interfaces for critical data."

- **Display Pattern**:
  - Same grid/card pattern as Benefits section
  - Optional: Tabs or accordion for "Details" expandable content
  - Visual: Consider adding workflow diagram showing pipeline stages

**Relationships**:
- Technical Capabilities → Use Cases (practical applications)
- Technical Capabilities → Tool Access CTA (ready to try it)

---

### 4. Use Cases Section

**Purpose**: Show research domains where the tool has been applied

**Attributes**:
- **Section Title** (String, required):
  - Text: "Research Applications" or "Use Cases Across Domains"
  - Styling: `.section-title`

- **Use Case Examples** (Array of 3-4 objects, required):
  - Each use case: `{ domain: String, scenario: String, outcome: String }`
  - Examples (from FR-003):
    1. **Protest Research**:
       - Domain: "Social Movements & Protest Studies"
       - Scenario: "Analyze 10,000+ news articles to build a protest event database with details on location, participants, violence, and outcomes."
       - Outcome: "Complete dataset ready for statistical analysis in weeks instead of months."

    2. **Conflict Monitoring**:
       - Domain: "Conflict & Security Studies"
       - Scenario: "Track armed conflict events across multiple countries and languages, extracting actors, casualty figures, and event sequences."
       - Outcome: "Real-time conflict monitoring with standardized event coding."

    3. **Policy Change Analysis**:
       - Domain: "Public Policy & Governance"
       - Scenario: "Document policy changes from government announcements, bills, and reports to understand regulatory trends."
       - Outcome: "Comprehensive policy change database for longitudinal analysis."

    4. **News Analysis** (optional):
       - Domain: "Media Studies & Political Communication"
       - Scenario: "Extract entities, topics, and sentiment from news coverage to study media framing and bias."
       - Outcome: "Structured dataset of news coverage patterns for content analysis."

- **Display Pattern**:
  - Carousel or 2-column grid
  - Each card: Domain tag + scenario + outcome
  - Optional: Small icon or illustration per domain

**Relationships**:
- Use Cases → Tool Access CTA (see it in action for your domain)
- Use Cases → Contact (discuss your specific research needs)

---

### 5. Tool Access CTA Section

**Purpose**: Drive conversion to the external tool demo

**Attributes**:
- **Headline** (String, required):
  - Text: "Ready to Accelerate Your Research?" or "See It In Action"
  - Styling: Large, gradient color or gradient underline

- **Description** (String, required):
  - Text: "Try the research automation tool now with our interactive demo. No signup required."
  - Styling: Regular body text, centered

- **Primary CTA** (Object, required):
  - `{ text: "Try the Tool Now", url: "https://noahdarwich.streamlit.app", icon: "fa-external-link-alt" }`
  - Styling: `.btn-primary .btn-large` (56-60px height)

- **Support Text** (String, optional):
  - Text: "Have questions? Contact us to discuss your research needs."
  - Link: Anchor to contact page or contact form

- **Display Pattern**:
  - Full-width section with gradient background or white with accent
  - Centered content, max-width 800px
  - Large CTA button, prominent positioning

**Relationships**:
- Tool Access → External Tool (https://noahdarwich.streamlit.app)
- Tool Access → Contact Page (for inquiries)

---

### 6. Secondary Projects Section

**Purpose**: Showcase other research projects (PRO-TEST) as additional credibility

**Attributes**:
- **Section Title** (String, required):
  - Text: "Additional Research Projects" or "Other Work"
  - Styling: `.section-title`

- **Project Cards** (Array, contains PRO-TEST):
  - Each project: `{ badge: String, title: String, description: String, highlights: Array, tech: Array, note: String }`
  - **PRO-TEST Project**:
    - Badge: "Proof of Concept"
    - Title: "PRO-TEST: Protest Violence Prediction"
    - Description: "Machine learning proof-of-concept for predicting violence at protest demonstrations."
    - Highlights: ["13,000+ protest event records", "80% prediction accuracy", "Le Wagon Bootcamp Capstone (2022)"]
    - Tech: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Streamlit"]
    - Note: "Educational project demonstrating technical proficiency in ML workflows."

- **Display Pattern**:
  - Same `.project-card` styling as current research-tools.html
  - Repositioned below primary content (not hero section)

**Relationships**:
- Secondary Projects → Portfolio page (view full CV)
- Secondary Projects → Contact (collaboration inquiries)

---

## Content Flow & Relationships

```
┌─────────────────────────────────────────┐
│          Hero Section                   │
│  (Value prop + CTA above fold)          │
└───────────┬─────────────────────────────┘
            │
            ↓
┌─────────────────────────────────────────┐
│       Benefits Section                  │
│  (4-6 key advantages)                   │
└───────────┬─────────────────────────────┘
            │
            ↓
┌─────────────────────────────────────────┐
│   Technical Capabilities Section        │
│  (How benefits are achieved)            │
└───────────┬─────────────────────────────┘
            │
            ↓
┌─────────────────────────────────────────┐
│       Use Cases Section                 │
│  (Practical applications)               │
└───────────┬─────────────────────────────┘
            │
            ↓
┌─────────────────────────────────────────┐
│    Tool Access CTA Section              │
│  (Final conversion push)                │
└───────────┬─────────────────────────────┘
            │
            ↓
┌─────────────────────────────────────────┐
│   Secondary Projects Section            │
│  (Additional credibility)               │
└─────────────────────────────────────────┘
```

**Navigation Flow**:
- Entry: Hero Section (from nav menu or external link)
- Engagement: Scroll through Benefits → Capabilities → Use Cases
- Conversion: Tool Access CTA (primary exit to Streamlit app)
- Alternative: Secondary Projects → Portfolio page
- Alternative: Contact section → Contact page

---

## Validation Rules

### Hero Section
- ✅ Headline must communicate "automation" + "research data" + "LLM/AI"
- ✅ Primary CTA must be above fold on 1920x1080 desktop
- ✅ Stats bar must include at least 3 metrics
- ✅ Product visual must show workflow demonstration

### Benefits Section
- ✅ Must include minimum 4 benefits covering: time savings, entity extraction, transparency, multi-source
- ✅ Each benefit description max 2 sentences (40 words)
- ✅ Grid must be responsive at 768px breakpoint

### Technical Capabilities
- ✅ Must explain LLM integration (FR-002)
- ✅ Must describe entity extraction (FR-005)
- ✅ Must highlight event structuring (FR-003)
- ✅ Must mention Python pipelines (FR-002)

### Use Cases
- ✅ Must include at least 2 research domains
- ✅ Must mention protests, conflicts, or policy changes (FR-003)
- ✅ Each use case must show concrete outcome

### Tool Access CTA
- ✅ Must link to https://noahdarwich.streamlit.app (FR-008)
- ✅ Must be prominent and visible (SC-003 fulfilled in hero, reinforced here)
- ✅ CTA text must be action-oriented

---

## Content Maintenance

**Update Frequency**:
- Hero stats: Update quarterly as usage grows
- Benefits: Review annually or when new features added
- Technical capabilities: Update when methodology changes
- Use cases: Add new examples as projects complete
- Secondary projects: Add new research as published

**Content Ownership**:
- Primary content: Noah Darwich (portfolio owner)
- Technical accuracy: Verify with tool documentation/actual capabilities
- Stats/metrics: Pull from tool analytics or research outputs

**Localization** (future consideration):
- Hero section translatable to German (target market)
- Technical terminology consistent across languages
- Use cases may need regional examples
