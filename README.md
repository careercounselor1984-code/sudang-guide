# 차근차근 수당 길잡이

국민취업지원제도 Ⅰ유형 참여자를 위한 휴대폰용 안내 사이트입니다.
2026.1 업무매뉴얼과 공식 서비스 도움말을 참고한 검토용 안내이며, 2027년 기준은 반영하지 않았습니다.

## 운영

- HTML/CSS/JavaScript 정적 사이트로, GPT 구독이나 API 키 없이 실행됩니다.
- GitHub Pages: Settings → Pages → Deploy from a branch → main / (root).
- 실제 수당 신청은 고용24에서 진행합니다. 이 사이트가 활동 인정이나 지급 여부를 결정하지 않습니다.
- 기록장 데이터는 이용자 브라우저에 저장되며 사이트 서버에 업로드되지 않습니다.
- 주소가 바뀌면 기존 기록은 자동 이전되지 않습니다. 기존 사이트에서 백업 후 새 사이트에서 복원하세요.

## 자료

- 고용24 공식 PC 신청 가이드: https://www.work24.go.kr/cm/c/d/0180/retrieveSiteEasyDetailHpcm.do?tycd=E6T00&utzeGuidId=GUID000110
- assets/work24-*.png는 고용24 공식 PC 안내 화면입니다. 출처와 권리는 원 제공처에 있습니다.
- 제공받은 업무매뉴얼 원본, 내부 평가자료, 조사 작업자료는 이 저장소에 포함하지 않습니다.

## 수정

- faq-data.js: 질문 90개와 답변
- faq.js / faq.css: 질문 중심 화면
- visual-guide.js / visual-guide.css: 단계별 화면·서류 안내
- tracker.js / tracker-core.js / tracker.css: 선택 기록장

공식 규정과 메뉴가 변경되면 내용과 확인 범위를 갱신하세요.

- evidence.js / evidence.css: 증빙 만들기 17개 경로·80단계. 입사지원 파일 구성·기기별 PDF·응시확인·사이버교육·훈련·일경험 안내.
- 출석부·확인서 요청문과 파일 이름은 예시이며, 실제 발급 서류나 기관 공통 서식이 아닙니다.

- 프로그램소득 신고는 공식 PC 화면의 해당 입력란을 확대해 안내합니다. 작성 예시는 실제 입력·제출 화면과 구분합니다.
