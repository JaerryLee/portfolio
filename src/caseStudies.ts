type CaseStudy = {
  context: string
  sections: { title: string; body: string }[]
  outcome: string
}

// Expanded from company-experience.md, the preserved application documents and project source materials.
export const caseStudies: Record<string, { ko: CaseStudy; en: CaseStudy }> = {
  'agp-wiki': {
    ko: {
      context: '로컬 문서를 정리하고 검색한 원문을 근거로 질문에 답하는 지식 도구입니다. 목표지향 업무 에이전트 PoC를 개발·인계한 뒤 후속 프로젝트로 팀과 개발하고 있으며, 문서 수집의 복구 가능성과 응답에 연결되는 근거의 검증을 담당하고 있습니다.',
      sections: [
        { title: '분류 제안 검증과 중단 후 복구', body: 'LLM이 제안한 문서 분류를 검증하고 문서 정리 작업이 중단된 뒤에도 이어갈 수 있는 처리 흐름을 구현했습니다. 작업 상태와 제한된 metadata 로그를 남기고, 오류별로 다음에 수행할 행동을 연결해 처리 과정과 복구 경로를 확인할 수 있도록 했습니다.' },
        { title: '원문과 인용의 연결 확인', body: '인용 링크가 가리키는 파일의 지문을 확인하고, 인용문과 원문의 날짜·시각 근거를 다시 검사하도록 보완했습니다. 검색 결과가 존재하는 것과 실제 파일에서 답변의 근거를 확인할 수 있는 것을 구분해 다뤘습니다.' },
        { title: '어휘 검색과 플랫폼별 검증', body: 'SQLite FTS5·BM25로 검색 후보를 조회하고, 후보 원문을 읽은 host LLM이 응답을 작성하는 흐름을 연결했습니다. Windows 파일 처리 경계를 보완하고 Linux·Windows 회귀를 검증했습니다.' },
      ],
      outcome: '문서 정리·상태 확인·중단 후 복구와 인용 근거 확인을 연결하고 있습니다. 검색은 어휘 검색 기반이며, 실제 host의 일부 UI 흐름과 플랫폼별 확인은 진행 중입니다.',
    },
    en: {
      context: 'A local knowledge tool that organizes documents and answers questions using retrieved source material. Following the handover of a goal-oriented agent PoC, I contribute to the team’s follow-up project, focusing on recoverable ingestion and evidence verification.',
      sections: [
        { title: 'Classification validation and recovery', body: 'Implemented validation of LLM classification proposals and a document-processing workflow that can resume after interruption. Task states, limited metadata logs and error-specific next actions make progress and recovery paths inspectable.' },
        { title: 'Verifying source references', body: 'Added file-fingerprint checks for citation links and rechecks of quotations and date/time evidence. Retrieval of a candidate and verification of its supporting source are treated as separate steps.' },
        { title: 'Lexical retrieval and platform validation', body: 'Connected SQLite FTS5/BM25 candidate retrieval to host LLM answers grounded in the source documents. Addressed Windows file-handling boundaries and validated Linux and Windows regressions.' },
      ],
      outcome: 'Document organization, status inspection, recovery and citation checks are being integrated. Retrieval is lexical; some host UI flows and platform-specific checks remain in progress.',
    },
  },
  'agp-note': {
    ko: {
      context: '회의 정리 과정의 불편을 개선하기 위해 단독 개발한 사내 사이드 프로젝트입니다. Tauri·Svelte·Rust·SQLite 기반의 로컬 우선 데스크톱 앱에서 음성 전사, 검토, 요약과 후속 업무 게시를 연결했습니다.',
      sections: [
        { title: '음성 전사에서 근거 기반 요약까지', body: '로컬 STT와 화자 분리 모델로 발언자별 전사를 생성하고, OpenAI·Claude API와 호환되는 LLM을 연동해 요약하도록 구현했습니다. 전사 원문과 교정본을 보존하고, 요약의 근거가 되는 전사를 확인할 수 있는 흐름을 구성했습니다.' },
        { title: '게시 전 검토와 업무 도구 연결', body: '회의 문맥을 요약과 후속 업무에 연결하고, 사용자가 내용을 검토한 뒤 Confluence·Jira에 게시하도록 구현했습니다. MCP로 녹음 가져오기·전사·요약 저장·게시 기능을 연결하고 프로젝트별 접근 권한과 외부 AI 전송 경계를 구성했습니다.' },
        { title: '로컬 기록 보존과 앱 배포', body: 'SQLite에 회의 기록을 보존하는 앱과 Windows 설치·자동 업데이트 흐름을 구현했습니다. 업데이트가 중단됐을 때 복구할 수 있는 경로도 구성해 기록 관리와 앱 사용 흐름을 함께 다뤘습니다.' },
      ],
      outcome: '전사 원문 확인부터 검토·요약·업무 도구 게시까지 하나의 데스크톱 앱으로 연결했습니다. 로컬 기록을 유지하면서 사용자가 AI 요약의 근거를 검토하고 후속 업무로 이어갈 수 있도록 구성했습니다.',
    },
    en: {
      context: 'An internal side project I built independently to improve meeting documentation. The local-first desktop app uses Tauri, Svelte, Rust and SQLite to connect transcription, review, summaries and follow-up publishing.',
      sections: [
        { title: 'Transcription with traceable summaries', body: 'Integrated local STT and speaker diarization with LLM summarization compatible with OpenAI and Claude APIs. Preserved original and corrected transcripts so users can inspect the source behind a summary.' },
        { title: 'Review and publishing to work tools', body: 'Connected meeting context to summaries and follow-up work, with user review before publishing to Confluence or Jira. Exposed recording import, transcription, summary storage and publishing through MCP, with project-level permissions and external AI transfer boundaries.' },
        { title: 'Local records and app delivery', body: 'Implemented SQLite-backed meeting records, Windows installation and automatic updates. Added recovery paths for interrupted updates alongside the record-management workflow.' },
      ],
      outcome: 'Connected transcript inspection, review, summarization and publishing in one desktop app. Local records remain available while users review the evidence behind AI summaries and turn them into follow-up work.',
    },
  },
  vaetki: {
    ko: {
      context: '상품 이미지와 대화형 요청으로 마케팅 배너를 생성·조회·리사이즈·편집하는 기능의 백엔드를 개발했습니다. API부터 AI 연동, 비동기 실행, 결과 저장과 알림까지 담당했으며, 담당 범위는 Commerce 서비스 내 배너 기능입니다.',
      sections: [
        { title: '요청 접수와 AI 작업 실행 분리', body: 'FastAPI에서 요청을 접수하고 Redis·Celery 워커가 오래 걸리는 AI 호출과 결과 처리를 수행하도록 구성했습니다. 작업 ID를 기준으로 접수·실행·최종 결과를 추적하고, Socket.IO 이벤트로 처리 결과를 전달했습니다.' },
        { title: '동시 편집과 결과 덮어쓰기 제어', body: 'MongoDB 기반의 시안별 작업 잠금과 버전 조건 갱신으로 동일 시안의 동시 편집을 제어했습니다. 성공·예외 종료 경로에서 잠금을 정리하고, 유효한 새 결과가 저장됐을 때 참조를 갱신하도록 구현했습니다.' },
        { title: '크레딧 확정과 실패 상태 구분', body: '외부 크레딧 API의 사전 예약·확정·취소를 연결했습니다. 트랜잭션 ID와 확정 시작 여부를 기록하고, 확정 시작 전 실패에만 예약 취소를 시도했습니다. 확정 이후의 예외와 취소 실패는 별도로 남겨 후속 확인이 가능하도록 했습니다.' },
        { title: '부분 실패에서도 기존 결과 보존', body: '편집 결과와 후속 썸네일 처리를 구분해 일부 단계가 실패해도 저장된 시안과 유효한 기존 이미지 참조를 보존했습니다. 실패 이력과 재시도 경로를 제공하고 DEV·RC 배포 자동화를 구현했습니다.' },
      ],
      outcome: '배너 요청부터 비동기 실행과 결과 알림까지 연결하고, 동시 편집·부분 실패·크레딧 처리의 상태를 구분할 수 있도록 구현했습니다. Live 배포는 별도 운영 담당 범위였습니다.',
    },
    en: {
      context: 'Developed the backend for banner generation, retrieval, resizing and conversational editing from product images. My scope covered APIs, AI integration, asynchronous execution, result storage and notifications for the banner feature within Commerce.',
      sections: [
        { title: 'Separating requests from AI execution', body: 'FastAPI accepts requests while Redis/Celery workers handle long-running AI calls and result processing. Task IDs connect acceptance, execution and final results, with Socket.IO events delivering updates.' },
        { title: 'Controlling concurrent edits', body: 'Implemented MongoDB per-variation task locks and version-conditional updates to control concurrent editing. Locks are cleaned up on success and exception paths; references are updated when valid new results have been stored.' },
        { title: 'Distinguishing credit states', body: 'Integrated external credit reservation, commit and cancellation. Recorded transaction IDs and whether commit had started; cancellation was attempted only for failures before commit began. Later exceptions and failed cancellations were recorded separately for follow-up.' },
        { title: 'Preserving results through partial failure', body: 'Separated editing results from downstream thumbnail processing so a later failure preserves stored variations and valid existing image references. Added failure records, retry paths and DEV/RC deployment automation.' },
      ],
      outcome: 'Connected asynchronous execution to result notifications while distinguishing concurrent edits, partial failures and credit states. Live deployment was handled by a separate operations team.',
    },
  },
  dainos: {
    ko: {
      context: '메일·문서의 지식을 활용해 업무 아이템과 근거 기반 응답으로 연결하는 목표지향 업무 에이전트 PoC를 개발·인계했습니다. KB Service의 제품 API·권한·지식화 작업 처리와 제품 통합을 담당하고, 관련 에이전트 실행 기반 및 LLM Ops 통합에 기여했습니다.',
      sections: [
        { title: '지식화 작업의 상태와 재개 경로', body: 'KB Core의 지식 처리 기능을 제품에서 사용할 수 있도록 요청 접수·영속 상태·재시도·결과 조회를 연결했습니다. 작업·실행 상태와 적용 Journal을 보존하고 Lease·멱등 처리·Redrive로 중단과 메시지 재전달에 대응하는 경로를 구현했습니다.' },
        { title: 'API 계약과 사용자 화면의 상태 연결', body: 'FE·BFF·KB Service·Core의 OpenAPI와 응답 모델을 대조해 제품의 상태 표시와 API 계약을 맞췄습니다. 상태 Outbox로 저장 상태와 전달 이벤트를 연결하고, 마지막 이벤트가 누락되더라도 화면에서 최종 상태를 다시 확인할 수 있는 경로를 구현했습니다.' },
        { title: '에이전트 실행과 사용자별 접근 범위', body: '에이전트 실행·승인, DBOS 세션 관리와 사용자별 접근 격리를 구현했습니다. 웹 콘솔·BFF·지식 서비스를 메일 검색·요약 흐름과 연결하고, PostgreSQL의 메모리·세션·이벤트 저장 및 pgvector 검색을 활용했습니다.' },
        { title: 'LLM 실행의 관측 연결', body: 'OpenTelemetry와 내장 LLM 계측을 통합해 요청 문맥과 로그·트레이스·메트릭의 수집 경로를 연결했습니다. 서비스 요청에서 모델·도구 호출로 이어지는 실행을 같은 문맥에서 확인할 수 있도록 구성했습니다.' },
      ],
      outcome: '작업의 영속 상태와 재시도·재개를 사용자 화면의 결과 확인까지 연결하고 PoC를 인계했습니다. 지식 추출·그래프 알고리즘은 KB Core와 연동했으며, 프로젝트는 PoC 범위로 진행됐습니다.',
    },
    en: {
      context: 'Developed and handed over a goal-oriented work agent PoC that connects mail and documents to work items and grounded answers. I owned KB Service product APIs, permissions, knowledge-processing jobs and product integration, and contributed to agent execution and LLM Ops integration.',
      sections: [
        { title: 'Persistent job state and recovery', body: 'Connected KB Core processing to request acceptance, persistent state, retries and result retrieval. Preserved job state and an application journal, using leases, idempotent handling and redrive paths to address interruption and message redelivery.' },
        { title: 'API contracts and visible job status', body: 'Compared OpenAPI contracts and response models across the frontend, BFF, KB Service and Core. Connected stored status to events through a status outbox and added a final-state lookup path for cases where the last event is missed.' },
        { title: 'Agent execution and user-scoped access', body: 'Implemented execution, approval, DBOS sessions and user-scoped isolation. Connected the web console, BFF and knowledge service to mail search and summarization, using PostgreSQL for memory, sessions and events and pgvector for retrieval.' },
        { title: 'Observing LLM execution', body: 'Integrated OpenTelemetry and built-in LLM instrumentation to connect request context, logs, traces and metrics. Linked service requests to model and tool calls within the same execution context.' },
      ],
      outcome: 'Connected persistent state, retry and recovery to user-visible results and handed over the PoC. Knowledge extraction and graph algorithms were integrated from KB Core; the project remained at PoC scope.',
    },
  },
  rendi: {
    ko: {
      context: '실시간 음성을 텍스트로 변환하고 AI 대화 피드백을 제공하는 소개팅 코칭 서비스입니다. 음성 입력부터 전사·AI 분석·클라이언트 피드백 반환까지 연결하는 백엔드 흐름을 담당했습니다.',
      sections: [
        { title: '실시간 음성 입력과 전사 세션', body: '클라이언트에서 WebSocket으로 전달한 음성 바이너리를 FastAPI에서 받아 오디오 버퍼와 전사 세션으로 처리했습니다. Python SDK를 통해 Azure Streaming STT와 연결하고 텍스트 결과를 후속 AI 처리에 전달했습니다.' },
        { title: 'AI 분석과 비동기 응답 연결', body: '음성 스트림 처리와 AI 서비스 호출을 비동기 흐름으로 구성했습니다. AI 서버에 REST 분석을 요청하고, 반환된 코칭 결과를 WebSocket으로 클라이언트에 전달하도록 연결했습니다.' },
        { title: '음성·AI 서비스 사이의 백엔드 연동', body: '음성 입력, 텍스트 변환과 LLM 피드백을 하나의 사용자 흐름으로 연결하는 API·서비스 연동을 개발했습니다. 원본 아키텍처 자료의 FastAPI, 스트리밍 STT와 AI 분석 역할을 기준으로 처리 경계를 구성했습니다.' },
      ],
      outcome: '실시간 음성 입력에서 AI 코칭 응답까지 이어지는 백엔드를 개발했습니다. 프로젝트는 NE:XT CONTEST에서 금상을 수상했습니다.',
    },
    en: {
      context: 'A real-time conversation coaching service that transcribes speech and returns AI feedback. I developed the backend connecting audio input, transcription, AI analysis and feedback to the client.',
      sections: [
        { title: 'Streaming audio and transcription sessions', body: 'Handled binary audio sent over WebSocket in FastAPI, using audio buffers and transcription sessions. Connected Azure Streaming STT through the Python SDK and passed text results to downstream AI processing.' },
        { title: 'Asynchronous AI analysis and responses', body: 'Connected voice-stream handling and AI calls asynchronously. Requested analysis from the AI server through REST and delivered coaching results to the client over WebSocket.' },
        { title: 'Integrating speech and AI services', body: 'Developed the service and API integration that connects audio input, text conversion and LLM feedback into one user flow, with boundaries reflecting the original FastAPI, streaming STT and AI-analysis architecture.' },
      ],
      outcome: 'Implemented the backend from live voice input to AI coaching responses. The project received the Gold Award at NE:XT CONTEST.',
    },
  },
  tiger: {
    ko: {
      context: 'Stable Diffusion으로 사용자 사진을 AI 프로필 이미지로 변환하는 서비스입니다. 약 1,000명의 사용자가 이용했으며, 백엔드와 비동기 이미지 처리를 개발하고 프론트엔드 연동·인증·배포에 참여했습니다.',
      sections: [
        { title: '업로드·인증과 요청 접수', body: '웹 화면에서 업로드한 사진과 Firebase 인증을 서비스 요청에 연결했습니다. Cloud Run의 NestJS Gateway에서 이미지 생성 요청을 접수하고, 오래 걸리는 AI 처리를 별도 작업으로 위임하는 흐름을 개발했습니다.' },
        { title: 'RabbitMQ 기반 비동기 이미지 처리', body: 'RabbitMQ로 작업을 전달하고 외부 AI 엔진의 이미지 생성 처리를 연결했습니다. Gateway의 요청 응답과 AI 실행을 분리하고 생성 결과와 알림이 사용자 흐름으로 이어지도록 구현했습니다.' },
        { title: '결과 기록과 프론트엔드 연동', body: 'Firestore에서 요청·응답·오류 metadata를 관리하고 Cloud Storage에 입력·생성 이미지를 저장하는 구성과 연동했습니다. 생성 이미지의 프론트엔드 표시, 인증과 배포 작업에 참여했습니다.' },
      ],
      outcome: '사용자 사진 입력부터 비동기 생성 결과 전달까지 이어지는 AI 프로필 서비스 개발에 기여했습니다. 백엔드의 작업 처리와 프론트엔드의 결과 확인을 연결하고 인증·배포에 참여했습니다.',
    },
    en: {
      context: 'A Stable Diffusion profile-image service used by approximately 1,000 people. I developed the backend and asynchronous image processing and contributed to frontend integration, authentication and deployment.',
      sections: [
        { title: 'Uploads, authentication and request acceptance', body: 'Connected photo uploads and Firebase authentication to service requests. Developed the NestJS Gateway flow on Cloud Run to accept generation requests and delegate long-running AI work.' },
        { title: 'Asynchronous processing with RabbitMQ', body: 'Dispatched jobs through RabbitMQ to external AI engines. Separated the Gateway response from AI execution and connected generation results and notifications to the user flow.' },
        { title: 'Result records and frontend integration', body: 'Integrated Firestore request, response and error metadata with Cloud Storage for input and generated images. Contributed to displaying results in the frontend, authentication and deployment.' },
      ],
      outcome: 'Contributed to the service from photo input to asynchronous result delivery. Connected backend job processing to frontend result inspection and contributed to authentication and deployment.',
    },
  },
  'gdg-website': {
    ko: {
      context: '멤버 활동·일정과 운영진 관리 기능을 한곳에 모은 커뮤니티 웹사이트입니다. 웹 화면부터 API·인증·권한·데이터 관리까지 연결하는 풀스택 개발을 담당했습니다.',
      sections: [
        { title: '활동·일정 화면과 API 연결', body: 'React로 회원 활동과 일정을 확인하는 웹 화면을 개발하고 FastAPI와 연결했습니다. 사용자가 웹에서 수행한 작업이 API 요청과 데이터 처리로 이어지도록 구성했습니다.' },
        { title: '운영 기능과 접근 권한', body: '인증과 권한 처리를 구현해 회원 기능과 운영진 관리 기능을 구분했습니다. 커뮤니티의 활동·일정·운영자 관리를 웹에서 수행할 수 있도록 연결했습니다.' },
        { title: '데이터 관리', body: 'MongoDB·PostgreSQL을 사용하는 데이터 관리 기능을 웹·API와 연동했습니다. 원본 자료는 전체 기술 구성을 보여주며, 데이터베이스별 테이블 분담은 별도로 명시하지 않았습니다.' },
      ],
      outcome: '커뮤니티 활동 확인과 운영 기능을 웹 화면·API·권한·데이터 관리로 연결한 풀스택 프로젝트입니다. 아래 원본 화면에서 서비스 구성을 확인할 수 있습니다.',
    },
    en: {
      context: 'A community website combining member activities, schedules and administration. I developed the full-stack integration across web screens, APIs, authentication, permissions and data management.',
      sections: [
        { title: 'Activities, calendars and APIs', body: 'Built React screens for member activities and schedules and connected them to FastAPI. Linked user actions in the web interface to API requests and data handling.' },
        { title: 'Administration and permissions', body: 'Implemented authentication and permissions to separate member functions from administration. Connected activity, schedule and administrator management through the web interface.' },
        { title: 'Data management', body: 'Integrated MongoDB and PostgreSQL data management with the web and API layers. Original materials identify the technology stack without assigning individual tables to each database.' },
      ],
      outcome: 'Connected community activities and administration across the frontend, APIs, permissions and data layer. The original screenshot below preserves the service context.',
    },
  },
}
