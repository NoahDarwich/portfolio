# Tasks: Solutions Page Redesign

**Input**: Design documents from `/specs/003-solutions-page-redesign/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/content-sections.md

**Tests**: No automated tests required (static HTML/CSS/JS project with manual browser testing)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

This is a static website at repository root with the following structure:
- HTML files: `/home/noahdarwich/code/portfolio/*.html`
- Styles: `/home/noahdarwich/code/portfolio/styles.css`
- Scripts: `/home/noahdarwich/code/portfolio/script.js` (no changes expected)
- Documentation: `/home/noahdarwich/code/portfolio/CLAUDE.md`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify project structure and ensure branch is ready

- [X] T001 Verify feature branch `003-solutions-page-redesign` is checked out
- [X] T002 Verify all design documents are complete in specs/003-solutions-page-redesign/
- [X] T003 [P] Start local development server for testing (python -m http.server 8000)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: No blocking prerequisites for this static site redesign - all user stories can proceed independently

**⚠️ NOTE**: This is a static website with no database, authentication, or API infrastructure. User stories can be implemented in any order.

**Checkpoint**: All user stories can now be implemented independently or in parallel

---

## Phase 3: User Story 1 - Research Decision Maker Evaluates Solution (Priority: P1) 🎯 MVP

**Goal**: Transform the hero section and main content of research-tools.html to clearly communicate the LLM-powered research automation tool's value proposition, benefits, and access method so decision-makers can evaluate the solution within 2 minutes.

**Independent Test**: Open research-tools.html and verify that a first-time visitor can understand the tool's purpose (LLM-powered research data collection automation), identify 3+ key benefits, and find the clear CTA to access the tool - all within 2 minutes.

### Implementation for User Story 1

**Hero Section Updates** (research-tools.html):

- [X] T004 [US1] Update hero headline in research-tools.html to "Automate Research Data Collection with LLM Intelligence" (communicate automation + LLM + data)
- [X] T005 [US1] Rewrite hero subheadline in research-tools.html to emphasize time savings ("weeks to hours") and target audience (researchers)
- [X] T006 [US1] Update hero stats bar in research-tools.html with 3 credibility metrics: speed (10x Faster), quality (94% Accuracy), and volume metrics
- [X] T007 [US1] Update primary CTA button in research-tools.html to "Try the Tool Now" linking to https://noahdarwich.streamlit.app
- [ ] T008 [US1] Add optional trust indicator above hero headline in research-tools.html (e.g., "Trusted by 500+ researchers worldwide")

**CSS Updates for Hero Section** (styles.css):

- [ ] T009 [US1] Add .hero-trust-bar styles to styles.css for trust indicator display (if added in T008)
- [X] T010 [US1] Update .project-hero max-height to 950px in styles.css to ensure CTA is above fold on 1920x1080 desktop
- [X] T011 [US1] Enhance .project-stat styles in styles.css to make numbers more prominent with gradient color

**Benefits Section Updates** (research-tools.html):

- [X] T012 [US1] Update benefits section title in research-tools.html from "Key Features" to "Why Researchers Choose This Solution"
- [X] T013 [US1] Rewrite benefit card 1 in research-tools.html: "Save 80% of Data Collection Time" (time savings focus)
- [X] T014 [US1] Rewrite benefit card 2 in research-tools.html: "Automatic Entity Recognition" (dates, locations, actors, attributes)
- [X] T015 [US1] Rewrite benefit card 3 in research-tools.html: "Process Multiple Sources Simultaneously" (news, reports, databases)
- [X] T016 [US1] Rewrite benefit card 4 in research-tools.html: "Maintain Research Standards" (transparency & reproducibility)
- [X] T017 [P] [US1] Add optional benefit card 5 in research-tools.html: "Structure Unstructured Data" (qualitative to quantitative)
- [X] T018 [P] [US1] Add optional benefit card 6 in research-tools.html: "Validated Output Quality" (quality assurance)

**Page Metadata Updates** (research-tools.html):

- [X] T019 [US1] Update page title tag in research-tools.html to "Research Solutions - Noah Darwich | AI-Powered Data Collection Automation"
- [X] T020 [US1] Update meta description tag in research-tools.html to highlight LLM-powered automation benefits for researchers
- [X] T021 [US1] Update meta keywords tag in research-tools.html to include "research automation", "LLM data collection", "automated data extraction"

**Validation Tasks**:

- [ ] T022 [US1] Manual browser test: Verify hero CTA is visible without scrolling on 1920x1080 desktop (SC-003)
- [ ] T023 [US1] Manual comprehension test: Show page to 3-5 people for 30 seconds - can they articulate the tool's purpose? (SC-001)
- [ ] T024 [US1] Manual benefits test: Verify at least 4 benefit cards are clearly visible and describe researcher pain points (SC-002)

**Checkpoint**: At this point, User Story 1 should be fully functional - the Solutions page clearly communicates value proposition, benefits, and has a prominent CTA above the fold

---

## Phase 4: User Story 2 - Academic Researcher Understands Technical Capabilities (Priority: P2)

**Goal**: Add a dedicated Technical Capabilities section to research-tools.html that explains how the tool works (LLM integration, entity extraction, event structuring, Python pipelines) so researchers can assess technical fit for their methodology within 2 minutes.

**Independent Test**: Show the Technical Capabilities section to researchers and verify they can determine if the tool fits their research workflow and understand the methodology (LLM-based extraction, Python pipelines, multi-source processing).

### Implementation for User Story 2

**Add Technical Capabilities Section** (research-tools.html):

- [ ] T025 [US2] Add new "How It Works" section after hero in research-tools.html with section title and subtitle
- [ ] T026 [P] [US2] Add capability card 1 in research-tools.html: "LLM-Powered Text Understanding" (explains intelligent parsing)
- [ ] T027 [P] [US2] Add capability card 2 in research-tools.html: "Extract Key Data Points" (dates, locations, actors, event types)
- [ ] T028 [P] [US2] Add capability card 3 in research-tools.html: "Standardize Event Data" (protests, conflicts, policy changes to datasets)
- [ ] T029 [P] [US2] Add capability card 4 in research-tools.html: "Flexible Python Pipelines" (customizable data processing)
- [ ] T030 [P] [US2] Add optional capability card 5 in research-tools.html: "Multi-Source Integration" (API-driven data retrieval)
- [ ] T031 [P] [US2] Add optional capability card 6 in research-tools.html: "Validation & Deduplication" (quality control)

**CSS for Technical Capabilities** (styles.css):

- [ ] T032 [US2] Add .capabilities-section styles to styles.css (100px padding, #f8fafc background)
- [ ] T033 [US2] Add .capabilities-grid styles to styles.css (repeat(auto-fit, minmax(300px, 1fr)) grid pattern)
- [ ] T034 [US2] Add .capability-card styles to styles.css (white background, hover lift effect, gradient icons)
- [ ] T035 [US2] Add mobile responsive styles for capabilities section in styles.css (@media max-width: 768px)

**Add Use Cases Section** (research-tools.html):

- [ ] T036 [US2] Add "Research Applications" section after technical capabilities in research-tools.html
- [ ] T037 [P] [US2] Add use case 1 in research-tools.html: Protest Research (social movements & protest studies domain)
- [ ] T038 [P] [US2] Add use case 2 in research-tools.html: Conflict Monitoring (conflict & security studies domain)
- [ ] T039 [P] [US2] Add use case 3 in research-tools.html: Policy Change Analysis (public policy & governance domain)
- [ ] T040 [P] [US2] Add optional use case 4 in research-tools.html: News Analysis (media studies domain)

**Add Tool Access CTA Section** (research-tools.html):

- [ ] T041 [US2] Add final Tool Access CTA section before secondary projects in research-tools.html
- [ ] T042 [US2] Add CTA headline "Ready to Accelerate Your Research?" and description in research-tools.html
- [ ] T043 [US2] Add large primary CTA button "Try the Tool Now" linking to https://noahdarwich.streamlit.app in research-tools.html
- [ ] T044 [US2] Add support text with link to contact page in research-tools.html

**CSS for Use Cases and CTA** (styles.css):

- [ ] T045 [P] [US2] Add use cases section styles to styles.css (grid or carousel layout)
- [ ] T046 [P] [US2] Add tool access CTA section styles to styles.css (full-width, gradient background, centered content)

**Validation Tasks**:

- [ ] T047 [US2] Manual technical fit test: Show capabilities section to researchers - can they determine technical fit in 2 minutes? (SC-004)
- [ ] T048 [US2] Manual requirements test: Verify all 4 mandatory capabilities are present (LLM, entity extraction, event structuring, Python) (FR-002, FR-003, FR-005)
- [ ] T049 [US2] Manual use cases test: Verify at least 2 of protests/conflicts/policy changes are covered in use cases (FR-003)

**Checkpoint**: At this point, User Story 2 should be fully functional - researchers can understand technical capabilities, see practical use cases, and have multiple CTAs to access the tool

---

## Phase 5: User Story 3 - Visitor Navigates from Projects to Solutions (Priority: P3)

**Goal**: Update navigation menus and footer links across all 6 HTML files to rename "Projects" to "Solutions" for consistent branding and to ensure existing visitors can find the redesigned page.

**Independent Test**: Navigate from each page (index, portfolio, about, contact, services) to verify the navigation menu shows "Solutions" instead of "Projects" and clicking it loads research-tools.html with updated content.

### Implementation for User Story 3

**Navigation Menu Updates** (6 HTML files):

- [X] T050 [P] [US3] Update nav menu in index.html: Change "Projects" link text to "Solutions"
- [X] T051 [P] [US3] Update nav menu in portfolio.html: Change "Projects" link text to "Solutions"
- [X] T052 [P] [US3] Update nav menu in research-tools.html: Change "Projects" link text to "Solutions" and ensure .active class
- [X] T053 [P] [US3] Update nav menu in about.html: Change "Projects" link text to "Solutions"
- [X] T054 [P] [US3] Update nav menu in contact.html: Change "Projects" link text to "Solutions"
- [X] T055 [P] [US3] Update nav menu in services.html: Change "Projects" link text to "Solutions"

**Footer Navigation Updates** (6 HTML files):

- [X] T056 [P] [US3] Update footer in index.html: Change "Projects" link text to "Solutions"
- [X] T057 [P] [US3] Update footer in portfolio.html: Change "Projects" link text to "Solutions"
- [X] T058 [P] [US3] Update footer in research-tools.html: Change "Projects" link text to "Solutions"
- [X] T059 [P] [US3] Update footer in about.html: Change "Projects" link text to "Solutions"
- [X] T060 [P] [US3] Update footer in contact.html: Change "Projects" link text to "Solutions"
- [X] T061 [P] [US3] Update footer in services.html: Change "Projects" link text to "Solutions"

**Validation Tasks**:

- [ ] T062 [US3] Manual navigation test: Visit all 6 pages and verify nav menu shows "Solutions" (SC-005)
- [ ] T063 [US3] Manual footer test: Verify all 6 pages have "Solutions" in footer navigation (SC-005)
- [ ] T064 [US3] Manual active state test: On research-tools.html, verify "Solutions" nav link has active styling
- [ ] T065 [US3] Manual mobile test: Verify mobile hamburger menu shows "Solutions" on all pages

**Checkpoint**: All user stories should now be independently functional - the page communicates value (US1), explains technical capabilities (US2), and is consistently labeled across the site (US3)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements, mobile testing, browser compatibility, and documentation updates

**Mobile Responsive Adjustments** (styles.css):

- [ ] T066 [P] Add/verify mobile responsive styles for hero section in styles.css (@media max-width: 768px)
- [ ] T067 [P] Add/verify mobile responsive styles for benefits section in styles.css (single column stack)
- [ ] T068 [P] Verify mobile font size reductions for headlines in styles.css (4rem → 2.25rem)

**Cross-Browser Testing**:

- [ ] T069 Test in Chrome (latest): Verify all sections render correctly, hover effects work, CTA links work
- [ ] T070 Test in Firefox (latest): Verify all sections render correctly, hover effects work, CTA links work
- [ ] T071 Test in Safari (latest): Verify all sections render correctly, hover effects work, CTA links work (if available)
- [ ] T072 Test in Edge (latest): Verify all sections render correctly, hover effects work, CTA links work

**Performance & Accessibility Validation**:

- [ ] T073 Run Lighthouse audit on research-tools.html: Target performance score >90, verify no CLS issues
- [ ] T074 Verify color contrast meets WCAG AA standards (4.5:1 ratio) for all text
- [ ] T075 Test keyboard navigation: Tab through all CTAs and verify focus states are visible
- [ ] T076 Verify all Font Awesome icons have appropriate aria-labels or are decorative

**Mobile Device Testing**:

- [ ] T077 Test on mobile viewport (375px): Verify hero section readable, buttons accessible, no horizontal scroll
- [ ] T078 Test on mobile viewport (375px): Verify benefits cards stack to single column properly
- [ ] T079 Test on mobile viewport (375px): Verify capabilities section (if added) stacks properly
- [ ] T080 Test on tablet viewport (768px): Verify grid layouts adjust to 2-column where appropriate

**Documentation Updates**:

- [X] T081 Update CLAUDE.md with Solutions page documentation (key sections, design notes, CTA requirements)
- [X] T082 Document navigation terminology change ("Solutions" vs "Projects") in CLAUDE.md

**Final Validation Against Success Criteria**:

- [ ] T083 Verify SC-001: Tool purpose understandable in 30 seconds (show to 3-5 users)
- [ ] T084 Verify SC-002: 90% of viewers identify 3+ benefits (show to 10 people)
- [ ] T085 Verify SC-003: CTA visible above fold on 1920x1080 desktop (measure position)
- [ ] T086 Verify SC-004: Researchers determine technical fit in 2 minutes (test with 5 researchers)
- [ ] T087 Verify SC-005: "Solutions" consistent across all pages (check all 6 files)
- [ ] T088 Verify SC-006: Professional tone for institutions (review all copy)
- [ ] T089 Verify SC-007: Value prop differentiated from manual methods (review headlines)
- [ ] T090 Verify SC-008: Next steps obvious - accessing demo is primary action (user test)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: N/A - no blocking foundation for static site
- **User Stories (Phases 3-5)**: All user stories are independent and can run in parallel or sequentially
  - **US1 (Phase 3)**: Hero + Benefits + Metadata - PRIMARY value proposition
  - **US2 (Phase 4)**: Technical Capabilities + Use Cases + CTA sections - SECONDARY detail
  - **US3 (Phase 5)**: Navigation updates across all pages - TERTIARY consistency
- **Polish (Phase 6)**: Depends on desired user stories being complete (recommend completing US1-US3)

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies - can start immediately (PRIMARY - MVP)
- **User Story 2 (P2)**: Independent of US1 - adds separate sections to page (can run in parallel or after US1)
- **User Story 3 (P3)**: Independent of US1 and US2 - updates navigation only (can run anytime)

### Recommended Execution Order

**Option 1 - Sequential (Priority Order)**:
1. Complete US1 (Hero + Benefits + Metadata) → Test independently → Get feedback
2. Complete US2 (Technical Capabilities + Use Cases) → Test independently → Get feedback
3. Complete US3 (Navigation updates) → Test site-wide → Get feedback
4. Complete Polish phase → Final validation

**Option 2 - Parallel (Fastest)**:
1. Work on US1, US2, US3 simultaneously (different sections/files)
2. Integrate all changes
3. Complete Polish phase → Final validation

**Option 3 - MVP First**:
1. Complete US1 ONLY → Deploy/test as MVP
2. Gather feedback on value proposition
3. Add US2 based on feedback → Deploy
4. Add US3 for site-wide consistency → Deploy
5. Polish phase → Final refinements

### Within Each User Story

- Hero content updates before CSS styling updates
- All content sections before validation tasks
- Mobile responsive CSS after desktop CSS
- Navigation updates can all run in parallel (different files)

### Parallel Opportunities

**Within US1**:
- T017, T018 (optional benefit cards) can run in parallel
- T009, T010, T011 (CSS updates) can run in parallel

**Within US2**:
- T026, T027, T028, T029, T030, T031 (all capability cards) can run in parallel
- T037, T038, T039, T040 (all use case cards) can run in parallel
- T032, T033, T034, T035 (all CSS for capabilities) can run in parallel
- T045, T046 (CSS for use cases and CTA) can run in parallel

**Within US3**:
- T050-T055 (all nav menu updates) can run in parallel
- T056-T061 (all footer updates) can run in parallel

**Polish Phase**:
- T066, T067, T068 (mobile CSS) can run in parallel
- T069, T070, T071, T072 (browser tests) can run in parallel

---

## Parallel Example: User Story 1 Hero Section

```bash
# Launch all CSS updates for hero together:
Task: "Add .hero-trust-bar styles to styles.css"
Task: "Update .project-hero max-height to 950px in styles.css"
Task: "Enhance .project-stat styles in styles.css"
```

## Parallel Example: User Story 2 Capability Cards

```bash
# Launch all capability card additions together:
Task: "Add capability card 1: LLM-Powered Text Understanding"
Task: "Add capability card 2: Extract Key Data Points"
Task: "Add capability card 3: Standardize Event Data"
Task: "Add capability card 4: Flexible Python Pipelines"
Task: "Add capability card 5: Multi-Source Integration"
Task: "Add capability card 6: Validation & Deduplication"
```

## Parallel Example: User Story 3 Navigation Updates

```bash
# Launch all nav menu updates together (different files):
Task: "Update nav menu in index.html"
Task: "Update nav menu in portfolio.html"
Task: "Update nav menu in research-tools.html"
Task: "Update nav menu in about.html"
Task: "Update nav menu in contact.html"
Task: "Update nav menu in services.html"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (verify branch, start server)
2. Complete Phase 3: User Story 1 (Hero + Benefits + Metadata)
3. **STOP and VALIDATE**: Manual browser testing at 1920x1080
4. **User Testing**: Show to 5 researchers for 30-second comprehension test
5. Iterate based on feedback before adding US2/US3

### Incremental Delivery

1. Complete Setup → Server running
2. Add User Story 1 → Test independently → Get feedback (MVP!)
3. Add User Story 2 → Test independently → Get feedback
4. Add User Story 3 → Test site-wide → Get feedback
5. Polish phase → Final validation → Production ready

### Parallel Strategy (Single Developer)

1. Complete all HTML content updates first (US1 + US2 content sections)
2. Complete all CSS updates together (US1 + US2 styles)
3. Complete navigation updates (US3 - all files at once)
4. Complete all testing (browser, mobile, accessibility)

---

## Notes

- **[P] tasks** = different files or different sections, no dependencies - can run in parallel
- **[Story] label** maps task to specific user story for traceability and independent testing
- Each user story should be independently completable and testable
- Static site = no automated tests, manual browser testing required for validation
- Commit after each user story phase for incremental progress tracking
- Stop at any checkpoint to validate story independently before proceeding
- All file paths are absolute paths from repository root
- Desktop testing priority: 1920x1080 (CTA above fold requirement)
- Mobile testing: 375px width, 768px tablet breakpoint
- Browser testing: Chrome, Firefox, Safari (if available), Edge

---

## Success Metrics Validation

After completing all tasks, the following success criteria from spec.md should be met:

- **SC-001**: ✅ Potential clients understand tool purpose in 30 seconds (T023, T083)
- **SC-002**: ✅ 90% identify 3+ benefits (T024, T084)
- **SC-003**: ✅ CTA visible above fold on desktop (T022, T085)
- **SC-004**: ✅ Technical fit determinable in 2 minutes (T047, T086)
- **SC-005**: ✅ "Solutions" consistent across all pages (T062, T063, T087)
- **SC-006**: ✅ Professional institutional positioning (T088)
- **SC-007**: ✅ Value differentiated from manual methods (T089)
- **SC-008**: ✅ Next steps obvious (T090)

All functional requirements (FR-001 through FR-013) are covered by tasks in Phases 3-5.
