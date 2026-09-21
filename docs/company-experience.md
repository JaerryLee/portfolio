# 회사 업무 정리와 포트폴리오 작성 근거

기준일: 2026-09-21. 본인의 설명과 WSL의 코드·문서·Git 작성자 이력을 대조해 정리했다.
포트폴리오의 한·영 프로젝트 요약은 `src/projects.ts`, 현재 업무와 경력 소개는 `src/App.tsx`에서 관리한다.
자세한 구현 설명은 별도 블로그 `../jaerrylee.github.io/src/content/posts/`에 작성한다.

## 경력의 구분

현재 포지션은 **Applied AI Engineer**, 현재 담당 업무는 **LLM Ops & Observability**다.
AGP Note, VAETKI Commerce, Dainos는 이전에 수행한 프로젝트로 구분한다.
이 구분은 본인이 확인한 내용이며, Git 커밋 날짜를 직무 전환일이나 프로젝트 공식 종료일로 사용하지 않는다.
세 프로젝트의 기간은 `2026 · 이전 수행`으로 표기한다. 회사 재직 기간의 `Present`와 프로젝트 수행 상태는 별개다.

## 현재 업무 — LLM Ops & Observability

LLM과 에이전트의 실행을 관측하는 업무를 맡고 있다. OpenTelemetry 기반으로 로그·트레이스·메트릭을
연결해 서비스 경계를 넘는 호출 흐름과 오류, 모델 사용량을 확인할 수 있는 관측 체계를 구축·운영한다.

- FastAPI·httpx와 Pydantic AI 계측을 연결하고 W3C trace context와 baggage를 서비스 경계에 전파한다.
- 요청 문맥을 하위 LLM 스팬에도 전달해 요청·세션·사용자 단위로 실행을 연결한다.
- 표준 OTel LoggingHandler로 stdout과 OTLP 로그 경로를 구성하고 로그와 스팬을 trace ID로 연결한다.
- Pydantic AI가 제공하는 토큰·비용·첫 응답 지연 메트릭을 OTLP로 수집한다.
- Collector 및 HyperDX·ClickHouse 조회 경로를 연동하고 콘텐츠 수집 옵션, 헬스체크 제외 등 환경별 설정을 관리한다.

구현 근거:

| 저장소 | 확인한 파일·이력 | 확인한 범위 |
| --- | --- | --- |
| agent-core | `src/agent_core/observability_setup.py`, `6579d1e` | 로그·트레이스·메트릭 exporter와 Pydantic AI 계측 연결 |
| agent-core | `src/agent_core/observability.py`, `ccef19b` | 요청 문맥을 하위 LLM 스팬에 전파 |
| agent-orchestrator | `agent_orchestrator/observability_setup.py`, `5142de2` | gateway·orchestrator 계측과 OTLP 수집 경로 |
| agent-orchestrator | `docs/otel-logging-guide.md` | 로그·스팬 상관관계, 메트릭, HyperDX·ClickHouse 조회 방법 |
| ops-app | `fb20534`, `4ec7cd5`, `e0092c0`, `c068d6c` | 앱의 관측 설정 활성화, Collector 연동, 헬스체크 제외 |

계측 라이브러리 자체나 공유 관측 인프라 전체를 단독 개발했다는 의미로 쓰지 않는다.
역할은 표준 SDK와 내장 계측의 통합, 문맥 전파, 수집 경로와 배포 설정이다.
관측 가능한 항목과 실제 개선 성과도 구분한다. 비용 절감률, 장애 감소율, 지연 개선 수치는 주장하지 않는다.

## 이전 프로젝트 1 — AGP Note / 팀 업무 AX 전환

회의 음성을 전사·검토하고 회의록과 후속 작업으로 연결하는 로컬 우선 데스크톱 앱을 개발했다.
팀 업무의 AX 전환이라는 목적은 본인이 확인했다.

- Tauri·Svelte·Rust·SQLite 앱과 프로젝트·회의 기록 관리.
- 로컬 음성 모델 및 API 전사 연동, 기존 전사와 교정본을 보존하는 화자 재분석.
- 전사 근거를 연결한 회의 요약, Confluence·Jira 게시.
- MCP 기반 녹음 가져오기·전사·요약 저장·게시 도구와 프로젝트별 접근 권한.
- Windows 설치·자동 업데이트와 중단된 업데이트 복구.

근거: `agp-note/README.md`, `docs/summary-publishing.md`, `docs/mcp-integration.ko.md`,
`crates/agp-note-mcp/src/publishing.rs`, `apps/desktop/src-tauri/src/update_manifest.rs`.
본인 작성 커밋 `429cd3e`, `3d0faad`, `291a4be`, `808fb21`에서 MCP 작업과 게시·업데이트 구현을 확인했다.

