import { useEffect, useRef, type CSSProperties } from 'react'
import type { Project } from './projects'
import { blogPostUrl } from './links'
import { caseStudies } from './caseStudies'

const flows: Record<string, { ko: string[]; en: string[] }> = {
  'dainos-finder': {"ko": ["문서 등록 · 구조 확인", "충돌 결정 · 태그 확정", "판정 기록 · 결과 집계", "대응 검사 · 사용자 승인"], "en": ["Register · structure", "Resolve conflicts · tag", "Record verdicts · aggregate", "Check responses · approve"]},
  'agp-wiki': { ko: ['문서 수집', '분류 검증 · 복구', 'FTS5 / BM25', '근거 확인 · 응답'], en: ['Ingest documents', 'Validate · recover', 'FTS5 / BM25', 'Verify · answer'] },
  'agp-note': { ko: ['회의 전사', '원문 연결 · 검토', '요약 · 후속 업무', '게시 승인'], en: ['Transcribe', 'Source links · review', 'Summary · follow-up', 'Approve publishing'] },
  vaetki: { ko: ['상품 · 편집 요청', 'API · 작업 잠금', 'AI 생성 · 편집', '버전 갱신 · 복구'], en: ['Product · edit request', 'API · task locks', 'AI generation · editing', 'Version update · recovery'] },
  dainos: { ko: ['사용자 요청', '승인 · 세션 격리', 'Agent · 메모리', '근거 응답 · OTel'], en: ['User request', 'Approval · session isolation', 'Agent · memory', 'Grounded answer · OTel'] },
  rendi: { ko: ['음성 입력', 'FastAPI 스트림 처리', 'Azure Streaming STT', 'AI 분석 · 코칭 반환'], en: ['Voice input', 'FastAPI stream handling', 'Azure Streaming STT', 'AI analysis and coaching response'] },
  tiger: { ko: ['사진 · 인증', '비동기 요청', 'AI 이미지 처리', '프로필 결과'], en: ['Photo · authentication', 'Async request', 'AI image processing', 'Profile result'] },
  'gdg-website': { ko: ['회원 활동 · 일정', '웹 화면', 'API · 권한', '데이터 관리'], en: ['Activities · schedules', 'Web interface', 'API · permissions', 'Data management'] },
}

