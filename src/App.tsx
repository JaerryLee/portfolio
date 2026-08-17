import { useState, type CSSProperties } from 'react'
import './App.css'

type Project = {
  id: string
  index: string
  title: string
  label: string
  period: string
  role: string
  summary: string
  tech: string[]
  contributions: string[]
  color: string
  ink: string
  cover?: string
  architecture?: string
  metric?: string
  award?: string
  href?: string
  flow?: string[]
}

type Locale = 'ko' | 'en'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const projectsKo: Project[] = [
  {
    id: 'vaetki',
    index: '01',
    title: 'VAETKI Commerce',
    label: 'NC AI · AI Banner Generation SaaS',
    period: '2026 — Present',
    role: 'Banner Generation Backend · AI Service Integration',
    summary:
      '사용자가 업로드한 상품 이미지와 대화형 요청을 바탕으로 다양한 규격의 마케팅 배너를 생성하는 AI SaaS 기능입니다.',
    tech: ['Backend API', 'Redis', 'Celery', 'AI Chat Service', 'CI/CD', 'Generative AI'],
    contributions: [
      '배너 생성 기능의 전체 백엔드 API와 비즈니스 로직 설계·개발',
      '사용자가 업로드한 이미지를 AI 생성 서비스에 전달하고, 생성 응답을 서비스 결과로 반환하는 연동 흐름 구현',
      'AI Chat Service를 연동하여 대화형 배너 생성·수정 요청을 처리하는 백엔드 기능 개발',
      'Redis와 Celery를 활용한 AI 생성 작업 비동기 파이프라인 및 결과 처리 흐름 구현',
      'DEV·RC 환경까지 CI/CD 파이프라인 구축 및 배포 자동화 (Live 배포는 별도 운영 팀 담당)',
      '프론트엔드, 백엔드, AI 서비스 사이의 요청·응답 인터페이스 정의 및 연동',
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: '배너 생성 전체 백엔드 · DEV/RC CI/CD',
    href: 'https://commerce.vaetki.ai/ko',
    flow: ['Upload / Chat', 'Banner API', 'Celery / Redis', 'AI Services', 'Generated Banner'],
  },
  {
    id: 'agentic',
    index: '02',
    title: 'Agentic AI Platform',
    label: 'NC AI · National R&D',
    period: '2026 — Present',
    role: 'PoC & Platform Development',
    summary:
      'AI 에이전트가 복잡한 목표를 수행하도록 기술을 검증하고, 검증된 기능을 플랫폼으로 확장하는 프로젝트입니다.',
    tech: ['Agentic AI', 'PoC', 'Backend', 'Platform'],
    contributions: [
      'Agentic AI 활용 가능성을 검증하기 위한 PoC 개발',
      '검증된 기능을 반복 활용할 수 있도록 플랫폼 관점에서 구조화',
      '에이전트 실행 및 결과 처리를 지원하는 백엔드 기능 개발',
      '내부 유관 조직 및 프로젝트 참여자와 기술 요구사항 협의',
    ],
    color: '#6c24df',
    ink: '#ffffff',
    metric: '4년간 총 493.75억 원 규모 국가 R&D 사업',
    flow: ['Goal', 'Plan', 'Tool execution', 'Result'],
  },
  {
    id: 'rendi',
    index: '03',
    title: 'NE:XT Rendi',
    label: 'GDGoC KU · Real-time AI Voice',
    period: '2025.03 — 2025.05',
    role: 'Backend Developer',
    summary:
      '사용자의 음성을 텍스트로 변환하고 LLM이 실시간 대화 피드백을 제공하는 AI 소개팅 코칭 서비스입니다.',
    tech: ['FastAPI', 'WebSocket', 'gRPC', 'GPT API', 'Docker Compose'],
    contributions: [
      'FastAPI 백엔드 서버 개발 및 GPT 기반 AI 서비스 연동',
      '실시간 WebSocket STT API와 gRPC 파이프라인 구축',
      '음성 데이터, 텍스트 변환, AI 응답을 잇는 비동기 파이프라인 설계',
      '비동기 I/O 최적화를 통한 실시간 응답 지연 단축',
      'Docker Compose 기반 서비스 분리 및 모듈화',
    ],
    color: '#86f5cf',
    ink: '#071a18',
    cover: asset('projects/rendi-cover.png'),
    architecture: asset('projects/rendi-architecture.png'),
    award: '금상 · NE:XT CONTEST',
    flow: ['Voice stream', 'WebSocket', 'FastAPI', 'gRPC / STT', 'LLM feedback'],
  },
  {
    id: 'tiger',
    index: '04',
    title: '호랑이사진관',
    label: 'GDGoC KU · AI Profile Generator',
    period: '2024.03 — 2024.09',
    role: 'Backend & Frontend Developer',
    summary:
      'Stable Diffusion을 기반으로 사용자의 사진을 AI 프로필 이미지로 변환하는 서비스입니다.',
    tech: ['NestJS', 'Next.js', 'Firestore', 'RabbitMQ', 'Cloud Functions', 'CI/CD'],
    contributions: [
      'NestJS와 Firestore 기반 서버 개발 및 인증 구현',
      'RabbitMQ 비동기 메시징 기반 AI 이미지 생성 작업 병렬 처리',
      'Cloud Functions 모듈화로 SNS 알림 기능을 서버리스로 구현',
      'CI/CD 파이프라인과 단위·통합 테스트 자동화',
      'Next.js 리팩토링, API 연동, 인증 흐름 및 통합 배포 참여',
    ],
    color: '#e01823',
    ink: '#ffffff',
    cover: asset('projects/tiger-cover.png'),
    architecture: asset('projects/tiger-architecture.png'),
    metric: '약 1,000명 사용자',
    flow: ['Image upload', 'NestJS', 'RabbitMQ', 'AI worker', 'Generated profile'],
  },
  {
    id: 'gdg-website',
    index: '05',
    title: 'GDG KU Website',
    label: 'GDGoC KU · Full-stack Community Platform',
    period: 'University Project',
    role: 'Full-stack Developer',
    summary:
      '멤버 활동과 일정, 운영진 관리 기능을 하나의 공간에 모은 GDG KU 커뮤니티 웹사이트입니다.',
    tech: ['React', 'Vite', 'TypeScript', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    contributions: [
      'React, Vite, TypeScript 기반 프론트엔드 전체 개발',
      'FastAPI 기반 백엔드 API와 서비스 로직 개발',
      'MongoDB·PostgreSQL을 활용한 데이터 모델링 및 저장 계층 구현',
      '프론트엔드와 백엔드 API 연동, 인증·권한 및 관리자 기능 구현',
      '멤버 캘린더, 활동 조회, 일정·멤버 관리 기능의 풀스택 개발',
    ],
    color: '#7662a7',
    ink: '#ffffff',
    cover: asset('projects/gdg-cover.png'),
    flow: ['React / Vite', 'TypeScript', 'FastAPI', 'MongoDB / PostgreSQL'],
  },
]

const projectsEn: Project[] = [
  {
    id: 'vaetki',
    index: '01',
    title: 'VAETKI Commerce',
    label: 'NC AI · AI Banner Generation SaaS',
    period: '2026 — Present',
    role: 'Banner Generation Backend · AI Service Integration',
    summary:
      'An AI SaaS feature that generates marketing banners in multiple formats from uploaded product images and conversational requests.',
    tech: ['Backend API', 'Redis', 'Celery', 'AI Chat Service', 'CI/CD', 'Generative AI'],
    contributions: [
      'Designed and implemented the complete backend API and business logic for banner generation',
      'Built the integration flow that sends user-uploaded images to AI services and returns generated results to the product',
      'Integrated AI Chat Service to support conversational banner generation and revision requests',
      'Implemented asynchronous AI workloads and result processing with Redis and Celery',
      'Built CI/CD pipelines and deployment automation through DEV and RC; Live deployment is owned by a separate operations team',
      'Defined request and response interfaces across the frontend, backend, and AI services',
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: 'End-to-end banner backend · DEV/RC CI/CD',
    href: 'https://commerce.vaetki.ai/ko',
    flow: ['Upload / Chat', 'Banner API', 'Celery / Redis', 'AI Services', 'Generated Banner'],
  },
  {
    id: 'agentic',
    index: '02',
    title: 'Agentic AI Platform',
    label: 'NC AI · National R&D',
    period: '2026 — Present',
    role: 'PoC & Platform Development',
    summary:
      'A platform project that validates how AI agents accomplish complex goals and turns proven capabilities into reusable platform components.',
    tech: ['Agentic AI', 'PoC', 'Backend', 'Platform'],
    contributions: [
      'Developed PoCs to validate Agentic AI use cases',
      'Structured validated capabilities as reusable platform components',
      'Built backend capabilities for agent execution and result processing',
      'Collaborated with internal teams and project partners on technical requirements',
    ],
    color: '#6c24df',
    ink: '#ffffff',
    metric: 'Four-year national R&D program valued at KRW 49.375B',
    flow: ['Goal', 'Plan', 'Tool execution', 'Result'],
  },
  {
    id: 'rendi',
    index: '03',
    title: 'NE:XT Rendi',
    label: 'GDGoC KU · Real-time AI Voice',
    period: '2025.03 — 2025.05',
    role: 'Backend Developer',
    summary:
      'A real-time AI dating coach that converts live speech to text and delivers LLM-powered conversational feedback.',
    tech: ['FastAPI', 'WebSocket', 'gRPC', 'GPT API', 'Docker Compose'],
    contributions: [
      'Developed the FastAPI backend and integrated GPT-powered AI services',
      'Built a real-time WebSocket STT API and gRPC pipeline',
      'Designed an asynchronous pipeline spanning voice, transcription, and AI responses',
      'Reduced response latency through asynchronous I/O optimization',
      'Separated and modularized services with Docker Compose',
    ],
    color: '#86f5cf',
    ink: '#071a18',
    cover: asset('projects/rendi-cover.png'),
    architecture: asset('projects/rendi-architecture.png'),
    award: 'Gold Award · NE:XT CONTEST',
    flow: ['Voice stream', 'WebSocket', 'FastAPI', 'gRPC / STT', 'LLM feedback'],
  },
  {
    id: 'tiger',
    index: '04',
    title: 'Tiger Photo Studio',
    label: 'GDGoC KU · AI Profile Generator',
    period: '2024.03 — 2024.09',
    role: 'Backend & Frontend Developer',
    summary:
      'An AI profile image service that transforms user photos into custom portraits with Stable Diffusion.',
    tech: ['NestJS', 'Next.js', 'Firestore', 'RabbitMQ', 'Cloud Functions', 'CI/CD'],
    contributions: [
      'Developed the NestJS and Firestore backend, including authentication',
      'Parallelized AI image generation with RabbitMQ-based asynchronous messaging',
      'Implemented serverless social notification modules with Cloud Functions',
      'Automated unit and integration tests through a CI/CD pipeline',
      'Contributed to Next.js refactoring, API integration, authentication, and unified deployment',
    ],
    color: '#e01823',
    ink: '#ffffff',
    cover: asset('projects/tiger-cover.png'),
    architecture: asset('projects/tiger-architecture.png'),
    metric: 'Approximately 1,000 users',
    flow: ['Image upload', 'NestJS', 'RabbitMQ', 'AI worker', 'Generated profile'],
  },
  {
    id: 'gdg-website',
    index: '05',
    title: 'GDG KU Website',
    label: 'GDGoC KU · Full-stack Community Platform',
    period: 'University Project',
    role: 'Full-stack Developer',
    summary:
      'A community platform that centralizes member activities, calendars, and administrative workflows for GDG KU.',
    tech: ['React', 'Vite', 'TypeScript', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    contributions: [
      'Developed the complete frontend with React, Vite, and TypeScript',
      'Built backend APIs and service logic with FastAPI',
      'Implemented data models and persistence using MongoDB and PostgreSQL',
      'Integrated frontend and backend APIs, authentication, authorization, and admin features',
      'Delivered full-stack features for member calendars, activity history, schedules, and member management',
    ],
    color: '#7662a7',
    ink: '#ffffff',
    cover: asset('projects/gdg-cover.png'),
    flow: ['React / Vite', 'TypeScript', 'FastAPI', 'MongoDB / PostgreSQL'],
  },
]

const stackGroups = [
  {
    title: 'Backend',
    items: ['Python', 'TypeScript', 'FastAPI', 'NestJS', 'REST API', 'WebSocket', 'gRPC'],
  },
  {
    title: 'Cloud & Infra',
    items: ['AWS', 'GCP', 'Terraform', 'Docker Compose', 'GitLab CI/CD', 'Cloud Functions'],
  },
  {
    title: 'Data & Messaging',
    items: ['Firestore', 'AWS RDS', 'AWS DMS', 'Redis', 'Celery', 'RabbitMQ', 'Async I/O'],
  },
  {
    title: 'AI Service Engineering',
    items: [
      'LLM API Integration',
      'AI Chat Service',
      'Agentic AI',
      'AI Service Orchestration',
      'Multimodal I/O',
      'Image Generation Pipeline',
      'Speech-to-Text Pipeline',
      'Async AI Workloads',
    ],
  },
]

const pageCopy = {
  ko: {
    homeLabel: '이정재 포트폴리오 홈',
    navLabel: '주요 메뉴',
    heroLead: '기술을 제품으로,',
    heroEmphasis: '문제를 시스템으로.',
    heroBody:
      'AI 서비스 연동과 비동기 작업 처리, 실시간 통신, 클라우드 인프라 자동화를 아우르며 제품 요구사항을 운영 가능한 시스템으로 구현해 온 백엔드 엔지니어 이정재입니다.',
    selectedProjects: 'Selected projects',
    profileTitle: '비즈니스 요구를\n운영 가능한 시스템으로 구현합니다.',
    profileBody:
      '생성형 AI SaaS와 Agentic AI 플랫폼의 백엔드, Redis·Celery 기반 비동기 처리, WebSocket·gRPC 실시간 파이프라인, Terraform 기반 클라우드 인프라를 개발했습니다. 기능의 전체 흐름을 설계하고 시스템 간 인터페이스를 명확히 정의해, 검증 단계의 기술을 실제 사용자가 이용하는 서비스로 완성하는 데 강점이 있습니다.',
    ncDetails: [
      'VAETKI Commerce 배너 생성 기능 전체 백엔드 및 AI 서비스 연동',
      'Agentic AI 국가 R&D 프로젝트 PoC 및 플랫폼 개발',
    ],
    lgRole: '클라우드 아키텍처 인턴',
    lgDetails: [
      'Terraform 기반 Dev/Test/Staging/Prod 멀티 환경 IaC 구축',
      'AWS DMS 기반 온프레미스 → RDS 실시간 마이그레이션 PoC',
      '고가용성·DR 구성 및 보안·관측 시스템 강화',
    ],
    projectsHelp: '프로젝트를 선택하면 시스템 흐름, 기여 내용과 기술 스택을 확인할 수 있습니다.',
    companyDescription: '실제 사용자에게 제공되는 생성형 AI SaaS와 Agentic AI 플랫폼을 개발했습니다.',
    universityDescription:
      '학교와 개발자 커뮤니티에서 실시간 AI, 비동기 처리와 웹 플랫폼 프로젝트를 수행했습니다.',
    flowLabel: '시스템 처리 흐름',
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
    backToTop: 'Back to top ↑',
  },
  en: {
    homeLabel: 'Lee Jeongjae portfolio home',
    navLabel: 'Primary navigation',
    heroLead: 'Technology into products,',
    heroEmphasis: 'problems into systems.',
    heroBody:
      'I am Lee Jeongjae, a backend engineer who turns product requirements into production-ready systems across AI service integration, asynchronous workloads, real-time communication, and cloud infrastructure automation.',
    selectedProjects: 'Selected projects',
    profileTitle: 'I turn business requirements\ninto production-ready systems.',
    profileBody:
      'I have built backends for generative AI SaaS and Agentic AI platforms, Redis and Celery-based asynchronous processing, WebSocket and gRPC real-time pipelines, and Terraform-based cloud infrastructure. My strength is owning end-to-end flows, defining clear interfaces between systems, and turning validated technology into services used by real customers.',
    ncDetails: [
      'Owned the complete backend and AI service integration for VAETKI Commerce banner generation',
      'Developed PoCs and platform capabilities for a national Agentic AI R&D program',
    ],
    lgRole: 'Cloud Architecture Intern',
    lgDetails: [
      'Automated Dev, Test, Staging, and Prod infrastructure with Terraform',
      'Built an AWS DMS PoC for real-time on-premises to RDS migration',
      'Strengthened high availability, disaster recovery, security, and observability',
    ],
    projectsHelp: 'Select a project to explore its system flow, contributions, and technology stack.',
    companyDescription: 'Built a generative AI SaaS product and an Agentic AI platform used in company projects.',
    universityDescription:
      'Developed real-time AI, asynchronous processing, and full-stack web projects at university and in the developer community.',
    flowLabel: 'System processing flow',
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
              <span>{project.id === 'vaetki' ? 'AI COMMERCE' : 'AGENTIC AI'}</span>
              <span>{project.flow?.join('  →  ')}</span>
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

        {project.flow && (
          <div className="flow" aria-label={t.flowLabel}>
            {project.flow.map((step, index) => (
              <span key={step}>
                <b>{step}</b>
                {index < project.flow!.length - 1 && <i aria-hidden="true">→</i>}
              </span>
            ))}
          </div>
        )}

        <div className="project-detail-body">
          <div>
            <span className="detail-label">Contribution</span>
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
            {project.href && (
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                Live service <Arrow />
              </a>
            )}
          </div>
        </div>

        {project.architecture && (
          <figure className="architecture-figure">
            <img
              src={project.architecture}
              alt={
                locale === 'ko'
                  ? `${project.title} 시스템 아키텍처 자료`
                  : `${project.title} architecture overview`
              }
            />
            <figcaption>{project.title} · Architecture overview</figcaption>
          </figure>
        )}
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
      projects: projects.slice(0, 2),
    },
    {
      label: 'University & community projects',
      title: 'GDGoC Korea University',
      description: t.universityDescription,
      projects: projects.slice(2),
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
            <span>Backend Engineer</span>
            <span>Seoul · 2026</span>
          </div>
          <h1 id="hero-title">
            {t.heroLead}
            <br />
            <em>{t.heroEmphasis}</em>
          </h1>
          <div className="hero-bottom">
            <p>{t.heroBody}</p>
            <a href="#projects">
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
          <div className="timeline">
            <article>
              <div className="timeline-date">2026.02 — Present</div>
              <div className="timeline-company">
                <span>NC AI</span>
                <h3>AI Engineer / Backend Engineer</h3>
                <p>Agent Tech Center · Agent Platform Team</p>
              </div>
              <div className="timeline-detail">
                {t.ncDetails.map((detail) => <p key={detail}>{detail}</p>)}
                <div className="mini-tags">
                  <span>Backend</span>
                  <span>Redis · Celery</span>
                  <span>AI Service Engineering</span>
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
        <span>© 2026 Lee Jeongjae</span>
        <span>Backend Engineer · Seoul</span>
        <a href="#top">{t.backToTop}</a>
      </footer>
    </>
  )
}

export default App
