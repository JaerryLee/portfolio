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

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const projects: Project[] = [
  {
    id: 'vaetki',
    index: '01',
    title: 'VAETKI Commerce',
    label: 'NC AI · AI Banner Generation SaaS',
    period: '2026 — Present',
    role: 'Banner Generation Backend · AI Integration',
    summary:
      '사용자가 업로드한 상품 이미지와 대화형 요청을 바탕으로 다양한 규격의 마케팅 배너를 생성하는 AI SaaS 기능입니다.',
    tech: ['Backend API', 'Async Pipeline', 'AI Chat Service', 'Image I/O', 'Generative AI'],
    contributions: [
      '배너 생성 기능의 전체 백엔드 API와 비즈니스 로직 설계·개발',
      '사용자가 업로드한 이미지를 AI 생성 서비스에 전달하고, 생성 응답을 서비스 결과로 반환하는 연동 흐름 구현',
      'AI Chat Service를 연동하여 대화형 배너 생성·수정 요청을 처리하는 백엔드 기능 개발',
      '처리 시간이 긴 AI 생성 작업을 위한 비동기 파이프라인과 작업 결과 처리 흐름 구현',
      '프론트엔드, 백엔드, AI 서비스 사이의 요청·응답 인터페이스 정의 및 연동',
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: '배너 생성 기능 전체 백엔드 개발',
    href: 'https://commerce.vaetki.ai/ko',
    flow: ['Upload / Chat request', 'Banner Backend', 'Async Pipeline', 'AI Services', 'Generated Banner'],
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
    label: 'GDGoC KU · Community Platform',
    period: 'University Project',
    role: 'Frontend Developer',
    summary:
      '멤버 활동과 일정, 운영진 관리 기능을 하나의 공간에 모은 GDG KU 커뮤니티 웹사이트입니다.',
    tech: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Emotion', 'OAuth2'],
    contributions: [
      'Next.js와 TypeScript 기반 웹 애플리케이션 개발',
      'Redux Toolkit을 활용한 클라이언트 상태 관리',
      'OAuth2 기반 Google 로그인과 역할별 권한 흐름 구현',
      '멤버 캘린더, 활동 조회, 관리자용 일정 및 멤버 관리 기능 개발',
    ],
    color: '#7662a7',
    ink: '#ffffff',
    cover: asset('projects/gdg-cover.png'),
    architecture: asset('projects/gdg-architecture.png'),
    flow: ['Member / Admin', 'OAuth2', 'GDG KU Website', 'Activity management'],
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
    items: ['Firestore', 'AWS RDS', 'AWS DMS', 'RabbitMQ', 'Async I/O'],
  },
  {
    title: 'AI Integration',
    items: ['GPT API', 'Stable Diffusion', 'STT', 'Agentic AI', 'AI Service Pipeline'],
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)
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
          <div className="flow" aria-label="시스템 처리 흐름">
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
            <img src={project.architecture} alt={`${project.title} 시스템 아키텍처 자료`} />
            <figcaption>{project.title} · Architecture overview</figcaption>
          </figure>
        )}
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="이정재 포트폴리오 홈">
          LJJ<span>/</span>PORTFOLIO
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#activities">Activities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span>Backend Engineer</span>
            <span>Seoul · 2026</span>
          </div>
          <h1 id="hero-title">
            기술을 제품으로,
            <br />
            문제를 <em>시스템으로.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              생성형 AI SaaS, Agentic AI 플랫폼, 실시간 음성 파이프라인과 클라우드
              인프라를 경험한 <strong>백엔드 엔지니어 이정재</strong>입니다.
            </p>
            <a href="#projects">
              Selected projects <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-orbit one" aria-hidden="true" />
          <div className="hero-orbit two" aria-hidden="true" />
        </section>

        <section className="intro-section section" aria-labelledby="intro-title">
          <div className="section-index">01 / PROFILE</div>
          <div className="intro-copy">
            <h2 id="intro-title">
              빠르게 검증하고,
              <br />
              안정적으로 연결합니다.
            </h2>
            <p>
              새로운 기술을 PoC로 확인하는 것에서 멈추지 않고 실제 사용자가 이용할 수
              있는 서비스와 플랫폼으로 발전시키는 과정에 집중합니다. 백엔드, AI 모델,
              클라우드 인프라 사이의 경계를 이해하고 명확한 인터페이스로 연결합니다.
            </p>
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
                <p>VAETKI Commerce 배너 생성 기능 전체 백엔드 및 AI 서비스 연동</p>
                <p>Agentic AI 국가 R&D 프로젝트 PoC 및 플랫폼 개발</p>
                <div className="mini-tags">
                  <span>Backend</span>
                  <span>AI Platform</span>
                  <span>PoC → Product</span>
                </div>
              </div>
            </article>

            <article>
              <div className="timeline-date">2023.06 — 2023.08</div>
              <div className="timeline-company">
                <span>LG CNS</span>
                <h3>Cloud Architect Intern</h3>
                <p>클라우드 아키텍처 인턴</p>
              </div>
              <div className="timeline-detail">
                <p>Terraform 기반 Dev/Test/Staging/Prod 멀티 환경 IaC 구축</p>
                <p>AWS DMS 기반 온프레미스 → RDS 실시간 마이그레이션 PoC</p>
                <p>고가용성·DR 구성 및 보안·관측 시스템 강화</p>
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
            <p>프로젝트를 선택하면 시스템 흐름, 기여 내용과 기술 스택을 확인할 수 있습니다.</p>
          </div>
          <div className="project-stack">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
              <strong>Backend & AI Core Member · 운영진</strong>
              <ul>
                <li>AI 세미나 및 실습 프로젝트 기획·운영</li>
                <li>AWS·GCP 기반 클라우드 인프라 실습 워크숍 기획·운영</li>
                <li>학회 핵심 프로젝트 주도 개발 및 기술 리드 참여</li>
              </ul>
            </article>
            <img
              className="activity-image"
              src={asset('projects/seminar.png')}
              alt="GDGoC 클라우드 및 AI 세미나 자료"
            />
            <article className="activity-award">
              <span>2025.02 · 80 hours</span>
              <h3>삼성SDS 알고리즘 특강</h3>
              <p>자료구조와 알고리즘 문제 해결 역량을 집중적으로 훈련했습니다.</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <span>LET’S BUILD SOMETHING RELIABLE.</span>
          <h2 id="contact-title">함께 더 나은<br />시스템을 만들어요.</h2>
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
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