const flowDetails: Record<string, { ko: string[]; en: string[]; lanes: { title: string; ko: string; en: string }[] }> = {"dainos-finder": {"ko": ["React·FastAPI로 문서·조항·원문 위치 연결", "사람이 적용 문안과 검토 대상을 확정", "SSE 실행 경계 · 입력 버전·근거 검증", "초안 보존 · 승인/반려 당시 문안 기록"], "en": ["React / FastAPI connect documents, clauses and source locations", "People choose applicable wording and review targets", "SSE boundary; input-version and evidence checks", "Preserve drafts and wording at approval / rejection"], "lanes": [{"title": "PostgreSQL · API", "ko": "행 잠금 · 실행/입력 버전 검사 · 단계 게이트", "en": "Row locks, run / input-version checks and stage gates"}, {"title": "HTTP · SSE", "ko": "웹·API·Agent 책임 분리 · 실제 판정 Agent 통합 진행 중", "en": "Separate web / API / Agent responsibilities; live verdict integration in progress"}]}, "agp-wiki": {"ko": ["원본 문서와 파일 경로", "LLM 분류 제안 검증 · 중단 후 재개", "SQLite 어휘 검색으로 후보 조회", "host LLM 응답 · 인용문 재검사"], "en": ["Source documents and file paths", "Validate LLM proposals; resume ingestion", "SQLite lexical retrieval of candidates", "Host LLM answers; recheck quoted evidence"], "lanes": [{"title": "SQLite", "ko": "재생성 가능한 투영 · contentless FTS5/BM25 인덱스", "en": "Rebuildable projection and contentless FTS5/BM25 index"}, {"title": "근거 검증 / Evidence checks", "ko": "CAS·Journal 보존 · SHA-256·인용문·날짜 확인", "en": "CAS / Journal preservation; SHA-256, quotation and date checks"}]}, "agp-note": {"ko": ["Tauri · Svelte 회의 기록 화면", "Rust에서 전사와 원문 연결 관리", "원문 근거와 회의 문맥을 연결한 요약", "게시 전 검토 · MCP 작업 권한"], "en": ["Tauri / Svelte meeting interface", "Rust manages transcripts and source links", "Summaries grounded in meeting context", "Review publishing; MCP permissions"], "lanes": [{"title": "SQLite", "ko": "로컬 회의 기록 보존 · 후속 업무 연결", "en": "Preserve local meeting records and follow-up context"}, {"title": "AI / MCP", "ko": "외부 AI 전송 경계와 클라이언트 작업 권한", "en": "External AI transfer boundaries and client permissions"}]}, "vaetki": {"ko": ["FastAPI 생성 · 조회 · 편집 요청", "Redis · Celery 비동기 작업으로 생성 위임", "AI 서비스 연동 · 결과 이벤트 전달", "MongoDB 버전 조건 갱신 · 실패 시 재시도"], "en": ["FastAPI generation, retrieval and editing", "Redis / Celery dispatch asynchronous work", "AI integration; send result events", "MongoDB conditional updates and retry"], "lanes": [{"title": "MongoDB", "ko": "시안별 작업 잠금 · 버전 조건 갱신으로 충돌 방지", "en": "Per-variation locks and version-conditional updates"}, {"title": "Credit API", "ko": "예약 → 확정 / 취소 · 부분 실패에서도 완료 시안 보존", "en": "Reserve → commit / rollback; preserve completed variations"}]}, "dainos": {"ko": ["웹 콘솔 · BFF에서 요청 전달", "사용자별 접근 격리 · 승인 · DBOS 세션", "Pydantic AI 실행 · 메모리와 벡터 검색", "메일 · 문서 근거 응답과 실행 경로 관측"], "en": ["Web console / BFF forwards requests", "User isolation, approval and DBOS sessions", "Pydantic AI execution, memory and vector retrieval", "Mail / document evidence; observe execution"], "lanes": [{"title": "PostgreSQL / pgvector", "ko": "Agent 메모리 · 세션 · 이벤트 저장 및 임베딩 검색", "en": "Agent memory, sessions, events and embedding retrieval"}, {"title": "OpenTelemetry", "ko": "요청 문맥 · 로그 · 트레이스 · 메트릭의 수집 연결", "en": "Request context, logs, traces and metrics collection"}]}, "rendi": {"ko": ["클라이언트 → WebSocket 음성 바이너리", "FastAPI 오디오 버퍼 · 전사 세션", "Azure Streaming STT → 텍스트 결과", "AI 서버 REST 분석 → WebSocket 코칭 응답"], "en": ["Client sends binary audio via WebSocket", "FastAPI audio buffer and transcription session", "Azure Streaming STT returns text", "AI REST analysis; WebSocket coaching response"], "lanes": [{"title": "비동기 I/O / Async I/O", "ko": "음성 스트림과 AI 응답 처리 · 클라이언트로 결과 반환", "en": "Handle voice streams and return AI results to the client"}, {"title": "전사 연결 / Transcription", "ko": "Python SDK에서 스트리밍 STT 연결", "en": "Python SDK connects to streaming STT"}]}, "tiger": {"ko": ["웹 사진 업로드 · Firebase 인증", "Cloud Run의 NestJS Gateway가 요청 수신", "RabbitMQ 작업 위임 → 외부 AI 엔진", "AI 결과 기록 · 생성 이미지와 알림 전달"], "en": ["Web photo upload and Firebase authentication", "NestJS Gateway on Cloud Run receives requests", "RabbitMQ dispatches work to external AI engines", "Record results; generated images and notifications"], "lanes": [{"title": "Firestore / Cloud Storage", "ko": "요청 · 응답 · 오류 metadata / 입력 · 생성 이미지 저장", "en": "Request, response and error metadata / input and generated images"}, {"title": "비동기 경계 / Async boundary", "ko": "Gateway 즉시 응답 · 별도 AI 작업 처리", "en": "Gateway responds immediately; AI work runs separately"}]}, "gdg-website": {"ko": ["React 회원 활동 · 일정 화면", "FastAPI 웹 요청과 API 연결", "인증 · 권한으로 운영 기능 구분", "MongoDB · PostgreSQL 데이터 관리"], "en": ["React activities and calendar interface", "FastAPI connects web requests to APIs", "Authentication and administration permissions", "MongoDB / PostgreSQL data management"], "lanes": [{"title": "운영 기능 / Administration", "ko": "회원 활동 · 일정 · 운영자 관리", "en": "Member activities, schedules and administration"}, {"title": "데이터 / Data", "ko": "각 DB의 테이블별 분담은 현재 공개 근거에 없음", "en": "Public source does not specify table-level responsibility per database"}]}}

