export type Project = {
  id: string
  category: 'company' | 'community'
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
  metric?: string
  award?: string
  href?: string
  blogPost?: string
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const projectsKo: Project[] = [
  {
    id: 'agp-note',
    category: 'company',
    index: '01',
    title: 'AGP Note',
    label: 'NC AI · Team AX Transformation',
    period: '2026 · 이전 수행',
    role: '팀 업무 AX 전환 · AI 앱 개발',
    summary: '회의 기록을 요약과 후속 업무로 연결하는 AI 데스크톱 앱을 개발해 팀 업무의 AX 전환을 지원했습니다.',
    tech: ['Tauri', 'Svelte', 'Rust', 'MCP'],
    contributions: [
      '회의 전사·검토·요약부터 업무 도구 게시까지 이어지는 사용자 흐름 개발',
      '데스크톱 앱과 MCP 연동, 팀에서 사용하기 위한 배포·업데이트 구현',
    ],
    color: '#e6edf8',
    ink: '#101c35',
    metric: '회의 기록을 팀의 다음 업무로',
    blogPost: 'agp-note-workflow',
  },
  {
    id: 'vaetki',
    category: 'company',
    index: '02',
    title: 'VAETKI Commerce',
    label: 'NC AI · Generative AI SaaS',
    period: '2026 · 이전 수행',
    role: '배너 기능 백엔드 개발',
    summary: '상품 이미지와 대화형 요청으로 마케팅 배너를 생성·편집하는 기능의 백엔드를 개발했습니다.',
    tech: ['FastAPI', 'MongoDB', 'Redis', 'Celery'],
    contributions: [
      '배너 생성·편집 API와 AI 서비스 연동을 포함한 기능 전체 백엔드 개발',
      '비동기 작업과 결과 전달, DEV·RC 배포 자동화 구현',
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: '생성형 AI를 커머스 기능으로',
    href: 'https://commerce.vaetki.ai/ko',
    blogPost: 'vaetki-banner-backend',
  },
  {
    id: 'dainos',
    category: 'company',
    index: '03',
    title: 'Dainos',
    label: 'NC AI · Agentic AI Platform',
    period: '2026 · 이전 수행',
    role: '에이전틱 AI 개발 · 제품 통합',
    summary: '메일·문서를 업무와 지식으로 연결하는 에이전틱 AI 플랫폼의 실행 기반과 제품 기능을 개발했습니다.',
    tech: ['Pydantic AI', 'FastAPI', 'React', 'PostgreSQL'],
    contributions: [
      '에이전트 실행과 사용자 승인 흐름, 세션 관리 기능 개발',
      '웹 콘솔·BFF·지식 서비스를 연결해 업무 탐색과 근거 기반 질문 기능 구현',
    ],
    color: '#6c24df',
    ink: '#ffffff',
    metric: '에이전트 실행에서 업무 제품까지',
    blogPost: 'dainos-agentic-platform',
  },
  {
    id: 'rendi',
    category: 'community',
    index: '04',
    title: 'NE:XT Rendi',
    label: 'GDGoC KU · Real-time AI Voice',
    period: '2025.03 — 2025.05',
    role: 'Backend Developer',
    summary: '사용자의 음성을 텍스트로 변환하고 LLM이 실시간 대화 피드백을 제공하는 AI 소개팅 코칭 서비스입니다.',
    tech: ['FastAPI', 'WebSocket', 'gRPC', 'GPT API'],
    contributions: [
      '음성 입력부터 AI 대화 피드백까지 실시간 백엔드 흐름 개발',
      'AI·음성 서비스 연동과 비동기 처리 구조 설계',
    ],
    color: '#86f5cf',
    ink: '#071a18',
    cover: asset('projects/rendi-cover.png'),
    award: '금상 · NE:XT CONTEST',
  },
  {
    id: 'tiger',
    category: 'community',
    index: '05',
    title: '호랑이사진관',
    label: 'GDGoC KU · AI Profile Generator',
    period: '2024.03 — 2024.09',
    role: 'Backend & Frontend Developer',
    summary: 'Stable Diffusion을 기반으로 사용자의 사진을 AI 프로필 이미지로 변환하는 서비스입니다.',
    tech: ['NestJS', 'Next.js', 'RabbitMQ', 'Firestore'],
    contributions: [
      'AI 프로필 생성의 백엔드와 비동기 이미지 처리 개발',
      '프론트엔드 연동, 인증과 배포 참여',
    ],
    color: '#e01823',
    ink: '#ffffff',
    cover: asset('projects/tiger-cover.png'),
    metric: '약 1,000명 사용자',
  },
  {
    id: 'gdg-website',
    category: 'community',
    index: '06',
    title: 'GDG KU Website',
    label: 'GDGoC KU · Full-stack Community Platform',
    period: 'University Project',
    role: 'Full-stack Developer',
    summary: '멤버 활동과 일정, 운영진 관리 기능을 하나의 공간에 모은 GDG KU 커뮤니티 웹사이트입니다.',
    tech: ['React', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    contributions: [
      '멤버 활동·일정과 운영진 관리 기능의 풀스택 개발',
      '웹 화면과 API, 인증·권한 및 데이터 관리 구현',
    ],
    color: '#7662a7',
    ink: '#ffffff',
    cover: asset('projects/gdg-cover.png'),
  },
]

export const projectsEn: Project[] = [
  {
    id: 'agp-note',
    category: 'company',
    index: '01',
    title: 'AGP Note',
    label: 'NC AI · Team AX Transformation',
    period: '2026 · Past work',
    role: 'Team Workflow Transformation · AI App Development',
    summary: 'Built an AI desktop app that connects meeting records with summaries and follow-up work, supporting the team’s workflow transformation.',
    tech: ['Tauri', 'Svelte', 'Rust', 'MCP'],
    contributions: [
      'Developed the workflow from transcription and review to summaries and publishing',
      'Built the desktop app, MCP integrations, and installation and updates for team use',
    ],
    color: '#e6edf8',
    ink: '#101c35',
    metric: 'From meeting records to follow-up work',
    blogPost: 'agp-note-workflow',
  },
  {
    id: 'vaetki',
    category: 'company',
    index: '02',
    title: 'VAETKI Commerce',
    label: 'NC AI · Generative AI SaaS',
    period: '2026 · Past work',
    role: 'Banner Feature Backend Development',
    summary: 'Developed the backend for generating and editing marketing banners from product images and conversational requests.',
    tech: ['FastAPI', 'MongoDB', 'Redis', 'Celery'],
    contributions: [
      'Developed the complete banner-feature backend, including generation and editing APIs and AI integrations',
      'Implemented asynchronous processing, result delivery, and DEV/RC deployment automation',
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: 'Generative AI for commerce',
    href: 'https://commerce.vaetki.ai/ko',
    blogPost: 'vaetki-banner-backend',
  },
  {
    id: 'dainos',
    category: 'company',
    index: '03',
    title: 'Dainos',
    label: 'NC AI · Agentic AI Platform',
    period: '2026 · Past work',
    role: 'Agentic AI Development · Product Integration',
    summary: 'Developed the execution foundation and product integrations for an agentic AI platform connecting mail and documents with work and knowledge.',
    tech: ['Pydantic AI', 'FastAPI', 'React', 'PostgreSQL'],
    contributions: [
      'Developed agent execution, user approval flows, and session management',
      'Connected the web console, BFF, and knowledge services for work exploration and grounded Q&A',
    ],
    color: '#6c24df',
    ink: '#ffffff',
    metric: 'From agent execution to a work platform',
    blogPost: 'dainos-agentic-platform',
  },
  {
    id: 'rendi',
    category: 'community',
    index: '04',
    title: 'NE:XT Rendi',
    label: 'GDGoC KU · Real-time AI Voice',
    period: '2025.03 — 2025.05',
    role: 'Backend Developer',
    summary: 'A real-time AI dating coach that converts live speech to text and delivers LLM-powered conversational feedback.',
    tech: ['FastAPI', 'WebSocket', 'gRPC', 'GPT API'],
    contributions: [
      'Developed the real-time backend from voice input to AI conversation feedback',
      'Integrated speech and AI services with asynchronous processing',
    ],
    color: '#86f5cf',
    ink: '#071a18',
    cover: asset('projects/rendi-cover.png'),
    award: 'Gold Award · NE:XT CONTEST',
  },
  {
    id: 'tiger',
    category: 'community',
    index: '05',
    title: 'Tiger Photo Studio',
    label: 'GDGoC KU · AI Profile Generator',
    period: '2024.03 — 2024.09',
    role: 'Backend & Frontend Developer',
    summary: 'An AI profile image service that transforms user photos into custom portraits with Stable Diffusion.',
    tech: ['NestJS', 'Next.js', 'RabbitMQ', 'Firestore'],
    contributions: [
      'Developed the AI profile backend and asynchronous image processing',
      'Contributed to frontend integration, authentication, and deployment',
    ],
    color: '#e01823',
    ink: '#ffffff',
    cover: asset('projects/tiger-cover.png'),
    metric: 'Approximately 1,000 users',
  },
  {
    id: 'gdg-website',
    category: 'community',
    index: '06',
    title: 'GDG KU Website',
    label: 'GDGoC KU · Full-stack Community Platform',
    period: 'University Project',
    role: 'Full-stack Developer',
    summary: 'A community platform that centralizes member activities, calendars, and administrative workflows for GDG KU.',
    tech: ['React', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    contributions: [
      'Built member activities, schedules, and administration as a full-stack platform',
      'Implemented web-to-API integration, authentication, permissions, and data management',
    ],
    color: '#7662a7',
    ink: '#ffffff',
    cover: asset('projects/gdg-cover.png'),
  },
]
