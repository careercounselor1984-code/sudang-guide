/* Public official resources and document-content examples. No participant data. */
(()=>{
const g=window.Evidence.guides;
const faqBase='https://www.work.go.kr/cyberedu/cyb/customer/board/faq/retrieveBoardFaqDetail.do?brdItmNo=';
const picture=(src,title,caption,url)=>({src:'assets/screens/'+src,title,caption,url});
g.qnet.steps[1].pictures=[picture('qnet-issue-menu.png','① 확인서발급 신청을 눌러요','2026.11.20 촬영 · Q-Net 공개 PC 화면. 왼쪽 확인서발급 → 확인서발급 신청. 로그인 뒤 확인서 종류를 골라야 합니다.','https://www.q-net.or.kr/iss001.do?gId=&gSite=&id=iss00101')];
g.qnet.steps[2].title='자격구분·시험구분 다음에 시험응시확인서를 골라요.';
g.qnet.steps[2].text='국가기술자격 예시입니다. 실제 응시한 시험구분을 선택하고 확인서종류에서 시험응시확인서를 고르세요.';
g.qnet.steps[2].path=['자격구분: 국가기술자격 또는 본인 해당 구분','시험구분: 기능사·기능장·기사·기술사 등','확인서종류: 시험응시확인서','발급용도 입력 → 신청','본인이 응시한 시험 선택 → 선택신청'];
g.qnet.steps[2].warning='2026.11.20 실제 국가기술자격 화면 확인: 산업기사·서비스 분야는 기사 선택, 시험응시확인서는 전체출력 불가. 발급기준은 필기 시험일 익일부터, 실기 시험일 3일(휴·무일 제외) 후부터라고 표시됩니다. 국가전문자격 등 다른 구분에 이 기준을 일괄 적용하지 말고 본인 화면을 확인하세요.';
g.qnet.steps[2].pictures=[picture('qnet-exam-select.png','② 세 가지 선택란을 순서대로 골라요','2026.11.20 로그인 후 실제 화면 촬영. 개인 정보가 없는 선택란만 사용했습니다. 국가기술자격 → 기사 → 시험응시확인서는 예시 조합입니다.','https://www.q-net.or.kr/iss002.do?id=iss00201&gSite=Q&gId=')];
g.qnet.steps[2].samples=[samplePurpose()];
g.qnet.steps[3].pictures=[picture('qnet-print-button.png','③ 발급신청 내역의 인쇄를 눌러요','2026.11.20 실제 발급 후 확인한 버튼 부분입니다. 문서번호·시험 이력 등은 제외했습니다. 인쇄 후 열리는 팝업의 기기별 저장 화면은 별도입니다.','https://www.q-net.or.kr/iss003.do?id=iss00301&gSite=Q&gId=')];
g.qnet.steps[3].text='확인서발급 신청내역조회에서 신청한 시험응시확인서를 찾아 인쇄를 누릅니다. 새 창이 열리지 않으면 큐넷 공식 출력 안내를 확인하세요.';
function samplePurpose(){return {title:'발급용도는 이렇게 적을 수 있어요',fields:[['참여자 작성 예시','국민취업지원제도 구직활동 증빙 제출용']],note:'실제 발급 목적에 맞게 적습니다. 시험명·필기/실기·실제 응시일을 고른 뒤 선택신청을 진행하세요. 예시를 본인 목적과 무관하게 그대로 입력하지 마세요.'}}
g.chamber.steps[1].pictures=[picture('chamber-issue-faq.png','응시확인서 버튼이 아직 없을 때','2026.11.20 촬영 · 대한상공회의소 공식 FAQ. 응시확인서 발급 시점과 출력 경로를 확인하세요.','https://license.korcham.net/customer/faq.do?bigCate=14&searchType=title')];
g.cyber.steps[2].pictures=[picture('cyber-course.png','② 수료증: 발급가능 표시를 확인해요','2026.11.20 촬영 · 교육 목록의 실제 표시. 과정명·교육시간·발급 가능 여부를 함께 봅니다.','https://www.work.go.kr/cyberedu/main.do')];
g.cyber.steps[3].pictures=[picture('cyber-menu.png','③ 수강교육과정에서 학습해요','2026.11.20 촬영 · 공식 사이트맵의 마이페이지 메뉴. 강의를 들을 때는 수강교육과정, 수료증을 찾을 때는 수료이력조회입니다.','https://www.work.go.kr/cyberedu/cyb/sitemap/information/site/retrieveInformationSiteDetail.do')];
g.cyber.steps[4].text='마이페이지 → 수료이력조회에서 수강한 연도와 과정을 찾으세요. 수료증 인쇄·저장 버튼을 확인합니다.';
g.cyber.steps[4].pictures=[picture('cyber-menu.png','④ 수료이력조회를 눌러요','마이페이지 → 수료이력조회. 수강한 계정과 교육연도를 확인한 후 해당 과정을 찾으세요.','https://www.work.go.kr/cyberedu/cyb/sitemap/information/site/retrieveInformationSiteDetail.do')];
g.cyber.steps[5].pictures=[picture('cyber-certificate-2.png','수료증의 소속은 이렇게 확인해요','사이버진로교육센터 공식 FAQ 안내 이미지 · 로그인 후 발급 화면 캡처가 아닙니다.',faqBase+'39760'),picture('cyber-certificate-5.png','소속이 다르게 나올 때','공식 FAQ는 소속없음으로 인쇄해도 무방하다고 안내합니다. 소속을 바꾸려고 임의로 수강·수료를 취소하기 전에 센터에 문의하세요.',faqBase+'39760')];
g.cyber.steps[5].branches.push({id:'cyberhelp',label:'수료증·진도율·저장 오류 해결하기'});
const completionUrl='https://www.work.go.kr/cyberedu/cyb/mypage/course/complete/retrieveCourseCompleteList.do';
g.cyber.steps[4].text='마이페이지 → 수료이력조회에서 교육년도·과정명을 확인하세요. 수료한 과정의 수료증발급 칸에 인쇄·저장 버튼이 있습니다.';
g.cyber.steps[4].path=['교육년도: 수강한 연도 또는 전체','과정명·수료 상태 확인','수료증발급 칸 → 저장'];
g.cyber.steps[4].warning='2026.11.21 로그인 후 실제 버튼 확인. 수료취소하기는 증빙을 받는 버튼이 아닙니다. 신청완료·수강중 화면을 수료증으로 제출하지 마세요.';
g.cyber.steps[5].title='소속 선택 창에서 다시 저장을 눌러요.';
g.cyber.steps[5].text='목록의 저장을 누르면 수료증 소속선택 창이 열립니다. 표시된 소속 또는 소속없음을 확인한 후 창 안의 저장을 누르세요.';
g.cyber.steps[5].path=['목록의 저장','수료증 소속선택 창','표시된 소속 또는 소속없음 확인','창 안의 저장'];
g.cyber.steps[5].warning='소속을 바꾸려고 수료를 임의로 취소하지 마세요. 최초 출력 이후 소속변경 버튼이 없어질 수 있습니다. 수정이 꼭 필요하면 센터에 문의합니다.';
g.cyber.steps.splice(6,0,
 {title:'수료증 뷰어가 열리면 내용을 확인해요.',text:'이번 확인에서는 저장 뒤 Crownix 수료증 뷰어가 열렸습니다. 이름·과정명·교육시간·수료일을 확인하고, 출력이 필요하면 위쪽 프린터 모양의 인쇄를 누르세요.',path:['새 창의 수료증 내용 확인','수료일과 발급일 구분','뷰어 위쪽 프린터 모양 → 인쇄'],warning:'조회한 과정을 다시 발급해도 수료일이 오늘로 바뀌는 것은 아닙니다. 발급일만 보고 이번 회차 활동으로 판단하지 마세요.'},
 {title:'최종 파일을 열어본 뒤 제출해요.',text:'PC에 저장·실행하여 출력하라는 안내가 나오면 센터의 공식 출력 절차를 확인하세요. 휴대폰에서 진행이 안 되면 PC를 이용하거나 센터에 파일 발급 방법을 문의합니다.',path:['센터 안내에 맞게 최종 문서 받기','실제 PDF·문서가 열리는지 확인','이름·과정·교육시간·수료일 확인','고용24 첨부 후 제출 상태 확인'],warning:'저장 버튼을 누른 사실만으로 PDF 파일 확보나 고용24 제출이 완료된 것은 아닙니다. 실행용 파일·웹주소를 증빙 PDF 대신 첨부하지 마세요. 이 환경에서는 뷰어와 증명서 생성 완료 안내까지 확인했으며 최종 파일 다운로드·실행·PDF 변환은 확인하지 못했습니다.',branches:[{id:'filehelp',label:'파일 찾기와 첨부 전 점검'},{id:'cyberhelp',label:'수료증 저장·출력 오류 안내'}]}
);
delete g.cyber.steps[5].file;
g.cyber.steps[5].branches=g.cyber.steps[5].branches.filter(b=>b.id!=='pdf');
for(const s of g.cyber.steps.slice(4,7))s.basis='사이버진로교육센터 로그인 후 실제 화면 2026.11.21 확인';
g.cyber.steps[7].basis='2026.11.21 뷰어·증명서 생성 완료 안내까지 확인. 최종 파일 다운로드·실행·PDF 변환은 미확인';
g.cyber.steps[7].warning='저장 버튼을 누른 사실만으로 파일 확보나 고용24 제출이 완료된 것은 아닙니다. 실행용 파일·웹주소를 증빙 PDF 대신 첨부하지 마세요.';
const cyberQuestion=window.FAQ_DATA.find(q=>q.id==='Q54');
cyberQuestion.answer='한국고용정보원 사이버진로교육센터에서 수강·수료한 뒤 마이페이지 → 수료이력조회로 갑니다. 해당 과정의 저장 → 소속 확인 → 저장 순서로 진행하세요.';
cyberQuestion.warning='온라인 강의를 아무거나 듣는다고 모두 인정되지 않습니다. 저장 뒤 뷰어가 열릴 수 있으므로 실제 제출할 문서 파일까지 확보했는지 확인하세요.';
cyberQuestion.basis='O20·M01 198 / 발급 버튼 2026.11.21 실제 확인·활동 인정 조건은 개별 확인';
const historyQuestion=window.FAQ_DATA.find(q=>q.id==='Q92');
historyQuestion.answer='완료한 과정의 수료증은 마이페이지 → 수료이력조회에서 찾습니다. 해당 과정의 수료증발급 칸에 인쇄·저장 버튼이 있습니다.';
historyQuestion.actions=['교육년도·과정명과 수료 상태 확인','수료증발급 칸의 저장 누르기','소속 선택 창에서 소속 확인 후 다시 저장'];
historyQuestion.warning='수료취소하기는 증빙을 받는 버튼이 아닙니다. 파일을 받으려다가 수료를 취소하지 마세요. 미수료·미발급 과정과 새 창 차단을 구분합니다.';
historyQuestion.basis='O20 / 로그인 후 수료이력·저장창 2026.11.21 실제 확인';
historyQuestion.needsConfirm=false;
window.FAQ_DATA.push({id:'Q103',question:'수료증 저장을 눌렀는데 파일 대신 뷰어가 열려요.',category:'learn',answer:'저장 뒤 수료증 뷰어가 열릴 수 있습니다. 문서 내용을 확인하고, 출력이 필요하면 뷰어 위쪽 프린터 모양의 인쇄를 누르세요.',actions:['뷰어의 본인 이름·과정·교육시간·수료일 확인','위쪽 프린터 모양 인쇄 버튼 확인','PC 출력 안내를 따라 최종 문서 파일을 확보한 뒤 열어보기'],warning:'PC에 저장·실행하라는 안내가 나오면 센터의 공식 출력 절차를 확인하세요. 실행용 파일이나 웹주소를 고용24 증빙 PDF 대신 첨부하지 마세요.',basis:'O20 / 뷰어·증명서 생성 완료 안내 2026.11.21 확인. 최종 다운로드·실행·PDF 변환 미확인',needsConfirm:false,evidence:'cyber',route:null,image:null,visual:''});
const sample=(title,fields,note)=>({title,fields,note});
const hrdSource='https://play.google.com/store/apps/details?id=kr.go.hrd.app&hl=ko';
g.training.steps[3].pictures=[picture('hrd-home.webp','공식 앱: QR코드·비콘·신호 중 기관이 안내한 방식을 눌러요','한국고용정보원이 공식 Google Play에 게시한 화면, 2026.11.20 확인. 설치·사용은 본인 훈련기관의 출결 방식에 맞춥니다.',hrdSource)];
g.training.steps[4].pictures=[picture('hrd-qr.webp','QR 출결: 위치·카메라와 실제 훈련장소를 확인해요','공식 앱스토어 제공 안내 이미지. 일부 HRD-Net 화면이 포함되어 최신 앱의 모든 버튼과 같다는 뜻은 아닙니다. 실제 입실·퇴실과 당일 기록은 본인 앱에서 확인하세요.',hrdSource),picture('hrd-beacon.webp','비콘 출결: 위치·블루투스 조건을 확인해요','공식 앱스토어 제공 안내 이미지. 현장 기기·과정 설정은 학원 담당자에게 확인하세요.',hrdSource)];
g.training.steps[1].samples=[sample('훈련 참여확인서에서 찾을 내용',[['이름','본인 이름'],['과정명·기관','실제 수강 과정·발급 학원'],['전체 훈련기간','과정의 시작일~종료일'],['참여 사실·기관 확인','실제 수강 사실과 발급기관 확인']],'내용을 찾는 예시입니다. 이 화면을 증빙으로 제출하지 마세요. 학원이 발급한 자료를 받습니다.')];
g.training.steps[2].samples=[sample('회차별 출석부에서 찾을 내용',[['이번 활동기간 예시','11월 6일~12월 5일'],['11월 출석부','11월 6일~30일의 훈련 일정·출결 확인'],['12월 출석부','12월 1일~5일의 훈련 일정·출결 확인'],['해당 회차 집계','예정일·실제 출석·지각·조퇴·외출·결석']],'두 달 자료를 받되 회차 밖 날짜를 섞지 않습니다. 월별 출석부만 나오면 학원에 해당 회차 집계를 요청하세요.')];
g.experience.steps[1].samples=[sample('일경험 서류에서 찾을 내용',[['참여자·사업명','본인 이름과 일경험 사업'],['운영기관·참여기업','발급 담당자와 확인 기관'],['참여기간·이번 회차','전체 기간과 회차 내 실제 참여를 구분'],['출결·활동자료','예정일·실제 참여일 또는 합의한 활동일지·결과물']],'전국 공통 서식이 아닙니다. 사업별 발급기관과 확인자료를 운영기관에 문의하세요.')];
g.qnet.steps[3].samples=[sample('최종 파일에서 확인할 내용',[['서류 제목','시험응시확인서'],['본인·시험','이름·시험명·회차'],['실제 응시일','이번 회차의 활동일과 대조'],['발급기관','해당 시험 주관기관 확인']],'시험접수확인서·수험표와 구별하세요. 이 예시는 실제 확인서가 아닙니다.')];
g.cyberhelp={name:'교육 수료·저장 문제 해결',icon:'?',sub:'진도율·수료증·다운로드가 안 될 때',steps:[
 {title:'어느 단계에서 막혔나요?',text:'진도가 안 오르는 문제와 수료증 파일이 저장되지 않는 문제를 나눠 확인하세요.',path:['수강한 계정인지 확인','해당 교육연도·과정 확인','수료 상태와 미완료 조건 확인','파일 발급·저장 오류 확인'],warning:'수료가 취소될 수 있으므로 소속 수정 때문에 임의로 수강 취소·재신청부터 하지 마세요.'},
 {title:'PDF 생성 시간 초과가 나오면 공식 도움말을 확인해요.',text:'센터 공식 FAQ는 PC에서 Chrome·Edge 사용을 안내합니다. 계속 오류가 나면 오류 문구·과정명·발생 시각을 정리해 센터에 문의하세요.',path:['현재 오류 문구 확인','PC Chrome·Edge에서 다시 확인','계속되면 센터에 오류 전달'],pictures:[picture('cyber-error-3.png','공식 도움말: 브라우저 확인','공식 FAQ의 PC 안내 이미지입니다. 휴대폰에서 모두 해결된다는 의미는 아닙니다.',faqBase+'56826'),picture('cyber-error-5.png','계속 오류가 나면 센터에 문의해요','공식 FAQ 안내. 수당 지정일과 증빙 보완은 담당 상담사에게도 별도로 알려주세요.',faqBase+'56826')],warning:'공식 FAQ에는 PDF 뷰어 관련 조치도 있습니다. 업무용 PC의 프로그램 제거·재설치는 관리자와 상의하고, 먼저 오류 내용을 센터에 전달하세요.'},
 {title:'발급 문제와 제출 문제를 각각 알려주세요.',text:'교육센터에는 수료·파일 발급 문제를, 담당 상담사에게는 지정일·제출·보완 문제를 알립니다. 파일이 발급되지 않았는데 신청완료 화면을 수료증이라고 제출하지 마세요.',path:['센터: 과정·수료 상태·오류 문구','상담사: 지정일·현재 상황·확인자료','안내받은 보완자료와 제출방법 확인'],copy:'[과정명]을 [수료일]에 수료했으나 [오류 문구]로 수료증 저장이 안 됩니다. [기기·브라우저]를 사용했고 [시각]에 발생했습니다. 수료 상태 확인과 파일 발급 방법을 안내 부탁드립니다. 수당 담당 상담사에게도 지정일 전 상황을 전달하겠습니다.',branches:[{id:'cyber',label:'수료증 준비 순서로 돌아가기'},{id:'filehelp',label:'받은 파일을 찾거나 첨부하기'}]}
]};
g.filehelp={name:'파일 찾기·제출 전 확인',icon:'▤',sub:'다운로드·잘림·누락·첨부 실수 예방',steps:[
 {title:'받은 파일이 휴대폰 어디에 있는지 찾아요.',text:'안드로이드는 내 파일·Files의 다운로드, 아이폰은 파일 앱의 최근 항목·둘러보기를 확인하세요. 저장할 때 고른 위치가 우선입니다.',path:['안드로이드: 내 파일·Files → 다운로드','아이폰: 파일 → 최근 항목 또는 둘러보기','iCloud Drive 또는 나의 iPhone → Downloads 확인','파일을 눌러 실제 내용 열기'],warning:'이메일로 보낸 상태, 클라우드 링크만 복사한 상태, 다운로드가 끝나지 않은 상태를 실제 파일 저장과 혼동하지 마세요.',branches:[{id:'android',label:'안드로이드 PDF 저장 순서'},{id:'iphone',label:'아이폰 PDF 저장 순서'}]},
 {title:'PDF를 열어서 마지막 페이지까지 봐요.',text:'파일 이름만 보지 말고 문서를 열어 내용을 확인하세요. 지원 확인서에는 실제 지원 사실, 공고에는 지원한 직무와 모집내용이 보여야 합니다.',path:['열리는지·빈 페이지가 아닌지','모든 페이지와 상세 모집내용이 보이는지','이름·회사·시험·과정·날짜가 맞는지','다른 회사 공고나 이전 회차 파일이 아닌지'],samples:[sample('입사지원 2건을 한 쌍씩 대조',[['확인서의 A회사 지원','A회사에 실제 지원한 공고 PDF'],['확인서의 B회사 지원','B회사에 실제 지원한 공고 PDF'],['한 확인서에 두 건 포함','확인서 1개 + 공고 2개 = 기본 예시 3개']],'전산 연계·추가 자료·파일 합치기는 기관 안내에 따릅니다. 파일 개수만 맞추고 끝내지 마세요.')]},
 {title:'첨부한 뒤 목록을 한 번 더 확인해요.',text:'고용24의 이번 회차 신청서에서 실제 첨부된 파일 이름을 하나씩 확인합니다. 파일 선택과 첨부 완료, 저장과 제출 완료는 각각 다릅니다.',path:['이번 회차 신청서 확인','첨부 등록 뒤 파일 목록 확인','빠진 공고·다른 파일 없는지 확인','제출 후 실제 신청 상태 확인'],image:7,warning:'확장자·용량·개수 제한은 실제 신청 화면 안내를 따르세요. 오류가 나면 오류 문구와 파일 크기를 확인하고 지정일 전에 담당 상담사에게 알리세요.'}
]};
window.FAQ_DATA.push(
 {id:'Q100',question:'수료증 저장 중 PDF 생성 시간 초과 오류가 나요.',category:'learn',answer:'수료 여부를 먼저 확인한 뒤 PC Chrome·Edge로 확인하고, 계속되면 교육센터에 문의하세요.',actions:['과정명·교육연도·수료 상태 확인','오류 문구·기기·브라우저 정리','교육센터와 수당 담당 상담사에게 각각 상황 전달'],warning:'파일 발급 오류와 수당 제출은 별개입니다. 오류가 난 상태를 제출 완료로 생각하지 마세요.',basis:'O18 / 공식 FAQ 2026.11.20 확인',needsConfirm:false,route:'cyberhelp',evidence:'cyberhelp',image:null,visual:''},
 {id:'Q101',question:'수료증 소속이 다르면 다시 수강해야 하나요?',category:'learn',answer:'사이버진로교육센터 공식 FAQ는 소속없음으로 수료증을 인쇄해도 무방하다고 안내합니다.',actions:['수료증의 본인 이름·과정·수료일 확인','소속 수정이 필요하면 인쇄 전 센터 안내 확인','이미 출력했다면 수강 취소 전에 센터에 문의'],warning:'공식 FAQ는 수료 후 최초 인쇄 전 1회 소속변경이 가능하다고 설명합니다. 수강·수료를 임의 취소하지 마세요.',basis:'O19 / 공식 FAQ 2026.11.20 확인',needsConfirm:false,route:'cyber',evidence:'cyber',image:null,visual:''},
 {id:'Q102',question:'받은 PDF가 어디 있는지 모르겠어요. 파일이 맞는지도 확인하고 싶어요.',category:'proof',answer:'휴대폰의 파일 앱에서 다운로드를 찾아 직접 열고, 내용과 날짜를 확인하세요.',actions:['내 파일·Files 또는 아이폰 파일 앱에서 찾기','빈 페이지·잘림·다른 회차 파일이 아닌지 확인','고용24 첨부 목록과 제출 상태 확인'],warning:'메일 전송·다운로드·첨부·제출은 각각 다른 단계입니다. PDF 이름만 보고 끝내지 마세요.',basis:'O09·O10·O01 / 기기별 파일 안내와 고용24 가이드',needsConfirm:false,route:'filehelp',evidence:'filehelp',image:null,visual:''}
);
})();
