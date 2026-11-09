# 이정재 · AI / Backend Engineer Portfolio

React, TypeScript, Vite로 만든 개인 포트폴리오입니다.

## Local development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm lint
pnpm build
pnpm preview
```

## Deployment

실제 공개 주소는 `https://jaerrylee.github.io/portfolio/`입니다. 인접한 블로그 저장소의 `public/portfolio/`에도 빌드 결과를 보관하므로, 포트폴리오 소스만 변경하면 이 스냅샷은 갱신되지 않습니다.

공개 반영 전 두 저장소를 함께 검증합니다.

```bash
pnpm lint
pnpm build
cd ../jaerrylee.github.io
pnpm sync:portfolio
pnpm build
```

`sync:portfolio`는 `/portfolio/` 경로로 다시 빌드해 블로그의 정적 스냅샷을 갱신합니다. 커밋·push·배포는 로컬 검증과 별개입니다. 두 저장소 모두 `main` push 시 Pages workflow가 실행되므로 게시 시점에는 소스와 스냅샷을 함께 확인해야 합니다. Pages 설정과 공개 범위는 저장소별로 별도 관리합니다.

## Tech blog

포트폴리오는 프로젝트의 목적과 역할 중심으로 소개하고, 자세한 설계·구현은 별도 GitHub 블로그에 작성합니다.

- 블로그: `https://jaerrylee.github.io/`
- 로컬 프로젝트: `../jaerrylee.github.io/`
- 원고: 블로그의 `src/content/posts/`
- 포트폴리오의 링크 설정: `src/links.ts`
- 작성 근거와 글 연결: [회사 업무 기록](docs/company-experience.md)

두 사이트를 함께 로컬에서 확인할 때 블로그를 먼저 실행한 뒤
`VITE_BLOG_URL=http://localhost:4321 pnpm dev`로 포트폴리오를 실행할 수 있습니다.
블로그가 별도 저장소이므로 기존 portfolio 저장소의 Pages 설정과 공개 범위는 따로 관리합니다.
