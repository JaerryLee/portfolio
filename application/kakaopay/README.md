# 카카오페이 데이터 엔지니어 지원 서류

- 제출 문서: `career.html` — 경력기술서, A4 3쪽
- 포트폴리오: 경력기술서에 연결한 [기존 포트폴리오 사이트](https://jaerrylee.github.io/portfolio/)
- `portfolio.html`: 기존 작성 초안으로 보관하며 제출 대상에서 제외합니다.

`career.html`은 스타일을 포함하는 독립 파일입니다. 인터넷 연결이나 웹 개발 서버 없이 브라우저에서 열 수 있으며, 외부 포트폴리오 링크를 열 때는 인터넷 연결이 필요합니다.

## 직접 수정

VS Code에서 HTML 파일을 열어 `PAGE 1`, `PAGE 2` 등의 주석을 찾으세요. 해당 `<section class="page">`의 제목·문장을 수정하면 됩니다. 디자인은 파일 상단 `<style>`에서 수정합니다. 화면상 편집 기능은 없으므로 HTML 소스를 저장한 뒤 브라우저를 새로고침하세요.

경력기술서는 프로젝트별로 직무와 연결되는 핵심 경험에 집중합니다. LLM Ops의 관측 데이터 수집·연계, Commerce의 Redis·Celery 비동기 처리, Dainos의 온톨로지 기반 Knowledge Base와 지식화 작업 처리, LG CNS의 AWS DMS PoC를 담았습니다. AGP Note는 사이드 프로젝트로, 호랑이사진관과 NE:XT Rendi는 대학 시절 프로젝트로 구분했습니다. 프로젝트 전체 소개는 연결한 기존 포트폴리오 사이트에서 확인합니다.

## PDF 저장

1. Chrome에서 HTML을 엽니다.
2. 상단 **인쇄 / PDF로 저장** 버튼 또는 `Cmd + P`를 누릅니다.
3. 대상: PDF로 저장 / 용지: A4 / 세로 / 배율: 100% / 여백: 없음.
4. 머리글과 바닥글은 끄고, 배경 그래픽은 켭니다.
5. 인쇄 미리보기에서 경력기술서 3쪽인지 확인한 뒤 저장합니다.

본문을 많이 추가하면 페이지가 늘어날 수 있습니다. 고정 높이로 숨기지 않았으므로 넘친 내용이 잘려 사라지지는 않습니다. 내용이 늘어나면 새 `<section class="page">`로 분리하고 페이지 번호도 수정하세요.

추천 파일명: `이정재_경력기술서_카카오페이.pdf`.

## 구성과 표기 기준

- 1쪽: 경력 요약, LLM Ops, Dainos.
- 2쪽: VAETKI Commerce, LG CNS, AGP Note.
- 3쪽: 호랑이사진관, NE:XT Rendi, 주요 기술 스택, 포트폴리오 링크.
- NC AI 직무는 `AI Engineer`로 표기합니다.
- LLM Ops는 초기 Langfuse·Grafana 사용 후 ClickStack으로 전환한 경험을 담았습니다.
- Dainos와 AWS DMS 마이그레이션은 PoC 범위로, AGP Note는 사이드 프로젝트로 구분합니다.
- 상세 시작·종료월이 확인되지 않은 프로젝트는 연도만 표기합니다. 처리량·지연·개선율은 확인된 수치가 있을 때 추가합니다.
- 제목 25pt, 프로젝트 제목 15pt, 본문 10pt, 기간·역할·기술 스택 9pt를 기본으로 사용합니다.

작성 근거: `docs/company-experience.md`, `src/projects.ts`, `src/App.tsx`, 로컬 기술 블로그의 Dainos·VAETKI·LLM Ops 설계 글, 대화에서 확인한 AGP Note 설명.
