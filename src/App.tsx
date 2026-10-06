import { useState, type CSSProperties } from 'react'
import { projectsKo, projectsEn, type Project } from './projects'
import { blogUrl, blogPostUrl } from './links'
import './App.css'

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
    algorithmTitle: '삼성SDS 알고리즘 특강',
    algorithmBody: '자료구조와 알고리즘 문제 해결 역량을 집중적으로 훈련했습니다.',
    contactTitle: '함께 더 나은\n시스템을 만들어요.',
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
    algorithmTitle: 'Samsung SDS Algorithm Intensive Course',
    algorithmBody: 'Completed 80 hours of intensive data structures and algorithm problem-solving training.',
    contactTitle: 'Let’s build better\nsystems together.',
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

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function MultilineText({ text }: { text: string }) {
  return text.split('\n').map((line) => (
    <span className="text-line" key={line}>
      {line}
    </span>
  ))
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const t = pageCopy[locale]
  const detailsId = `${project.id}-details`
  const style = {
    '--project-color': project.color,
    '--project-ink': project.ink,
  } as CSSProperties

  return (
    <article className={`project-card${isOpen ? ' is-open' : ''}`} style={style}>
      <button
        className="project-cover"
        type="button"
        aria-expanded={isOpen}
        aria-controls={detailsId}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="project-number">PROJECT / {project.index}</span>
        <span className="project-cover-copy">
          <span className="project-label">{project.label}</span>
          <span className="project-title">{project.title}</span>
          <span className="project-summary">{project.summary}</span>
          <span className="project-role">{project.role}</span>
        </span>
        <span className="project-media" aria-hidden="true">
          {project.cover ? (
            <img src={project.cover} alt="" />
          ) : (
            <span className={`generated-visual ${project.id}`}>
              <span>{project.title}</span>
              <span>{project.metric ?? project.label}</span>
            </span>
          )}
        </span>
        <span className="project-action" aria-hidden="true">
          {isOpen ? 'Close −' : 'Explore +'}
        </span>
      </button>

      <div className="project-details" id={detailsId} hidden={!isOpen}>
        <div className="project-detail-head">
          <div>
            <span className="detail-label">Period</span>
            <strong>{project.period}</strong>
          </div>
          <div>
            <span className="detail-label">Role</span>
            <strong>{project.role}</strong>
          </div>
          {(project.metric || project.award) && (
            <div>
              <span className="detail-label">Highlight</span>
              <strong>{project.award ?? project.metric}</strong>
            </div>
          )}
        </div>

        <div className="project-detail-body">
          <div>
            <span className="detail-label">{t.contributionLabel}</span>
            <ul>
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="detail-label">Tech stack</span>
            <div className="tag-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {project.blogPost && (
              <a className="project-link project-blog-link" href={blogPostUrl(project.blogPost)} target="_blank" rel="noopener noreferrer">
                {t.blogLabel} <Arrow />
              </a>
            )}
            {project.href && (
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                Live service <Arrow />
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  )
}

