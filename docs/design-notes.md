# Portfolio interface design

Local review only. React / TypeScript / Vite remain unchanged. No extra dependencies.

## Direction

An AI backend engineer's work is best explained through processing boundaries, recovery and individual contribution. Keep the overview compact; put the visual emphasis on each case study's system flow. Blue denotes connections and actions; project colors distinguish the card previews. No new performance numbers or responsibility claims. Existing project summaries, roles, periods and contributions remain the content source. Diagrams are conceptual flows, not exhaustive architecture diagrams.

Tokens: paper #f7f9fc, white #ffffff, ink #202b39, muted #586578, accent #205bba, navy #142b49. Noto Sans KR for reading; DM Mono only for ordered process steps. 1200px overview, 1120px detail, two-column cards and one-column mobile. Compact introduction and career timeline; optional full toolkit; detail sequence: purpose and role → system → contribution and implementation → resources.

## References applied

- [Anthropic frontend-design](https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md): subject-specific visual identity and restrained composition. Replaced decorative gradients and oversized repeated sections with project processing flows.
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines): native navigation links, URL state, browser Back/Forward, visible focus, native dialog focus containment and return, mobile targets, reduced motion and print layouts.
- [Vercel React Best Practices](https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/react-best-practices/SKILL.md): lazy-load case-study UI and below-fold images. No framework migration or unnecessary memoization.

## QA checklist

- Build and lint; Korean and English routes.
- All seven project links retain period, role, summary, contributions, stack and resources.
- Open via click/Enter or direct #project/id; refresh; Back/Forward; Escape and Close; focus restoration; Tab stays inside dialog.
- 1440px desktop and 390px / 320px mobile; no horizontal overflow; 44px controls.
- Reduced motion removes transitions; detail and overview print without fixed clipping.
- Screenshots and browser QA results recorded after verification. Existing content preserved, no deploy or push.

## Verified on 2026-10-14

- Existing repository had no uncommitted changes; no AGENTS.md or repository .agents/skills instructions were present.
- Build passed using existing WSL Node 24 dependencies; lint passed with zero warnings/errors. Windows npm cannot use the existing Linux dependency executables, so no dependencies were reinstalled.
- Chrome/Playwright: all seven project routes, Korean/English, initial heading focus, Tab containment, Escape, focus return, Back/Forward, refresh, 1440/390/320px overflow and reduced motion passed.
- Native modal printing needed a before/after-print document-flow switch in Chrome; print CSS removes navigation and includes resource URLs.
- Project facts in src/projects.ts are unchanged. No commits, push or deployment.
- Local preview: http://127.0.0.1:4187/ and /en/. Loopback only.
- Screenshots and QA artifacts: C:/Users/jerrylee1516/Documents/Codex/2026-10-06/task/ui-desktop.png, ui-mobile.png, ui-case-desktop.png, ui-case-mobile.png, ui-qa.json, ui-case-print.pdf.

Restart with the existing WSL setup:

```powershell
wsl.exe -d Ubuntu -- bash -lc 'cd /mnt/c/Users/jerrylee1516/Desktop/portfolio && PATH=/home/jerrylee1516/.nvm/versions/node/v24.13.0/bin:/usr/local/bin:/usr/bin:/bin /home/jerrylee1516/.nvm/versions/node/v24.13.0/bin/npm run preview -- --host 127.0.0.1 --port 4187 --strictPort'
```

For subsequent edits, run npm run build using the same WSL PATH before preview, or use npm run dev -- --host 127.0.0.1 --port 4187 --strictPort instead.
- Final VAETKI detail print: 1 A4 page, 680 extracted text characters, no extra blank page after compacting print-only spacing.

## Architecture and cover preparation

Expanded each detail flow with component responsibilities and separate storage / recovery / observation lanes. Sources: src/projects.ts, docs/company-experience.md, public/projects/rendi-architecture.png and tiger-architecture.png. GDG Website database table assignments remain unspecified. Existing project data and image bytes are preserved.

Local image inventory (all under public/projects):

| Project | Cover reference | Architecture reference |
| --- | --- | --- |
| NE:XT Rendi | rendi-cover.png: mobile UI and mint identity | rendi-architecture.png: WebSocket, FastAPI, streaming STT, REST AI feedback |
| Tiger Photo Studio | tiger-cover.png: red mobile upload/result screens | tiger-architecture.png: NestJS Gateway, RabbitMQ, Firebase, Firestore and image storage |
| GDG KU Website | gdg-cover.png: laptop calendar interface | No separate architecture image |
| AGP Wiki / AGP Note / VAETKI / Agent Platform | No existing cover image in this directory | Source-grounded text only |
| Community activities | seminar.png: seminar material | Not a project cover |

