type Locale = 'ko' | 'en'

export const ncExperienceContent: Record<Locale, { overview: string; highlights: string[] }> = {
  "ko": {
    "overview": "AI 이미지 생성 서비스와 온톨로지 기반 업무 자동화 에이전트의 백엔드·플랫폼 기능을 개발했습니다. 긴 AI 작업의 상태 관리와 복구, 사용자 승인, 근거 검증을 제품 흐름에 연결했습니다.",
    "highlights": [
      "AI 이미지 생성 서비스의 백엔드 API·비동기 처리 개발 및 동시 요청·부분 실패에 대응하는 상태 관리·복구 구현",
      "온톨로지 기반 업무 자동화 에이전트의 실행·사용자 승인·작업 재개·접근 제어 구현 및 PoC 개발·인계 참여",
      "OpenTelemetry 기반 로깅·트레이싱과 개발·릴리스 후보 환경의 배포 자동화 구현"
    ]
  },
  "en": {
    "overview": "Developed backend and platform features for AI image generation and ontology-based work-automation agents. Connected long-running job recovery, user approval and evidence validation to product workflows.",
    "highlights": [
      "Built backend APIs and asynchronous processing for AI image generation, with state management and recovery for concurrent requests and partial failures",
      "Implemented execution, user approvals, resumable jobs and access controls for an ontology-based work-automation agent; contributed to PoC development and handover",
      "Implemented OpenTelemetry-based logging and tracing, and automated deployments to development and release-candidate environments"
    ]
  }
}

export const educationOverview: Record<Locale, string> = {
  "ko": "수학을 전공하고 소프트웨어벤처 융합전공을 이수했습니다. GDGoC 고려대학교에서 AI·서버 개발과 커뮤니티 운영 활동을 함께했습니다.",
  "en": "Studied mathematics and completed an interdisciplinary major in Software Venture. Combined AI and backend development with community activities at GDGoC Korea University."
}

export const projectHighlights: Record<string, Record<Locale, { implementation: string; outcome: string }>> = {
  "dainos-finder": {
    "ko": {
      "implementation": "팀에서 React·FastAPI 검토 흐름과 PostgreSQL 행 잠금·입력 버전 검사, SSE 오류 처리를 구현했습니다.",
      "outcome": "오래된 결과의 반영을 차단하고 검토 근거·초안·승인 당시 문안을 보존하는 R0 웹·API를 구현했습니다."
    },
    "en": {
      "implementation": "Within the team, built React/FastAPI review flows, PostgreSQL row locks, input-version checks and SSE error handling.",
      "outcome": "Implemented the R0 web/API to reject stale results and preserve evidence, drafts and approved wording."
    }
  },
  "agp-wiki": {
    "ko": {
      "implementation": "팀에서 분류 제안 검증, inbox·손상 큐 복구, 파일 지문·인용·날짜 검사와 플랫폼 회귀 테스트를 담당했습니다.",
      "outcome": "기존 문서와 큐를 보존하며 수집을 재개하고 확인된 원문·인용을 답변 근거로 연결했습니다."
    },
    "en": {
      "implementation": "Contributed classification validation, inbox and queue recovery, fingerprint and citation checks, and platform regressions.",
      "outcome": "Enabled ingestion to resume while preserving documents and queues, with verified sources linked as evidence."
    }
  },
  "vaetki": {
    "ko": {
      "implementation": "배너 기능의 FastAPI·Celery 백엔드와 시안 잠금·버전 갱신, 외부 크레딧 예약·확정·취소를 구현했습니다.",
      "outcome": "생성 결과를 보존한 채 후속 작업을 재시도하고 작업·크레딧 상태를 구분하는 처리 흐름을 구성했습니다."
    },
    "en": {
      "implementation": "Built the FastAPI/Celery banner backend, versioned locks and external credit reservation, commit and cancellation.",
      "outcome": "Separated job and credit states so downstream work could be retried while preserving generated results."
    }
  },
  "agp-note": {
    "ko": {
      "implementation": "사내 사이드 프로젝트로 Tauri·Svelte·Rust 앱과 SQLite 기록, AI·MCP 연동을 단독 개발했습니다.",
      "outcome": "원문·교정본을 보존하고 사용자가 검토한 요약을 Confluence·Jira에 게시하는 흐름을 연결했습니다."
    },
    "en": {
      "implementation": "Independently built an internal Tauri/Svelte/Rust app with SQLite records and AI/MCP integrations.",
      "outcome": "Connected reviewed summaries to Confluence/Jira publishing while preserving original and corrected transcripts."
    }
  },
  "dainos": {
    "ko": {
      "implementation": "팀에서 실행 API·DBOS 세션·접근 격리·승인 흐름과 OpenTelemetry 관측을 구현했습니다.",
      "outcome": "영속 상태와 재시도·재개를 사용자 화면의 결과 확인까지 연결하고 PoC 개발·인계에 참여했습니다."
    },
    "en": {
      "implementation": "Contributed execution APIs, DBOS sessions, access isolation, approval flows and OpenTelemetry instrumentation.",
      "outcome": "Connected persistent state and recovery to visible results and contributed to PoC development and handover."
    }
  },
  "rendi": {
    "ko": {
      "implementation": "FastAPI·WebSocket에서 STT·LLM 피드백을 연결하고 Docker Compose 기반 백엔드·AI 서버를 GCP에 배포했습니다.",
      "outcome": "음성 입력에서 코칭 응답까지 이어지는 백엔드를 개발했으며 팀은 NE:XT CONTEST 금상을 수상했습니다."
    },
    "en": {
      "implementation": "Integrated STT/LLM feedback through FastAPI/WebSocket and deployed backend and AI services on GCP with Docker Compose.",
      "outcome": "Built the voice-to-coaching backend; the team received the NE:XT CONTEST Gold Award."
    }
  },
  "tiger": {
    "ko": {
      "implementation": "NestJS·Firestore 백엔드와 RabbitMQ 이미지 작업을 개발하고 Next.js 연동·인증·배포에 참여했습니다.",
      "outcome": "사용자 사진 입력부터 비동기 생성과 결과 확인까지 이어지는 서비스 개발에 기여했습니다."
    },
    "en": {
      "implementation": "Built NestJS/Firestore backend and RabbitMQ image jobs, contributing to Next.js integration, authentication and deployment.",
      "outcome": "Contributed to the service flow from uploaded photos through asynchronous generation to result viewing."
    }
  },
  "gdg-website": {
    "ko": {
      "implementation": "풀스택 개발로 커뮤니티 운영 기능과 세미나·이미지 갤러리·상세 페이지의 연동 개선에 참여했습니다.",
      "outcome": "커뮤니티 활동을 보여주는 화면과 운영 기능을 연결하는 웹사이트 개발에 기여했습니다."
    },
    "en": {
      "implementation": "Contributed full-stack work on community operations and integration improvements for seminar, gallery and detail pages.",
      "outcome": "Helped connect community activity pages with administrative features."
    }
  }
}