function App() {
  const locale: Locale = window.location.pathname.split('/').includes('en') ? 'en' : 'ko'
  const t = pageCopy[locale]
  const projects = locale === 'ko' ? projectsKo : projectsEn
  const languageHref = locale === 'ko' ? asset('en/') : asset('')
  const projectGroups = [
    {
      label: 'Company projects',
      title: 'NC AI · Agent Platform Team',
      description: t.companyDescription,
      projects: projects.filter((project) => project.category === 'company'),
    },
    {
      label: 'University & community projects',
      title: 'GDGoC Korea University',
      description: t.universityDescription,
      projects: projects.filter((project) => project.category === 'community'),
    },
  ]

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={t.homeLabel}>
          PORTFOLIO
        </a>
        <nav aria-label={t.navLabel}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#activities">Activities</a>
          <a href="#contact">Contact</a>
          <a
            className="language-switch"
            href={languageHref}
            lang={locale === 'ko' ? 'en' : 'ko'}
            hrefLang={locale === 'ko' ? 'en' : 'ko'}
          >
            {locale === 'ko' ? 'EN' : 'KO'}
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span>AI / Backend Engineer</span>
            <span>Seoul · 2026</span>
          </div>
          <h1 id="hero-title">
            {t.heroLead}
            <br />
            <em>{t.heroEmphasis}</em>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p>{t.heroBody}</p>
              <div className="hero-links">
                {profileLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} <Arrow />
                  </a>
                ))}
              </div>
            </div>
            <a className="hero-project-link" href="#projects">
              {t.selectedProjects} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-orbit one" aria-hidden="true" />
          <div className="hero-orbit two" aria-hidden="true" />
        </section>

        <section className="intro-section section" aria-labelledby="intro-title">
          <div className="section-index">01 / PROFILE</div>
          <div className="intro-copy">
            <h2 id="intro-title"><MultilineText text={t.profileTitle} /></h2>
            <p>{t.profileBody}</p>
          </div>
        </section>

        <section className="experience-section section" id="experience" aria-labelledby="experience-title">
          <div className="section-index">02 / EXPERIENCE</div>
          <h2 id="experience-title" className="section-title">Experience</h2>
          <section className="current-work" id="current-work" aria-labelledby="current-work-title">
            <div className="current-work-heading">
              <div>
                <span className="current-work-label">{t.currentWork.label}</span>
                <h3 id="current-work-title">{t.currentWork.title}</h3>
              </div>
              <p>{t.currentWork.summary}</p>
            </div>
            <div className="current-work-footer">
              <div className="mini-tags">
                <span>Python · SQLite</span>
                <span>Evidence · Recovery</span>
              </div>
            </div>
          </section>
          <div className="timeline">
            <article>
              <div className="timeline-date">2026.02 — Present</div>
              <div className="timeline-company">
                <span>NC AI</span>
                <h3>AI / Backend Engineer</h3>
                <p>Agent Tech Center · Agent Platform Team</p>
              </div>
              <div className="timeline-detail">
                {t.ncDetails.map((detail) => <p key={detail}>{detail}</p>)}
                <div className="mini-tags">
                  <span>AGP Wiki</span>
                  <span>OpenTelemetry</span>
                  <span>Logs · Traces · Metrics</span>
                </div>
              </div>
            </article>

            <article>
              <div className="timeline-date">2023.06 — 2023.08</div>
              <div className="timeline-company">
                <span>LG CNS</span>
                <h3>Cloud Architect Intern</h3>
                <p>{t.lgRole}</p>
              </div>
              <div className="timeline-detail">
                {t.lgDetails.map((detail) => <p key={detail}>{detail}</p>)}
                <div className="mini-tags">
                  <span>AWS</span>
                  <span>Terraform</span>
                  <span>GitLab CI/CD</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="projects-head">
            <div className="section-index">03 / SELECTED PROJECTS</div>
            <h2 id="projects-title">From architecture<br />to experience.</h2>
            <p>{t.projectsHelp}</p>
          </div>
          <div className="project-groups">
            {projectGroups.map((group) => (
              <section className="project-group" key={group.label} aria-label={group.label}>
                <div className="project-group-head">
                  <span>{group.label}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <div className="project-stack">
                  {group.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} locale={locale} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="stack-section section" aria-labelledby="stack-title">
          <div className="section-index">04 / TOOLKIT</div>
          <h2 id="stack-title" className="section-title">Technical toolkit</h2>
          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <article key={group.title}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.items.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="activities-section section" id="activities" aria-labelledby="activities-title">
          <div className="section-index">05 / ACTIVITIES</div>
          <h2 id="activities-title" className="section-title">Activities & learning</h2>
          <div className="activity-layout">
            <article className="activity-main">
              <span className="activity-period">2022.08 — 2025.08</span>
              <h3>GDGoC Korea University</h3>
              <strong>{t.gdgRole}</strong>
              <ul>
                {t.gdgActivities.map((activity) => <li key={activity}>{activity}</li>)}
              </ul>
            </article>
            <img
              className="activity-image"
              src={asset('projects/seminar.png')}
              alt={t.activityAlt}
            />
            <article className="activity-award">
              <span>2025.02 · 80 hours</span>
              <h3>{t.algorithmTitle}</h3>
              <p>{t.algorithmBody}</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <span>LET’S BUILD SOMETHING RELIABLE.</span>
          <h2 id="contact-title"><MultilineText text={t.contactTitle} /></h2>
          <div className="contact-links">
            <a href="mailto:jerrylee1516@gmail.com">Email <Arrow /></a>
            <a href="https://github.com/JaerryLee" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Jungjae Lee</span>
        <span>AI / Backend Engineer · Seoul</span>
        <a href="#top">{t.backToTop}</a>
      </footer>
    </>
  )
}

export default App