Proposed consistent generated-cover art direction: landscape 16:9 illustrations with one centered product motif, common perspective/lighting/background, project-specific accents and a 10–12% safe inset; reserve titles for HTML, do not render dense source text or architecture labels into cover images. Wiki: documents and evidence; Note: meeting waveform and source-linked notes; VAETKI: product and banner variants; Agent: execution/session/observability; Rendi: voice coaching mobile UI; Tiger: portrait generation mobile UI; GDG: community calendar. Covers are editorial illustrations; precise architecture stays in the accessible HTML diagram. The Tiger architecture source includes identifiable portraits; avoid passing those portraits as visual references unless separately approved, and prefer generic illustration. Seminar source includes contact information and is excluded from cover reference candidates.

Image generation tool availability confirmed. No image generation calls, image uploads or external image transfers occurred. Await user approval for that separate phase.


## Requested content exclusions

Removed the algorithm course from both language interfaces. GDG KU Website is excluded from the independent project list and detail route; a short community appendix preserves its context. Original source images and project records are retained.

Image generation approval received for existing references. Generation could not proceed: Windows path parsing failed (AbsolutePathBuf without base path); WSL reference path failed with "referenced image paths are unavailable in this session". No image was generated or substituted, and existing image bytes remain intact. This is a session file-access limitation, not a request for renewed approval.

Community consolidation: one GDGoC section contains organizer summary, seminar material, Rendi / Tiger project cards and the website appendix. Company projects remain in the selected-projects section. Project detail routes are unchanged. No image-generation calls in this phase.


## Generated covers applied

Rendi card: public/projects/rendi-generated.png from Library libfile_b4a386cd751c8191b948558f09fdc0d6.
Tiger card: public/projects/tiger-generated.png from Library libfile_b150cf59b0148191829288e8079edfcf.
Both viewed locally before applying; card containers use 16:9 and contain without cropping. Accessible image descriptions identify them as AI-generated conceptual covers. Original cover images remain in the project detail resources. Transfer completed through the official Library helper on WSL ext4, avoiding Windows Python's unsupported setxattr. Source Library identities remain recorded on the Linux originals; Windows copies and repository files retain this explicit provenance.
Community seminar concept image: public/projects/seminar-generated.png from Library libfile_6af493ac96788191bcab5bf290f4f38c. Original seminar.png retained. Native 16:9 proportion and contain rendering; both locales identify it as an AI-generated learning illustration, not an event photograph.


Community details: seminar button opens #project/seminars using the existing native-dialog/history/focus behavior. Topics are transcribed from original seminar.png; organizer responsibilities come from existing activity records. Named slide authors are distinguished from presentation confirmation; no event dates or new external links invented. GDG Website appendix links to #project/gdg-website, restoring the preserved React/FastAPI/MongoDB/PostgreSQL data and original gdg-cover.png inside detail without restoring its independent card. Algorithm course remains excluded.


## Hiring-reader redesign (2026-10-14)

Audience: a recruiter or engineering reviewer assessing scope and implementation quickly. First viewport must identify Jungjae Lee, AI / Backend Engineer and actual current work, then expose practical projects. This is a reading and evidence surface, not SaaS marketing or a newspaper layout.

Changed hierarchy: identity → company project scope and two concise implementation points → career → integrated community. Removed slogan hero, repeated English eyebrows, saturated technology placeholder art, repeated rounded card panels, standalone toolkit section and large contact campaign block. Preserved factual copy in detailed views; main points are concise restatements of existing source, not new achievements. Team contribution, sole side-project development and PoC handover remain distinct. Display-only metric slogans no longer appear as achievements; existing award and user count remain factual entries.

Detail order: purpose and role → personal implementation → stack / engineering sources → processing map → original material → small conceptual illustration. The maps retain previously grounded roles and flows, with ordered reading steps rather than a generic card kit. Generated files are preserved and shown as small supplementary detail illustrations. Real screenshots and slide material appear in main community thumbnails and detail resources.

Typography: Noto Sans KR is retained deliberately for Korean reading, with four weights and a restrained 44–60px name, 24px section, 20px project and 14–16px body hierarchy. No decorative serif, uppercase mono labels or arbitrary numbering. Palette: white, #f5f7f7 surface, #1f282d ink, #59656b secondary, #27645d action, #d9e0df divider. Reading width 1080px with scope/content columns, single-column mobile.

