import { lazy, Suspense, useEffect, useState, type CSSProperties } from 'react'
import { projectsKo, projectsEn, seminarKo, seminarEn, type Project } from './projects'
import { blogUrl } from './links'
import './App.css'
import './Balanced.css'

const ProjectCaseStudy = lazy(() => import('./ProjectCaseStudy'))

type Locale = 'ko' | 'en'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const profileLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jerrylee1516/' },
  { label: 'Tech Blog', href: `${blogUrl}/` },
]

const stackGroups = [
  {
    title: 'Python Testing',
    items: ['pytest', 'unittest · mock', 'pytest-asyncio', 'FastAPI TestClient', 'HTTPX'],
  },
  {
    title: 'LLM Ops & Observability',
    items: ['OpenTelemetry', 'OTLP', 'Distributed Tracing', 'Logs & Metrics', 'HyperDX', 'ClickHouse', 'Logfire', 'Opik'],
  },
  {
    title: 'Applied AI',
    items: [
      'LLM API Integration',
      'Pydantic AI',
      'MCP',
      'AI Chat Service',
      'Agentic AI',
      'AI Service Orchestration',
      'Multimodal I/O',
      'Image Generation Pipeline',
      'Speech-to-Text Pipeline',
      'Async AI Workloads',
    ],
  },
  {
    title: 'Backend',
    items: ['Python', 'TypeScript', 'FastAPI', 'NestJS', 'REST API', 'WebSocket', 'gRPC'],
  },
  {
    title: 'Cloud & Infra',
    items: ['Kubernetes', 'Helm', 'ArgoCD', 'AWS', 'GCP', 'Terraform', 'Docker Compose', 'GitLab CI/CD', 'Cloud Functions'],
  },
  {
    title: 'Data & Messaging',
    items: [
      'PostgreSQL · pgvector',
      'MongoDB',
      'NATS',
      'SQLite',
      'Firestore',
      'AWS RDS',
      'AWS DMS',
      'Amazon EMR',
      'Apache Kafka',
      'Redis',
      'Celery',
      'RabbitMQ',
      'Async I/O',
    ],
  },
]