구현 결과는 회의 기록→요약→후속 업무 흐름이다. 팀 사용 인원이나 절감 시간은 추정하지 않는다.
업데이트 매니페스트 서명과 Windows 설치 프로그램의 코드 서명은 별개이므로 혼동해 쓰지 않는다.

## 이전 프로젝트 2 — VAETKI Commerce / 배너 백엔드

상품 이미지와 대화형 요청으로 배너를 생성·편집하는 기능의 전체 백엔드와 AI 서비스 연동을 개발했다.
소유 범위는 Commerce 전체 서비스가 아니라 **배너 기능의 백엔드**다.

- 생성·조회·리사이즈·편집 API와 비즈니스 로직.
- Redis·Celery 비동기 작업, 상태 관리와 실시간 결과 이벤트.
- 크레딧 사전 예약·확정·실패 취소, AI Chat 작업 잠금과 편집 충돌 제어.
- 이미지·썸네일 부분 실패에서 기존 결과 보존, 작업 실패·복구 처리.
- DEV·RC CI/CD 및 배포 자동화. Live 배포는 별도 운영 팀 담당.

근거: `commerce-backend/docs/banner-flow/banner-flow.mmd`, `src/tasks/banner_task.py`,
`src/services/banner_svc.py`, `src/services/banner_ai_chat_svc.py`.
본인 작성 커밋 `9a8f456`, `c3d3cfc`, `406964b`, `c110188`, `6d6b8a2`를 확인했다.

## 이전 프로젝트 3 — Dainos / 에이전틱 AI 개발

메일·문서를 업무와 지식으로 연결하는 플랫폼에서 에이전트 실행 기반과 제품 통합 기능을 개발했다.

- agent-core·orchestrator 책임 분리, 실행 세션·이벤트 및 SSE 전달.
- 승인 도구의 실행 중단·재개와 사용자별 세션·지식·메모리 범위 격리.
- React 웹 콘솔과 FastAPI BFF의 메일·업무·문서·근거 기반 채팅 연결.
- KB Service 제품 API·권한과 지식화 작업의 영속 상태·멱등 재시도·재개.
- FE–BFF–Service–Core 계약 정합성과 개발 배포 연동.

근거: `dainos-fe/docs/handover/01-overview.md`, `07-project-closeout.md`, `dainos-bff/README.md`,
`kb-service/README.md`, `agent-core/README.md`, `agent-orchestrator/README.md`.
본인 작성 커밋에는 `agent-orchestrator`의 `1d499f4`, `e84b494`, `agent-core`의 `4edeb85`,
`kb-service`의 `80d5531`, `3577302`, `cf5713e` 등이 있다.

에이전트 실행 기반 개발과 현재 Dainos의 KB Chat 경로를 같은 배포 경로로 단정하지 않는다.
현재 문서의 Chat 경로는 BFF→KB Service→KB Core다. 지식 추출·그래프 알고리즘 전체를
본인의 단독 개발 범위로 쓰지 않는다. 제품 흐름 그림도 메일·문서→지식화→업무→근거 기반 응답으로 표현한다.

## 공개 원고의 범위

본인 담당 범위와 구현 결과를 중심으로 작성한다. 내부 주소, 인증 정보, 실제 메일·회의 자료와
동료의 개인정보는 사이트 원고에 포함하지 않는다. 사업 전체 예산은 개인 성과 하이라이트에서 제외한다.
사이트 구현 검증과 회사 서비스의 실운영 검증은 별개다.

## 포트폴리오와 블로그의 역할

포트폴리오는 프로젝트별 목적, 담당 역할 두 항목과 대표 기술만 소개한다.
기존 구현 세부 목록과 시스템 흐름·아키텍처 도식은 포트폴리오에서 덜어내고,
다음 글에서 설계 이유와 실패·복구 경계를 설명한다.

| 포트폴리오 영역 | 블로그 Markdown | 글 경로 |
| --- | --- | --- |
| 현재 LLM Ops | `llm-ops-opentelemetry.md` | `/posts/llm-ops-opentelemetry/` |
| AGP Note | `agp-note-workflow.md` | `/posts/agp-note-workflow/` |
| VAETKI Commerce | `vaetki-banner-backend.md` | `/posts/vaetki-banner-backend/` |
| Dainos | `dainos-agentic-platform.md` | `/posts/dainos-agentic-platform/` |

글의 2026-09-21은 작성일이다. 한·영 포트폴리오 모두 같은 한국어 글로 연결하며,
영문 링크에는 한국어 글임을 표시한다. 첫 화면의 Tech Blog 링크는 블로그 목록으로 연결한다.
