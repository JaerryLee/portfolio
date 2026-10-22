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
  cardCover?: string
  architectureImage?: string
  cover?: string
  metric?: string
  award?: string
  href?: string
  blogPost?: string
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const projectsKo: Project[] = [
  {
  "id": "dainos-finder",
  "category": "company",
  "index": "07",
  "title": "Dainos Finder",
  "label": "NC AI · Contract Review Workflow",
  "period": "2026.10 · 개발 중",
  "role": "팀 개발 · 계약 검토 웹·API",
  "summary": "독소조항 탐지에서 출발해 문서 간 충돌 확인부터 대응안 검토·승인까지 연결하는 계약 검토 서비스를 개발하고 있습니다.",
  "tech": [
    "React · TypeScript",
    "FastAPI",
    "PostgreSQL",
    "HTTP · SSE",
    "vLLM · Team GPU Serving",
    "LiteLLM"
  ],
  "contributions": [
    "계약 검토 웹·API, 근거·단계 검증과 초안·승인 이력 보존",
    "행 잠금·입력 버전 검사, SSE 취소·오류 처리, 번역·로그인 구현"
  ],
  "color": "#f2e9db",
  "ink": "#493323",
  "metric": "위험 후보에서 검토·승인 이력까지"
},
  {
    id: 'agp-wiki',
    category: 'company',
    index: '00',
    title: 'Dainos Wiki · LLM Wiki',
    label: 'NC AI · Source-grounded Knowledge',
    period: '2026 · 개발 완료',
    role: '팀 개발 · 문서 수집·복구와 근거 검증',
    summary: '문서 원문을 보존하고 주제별 위키와 출처 기반 답변을 연결하는 Codex·Claude 설치형 도구를 팀과 개발했습니다.',
    tech: ['Python', 'SQLite', 'Claude · Codex Plugins', 'FTS5 · BM25'],
    contributions: [
      'LLM 분류 제안 검증, 복구 가능한 문서 정리와 작업 상태·로그 구현',
      '파일 지문 기반 인용 링크, 날짜 근거 검증과 Windows 파일 처리 경계 보완',
      'inbox·손상 큐의 보존·복구, 제한된 metadata 로그와 Linux·Windows 회귀 검증',
    ],
    color: '#e4f1ec',
    ink: '#103b2c',
    metric: '문서에서 검증 가능한 근거로',
  },
  {
    id: 'agp-note',
    category: 'company',
    index: '01',
    title: 'AGP Note',
    label: 'NC AI · Team AX Transformation',
    period: '2026 · 이전 수행',
    role: '사내 사이드 프로젝트 · 단독 개발',
    summary: '사내 사이드 프로젝트로 회의 전사·검토·요약과 후속 업무 게시를 연결하는 AI 데스크톱 앱을 단독 개발했습니다.',
    tech: ['Tauri', 'Svelte', 'Rust', 'MCP'],
    contributions: [
      '전사 근거와 회의 문맥을 연결한 요약, 게시 전 검토와 로컬 기록 보존 구현',
      'MCP 접근 권한, 외부 AI 전송 경계와 설치·업데이트 흐름 구현',
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
      'MongoDB 시안별 작업 잠금·버전 조건 갱신, 외부 크레딧 예약·확정·취소와 부분 실패 복구 구현',
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
    title: 'Agent Platform · PoCs',
    label: 'NC AI · Agentic AI Platform',
    period: '2026 · 이전 수행',
    role: 'Agent PoC 개발 · LLM Ops 통합',
    summary: '정부 과제의 목표지향 업무 에이전트 PoC를 개발·인계하고, 메일 검색·요약과 Pydantic AI 실행 기반 PoC 및 LLM Ops 통합에 기여했습니다.',
    tech: ['Pydantic AI', 'FastAPI', 'PostgreSQL · pgvector', 'OpenTelemetry'],
    contributions: [
      '에이전트 실행·승인·DBOS 세션 관리와 사용자별 접근 범위 격리 구현',
      '메일·문서를 업무와 근거 응답으로 연결하고 Agent 메모리·벡터 검색과 OTel 관측 통합',
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
    architectureImage: asset('projects/rendi-architecture.png'),
    cardCover: asset('projects/rendi-generated.png'),
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
    architectureImage: asset('projects/tiger-architecture.png'),
    cardCover: asset('projects/tiger-generated.png'),
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
  "id": "dainos-finder",
  "category": "company",
  "index": "07",
  "title": "Dainos Finder",
  "label": "NC AI · Contract Review Workflow",
  "period": "2026.10 · In development",
  "role": "Team contributor · Contract review web and API",
  "summary": "Developing a contract review service that extends risky-clause detection into document conflict resolution, response review and approval.",
  "tech": [
    "React · TypeScript",
    "FastAPI",
    "PostgreSQL",
    "HTTP · SSE",
    "vLLM · Team GPU Serving",
    "LiteLLM"
  ],
  "contributions": [
    "Contract review web / API, evidence and stage checks, drafts and approval history",
    "Row locks, input-version checks, SSE cancellation / errors, translation and login"
  ],
  "color": "#f2e9db",
  "ink": "#493323",
  "metric": "From risk candidates to review and approval history"
},
  {
    id: 'agp-wiki',
    category: 'company',
    index: '00',
    title: 'Dainos Wiki · LLM Wiki',
    label: 'NC AI · Source-grounded Knowledge',
    period: '2026 · Development complete',
    role: 'Team contributor · Ingestion, recovery, and evidence checks',
    summary: 'Co-developed a Codex / Claude document tool that preserves originals and connects topic-based knowledge with source-grounded answers.',
    tech: ['Python', 'SQLite', 'Claude · Codex Plugins', 'FTS5 · BM25'],
    contributions: [
      'Implemented validation of LLM classification proposals, recoverable ingestion, status, and metadata logs',
      'Added fingerprint-verified source links, date evidence checks, and Windows file handling safeguards',
      'Preserved and recovered inbox files and damaged queues; implemented limited metadata logs and Linux / Windows regression checks',
    ],
    color: '#e4f1ec',
    ink: '#103b2c',
    metric: 'From documents to verifiable evidence',
  },
  {
    id: 'agp-note',
    category: 'company',
    index: '01',
    title: 'AGP Note',
    label: 'NC AI · Team AX Transformation',
    period: '2026 · Past work',
    role: 'Internal side project · Sole developer',
    summary: 'Independently built an internal side project connecting transcription, review, summaries, and follow-up publishing.',
    tech: ['Tauri', 'Svelte', 'Rust', 'MCP'],
    contributions: [
      'Implemented source-linked summaries, meeting context, publishing review, and preservation of local records',
      'Built MCP permissions, external AI transfer boundaries, and installation and update workflows',
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
      'Implemented MongoDB per-variation task locks, version-conditional updates, external credit reservation/commit/rollback, and partial-failure recovery',
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
    title: 'Agent Platform · PoCs',
    label: 'NC AI · Agentic AI Platform',
    period: '2026 · Past work',
    role: 'Agent PoCs · LLM Ops Integration',
    summary: 'Developed and handed over a goal-oriented work agent PoC for a government project, and contributed to mail and Pydantic AI execution PoCs with LLM Ops integration.',
    tech: ['Pydantic AI', 'FastAPI', 'PostgreSQL · pgvector', 'OpenTelemetry'],
    contributions: [
      'Implemented agent execution, approval flows, DBOS sessions, and user-scoped access isolation',
      'Connected mail and documents to work and grounded answers, integrating agent memory, vector retrieval, and OTel observability',
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
    architectureImage: asset('projects/rendi-architecture.png'),
    cardCover: asset('projects/rendi-generated.png'),
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
    architectureImage: asset('projects/tiger-architecture.png'),
    cardCover: asset('projects/tiger-generated.png'),
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


export const seminarKo: Project = {
  id: 'seminars', category: 'community', index: '', title: '클라우드 · AI 세미나',
  label: 'GDGoC Korea University · 학습과 지식 공유',
  period: '개별 행사 날짜는 원본 자료에 미기재',
  role: 'Backend & AI Core Member · 세미나 및 워크숍 기획·운영',
  summary: '클라우드 인프라 실습과 AI 학습 세션을 기획·운영했습니다. 아래 주제는 보존된 세미나 자료를 기준으로 정리했습니다.',
  tech: ['AWS', 'GCP', 'Terraform', 'CI/CD', 'RNN / LSTM', 'Transformer'],
  contributions: [
    '기존 활동 기록에서 확인되는 역할: AI 세미나·실습 프로젝트 및 AWS·GCP 클라우드 인프라 워크숍 기획·운영.',
    '클라우드 서비스 자료에는 이정재 이름이 표기되어 있습니다. 자료 작성자 표기와 실제 발표 여부는 구분하며, 개별 세션 발표 여부는 별도 기록으로 확인되지 않았습니다.',
    'AI Week 자료에는 전병우·이정재 이름이 함께 표기되어 있습니다. 공동 자료 표기를 보존하며 모든 세션을 단독 발표했다고 설명하지 않습니다.',
  ],
  color: '#e5effa', ink: '#142b49', cardCover: asset('projects/seminar-generated.png'), cover: asset('projects/seminar.png'), href: asset('projects/seminar.png'),
}

export const seminarEn: Project = {
  ...seminarKo, title: 'Cloud & AI seminars', label: 'GDGoC Korea University · Learning and knowledge sharing',
  period: 'Individual event dates are not recorded in the source',
  role: 'Backend & AI Core Member · Seminar and workshop planning / operations',
  summary: 'Planned and operated cloud infrastructure workshops and AI learning sessions. Topics below are grounded in the preserved seminar materials.',
  contributions: [
    'Existing activity records confirm planning and operations for AI seminars, hands-on projects and AWS / GCP infrastructure workshops.',
    'The cloud material names Jungjae Lee. Authorship credit is distinguished from confirmed presentation; individual presenter records are unavailable.',
    'The AI Week material jointly names Byeongwoo Jeon and Jungjae Lee. Joint authorship is preserved without claiming sole presentation of every session.',
  ],
}