const pageCopy = {
  ko: {
    homeLabel: '이정재 포트폴리오 홈',
    navLabel: '주요 메뉴',
    heroLead: '기술을 제품으로,',
    heroEmphasis: '문제를 시스템으로.',
    heroBody: 'AI를 실제 제품과 업무에 적용하는 AI / Backend Engineer 이정재입니다. 현재는 로컬 문서를 정리하고 원문 근거로 답하는 AGP Wiki를 개발하며, 에이전트 실행 기반과 관측 체계의 구현 경험을 제품에 연결합니다.',
    selectedProjects: 'Selected projects',
    profileTitle: 'AI를 제품으로 만들고,\n실행을 관측합니다.',
    profileBody: 'AGP Note를 사내 사이드 프로젝트로 단독 개발하고, VAETKI Commerce의 배너 백엔드와 정부 과제의 목표지향 업무 에이전트 PoC에 기여했습니다. 해당 PoC를 개발·인계한 뒤 후속 AGP Wiki를 진행하고 있습니다. OpenTelemetry 기반 관측 체계 구현 경험을 바탕으로, AGP Wiki의 문서 수집·복구와 근거 검증을 개발하고 있습니다.',
    ncDetails: [
      '현재 · AGP Wiki 팀 개발 — 문서 수집·복구, 상태·로그와 인용·날짜 근거 검증',
      '수행 경험 · LLM 실행 관측, AGP Note 단독 개발, VAETKI Commerce 배너 백엔드, Agent PoC·LLM Ops 통합'
    ],
    lgRole: '클라우드 아키텍처 인턴',
    lgDetails: [
      'Terraform 기반 Dev/Test/Staging/Prod 멀티 환경 IaC 구축',
      'AWS DMS 기반 온프레미스 → RDS 실시간 마이그레이션 PoC',
      '고가용성·DR 구성 및 보안·관측 시스템 강화',
    ],
    projectsHelp: '프로젝트의 목적과 담당 역할을 소개합니다. 자세한 설계와 구현 경험은 테크 블로그에서 읽을 수 있습니다.',
    companyDescription: '현재 진행 중인 AGP Wiki와 이전 프로젝트입니다. 팀 개발에서 맡은 구현 범위와 사내 사이드 프로젝트의 단독 개발을 구분했습니다.',
    universityDescription:
      '학교와 개발자 커뮤니티에서 실시간 AI, 비동기 처리와 웹 플랫폼 프로젝트를 수행했습니다.',
    gdgRole: 'Backend & AI Core Member · 운영진',
    gdgActivities: [
      'AI 세미나 및 실습 프로젝트 기획·운영',
      'AWS·GCP 기반 클라우드 인프라 실습 워크숍 기획·운영',
      '학회 핵심 프로젝트 주도 개발 및 기술 리드 참여',
    ],
    activityAlt: 'GDGoC 클라우드 및 AI 세미나 자료',
    currentWork: {
      label: '현재 업무',
      title: 'AGP Wiki · 근거 기반 지식 도구',
      summary: '정부 과제의 목표지향 업무 에이전트 PoC를 개발·인계한 뒤, 후속으로 LLM Wiki 문서 정리와 검색 근거 기반 RAG 응답을 결합한 도구를 팀과 개발합니다. 분류 제안 검증, 중단 후 복구, 상태·로그와 검증된 파일 링크를 구현하며, FTS5·BM25 어휘 검색과 host LLM 응답을 연결하고 실제 호스트의 미확인 범위를 구분합니다.',
    },
    blogLabel: '설계·구현 기록 읽기',
    contributionLabel: '담당 역할',
    backToTop: 'Back to top ↑',
  },
  en: {
    homeLabel: 'Jungjae Lee portfolio home',
    navLabel: 'Primary navigation',
    heroLead: 'Technology into products,',
    heroEmphasis: 'problems into systems.',
    heroBody: 'I am Jungjae Lee, an AI / Backend Engineer turning AI into products and workflows. I currently develop AGP Wiki, a local document tool with source-grounded answers, building on experience in agent execution and observability.',
    selectedProjects: 'Selected projects',
    profileTitle: 'I build AI products\nand make their execution observable.',
    profileBody: 'I independently built AGP Note as an internal side project, developed the VAETKI Commerce banner backend, and contributed to a goal-oriented work agent PoC for a government project. After developing and handing over that PoC, I moved on to AGP Wiki. Drawing on OpenTelemetry integration experience, I now work on document ingestion, recovery, and evidence verification in AGP Wiki.',
    ncDetails: [
      'Current · AGP Wiki team development: ingestion, recovery, status, logs, and source evidence verification',
      'Experience · LLM observability, AGP Note sole development, VAETKI Commerce banner backend, and agent PoCs with LLM Ops integration'
    ],
    lgRole: 'Cloud Architecture Intern',
    lgDetails: [
      'Automated Dev, Test, Staging, and Prod infrastructure with Terraform',
      'Built an AWS DMS PoC for real-time on-premises to RDS migration',
      'Strengthened high availability, disaster recovery, security, and observability',
    ],
    projectsHelp: 'Explore each project’s purpose and my role. Detailed design and implementation notes are available on my tech blog.',
    companyDescription: 'AGP Wiki is in progress alongside previous projects. Each entry distinguishes my team contribution from the internal side project I developed independently.',
    universityDescription:
      'Developed real-time AI, asynchronous processing, and full-stack web projects at university and in the developer community.',
    gdgRole: 'Backend & AI Core Member · Organizer',
    gdgActivities: [
      'Planned and operated AI seminars and hands-on projects',
      'Designed and led AWS and GCP cloud infrastructure workshops',
      'Led core community projects and contributed as a technical lead',
    ],
    activityAlt: 'GDGoC cloud and AI seminar materials',
    currentWork: {
      label: 'Current work',
      title: 'AGP Wiki · Source-grounded Knowledge',
      summary: 'Following the handover of a goal-oriented work agent PoC for a government project, I contribute to a local LLM Wiki and RAG workflow with FTS5/BM25 lexical retrieval and host LLM answers. My work covers classification validation, recovery, status and logs, and verified file links, with remaining host checks recorded separately.',
    },
    blogLabel: 'Read the engineering notes (Korean)',
    contributionLabel: 'Role overview',
    backToTop: 'Back to top ↑',
  },
} as const

