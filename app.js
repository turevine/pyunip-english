/* =========================================================
   앱 로직 (데이터는 data.js 에 있음)
   ========================================================= */

// ---- 탭 전환 ----
function switchTab(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('nav.tabbar button').forEach(b=>
    b.classList.toggle('active', b.dataset.screen===name));
  window.scrollTo(0,0);
}

// ---- 단어카드 ----
let wIdx = 0;
let wDeck = WORDS.slice();   // 현재 카드 순서 (섞기 대상)
function renderCard(){
  const w = wDeck[wIdx];
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('fc-word').textContent = w.word;
  document.getElementById('fc-pos').textContent = w.pos;
  document.getElementById('fc-meaning').textContent = w.meaning;
  document.getElementById('fc-example').textContent = w.example;
  document.getElementById('fc-count').textContent = `${wIdx+1} / ${wDeck.length}`;
}
function flipCard(){ document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard(){ wIdx=(wIdx+1)%wDeck.length; renderCard(); }
function prevCard(){ wIdx=(wIdx-1+wDeck.length)%wDeck.length; renderCard(); }
function shuffleWords(){
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
function sentSpans(arr){
  return arr.map(s=>`<span class="sent" onclick="this.classList.toggle('on')">${s}</span>`).join(' ');
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
  p.sentences.forEach((en,i)=>out.push({ key:`${p.id}-${i}`, en, source:`지문 ${p.id}` }));
  if(p.extra) p.extra.sentences.forEach((en,i)=>
    out.push({ key:`${p.id}-${p.sentences.length+i}`, en, source:`지문 ${p.id} · 보충` }));
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
  renderSentence(); window.scrollTo(0,0);
}
function closeAnalyze(){
  document.getElementById('an-viewer').classList.add('hidden');
  document.getElementById('an-select').classList.remove('hidden');
}
function renderSentence(){
  const item = anPool[anIdx];
  document.getElementById('an-source').textContent = anShuffle ? '🔀 셔플 · '+item.source : item.source;
  document.getElementById('an-count').textContent = `${anIdx+1} / ${anPool.length}`;
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
renderCard();
renderPassageList();
renderAnPassageList();
renderGrammar();
