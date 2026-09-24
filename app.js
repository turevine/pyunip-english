/* =========================================================
   앱 로직 (데이터는 data.js 에 있음)
   ========================================================= */

// ---- 탭 전환 ----
function switchTab(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('nav.tabbar button').forEach(b=>
    b.classList.toggle('active', b.dataset.screen===name));
  if(name==='calendar') atOpen();
  window.scrollTo(0,0);
}

// ---- 단어카드 ----
let wIdx = 0;
let wFilter = 'all';              // 'all' 또는 지문번호(1~8)
let wDeck = WORDS.slice();        // 현재 카드 순서 (섞기 대상)

function wordsOf(filter){
  return filter==='all' ? WORDS.slice() : WORDS.filter(w=>w.p===filter);
}
function renderWordFilter(){
  const chips = [{ k:'all', label:'전체', n:WORDS.length }];
  for(let i=1;i<=PASSAGES.length;i++) chips.push({ k:i, label:'지문 '+i, n:wordsOf(i).length });
  document.getElementById('word-filter').innerHTML = chips.map(c=>{
    const arg = c.k==='all' ? "'all'" : c.k;
    return `<button class="wf-chip ${wFilter===c.k?'on':''}" onclick="selectWordFilter(${arg})">${c.label}<span class="wf-n">${c.n}</span></button>`;
  }).join('');
}
function selectWordFilter(f){
  wFilter = f;
  wDeck = wordsOf(f);
  wIdx = 0;
  renderWordFilter();
  renderCard();
}
function renderCard(){
  const card = document.getElementById('flashcard');
  // 카드를 넘길 때는 애니메이션 없이 즉시 앞면으로 (다음 카드 해석이 잠깐 보이는 문제 방지)
  card.classList.add('no-anim');
  card.classList.remove('flipped');
  void card.offsetWidth;      // 리플로우로 위치 확정 후 애니메이션 재활성화
  card.classList.remove('no-anim');
  if(wDeck.length===0){
    document.getElementById('fc-word').textContent = '단어 없음';
    document.getElementById('fc-pos').textContent = '';
    document.getElementById('fc-meaning').textContent = '이 지문엔 아직 단어카드가 없어요.';
    document.getElementById('fc-example').textContent = 'data.js 의 WORDS_BY_PASSAGE 에 추가해 주세요.';
    document.getElementById('fc-count').textContent = '0 / 0';
    return;
  }
  const w = wDeck[wIdx];
  document.getElementById('fc-word').textContent = w.word;
  document.getElementById('fc-pos').textContent = w.pos;
  document.getElementById('fc-meaning').textContent = w.meaning;
  document.getElementById('fc-example').textContent = w.example;
  document.getElementById('fc-count').textContent = `${wIdx+1} / ${wDeck.length}`;
}
function flipCard(){ if(wDeck.length) document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard(){ if(!wDeck.length) return; wIdx=(wIdx+1)%wDeck.length; renderCard(); }
function prevCard(){ if(!wDeck.length) return; wIdx=(wIdx-1+wDeck.length)%wDeck.length; renderCard(); }
function shuffleWords(){
  if(!wDeck.length) return;
  for(let i=wDeck.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [wDeck[i],wDeck[j]]=[wDeck[j],wDeck[i]]; }
  wIdx=0; renderCard();
}

// ---- 지문 목록/읽기 ----
function passageItemHTML(p, onclick){
  const empty = p.sentences.length===0;
  return `<div class="passage-item ${empty?'empty':''}" onclick="${onclick}">
      <div class="p-num">${p.id}</div>
      <div class="p-body">
        <div class="p-title">${p.title}</div>
        <div class="p-meta">${empty ? '아직 비어있음 · '+p.meta : p.meta}</div>
      </div>
      <div class="chev">›</div>
    </div>`;
}
function renderPassageList(){
  document.getElementById('passage-list').innerHTML =
    PASSAGES.map(p=>passageItemHTML(p, `openPassage(${p.id})`)).join('');
}
const SUBHEAD = '(소제목)';
function isSubhead(s){ return typeof s==='string' && s.startsWith(SUBHEAD); }
function sentSpans(arr){
  return arr.map(s=>{
    if(isSubhead(s)) return `<div class="sub-head">${s.slice(SUBHEAD.length).trim()}</div>`;
    return `<span class="sent" onclick="this.classList.toggle('on')">${s}</span>`;
  }).join(' ');
}
function openPassage(id){
  const p = PASSAGES.find(x=>x.id===id);
  document.getElementById('passage-list').classList.add('hidden');
  document.getElementById('passage-reader').classList.remove('hidden');
  document.getElementById('pr-title').textContent = p.title;
  const textEl = document.getElementById('pr-text');
  const extraWrap = document.getElementById('pr-extra');
  if(p.sentences.length===0){
    textEl.innerHTML = `<span style="color:var(--muted)">아직 지문이 없어요. data.js 의 PASSAGES에 문장을 넣어주세요.</span>`;
    extraWrap.classList.add('hidden');
  } else {
    textEl.innerHTML = sentSpans(p.sentences);
    if(p.extra){
      extraWrap.classList.remove('hidden');
      document.getElementById('pr-extra-label').textContent = p.extra.title;
      document.getElementById('pr-extra-text').innerHTML = sentSpans(p.extra.sentences);
    } else extraWrap.classList.add('hidden');
  }
  window.scrollTo(0,0);
}
function closePassage(){
  document.getElementById('passage-reader').classList.add('hidden');
  document.getElementById('passage-list').classList.remove('hidden');
}

// ---- 문장분석 ----
let anPool = [];   // [{key, en, source}]
let anIdx = 0, anRevealed = false, anShuffle = false;

function passagePool(p){
  const out = [];
  p.sentences.forEach((en,i)=>{ if(!isSubhead(en)) out.push({ key:`${p.id}-${i}`, en, source:`지문 ${p.id}` }); });
  if(p.extra) p.extra.sentences.forEach((en,i)=>{
    if(!isSubhead(en)) out.push({ key:`${p.id}-${p.sentences.length+i}`, en, source:`지문 ${p.id} · 보충` });
  });
  return out;
}
function renderAnPassageList(){
  document.getElementById('an-passage-list').innerHTML =
    PASSAGES.map(p=>passageItemHTML(p, `startPassageAnalyze(${p.id})`)).join('');
}
function startPassageAnalyze(id){
  const p = PASSAGES.find(x=>x.id===id);
  if(p.sentences.length===0){ alert('이 지문은 아직 문장이 없어요.'); return; }
  anPool = passagePool(p); anShuffle = false; anIdx = 0;
  openAnalyzeViewer();
}
function startShuffle(){
  let pool = [];
  PASSAGES.forEach(p=>{ if(p.sentences.length) pool = pool.concat(passagePool(p)); });
  if(pool.length===0){ alert('아직 분석할 문장이 없어요. 지문을 먼저 채워주세요.'); return; }
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  anPool = pool; anShuffle = true; anIdx = 0;
  openAnalyzeViewer();
}
function openAnalyzeViewer(){
  document.getElementById('an-select').classList.add('hidden');
  document.getElementById('an-viewer').classList.remove('hidden');
  document.getElementById('an-reshuffle').classList.toggle('hidden', !anShuffle);
  buildJumpOptions();
  renderSentence(); window.scrollTo(0,0);
}
function buildJumpOptions(){
  document.getElementById('an-jump').innerHTML =
    anPool.map((_,i)=>`<option value="${i}">${i+1} / ${anPool.length}</option>`).join('');
}
function goToSentence(i){ anIdx=+i; renderSentence(); window.scrollTo(0,0); }
function closeAnalyze(){
  document.getElementById('an-viewer').classList.add('hidden');
  document.getElementById('an-select').classList.remove('hidden');
}
function renderSentence(){
  const item = anPool[anIdx];
  document.getElementById('an-source').textContent = anShuffle ? '🔀 셔플 · '+item.source : item.source;
  document.getElementById('an-jump').value = anIdx;
  document.getElementById('an-en').textContent = item.en;
  anRevealed = false; applyReveal();
}
function applyReveal(){
  const item = anPool[anIdx];
  const detail = document.getElementById('an-detail');
  const badges = document.getElementById('an-badges');
  const a = ANALYSIS[item.key];
  if(!anRevealed){
    detail.classList.add('hidden');
    badges.classList.add('hidden');
    document.getElementById('an-reveal').textContent = '분석 · 해석 보기';
    return;
  }
  document.getElementById('an-reveal').textContent = '접기';
  // 문장 위 배지: 형식 / 시제
  if(a && (a.form || a.tense)){
    badges.innerHTML =
      (a.form ? `<span class="an-badge form">📐 ${a.form}</span>` : '') +
      (a.tense ? `<span class="an-badge tense">⏳ ${a.tense}</span>` : '');
    badges.classList.remove('hidden');
  } else {
    badges.classList.add('hidden');
  }
  detail.classList.remove('hidden');
  if(a){
    detail.innerHTML = `
      ${a.chips ? `<div class="chip-row">${a.chips.map(([r,t])=>`<span class="chip"><b>${r}</b> ${t}</span>`).join('')}</div>` : ''}
      <div class="analyze-block"><h4>구조 분석</h4><p>${a.structure||''}</p></div>
      <div class="analyze-block"><h4>해석</h4><p>${a.trans||''}</p></div>`;
  } else {
    detail.innerHTML = `<div class="empty-note">✍️ 아직 분석 전이에요.<br>공부하고 나서 <b>data.js</b> 의 <b>ANALYSIS["${item.key}"]</b> 에 채워넣으면 여기에 표시됩니다.</div>`;
  }
}
function toggleAnalyze(){ anRevealed=!anRevealed; applyReveal(); }
function nextSentence(){ anIdx=(anIdx+1)%anPool.length; renderSentence(); window.scrollTo(0,0); }
function prevSentence(){ anIdx=(anIdx-1+anPool.length)%anPool.length; renderSentence(); window.scrollTo(0,0); }

// ---- 문법 ----
function renderGrammar(){
  const el = document.getElementById('grammar-list');
  if(GRAMMAR.length === 0){
    el.innerHTML = `<div class="empty-note">✍️ 아직 문법 정리가 비어 있어요.<br>공부한 문법을 <b>data.js</b> 의 <b>GRAMMAR</b> 배열에 추가하면 여기에 표시됩니다.</div>`;
    return;
  }
  el.innerHTML = GRAMMAR.map((g,i)=>{
    const gid = g.id || i;
    return `
    <div class="grammar-item" id="g-${gid}">
      <div class="grammar-head" onclick="document.getElementById('g-${gid}').classList.toggle('open')">
        <span class="g-title">${g.title}</span>
        ${g.tag ? `<span class="g-tag">${g.tag}</span>` : ''}
      </div>
      <div class="grammar-body">
        <div class="g-text">${g.body || ''}</div>
        ${(g.eg||[]).map(([label,en,ko])=>`<div class="eg"><b>${label}</b><br>${en}<span class="ko">${ko}</span></div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

// 문장분석 → 문법 탭의 특정 항목(및 세부 위치)으로 점프 (위키링크)
function gotoGrammar(id, subId){
  switchTab('grammar');
  const item = document.getElementById('g-'+id);
  if(!item) return;
  item.classList.add('open');
  setTimeout(()=>{
    const target = (subId && document.getElementById(subId)) || item;
    target.scrollIntoView({ behavior:'smooth', block:'center' });
    if(subId){
      target.classList.remove('flash');
      void target.offsetWidth; // 애니메이션 재시작용 리플로우
      target.classList.add('flash');
    }
  }, 350);
}

// ---- 출석 (하루 목표 문장 수 체크 · 기록은 이 기기 localStorage) ----
const AT_KEY = 'pyunip-attendance-v1';
const WEEKDAY = ['일','월','화','수','목','금','토'];
let atLog = {};                   // { 'YYYY-MM-DD': 그날 한 문장 수 }
let atStorageOK = true;
let atToday = null;               // 마지막으로 그린 '오늘' (자정 넘김 감지용)
let atSel = null;                 // 체크 카드에 보이는 날짜
let atCount = STUDY_PLAN.daily;   // 스테퍼 값
let atView = null;                // 달력에 보이는 달의 1일

// 날짜는 항상 로컬(한국) 기준 문자열로 — toISOString은 UTC라 새벽에 하루 밀림
function ymd(d){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function parseYmd(s){ const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); }
function dayDiff(a,b){ return Math.round((parseYmd(b)-parseYmd(a))/86400000); }
function mdLabel(s){ const d=parseYmd(s); return `${d.getMonth()+1}/${d.getDate()}`; }

function atLoad(){
  try{ atLog = JSON.parse(localStorage.getItem(AT_KEY)||'{}') || {}; }
  catch(e){ atLog = {}; atStorageOK = false; }
}
function atPersist(){
  try{ localStorage.setItem(AT_KEY, JSON.stringify(atLog)); atStorageOK = true; }
  catch(e){ atStorageOK = false; }
}
function atDone(){   // 플랜 시작일 이후 기록만 (target이 시작일 기준 남은 문장 수라서)
  return Object.entries(atLog).reduce((s,[d,n])=> d>=STUDY_PLAN.start ? s+n : s, 0);
}
function atStreak(){
  const d = new Date();
  if(!atLog[ymd(d)]) d.setDate(d.getDate()-1);   // 오늘 아직 안 했으면 어제부터 셈 (오늘 하면 이어짐)
  let n = 0;
  while(atLog[ymd(d)]){ n++; d.setDate(d.getDate()-1); }
  return n;
}
function atWeek(){
  const d = new Date(); d.setDate(d.getDate()-d.getDay());   // 이번 주 일요일부터
  let s = 0;
  for(let i=0;i<7;i++){ s += atLog[ymd(d)]||0; d.setDate(d.getDate()+1); }
  return s;
}

function renderAtSummary(){
  const P = STUDY_PLAN, today = ymd(new Date());
  const done = atDone(), left = Math.max(0, P.target-done);
  const total = dayDiff(P.start, P.end)+1;
  // 예정선: 어제까지 고르게 갔을 때 (오늘 체크하면 오늘 몫까지) — 아침부터 '뒤처짐'이 뜨지 않게
  const elapsed = Math.min(total, Math.max(0, dayDiff(P.start, today) + (atLog[today] ? 1 : 0)));
  const expected = Math.min(P.target, Math.round(P.target*elapsed/total));
  const daysLeft = Math.max(0, dayDiff(today, P.end) + (atLog[today] ? 0 : 1));
  const need = left===0 ? 0 : daysLeft>0 ? Math.ceil(left/daysLeft) : left;
  const dday = dayDiff(today, P.end);

  document.getElementById('at-done').textContent = done;
  document.getElementById('at-target').textContent = `/ ${P.target}문장`;
  document.getElementById('at-dday').textContent = dday>0 ? `완주까지 D-${dday}` : dday===0 ? '오늘이 D-DAY' : `목표일 D+${-dday}`;
  document.getElementById('at-plan').textContent = `${mdLabel(P.start)} → ${mdLabel(P.end)} · 하루 ${P.daily}문장 · 8지문 완주`;
  document.getElementById('at-fill').style.width = Math.min(100, done/P.target*100)+'%';
  document.getElementById('at-mark').style.left = (expected/P.target*100)+'%';

  const diff = done-expected;
  let status;
  if(left===0) status = '🎉 8지문 완주! 이제 무한반복 모드로';
  else if(dday<0) status = `목표일은 지났지만 ${left}문장 남았어요. 끝까지 가 봐요`;
  else if(diff>0) status = `🔥 예정보다 ${diff}문장 앞서는 중`;
  else if(diff===0) status = '👍 딱 예정대로 가는 중';
  else status = `예정보다 ${-diff}문장 뒤 — 괜찮아요, 하루 ${need}문장이면 ${mdLabel(P.end)} 완주`;
  document.getElementById('at-status').textContent = status;

  document.getElementById('at-streak').textContent = atStreak()+'일';
  document.getElementById('at-need').textContent = need;
  document.getElementById('at-week').textContent = atWeek();
}

function renderAtCheck(){
  const P = STUDY_PLAN, today = ymd(new Date()), d = parseYmd(atSel), saved = atLog[atSel];
  document.getElementById('at-date').textContent =
    `${d.getMonth()+1}월 ${d.getDate()}일 (${WEEKDAY[d.getDay()]})` + (atSel===today ? ' · 오늘' : '');
  document.getElementById('at-count').textContent = atCount;
  document.getElementById('at-quick').innerHTML = [P.daily, 10, 15, 20].map(n=>
    `<button class="${atCount===n?'on':''}" onclick="atSet(${n})">${n}</button>`).join('');

  const btn = document.getElementById('at-btn');
  const same = saved && saved===atCount;
  btn.textContent = atCount===0 ? (saved ? '🗑 이 날 기록 지우기' : '0문장은 저장 안 돼요')
    : same ? `✅ ${saved}문장 출석 완료` : saved ? '✏️ 수정 저장' : '✅ 출석체크';
  btn.classList.toggle('done', !!same);
  btn.disabled = (atCount===0 && !saved) || !!same;

  let note;
  if(!atStorageOK) note = '⚠️ 이 브라우저에선 기록이 저장되지 않아요.';
  else if(same && saved>=P.daily) note = `목표 ${P.daily}문장 달성 🔥 더 했으면 숫자를 올려서 다시 저장하세요.`;
  else if(same) note = `출석 인정! 연속 기록은 이어져요. (목표 ${P.daily}문장)`;
  else if(saved) note = `저장된 기록: ${saved}문장`;
  else note = atSel===today ? '오늘 한 문장 수를 맞추고 눌러요.' : '빠뜨린 날의 기록을 추가해요.';
  document.getElementById('at-note').textContent = note;
}

function renderAtCalendar(){
  const P = STUDY_PLAN, today = ymd(new Date());
  const y = atView.getFullYear(), m = atView.getMonth();
  document.getElementById('at-month').textContent = `${y}년 ${m+1}월`;
  const first = new Date(y,m,1).getDay(), days = new Date(y,m+1,0).getDate();
  let html = WEEKDAY.map(w=>`<div class="at-wd">${w}</div>`).join('');
  for(let i=0;i<first;i++) html += '<div></div>';
  for(let day=1; day<=days; day++){
    const s = ymd(new Date(y,m,day)), n = atLog[s]||0;
    const inPlan = s>=P.start && s<=P.end, future = s>today, locked = future || s<P.start;
    const cls = ['at-day'];
    if(n>=P.daily) cls.push('goal'); else if(n>0) cls.push('part');
    else if(inPlan && !future && s!==today) cls.push('miss');
    if(!inPlan) cls.push('out');
    if(locked) cls.push('future');
    if(s===today) cls.push('today');
    if(s===atSel) cls.push('sel');
    if(s===P.end) cls.push('end');
    html += `<div class="${cls.join(' ')}" ${locked ? '' : `onclick="atSelect('${s}')"`}>
      <span class="d">${day}</span><span class="n">${n||''}</span></div>`;
  }
  document.getElementById('at-grid').innerHTML = html;
}

function renderAtPassages(){
  document.getElementById('at-passages').innerHTML =
    `<h4 class="at-h">지문별 분석 현황 <span>문장분석 등록 기준</span></h4>` +
    PASSAGES.map(p=>{
      const pool = passagePool(p), t = pool.length, a = pool.filter(x=>ANALYSIS[x.key]).length;
      return `<div class="at-p ${t && a===t ? 'full' : ''}">
        <div class="at-p-top"><span>${p.id}. ${p.title}</span><span>${a}/${t}</span></div>
        <div class="at-pbar"><div style="width:${t ? a/t*100 : 0}%"></div></div>
      </div>`;
    }).join('');
}

function renderAttendance(){ renderAtSummary(); renderAtCheck(); renderAtCalendar(); renderAtPassages(); }
function atSelect(s){ atSel = s; atCount = atLog[s] || STUDY_PLAN.daily; renderAttendance(); }
function atStep(delta){ atCount = Math.max(0, Math.min(99, atCount+delta)); renderAtCheck(); }
function atSet(n){ atCount = n; renderAtCheck(); }
function atSave(){
  if(atCount===0) delete atLog[atSel]; else atLog[atSel] = atCount;
  atPersist(); renderAttendance();
}
function atMonth(delta){ atView = new Date(atView.getFullYear(), atView.getMonth()+delta, 1); renderAtCalendar(); }
// 탭을 열 때마다 호출 — 앱을 켜 둔 채 자정을 넘겼으면 오늘로 다시 맞춤
function atOpen(){
  const t = ymd(new Date());
  if(atToday!==t){
    atToday = t;
    const d = new Date(); atView = new Date(d.getFullYear(), d.getMonth(), 1);
    atSelect(t);
  } else renderAttendance();
}
document.addEventListener('visibilitychange', ()=>{
  if(!document.hidden && document.getElementById('screen-calendar').classList.contains('active')) atOpen();
});

// ---- 확대 방지 (iOS Safari 대응) ----
// 핀치 줌 차단
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());
// 멀티터치 줌 차단
document.addEventListener('touchmove', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
// 더블탭 줌 차단
let lastTouchEnd = 0;
document.addEventListener('touchend', e => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, false);

// ---- 초기화 ----
renderWordFilter();
renderCard();
renderPassageList();
renderAnPassageList();
renderGrammar();
atLoad();
atOpen();