const projectFocus: Record<string, { ko: string[]; en: string[] }> = {
  'agp-wiki': { ko: ['중단 후 복구 가능한 문서 수집과 분류 검증', '파일·인용·날짜 근거 확인 및 Linux·Windows 회귀 검증'], en: ['Recoverable ingestion and classification validation', 'Source, quotation and date checks; Linux / Windows regression validation'] },
  vaetki: { ko: ['배너 생성·편집 API와 AI 서비스 연동', '시안별 잠금·버전 갱신·크레딧 처리와 부분 실패 복구'], en: ['Banner generation / editing APIs and AI integration', 'Variation locks, version updates, credits and partial-failure recovery'] },
  'agp-note': { ko: ['전사 근거·회의 문맥 연결, 게시 전 검토와 로컬 기록 보존', 'MCP 권한, 외부 AI 전송 경계와 설치·업데이트 흐름'], en: ['Source-linked summaries, publishing review and local record preservation', 'MCP permissions, AI transfer boundaries, installation and updates'] },
  dainos: { ko: ['에이전트 실행·승인·DBOS 세션과 사용자별 접근 격리', '메모리·벡터 검색과 OpenTelemetry 관측 연결'], en: ['Agent execution, approval, DBOS sessions and user-scoped isolation', 'Memory, vector retrieval and OpenTelemetry integration'] },
  rendi: { ko: ['실시간 음성 입력에서 AI 코칭까지의 백엔드', '음성·AI 서비스 연동과 비동기 처리'], en: ['Real-time backend from voice input to AI coaching', 'Speech / AI integration and asynchronous processing'] },
  tiger: { ko: ['AI 프로필 생성과 비동기 이미지 처리', '프론트엔드 연동·인증·배포에 기여'], en: ['AI profile generation and asynchronous image processing', 'Frontend integration, authentication and deployment'] },
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const community = project.category === 'community'
  return (
    <article className={`project-card${community ? ' community-project' : ''}`} style={{ '--project-color': project.color, '--project-ink': project.ink } as CSSProperties}>
      <a className="project-cover" href={`#project/${project.id}`} aria-haspopup="dialog" onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        event.preventDefault()
        history.pushState({ portfolioProject: true }, '', `#project/${project.id}`)
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      }}>
        <div className="project-heading">
          <span className="project-label">{project.label}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-role">{project.role}</p>
          {!community && <p className="project-period">{project.period}</p>}
        </div>
        <div className="project-cover-copy">
          <p className="project-summary">{project.id === 'agp-wiki' ? (locale === 'ko' ? '로컬 문서를 정리하고 검색 근거로 답하는 LLM Wiki 도구를 팀과 개발하고 있습니다.' : 'Working with the team on a local LLM Wiki that organizes documents and answers with retrieved evidence.') : project.summary}</p>
          <ul className="project-focus">{projectFocus[project.id]?.[locale].map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="project-bottom"><span className="project-tech">{project.tech.join(' / ')}</span><span className="project-action">{locale === 'ko' ? '상세 보기' : 'Read more'}</span></div>
        </div>
        {community && project.cover && <img className="project-thumbnail" src={project.cardCover ?? project.cover} alt={project.cardCover ? (locale === 'ko' ? `${project.title} AI 생성 개념 미리보기` : `${project.title} AI-generated concept preview`) : ''} loading="lazy" />}
      </a>
    </article>
  )
}