Documents consulted without installing or executing external packages:
- Impeccable [skill](https://raw.githubusercontent.com/pbakaus/impeccable/main/.agents/skills/impeccable/SKILL.md), [critique](https://raw.githubusercontent.com/pbakaus/impeccable/main/.agents/skills/impeccable/reference/critique.md), [distill](https://raw.githubusercontent.com/pbakaus/impeccable/main/.agents/skills/impeccable/reference/distill.md), [polish](https://raw.githubusercontent.com/pbakaus/impeccable/main/.agents/skills/impeccable/reference/polish.md): purpose and evidence first, deliberate reduction, bounded visual inspection. We use these as reference criteria; no CLI detector or formal command workflow was run.
- [Taste redesign](https://github.com/Leonxlnx/taste-skill/blob/main/skills/redesign-skill/SKILL.md) and [design-taste](https://raw.githubusercontent.com/madebymustafa/design-taste/main/skills/design-taste/SKILL.md): audit incumbent hierarchy and surface repetition. Oversized type, editorial indexing, texture and broad motion advice were rejected where unsuitable for hiring readers.
- [Anthropic frontend-design](https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md): subject-grounded composition and restraint.
- [NN/g scan-reading research](https://www.nngroup.com/articles/how-users-read-on-the-web/): front-load concrete facts and one idea per paragraph. No research percentages are used as portfolio achievements.

No repository AGENTS.md or .agents/skills design skill was present. React / TypeScript / Vite and existing routing are retained. Previous local source state is copied to the task workspace before-hiring-redesign folder, separate from Git, for review.


Independent review: recruiter_review reviewed code and desktop/mobile captures read-only. Feedback implemented in one final batch: main Wiki begins with purpose rather than handover history; Note and Agent entries use concrete implementation points instead of repeating summary; mobile hides the secondary generic experience sentence; screenshot capture resets scroll/focus to distinguish true viewport from QA state; print overview switches project stack to normal document flow so entries can follow the title on page 1. Original full details and history remain available. Generated images remain in supplementary figures, no source files deleted.
Final validation: build and lint passed with zero warnings/errors. Windows Chrome verified 4 company / 2 community entries, 8 detail routes, 1440/768/390/320px, English mobile, keyboard Enter/Space, Escape, focus containment/return, history/refresh, reduced motion and original/generated image loading. Independent final visual review found no blocker. Overview print is 3 A4 pages with all practical entries following identity on page 1; VAETKI detail is 1 page; source-rich seminar and GDG detail are 2 pages with preserved materials on page 2. No blank page; renderings inspected. Email/GitHub also printed in overview header. Windows loopback process 38820 remains active; Korean and English HTTP 200. No commit, push or deployment.


## Final source / preview separation

Home wordmark is Portfolio / 포트폴리오; the body retains Jungjae Lee / 이정재. Rendi, Tiger and seminar generated images are used only for compact main previews and identified as conceptual AI images in alt text. Detail contains original rendi-cover.png / tiger-cover.png / seminar.png and original rendi-architecture.png / tiger-architecture.png; GDG original gdg-cover.png remains. Detail generated figures were removed from rendering, while all generated and original files remain on disk.

Polish: align desktop introduction, scope and career columns; tabular metadata; constrained Korean sentence widths with natural wrapping; consistent list rhythm; two-field detail metadata uses available width; source-image padding and original-size links open only the actual asset in a new tab. Hover, focus and active states remain restrained; 44px source/link controls and wrapping mobile navigation. Hiring information structure and all existing facts remain unchanged. Uses previously reviewed Impeccable critique/polish as reference criteria, with no external CLI execution.
Visual review also aligned Rendi flow headings with the original FastAPI → Azure Streaming STT → AI feedback responsibilities. Final mapping/interaction QA: 8 routes, 1440/768/390/320px, generated main-only images, original-source links and popup enlargement, Enter/Space, Escape, focus return and browser history passed; no page errors. Windows HTTP 200 and process 38820 verified; build/lint passed. No commit/push/deploy.

## Balanced portfolio revision — 2026-10-18

Branch: feat/portfolio-balanced-design. Restore a compact blue/purple introduction and project-specific color bars while retaining the hiring-focused summaries, native case-study dialogs, source materials and language routes. Company work uses two columns on desktop and one on mobile. Community previews are larger; a concise core toolkit and contact section improve scanning and navigation. Balanced.css contains the screen presentation layer; print retains the existing document layout. No new dependencies or generated assets.

Validation: build, lint and diff whitespace checks passed. Chrome verified Korean desktop and 390px, English 320px and 768px, no page-width overflow, VAETKI dialog open/close, and lazy-loaded community images. No browser console errors observed. Local preview: http://127.0.0.1:5173/. Main and production deployment remain unchanged during comparison.

## Expanded case studies and introduction — 2026-10-18

Replaced the company-specific hero copy with the requested formal AI / Backend introduction in Korean and English. The second sentence remains visible on mobile. Added caseStudies.ts with background/scope, three or four titled implementation paragraphs and project status for seven projects. Sources: company-experience.md, preserved application documents and the existing processing-flow/original-image materials. Seminar source credits remain intact. Removed the print button, print lifecycle listeners, print-only contact text and dedicated print styles from the portfolio UI; standalone application documents retain their own independent controls.

Validation: build/lint, all seven expanded dialogs on mobile, English Note detail, Escape/close, 390px dialog width and zero print buttons. Desktop and mobile detail layouts inspected; local preview remains on port 5173. Main and production remain unchanged.
