/* =========================================================
   콘텐츠 데이터 — 공부하면서 여기만 채우면 앱이 커집니다.
   (이 파일만 고치면 됨. 로직/디자인은 건드릴 필요 없음)
   ========================================================= */

/* ---------- 단어카드 ---------- */
const WORDS = [
  { word: "camaraderie",    pos: "n.",    meaning: "동료애, 우정",              example: "the camaraderie of a team" },
  { word: "colonist",       pos: "n.",    meaning: "식민지 개척자",            example: "European colonists brought the game." },
  { word: "discrimination", pos: "n.",    meaning: "차별",                     example: "They faced discrimination for years." },
  { word: "unify",          pos: "v.",    meaning: "통합하다, 하나로 만들다",   example: "Soccer unifies us." },
  { word: "universal",      pos: "a.",    meaning: "보편적인, 전세계의",        example: "its universal appeal" },
  { word: "originate",      pos: "v.",    meaning: "비롯되다, 기원하다",        example: "The sport originated in Britain." },
  { word: "Britain",        pos: "n.",    meaning: "영국 (그레이트브리튼)",     example: "The modern game originated in Britain." },
  { word: "association",    pos: "n.",    meaning: "협회, 연합",               example: "England's Football Association established the rules." },
  { word: "establish",      pos: "v.",    meaning: "제정하다, 설립하다",        example: "They established a set of rules." },
  { word: "a set of rules", pos: "phr.",  meaning: "일련의 규칙, 한 벌의 규칙",   example: "The FA established a set of rules." },
  { word: "million",          pos: "n.",   meaning: "100만 (숫자 앞이면 s 안 붙임)", example: "more than 200 million players" },
  { word: "all over the globe", pos: "phr.", meaning: "전 세계에서, 전 세계의",      example: "players all over the globe" },
  { word: "participate in",   pos: "phr.", meaning: "~에 참여하다",                example: "They participate in the game." },
  { word: "truly",            pos: "ad.",  meaning: "정말로, 진정으로",            example: "truly making soccer the world's sport" },
  { word: "quality",          pos: "n.",   meaning: "특성, 성격 (≠품질); 질",       example: "the game's international quality" },
  { word: "a number of",      pos: "phr.", meaning: "다수의, 많은 (+복수명사→복수취급)", example: "A number of players come from poor families." },
  { word: "including",        pos: "prep.", meaning: "~을 포함하여",                example: "many players, including Neymar" },
  { word: "the reason for",   pos: "phr.", meaning: "~에 대한 이유, ~의 이유",      example: "the main reason for its popularity" },
  { word: "unique",           pos: "a.",   meaning: "독특한, 유일무이한",           example: "this unique simplicity" },
  { word: "simplicity",       pos: "n.",   meaning: "단순함, 간단함 (↔complexity)",  example: "It's the game's simplicity." },
  { word: "rural",            pos: "a.",   meaning: "시골의, 농촌의 (↔urban 도시의)", example: "even in rural areas" },
  { word: "early",            pos: "a./ad.", meaning: "초기의, 이른; 일찍 (↔late)",   example: "Early matches were played in 1862." },
  { word: "in time",          pos: "phr.", meaning: "이윽고, 시간이 지나면서; 늦지 않게 (↔on time 정각에)", example: "In time, the sport spread across the continent." },
];

/* ---------- 지문 8개 ----------
   sentences = 본문(문장 단위)  /  extra = 보충자료(선택)
   빈 지문은 sentences: [] 로 두면 '아직 비어있음'으로 표시됩니다. */