function App() {
  const locale: Locale = window.location.pathname.split('/').includes('en') ? 'en' : 'ko'
  const ko = locale === 'ko'
  const [projectId, setProjectId] = useState(() => window.location.hash.startsWith('#project/') ? window.location.hash.slice(9) : '')
  useEffect(() => {
    const sync = () => setProjectId(window.location.hash.startsWith('#project/') ? window.location.hash.slice(9) : '')
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => { window.removeEventListener('hashchange', sync); window.removeEventListener('popstate', sync) }
  }, [])
  const t = pageCopy[locale]
  const projects = ko ? projectsKo : projectsEn
  const selectedProject = projectId === 'seminars' ? (ko ? seminarKo : seminarEn) : projects.find((project) => project.id === projectId)
  const openSeminars = () => { history.pushState({ portfolioProject: true }, '', '#project/seminars'); window.dispatchEvent(new HashChangeEvent('hashchange')) }
  const closeProject = () => {
    if (history.state?.portfolioProject) history.back()
    else { history.replaceState(null, '', selectedProject?.category === 'community' ? '#activities' : '#projects'); setProjectId('') }
  }
  const languageHref = ko ? asset('en/') : asset('')
  const companyProjects = ['agp-wiki', 'vaetki', 'agp-note', 'dainos'].map((id) => projects.find((project) => project.id === id)!).filter(Boolean)
  return (
    <>
      <a className="skip-link" href="#top">{ko ? '본문으로 이동' : 'Skip to content'}</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={t.homeLabel}>{ko ? '포트폴리오' : 'Portfolio'}</a>
        <nav aria-label={t.navLabel}><a href="#projects">{ko ? '프로젝트' : 'Projects'}</a><a href="#experience">{ko ? '경력' : 'Experience'}</a><a href="#activities">{ko ? '커뮤니티' : 'Community'}</a><a className="language-switch" href={languageHref} lang={ko ? 'en' : 'ko'} hrefLang={ko ? 'en' : 'ko'}>{ko ? 'EN' : 'KO'}</a></nav>
      </header>
      <main id="top" tabIndex={-1}>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-identity"><p className="hero-eyebrow">{ko ? '기술을 제품으로, 문제를 시스템으로.' : 'Technology into products.'}</p><h1 id="hero-title">{ko ? '이정재' : 'Jungjae Lee'}</h1><p className="hero-role">AI / Backend Engineer</p></div>
          <div className="hero-intro"><p>{ko ? 'AI 기술을 제품과 서비스에 연결하는 AI / Backend 개발자입니다.' : 'I am an AI / Backend developer connecting AI technology to products and services.'}</p><p className="hero-scope">{ko ? '에이전트 실행과 비동기 처리, 관측 체계를 설계·구현하며 안정적으로 운영할 수 있는 백엔드를 개발합니다.' : 'I design and implement agent execution, asynchronous processing and observability to build backends that support reliable operations.'}</p><div className="hero-links"><a href="mailto:jerrylee1516@gmail.com">Email</a><a href="https://github.com/JaerryLee" target="_blank" rel="noopener noreferrer">GitHub</a>{profileLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label === 'Tech Blog' && ko ? '기술 블로그' : link.label}</a>)}</div><a className="hero-work-link" href="#projects">{ko ? '프로젝트 살펴보기' : 'Explore selected work'} <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">{ko ? '실무 프로젝트' : 'Selected work'}</h2><p>NC AI / Agent Platform Team</p></div>
          <div className="project-stack">{companyProjects.map((project) => <ProjectCard key={project.id} project={project} locale={locale} />)}</div>
        </section>

        <section className="skills-section section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading"><h2 id="skills-title">{ko ? '기술 역량' : 'Technical expertise'}</h2></div>
          <div className="skills-overview">
            <article><h3>Backend</h3><p>Python · FastAPI · TypeScript</p><p>{ko ? 'API 설계 · 비동기 처리' : 'API design · Asynchronous processing'}</p></article>
            <article><h3>AI &amp; Agents</h3><p>{ko ? 'LLM 연동 · MCP' : 'LLM integration · MCP'}</p><p>{ko ? '검색 · 근거 검증' : 'Retrieval · Evidence verification'}</p></article>
            <article><h3>Infra &amp; Observability</h3><p>AWS · Kubernetes</p><p>OpenTelemetry</p></article>
          </div>
          <details className="toolkit-disclosure"><summary>{ko ? '전체 기술·도구 보기' : 'View all technologies and tools'}</summary><div className="stack-grid">{stackGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.items.join(' / ')}</p></article>)}</div></details>
        </section>

        <section className="experience-section section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><h2 id="experience-title">{ko ? '경력' : 'Experience'}</h2></div>
          <div className="timeline">
            <article><div className="timeline-company"><h3>NC AI</h3><p>AI / Backend Engineer</p><p>Agent Tech Center / Agent Platform Team</p><span className="timeline-date">2026.02 — {ko ? '현재' : 'Present'}</span></div><div className="timeline-detail">{t.ncDetails.map((detail) => <p key={detail}>{detail}</p>)}<details className="career-note"><summary>{ko ? '현재 업무와 이전 프로젝트' : 'Current work and previous projects'}</summary><p>{t.profileBody}</p><p>{t.currentWork.summary}</p></details></div></article>
            <article><div className="timeline-company"><h3>LG CNS</h3><p>Cloud Architect Intern</p><span className="timeline-date">2023.06 — 2023.08</span></div><ul className="timeline-detail">{t.lgDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>
          </div>

        </section>

        <section className="activities-section section" id="activities" aria-labelledby="activities-title">
          <div className="section-heading"><h2 id="activities-title">GDGoC Korea University</h2><p>{ko ? '커뮤니티 활동' : 'Community'}</p></div>
          <div className="activity-layout"><article className="activity-main"><strong>{t.gdgRole}</strong><p className="activity-period">2022.08 — 2025.08</p><ul>{t.gdgActivities.map((activity) => <li key={activity}>{activity}</li>)}</ul></article>
            <button className="seminar-trigger" type="button" data-case-id="seminars" aria-haspopup="dialog" onClick={openSeminars}><img className="activity-image" src={asset('projects/seminar-generated.png')} alt={ko ? '클라우드·AI 학습을 표현한 AI 생성 개념 미리보기' : 'AI-generated concept preview of cloud and AI learning'} loading="lazy" /><span><strong>{ko ? '클라우드 · AI 세미나' : 'Cloud & AI seminars'}</strong><span>{ko ? 'AWS·GCP 인프라 실습, AI Week' : 'AWS / GCP workshops and AI Week'}</span><span className="project-action">{ko ? '주제와 역할 보기' : 'Topics and role'}</span></span></button>
          </div>
          <div className="community-projects"><div className="project-stack">{projects.filter((project) => project.category === 'community' && project.id !== 'gdg-website').map((project) => <ProjectCard key={project.id} project={project} locale={locale} />)}</div></div>
          <aside className="community-appendix"><a className="community-website-link" href="#project/gdg-website" aria-haspopup="dialog">GDG KU Website</a><p>{ko ? '회원 활동·일정·운영자 관리를 위한 풀스택 웹사이트. 기술과 구현 내용 보기.' : 'A full-stack website for activities, schedules and administration. View technologies and implementation.'}</p></aside>
        </section>
      </main>

      <footer><span>{ko ? '이정재' : 'Jungjae Lee'} / Seoul</span><a href="mailto:jerrylee1516@gmail.com">jerrylee1516@gmail.com</a><a href="#top">{ko ? '맨 위로' : 'Back to top'}</a></footer>
      {selectedProject && <Suspense fallback={<div className="case-loading" role="status">{ko ? '상세를 여는 중…' : 'Opening details…'}<button onClick={closeProject}>{ko ? '취소' : 'Cancel'}</button></div>}><ProjectCaseStudy key={selectedProject.id} project={selectedProject} locale={locale} onClose={closeProject} /></Suspense>}
    </>
  )
}

export default App
