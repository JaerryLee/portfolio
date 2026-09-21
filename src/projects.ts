export type Project = {
  id: string
  category: 'company' | 'community'
  index: string
  title: string
  label: string
  period: string
  role: string
  summary: string
  challenge?: string
  outcome?: string
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

export const projectsKo: Project[] = [
  {
    id: 'agp-note',
    category: 'company',
    index: '01',
    title: 'AGP Note',
    label: 'NC AI · Team AX Transformation',
    period: '2026 · 이전 수행',
    role: '팀 업무 AX 전환 · AI 데스크톱 앱 개발',
    summary: '팀의 회의 기록과 후속 업무를 연결하기 위해 녹음·전사·화자 검토·요약·게시를 하나의 데스크톱 앱으로 구현했습니다.',
    challenge: '회의 음성을 기록으로 정리하고 문서와 할 일로 옮기는 과정을 연결하면서, 원본과 사용자가 교정한 내용을 보존해야 했습니다.',
    outcome: '전사 검토부터 회의록·후속 작업 게시까지 이어지는 팀 업무 흐름을 앱과 MCP 도구로 제공했습니다.',
    tech: [
      'Tauri',
      'Svelte',
      'TypeScript',
      'Rust',
      'SQLite',
      'Speech-to-Text',
      'MCP'
    ],
    contributions: [
      'Tauri·Svelte·Rust·SQLite 기반 데스크톱 앱과 프로젝트·회의 기록 관리 기능 개발',
      '로컬 음성 모델과 API 전사를 연동하고, 화자 재분석 시 기존 전사·교정본을 보존하는 검토 흐름 구현',
      '전사 근거를 연결한 회의 요약과 Confluence·Jira 게시 기능 개발',
      'MCP 기반 녹음 가져오기·전사 실행·요약 저장·게시 도구 및 프로젝트별 접근 권한 구현',
      'Windows 설치·자동 업데이트와 중단된 업데이트의 복구 흐름 구현'
    ],
    color: '#e6edf8',
    ink: '#101c35',
    metric: '회의 기록 → 요약 → 후속 업무',
    flow: [
      'Record',
      'Transcribe',
      'Review',
      'Summarize',
      'Publish'
    ]
  },
  {
    id: 'vaetki',
    category: 'company',
    index: '02',
    title: 'VAETKI Commerce',
    label: 'NC AI · Generative AI SaaS',
    period: '2026 · 이전 수행',
    role: '배너 생성 백엔드 · AI 서비스 연동',
    summary: '상품 이미지와 대화형 요청으로 마케팅 배너를 생성·편집하는 기능의 전체 백엔드와 AI 서비스 연동을 개발했습니다.',
    challenge: '오래 걸리는 AI 생성 작업과 편집 요청을 처리하면서 작업 상태, 크레딧 처리, 이미지 결과의 일관성을 유지해야 했습니다.',
    outcome: '배너 생성·리사이즈·대화형 편집의 API, 비동기 처리, 결과 알림과 DEV·RC 배포 흐름을 구현했습니다.',
    tech: [
      'FastAPI',
      'MongoDB',
      'Redis',
      'Celery',
      'Socket.IO',
      'S3',
      'CI/CD'
    ],
    contributions: [
      '배너 생성·조회·리사이즈·편집 기능의 전체 백엔드 API와 비즈니스 로직 설계·개발',
      '상품 이미지 업로드, AI 이미지 생성 및 대화형 텍스트·이미지 수정 서비스 연동',
      'Redis·Celery 기반 비동기 작업, 작업 상태 관리와 실시간 결과 이벤트 구현',
      '크레딧 사전 예약·확정·실패 시 취소 처리와 AI Chat 작업 잠금·편집 충돌 제어 구현',
      '부분 실패 시 기존 이미지·썸네일 보존 및 작업 실패·복구 흐름 개선',
      'DEV·RC 환경의 CI/CD와 배포 자동화 구축; Live 배포는 별도 운영 팀 담당'
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: '배너 기능 전체 백엔드 · DEV/RC CI/CD',
    href: 'https://commerce.vaetki.ai/ko',
    flow: [
      'Upload / Chat',
      'Banner API',
      'Celery / Redis',
      'AI Services',
      'Result / Events'
    ]
  },
  {
    id: 'dainos',
    category: 'company',
    index: '03',
    title: 'Dainos',
    label: 'NC AI · Agentic AI Platform',
    period: '2026 · 이전 수행',
    role: '에이전틱 AI 개발 · 플랫폼 통합',
    summary: '메일·문서를 업무와 지식으로 연결하는 플랫폼에서 에이전트 실행 기반, 웹 콘솔, BFF와 지식 서비스의 통합 기능을 개발했습니다.',
    challenge: '에이전트 실행과 지식 처리, 사용자 권한, 여러 서비스의 API를 연결하고 긴 작업의 진행·실패·완료 상태를 사용자에게 일관되게 전달해야 했습니다.',
    outcome: '에이전트 세션·승인 실행 기반과 메일 선택부터 지식화·업무 탐색·근거 기반 질문까지의 제품 흐름을 구현했습니다.',
    tech: [
      'Pydantic AI',
      'FastAPI',
      'React',
      'PostgreSQL',
      'MongoDB',
      'NATS',
      'SSE',
      'OpenAPI'
    ],
    contributions: [
      '에이전트 코어와 오케스트레이터의 책임을 분리하고 실행 세션·이벤트 및 SSE 응답 전달 기능 개발',
      '승인이 필요한 도구의 실행 중단·재개와 사용자별 세션·지식·메모리 범위 격리 구현',
      'React 웹 콘솔과 FastAPI BFF를 개발해 메일·업무·문서·근거 기반 채팅 화면과 API 연결',
      'KB Service의 제품 API·권한 처리 및 지식화 작업의 영속 상태·멱등 재시도·중단 후 재개 구현',
      'FE–BFF–KB Service–Core 사이의 OpenAPI·응답 모델 정합성과 개발 환경 배포 연동 관리'
    ],
    color: '#6c24df',
    ink: '#ffffff',
    metric: '에이전트 실행 · 지식 서비스 · 제품 통합',
    flow: [
      'Mail / Documents',
      'Knowledge Jobs',
      'Workspace',
      'Grounded Answers'
    ]
  },
  {
    id: 'rendi',
    category: 'community',
    index: '04',
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
    category: 'community',
    index: '05',
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
    category: 'community',
    index: '06',
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

export const projectsEn: Project[] = [
  {
    id: 'agp-note',
    category: 'company',
    index: '01',
    title: 'AGP Note',
    label: 'NC AI · Team AX Transformation',
    period: '2026 · Past work',
    role: 'Team Workflow Transformation · AI Desktop Development',
    summary: 'Built a desktop app that connects recording, transcription, speaker review, meeting summaries, and publishing to support the team’s AI-enabled workflows.',
    challenge: 'Connect meeting audio to usable records and follow-up tasks while preserving source recordings and user corrections.',
    outcome: 'Delivered an app and MCP tools connecting transcript review with meeting records and follow-up publishing.',
    tech: [
      'Tauri',
      'Svelte',
      'TypeScript',
      'Rust',
      'SQLite',
      'Speech-to-Text',
      'MCP'
    ],
    contributions: [
      'Developed the Tauri, Svelte, Rust, and SQLite desktop app with project and meeting record management',
      'Integrated local speech models and API transcription, preserving transcripts and corrections during speaker reanalysis',
      'Built evidence-linked meeting summaries and Confluence and Jira publishing',
      'Implemented MCP tools for recording import, transcription, summary storage, and publishing with project access controls',
      'Built Windows installation, automatic updates, and interrupted-update recovery'
    ],
    color: '#e6edf8',
    ink: '#101c35',
    metric: 'Meeting records → summaries → follow-up work',
    flow: [
      'Record',
      'Transcribe',
      'Review',
      'Summarize',
      'Publish'
    ]
  },
  {
    id: 'vaetki',
    category: 'company',
    index: '02',
    title: 'VAETKI Commerce',
    label: 'NC AI · Generative AI SaaS',
    period: '2026 · Past work',
    role: 'Banner Generation Backend · AI Service Integration',
    summary: 'Developed the complete backend and AI integrations for generating and editing marketing banners from product images and conversational requests.',
    challenge: 'Keep task state, credit handling, and image results consistent across long-running AI generation and editing requests.',
    outcome: 'Delivered banner generation, resizing, and conversational editing APIs with asynchronous processing, result events, and DEV/RC deployment automation.',
    tech: [
      'FastAPI',
      'MongoDB',
      'Redis',
      'Celery',
      'Socket.IO',
      'S3',
      'CI/CD'
    ],
    contributions: [
      'Designed and implemented the complete backend API and business logic for banner generation, retrieval, resizing, and editing',
      'Integrated product image uploads, AI image generation, and conversational text and image editing',
      'Built Redis and Celery task processing, persisted task state, and real-time result events',
      'Implemented credit reservation, commit and rollback handling, AI Chat task locks, and edit concurrency controls',
      'Improved partial-failure handling to preserve existing images and thumbnails and support task recovery',
      'Built CI/CD and deployment automation for DEV and RC; a separate operations team owns Live deployment'
    ],
    color: '#1772ff',
    ink: '#ffffff',
    metric: 'Complete banner backend · DEV/RC CI/CD',
    href: 'https://commerce.vaetki.ai/ko',
    flow: [
      'Upload / Chat',
      'Banner API',
      'Celery / Redis',
      'AI Services',
      'Result / Events'
    ]
  },
  {
    id: 'dainos',
    category: 'company',
    index: '03',
    title: 'Dainos',
    label: 'NC AI · Agentic AI Platform',
    period: '2026 · Past work',
    role: 'Agentic AI Development · Platform Integration',
    summary: 'Developed agent execution capabilities, a web console, a BFF, and knowledge-service integrations for a platform connecting mail and documents to work and knowledge.',
    challenge: 'Connect agent execution, knowledge processing, access controls, and service APIs while consistently exposing progress, failures, and final outcomes.',
    outcome: 'Built agent session and approval capabilities alongside product flows from mail selection to knowledge ingestion, work exploration, and grounded questions.',
    tech: [
      'Pydantic AI',
      'FastAPI',
      'React',
      'PostgreSQL',
      'MongoDB',
      'NATS',
      'SSE',
      'OpenAPI'
    ],
    contributions: [
      'Separated agent-core and orchestrator responsibilities and built execution sessions, events, and SSE response delivery',
      'Implemented pause and resume for approval-required tools and isolated personal sessions, knowledge, and memory',
      'Developed the React console and FastAPI BFF connecting mail, work, documents, and grounded chat interfaces',
      'Built KB Service product APIs, authorization, durable ingestion state, idempotent retries, and interrupted-work recovery',
      'Maintained OpenAPI and response-model compatibility across FE, BFF, KB Service, and Core, plus development deployment integration'
    ],
    color: '#6c24df',
    ink: '#ffffff',
    metric: 'Agent execution · knowledge services · product integration',
    flow: [
      'Mail / Documents',
      'Knowledge Jobs',
      'Workspace',
      'Grounded Answers'
    ]
  },
  {
    id: 'rendi',
    category: 'community',
    index: '04',
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
    category: 'community',
    index: '05',
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
    category: 'community',
    index: '06',
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

