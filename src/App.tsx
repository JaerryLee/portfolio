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
    title: 'LLM Ops & Observability',
    items: ['OpenTelemetry', 'OTLP', 'Distributed Tracing', 'Logs & Metrics', 'HyperDX', 'ClickHouse'],
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
      'PostgreSQL',
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
    heroBody: 'AI를 실제 제품과 업무에 적용하는 Applied AI Engineer 이정재입니다. 현재는 LLM Ops를 맡아 OpenTelemetry 기반 로깅·트레이싱과 실행 관측 체계를 구축·운영합니다.',
    selectedProjects: 'Selected projects',
    profileTitle: 'AI를 제품으로 만들고,\n실행을 관측합니다.',
    profileBody: 'AGP Note로 팀 업무의 AX 전환을 지원하고, VAETKI Commerce의 배너 생성 백엔드와 Dainos의 에이전틱 AI 플랫폼을 개발했습니다. 현재는 이 개발 경험을 바탕으로 LLM과 에이전트의 호출 흐름, 오류, 사용량을 추적하는 LLM Ops 업무에 집중하고 있습니다.',
    ncDetails: [
      '현재 · OpenTelemetry 기반 로깅·트레이싱·메트릭 수집과 LLM 실행 관측',
      '이전 · AGP Note 팀 업무 AX 전환, VAETKI Commerce 백엔드, Dainos 에이전틱 AI 개발'
    ],
    lgRole: '클라우드 아키텍처 인턴',
    lgDetails: [
      'Terraform 기반 Dev/Test/Staging/Prod 멀티 환경 IaC 구축',
      'AWS DMS 기반 온프레미스 → RDS 실시간 마이그레이션 PoC',
      '고가용성·DR 구성 및 보안·관측 시스템 강화',
    ],
    projectsHelp: '프로젝트의 목적과 담당 역할을 소개합니다. 자세한 설계와 구현 경험은 테크 블로그에서 읽을 수 있습니다.',
    companyDescription: '이전에 수행한 세 가지 프로젝트입니다. 팀 업무 AX 전환, 생성형 AI 서비스 백엔드, 에이전틱 AI 플랫폼 개발에서 맡은 범위를 정리했습니다.',
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
      title: 'LLM Ops & Observability',
      summary: 'LLM과 에이전트의 실행 흐름, 오류와 사용량을 관측하는 체계를 구축·운영합니다. OpenTelemetry 기반 로그·트레이스·메트릭을 연결해 AI 서비스의 동작을 설명할 수 있도록 합니다.',
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
    heroBody: 'I am Jungjae Lee, an Applied AI Engineer turning AI into products and workflows. I currently focus on LLM Ops, building and operating OpenTelemetry-based logging, tracing, and execution observability.',
    selectedProjects: 'Selected projects',
    profileTitle: 'I build AI products\nand make their execution observable.',
    profileBody: 'I supported team workflow transformation with AGP Note, built the banner-generation backend for VAETKI Commerce, and developed agentic AI capabilities for Dainos. I now focus on LLM Ops, applying that experience to tracing calls, diagnosing errors, and observing model usage across LLM and agent services.',
    ncDetails: [
      'Current · LLM Ops with OpenTelemetry logging, tracing, metrics, and execution observability',
      'Previous · AGP Note team workflow transformation, VAETKI Commerce backend, and Dainos agentic AI development'
    ],
    lgRole: 'Cloud Architecture Intern',
    lgDetails: [
      'Automated Dev, Test, Staging, and Prod infrastructure with Terraform',
      'Built an AWS DMS PoC for real-time on-premises to RDS migration',
      'Strengthened high availability, disaster recovery, security, and observability',
    ],
    projectsHelp: 'Explore each project’s purpose and my role. Detailed design and implementation notes are available on my tech blog.',
    companyDescription: 'Three previous projects spanning team workflow transformation, a generative AI service backend, and an agentic AI platform, with my implementation scope detailed below.',
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
      title: 'LLM Ops & Observability',
      summary: 'I build and operate observability for LLM and agent services, connecting OpenTelemetry logs, traces, and metrics to understand execution, errors, and model usage.',
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
      label: 'Previous company projects',
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
            <span>Applied AI Engineer</span>
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
                <span>OpenTelemetry</span>
                <span>Logs · Traces · Metrics</span>
              </div>
              <a className="current-work-blog" href={blogPostUrl('llm-ops-opentelemetry')} target="_blank" rel="noopener noreferrer">
                {t.blogLabel} <Arrow />
              </a>
            </div>
          </section>
          <div className="timeline">
            <article>
              <div className="timeline-date">2026.02 — Present</div>
              <div className="timeline-company">
                <span>NC AI</span>
                <h3>Applied AI Engineer</h3>
                <p>Agent Tech Center · Agent Platform Team</p>
              </div>
              <div className="timeline-detail">
                {t.ncDetails.map((detail) => <p key={detail}>{detail}</p>)}
                <div className="mini-tags">
                  <span>LLM Ops</span>
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
        <span>Applied AI Engineer · Seoul</span>
        <a href="#top">{t.backToTop}</a>
      </footer>
    </>
  )
}

export default App