function SourceFigure({ src, alt, caption, ko }: { src: string; alt: string; caption: string; ko: boolean }) {
  return <figure className="case-image"><a className="source-image-link" href={src} target="_blank" rel="noopener noreferrer" aria-label={`${caption}: ${ko ? '원본 크게 보기, 새 탭' : 'view original in a new tab'}`}><img src={src} alt={alt} loading="lazy" /><span className="source-image-action">{ko ? '원본 크게 보기' : 'View original size'} <span aria-hidden="true">↗</span></span></a><figcaption>{caption}</figcaption></figure>
}

export default function ProjectCaseStudy({ project, locale, onClose }: { project: Project; locale: 'ko' | 'en'; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const ko = locale === 'ko'
  const isSeminar = project.id === 'seminars'
  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    const element = dialog.current
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !element) return
      const controls = Array.from(element.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]'))
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && (document.activeElement === first || document.activeElement === title.current)) {
        event.preventDefault(); last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus()
      }
    }
    element?.addEventListener('keydown', trapFocus)
    element?.showModal()
    title.current?.focus({ preventScroll: true })
    document.body.style.overflow = 'hidden'
    return () => {
      element?.removeEventListener('keydown', trapFocus)
      element?.close()
      document.body.style.overflow = previousOverflow
      const target = previousFocus && previousFocus !== document.body ? previousFocus : document.querySelector<HTMLElement>('a[href="#project/' + project.id + '"], button[data-case-id="' + project.id + '"]')
      target?.focus({ preventScroll: true })
    }
  }, [project.id])
  const detail = caseStudies[project.id]?.[locale]
  const architecture = flowDetails[project.id]
  const steps = flows[project.id]?.[locale] ?? project.tech
  return (
    <dialog ref={dialog} className="case-study" aria-labelledby="case-title" onCancel={(event) => { event.preventDefault(); onClose() }} style={{ '--case-accent': project.color } as CSSProperties}>
      <div className="case-toolbar"><span>{ko ? '프로젝트 상세' : 'Case study'}</span><button type="button" onClick={onClose} aria-label={ko ? '프로젝트 닫기' : 'Close project'}>{ko ? '닫기' : 'Close'} <span aria-hidden="true">×</span></button></div>
      <div className="case-content">
        <header className="case-header"><p>{project.label}</p><h1 id="case-title" ref={title} tabIndex={-1}>{project.title}</h1><p className="case-summary">{project.summary}</p></header>
        <dl className="case-meta"><div><dt>{ko ? '기간' : 'Period'}</dt><dd>{project.period}</dd></div><div><dt>{ko ? '내 역할' : 'My role'}</dt><dd>{project.role}</dd></div>{(project.award || project.id === 'tiger') && <div><dt>{ko ? '수상 · 이용' : 'Award / usage'}</dt><dd>{project.award ?? project.metric}</dd></div>}</dl>
        {detail && <section className="case-context" aria-labelledby="case-context-title"><h2 id="case-context-title">{ko ? '프로젝트 배경과 담당 범위' : 'Context and scope'}</h2><p>{detail.context}</p></section>}
        <div className="case-columns"><section aria-labelledby="case-contribution-title"><div className="case-section-heading"><span>02</span><h2 id="case-contribution-title">{isSeminar ? (ko ? '역할과 자료 표기' : 'Role and source credits') : (ko ? '담당한 구현과 기술 판단' : 'My implementation and technical decisions')}</h2></div>{detail ? <div className="implementation-details">{detail.sections.map((section) => <article key={section.title}><h3>{section.title}</h3><p>{section.body}</p></article>)}</div> : <ol className="contribution-list">{project.contributions.map((item) => <li key={item}><p>{item}</p></li>)}</ol>}</section><aside aria-labelledby="case-tools-title"><h2 id="case-tools-title">{isSeminar ? (ko ? '다룬 기술과 주제' : 'Technologies and topics') : (ko ? '사용한 기술' : 'Technology')}</h2><div className="tag-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="case-resources">{project.blogPost && <a href={blogPostUrl(project.blogPost)} target="_blank" rel="noopener noreferrer">{ko ? '설계 · 구현 기록 읽기' : 'Read engineering notes (Korean)'} <span aria-hidden="true">↗</span></a>}{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">{isSeminar ? (ko ? '원본 자료 열기' : 'Open source material') : (ko ? '서비스 방문' : 'Visit service')} <span aria-hidden="true">↗</span></a>}</div></aside></div>
        {detail && <section className="case-outcome" aria-labelledby="case-outcome-title"><h2 id="case-outcome-title">{ko ? '구현 결과와 진행 상태' : 'Implementation and project status'}</h2><p>{detail.outcome}</p></section>}
        {isSeminar ? <section className="seminar-topics" aria-labelledby="seminar-topics-title">
          <h2 id="seminar-topics-title">{ko ? '자료에서 확인되는 세션 주제' : 'Session topics in the source materials'}</h2>
          <article><h3>{ko ? '클라우드 서비스와 인프라 실습' : 'Cloud services and infrastructure'}</h3><p>{ko ? 'AWS·GCP, Terraform을 활용한 멀티클라우드 IaC, CodePipeline·CodeBuild·Cloud Build 기반 CI/CD, IAM, 모니터링·운영, 실전 팁과 트러블슈팅.' : 'AWS / GCP, multicloud IaC with Terraform, CI/CD using CodePipeline, CodeBuild and Cloud Build, IAM, monitoring, operations and troubleshooting.'}</p></article>
          <article><h3>AI Week</h3><p>{ko ? 'RNN/LSTM의 한계, Query·Key·Value 개념과 수식, Softmax 정규화와 스케일링, Multi-Head Attention, Positional Encoding, Transformer 전체 구조와 Encoder/Decoder 구성요소.' : 'RNN / LSTM limitations, Query / Key / Value concepts, Softmax normalization and scaling, multi-head attention, positional encoding, Transformer architecture and encoder / decoder components.'}</p></article>
          {project.cover && <SourceFigure src={project.cover} alt={ko ? '클라우드 및 AI Week의 주제와 자료 작성자 이름이 담긴 원본 세미나 자료' : 'Original seminar materials showing cloud and AI Week topics and author credits'} caption={ko ? '원본 세미나 자료 · 행사 사진이 아닌 발표 자료 콜라주' : 'Original seminar slide collage; not an event photograph'} ko={ko} />}
        </section> : <>
        <section className="case-system" aria-labelledby="case-system-title"><div className="case-section-heading"><span>01</span><h2 id="case-system-title">{ko ? '처리 흐름과 구성 요소' : 'Processing flow and components'}</h2></div><p>{ko ? '프로젝트의 핵심 처리 흐름' : 'The project’s core processing flow'}</p><ol className="system-flow">{steps.map((step, index) => <li key={step}><span className="flow-index">{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong><p className="flow-description">{architecture?.[locale][index]}</p>{index < steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}</li>)}</ol><div className="architecture-lanes">{architecture?.lanes.map((lane) => <div key={lane.title}><span className="lane-connection" aria-hidden="true">↳</span><div><h3>{lane.title}</h3><p>{lane[locale]}</p></div></div>)}</div><p className="architecture-caption">{ko ? '공개된 구현 기록에 근거한 역할과 데이터 흐름입니다.' : 'Roles and data flow grounded in the published implementation notes.'}</p>{project.cover && <SourceFigure src={project.cover} alt={ko ? `${project.title} 원본 프로젝트 자료` : `${project.title} original project material`} caption={ko ? `${project.title} 원본 프로젝트 자료` : `${project.title} original project material`} ko={ko} />}{project.architectureImage && <SourceFigure src={project.architectureImage} alt={ko ? `${project.title} 원본 아키텍처 자료` : `${project.title} original architecture material`} caption={ko ? `${project.title} 원본 아키텍처 자료` : `${project.title} original architecture material`} ko={ko} />}</section></>}


        {project.category !== 'community' && <div className="case-end"><span>{project.title}</span><button type="button" onClick={onClose}>{ko ? '프로젝트 목록으로' : 'Back to projects'} <span aria-hidden="true">↙</span></button></div>}
      </div>
    </dialog>
  )
}