const PASSAGES = [
  {
    id: 1,
    title: "The world's game",
    meta: "주제: 축구와 사회 · 난이도 ★★☆",
    sentences: [
      "Throughout history, humans have played some kind of kicking game.",
      "What the world now calls football—or soccer in the United States—began as far back as 2500 B.C.E. with the Chinese game of cuju.",
      "However, the sport we know today originated in Britain.",
      "In the 1840s, England's Football Association established a set of rules, and the modern game was born.",
      "Today, more than 200 million players all over the globe participate in the game, truly making soccer the world's sport.",
      "So, why is soccer so popular?",
      "Maybe it's the game's camaraderie: the feeling that the team on the field is your team; their win is your victory, and their loss is your defeat.",
      "Or maybe it's the game's international quality.",
      "In countries like France, England, Spain, and Brazil, major teams have players from many different nations, and these clubs now have fans all over the world.",
      "Or perhaps it's the promise of great wealth.",
      "A number of professional soccer players, including Brazil's Neymar and Nigeria's Victor Moses, come from poor families.",
      "Today, both of these players make millions of euros every year.",
      "Soccer is popular for all of these reasons, but ultimately, the main reason for its universal appeal may be this: It's a simple game.",
      "It can be played anywhere with anything—a ball, a can, or even some bags tied together.",
      "And anyone can play it.",
      "\"You don't need to be rich ... to play soccer,\" says historian Peter Alegi. \"You just need a flat space and a ball.\"",
      "It is this unique simplicity that makes soccer the most popular sport in Africa.",
      "Here, even in rural areas far from the bright lights and big stadiums, children and adults play the game, often with handmade balls.",
      "The story of soccer in Africa is a long one.",
      "In the 19th century, European colonists brought the game to Africa.",
      "Early matches were first played in the South African cities of Cape Town and Port Elizabeth in 1862.",
      "In time, the sport spread across the continent.",
      "Today, several of the game's best players come from African nations, including Senegal, Ivory Coast, Ghana, and Nigeria.",
      "All over the continent, thousands of soccer academies now recruit boys from poorer cities and towns to play the game.",
      "Many learn to play in their bare feet, and they are tough, creative competitors.",
      "Their dream is to play for the national team or to join one of the big clubs in Europe someday.",
      "For some, the dream comes true.",
      "But the chance to make money with a professional team is probably not the main reason for soccer's popularity in Africa.",
      "\"Soccer is the passion of everyone here,\" says Abubakari Abdul-Ganiyu, a teacher who works with youth clubs in Tamale, Ghana. \"It unifies us.\"",
      "In fact, more than once, the game has helped to bring people together.",
      "In Ivory Coast, for example, immigrants and Muslims faced discrimination for years.",
      "Yet many of the country's best soccer players are from Muslim and immigrant families.",
      "As a result, the national team has become a symbol of unity and has helped to promote peace throughout the country.",
      "All over Africa, soccer is popular with parents and teachers for another reason: It keeps young people—especially boys—in school and out of trouble.",
      "\"Most clubs in Tamale, Ghana, don't allow boys to play if they don't go to school,\" explains Abubakari.",
      "\"We're trying our best to help young people and to make them responsible in society.",
      "Soccer helps us do this.",
      "For us, soccer is also a tool for hope.\""
    ],
    extra: {
      title: "보충자료 · Soccer without borders",
      sentences: [
        "More than 200 national teams from six regions competed to get a place in 2018 FIFA World Cup in Russia.",
        "Thirty-two soccer teams qualified for the final tournament.",
        "Although each team represents a country, it doesn't mean all its players were born there.",
        "Family relations and dual citizenship (having two nationalities) influence which country a player plays for.",
        "Of the 32 teams competing for the World Cup (shown here), 25 had at least one foreign-born player.",
        "In total, 97 foreign-born players competed in the 2018 World Cup."
      ]
    }
  },
  { id: 2, title: "지문 2 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
  { id: 3, title: "지문 3 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
  { id: 4, title: "지문 4 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
  { id: 5, title: "지문 5 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
  { id: 6, title: "지문 6 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
  { id: 7, title: "지문 7 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
  { id: 8, title: "지문 8 — 제목을 입력하세요", meta: "공부하면서 채우기", sentences: [] },
];

/* ---------- 문장 분석 (공부 후 채우기) ----------
   키 형식: "지문id-문장index" (index는 0부터, extra 문장은 본문 뒤에 이어짐)
   예)
   const ANALYSIS = {
     "1-0": {
       chips: [["주어","humans"], ["동사","have played"]],
       structure: "주어 humans + 현재완료 have played ... 3형식 문장.",
       trans: "역사 전체에 걸쳐, 인간은 일종의 공 차는 게임을 해왔다."
     }
   };
   지금은 비어 있음 → 앱에는 '분석 채워넣기' 자리로 표시됩니다. */
const ANALYSIS = {
  // 지문 1 · 1번째 문장: Throughout history, humans have played some kind of kicking game.
  "1-0": {
    form: "3형식 (S + V + O)",
    tense: "현재완료 (계속 용법)",
    chips: [
      ["수식어(M)", "Throughout history"],
      ["주어(S)", "humans"],
      ["동사(V)", "have played"],
      ["목적어(O)", "some kind of kicking game"],
    ],
    structure:
      `뼈대: <b>humans(S) + have played(V) + some kind of kicking game(O)</b> 의 3형식. 나머지는 수식어.<br><br>` +
      `① <b>Throughout history</b> (시간 부사구·수식어): 강조하려고 맨 앞에 왔을 뿐, 맨 뒤로 보내도 뜻이 같음. 특정 역사가 아니라 '인류 역사 전체(추상 개념)'라서 <b>the history가 아니라 관사를 생략</b>.<br>` +
      `② <b>humans</b> (주어) — 왜 human도, the human도 아닌 <b>humans</b>인가?<br>` +
      `&nbsp;&nbsp;• 특정 한 사람이 아니라 <b>'인류라는 종 전체 / 일반적인 사람들'</b>을 가리킴. 일반적인 사실·진리를 말할 땐 <b>무관사 복수(총칭 복수)</b>를 씀.<br>` +
      `&nbsp;&nbsp;• human(단수)만 쓰면 셀 수 있는 명사라 <b>a human / the human</b> 처럼 관사가 필요해 문법상 홀로 못 섬. the humans라고 하면 '(앞서 언급된) 특정한 그 사람들'로 범위가 좁아져 뜻이 달라짐.<br>` +
      `③ <b>have played</b> (현재완료·계속 용법) — 왜 단순과거 played가 아닌가?<br>` +
      `&nbsp;&nbsp;• 'Throughout history'가 <b>과거부터 지금까지 쭉 이어지는 시간</b>이라, "지금도 하고 있다"는 현재완료와 완벽히 짝. played로 쓰면 '과거에 (지금은 안 함)' 느낌이라 어색해짐.<br>` +
      `④ <b>some kind of</b> ('~의 일종 / 어떤 종류의'): 이름이 명확히 정의된 게 아닌 '공 차는 형태의 게임들'을 포괄적으로 묶어줌.<br>` +
      `⑤ <b>kicking game</b> — 왜 kicking <u>the</u> game / kicking <u>a</u> game이 아닌가? (핵심!)<br>` +
      `&nbsp;&nbsp;• 여기 <b>kicking은 동사가 아니라 game을 앞에서 꾸미는 분사(형용사 역할)</b>. 'kicking + game' = '공 차는 성격의 게임'이라는 한 덩어리 명사.<br>` +
      `&nbsp;&nbsp;• 만약 the/a를 넣어 <b>kicking the game</b>이 되면 kicking이 <b>동사</b>로 바뀌어 '그 게임을 (발로) 차다'라는 엉뚱한 뜻이 됨.<br>` +
      `&nbsp;&nbsp;• 게다가 이 명사 덩어리는 이미 앞의 <b>some kind of</b>가 한정하고 있어서, game 앞에 a/the가 <b>또 붙지 않음</b>.`,
    trans: "역사를 통틀어 인류는 일종의 공차기 게임을 해왔다.",
  },

  // 지문 1 · 2번째 문장: What the world now calls football—or soccer in the United States—began as far back as 2500 B.C.E. with the Chinese game of cuju.
  "1-1": {
    form: "1형식 (S + V + M)",
    tense: "단순 과거",
    chips: [
      ["주어(S)·명사절", "What the world now calls football"],
      ["삽입구", "—or soccer in the United States—"],
      ["동사(V)", "began"],
      ["수식어(M)", "as far back as 2500 B.C.E. …"],
    ],
    structure:
      `<b>1형식 (S + V + M)</b> — 수식어 거품을 걷어내면 "무엇이(What절) + 시작되었다(began)"만 남는 문장.<br><br>` +
      `① <b>What</b> (관계대명사, "~하는 것") — 주어 자리에 통째로 들어간 <b>명사절</b>.<br>` +
      `&nbsp;&nbsp;• who/which/that과 달리 <b>what은 선행사(꾸밈받는 명사)를 자기 안에 이미 포함</b>('the thing which')해서, 앞에 명사가 없어도 홀로 서고 절 전체가 <b>주어(명사)</b> 역할.<br>` +
      `&nbsp;&nbsp;• 이 what절은 <b>불완전한 절</b>: the world now calls __ football 에서 <b>calls의 목적어 자리가 비어</b> 있고, 그 빈자리를 what이 대신 채움 (the world=주어, calls=동사, football=목적격보어). 뜻은 "세상이 (무엇을) 풋볼이라 부르는 그것".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('relative-pronoun','rp-what')">📐 관계대명사 what 자세히 보기 →</span><br>` +
      `② <b>— … —</b> (엠 대시 삽입구): 앞뒤 짝으로 들어가 "혹은 미국에서는 사커"라는 부연을 강조하며 끼워 넣음. 대시 사이는 문장 성분 계산에서 빠지니 괄호 친 셈 치고 읽으면 구조가 보임.<br>` +
      `③ <b>began</b> (단순 과거·자동사): 기원전 2500년이라는 명확한 과거 시점의 사실이라 과거형. 목적어 없는 자동사라 1형식.<br>` +
      `④ <b>as far back as + 시점</b>: "무려 ~까지 아득히 거슬러 올라가" — 기원이 엄청나게 오래됨을 강조. (B.C.E. = Before Common Era, 기원전 B.C.와 같은 뜻)<br>` +
      `⑤ <b>of</b> (동격의 of): the Chinese game of cuju = "축국(cuju)이라는 이름의 중국 게임".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-apposition')">🧬 of의 종류(동격의 of) 자세히 →</span>`,
    trans: "오늘날 전 세계가 풋볼—미국에서는 사커—이라 부르는 스포츠는, 멀게는 기원전 2500년 중국의 '축국(cuju)'이라는 게임에서 시작되었다.",
  },

  // 지문 1 · 3번째 문장: However, the sport we know today originated in Britain.
  "1-2": {
    form: "1형식 (S + V + M)",
    tense: "단순 과거",
    chips: [
      ["접속부사", "However"],
      ["주어(S)", "the sport (which/that) we know today"],
      ["동사(V)", "originated"],
      ["수식어(M)", "in Britain"],
    ],
    structure:
      `뼈대: <b>the sport(S) + originated(V) + in Britain(M)</b> 의 1형식. (originate는 자동사라 목적어 없이 전치사구가 옴)<br><br>` +
      `① <b>However</b> (접속부사): 앞 문장과 <b>대조</b>("그러나"). 콤마로 분리되며 문장 성분(S·V·O) 계산엔 안 들어가는 수식어.<br>` +
      `② <b>the sport (which/that) we know today</b> (주어) — 핵심: <b>목적격 관계대명사가 생략된</b> 명사구.<br>` +
      `&nbsp;&nbsp;• the sport(선행사) 뒤에 곧바로 [we(주어) know(동사)]가 와서, 그 사이에 <b>목적격 관계대명사 which/that이 생략</b>됨.<br>` +
      `&nbsp;&nbsp;• we know <u>__</u> today 에서 <b>know의 목적어 자리가 비어</b> 있고, 그 자리가 the sport를 가리킴 = "우리가 오늘날 아는 그 스포츠".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('relative-pronoun','rp-object-omit')">✂️ 목적격 관계대명사 that·생략 자세히 →</span><br>` +
      `③ <b>originated</b> (동사·자동사, 단순 과거): "비롯되다/기원하다". 뒤에 목적어 없이 in Britain(전치사구)만 오므로 <b>1형식</b>.<br>` +
      `④ <b>in Britain</b> (수식어): "영국에서".`,
    trans: "하지만 오늘날 우리가 아는 그 스포츠는 영국에서 비롯되었다.",
  },

  // 지문 1 · 4번째 문장: In the 1840s, England's Football Association established a set of rules, and the modern game was born.
  "1-3": {
    form: "3형식 + 1형식 (and로 연결된 중문)",
    tense: "단순 과거",
    chips: [
      ["수식어(M)", "In the 1840s"],
      ["주어1(S1)", "England's Football Association"],
      ["동사1(V1)", "established"],
      ["목적어1(O1)", "a set of rules"],
      ["접속사", "and"],
      ["주어2(S2)", "the modern game"],
      ["동사2(V2)·수동태", "was born"],
    ],
    structure:
      `뼈대: 등위접속사 <b>and</b>로 두 개의 완전한 절이 연결된 <b>중문</b>. 앞절 = <b>3형식</b>(S+V+O), 뒷절 = <b>1형식 수동태</b>.<br><br>` +
      `① <b>In the 1840s</b> (시간 부사구·수식어): "1840년대에". 연도 뒤 <b>-s</b>는 '그 10년간'을 뜻함 (the 1840s = 1840~1849년).<br>` +
      `② <b>England's Football Association(S1)</b> + <b>established(V1·단순과거)</b> + <b>a set of rules(O1)</b>: "영국 축구협회가 일련의 규칙을 제정했다". <b>a set of ~</b> = '일련의 / 한 벌의 ~'.<br>` +
      `③ <b>and</b> (등위접속사): 앞·뒤 두 절을 대등하게 연결.<br>` +
      `④ <b>the modern game(S2)</b> + <b>was born(V2)</b>: <b>be + p.p. 수동태</b>. born은 <b>bear(낳다)</b>의 과거분사. 게임이 스스로 태어난 게 아니라 '탄생된' 것이라 수동태. 뒤에 목적어 없이 끝나므로 이 절은 <b>1형식</b>.<br><br>` +
      `<b>🤔 왜 so(그래서)가 아니라 and일까?</b><br>` +
      `&nbsp;&nbsp;• 영어의 <b>and</b>에는 이미 '그리고 그 결과 / ~해서 ~되다'라는 <b>시간의 흐름·자연스러운 인과</b>가 들어있음. (He dropped the glass <b>and</b> it broke. = 떨어뜨렸고 [그 결과] 깨졌다)<br>` +
      `&nbsp;&nbsp;• <b>and</b>: 두 역사적 사건을 <b>물 흐르듯 나열</b>하는 세련된 다큐멘터리식 서사 → 글쓴이의 선택.<br>` +
      `&nbsp;&nbsp;• <b>so</b>: '그래서(그 이유로)' 원인-결과를 <b>논리적으로 못박는</b> 느낌이라 역사 서술에선 다소 딱딱해짐 (틀린 건 아님).`,
    trans: "1840년대에 영국 축구협회가 일련의 규칙을 제정했고, (그렇게 해서) 현대적인 축구가 탄생했다.",
  },

  // 지문 1 · 5번째 문장: Today, more than 200 million players all over the globe participate in the game, truly making soccer the world's sport.
  "1-4": {
    form: "1형식 (+ 분사구문)",
    tense: "단순 현재",
    chips: [
      ["수식어(M)", "Today"],
      ["주어(S)", "more than 200 million players"],
      ["주어 수식", "all over the globe"],
      ["동사(V)", "participate (in)"],
      ["수식어(M)", "in the game"],
      ["분사구문", "truly making soccer the world's sport"],
    ],
    structure:
      `뼈대: <b>players(S) + participate(V) + in the game(M)</b> 의 1형식. 뒤에 <b>분사구문</b>이 붙어 '결과'를 덧붙임.<br><br>` +
      `① <b>Today</b> (시간 수식어): "오늘날".<br>` +
      `② <b>more than 200 million players</b> (주어): "2억 명이 넘는 선수들". <b>more than</b> = ~이상, <b>200 million</b> = 2억. million은 앞에 숫자가 오면 <b>복수 s를 붙이지 않음</b> (200 million ⭕ / 200 millions ❌).<br>` +
      `③ <b>all over the globe</b> (주어 수식): "전 세계의 / 전 세계에서". 앞의 players를 꾸며줌.<br>` +
      `④ <b>participate in</b> (동사): "~에 참여하다". participate는 <b>자동사</b>라 목적어를 바로 못 받고 전치사 <b>in</b>이 필요 → in the game까지 합쳐 <b>1형식</b>.<br>` +
      `⑤ <b>truly making soccer the world's sport</b> (분사구문): 앞 내용의 <b>결과</b>를 덧붙임 = "그래서 정말로 축구를 세계의 스포츠로 만든다".<br>` +
      `&nbsp;&nbsp;• 원래 문장: <u>and it truly makes soccer the world's sport</u> → 접속사·주어 빼고 makes → making 으로 축약.<br>` +
      `&nbsp;&nbsp;• 속 구조: <b>make + O + OC (5형식)</b> → making + soccer(목적어) + the world's sport(목적격보어).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('participle-construction','pc-make')">🧩 분사구문 만드는 법 자세히 →</span>`,
    trans: "오늘날 전 세계 2억 명이 넘는 선수들이 이 게임에 참여하며, 그야말로 축구를 세계의 스포츠로 만들고 있다.",
  },

  // 지문 1 · 6번째 문장: So, why is soccer so popular?
  "1-5": {
    form: "2형식 (의문문, S + V + C)",
    tense: "단순 현재",
    chips: [
      ["담화표지", "So,"],
      ["의문사", "why"],
      ["동사(V)", "is"],
      ["주어(S)", "soccer"],
      ["보어(C)", "so popular"],
    ],
    structure:
      `평서문으로 풀면 <b>Soccer(S) is(V) so popular(C)</b> 의 <b>2형식</b>. 여기에 의문사 why가 붙어 의문문이 됨. (be동사 is가 주어 soccer 앞으로 도치)<br><br>` +
      `⭐ 이 문장엔 <b>so가 두 번</b> 나오는데, 역할이 완전히 다름!<br><br>` +
      `① <b>So,</b> (문두·담화표지) — 여기 so는 <b>‘그래서(결과)’ 접속사가 아님!</b> 앞 내용(축구가 세계의 스포츠)을 받아 "자, 그렇다면"으로 <b>다음 질문으로 넘어가는 신호</b>. 문장 성분 계산엔 안 들어감.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('so-roles','so-discourse')">🗣️ 담화표지 So, 자세히 →</span><br>` +
      `② <b>why</b> (의문부사): 이유를 묻는 의문사 "왜".<br>` +
      `③ <b>is soccer</b> (동사+주어): 의문문이라 be동사 <b>is</b>가 주어 <b>soccer</b> 앞으로 도치됨.<br>` +
      `④ <b>so popular</b> (보어) — 여기 so는 <b>정도 부사 "그토록/그렇게"</b>. 형용사 popular를 꾸며 "그토록 인기 있는".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('so-roles','so-adverb')">📏 정도 부사 so 자세히 →</span><br><br>` +
      `👉 정리: 같은 so지만 <b>①은 화제전환(자/그렇다면), ④는 정도강조(그토록)</b>. 지난번 얘기한 '결과의 so(그래서)'는 여기 <b>둘 다 아님!</b>`,
    trans: "그렇다면, 축구는 왜 그토록 인기가 많을까?",
  },

  // 지문 1 · 7번째 문장: Maybe it's the game's camaraderie: the feeling that the team on the field is your team; their win is your victory, and their loss is your defeat.
  "1-6": {
    form: "2형식 (콜론·세미콜론으로 이어진 복합 구조)",
    tense: "단순 현재",
    chips: [
      ["수식어(M)", "Maybe"],
      ["주어(S)", "it"],
      ["동사(V)", "is"],
      ["보어(C)", "the game's camaraderie"],
      ["콜론 :", "뒤에 설명(동격)"],
      ["동격 that절", "the feeling that ..."],
      ["세미콜론 ;", "완전한 문장 연결"],
    ],
    structure:
      `전체 뼈대: <b>it(S) is(V) the game's camaraderie(C)</b> 의 <b>2형식</b>. 콜론(:) 뒤로 그 camaraderie가 무엇인지 <b>풀어 설명</b>하고, 세미콜론(;)으로 밀접한 문장을 이어 붙인 복합 구조.<br><br>` +
      `① <b>Maybe</b> (부사·수식어): "아마도". 문장 전체를 꾸밈.<br>` +
      `② <b>it's the game's camaraderie</b> (주절·2형식): it(주어, 앞 질문의 '축구가 인기인 이유'를 가리킴) + is(동사) + the game's camaraderie(보어) = "그것은 그 게임의 동료애다".<br>` +
      `③ <b>:</b> (콜론) — 앞의 <b>camaraderie가 뭔지 구체적으로 공개</b>. 앞 = 뒤 등호 관계 ("동료애, 그게 뭐냐면 →").<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('punctuation','pn-colon')">🎁 콜론 : 자세히 →</span><br>` +
      `④ <b>the feeling that the team on the field is your team</b> (콜론 뒤·동격 명사구): the feeling(느낌) + <b>that절</b>.<br>` +
      `&nbsp;&nbsp;• ⚠️ 이 that은 <b>관계대명사가 아니라 ‘동격의 that’("~라는")</b>! 판별: that 뒤 절이 the team(S)+is(V)+your team(C)로 <b>빠진 자리 없이 완전</b>하면 동격, 빠진 자리가 있으면 관계대명사. 여기선 완전하므로 동격.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('appositive-that','at-vs-relative')">🔖 동격의 that 자세히 →</span><br>` +
      `&nbsp;&nbsp;• on the field는 the team을 꾸미는 전치사구.<br>` +
      `&nbsp;&nbsp;📝 <b>해석: "필드 위의 (그) 팀이 곧 네 팀이라는 느낌(= 일체감)".</b><br>` +
      `⑤ <b>;</b> (세미콜론) — 접속사 없이 <b>밀접하게 연관된 완전한 문장</b>을 이어 붙임. 여기선 앞의 <b>'그 느낌(camaraderie)'을 계속 풀어 설명</b>하는 역할.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('punctuation','pn-semicolon')">🔗 세미콜론 ; 자세히 →</span><br>` +
      `⑥ <b>their win is your victory, and their loss is your defeat</b>: 2형식 문장 두 개를 <b>and</b>로 연결.<br>` +
      `&nbsp;&nbsp;📝 <b>해석: "그들의 승리가 곧 너의 승리이고, 그들의 패배가 곧 너의 패배다".</b><br><br>` +
      `🤔 <b>"feeling이 세미콜론 뒤까지 영향을 주나?" → 의미상 YES!</b><br>` +
      `&nbsp;&nbsp;• 문법적으로 that절에 <b>딱 묶이는 건 ④ 하나</b>뿐, 세미콜론 뒤 ⑥은 <b>형식상 독립된 완전한 문장</b>.<br>` +
      `&nbsp;&nbsp;• 하지만 세미콜론이 '밀접한 연결'을 뜻하므로 ⑥도 <b>같은 camaraderie(일체감)를 이어서 구체화</b> → 의미상 feeling이 끝까지 관통함. (당신 해석이 맞음! 👍)<br>` +
      `👉 대구(對句): win↔loss, victory↔defeat 를 나란히 놓아 '내 팀과 하나됨'을 리듬감 있게 강조.`,
    trans: "아마도 그것은 그 게임의 동료애일 것이다: 필드 위의 팀이 곧 내 팀이며, 그들의 승리가 내 승리이고 그들의 패배가 내 패배라는 그런 느낌 말이다.",
  },

  // 지문 1 · 8번째 문장: Or maybe it's the game's international quality.
  "1-7": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재",
    chips: [
      ["접속사", "Or"],
      ["수식어(M)", "maybe"],
      ["주어(S)", "it"],
      ["동사(V)", "is"],
      ["보어(C)", "the game's international quality"],
    ],
    structure:
      `뼈대: <b>it(S) is(V) the game's international quality(C)</b> 의 <b>2형식</b>. 앞 문장(camaraderie)과 같은 틀을 반복하며 '또 다른 이유'를 제시.<br><br>` +
      `① <b>Or</b> (등위접속사): 앞 문장 "Maybe it's the game's camaraderie"에 대한 <b>또 다른 가능성</b>을 나란히 제시 = "아니면 / 혹은".<br>` +
      `② <b>maybe</b> (부사·수식어): "아마도". 단정하지 않고 여러 이유 중 하나로 조심스럽게 제시.<br>` +
      `③ <b>it's</b> (주절): it(주어, 앞의 '축구가 인기인 이유'를 가리킴) + is(동사).<br>` +
      `④ <b>the game's international quality</b> (보어): <b>the game's</b>(소유격, 그 게임의) + <b>international</b>(형용사, 국제적인) + <b>quality</b>(명사, 특성·성격) = "그 게임의 국제적인 특성".<br>` +
      `&nbsp;&nbsp;• ⚠️ 어휘 포인트: 여기 <b>quality</b>는 '품질'이 아니라 <b>'특성·성격(a characteristic)'</b>의 뜻! "국제적인 성격을 띤다"는 의미.<br>` +
      `&nbsp;&nbsp;📝 <b>해석: "그 게임의 국제적인 특성".</b>`,
    trans: "아니면 아마도 그것은 그 게임이 지닌 국제적인 특성(때문)일지도 모른다.",
  },

  // 지문 1 · 9번째 문장: In countries like France, England, Spain, and Brazil, major teams have players from many different nations, and these clubs now have fans all over the world.
  "1-8": {
    form: "3형식 + 3형식 (and로 연결된 중문)",
    tense: "단순 현재",
    chips: [
      ["수식어(M)", "In countries like …"],
      ["주어1(S1)", "major teams"],
      ["동사1(V1)", "have"],
      ["목적어1(O1)", "players (from …)"],
      ["접속사", "and"],
      ["주어2(S2)", "these clubs"],
      ["동사2(V2)", "have"],
      ["목적어2(O2)", "fans (all over the world)"],
    ],
    structure:
      `뼈대: 등위접속사 <b>and</b>로 두 개의 <b>3형식</b> 절이 연결된 중문.<br><br>` +
      `① <b>In countries like France, England, Spain, and Brazil</b> (수식어·전치사구): "프랑스, 영국, 스페인, 브라질 <b>같은</b> 나라들에서".<br>` +
      `&nbsp;&nbsp;• ⚠️ 여기 <b>like</b>는 '좋아하다'(동사)가 아니라 <b>전치사 "~같은/~처럼"</b> = <b>such as</b>(예시 나열)와 같은 뜻.<br>` +
      `② <b>major teams(S1) + have(V1) + players(O1)</b>: "주요 팀들은 선수들을 보유한다" → <b>3형식</b>.<br>` +
      `&nbsp;&nbsp;• <b>from many different nations</b>: players를 꾸미는 전치사구 = "여러 다른 나라 출신의".<br>` +
      `③ <b>and</b> (등위접속사): 앞·뒤 두 절을 대등하게 연결.<br>` +
      `④ <b>these clubs(S2) + now(부사) + have(V2) + fans(O2)</b>: "이 클럽들은 이제 팬을 보유한다" → <b>3형식</b>.<br>` +
      `&nbsp;&nbsp;• <b>all over the world</b>: fans를 꾸미는 수식어 = "전 세계의".<br><br>` +
      `📝 <b>해석:</b> "프랑스, 영국, 스페인, 브라질 같은 나라들에서는 주요 팀들이 여러 다른 나라 출신 선수들을 보유하고 있고, 이 클럽들은 이제 전 세계에 팬을 두고 있다."`,
    trans: "프랑스, 영국, 스페인, 브라질 같은 나라들에서는 주요 팀들이 여러 다른 나라 출신의 선수들을 보유하고 있고, 이 클럽들은 이제 전 세계에 팬을 두고 있다.",
  },

  // 지문 1 · 10번째 문장: Or perhaps it's the promise of great wealth.
  "1-9": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재",
    chips: [
      ["접속사", "Or"],
      ["수식어(M)", "perhaps"],
      ["주어(S)", "it"],
      ["동사(V)", "is"],
      ["보어(C)", "the promise of great wealth"],
    ],
    structure:
      `뼈대: <b>it(S) is(V) the promise of great wealth(C)</b> 의 <b>2형식</b>. 앞 문장들(camaraderie, international quality)에 이은 '또 다른 이유'.<br><br>` +
      `① <b>Or</b> (등위접속사): "아니면 / 혹은" — 또 다른 가능성 제시.<br>` +
      `② <b>perhaps</b> (부사·수식어): "아마도". maybe와 같은 뜻, 조금 더 격식.<br>` +
      `③ <b>it's</b> (주절): it(축구가 인기인 이유) + is(동사).<br>` +
      `④ <b>the promise of great wealth</b> (보어): the promise(약속·보장) + <b>of great wealth</b>.<br>` +
      `&nbsp;&nbsp;• ⚠️ 이 <b>of</b>는 <b>소유의 of(~의)도, 동격의 of(A라는 B)도 아닌 '내용의 of'</b>! promise·hope·chance·dream 같은 <b>추상명사 뒤에서 그 알맹이(내용)를 채워줌</b>.<br>` +
      `&nbsp;&nbsp;• the promise of great wealth = "막대한 부(를 얻을 수 있다는) 약속" → <b>"엄청난 부를 가져다준다는 기대·가능성"</b>.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-content')">🧬 of의 종류(내용의 of) 자세히 →</span><br>` +
      `&nbsp;&nbsp;📝 <b>해석: "막대한 부를 얻을 수 있다는 기대(보장)".</b><br><br>` +
      `👉 본문 의미: "축구를 잘하면 엄청난 부귀영화를 누릴 수 있다는 기대감 때문에 축구가 인기 있는 걸지도 몰라."`,
    trans: "아니면 아마도 그것은 막대한 부를 얻을 수 있다는 기대(약속) 때문일지도 모른다.",
  },

  // 지문 1 · 11번째 문장: A number of professional soccer players, including Brazil's Neymar and Nigeria's Victor Moses, come from poor families.
  "1-10": {
    form: "1형식 (삽입구 포함)",
    tense: "단순 현재",
    chips: [
      ["주어(S)", "A number of … players"],
      ["삽입구", "including Neymar and Victor Moses"],
      ["동사(V)", "come (from)"],
      ["수식어(M)", "from poor families"],
    ],
    structure:
      `뼈대: <b>A number of … players(S) + come(V) + from poor families(M)</b> 의 1형식. 주어와 동사 사이에 콤마 삽입구가 끼어 문장이 길어 보이는 것.<br><br>` +
      `① <b>A number of professional soccer players</b> (주어): "다수의 프로 축구 선수들".<br>` +
      `&nbsp;&nbsp;• ⚠️ <b>a number of + 복수명사</b> = "많은 ~" → <b>복수 취급</b>! 그래서 동사가 comes가 아니라 <b>come</b>. (cf. <b>the number of ~</b> = "~의 수"는 단수 취급 → is/comes)<br>` +
      `② <b>, including Brazil's Neymar and Nigeria's Victor Moses,</b> (삽입구): 콤마 두 개 사이에 끼워 넣은 예시. <b>including</b> = "~을 포함하여" (전치사처럼 쓰이는 분사). 문장 성분(S·V·O) 계산에선 빠지니 괄호 친 셈 치고 읽으면 뼈대가 보임.<br>` +
      `③ <b>come from poor families</b> (동사): come(자동사) + from poor families(전치사구) → <b>1형식</b>. <b>come from ~</b> = "~ 출신이다".<br><br>` +
      `📝 <b>해석:</b> "브라질의 네이마르와 나이지리아의 빅터 모지스를 포함한 많은 프로 축구 선수들이 가난한 집안 출신이다."`,
    trans: "브라질의 네이마르와 나이지리아의 빅터 모지스를 포함한 많은 프로 축구 선수들이 가난한 집안 출신이다.",
  },

  // 지문 1 · 12번째 문장: Today, both of these players make millions of euros every year.
  "1-11": {
    form: "3형식 (S + V + O)",
    tense: "단순 현재",
    chips: [
      ["수식어(M)", "Today"],
      ["주어(S)", "both of these players"],
      ["동사(V)", "make"],
      ["목적어(O)", "millions of euros"],
      ["수식어(M)", "every year"],
    ],
    structure:
      `뼈대: <b>both of these players(S) + make(V) + millions of euros(O)</b> 의 <b>3형식</b>.<br><br>` +
      `① <b>Today</b> (시간 수식어): "오늘날".<br>` +
      `② <b>both of these players</b> (주어): "이 선수들 둘 다". <b>both of + 복수명사</b> → <b>복수 취급</b>이라 동사가 makes가 아니라 <b>make</b>.<br>` +
      `&nbsp;&nbsp;• 💡 여기 of는 <b>빼도 문법상 맞음</b>(Both these players …). 시험 함정으로 자주 나옴!<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('both-usage','both-optional-of')">🔀 both의 of 규칙(함정) 자세히 →</span><br>` +
      `③ <b>make</b> (동사): 여기선 "(돈을) 벌다".<br>` +
      `④ <b>millions of euros</b> (목적어): "수백만 유로".<br>` +
      `&nbsp;&nbsp;• ⚠️ 5번째 문장 <b>200 million</b>과 비교! 앞에 <b>구체적 숫자가 없으면</b> million/thousand에 <b>s를 붙이고 of</b>를 씀 → <b>millions of ~</b>(막연한 수백만). 반대로 구체적 숫자가 오면 s 없이: 200 million ⭕ (200 millions ❌).<br>` +
      `⑤ <b>every year</b> (수식어): "매년" (빈도).<br><br>` +
      `📝 <b>해석:</b> "오늘날 이 두 선수는 모두 매년 수백만 유로를 벌어들인다."`,
    trans: "오늘날 이 두 선수는 모두 매년 수백만 유로를 벌어들인다.",
  },

  // 지문 1 · 13번째 문장: Soccer is popular for all of these reasons, but ultimately, the main reason for its universal appeal may be this: It's a simple game.
  "1-12": {
    form: "2형식 + 2형식 (but 연결, 콜론 포함)",
    tense: "단순 현재 (+ 조동사 may)",
    chips: [
      ["주어1(S1)", "Soccer"],
      ["동사1(V1)", "is"],
      ["보어1(C1)", "popular"],
      ["접속사", "but"],
      ["주어2(S2)", "the main reason for …"],
      ["동사2(V2)", "may be"],
      ["보어2(C2)", "this"],
      ["콜론 :", "this의 내용 공개"],
    ],
    structure:
      `뼈대: <b>but</b>으로 두 절 연결. 앞절 = Soccer is popular (2형식), 뒷절 = the main reason … may be this (2형식). 콜론(:)으로 this가 뭔지 공개.<br><br>` +
      `① <b>Soccer(S1) + is(V1) + popular(C1)</b>: "축구는 인기 있다" (2형식). + <b>for all of these reasons</b>(수식) = "이 모든 이유들 때문에". 여기 for는 '이유'.<br>` +
      `② <b>but</b> (등위접속사): 앞 내용과 <b>대조</b> "하지만".<br>` +
      `③ <b>ultimately</b> (부사·수식어): "궁극적으로 / 결국".<br>` +
      `④ <b>the main reason for its universal appeal</b> (주어2): the main reason(주된 이유) + <b>for its universal appeal</b>(전치사구 수식) = "그것의 보편적 매력에 대한 주된 이유". <b>the reason for ~</b> = "~에 대한 이유"(숙어).<br>` +
      `⑤ <b>may be</b> (동사2): 조동사 <b>may</b>("~일지도 모른다", 추측) + be.<br>` +
      `⑥ <b>this</b> (보어2): 대명사. <b>콜론 뒤 내용을 미리 가리킴</b> (this = "It's a simple game").<br>` +
      `⑦ <b>:</b> (콜론) — this의 정체를 <b>공개</b> ("바로 이거야 → 짜잔").<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('punctuation','pn-colon')">🎁 콜론 : 자세히 →</span><br>` +
      `⑧ <b>It's a simple game</b>: 콜론 뒤 설명 = "그것은 단순한 게임이다" (2형식).<br><br>` +
      `📝 <b>해석:</b> "축구는 이 모든 이유들로 인해 인기 있지만, 궁극적으로 그 보편적 매력의 주된 이유는 이것일지도 모른다: 바로 단순한 게임이라는 점이다."`,
    trans: "축구는 이 모든 이유들로 인해 인기 있지만, 궁극적으로 그 보편적 매력의 주된 이유는 이것일지도 모른다: 바로 단순한 게임이라는 점이다.",
  },

  // 지문 1 · 14번째 문장: It can be played anywhere with anything—a ball, a can, or even some bags tied together.
  "1-13": {
    form: "1형식 (수동태)",
    tense: "단순 현재 (+ 조동사 can)",
    chips: [
      ["주어(S)", "It"],
      ["동사(V)·수동태", "can be played"],
      ["수식어(M)", "anywhere"],
      ["수식어(M)", "with anything"],
      ["대시 부연", "a ball, a can, or some bags …"],
      ["과거분사 후치수식", "some bags tied together"],
    ],
    structure:
      `뼈대: <b>It(S) + can be played(V)</b>. play는 타동사지만 여기선 <b>수동태</b>라 목적어 없이 → 1형식(수동태).<br><br>` +
      `① <b>It</b> (주어): 앞의 the game(soccer)을 가리킴.<br>` +
      `② <b>can be played</b> (동사·수동태): 조동사 <b>can</b> + <b>be played</b>(be + p.p.) = "행해질 수 있다".<br>` +
      `③ <b>anywhere</b> (부사·수식어): "어디서든".<br>` +
      `④ <b>with anything</b> (전치사구·수식어): "무엇을 가지고도".<br>` +
      `⑤ <b>—</b> (엠 대시): 앞의 <b>anything</b>이 구체적으로 뭔지 예시를 <b>극적으로 부연</b> (a ball, a can, or even some bags tied together).<br>` +
      `⑥ <b>some bags tied together</b> (⭐ 과거분사 후치수식):<br>` +
      `&nbsp;&nbsp;• 원래: some bags <b>(which are)</b> tied together → <b>주격 관계대명사 which + be동사 are 생략</b>.<br>` +
      `&nbsp;&nbsp;• 남은 <b>과거분사 tied</b>가 앞의 명사 bags를 <b>뒤에서 수식(후치수식)</b> = "함께 묶인 가방들".<br>` +
      `&nbsp;&nbsp;• 왜 과거분사(tied)? 가방은 '묶는' 게 아니라 '묶이는' 대상이라 <b>수동 의미 → 과거분사</b>. (현재분사 tying이면 '묶고 있는'이 되어 틀림)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('participle-postmod','pp-omit')">✂️ 후치수식 & (which are) 생략 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "그것(축구)은 어디서든 무엇으로든 할 수 있다 — 공, 깡통, 심지어 함께 묶은 가방 몇 개로도."`,
    trans: "그것(축구)은 어디서든 무엇으로든 할 수 있다 — 공, 깡통, 심지어 함께 묶은 가방 몇 개로도.",
  },

  // 지문 1 · 15번째 문장: And anyone can play it.
  "1-14": {
    form: "3형식 (S + V + O)",
    tense: "단순 현재 (+ 조동사 can)",
    chips: [
      ["접속사", "And"],
      ["주어(S)", "anyone"],
      ["동사(V)", "can play"],
      ["목적어(O)", "it"],
    ],
    structure:
      `뼈대: <b>anyone(S) + can play(V) + it(O)</b> 의 <b>3형식</b>.<br><br>` +
      `① <b>And</b> (문두 등위접속사): 앞 문장(어디서든 뭐로든 할 수 있다)에 <b>이어 붙여 강조</b> "게다가/그리고". 원래 접속사는 문장 중간용이지만, 강조·구어체에선 문두 And를 흔히 씀.<br>` +
      `② <b>anyone</b> (주어): "누구나". any+one이라 <b>단수 취급</b>. 긍정문에서 "아무나/누구든".<br>` +
      `③ <b>can play</b> (동사): 조동사 <b>can</b>("~할 수 있다") + play(동사원형).<br>` +
      `④ <b>it</b> (목적어): 앞의 the game(soccer)을 가리킴.<br><br>` +
      `📝 <b>해석:</b> "그리고 누구나 그것(축구)을 할 수 있다."`,
    trans: "그리고 누구나 그것(축구)을 할 수 있다.",
  },

  // 지문 1 · 16번째 문장: "You don't need to be rich ... to play soccer," says historian Peter Alegi. "You just need a flat space and a ball."
  "1-15": {
    form: "3형식 · 인용문 + 도치",
    tense: "단순 현재 (don't need / just need / says)",
    chips: [
      ["인용 도치 (V+S)", "says historian Peter Alegi"],
      ["주어(S)", "You"],
      ["동사(V)", "don't need"],
      ["목적어(O)·to부정사", "to be rich"],
      ["부사적 용법(목적)", "to play soccer"],
      ["2번째 문장(3형식)", "You just need a flat space and a ball"],
    ],
    structure:
      `전체는 역사학자 Peter Alegi의 <b>말을 인용</b>한 것. 인용부호 안에 <b>완전한 문장 2개</b>가 들어있고, 중간에 <b>화자를 밝히는 도치 구문</b>이 끼어 있음.<br><br>` +
      `① <b>says historian Peter Alegi</b> (⭐ 인용문 도치): 원래 어순은 <b>historian Peter Alegi(S) says(V)</b>. 인용문 뒤에 화자를 붙일 때 <b>동사(says)를 주어 앞으로 도치</b>하는 게 자연스러운 영어. = "역사학자 Peter Alegi가 말한다".<br>` +
      `&nbsp;&nbsp;• 주의: <b>says</b>가 앞에 나와도 문장의 진짜 주어는 <b>Peter Alegi</b>. (동사가 3인칭 단수 <b>-s</b>인 이유)<br>` +
      `② <b>You don't need to be rich</b> (첫 번째 인용 문장):<br>` +
      `&nbsp;&nbsp;• <b>You(S) + don't need(V) + to be rich(O)</b> 의 3형식.<br>` +
      `&nbsp;&nbsp;• <b>need to + 동사원형</b> = "~할 필요가 있다" → 부정 <b>don't need to</b> = "~할 필요가 <b>없다</b>".<br>` +
      `&nbsp;&nbsp;• <b>to be rich</b> = to부정사의 <b>명사적 용법</b>(need의 목적어) = "부유한 것 / 부자인 것".<br>` +
      `③ <b>…</b> (말줄임표): 원문 인용 중 <b>일부를 생략</b>했다는 표시. (교재가 문장 일부를 잘라 인용)<br>` +
      `④ <b>to play soccer</b> (⭐ to부정사 부사적 용법·목적): "축구를 하기 <b>위해서는</b>". 앞의 "부자일 필요 없다"를 꾸며, <b>무엇을 위해 필요 없는지</b> 목적을 밝힘 = "축구를 하려고 부자일 필요는 없다".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사 3용법(명사·부사) 자세히 →</span><br>` +
      `⑤ <b>You just need a flat space and a ball</b> (두 번째 인용 문장):<br>` +
      `&nbsp;&nbsp;• <b>You(S) + need(V) + a flat space and a ball(O)</b> 의 3형식.<br>` +
      `&nbsp;&nbsp;• <b>just</b> (부사·수식어) = "단지 / 그저". 필요한 게 이것뿐임을 강조.<br>` +
      `&nbsp;&nbsp;• 목적어는 <b>a flat space</b>(평평한 공간) <b>and</b> <b>a ball</b>(공) 두 개를 <b>and로 등위 연결</b>.<br><br>` +
      `📝 <b>해석:</b> "축구를 하는 데 부자일 필요는 없어요," 역사학자 Peter Alegi는 말한다. "그저 평평한 공간과 공 하나만 있으면 됩니다."`,
    trans:
      "\"축구를 하는 데 부자일 필요는 없어요,\" 역사학자 Peter Alegi는 말한다. \"그저 평평한 공간과 공 하나만 있으면 됩니다.\"",
  },

  // 지문 1 · 17번째 문장: It is this unique simplicity that makes soccer the most popular sport in Africa.
  "1-16": {
    form: "It ~ that 강조구문 (원문은 5형식)",
    tense: "단순 현재 (is / makes)",
    chips: [
      ["강조 틀", "It is ~ that …"],
      ["강조 대상(원래 주어)", "this unique simplicity"],
      ["동사(V)", "makes"],
      ["목적어(O)", "soccer"],
      ["목적격보어(OC)·최상급", "the most popular sport"],
      ["수식어(M)", "in Africa"],
    ],
    structure:
      `이 문장은 <b>It is A that B</b> 형태의 <b>강조구문</b>. 강조 장치를 걷어낸 원래 문장은:<br>` +
      `&nbsp;&nbsp;<b>This unique simplicity</b>(S) <b>makes</b>(V) <b>soccer</b>(O) <b>the most popular sport</b>(OC) in Africa. = <b>5형식</b>.<br>` +
      `강조하고 싶은 <b>주어(this unique simplicity)</b>를 <b>It is ~ that</b> 사이에 끼워 "다름 아닌 ~이 …하는 것이다"로 부각한 것.<br><br>` +
      `① <b>It is ~ that</b> (⭐ 강조구문 틀): 여기 <b>It은 '그것'으로 해석하지 않음</b>. 뜻 없는 <b>강조 장치</b>일 뿐. "바로 ~이다"로 옮김.<br>` +
      `② <b>this unique simplicity</b> (강조받는 원래 주어): "바로 이 독특한 단순함". 앞 문장의 simple(단순한)을 명사로 받음.<br>` +
      `③ <b>that</b> (강조구문 연결어): 강조 대상이 사물이라 that. (사람이면 who도 가능) 관계대명사 that과 형태만 같음.<br>` +
      `④ <b>makes soccer the most popular sport</b> (⭐ make + O + OC · 5형식): "축구를(O) 가장 인기 있는 스포츠로(OC) <b>만든다</b>". O와 OC가 <b>soccer = the most popular sport</b> 관계.<br>` +
      `⑤ <b>the most popular</b> (최상급): "가장 인기 있는". popular는 <b>3음절 이상</b>이라 -est가 아니라 <b>most</b>를 붙이고, 최상급엔 <b>the</b>.<br>` +
      `⑥ <b>in Africa</b> (전치사구·수식어): "아프리카에서". 장소.<br><br>` +
      `⭐ <b>구분 팁 (강조구문 vs 가주어 It ~ that):</b> <b>It is</b>와 <b>that</b>을 빼고, 강조 대상을 제자리에 넣었을 때 <b>완전한 문장</b>이 되면 → <b>강조구문</b>. (여기선 "This unique simplicity makes …"로 완전 → 강조구문 확정)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('cleft-sentence','cs-test')">📐 It ~ that 강조구문 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "축구를 아프리카에서 가장 인기 있는 스포츠로 만드는 것은 바로 이 독특한 단순함이다."`,
    trans:
      "축구를 아프리카에서 가장 인기 있는 스포츠로 만드는 것은 바로 이 독특한 단순함이다.",
  },

  // 지문 1 · 18번째 문장: Here, even in rural areas far from the bright lights and big stadiums, children and adults play the game, often with handmade balls.
  "1-17": {
    form: "3형식 (S + V + O)",
    tense: "단순 현재",
    chips: [
      ["수식어(M)·장소", "Here"],
      ["긴 삽입 수식어", "even in rural areas far from … stadiums"],
      ["주어(S)", "children and adults"],
      ["동사(V)", "play"],
      ["목적어(O)", "the game"],
      ["수식어(M)", "often with handmade balls"],
    ],
    structure:
      `수식어(거품)가 잔뜩 껴서 길어 보이지만, <b>거품을 걷어내면</b> 뼈대는 아주 단순함:<br>` +
      `&nbsp;&nbsp;<b>children and adults</b>(S) <b>play</b>(V) <b>the game</b>(O) 의 <b>3형식</b>. 나머지는 전부 수식어.<br><br>` +
      `① <b>Here,</b> (문두 부사·수식어): "이곳에서" = 앞 문장의 <b>Africa(아프리카)</b>를 받음.<br>` +
      `② <b>even in rural areas far from the bright lights and big stadiums,</b> (⭐ 긴 삽입 수식어) — 주어 앞에 끼어들어 문장을 길어 보이게 하는 주범. 통째로 <b>괄호 친 셈</b> 치고 건너뛰면 구조가 보임:<br>` +
      `&nbsp;&nbsp;• <b>even</b> (부사): "심지어" — 강조.<br>` +
      `&nbsp;&nbsp;• <b>in rural areas</b> (전치사구): "시골 지역에서".<br>` +
      `&nbsp;&nbsp;• <b>far from the bright lights and big stadiums</b> (형용사구·후치수식): 앞의 <b>rural areas</b>를 뒤에서 꾸밈 = "밝은 조명과 큰 경기장에서 <b>멀리 떨어진</b>".<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- 원래: rural areas <b>(which are)</b> far from … → <b>주격 관계대명사 + be동사 생략</b>.<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- <b>far from ~</b> = "~에서 멀리 떨어진". <b>the bright lights and big stadiums</b>는 and로 등위 연결.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('participle-postmod','pp-omit')">✂️ (which are) 생략 & 후치수식 자세히 →</span><br>` +
      `③ <b>children and adults</b> (주어): "아이들과 어른들". <b>and</b>로 등위 연결된 복수 주어.<br>` +
      `④ <b>play the game</b> (동사+목적어): "그 게임(축구)을 하다". the game = 앞서 나온 soccer.<br>` +
      `⑤ <b>often with handmade balls</b> (수식어): <b>often</b>(자주) + <b>with handmade balls</b>(손으로 만든 공으로). <b>handmade</b> = hand + made(과거분사)의 합성 형용사 = "손으로 만든".<br><br>` +
      `📝 <b>해석:</b> "이곳에서는, 밝은 조명과 큰 경기장에서 멀리 떨어진 시골 지역에서조차, 아이들과 어른들이 종종 손으로 만든 공으로 그 게임(축구)을 한다."`,
    trans:
      "이곳에서는, 밝은 조명과 큰 경기장에서 멀리 떨어진 시골 지역에서조차, 아이들과 어른들이 종종 손으로 만든 공으로 축구를 한다.",
  },

  // 지문 1 · 19번째 문장: The story of soccer in Africa is a long one.
  "1-18": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재",
    chips: [
      ["주어(S)·핵심명사", "The story"],
      ["수식어(of구)", "of soccer in Africa"],
      ["동사(V)", "is"],
      ["주격보어(C)", "a long one"],
      ["부정대명사", "one = story"],
    ],
    structure:
      `뼈대: <b>The story …</b>(S) + <b>is</b>(V) + <b>a long one</b>(C) 의 <b>2형식</b> (주어 = 보어).<br><br>` +
      `① <b>The story of soccer in Africa</b> (주어): 핵심 명사는 <b>The story</b>, 뒤는 전치사구 수식.<br>` +
      `&nbsp;&nbsp;• <b>of soccer</b> (전치사구): "축구의" — story를 꾸밈.<br>` +
      `&nbsp;&nbsp;• <b>in Africa</b> (전치사구): "아프리카에서의" — 역시 story를 꾸밈. → 합치면 "<b>아프리카 축구의 역사</b>".<br>` +
      `② <b>is</b> (동사): 2형식 be동사. 주어와 보어를 <b>등호(=)</b>로 이어줌.<br>` +
      `③ <b>a long one</b> (⭐ 주격보어 · 부정대명사 one):<br>` +
      `&nbsp;&nbsp;• <b>one</b> = 앞에 나온 <b>단수 가산명사 story</b>의 반복을 피하려고 쓴 <b>부정대명사</b>. 즉 <b>a long one = a long story</b>.<br>` +
      `&nbsp;&nbsp;• 왜 <b>it</b>이 아니라 <b>one</b>? → <b>it</b>은 "바로 그 story(특정)", <b>one</b>은 "(같은 종류의) 이야기 하나". 여기선 형용사 <b>long</b>이 붙어 '긴 <b>하나의</b> 역사'라는 새 정보를 주므로 <b>one</b>. (형용사가 붙어 관사 <b>a</b>와 함께 씀)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('pronoun-one','po-vs-it')">📐 부정대명사 one vs it 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "아프리카에서 축구의 역사는 긴 것(긴 이야기)이다."`,
    trans: "아프리카에서 축구의 역사는 긴 것(긴 이야기)이다.",
  },

  // 지문 1 · 20번째 문장: In the 19th century, European colonists brought the game to Africa.
  "1-19": {
    form: "3형식 (S + V + O)",
    tense: "단순 과거 (brought)",
    chips: [
      ["수식어(M)·시간", "In the 19th century"],
      ["주어(S)", "European colonists"],
      ["동사(V)·과거", "brought"],
      ["목적어(O)", "the game"],
      ["수식어(M)·방향", "to Africa"],
    ],
    structure:
      `뼈대: <b>European colonists</b>(S) + <b>brought</b>(V) + <b>the game</b>(O) 의 <b>3형식</b>. 앞뒤는 수식어.<br><br>` +
      `① <b>In the 19th century,</b> (시간 부사구·수식어): "19세기에". ⭐ <b>서수(19th)</b> 앞이라 <b>the</b>가 붙음. (서수·최상급엔 the)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('articles','ar-the')">📐 관사 the가 붙는 경우 자세히 →</span><br>` +
      `② <b>European colonists</b> (주어): "유럽 (출신) 식민지 개척자들". <b>European</b>은 형용사, <b>colonists</b>는 복수 명사. 특정 관사 없이 쓴 <b>불특정 복수</b>.<br>` +
      `③ <b>brought</b> (동사): ⭐ <b>bring의 불규칙 과거</b>. <b>bring – brought – brought</b>. "가져왔다 / 전했다".<br>` +
      `④ <b>the game</b> (목적어): "그 게임" = 앞서 계속 나온 <b>soccer</b>. 서로 아는 것이라 <b>the</b>.<br>` +
      `⑤ <b>to Africa</b> (방향 전치사구·수식어): "아프리카로".<br>` +
      `&nbsp;&nbsp;• ⭐ <b>bring A to B</b> = "A를 B로 가져오다". 여기 B(Africa)가 <b>장소</b>라 <b>to+장소</b> 방향 부사구 → <b>3형식</b>.<br>` +
      `&nbsp;&nbsp;• (참고) B가 <b>사람</b>이면 <b>bring B A</b>(4형식)로도 씀: bring <u>me</u> the ball = bring the ball <u>to me</u>.<br>` +
      `&nbsp;&nbsp;• <b>Africa</b>는 고유명사 → <b>무관사</b>.<br><br>` +
      `📝 <b>해석:</b> "19세기에, 유럽 식민지 개척자들이 그 게임(축구)을 아프리카로 가져왔다(전했다)."`,
    trans: "19세기에, 유럽 식민지 개척자들이 그 게임(축구)을 아프리카에 전했다.",
  },

  // 지문 1 · 21번째 문장: Early matches were first played in the South African cities of Cape Town and Port Elizabeth in 1862.
  "1-20": {
    form: "1형식 (수동태)",
    tense: "단순 과거 (수동태 were played)",
    chips: [
      ["주어(S)", "Early matches"],
      ["동사(V)·수동태", "were (first) played"],
      ["수식어(M)·장소", "in the South African cities …"],
      ["동격의 of", "of Cape Town and Port Elizabeth"],
      ["수식어(M)·시간", "in 1862"],
    ],
    structure:
      `뼈대: <b>Early matches</b>(S) + <b>were played</b>(V·수동태). play는 타동사지만 <b>수동태</b>라 목적어 없이 → <b>1형식(수동태)</b>. "초기 경기들이 (누군가에 의해) <b>치러졌다</b>".<br><br>` +
      `① <b>Early matches</b> (주어): "초기 경기들". <b>Early</b>(형용사) + <b>matches</b>(복수 명사).<br>` +
      `② <b>were first played</b> (⭐ 수동태 + 부사 삽입):<br>` +
      `&nbsp;&nbsp;• <b>were played</b> = <b>be(were) + 과거분사(played)</b> = 과거 수동태 "치러졌다 / 열렸다". 경기는 스스로 하는 게 아니라 '치러지는' 대상이라 수동.<br>` +
      `&nbsp;&nbsp;• <b>first</b> (부사) = "처음으로". <b>be동사와 과거분사 사이</b>에 끼워 넣음 (were <u>first</u> played).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('passive-voice','pv-form')">📐 수동태 be + p.p. 자세히 →</span><br>` +
      `③ <b>in the South African cities of Cape Town and Port Elizabeth</b> (장소 전치사구):<br>` +
      `&nbsp;&nbsp;• <b>the South African cities</b> = "그 남아프리카 도시들". <b>South African</b>은 고유형용사(대문자).<br>` +
      `&nbsp;&nbsp;• ⭐ <b>of Cape Town and Port Elizabeth</b> = <b>동격의 of</b>! "케이프타운과 포트엘리자베스<b>라는</b> (도시들)". 여기 <b>of</b>는 '~의'가 아니라 '<b>즉/라는</b>'. (the city <b>of</b> Seoul = 서울이라는 도시)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-apposition')">🧬 of의 종류(동격의 of) 자세히 →</span><br>` +
      `④ <b>in 1862</b> (시간 전치사구): "1862년에".<br><br>` +
      `📝 <b>해석:</b> "초기 경기들은 1862년에 남아프리카의 도시 케이프타운과 포트엘리자베스에서 처음으로 열렸다."`,
    trans: "초기 경기들은 1862년 남아프리카의 도시 케이프타운과 포트엘리자베스에서 처음으로 열렸다.",
  },

  // 지문 1 · 22번째 문장: In time, the sport spread across the continent.
  "1-21": {
    form: "1형식 (S + V)",
    tense: "단순 과거 (spread)",
    chips: [
      ["수식어(M)·시간(숙어)", "In time"],
      ["주어(S)", "the sport"],
      ["동사(V)·과거", "spread"],
      ["수식어(M)·장소", "across the continent"],
    ],
    structure:
      `뼈대: <b>the sport</b>(S) + <b>spread</b>(V) 의 <b>1형식</b> (주어 + 자동사). 앞뒤는 수식어.<br><br>` +
      `① <b>In time,</b> (⭐ 시간 부사구·숙어·수식어): "이윽고 / 시간이 지나면서 / 마침내".<br>` +
      `&nbsp;&nbsp;• ⚠️ <b>함정: in time ≠ on time!</b><br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- <b>in time</b> = 시간이 흘러 <b>이윽고</b> (또는 '늦지 않게').<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- <b>on time</b> = <b>정각에</b> / 시간 딱 맞춰.<br>` +
      `② <b>the sport</b> (주어): "그 스포츠" = 축구. 앞에 계속 나온 것이라 <b>the</b>.<br>` +
      `③ <b>spread</b> (동사): ⭐ <b>불규칙 무변화 동사</b> — 원형·과거·과거분사가 모두 같음 (<b>spread – spread – spread</b>). 여기선 문맥상 <b>과거</b> "퍼졌다". 자동사로 "퍼지다".<br>` +
      `&nbsp;&nbsp;• 같은 무변화 동사: <b>cut, put, hit, set, let, cost</b> (read는 철자만 같고 발음이 달라짐).<br>` +
      `④ <b>across the continent</b> (장소 전치사구·수식어): "대륙 전역에 걸쳐". <b>across</b> = 가로질러/전역. <b>the continent</b> = 앞서 나온 <b>Africa(아프리카 대륙)</b>, 재등장이라 the.<br><br>` +
      `📝 <b>해석:</b> "이윽고(시간이 지나면서), 그 스포츠(축구)는 대륙 전역으로 퍼져 나갔다."`,
    trans: "이윽고, 그 스포츠(축구)는 대륙 전역으로 퍼져 나갔다.",
  },

  // 지문 1 · 23번째 문장: Today, several of the game's best players come from African nations, including Senegal, Ivory Coast, Ghana, and Nigeria.
  "1-22": {
    form: "1형식 (S + V)",
    tense: "단순 현재 (come)",
    chips: [
      ["수식어(M)·시간", "Today"],
      ["주어(S)·부분의 of", "several of the game's best players"],
      ["동사(V)", "come (from)"],
      ["수식어(M)·출신", "from African nations"],
      ["분사→전치사", "including …"],
    ],
    structure:
      `뼈대: <b>several …</b>(S) + <b>come</b>(V) 의 <b>1형식</b> (come from = 자동사구). 나머지는 수식어.<br><br>` +
      `① <b>Today,</b> (시간 부사·수식어): "오늘날".<br>` +
      `② <b>several of the game's best players</b> (⭐ 주어 · 부분의 of):<br>` +
      `&nbsp;&nbsp;• <b>several of the ~</b> = "그 ~ <b>중 몇몇</b>". <b>수량표현 + of + the(특정) 명사</b> = <b>부분의 of</b>.<br>` +
      `&nbsp;&nbsp;• <b>the game's best players</b> = "그 게임(축구)의 최고 선수들". <b>the game's</b>(소유격) + <b>best</b>(최상급) + players.<br>` +
      `&nbsp;&nbsp;• ⚡ 수일치: 동사는 <b>of 뒤 명사(players·복수)</b>에 맞춰 <b>come</b>(복수형). "several of the players comes" ✗<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분의 of & 수일치 자세히 →</span><br>` +
      `③ <b>come from African nations</b> (동사+출신 수식어): <b>come from ~</b> = "~ 출신이다 / ~에서 오다". <b>African nations</b> = 아프리카 국가들 (불특정 복수 → 무관사).<br>` +
      `④ <b>including Senegal, Ivory Coast, Ghana, and Nigeria</b> (⭐ 분사 → 전치사 including):<br>` +
      `&nbsp;&nbsp;• <b>including</b> = "~을 포함하여". 원래 include(포함하다)의 분사가 <b>전치사처럼 굳어진 것</b>. 뒤에 예시를 나열.<br>` +
      `&nbsp;&nbsp;• 콤마로 분리된 <b>부연 설명</b>이라, 없어도 문장은 완전 (앞의 African nations의 구체적 예).<br><br>` +
      `📝 <b>해석:</b> "오늘날, 그 게임(축구)의 최고 선수들 중 몇몇은 세네갈, 코트디부아르, 가나, 나이지리아를 포함한 아프리카 국가들 출신이다."`,
    trans: "오늘날, 축구의 최고 선수들 중 몇몇은 세네갈, 코트디부아르, 가나, 나이지리아를 포함한 아프리카 국가들 출신이다.",
  },
};

/* ---------- 문법 정리 (공부한 내용 채우기) ----------
   공부한 문법을 항목으로 추가하세요. 형식:
   {
     title: "관계대명사 who / which / that",
     tag: "핵심",                       // 기초 / 핵심 / 심화 등 자유
     body: "선행사를 뒤 문장이 꾸며줄 때 사용...",
     eg: [
       ["주격", "the man who lives here", "여기 사는 그 남자"],
       ["목적격", "the book which I read", "내가 읽은 그 책"]
     ]
   }
   지금은 비어 있음 → 앱에는 '문법 채워넣기' 안내가 표시됩니다. */
const GRAMMAR = [
  {
    id: "relative-pronoun",
    title: "관계대명사 (who / which / that / what)",
    tag: "핵심 · 자주 나옴",
    body:
      `관계대명사는 <b>접속사 + 대명사</b> 역할을 동시에 함. 앞의 명사(<b>선행사</b>)를 뒤 문장이 꾸며주는데, 이때 뒤 문장은 주어나 목적어가 하나 빠진 <b>‘불완전한 절’</b>이 됨.<br>` +
      `<div id="rp-incomplete" class="g-sub">` +
      `<b>❓ 왜 ‘불완전한 절’인가?</b><br>` +
      `관계대명사 자신이 그 <b>빠진 자리(주어·목적어)를 대신</b>하기 때문. 원래 두 문장을 하나로 합치면서 겹치는 명사를 관계대명사로 바꿔 앞으로 빼냈기 때문에, 뒤에는 그 자리가 <b>빈 채로</b> 남음.<br>` +
      `예) the book <u>which I read __</u> → read의 <b>목적어 자리가 비어</b> 있고, which가 그 자리를 대신함.` +
      `</div>` +
      `<div id="rp-what" class="g-sub">` +
      `<b>⭐ 관계대명사 what = the thing(s) which/that (“~하는 것”)</b><br>` +
      `who·which·that은 <b>앞에 선행사가 꼭 필요</b>하지만, <b>what은 선행사를 자기 안에 이미 포함</b>('the thing which'). 그래서 앞에 꾸밀 명사가 없어도 홀로 서고, <b>what절 전체가 통째로 명사 역할</b>(주어·목적어·보어)을 함.<br><br>` +
      `<b>🤔 “the world now calls football, 주어·동사·목적어 다 있는데 왜 불완전해?”</b><br>` +
      `얼핏 the world(주어)+calls(동사)+football(목적어)처럼 보이지만, 함정은 동사 <b>call의 형식</b>에 있음.<br><br>` +
      `<b>① call은 5형식 동사: “A를 B라고 부르다” = call + A(목적어) + B(목적격보어)</b><br>` +
      `완전한 문장이면 동사 뒤에 명사가 <b>두 개</b> 와야 함.<br>` +
      `예) The world now calls <u>this game</u> <u>football</u>. = 세상은 <b>이 게임을(A·목적어)</b> <b>풋볼이라고(B·목적격보어)</b> 부른다.<br><br>` +
      `<b>② 그런데 이 절은 목적어(A) 자리가 텅 비어 있음 🚨</b><br>` +
      `What the world now calls __ football<br>` +
      `· the world = 주어　· now calls = 동사　· <u>__ (비어 있음)</u> = 목적어(A, “~를”)　· football = <b>목적격보어(B, “~라고”)</b><br>` +
      `👉 <b>핵심 반전:</b> football은 목적어가 아니라 <b>목적격보어(“~라고”)</b>! 정작 “무엇을(A)”에 해당하는 <b>목적어 자리가 비어서</b> 불완전한 것.<br><br>` +
      `<b>③ 그 빈 목적어 자리를 what이 채움</b><br>` +
      `What the world now calls football = The thing <u>which</u> the world now calls __ football = “세상이 현재 <b>(그것을)</b> 풋볼이라 부르는 <b>그것</b>”.<br>` +
      `what은 <b>빠진 목적어 역할 + 선행사(명사)까지 스스로 품기</b> 때문에 문법적으로 100% 맞음.` +
      `</div>` +
      `<div id="rp-object-omit" class="g-sub">` +
      `<b>✂️ 목적격 관계대명사(which·whom·that)는 생략 가능!</b><br>` +
      `관계대명사가 뒤 절에서 <b>목적어 역할</b>이면 <b>that으로 바꾸거나 아예 생략</b>할 수 있음. (단, <b>주격은 생략 불가!</b>)<br><br>` +
      `<b>예) the sport we know today</b><br>` +
      `· 원래: the sport <u>(which/that)</u> we know today ← <b>목적격 관계대명사가 생략</b>됨<br>` +
      `· we know <u>__</u> today 에서 <b>know의 목적어 자리가 비어</b> 있고, 그 자리가 the sport(선행사)를 가리킴 = “우리가 오늘날 아는 그 스포츠”.<br><br>` +
      `<b>🔎 생략됐는지 판별법:</b> 명사 뒤에 곧바로 <b>[주어 + 동사]</b>가 나오면, 그 사이에 목적격 관계대명사가 생략된 것!<br>` +
      `the sport <u>we know</u> = 명사 + (주어 we + 동사 know) → 사이에 which/that 생략.<br><br>` +
      `<b>주격 vs 목적격 한눈에:</b><br>` +
      `· 주격(뒤에 바로 동사): the man <u>who</u> lives here → <b>생략 불가</b><br>` +
      `· 목적격(뒤에 주어+동사): the book <u>(which)</u> I read → <b>생략/​that 가능</b>` +
      `</div>` +
      `<div id="rp-object-full" class="g-sub">` +
      `<b>⭕ 목적격 관계대명사 → 100% 생략 가능!</b><br>` +
      `목적격(who/whom/which/that) 뒤엔 [주어+동사]가 옴. 관계사를 지워도 <b>[명사 + 주어 + 동사]</b>가 부딪히며 "아, 뒤에서 앞 명사를 꾸미는구나"를 0.1초에 눈치챌 수 있어 원어민은 99% 생략함.<br>` +
      `· This is the guitar <u>(which/that)</u> I bought. = This is the guitar I bought. (⭕)<br>` +
      `· She is the girl <u>(who/whom)</u> I like. = She is the girl I like. (⭕)<br>` +
      `💡 독해 꿀팁: 접속사도 없이 <b>[명사]+[주어]+[동사]</b>가 연달아 나오면 → 가운데 목적격 관계대명사 생략! 뒤에서 앞 명사 꾸며 읽기.` +
      `</div>` +
      `<div id="rp-subject-omit" class="g-sub">` +
      `<b>🚨 주격 관계대명사는 혼자서 생략 불가!</b><br>` +
      `주격(who/which/that) 뒤엔 주어 없이 <b>바로 동사</b>가 옴. 접착제를 지우면 한 문장에 동사 두 개가 충돌해 난장판이 됨.<br>` +
      `· I know a boy <u>who</u> likes soccer. (⭕)<br>` +
      `· I know a boy likes soccer. (❌ know와 likes 충돌!)<br><br>` +
      `<b>⭐ 유일한 예외: [주격 관계대명사 + be동사]는 통째로 생략!</b><br>` +
      `주격 뒤에 be(is/are/was/were) + <b>분사/형용사</b>가 올 때, [주격 + be]를 세트로 날림.<br>` +
      `· some bags <u>(which are)</u> tied together → some bags tied together (⭕)<br>` +
      `· the boy <u>(who is)</u> playing soccer → the boy playing soccer (⭕)<br>` +
      `👉 이게 바로 '분사의 후치수식'과 이어짐. <span class="wikilink" onclick="gotoGrammar('participle-postmod','pp-omit')">✂️ 후치수식 자세히 →</span>` +
      `</div>`,
    eg: [
      ["주격 who (사람)", "the man who lives here", "여기 사는 그 남자"],
      ["목적격 which (사물)", "the book which I read", "내가 읽은 그 책"],
      ["what (선행사 포함)", "What he said is true.", "그가 말한 것은 사실이다."],
    ],
  },
  {
    id: "participle-construction",
    title: "분사구문 (Participial Construction)",
    tag: "핵심 · 자주 나옴",
    body:
      `분사구문 = <b>[접속사 + 주어 + 동사]로 된 부사절을, -ing(분사) 하나로 짧게 줄인 것</b>. 문장을 간결하고 세련되게 만듦. 뜻은 문맥에 따라 <b>시간·이유·조건·동시동작·결과</b> 등으로 해석.<br>` +
      `<div id="pc-make" class="g-sub">` +
      `<b>🛠️ 만드는 3단계 (원래 문장 → 분사구문)</b><br>` +
      `이 지문의 예: 원래 문장은 <u>and it truly makes soccer the world's sport</u> 였음.<br>` +
      `① <b>접속사 삭제</b>: and 를 지움<br>` +
      `② <b>주어 삭제</b>: 주절과 (의미상) 주어가 같으면 주어(it)를 지움<br>` +
      `③ <b>동사 → -ing</b>: makes → <b>making</b><br>` +
      `= <b>truly making soccer the world's sport</b> ✅` +
      `</div>` +
      `<div id="pc-meaning" class="g-sub">` +
      `<b>이 문장에서의 의미 = ‘결과(그래서 ~하다)’</b><br>` +
      `“…, 그리고 그것이 축구를 세계의 스포츠로 만든다” → 앞 내용의 <b>결과</b>를 덧붙이는 분사구문.<br>` +
      `속 구조까지 뜯으면 <b>make + O + OC (5형식)</b>: making(분사) + soccer(목적어) + the world's sport(목적격보어) = ‘축구를 세계의 스포츠로 만들다’.` +
      `</div>`,
    eg: [
      ["원래 부사절", "As she smiled, she waved at me.", "그녀는 웃으면서 나에게 손을 흔들었다."],
      ["분사구문으로 축약", "Smiling, she waved at me.", "(웃으며) 나에게 손을 흔들었다."],
    ],
  },
  {
    id: "so-roles",
    title: "so의 세 가지 얼굴 (접속사·부사·담화표지)",
    tag: "핵심",
    body:
      `같은 <b>so</b>라도 놓이는 자리에 따라 역할이 완전히 달라짐. 헷갈리지 않게 셋으로 구분!<br>` +
      `<div id="so-conjunction" class="g-sub">` +
      `<b>① 등위접속사 so = ‘그래서 (결과·인과)’</b><br>` +
      `[완전한 문장] , so [완전한 문장] → 앞이 원인, 뒤가 결과.<br>` +
      `예) It rained, <b>so</b> we stayed home. (비가 왔다, 그래서 집에 있었다.)<br>` +
      `※ 지난 문장(and 편)에서 봤듯, 역사 서술에선 이 so 대신 <b>and</b>로 결과를 부드럽게 흘리기도 함. so는 인과를 <b>논리적으로 못박는</b> 느낌.` +
      `</div>` +
      `<div id="so-adverb" class="g-sub">` +
      `<b>② 정도 부사 so = ‘그토록 / 그렇게 / 매우’</b><br>` +
      `so + <b>형용사/부사</b> → 정도를 강조. 예) soccer is <b>so</b> popular (축구는 <b>그토록</b> 인기 있다).<br>` +
      `cf. <b>so ~ that …</b> (너무 ~해서 …하다) 구문으로도 확장됨.` +
      `</div>` +
      `<div id="so-discourse" class="g-sub">` +
      `<b>③ 담화표지(문두) So, = ‘자 / 그렇다면 / 그럼’</b><br>` +
      `문장 맨 앞 + 콤마. 앞 내용을 받아 <b>다음 화제·질문으로 자연스럽게 넘어가는 신호</b>. 문장 성분(S·V·O) 계산엔 안 들어감.<br>` +
      `예) <b>So,</b> why is soccer so popular? (자, 그렇다면 축구는 왜 그토록 인기일까?)` +
      `</div>`,
    eg: [
      ["① 결과 접속사", "I was tired, so I slept.", "피곤해서 (그래서) 잤다."],
      ["② 정도 부사", "It's so cold today.", "오늘 너무 춥다."],
      ["③ 담화표지(문두)", "So, what's next?", "자, 다음은 뭐야?"],
    ],
  },
  {
    id: "appositive-that",
    title: "동격의 that (~라는)",
    tag: "핵심 · 자주 나옴",
    body:
      `추상명사 뒤의 that절이 그 명사의 <b>내용을 그대로 설명</b>할 때 = <b>동격의 that("~라는")</b>. [명사] = [that절] 관계.<br>` +
      `자주 함께 쓰는 명사: <b>the fact / the feeling / the idea / the news / the belief / the hope</b> 등.<br>` +
      `<div id="at-vs-relative" class="g-sub">` +
      `<b>⚔️ 동격 that vs 관계대명사 that — 한 방에 구별!</b><br>` +
      `that 뒤 문장이 <b>완전하면 동격</b>, <b>불완전(주어·목적어가 빠짐)하면 관계대명사</b>.<br><br>` +
      `· <b>동격 that</b>: the feeling <u>that the team is your team</u> → 뒤 절이 S+V+C 다 갖춘 <b>완전한 문장</b> = "~라는 느낌"<br>` +
      `· <b>관계대명사 that</b>: the book <u>that I read __</u> → read의 <b>목적어가 빠진 불완전한 절</b> = "내가 읽은 책"` +
      `</div>`,
    eg: [
      ["동격 that (~라는)", "the fact that he lied", "그가 거짓말했다는 사실"],
      ["동격 that (~라는)", "the news that we won", "우리가 이겼다는 소식"],
      ["cf. 관계대명사 that", "the man that I met __", "내가 만난 그 남자 (목적어 빠짐)"],
    ],
  },
  {
    id: "of-types",
    title: "of의 여러 종류 (소유 · 동격 · 내용 · 부분)",
    tag: "핵심",
    body:
      `of는 그냥 '~의'가 아님. 크게 4가지로 구분하면 해석이 정확해짐.<br>` +
      `<div id="of-possess" class="g-sub">` +
      `<b>① 소유·소속의 of ('~의')</b><br>` +
      `가장 기본. A of B = 'B의 A'. 예) the leg of the table (탁자의 다리).` +
      `</div>` +
      `<div id="of-apposition" class="g-sub">` +
      `<b>② 동격의 of ('A라는 B', 앞 = 뒤)</b><br>` +
      `앞 명사 = of 뒤 명사. 예) the city of Seoul (서울이라는 도시), the Chinese game of cuju (축국이라는 중국 게임).` +
      `</div>` +
      `<div id="of-content" class="g-sub">` +
      `<b>③ 내용의 of ('~에 대한 / ~라는 내용의')</b><br>` +
      `promise·hope·chance·dream·fear 같은 <b>추상명사 뒤</b>에서 그 명사의 <b>알맹이(내용)</b>를 채움.<br>` +
      `예) <b>the promise of great wealth</b> = '막대한 부를 얻을 수 있다는 기대·보장'.<br>` +
      `the dream <b>of</b> success (성공하겠다는 꿈) / the chance <b>of</b> winning (이길 가능성) / the fear <b>of</b> failure (실패에 대한 두려움).<br>` +
      `💡 꿀팁: <b>the promise of ~</b> 는 '손가락 건 약속'이 아니라 <b>'~을 얻을 수 있다는 기대·가능성'</b>으로 의역하면 원어민 뉘앙스 100%.` +
      `</div>` +
      `<div id="of-partitive" class="g-sub">` +
      `<b>④ 부분의 of ('~ 중에서', 전체 속의 일부)</b><br>` +
      `<b>수량표현 + of + the(특정) 명사</b> 꼴. "<b>정해진 전체</b> 중 일부"를 콕 집음.<br>` +
      `&nbsp;&nbsp;some / many / most / several / all / each / one / none <b>of the</b> ~<br>` +
      `예) <b>several of the players</b> = "그 선수들 <b>중 몇몇</b>". / most of the money (그 돈의 대부분).<br>` +
      `⭐ <b>of 뒤엔 반드시 the·소유격·this 같은 '한정어'</b>가 붙은 특정 명사 (several of <s>players</s> ✗ → several of <b>the</b> players ✓, several players ✓).<br>` +
      `⚡ <b>수일치 함정:</b> 동사는 <b>of 뒤 명사</b>에 맞춤. some of the <u>money</u> <b>is</b> (단수) / some of the <u>players</u> <b>are</b> (복수).` +
      `</div>`,
    eg: [
      ["① 소유의 of", "the leg of the table", "탁자의 다리"],
      ["② 동격의 of", "the city of Seoul", "서울이라는 도시"],
      ["③ 내용의 of", "the promise of great wealth", "막대한 부를 얻는다는 기대"],
      ["④ 부분의 of", "several of the best players", "최고 선수들 중 몇몇"],
    ],
  },
  {
    id: "both-usage",
    title: "both의 3가지 용법 (of를 쓸까 말까)",
    tag: "핵심 · 함정 주의",
    body:
      `both 뒤에 <b>of를 언제 쓰고 언제 빼는지</b>가 함정으로 자주 나옴!<br>` +
      `<div id="both-must-of" class="g-sub">` +
      `<b>① 대명사(us/you/them) 앞 → of 필수! 🚨</b><br>` +
      `Both <b>of</b> them are players. (⭕) / Both them are players. (❌ 삐!)<br>` +
      `Both of us / Both of you 처럼 <b>both of + 대명사</b>는 무조건 세트.` +
      `</div>` +
      `<div id="both-optional-of" class="g-sub">` +
      `<b>② the / these / my + 명사 앞 → of 있어도 없어도 OK ⚖️ (뜻 100% 동일)</b><br>` +
      `Both <b>of</b> these players … (⭕ 본문) = Both these players … (⭕ of 빼도 완벽!)<br>` +
      `⚠️ <b>함정 주의:</b> 시험에서 'Both these players'처럼 <b>of를 뺀 문장</b>을 주고 "틀린 것 고르라"고 해도 <b>이건 문법적으로 맞음!</b> 낚이지 말 것.<br>` +
      `뉘앙스: 회화에선 of 빼는 게 더 흔하고, 격식 있는 글에선 of를 넣는 편.` +
      `</div>` +
      `<div id="both-no-of" class="g-sub">` +
      `<b>③ of를 쓰면 안 되는 경우 ❌</b><br>` +
      `· 일반명사 바로 앞: Both <b>players</b> are amazing. (Both of players ❌ — of 쓰려면 the/these 필요)<br>` +
      `· 부사처럼 뒤에: They <b>both</b> like soccer. / I want <b>both</b>.<br>` +
      `· <b>Both A and B</b>: Both Neymar and Moses came from poor families.` +
      `</div>`,
    eg: [
      ["대명사 → of 필수", "Both of them are players.", "그들 둘 다 선수다."],
      ["the/these → of 자유", "Both (of) these players earn a lot.", "이 두 선수 모두 많이 번다."],
      ["Both A and B", "Both Neymar and Moses were poor.", "네이마르와 모지스 둘 다 가난했다."],
    ],
  },
  {
    id: "participle-postmod",
    title: "분사의 후치수식 & (관계대명사+be) 생략",
    tag: "핵심 · 자주 나옴",
    body:
      `명사 뒤에 분사(-ing / p.p.)가 붙어 그 명사를 <b>뒤에서 꾸미는 것</b> = 후치수식. 대개 <b>[주격 관계대명사 + be동사]가 생략</b>된 형태.<br>` +
      `<div id="pp-omit" class="g-sub">` +
      `<b>✂️ (which/who + be) 생략 원리</b><br>` +
      `some bags <u>which are</u> tied together → 주격 관계사 which + be(are) 생략 → <b>some bags tied together</b>.<br>` +
      `관계사절이 <b>[주격 관계사 + be + 분사/형용사]</b>일 때만 통째로 생략 가능.` +
      `</div>` +
      `<div id="pp-active-passive" class="g-sub">` +
      `<b>🔑 현재분사(-ing) vs 과거분사(p.p.) 고르기</b><br>` +
      `· 명사가 동작을 <b>하는</b> 주체(능동) → <b>현재분사 -ing</b>: the man <u>running</u> (뛰고 있는 남자)<br>` +
      `· 명사가 동작을 <b>당하는</b> 대상(수동) → <b>과거분사 p.p.</b>: some bags <u>tied</u> together (묶여 있는 가방들)<br>` +
      `👉 가방은 스스로 묶는 게 아니라 '묶이는' 대상이라 <b>tied(과거분사)</b>! (tying이면 '묶고 있는'이라 틀림)` +
      `</div>`,
    eg: [
      ["과거분사(수동)", "a language spoken in Korea", "한국에서 쓰이는 언어"],
      ["현재분사(능동)", "the boy playing soccer", "축구하고 있는 소년"],
      ["(which is) 생략", "the book (which is) written by her", "그녀가 쓴 책"],
    ],
  },
  {
    id: "punctuation",
    title: "문장 부호 5대장 — 강조와 연결의 도구",
    tag: "핵심",
    body:
      `이 5가지는 단순히 문법을 나누는 선이 아니라, <b>“이 정보가 얼마나 중요한가(강조 세기)”</b> 와 <b>“앞뒤를 어떻게 연결할까(호흡·흐름)”</b> 를 조절하는 장치.<br><br>` +
      `<b>① 부연설명 트리오 (중간에 끼워넣기)</b> — 강조 세기가 다름.<br>` +
      `&nbsp;&nbsp;대시 <b>—</b> (확성기·확 튐) &gt; 쉼표 <b>,</b> (기본·자연스러움) &gt; 괄호 <b>( )</b> (귓속말·빼도 됨).<br><br>` +
      `<b>② 연결 듀오 (앞뒤 잇기)</b> — 연결 방식이 다름.<br>` +
      `<div id="pn-colon" class="g-sub">` +
      `<b>🎁 콜론 : — 앞 내용의 구체적 설명·정답·목록을 공개</b><br>` +
      `앞 = 뒤 <b>등호(=)</b> 관계. "…, 그게 뭐냐면 → (짜잔)". 콜론 앞은 보통 완전한 문장.<br>` +
      `예) We need three things<b>:</b> guitar, cable, and amplifier.` +
      `</div>` +
      `<div id="pn-semicolon" class="g-sub">` +
      `<b>🔗 세미콜론 ; — 접속사 없이 밀접한 두 완전한 문장을 연결</b><br>` +
      `and/but 같은 접속사 대신 씀. 마침표(.)보다 약하고 쉼표(,)보다 강함. <b>양쪽 모두 완전한 문장</b>이어야 함.<br>` +
      `예) I practiced all night<b>;</b> my fingers hurt so much.` +
      `</div>`,
    eg: [
      ["엠 대시 —  ·  확성기 (강조·반전)", "My best friend —the one who hates sports— came to my match.", "내 베프가 —참고로 걔 스포츠 극혐인데— 내 경기에 왔어."],
      ["쉼표 ,  ·  기본 숨고르기 (자연스러운 보충)", "My best friend, Kim, came to my match.", "내 베프인 Kim이 내 경기에 왔어."],
      ["괄호 ( )  ·  귓속말 (사소한 참고 정보)", "Football (also known as soccer in the US) is a global sport.", "풋볼은 (미국에선 사커로도 알려졌지만) 세계적인 스포츠다."],
      ["콜론 :  ·  짜잔 (앞내용 = 뒤 설명·목록)", "We need three things: guitar, cable, and amplifier.", "우린 세 가지가 필요해: 기타, 케이블, 그리고 앰프."],
      ["세미콜론 ;  ·  접속사 대체 (밀접한 두 문장 연결)", "I practiced all night; my fingers hurt so much.", "밤새 기타를 연습했다; (그 결과) 손가락이 너무 아프다."],
    ],
  },
  {
    id: "to-infinitive",
    title: "to부정사 3용법 — 명사·형용사·부사",
    tag: "핵심",
    body:
      `<b>to + 동사원형</b> 은 동사를 잠깐 다른 품사로 <b>변신</b>시키는 만능 장치. 문장에서 <b>어떤 자리에 있느냐</b>로 용법이 갈림. "왜 여기 to부정사가 왔지?"를 자리로 판단하는 게 핵심.<br><br>` +
      `<div id="ti-noun" class="g-sub">` +
      `<b>① 명사적 용법 — 명사 자리(주어·목적어·보어)에서 "~하는 것"</b><br>` +
      `동사의 <b>목적어</b> 자리에 오면 "~하기/~하는 것". want / need / hope / decide / plan 등이 자주 데려옴.<br>` +
      `예) You don't need <b>to be</b> rich. = 부유<b>할 (것을)</b> 필요는 없다.<br>` +
      `예) I want <b>to play</b> soccer. = 나는 축구<b>하기를</b> 원한다.` +
      `</div>` +
      `<div id="ti-adverb" class="g-sub">` +
      `<b>② 부사적 용법 — 문장을 꾸밈. 대표 뜻 "~하기 위해(목적)"</b><br>` +
      `없어도 문장이 성립하는 <b>수식어</b>. "왜?/무엇을 위해?"에 답하면 <b>목적</b>. (그 밖에 감정의 원인·결과 등도 있음)<br>` +
      `예) ... <b>to play</b> soccer = 축구를 하기 <b>위해</b>. (= in order to play)<br>` +
      `예) I came here <b>to see</b> you. = 너를 보<b>려고</b> 여기 왔다.` +
      `</div>` +
      `<b>③ 형용사적 용법 — 앞의 명사를 뒤에서 꾸밈 "~할/~하는"</b><br>` +
      `명사 뒤에 붙어 후치수식. 예) something <b>to eat</b>(먹을 것), a chance <b>to win</b>(이길 기회).<br><br>` +
      `⭐ <b>구분 요령:</b> 동사 <b>바로 뒤 목적어 자리</b>면 → 명사적. 이미 완전한 문장에 <b>덤으로 붙어</b> "왜?"에 답하면 → 부사적(목적). <b>명사 뒤</b>에 붙으면 → 형용사적.`,
    eg: [
      ["명사적 (목적어) · ~하는 것", "You don't need to be rich to play soccer.", "축구를 하려고 부자일 필요는 없다. (to be = need의 목적어)"],
      ["부사적 (목적) · ~하기 위해", "You just need a ball to play.", "(경기)하기 위해 공 하나만 있으면 된다."],
      ["형용사적 · ~할 (명사 수식)", "We have a game to win.", "우리에겐 이겨야 할 경기가 있다."],
    ],
  },
  {
    id: "cleft-sentence",
    title: "It ~ that 강조구문 — '바로 ~이다'",
    tag: "핵심",
    body:
      `문장에서 <b>딱 한 부분</b>을 골라 "<b>다름 아닌 바로 이것</b>!"이라고 확성기를 대는 장치. 강조하고 싶은 말을 <b>It is</b> 와 <b>that</b> 사이에 끼워 넣음.<br><br>` +
      `<b>기본 공식:</b> <b>It is</b> + [강조할 것] + <b>that</b> + [나머지].<br>` +
      `&nbsp;&nbsp;원문: <u>This simplicity</u> makes soccer popular. (이 단순함이 축구를 인기있게 만든다)<br>` +
      `&nbsp;&nbsp;→ 강조: <b>It is</b> <u>this simplicity</u> <b>that</b> makes soccer popular. (축구를 인기있게 만드는 건 <b>바로 이 단순함</b>이다)<br><br>` +
      `<b>포인트</b><br>` +
      `• 여기 <b>It</b>은 '그것'이 <b>아님</b> — 뜻 없는 강조 장치. 해석 안 함.<br>` +
      `• 강조 대상이 <b>사람</b>이면 that 대신 <b>who</b>, <b>사물</b>이면 that/which, <b>시간·장소</b>면 when/where도 가능.<br>` +
      `• <b>주어·목적어·부사구</b>는 강조 가능하지만, <b>동사</b>는 이 틀로 강조 못 함.<br><br>` +
      `<div id="cs-test" class="g-sub">` +
      `<b>🔍 강조구문 vs 가주어 It ~ that 구별법 (시험 단골!)</b><br>` +
      `<b>It is</b> 와 <b>that</b>을 <b>지우고</b>, 강조 대상을 원래 자리에 넣어 봐라.<br>` +
      `&nbsp;&nbsp;• <b>완전한 문장</b>이 되면 → <b>강조구문</b> (that 이하가 주어/목적어 하나가 빠진 불완전).<br>` +
      `&nbsp;&nbsp;• 넣을 자리가 없고 that절이 <b>이미 완전</b>하면 → <b>가주어-진주어</b> (It = 뒤 that절).<br>` +
      `예) It is <u>this simplicity</u> that makes soccer popular. → 지우면 "This simplicity makes soccer popular"(완전) = <b>강조구문</b> ✅<br>` +
      `예) It is <u>true</u> that he left. → true를 넣을 자리 없음, "he left"는 이미 완전 = <b>가주어</b> (그가 떠난 건 사실이다)` +
      `</div>`,
    eg: [
      ["주어 강조", "It is this simplicity that makes soccer popular.", "축구를 인기있게 만드는 건 바로 이 단순함이다."],
      ["목적어 강조", "It was soccer that they loved most.", "그들이 가장 사랑한 건 바로 축구였다."],
      ["부사구(장소) 강조", "It was in Africa that the sport spread fast.", "그 스포츠가 빠르게 퍼진 건 바로 아프리카에서였다."],
    ],
  },
  {
    id: "pronoun-one",
    title: "부정대명사 one — 같은 종류의 '하나' (≠ it)",
    tag: "핵심",
    body:
      `<b>one</b> 은 앞에 나온 <b>단수 가산명사</b>의 반복을 피하려고 쓰는 대명사. 단, "<b>바로 그것</b>"이 아니라 "<b>같은 종류의 (불특정한) 하나</b>"를 가리킴.<br><br>` +
      `<div id="po-vs-it" class="g-sub">` +
      `<b>🔍 one vs it — 시험 최다 함정</b><br>` +
      `• <b>it</b> = 앞에 나온 <b>바로 그것</b> (특정 · the + 명사).<br>` +
      `• <b>one</b> = 같은 <b>종류</b> 중 <b>아무거나 하나</b> (a + 명사).<br>` +
      `예) I lost my pen. I need to buy <b>one</b>. → <b>one = a pen</b> (아무 펜이나 새로)<br>` +
      `예) I lost my pen. Where is <b>it</b>? → <b>it = the pen</b> (잃어버린 바로 그 펜)` +
      `</div>` +
      `<b>포인트</b><br>` +
      `• 형용사가 붙으면 <b>a long one</b>, <b>the red one</b> 처럼 관사와 함께.<br>` +
      `• 복수는 <b>ones</b>. 예) the red <b>ones</b> (빨간 것들).<br>` +
      `• <b>불가산명사</b>는 one으로 못 받음 (예: water → one ✗). 이땐 반복 생략하거나 some/it 사용.`,
    eg: [
      ["one = a + 명사 (같은 종류)", "The story is a long one.", "그 이야기는 긴 것(긴 이야기)이다. (one = story)"],
      ["one vs it", "I lost my ball; I'll buy one. Where is it?", "공을 잃었다; 하나 살게(아무 공). 그건 어딨지?(그 공)"],
      ["복수 ones", "I like the red ones.", "난 빨간 것들이 좋다."],
    ],
  },
  {
    id: "articles",
    title: "관사 a / an / the / 무관사 — 3갈래로 끝내기",
    tag: "핵심",
    body:
      `명사를 쓸 때마다 딱 <b>3가지 중 하나</b>를 고르는 게임. "이걸 왜 여기서 안 썼지?"의 답은 대부분 <b>③ 무관사</b>에 있음.<br><br>` +
      `<b>🚦 판단 순서 (이 순서로 자문):</b><br>` +
      `&nbsp;&nbsp;1️⃣ 화자·청자가 <b>'바로 그거!'</b>로 아는 특정한 것? → <b>the</b><br>` +
      `&nbsp;&nbsp;2️⃣ 아니면, <b>셀 수 있는 단수</b>가 <b>불특정 하나</b>? → <b>a / an</b><br>` +
      `&nbsp;&nbsp;3️⃣ 둘 다 아니면 (복수·불가산의 <b>일반론</b>, 추상·고유명사 등) → <b>무관사</b><br><br>` +

      `<div id="ar-a" class="g-sub">` +
      `<b>① a / an — 셀 수 있는 단수 · 불특정 '하나' (처음 등장)</b><br>` +
      `• "여럿 중 아무거나 하나 / 이제 처음 꺼내는 것"에 붙임.<br>` +
      `• <b>a vs an은 '소리' 기준</b> (철자 아님!): <b>자음 소리</b> 앞 <b>a</b>, <b>모음 소리</b> 앞 <b>an</b>.<br>` +
      `&nbsp;&nbsp;예) <b>a</b> university (유~ 소리=자음), <b>an</b> hour (아워, h묵음=모음), <b>an</b> honest man<br>` +
      `• <b>복수·불가산엔 a/an 못 붙임</b> (a waters ✗, a rules ✗).` +
      `</div>` +

      `<div id="ar-the" class="g-sub">` +
      `<b>② the — 서로 아는 '바로 그거!' (특정)</b><br>` +
      `언제 특정이 되나? 대표 5가지:<br>` +
      `&nbsp;&nbsp;㉠ <b>앞에 이미 나온 것</b> 재등장: a ball … kick <b>the</b> ball.<br>` +
      `&nbsp;&nbsp;㉡ <b>세상에 하나뿐</b>: <b>the</b> sun, <b>the</b> world, <b>the</b> globe.<br>` +
      `&nbsp;&nbsp;㉢ <b>뒤 수식어로 콕 집힘</b>: <b>the</b> story <u>of soccer</u>, <b>the</b> sport <u>we know today</u>.<br>` +
      `&nbsp;&nbsp;㉣ <b>최상급·서수·only</b>: <b>the</b> most popular, <b>the</b> first, <b>the</b> only way.<br>` +
      `&nbsp;&nbsp;㉤ <b>연주 악기</b>: play <b>the</b> piano.` +
      `</div>` +

      `<div id="ar-zero" class="g-sub">` +
      `<b>③ 무관사 (관사 없음) — ⭐가장 헷갈리는 자리⭐</b><br>` +
      `"왜 the/a가 없지?" 싶으면 십중팔구 아래 중 하나:<br>` +
      `&nbsp;&nbsp;• <b>복수/불가산의 '일반적·총칭'</b>: <u>Humans</u> play <u>games</u>. / <u>Water</u> is life. ("인간이란/물이란 원래")<br>` +
      `&nbsp;&nbsp;• <b>추상명사 총칭</b>: throughout <u>history</u>, promote <u>peace</u>, <u>love</u> is blind.<br>` +
      `&nbsp;&nbsp;• <b>운동·식사·과목·언어</b>: play <u>soccer</u>, have <u>lunch</u>, study <u>English</u>.<br>` +
      `&nbsp;&nbsp;• <b>고유명사(대부분)</b>: <u>Africa</u>, <u>Britain</u>, <u>Peter</u>. (단, <b>the</b> United States, <b>the</b> Netherlands처럼 예외 존재)<br>` +
      `&nbsp;&nbsp;• <b>관용표현</b>: by <u>bus</u>, at <u>school</u>, go <u>home</u>, at <u>night</u>.` +
      `</div>` +

      `<b>⚡ 헷갈림 킬러 — 같은 명사, 관사 하나로 뜻이 갈림</b><br>` +
      `• <u>History</u> is important. (역사<b>라는 것 전체</b>·총칭 → 무관사) vs <b>The</b> history <u>of soccer</u> is long. (축구의 역사 = 콕 집힘 → the)<br>` +
      `• He plays <u>soccer</u>. (운동 → 무관사) vs He plays <b>the</b> piano. (악기 → the)<br>` +
      `• I need <b>a</b> pen. (아무 펜 하나) vs Give me <b>the</b> pen. (우리 둘 다 아는 그 펜)`,
    eg: [
      ["a/an · 불특정 하나(처음 등장)", "England's FA established a set of rules.", "잉글랜드 축구협회가 일련의 규칙을 제정했다. (처음 언급 → a)"],
      ["the · 뒤 수식어로 특정", "the sport we know today", "우리가 오늘날 아는 그 스포츠 (we know today가 콕 집음 → the)"],
      ["the · 최상급", "the most popular sport in Africa", "아프리카에서 가장 인기 있는 스포츠 (최상급 → the)"],
      ["무관사 · 추상명사 총칭", "Throughout history, humans played games.", "역사 전체에 걸쳐, 인간은 게임을 해왔다. (history 총칭 → 무관사)"],
      ["무관사 · 복수 총칭 + 운동", "Anyone can play soccer.", "누구나 축구를 할 수 있다. (운동 soccer → 무관사)"],
    ],
  },
  {
    id: "passive-voice",
    title: "수동태 be + p.p. — '~되다 / 당하다'",
    tag: "핵심",
    body:
      `주어가 행동을 <b>직접 하면</b> 능동태, 행동을 <b>당하거나 받으면</b> 수동태. "누가 했느냐"보다 "<b>무엇이 어떻게 되었느냐</b>"가 중요할 때 씀.<br><br>` +
      `<div id="pv-form" class="g-sub">` +
      `<b>🔧 공식: be동사 + 과거분사(p.p.)</b> — 시제·수는 <b>be동사</b>가 담당, 의미는 p.p.가 담당.<br>` +
      `&nbsp;&nbsp;• 현재: is/are <b>played</b> · 과거: was/were <b>played</b><br>` +
      `&nbsp;&nbsp;• 완료: has been <b>played</b> · 조동사: can be <b>played</b><br>` +
      `행위자를 밝히려면 <b>by + 행위자</b> (모르거나 뻔하면 자주 생략).<br>` +
      `부사는 <b>be와 p.p. 사이</b>: were <u>first</u> played, is <u>always</u> played.` +
      `</div>` +
      `<div id="pv-when" class="g-sub">` +
      `<b>🔄 능동 → 수동 3단계</b><br>` +
      `&nbsp;&nbsp;1️⃣ 목적어 → 주어로 &nbsp; 2️⃣ 동사 → <b>be + p.p.</b> &nbsp; 3️⃣ 주어 → <b>by + 목적격</b><br>` +
      `예) People play soccer. → <b>Soccer is played</b> (by people).<br>` +
      `⚠️ <b>목적어가 있는 타동사만</b> 수동태 가능. <b>자동사</b>(happen, occur, appear, arrive…)는 <b>수동태 불가</b> (was happened ✗).` +
      `</div>`,
    eg: [
      ["과거 수동태", "Early matches were played in 1862.", "초기 경기들은 1862년에 열렸다. (경기 = 치러지는 대상)"],
      ["조동사 + be p.p.", "Soccer can be played anywhere.", "축구는 어디서든 행해질 수 있다."],
      ["by 행위자", "The rules were made by the FA.", "그 규칙들은 축구협회에 의해 만들어졌다."],
    ],
  },
];
