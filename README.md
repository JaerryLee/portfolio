# 이정재 · Applied AI Engineer Portfolio

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

`main` 브랜치에 변경사항이 push되면 GitHub Actions가 사이트를 빌드하고 GitHub Pages에 자동으로 배포합니다.

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정해야 합니다.

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
