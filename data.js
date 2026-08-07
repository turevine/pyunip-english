/* =========================================================
   콘텐츠 데이터 — 공부하면서 여기만 채우면 앱이 커집니다.
   (이 파일만 고치면 됨. 로직/디자인은 건드릴 필요 없음)
   ========================================================= */

/* ---------- 단어카드 ----------
   지문별로 넣으면 단어카드 화면에서 지문별로 골라 볼 수 있어요.
   새 단어는 해당 지문 번호(1~8) 배열에 추가만 하면 됩니다. */
const WORDS_BY_PASSAGE = {
  1: [
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
  { word: "recruit",          pos: "v./n.", meaning: "모집하다, 채용하다; 신입", example: "Academies recruit boys to play the game." },
  { word: "bare",             pos: "a.",    meaning: "벌거벗은, 맨-",             example: "learn to play in their bare feet (맨발로)" },
  { word: "immigrant",        pos: "n.",    meaning: "(들어온) 이민자, 이주민",   example: "immigrants and Muslims faced discrimination" },
  { word: "promote",          pos: "v.",    meaning: "증진하다, 촉진하다; 홍보/승진시키다", example: "has helped to promote peace (평화를 증진하다)" },
  { word: "especially",       pos: "ad.",   meaning: "특히, 특별히",              example: "young people—especially boys—in school" },
  { word: "compete",          pos: "v.",    meaning: "경쟁하다, 겨루다 (자동사: compete with/against ~와, for ~을 두고)", example: "200 teams competed to get a place." },
  { word: "region",           pos: "n.",    meaning: "지역, 지방, 권역",            example: "national teams from six regions" },
  { word: "represent",        pos: "v.",    meaning: "대표하다, 나타내다",          example: "each team represents a country" },
  { word: "although",         pos: "conj.", meaning: "비록 ~이지만 (양보 접속사, 뒤에 완전한 문장; = though)", example: "Although each team represents a country, ..." },
  { word: "citizenship",      pos: "n.",    meaning: "시민권, 국적 (dual citizenship 이중국적)", example: "dual citizenship (having two nationalities)" },
  { word: "influence",        pos: "v./n.", meaning: "영향을 미치다(타동사, 바로 목적어); 영향 (명사는 influence on ~)", example: "It influences which country a player plays for." },
  ],

  /* ----- 지문 2: What makes an Olympic champion ----- */
  2: [
  { word: "capable of",       pos: "phr.", meaning: "~을 할 수 있는 (be capable of + 명사/동명사) — ①자질·역량 ②(나쁜 짓까지) 극단적 성향, 둘 다 표현 가능", example: "She is capable of leading the whole team. (역량) · He is capable of doing anything for money. (극단적 성향)" },
  { word: "combination",      pos: "n.",   meaning: "조합, 결합 (a combination of A, B, C)", example: "a combination of biological and psychological factors" },
  { word: "biological",       pos: "a.",   meaning: "생물학적인",                  example: "biological factors" },
  { word: "environmental",    pos: "a.",   meaning: "환경의, 환경적인",            example: "environmental factors" },
  { word: "psychological",    pos: "a.",   meaning: "심리적인, 정신적인",          example: "psychological factors" },
  { word: "factor",           pos: "n.",   meaning: "요인, 요소",                  example: "the most important factor" },
  { word: "involve",          pos: "v.",   meaning: "관련시키다, 수반하다; (be involved in) ~에 관여/연관되다 (be involved in + (동)명사)", example: "the most important factor involved in becoming an elite athlete (엘리트 선수가 되는 데 관련된 가장 중요한 요인)" },
  { word: "as well as",       pos: "phr.", meaning: "~뿐만 아니라, ~도 역시 (A as well as B → A에 초점)", example: "training and practice, as well as genes" },
  { word: "go into",          pos: "phr.", meaning: "~에 들어가다; ~에 (많이) 쓰이다/투입되다", example: "Many factors go into making a super athlete." },
  { word: "athlete",          pos: "n.",   meaning: "운동선수",                    example: "a super athlete" },
  { word: "elite",            pos: "a./n.", meaning: "정예의, 최고 수준의; 엘리트", example: "an elite athlete" },
  { word: "genetic",          pos: "a.",   meaning: "유전의, 유전적인 (n. gene 유전자)", example: "The factor is genetic." },
  { word: "competitor",       pos: "n.",   meaning: "경쟁자; (대회) 참가 선수 (v. compete)", example: "Olympic competitors" },
  { word: "be equipped with", pos: "phr.", meaning: "~을 갖추고 있다, ~이 장착되어 있다", example: "athletes equipped with certain characteristics" },
  { word: "certain",          pos: "a.",   meaning: "①어떤, 특정한 (a certain ~) ②확실한, 틀림없는 (be certain of/that)", example: "certain physical characteristics (어떤 특정한 신체적 특성들)" },
  { word: "characteristic",   pos: "n./a.", meaning: "특징, 특성; 특유의",         example: "certain physical characteristics" },
  { word: "differentiate",    pos: "v.",   meaning: "구별하다, 구분 짓다 (differentiate A from B: A를 B와 구분(구별)하다)", example: "characteristics that differentiate them from others" },
  { word: "average",          pos: "a./n.", meaning: "평균의, 보통의; 평균",       example: "the average person" },
  { word: "take A for example", pos: "phr.", meaning: "A를 예로 들다, 예를 들어 A를 보자 (명령문으로 예시를 꺼내는 표현 = for example)", example: "Take an elite athlete's muscles, for example. (엘리트 선수의 근육을 예로 들어보자.)" },
  { word: "skeletal muscle",  pos: "n.",   meaning: "골격근 (뼈를 움직이는 근육)",  example: "human skeletal muscles" },
  { word: "fiber",            pos: "n.",   meaning: "섬유, 섬유질 (근섬유 muscle fiber)", example: "fast-twitch fibers" },
  { word: "twitch",           pos: "v./n.", meaning: "씰룩거리다, 경련하다; 씰룩임 (fast-twitch 속근 / slow-twitch 지근)", example: "fast-twitch and slow-twitch fibers" },
  { word: "weightlifter",     pos: "n.",   meaning: "역도 선수 (weightlifting 역도)", example: "Olympic weightlifters" },
  { word: "allow",            pos: "v.",   meaning: "허락하다; ~할 수 있게 해주다 (5형식: allow + O + to부정사 = O가 ~하도록 허락하다/~할 수 있게 하다)", example: "These allow them to lift hundreds of kilos. (이것들이 그들이 수백 kg을 들 수 있게 해준다.)" },
  { word: "muscular",         pos: "a.",   meaning: "근육질의, 근육의",            example: "a large, muscular body" },
  { word: "requirement",      pos: "n.",   meaning: "요건, 필요조건 (v. require 요구하다)", example: "the main requirement to do well" },
  { word: "on the other hand", pos: "phr.", meaning: "반면에, 다른 한편으로는",     example: "The marathon runner, on the other hand, ..." },
  { word: "contain",          pos: "v.",   meaning: "포함하다, ~이 들어 있다",      example: "legs might contain 90 percent slow-twitch fibers" },
  { word: "up to",            pos: "phr.", meaning: "~까지 (최대); ~에 달려 있는",   example: "up to 90 percent" },
  { word: "generate",         pos: "v.",   meaning: "만들어내다, 발생시키다",        example: "These generate energy efficiently." },
  { word: "efficiently",      pos: "ad.",  meaning: "효율적으로 (a. efficient)",     example: "generate energy efficiently" },
  { word: "enable",           pos: "v.",   meaning: "~을 할 수 있게 하다 (enable A to V)", example: "enable an athlete to control fatigue" },
  { word: "fatigue",          pos: "n.",   meaning: "피로, 피곤 (= tiredness)",      example: "control fatigue" },
  { word: "period",           pos: "n.",   meaning: "기간, 시기; (한) 시대; 마침표 (a period of time 얼마간의 시간 / for a long period 오랫동안)", example: "keep moving for a longer period of time (더 오랜 시간 동안 계속 움직이다)" },
  { word: "substance",        pos: "n.",   meaning: "물질",                        example: "a substance called lactate" },
  { word: "lactate",          pos: "n.",   meaning: "젖산 (운동 시 근육에 쌓이는 물질)", example: "The muscles produce lactate." },
  { word: "remove",           pos: "v.",   meaning: "제거하다, 없애다, 치우다",      example: "can't remove it quickly enough" },
  { word: "clear",            pos: "v.",   meaning: "없애다, 제거하다; 치우다 (clear A from B: B에서 A를 치우다/제거하다)", example: "clear the lactate from their muscles" },
  { word: "discomfort",       pos: "n.",   meaning: "불편함, (가벼운) 통증 (↔comfort 편안함)", example: "start to feel discomfort" },
  { word: "halfway",          pos: "ad.",  meaning: "중간에, 도중에 (halfway into ~ 의 중간쯤에)", example: "halfway into a race" },
  { word: "enhance",          pos: "v.",   meaning: "향상시키다, 높이다 (= improve)", example: "abilities enhanced by their environment" },
  { word: "raise",            pos: "v.",   meaning: "기르다, 양육하다; 올리다 (be raised 자라다)", example: "those raised at high altitudes" },
  { word: "altitude",         pos: "n.",   meaning: "고도, 해발 높이 (high altitude 고지대)", example: "raised at high altitudes" },
  { word: "hemoglobin",       pos: "n.",   meaning: "헤모글로빈 (혈액 속 산소 운반 물질)", example: "blood rich in hemoglobin" },
  { word: "oxygen",           pos: "n.",   meaning: "산소",                        example: "carry oxygen around the body" },
  { word: "be due to",        pos: "phr.", meaning: "~때문이다, ~에 기인하다 (due to + 명사)", example: "success is due to her country's altitude" },
  { word: "punish",           pos: "v.",   meaning: "벌하다, 처벌하다 (n. punishment)", example: "I'd be punished if I was late." },
  { word: "play a part",      pos: "phr.", meaning: "역할을 하다, 한몫하다 (= play a role)", example: "Genes play a part in becoming an athlete." },
  { word: "perfect",          pos: "v.",   meaning: "완성하다, 완벽하게 하다 (동사일 때 강세는 뒤: perféct)", example: "perfect their skills" },
  { word: "motion",           pos: "n.",   meaning: "동작, 움직임",                example: "repeating the same motions" },
  { word: "automatic",        pos: "a.",   meaning: "자동적인, 무의식적인, 반사적인", example: "until they become automatic" },
  { word: "takeoff",          pos: "n.",   meaning: "도약, 점프; (비행기) 이륙",     example: "three seconds from takeoff" },
  { word: "reflex",           pos: "n.",   meaning: "반사 (작용), 반사 신경",       example: "It has to be reflex." },
  { word: "handle",           pos: "v.",   meaning: "다루다, 감당하다, 처리하다",    example: "couldn't handle the training loads" },
  { word: "load",             pos: "n.",   meaning: "부하, 부담, 짐 (training load 훈련량)", example: "the training loads we put on them" },
  { word: "anxiety",          pos: "n.",   meaning: "불안(감), 걱정 (a. anxious)",   example: "managing anxiety" },
  { word: "adjust to",        pos: "phr.", meaning: "~에 적응하다, 순응하다 (adjust 조절하다)", example: "adjust to such intense pressure" },
  { word: "intense",          pos: "a.",   meaning: "강렬한, 극심한 (intense pressure 극심한 압박)", example: "such intense pressure" },
  { word: "compliment",       pos: "v./n.", meaning: "칭찬하다; 칭찬 (≠complement 보완하다)", example: "compliment me on the beautiful splash" },
  { word: "splash",           pos: "n./v.", meaning: "물보라, 첨벙(하는 소리); 튀기다", example: "the beautiful splash" },
  { word: "gymnast",          pos: "n.",   meaning: "체조 선수 (gymnastics 체조)",   example: "male and female gymnasts" },
  { word: "suffer",           pos: "v.",   meaning: "(피해·고통을) 겪다, 당하다 (suffer damage 손상을 입다)", example: "less likely to suffer damage" },
  { word: "with ease",        pos: "phr.", meaning: "쉽게, 수월하게 (= easily)",     example: "move with greater ease" },
  ],

  /* ----- 지문 3: What is Beauty? ----- */
  3: [
  { word: "span",             pos: "v./n.", meaning: "(기간·범위에) 걸치다, 아우르다; 폭", example: "The search for beauty spans centuries." },
  { word: "continent",        pos: "n.",   meaning: "대륙 (a. continental)",         example: "spans centuries and continents" },
  { word: "date back",        pos: "phr.", meaning: "(시간을) 거슬러 올라가다 (date back to ~로 거슬러 올라가다)", example: "paintings dating back over 4,000 years" },
  { word: "makeup",           pos: "n.",   meaning: "화장, 화장품 (wear makeup 화장하다)", example: "wearing makeup" },
  { word: "on the other side of", pos: "phr.", meaning: "~의 반대편에, 건너편에",     example: "on the other side of the globe" },
  { word: "globe",            pos: "n.",   meaning: "지구, 전 세계; 지구본 (the globe)", example: "the other side of the globe" },
  { word: "ancient",          pos: "a.",   meaning: "고대의, 아주 오래된 (↔modern)",  example: "the ancient Maya" },
  { word: "consider",         pos: "v.",   meaning: "~라고 여기다/생각하다; 고려하다 (consider A B: A를 B로 여기다)", example: "considered crossed eyes beautiful" },
  { word: "hang",             pos: "v.",   meaning: "매달다, 걸다 (hung-hung); (사람을) 교수형에 처하다(hanged)", example: "hung little balls between the eyes" },
  { word: "develop",          pos: "v.",   meaning: "발달시키다, 발전하다; (병·습관을) 키우다", example: "to develop this look" },
  { word: "wealthy",          pos: "a.",   meaning: "부유한, 재산이 많은 (= rich, n. wealth)", example: "wealthy noblemen" },
  { word: "nobleman",         pos: "n.",   meaning: "귀족 (noble 고귀한/귀족의)",      example: "wealthy noblemen wore wigs" },
  { word: "wig",              pos: "n.",   meaning: "가발",                          example: "large wigs of white hair" },
  { word: "attractive",       pos: "a.",   meaning: "매력적인, 마음을 끄는 (v. attract 끌다)", example: "to make themselves attractive" },
  { word: "throughout",       pos: "prep.", meaning: "~의 전역에 걸쳐; ~내내",         example: "in cultures throughout the world" },
  { word: "go to extreme lengths", pos: "phr.", meaning: "극단적인 노력을 하다, 무슨 짓이든 하다", example: "People have gone to extreme lengths to achieve beauty." },
  { word: "achieve",          pos: "v.",   meaning: "이루다, 달성하다, 성취하다 (n. achievement)", example: "to achieve beauty" },
  { word: "devote",           pos: "v.",   meaning: "(시간·노력을) 바치다, 쏟다 (devote A to B)", example: "devote a lot of time and money to appearance" },
  { word: "appearance",       pos: "n.",   meaning: "외모, 겉모습; 출현 (v. appear)",  example: "devote time to their appearance" },
  { word: "according to",     pos: "phr.", meaning: "~에 따르면, ~에 의하면",          example: "According to a recent report, ..." },
  { word: "consumer",         pos: "n.",   meaning: "소비자 (v. consume 소비하다)",    example: "one out of three consumers" },
  { word: "globally",         pos: "ad.",  meaning: "전 세계적으로 (= worldwide)",     example: "consumers globally" },
  { word: "than ever before", pos: "phr.", meaning: "그 어느 때보다 (더)",            example: "spending more money than ever before" },
  { word: "cosmetic surgery", pos: "n.",   meaning: "성형수술 (cosmetic 미용의/화장의)", example: "gym memberships and cosmetic surgery" },
  { word: "desire",           pos: "n./v.", meaning: "욕구, 열망; 바라다",            example: "the desire to be attractive" },
  { word: "perceive",         pos: "v.",   meaning: "인식하다, ~로 여기다 (be perceived as ~로 여겨지다, n. perception)", example: "are perceived as friendlier" },
  { word: "good-looking",     pos: "a.",   meaning: "잘생긴, 보기 좋은",              example: "good-looking people make more money" },
  { word: "call on",          pos: "phr.", meaning: "(수업에서) 지목하다, 시키다; 방문하다", example: "get called on more often in class" },
  { word: "define",          pos: "v.",   meaning: "정의하다, 규정하다 (n. definition)", example: "Trying to define it is difficult." },
  { word: "yet",              pos: "ad./conj.", meaning: "그러나, 그럼에도; 아직 (and yet 그럼에도)", example: "and yet we know it when we see it" },
  { word: "psychologist",     pos: "n.",   meaning: "심리학자 (psychology 심리학)",    example: "says one psychologist" },
  { word: "billboard",        pos: "n.",   meaning: "광고판, 게시판",                 example: "It's a billboard saying, I'm healthy." },
  { word: "pass on",          pos: "phr.", meaning: "물려주다, 전하다; (기회를) 넘기다", example: "I can pass on your genes!" },
  { word: "awareness",        pos: "n.",   meaning: "인식, 자각 (a. aware 알고 있는)",  example: "our awareness of it" },
  { word: "a series of",      pos: "phr.", meaning: "일련의, 연속된",                 example: "a series of photographs" },
  { word: "rate",             pos: "v.",   meaning: "평가하다, 등급을 매기다 (n. 비율/요금)", example: "faces rated for attractiveness" },
  { word: "attractiveness",   pos: "n.",   meaning: "매력, 매력적임",                 example: "rated for attractiveness" },
  { word: "judge",            pos: "v.",   meaning: "판단하다, 평가하다; 심사하다",     example: "even babies judge appearance" },
  { word: "make sense",       pos: "phr.", meaning: "말이 되다, 이해가 되다, 타당하다", example: "The idea makes perfect sense." },
  { word: "researcher",       pos: "n.",   meaning: "연구자, 연구원 (research 연구)",   example: "makes sense to many researchers" },
  { word: "preference",       pos: "n.",   meaning: "선호, 더 좋아함 (show a preference for ~을 선호하다, v. prefer)", example: "men showed a preference for women with certain features" },
  { word: "feature",          pos: "n.",   meaning: "특징; (pl.) 이목구비, 용모",      example: "women with certain features" },
  { word: "waist",            pos: "n.",   meaning: "허리 (≠waste 낭비하다)",          example: "large shoulders and a narrow waist" },
  { word: "unconsciously",    pos: "ad.",  meaning: "무의식적으로 (↔consciously, conscious 의식하는)", example: "the mind unconsciously tells us" },
  { word: "trait",            pos: "n.",   meaning: "특성, 특징 (= characteristic)",   example: "these traits equal health" },
  { word: "equal",            pos: "v.",   meaning: "~와 같다, ~에 해당하다; 동등한",   example: "these traits equal health" },
  { word: "well-being",       pos: "n.",   meaning: "안녕, 행복, 복지",               example: "health and genetic well-being" },
  { word: "in other words",   pos: "phr.", meaning: "다시 말해, 즉",                  example: "In other words, it's human nature." },
  { word: "fundamental",      pos: "a.",   meaning: "근본적인, 기본적인 (= basic, essential)", example: "a fundamental part of human nature" },
  { word: "human nature",     pos: "n.",   meaning: "인간의 본성",                    example: "a fundamental part of human nature" },
  { word: "mate",             pos: "n.",   meaning: "짝, 배우자; 친구",               example: "look for these qualities in a mate" },
  { word: "notion",           pos: "n.",   meaning: "개념, 생각, 관념 (= idea)",       example: "Not everyone agrees with this notion." },
  { word: "hardwired",        pos: "a.",   meaning: "타고난, (기질이) 내장된 (hardwiredness 타고난 성질)", example: "Our hardwiredness can be altered." },
  { word: "alter",            pos: "v.",   meaning: "바꾸다, 변경하다 (= change, ≠altar 제단)", example: "can be altered by expectations" },
  { word: "all sorts of",     pos: "phr.", meaning: "온갖 종류의, 갖가지의 (= all kinds of)", example: "all sorts of expectations" },
  { word: "expectation",      pos: "n.",   meaning: "기대, 예상 (v. expect)",         example: "altered by cultural expectations" },
  { word: "predominantly",    pos: "ad.",  meaning: "주로, 대개 (= mainly)",           example: "expectations—predominantly cultural" },
  { word: "anthropologist",   pos: "n.",   meaning: "인류학자 (anthropology 인류학)",  example: "an anthropologist at the University of Michigan" },
  { word: "thin",             pos: "a.",   meaning: "마른, 여윈; 얇은 (↔thick 두꺼운)", example: "the women on the pages are thin" },
  { word: "biologist",        pos: "n.",   meaning: "생물학자 (biology 생물학)",       example: "a biologist from Great Britain" },
  { word: "subjective",       pos: "a.",   meaning: "주관적인 (↔objective 객관적인)",   example: "what is beautiful is subjective" },
  { word: "vary",             pos: "v.",   meaning: "다르다, 다양하다, 달라지다 (a. various 다양한)", example: "varies around the world" },
  { word: "native",           pos: "a./n.", meaning: "원주민의, 토박이의; 원주민 (native peoples 원주민)", example: "native peoples in southeast Peru" },
  { word: "regard",           pos: "v.",   meaning: "~로 여기다/간주하다 (regard A as B); 존중", example: "shapes regarded as overweight" },
  { word: "overweight",       pos: "a.",   meaning: "과체중의, 비만의 (↔underweight)",  example: "regarded as overweight" },
  { word: "symbol",           pos: "n.",   meaning: "상징, 표상 (v. symbolize)",       example: "a symbol of health and strength" },
  { word: "strength",         pos: "n.",   meaning: "힘, 강함, 강점 (a. strong, v. strengthen)", example: "a symbol of strength" },
  { word: "decorate",         pos: "v.",   meaning: "장식하다, 꾸미다 (n. decoration)", example: "style and decorate their hair" },
  { word: "be associated with", pos: "phr.", meaning: "~와 연관되다, 관련되다 (associate A with B)", example: "a behavior associated with the opposite gender" },
  { word: "opposite",         pos: "a./n.", meaning: "반대의, 맞은편의; 정반대",        example: "the opposite gender" },
  { word: "object",           pos: "n.",   meaning: "대상, 물체; 목적 (objects of beauty 미의 대상)", example: "the objects of beauty" },
  { word: "celebration",      pos: "n.",   meaning: "기념행사, 축하 (v. celebrate)",   example: "festivals and celebrations" },
  { word: "dress up",         pos: "phr.", meaning: "잘 차려입다, 정장하다; 분장하다",  example: "men dress up and paint their faces" },
  { word: "masculine",        pos: "a.",   meaning: "남성적인, 남자다운 (↔feminine 여성스러운)", example: "the more masculine he is considered" },
  { word: "for better or worse", pos: "phr.", meaning: "좋든 나쁘든, 좋으나 궂으나",    example: "For better or worse, beauty plays a role." },
  { word: "universally",      pos: "ad.",  meaning: "보편적으로, 누구에게나 (a. universal)", example: "traits considered universally appealing" },
  { word: "appealing",        pos: "a.",   meaning: "매력적인, 마음을 끄는 (v. appeal 호소하다)", example: "universally appealing" },
  { word: "conform to",       pos: "phr.", meaning: "~에 따르다, 순응하다, 부합하다",   example: "beauty does not conform to a single standard" },
  { word: "uniform",          pos: "a./n.", meaning: "획일적인, 일정한; 제복",         example: "a single, uniform standard" },
  { word: "standard",         pos: "n.",   meaning: "기준, 표준, 수준",               example: "a uniform standard" },
  { word: "in the eye of the beholder", pos: "phr.", meaning: "보는 사람의 눈에 달려 있는 (제 눈에 안경; beholder 보는 사람)", example: "Beauty is in the eye of the beholder." },
  { word: "as the saying goes", pos: "phr.", meaning: "속담처럼, 흔히 말하듯이",        example: "as the saying goes" },
  ],

  /* ----- 지문 4: Skin — The body's canvas ----- */
  4: [
  { word: "lay",              pos: "v.",   meaning: "놓다, 눕히다 (lay-laid-laid, 타동사; ≠lie 눕다/lie-lay-lain)", example: "take off your skin and lay it flat" },
  { word: "flat",             pos: "a./ad.", meaning: "평평한; 평평하게",              example: "lay it flat" },
  { word: "square meter",     pos: "n.",   meaning: "제곱미터 (square 정사각형의/제곱)", example: "about 1.9 square meters" },
  { word: "by far",           pos: "phr.", meaning: "단연코, 훨씬 (최상급 강조)",       example: "by far the body's largest organ" },
  { word: "organ",            pos: "n.",   meaning: "(신체) 장기, 기관; 오르간",        example: "the body's largest organ" },
  { word: "entire",           pos: "a.",   meaning: "전체의, 온전한 (= whole, ad. entirely)", example: "covering almost the entire body" },
  { word: "protect",          pos: "v.",   meaning: "보호하다, 지키다 (protect A from B, n. protection)", example: "skin protects us from external forces" },
  { word: "a variety of",     pos: "phr.", meaning: "다양한, 여러 가지의 (+복수명사)",  example: "a variety of external forces" },
  { word: "external",         pos: "a.",   meaning: "외부의, 밖의 (↔internal 내부의)",  example: "external forces" },
  { word: "force",            pos: "n.",   meaning: "힘, 세력; 물리력",               example: "external forces" },
  { word: "extreme",          pos: "n./a.", meaning: "극단, 극도; 극단적인 (extremes of temperature 극한의 기온)", example: "extremes of temperature" },
  { word: "temperature",      pos: "n.",   meaning: "온도, 기온; 체온",               example: "extremes of temperature" },
  { word: "damaging",         pos: "a.",   meaning: "해로운, 손상을 주는 (n./v. damage)", example: "damaging sunlight" },
  { word: "harmful",          pos: "a.",   meaning: "해로운, 유해한 (↔harmless, n. harm)", example: "harmful chemicals" },
  { word: "chemical",         pos: "n./a.", meaning: "화학물질; 화학의",              example: "harmful chemicals" },
  { word: "infection",        pos: "n.",   meaning: "감염, 전염병 (v. infect, a. infectious)", example: "dangerous infections" },
  { word: "be packed with",   pos: "phr.", meaning: "~로 가득 차 있다, 빽빽하다",       example: "Skin is packed with nerves." },
  { word: "nerve",            pos: "n.",   meaning: "신경; (pl.) 긴장, 용기 (a. nervous)", example: "packed with nerves" },
  { word: "keep in touch with", pos: "phr.", meaning: "~와 연락/접촉을 유지하다",       example: "keeps the brain in touch with the outside world" },
  { word: "perform",          pos: "v.",   meaning: "수행하다, 실행하다; 공연하다 (n. performance)", example: "perform its protective functions" },
  { word: "protective",       pos: "a.",   meaning: "보호하는, 방어적인",             example: "its protective functions" },
  { word: "function",         pos: "n./v.", meaning: "기능; 기능하다, 작동하다",        example: "protective functions" },
  { word: "crucial",          pos: "a.",   meaning: "중대한, 결정적인 (= critical, essential)", example: "crucial to our well-being" },
  { word: "equally",          pos: "ad.",  meaning: "똑같이, 동등하게 (a. equal)",      example: "equally important" },
  { word: "planet",           pos: "n.",   meaning: "행성; 지구 (on this planet 이 지구상에)", example: "many people on this planet" },
  { word: "determine",        pos: "v.",   meaning: "결정하다, 좌우하다; 알아내다 (n. determination)", example: "Your genes determine your skin's color." },
  { word: "lighten",          pos: "v.",   meaning: "밝게/환하게 하다; 가볍게 하다 (light+en, ↔darken)", example: "products used to lighten skin" },
  { word: "darken",          pos: "v.",   meaning: "어둡게 하다, 어두워지다 (dark+en)", example: "lighten or darken their skin" },
  { word: "in an attempt to", pos: "phr.", meaning: "~하려는 시도로, ~하기 위해 (n./v. attempt 시도)", example: "in an attempt to be more attractive" },
  { word: "desirable",        pos: "a.",   meaning: "바람직한, 탐나는 (v. desire 바라다)", example: "white skin was desirable" },
  { word: "upper class",      pos: "n.",   meaning: "상류층 (↔lower/working class)",   example: "a member of the upper class" },
  { word: "shift",            pos: "v./n.", meaning: "바뀌다, 옮기다; 변화, 교대 근무",  example: "attitudes shifted in the opposite direction" },
  { word: "opposite",         pos: "a.",   meaning: "반대의, 맞은편의 (opposite direction 반대 방향)", example: "shifted in the opposite direction" },
  { word: "indoors",          pos: "ad.",  meaning: "실내에서, 실내로 (↔outdoors 실외에서)", example: "work moved indoors" },
  { word: "tanned",           pos: "a.",   meaning: "햇볕에 그을린, 태닝한 (v. tan)",   example: "Tanned skin began to indicate leisure." },
  { word: "indicate",         pos: "v.",   meaning: "나타내다, 가리키다, 보여주다 (n. indication)", example: "began to indicate leisure time" },
  { word: "leisure",          pos: "n.",   meaning: "여가, 한가한 시간",              example: "indicate leisure time and health" },
  { word: "salon",            pos: "n.",   meaning: "(미용·네일) 살롱, 미용실",         example: "tanning in a salon" },
  { word: "be aware of",      pos: "phr.", meaning: "~을 알고 있다, 인식하다 (n. awareness)", example: "aware of the dangers of UV rays" },
  { word: "denote",           pos: "v.",   meaning: "나타내다, 의미하다, 표시하다",     example: "altered their skin to denote wealth" },
  { word: "wealth",           pos: "n.",   meaning: "부, 재산 (a. wealthy 부유한)",     example: "to denote wealth and beauty" },
  { word: "mark",             pos: "v./n.", meaning: "표시하다, 자국을 내다; 자국, 표시", example: "cultures marked their skin" },
  { word: "identity",         pos: "n.",   meaning: "정체성, 신원 (identify 확인하다)",  example: "cultural identity" },
  { word: "status",           pos: "n.",   meaning: "지위, 신분; 상태",               example: "community status" },
  { word: "carry out",        pos: "phr.", meaning: "수행하다, 실시하다, 이행하다",     example: "Tattooing has been carried out for thousands of years." },
  { word: "bravery",          pos: "n.",   meaning: "용감함, 용기 (a. brave)",         example: "to mark their status or bravery" },
  { word: "identify",         pos: "v.",   meaning: "확인하다, 식별하다; (identify A as B) A를 B로 규정하다", example: "identify the wearer as a family member" },
  { word: "wearer",           pos: "n.",   meaning: "착용자, (문신 등을) 지닌 사람 (wear+er)", example: "identify the wearer" },
  { word: "symbolize",        pos: "v.",   meaning: "상징하다, 나타내다 (n. symbol)",   example: "tattoos symbolize achievements" },
  { word: "practice",         pos: "v.",   meaning: "(관습을) 행하다, 실천하다; 연습하다", example: "tattooing has been practiced for thousands of years" },
  { word: "outlaw",           pos: "v.",   meaning: "불법화하다, 금지하다 (= ban)",      example: "was outlawed in the 19th century" },
  { word: "criminal",         pos: "n./a.", meaning: "범죄자; 범죄의 (n. crime)",       example: "associated with criminals" },
  { word: "be known for",     pos: "phr.", meaning: "~로 유명하다, 알려져 있다 (≠be known as ~로서 알려지다)", example: "known for their full-body tattoos" },
  { word: "complex",          pos: "a.",   meaning: "복잡한 (= complicated, ↔simple)",  example: "the complex design of a tattoo" },
  { word: "process",          pos: "n.",   meaning: "과정, 절차",                     example: "The process of getting a tattoo is slow." },
  { word: "painful",          pos: "a.",   meaning: "고통스러운, 아픈 (n. pain)",       example: "slow and painful" },
  { word: "complete",         pos: "v./a.", meaning: "완성하다, 끝내다; 완전한",        example: "take two years to complete" },
  { word: "scar",             pos: "n./v.", meaning: "흉터; 흉터를 남기다 (scarring 흉터내기)", example: "scarring—a marking caused by cutting the skin" },
  { word: "burn",             pos: "v.",   meaning: "태우다, 데다; 타다",             example: "cutting or burning the skin" },
  { word: "rite of passage",  pos: "phr.", meaning: "통과의례 (인생의 한 단계를 넘는 의식)", example: "Scarring is a rite of passage." },
  { word: "mature",           pos: "v./a.", meaning: "성숙하다, 어른이 되다; 성숙한 (↔immature)", example: "a male has matured from a child into an adult" },
  { word: "permit",           pos: "v.",   meaning: "허가하다, 허락하다 (be permitted to V ~하도록 허용되다; n. 허가증)", example: "not permitted to trade" },
  { word: "traditionally",    pos: "ad.",  meaning: "전통적으로 (a. traditional)",      example: "traditionally not permitted to trade" },
  { word: "ceremonial",       pos: "a.",   meaning: "의식의, 의례적인 (n. ceremony 의식)", example: "sing ceremonial songs" },
  { word: "permanent",        pos: "a.",   meaning: "영구적인, 영속적인 (↔temporary 일시적인)", example: "Not all skin markings are permanent." },
  { word: "religious",        pos: "a.",   meaning: "종교의, 종교적인 (n. religion)",   example: "important religious holidays" },
  { word: "fade",             pos: "v.",   meaning: "바래다, 희미해지다, 서서히 사라지다", example: "The henna fades over time." },
  { word: "disappear",        pos: "v.",   meaning: "사라지다, 없어지다 (↔appear 나타나다)", example: "fades and disappears over time" },
  { word: "over time",        pos: "phr.", meaning: "시간이 지나면서, 시간이 흐르며",   example: "disappears over time" },
  { word: "industrialized",   pos: "a.",   meaning: "산업화된 (industry 산업)",         example: "many industrialized nations" },
  { word: "to a lesser degree", pos: "phr.", meaning: "덜한 정도로, 상대적으로 덜 (degree 정도)", example: "and, to a lesser degree, scarring" },
  { word: "gain in popularity", pos: "phr.", meaning: "인기를 얻다 (gain 얻다, popularity 인기)", example: "have been gaining in popularity" },
  { word: "photographer",     pos: "n.",   meaning: "사진작가, 사진사 (photograph 사진)", example: "according to photographer Chris Rainier" },
  { word: "examine",          pos: "v.",   meaning: "조사하다, 살펴보다; 검사하다 (n. examination)", example: "his book examines body markings" },
  { word: "connection",       pos: "n.",   meaning: "연결, 관련, 유대 (v. connect)",    example: "a connection with the traditional world" },
  { word: "sector",           pos: "n.",   meaning: "부문, 분야, 영역",               example: "a whole sector of modern society" },
  { word: "in search of",     pos: "phr.", meaning: "~을 찾아서, 구하여",             example: "people in search of identity" },
  { word: "hence",            pos: "ad.",  meaning: "따라서, 그러므로; 이런 이유로 (= therefore)", example: "Hence, a huge explosion of tattooing." },
  { word: "explosion",        pos: "n.",   meaning: "폭발; (수·양의) 폭발적 증가 (v. explode)", example: "a huge explosion of tattooing" },
  { word: "mankind",          pos: "n.",   meaning: "인류, 인간 (= humankind)",        example: "mankind wanting identity" },
  { word: "a sense of",       pos: "phr.", meaning: "~의 감각/느낌 (a sense of place 소속감/장소감)", example: "a sense of place and culture" },
  ],

  /* ----- 지문 5: Racing to rescue koalas ----- */
  5: [
  { word: "be caught on",     pos: "phr.", meaning: "~에 걸리다, 끼이다 (catch-caught-caught)", example: "a koala caught on a fence" },
  { word: "fence",            pos: "n.",   meaning: "울타리, 담",                     example: "caught on a fence" },
  { word: "prisoner",         pos: "n.",   meaning: "죄수, 포로 (prison 감옥)",         example: "like a prisoner trying to escape" },
  { word: "escape",           pos: "v./n.", meaning: "탈출하다, 벗어나다; 탈출",        example: "a prisoner trying to escape" },
  { word: "suburb",           pos: "n.",   meaning: "교외, 근교 (a. suburban)",         example: "a suburb of Brisbane" },
  { word: "run",              pos: "v.",   meaning: "운영하다, 경영하다; 달리다",        example: "Aitken runs a volunteer organization." },
  { word: "volunteer",        pos: "n./v.", meaning: "자원봉사자; 자원하다",           example: "a volunteer organization" },
  { word: "organization",     pos: "n.",   meaning: "조직, 단체, 기구 (v. organize)",   example: "a volunteer organization" },
  { word: "be devoted to",    pos: "phr.", meaning: "~에 헌신하다, 전념하다 (devote A to B)", example: "devoted to rescuing wild koalas" },
  { word: "rescue",           pos: "v./n.", meaning: "구조하다, 구하다; 구조",          example: "rescuing wild koalas" },
  { word: "wild",             pos: "a.",   meaning: "야생의; 거친 (in the wild 야생에서)", example: "wild koalas" },
  { word: "location",         pos: "n.",   meaning: "위치, 장소 (v. locate)",           example: "before she is told the location" },
  { word: "head out",         pos: "phr.", meaning: "나서다, 출발하다, 향하다",         example: "ready to head out" },
  { word: "scene",            pos: "n.",   meaning: "현장, 장면 (on the scene 현장에)",  example: "when Aitken arrives on the scene" },
  { word: "discover",         pos: "v.",   meaning: "발견하다, 알아내다 (n. discovery)", example: "They discover that the fur is caught." },
  { word: "fur",              pos: "n.",   meaning: "(동물의) 털, 모피",              example: "the koala's fur" },
  { word: "barbed wire",      pos: "n.",   meaning: "가시철사, 철조망 (barbed 가시가 있는)", example: "caught in the barbed wire" },
  { word: "notice",           pos: "v.",   meaning: "알아채다, 주목하다 (n. 공지/주목)", example: "they notice tall trees" },
  { word: "obviously",        pos: "ad.",  meaning: "분명히, 명백히 (a. obvious)",       example: "He was obviously trying to get to the trees." },
  { word: "put on",           pos: "phr.", meaning: "(옷·장갑 등을) 착용하다, 입다",     example: "Aitken puts on heavy gloves." },
  { word: "despite",          pos: "prep.", meaning: "~에도 불구하고 (= in spite of, 뒤에 명사)", example: "despite their cute appearance" },
  { word: "ferocious",        pos: "a.",   meaning: "사나운, 흉포한",                  example: "koalas can be ferocious" },
  { word: "resist",           pos: "v.",   meaning: "저항하다, 견디다 (n. resistance)",  example: "when resisting capture" },
  { word: "capture",          pos: "n./v.", meaning: "포획, 붙잡음; 붙잡다",            example: "resisting capture" },
  { word: "threatened",       pos: "a.",   meaning: "위협받는 (v. threaten, n. threat)", example: "If they feel threatened, they bite." },
  { word: "bite",             pos: "v.",   meaning: "물다, 깨물다 (bite-bit-bitten)",   example: "they bite" },
  { word: "prove",            pos: "v.",   meaning: "증명하다, 입증하다 (n. proof)",     example: "has the scars to prove it" },
  { word: "blanket",          pos: "n.",   meaning: "담요, 이불",                     example: "throws a blanket over the animal" },
  { word: "lid",              pos: "n.",   meaning: "뚜껑",                          example: "opens the lid of a cage" },
  { word: "cage",             pos: "n.",   meaning: "우리, 새장",                     example: "drops it in the cage" },
  { word: "grasp",            pos: "v.",   meaning: "꽉 잡다, 붙잡다; 이해하다",         example: "firmly grasps the koala" },
  { word: "firmly",           pos: "ad.",  meaning: "단단히, 확고하게 (a. firm)",       example: "firmly grasps the koala" },
  { word: "free",             pos: "v.",   meaning: "풀어주다, 해방하다 (free A from B)", example: "frees it from the fence" },
  { word: "physical",         pos: "a.",   meaning: "신체의, 물리적인 (physical condition 신체 상태)", example: "check the animal's physical condition" },
  { word: "injured",          pos: "a.",   meaning: "부상당한, 다친 (v. injure, n. injury)", example: "if the koala is sick or injured" },
  { word: "release",          pos: "v.",   meaning: "풀어주다, 방출하다; 발표하다",      example: "it is normally released where it is found" },
  { word: "tend to",          pos: "phr.", meaning: "~하는 경향이 있다 (= be likely to)", example: "Koalas tend to live in a small area." },
  { word: "over and over",    pos: "phr.", meaning: "반복해서, 몇 번이고 (= repeatedly)", example: "eat from the same trees over and over" },
  { word: "disappearance",    pos: "n.",   meaning: "사라짐, 실종, 소멸 (v. disappear)", example: "the reasons for their disappearance" },
  { word: "suburban",         pos: "a.",   meaning: "교외의, 근교의 (n. suburb)",       example: "make suburban areas more koala-friendly" },
  { word: "recommend",        pos: "v.",   meaning: "권하다, 추천하다 (recommend V-ing, n. recommendation)", example: "She recommends reducing speed limits." },
  { word: "reduce",           pos: "v.",   meaning: "줄이다, 감소시키다 (n. reduction)", example: "reducing speed limits" },
  { word: "speed limit",      pos: "n.",   meaning: "제한 속도",                      example: "reducing speed limits on streets" },
  { word: "preserve",         pos: "v.",   meaning: "보존하다, 지키다 (n. preservation)", example: "the need to preserve eucalyptus trees" },
  { word: "disease",          pos: "n.",   meaning: "질병, 병",                       example: "Disease is a huge issue." },
  { word: "issue",            pos: "n.",   meaning: "문제, 사안; (잡지) 호",           example: "a huge issue" },
  { word: "veterinarian",     pos: "n.",   meaning: "수의사 (= vet)",                 example: "veterinarian Jon Hanger" },
  { word: "female",           pos: "a./n.", meaning: "암컷의, 여성의; 암컷 (↔male)",    example: "female koalas" },
  { word: "be affected by",   pos: "phr.", meaning: "~의 영향을 받다 (v. affect 영향을 미치다)", example: "koalas affected by a disease" },
  { word: "treatment",        pos: "n.",   meaning: "치료; 대우, 처리 (v. treat)",      example: "without treatment" },
  { word: "unable to",        pos: "phr.", meaning: "~할 수 없는 (↔able to)",           example: "unable to reproduce" },
  { word: "reproduce",        pos: "v.",   meaning: "번식하다; 복제/재생하다 (n. reproduction)", example: "unable to reproduce" },
  { word: "population",       pos: "n.",   meaning: "개체 수; 인구",                   example: "Koala populations are becoming extinct." },
  { word: "vibrant",          pos: "a.",   meaning: "활기찬, 생기 넘치는; (색이) 선명한", example: "populations that used to be vibrant" },
  { word: "extinct",          pos: "a.",   meaning: "멸종된 (become extinct 멸종하다, n. extinction)", example: "becoming extinct" },
  { word: "take care of",     pos: "phr.", meaning: "~을 돌보다, 보살피다 (= care for)", example: "taking care of a koala named Ruby" },
  { word: "hug",              pos: "v.",   meaning: "껴안다, 포옹하다",               example: "hugging her teddy bear" },
  { word: "jaws",             pos: "n.",   meaning: "(동물의) 입, 아가리; 턱",         example: "rescued from the jaws of a dog" },
  { word: "collect",          pos: "v.",   meaning: "모으다, 수집하다 (n. collection)", example: "de Villiers collects eucalyptus leaves" },
  { word: "primary",          pos: "a.",   meaning: "주요한, 주된; 최초의 (primary food 주식)", example: "the koala's primary food" },
  { word: "feed",             pos: "v.",   meaning: "먹이다, 먹이를 주다 (feed-fed-fed)", example: "to feed Ruby" },
  { word: "care for",         pos: "phr.", meaning: "~을 돌보다; 좋아하다",            example: "she has cared for more than 60 koalas" },
  { word: "follow",           pos: "v.",   meaning: "따라가다, 추적하다; 뒤따르다",     example: "de Villiers has been following Tee Vee" },
  { word: "equipment",        pos: "n.",   meaning: "장비, 장치 (셀 수 없는 명사)",     example: "special audio equipment" },
  { word: "signal",           pos: "n.",   meaning: "신호",                          example: "listens for a signal" },
  { word: "collar",           pos: "n.",   meaning: "(목에 두르는) 목걸이, 깃 (radio collar 무선 추적 목걸이)", example: "the koala's radio collar" },
  { word: "eventually",       pos: "ad.",  meaning: "결국, 마침내 (= finally, in the end)", example: "She eventually finds Tee Vee." },
  { word: "branch",           pos: "n.",   meaning: "나뭇가지; 지사, 지점",            example: "sitting on a tree branch" },
  { word: "ladder",           pos: "n.",   meaning: "사다리",                        example: "climbs up a ladder" },
  { word: "land",             pos: "v.",   meaning: "착지하다, 내려앉다; (비행기) 착륙하다", example: "lands on the ground" },
  { word: "measure",          pos: "v.",   meaning: "측정하다, 재다 (n. measurement)",  example: "measures the length of the body" },
  { word: "length",           pos: "n.",   meaning: "길이 (a. long, v. lengthen)",      example: "the length of the koala's body" },
  { word: "pouch",            pos: "n.",   meaning: "(캥거루·코알라의) 새끼 주머니; 작은 주머니", example: "opens the koala's pouch" },
  { word: "as long as",       pos: "phr.", meaning: "~하는 한, ~하기만 하면 (조건)",     example: "As long as there are healthy babies, there's hope." },
  { word: "plentiful",        pos: "a.",   meaning: "풍부한, 많은 (= abundant, n. plenty)", example: "Eucalyptus leaves were plentiful." },
  { word: "clear",            pos: "v.",   meaning: "(숲·땅을) 개간하다, 없애다; 치우다", example: "the forests had been cleared" },
  { word: "two-thirds",       pos: "n.",   meaning: "3분의 2 (분수: 분자 기수 + 분모 서수, 분자 2 이상이면 분모에 s)", example: "nearly two-thirds of the forests" },
  ],

  /* ----- 지문 6: Tracking the snow leopard ----- */
  6: [
  { word: "track",            pos: "v.",   meaning: "추적하다, 뒤쫓다 (n. 자국/선로)",  example: "tracking the snow leopard" },
  { word: "stalk",            pos: "v.",   meaning: "몰래 다가가다, (먹이에) 살금살금 접근하다", example: "when a snow leopard stalks its prey" },
  { word: "prey",             pos: "n.",   meaning: "먹이, 사냥감 (↔predator 포식자)",  example: "stalks its prey" },
  { word: "knock loose",      pos: "phr.", meaning: "쳐서 헐겁게/떨어지게 하다 (loose 헐거운)", example: "If it knocks a stone loose, ..." },
  { word: "reach out",        pos: "phr.", meaning: "(손·발을) 뻗다, 내밀다",           example: "reach out a foot to stop it" },
  { word: "silent",           pos: "a.",   meaning: "조용한, 침묵하는 (n. silence)",     example: "perfectly silent" },
  { word: "close by",         pos: "phr.", meaning: "바로 가까이에, 근처에",            example: "maybe close by" },
  { word: "be best known for", pos: "phr.", meaning: "~로 가장 잘 알려져 있다",          example: "best known for its spotted coat" },
  { word: "spotted",          pos: "a.",   meaning: "점박이의, 얼룩이 있는 (spot 점)",   example: "its spotted coat" },
  { word: "coat",             pos: "n.",   meaning: "(동물의) 털가죽; 코트, 외투",       example: "its spotted coat" },
  { word: "distinctive",      pos: "a.",   meaning: "독특한, 특유의, 구별되는 (v. distinguish)", example: "a long distinctive tail" },
  { word: "tail",             pos: "n.",   meaning: "꼬리",                          example: "a long distinctive tail" },
  { word: "secretive",        pos: "a.",   meaning: "은밀한, 비밀스러운 (n. secret)",    example: "one of the most secretive animals" },
  { word: "elusive",          pos: "a.",   meaning: "찾기 힘든, 붙잡기 어려운, 파악하기 힘든", example: "these elusive cats" },
  { word: "remote",           pos: "a.",   meaning: "외딴, 멀리 떨어진; 원격의",         example: "the remote, mountainous regions" },
  { word: "mountainous",      pos: "a.",   meaning: "산이 많은, 산악의 (mountain 산)",   example: "mountainous regions of Central Asia" },
  { word: "primarily",        pos: "ad.",  meaning: "주로, 우선적으로 (= mainly)",       example: "they hunt primarily at night" },
  { word: "rarely",           pos: "ad.",  meaning: "드물게, 좀처럼 ~않는 (= seldom)",   example: "they are very rarely seen" },
  { word: "officially",       pos: "ad.",  meaning: "공식적으로 (a. official)",          example: "officially protected since 1975" },
  { word: "enforce",          pos: "v.",   meaning: "(법을) 시행하다, 집행하다 (n. enforcement)", example: "enforcing this law has proven difficult" },
  { word: "body parts",       pos: "n.",   meaning: "신체 부위 (여기선 동물의 몸의 부위)", example: "killed for their fur and body parts" },
  { word: "fortune",          pos: "n.",   meaning: "큰돈, 재산; 운 (worth a fortune 엄청난 값어치의)", example: "worth a fortune on the black market" },
  { word: "black market",     pos: "n.",   meaning: "암시장",                         example: "worth a fortune on the black market" },
  { word: "conflict",         pos: "n.",   meaning: "갈등, 충돌, 분쟁",               example: "conflict with local herders" },
  { word: "herder",           pos: "n.",   meaning: "목축업자, 유목민 (herd 가축 떼)",   example: "conflict with local herders" },
  { word: "lead to",          pos: "phr.", meaning: "~로 이어지다, 초래하다 (lead-led-led)", example: "has led to a number of deaths" },
  { word: "drag",             pos: "v.",   meaning: "끌다, 끌고 가다",                example: "drag the bodies away" },
  { word: "as a result of",   pos: "phr.", meaning: "~의 결과로, ~때문에",             example: "As a result of these pressures, ..." },
  { word: "current",          pos: "a.",   meaning: "현재의, 지금의 (ad. currently)",    example: "the current snow leopard population" },
  { word: "estimate",         pos: "v.",   meaning: "추정하다, 어림하다 (be estimated at ~로 추정되다)", example: "estimated at 4,000 to 7,000" },
  { word: "actual",           pos: "a.",   meaning: "실제의, 실제적인 (ad. actually)",   example: "the actual number" },
  { word: "reverse",          pos: "v.",   meaning: "뒤집다, 역전시키다, 반대로 하다",   example: "the only way to reverse this trend" },
  { word: "trend",            pos: "n.",   meaning: "추세, 경향, 동향",               example: "reverse this trend" },
  { word: "conservationist",  pos: "n.",   meaning: "(자연·환경) 보호론자 (conservation 보존)", example: "say conservationists" },
  { word: "valuable",         pos: "a.",   meaning: "가치 있는, 귀중한 (n. value)",      example: "more valuable alive than dead" },
  { word: "alive",            pos: "a.",   meaning: "살아 있는 (서술적 형용사, ↔dead)",   example: "more valuable alive than dead" },
  { word: "landscape",        pos: "n.",   meaning: "풍경, 경관; 지형",               example: "cold, dry landscape" },
  { word: "depend on",        pos: "phr.", meaning: "~에 의존하다, 의지하다; ~에 달려 있다", example: "depend mostly on livestock" },
  { word: "livestock",        pos: "n.",   meaning: "가축 (단·복수 동형, 집합명사)",     example: "depend on livestock" },
  { word: "goat",             pos: "n.",   meaning: "염소",                          example: "mainly sheep and goats" },
  { word: "survive",          pos: "v.",   meaning: "생존하다, 살아남다 (n. survival)",  example: "to survive in these regions" },
  { word: "in danger of",     pos: "phr.", meaning: "~의 위험에 처한",                example: "in danger of snow leopard attacks" },
  { word: "desperate",        pos: "a.",   meaning: "절박한, 필사적인 (n. desperation)", example: "push them into desperate poverty" },
  { word: "poverty",          pos: "n.",   meaning: "가난, 빈곤 (↔wealth)",            example: "desperate poverty" },
  { word: "address",          pos: "v.",   meaning: "(문제를) 다루다, 해결하려 하다; 연설하다", example: "To address this problem, ..." },
  { word: "call for",         pos: "phr.", meaning: "~을 요구하다, 촉구하다",           example: "called for an end to killings" },
  { word: "exist",            pos: "v.",   meaning: "존재하다, 살아가다 (n. existence)", example: "the right to exist peacefully" },
  { word: "convince",         pos: "v.",   meaning: "설득하다, 납득시키다, 확신시키다",  example: "tried to convince people" },
  { word: "rare",             pos: "a.",   meaning: "드문, 희귀한 (ad. rarely)",        example: "the leopards are quite rare" },
  { word: "thus",             pos: "ad.",  meaning: "따라서, 그러므로; 이렇게 하여",     example: "and thus it is important to protect them" },
  { word: "financial",        pos: "a.",   meaning: "재정의, 금전적인 (n. finance)",     example: "financial incentives" },
  { word: "incentive",        pos: "n.",   meaning: "유인책, 장려책, 동기",            example: "financial incentives" },
  { word: "income",           pos: "n.",   meaning: "소득, 수입",                     example: "earn enough income" },
  { word: "replace",          pos: "v.",   meaning: "대체하다, 교체하다 (n. replacement)", example: "to replace the animals lost" },
  { word: "in addition",      pos: "phr.", meaning: "게다가, 덧붙여 (in addition to ~ 에 더하여)", example: "In addition, the organization helps." },
  { word: "conduct",          pos: "v.",   meaning: "(활동을) 실시하다, 수행하다; 지휘하다", example: "conducts environmental classes" },
  { word: "hire",             pos: "v./n.", meaning: "고용하다; 대여 (available for hire 고용 가능한)", example: "nature guides, available for hire" },
  { word: "in exchange",      pos: "phr.", meaning: "그 대가로, 교환으로 (in exchange for ~ 대가로)", example: "In exchange, herders agree not to kill." },
  { word: "enterprise",       pos: "n.",   meaning: "기업, 사업(체); 진취성",          example: "Snow Leopard Enterprises" },
  { word: "endangered",       pos: "a.",   meaning: "멸종 위기의, 위험에 처한 (endanger 위태롭게 하다)", example: "protect the endangered cat" },
  { word: "decorative",       pos: "a.",   meaning: "장식용의, 장식적인 (v. decorate)", example: "decorative floor rugs" },
  { word: "wool",             pos: "n.",   meaning: "양털, 모직 (woolen 모직의)",       example: "using the wool from their herds" },
  { word: "herd",             pos: "n.",   meaning: "(가축의) 떼, 무리",              example: "the wool from their herds" },
  { word: "abroad",           pos: "ad.",  meaning: "해외로, 해외에서 (= overseas)",     example: "sells them abroad" },
  { word: "encourage",        pos: "v.",   meaning: "격려하다, 장려하다 (encourage A to V, ↔discourage)", example: "encourage neighbors to do the same" },
  { word: "arrangement",      pos: "n.",   meaning: "합의, 방식; 준비, 배치 (v. arrange)", example: "The arrangement increases incomes." },
  { word: "elevate",          pos: "v.",   meaning: "높이다, 향상시키다; 올리다",        example: "elevates the status of the women" },
  { word: "over the course of", pos: "phr.", meaning: "~동안, ~에 걸쳐 (= during)",     example: "over the course of a year" },
  { word: "reward",           pos: "v./n.", meaning: "보상하다; 보상, 보답 (be rewarded with ~로 보상받다)", example: "rewarded with a 20 percent bonus" },
  { word: "independent",      pos: "a.",   meaning: "독립적인, 독자적인 (n. independence)", example: "an independent review in 2006" },
  { word: "operate",          pos: "v.",   meaning: "운영하다, 활동하다; 작동하다 (n. operation)", example: "areas where SLE operates" },
  { word: "cover",            pos: "v.",   meaning: "포함하다, 아우르다; 덮다; 다루다",  example: "they cover only a small part" },
  { word: "homeland",         pos: "n.",   meaning: "고국, 본거지, 원산지",            example: "the snow leopard's homeland" },
  { word: "a fighting chance", pos: "phr.", meaning: "해볼 만한 가능성, (노력하면 이길) 승산", example: "the snow leopard may have a fighting chance" },
  ],

  /* ----- 지문 7: Sacred summits ----- */
  7: [
  { word: "sacred",           pos: "a.",   meaning: "신성한, 성스러운 (= holy)",         example: "sacred summits" },
  { word: "summit",           pos: "n.",   meaning: "(산의) 정상, 꼭대기; 정상회담",      example: "near the summit of Mount Fuji" },
  { word: "volcano",          pos: "n.",   meaning: "화산 (a. volcanic, 복수 volcanoes)", example: "Volcanoes are creators and destroyers." },
  { word: "creator",          pos: "n.",   meaning: "창조자, 만드는 존재 (v. create)",   example: "Volcanoes are creators and destroyers." },
  { word: "destroyer",        pos: "n.",   meaning: "파괴자 (v. destroy, n. destruction)", example: "creators and destroyers" },
  { word: "shape",            pos: "v.",   meaning: "형성하다, 만들다; (n.) 모양",        example: "They can shape lands and cultures." },
  { word: "destruction",      pos: "n.",   meaning: "파괴, 파멸 (v. destroy)",           example: "cause great destruction" },
  { word: "loss of life",     pos: "phr.", meaning: "인명 손실, 사망 (loss 손실/상실)",   example: "destruction and loss of life" },
  { word: "sunrise",          pos: "n.",   meaning: "일출, 해돋이 (↔sunset 일몰)",       example: "It's almost sunrise." },
  { word: "exhausted",        pos: "a.",   meaning: "기진맥진한, 지친 (v. exhaust, n. exhaustion)", example: "exhausted climbers" },
  { word: "climber",          pos: "n.",   meaning: "등반가, 등산객 (v. climb)",         example: "exhausted climbers" },
  { word: "hike",             pos: "v.",   meaning: "등산하다, 도보 여행하다",           example: "have hiked the 3,776 meters" },
  { word: "spread",           pos: "v.",   meaning: "퍼지다, 퍼뜨리다 (spread-spread-spread)", example: "spreading its golden rays" },
  { word: "ray",              pos: "n.",   meaning: "광선, 빛줄기 (UV rays 자외선)",      example: "its golden rays" },
  { word: "witness",          pos: "v.",   meaning: "목격하다, 증언하다; (n.) 목격자",    example: "They have witnessed the dawn." },
  { word: "dawn",             pos: "n.",   meaning: "새벽, 여명; 시작 (↔dusk 황혼)",     example: "the dawn on Mount Fuji" },
  { word: "religion",         pos: "n.",   meaning: "종교 (a. religious)",              example: "Japan's native religion" },
  { word: "holy",             pos: "a.",   meaning: "신성한, 거룩한 (= sacred)",         example: "a holy place" },
  { word: "a must",           pos: "phr.", meaning: "반드시 해야 할 것, 필수",           example: "reaching the summit is a must" },
  { word: "destination",      pos: "n.",   meaning: "목적지, 도착지",                   example: "a sacred site and tourist destination" },
  { word: "active",           pos: "a.",   meaning: "활동 중인, 활동적인 (active volcano 활화산)", example: "an active volcano" },
  { word: "settle",           pos: "v.",   meaning: "정착하다; 해결하다 (n. settlement)", example: "four million people have settled" },
  { word: "erupt",            pos: "v.",   meaning: "분출하다, 폭발하다 (n. eruption)",   example: "The last time Fuji erupted, in 1707" },
  { word: "ash",              pos: "n.",   meaning: "재, 화산재",                       example: "a cloud of ash" },
  { word: "capital",          pos: "n.",   meaning: "수도; 자본 (capital city 수도)",     example: "covered the capital city" },
  { word: "volcanologist",    pos: "n.",   meaning: "화산학자 (volcanology 화산학)",     example: "some volcanologists concerned" },
  { word: "concerned",        pos: "a.",   meaning: "걱정하는, 우려하는; 관련된 (n. concern)", example: "volcanologists concerned that Fuji may erupt" },
  { word: "associate",        pos: "n.",   meaning: "동료, 동업자; (v.) 연관 짓다",       example: "Ukawa and his associates" },
  { word: "institute",        pos: "n.",   meaning: "연구소, 기관, 협회",               example: "the National Research Institute" },
  { word: "disaster",         pos: "n.",   meaning: "재해, 재난, 참사 (a. disastrous)",   example: "Earth Science and Disaster Prevention" },
  { word: "prevention",       pos: "n.",   meaning: "예방, 방지 (v. prevent)",           example: "Disaster Prevention" },
  { word: "activity",         pos: "n.",   meaning: "활동, 움직임 (a. active)",          example: "an increase in activity under Fuji" },
  { word: "frequency",        pos: "n.",   meaning: "빈도; 주파수 (low-frequency 저주파의)", example: "low-frequency earthquakes" },
  { word: "earthquake",       pos: "n.",   meaning: "지진 (= quake)",                   example: "low-frequency earthquakes" },
  { word: "predict",          pos: "v.",   meaning: "예측하다, 예언하다 (n. prediction)", example: "predict when Fuji will erupt" },
  { word: "come back to life", pos: "phr.", meaning: "되살아나다, 다시 활동을 시작하다",  example: "predict when Fuji will come back to life" },
  { word: "in the meantime",  pos: "phr.", meaning: "그동안에, 그사이에 (= meanwhile)",  example: "In the meantime, locals hold festivals." },
  { word: "local",            pos: "n./a.", meaning: "지역 주민; 지역의, 현지의",         example: "locals living near Fuji" },
  { word: "goddess",          pos: "n.",   meaning: "여신 (god 신, 남신)",              example: "the goddess of the volcano" },
  { word: "generation",       pos: "n.",   meaning: "세대 (for generations 여러 세대에 걸쳐)", example: "as they have for generations" },
  { word: "destroy",          pos: "v.",   meaning: "파괴하다, 파멸시키다 (n. destruction)", example: "erupt and destroy the land" },
  { word: "southeast",        pos: "n./a.", meaning: "남동(쪽); 남동쪽의",              example: "70 kilometers southeast of Mexico City" },
  { word: "occur",            pos: "v.",   meaning: "일어나다, 발생하다 (n. occurrence)", example: "its last great eruption occurred around AD 820" },
  { word: "evacuate",         pos: "v.",   meaning: "대피시키다, 피난하다 (n. evacuation)", example: "26,000 people were evacuated" },
  { word: "inevitable",       pos: "a.",   meaning: "불가피한, 필연적인 (ad. inevitably)", example: "an eruption is inevitable" },
  { word: "monitor",          pos: "v.",   meaning: "감시하다, 관찰하다; (n.) 화면",      example: "a scientist who monitors El Popo" },
  { word: "symptom",          pos: "n.",   meaning: "증상, 징후, 조짐",                 example: "the symptoms signaling that El Popo will erupt" },
  { word: "sign",             pos: "n.",   meaning: "징후, 조짐; 표지판, 신호",          example: "any sign that the surface is changing" },
  { word: "surface",          pos: "n.",   meaning: "표면, 지표면",                     example: "the mountain's surface" },
  { word: "expand",           pos: "v.",   meaning: "팽창하다, 확장하다 (↔contract, n. expansion)", example: "the surface is changing or expanding" },
  { word: "warn",             pos: "v.",   meaning: "경고하다, 주의를 주다 (n. warning)", example: "warn people in the surrounding areas" },
  { word: "surrounding",      pos: "a.",   meaning: "주변의, 인근의 (v. surround)",      example: "the surrounding areas" },
  { word: "displace",         pos: "v.",   meaning: "쫓아내다, 이주시키다; 대체하다",     example: "could displace over 20 million people" },
  { word: "deliver",          pos: "v.",   meaning: "전달하다, 배달하다; (연설을) 하다 (n. delivery)", example: "if the warning is delivered early" },
  { word: "abandon",          pos: "v.",   meaning: "버리다, 떠나다, 포기하다",          example: "abandoning their land is unthinkable" },
  { word: "unthinkable",      pos: "a.",   meaning: "상상할 수 없는, 생각조차 못할",      example: "abandoning their land is unthinkable" },
  { word: "soil",             pos: "n.",   meaning: "토양, 흙",                        example: "the world's richest soils are volcanic" },
  { word: "volcanic",         pos: "a.",   meaning: "화산의, 화산 작용의 (n. volcano)",   example: "the richest soils are volcanic" },
  { word: "produce",          pos: "v.",   meaning: "생산하다, 만들어내다 (n. product)",  example: "They produce bananas and coffee." },
  { word: "enormous",         pos: "a.",   meaning: "거대한, 막대한 (= huge)",           example: "enormous amounts of rice" },
  { word: "ancestor",         pos: "n.",   meaning: "조상, 선조 (↔descendant 후손)",     example: "as their ancestors did" },
  { word: "appease",          pos: "v.",   meaning: "달래다, 진정시키다, 누그러뜨리다",   example: "To appease El Popo, ..." },
  { word: "ensure",           pos: "v.",   meaning: "보장하다, 확실하게 하다 (≠insure 보험 들다)", example: "to ensure rain and a good harvest" },
  { word: "harvest",          pos: "n.",   meaning: "수확, 추수; 수확량",               example: "a good harvest" },
  { word: "cycle",            pos: "n.",   meaning: "주기, 순환",                      example: "a cycle of ceremonies" },
  { word: "ceremony",         pos: "n.",   meaning: "의식, 예식 (a. ceremonial)",       example: "a cycle of ceremonies" },
  { word: "offering",         pos: "n.",   meaning: "(신에게 바치는) 제물, 봉헌물 (v. offer)", example: "they present their offerings" },
  { word: "present",          pos: "v.",   meaning: "바치다, 주다; 제시하다 (동사 강세 뒤: presént)", example: "they present their offerings" },
  { word: "provide for",      pos: "phr.", meaning: "~을 부양하다, ~에 대비해 공급하다",  example: "asking the volcano to protect and provide for one more season" },
  ],

  /* ----- 지문 8: Is prediction possible? ----- */
  8: [
  { word: "prediction",       pos: "n.",   meaning: "예측, 예언 (v. predict)",          example: "earthquake prediction is possible" },
  { word: "be packed into",   pos: "phr.", meaning: "~에 빽빽이 들어차다, 밀집되다",      example: "so many people packed into cities" },
  { word: "regularly",        pos: "ad.",  meaning: "정기적으로, 규칙적으로 (a. regular)", example: "cities regularly affected by earthquakes" },
  { word: "edge",             pos: "n.",   meaning: "가장자리, 끝, 모서리",              example: "near the edge of Earth's plates" },
  { word: "shifting",         pos: "a.",   meaning: "이동하는, 변화하는 (v. shift 옮기다)", example: "Earth's huge, shifting plates" },
  { word: "plate",            pos: "n.",   meaning: "판, 지각판; 접시",                 example: "Earth's shifting plates" },
  { word: "face",             pos: "v.",   meaning: "직면하다, 마주하다 (face the risk 위험에 직면하다)", example: "these cities face the risk of damage" },
  { word: "risk",             pos: "n.",   meaning: "위험, 위험 요소 (at risk 위험에 처한)", example: "face the risk of serious damage" },
  { word: "economic",         pos: "a.",   meaning: "경제의, 경제적인 (≠economical 절약되는)", example: "economic disaster" },
  { word: "tsunami",          pos: "n.",   meaning: "쓰나미, 지진 해일",               example: "the tsunamis and fires" },
  { word: "a century ago",    pos: "phr.", meaning: "한 세기 전에 (century 100년)",      example: "better than we did a century ago" },
  { word: "pattern",          pos: "n.",   meaning: "패턴, 양식, 규칙적 형태",           example: "clear patterns in earthquakes" },
  { word: "random",          pos: "a.",   meaning: "무작위의, 임의의 (ad. randomly)",   example: "basically random and impossible to predict" },
  { word: "government",       pos: "n.",   meaning: "정부, 정권 (v. govern)",           example: "government scientists" },
  { word: "boundary",         pos: "n.",   meaning: "경계, 경계선",                     example: "two plate boundaries" },
  { word: "major",            pos: "a.",   meaning: "주요한, 큰, 심각한 (↔minor)",       example: "a major quake" },
  { word: "theory",           pos: "n.",   meaning: "이론, 학설 (a. theoretical)",       example: "The theory is that stress is building up." },
  { word: "stress",           pos: "n.",   meaning: "(물리적) 압력, 응력; 스트레스, 강세", example: "stress is building up in this zone" },
  { word: "build up",         pos: "phr.", meaning: "축적되다, 쌓이다, 강화되다",         example: "stress is building up" },
  { word: "zone",             pos: "n.",   meaning: "구역, 지대, 지역",                 example: "building up in this zone" },
  { word: "massive",          pos: "a.",   meaning: "거대한, 대규모의 (= huge, enormous)", example: "a massive quake" },
  { word: "forecast",         pos: "n./v.", meaning: "예보, 예측; 예보하다 (일기·경향 예측)", example: "more a forecast than a prediction" },
  { word: "likely",           pos: "a.",   meaning: "~할 것 같은, 가능성 있는 (be likely to V)", example: "an earthquake is likely to happen" },
  { word: "high-risk",        pos: "a.",   meaning: "고위험의, 위험이 큰",              example: "a high-risk area" },
  { word: "precise",          pos: "a.",   meaning: "정확한, 정밀한 (n. precision, ad. precisely)", example: "a precise prediction of time and place" },
  { word: "laboratory",       pos: "n.",   meaning: "실험실, 연구실 (= lab)",           example: "his laboratory experiments" },
  { word: "experiment",       pos: "n.",   meaning: "실험 (a. experimental)",           example: "laboratory experiments" },
  { word: "fault",            pos: "n.",   meaning: "단층; 잘못, 결함",                example: "a fault in the Earth's crust" },
  { word: "crust",            pos: "n.",   meaning: "지각; (빵의) 껍질",               example: "the Earth's crust" },
  { word: "slip",             pos: "v./n.", meaning: "미끄러지다, 살짝 움직이다; 미끄러짐", example: "it slips just a little" },
  { word: "detect",           pos: "v.",   meaning: "감지하다, 탐지하다, 알아내다 (n. detection)", example: "if we can detect these early slips" },
  { word: "clue",             pos: "n.",   meaning: "단서, 실마리",                    example: "hoping to find a clue" },
  { word: "run through",      pos: "phr.", meaning: "~을 관통하다, 지나가다",           example: "the San Andreas Fault runs through it" },
  { word: "approximately",    pos: "ad.",  meaning: "대략, 약 (= about, roughly)",       example: "approximately every 22 years" },
  { word: "warning sign",     pos: "n.",   meaning: "경고 신호, 조짐 (v. warn)",         example: "any warning signs prior to a quake" },
  { word: "prior to",         pos: "phr.", meaning: "~에 앞서, ~ 이전에 (= before)",     example: "warning signs prior to a quake" },
  { word: "drill",            pos: "v.",   meaning: "(구멍을) 뚫다, 시추하다; 훈련하다",  example: "they drilled deep into the fault" },
  { word: "set up",           pos: "phr.", meaning: "설치하다, 세우다; 설립하다",         example: "set up equipment to register activity" },
  { word: "register",         pos: "v.",   meaning: "기록하다, 나타내다; 등록하다",       example: "equipment to register activity" },
  { word: "year after year",  pos: "phr.", meaning: "해마다, 해가 갈수록",             example: "Year after year, nothing happened." },
  { word: "off schedule",     pos: "phr.", meaning: "예정에서 벗어난, 일정보다 늦은 (↔on schedule)", example: "it was years off schedule" },
  { word: "disappointing",    pos: "a.",   meaning: "실망스러운 (v. disappoint, a. disappointed 실망한)", example: "most disappointing was the lack of warning signs" },
  { word: "lack",             pos: "n.",   meaning: "부족, 결핍 (a lack of ~의 부족)",   example: "the lack of warning signs" },
  { word: "evidence",         pos: "n.",   meaning: "증거, 근거 (셀 수 없는 명사)",       example: "no evidence of anything unusual" },
  { word: "unusual",          pos: "a.",   meaning: "특이한, 이상한, 드문 (↔usual)",     example: "anything unusual" },
  { word: "precede",          pos: "v.",   meaning: "~에 앞서다, 선행하다 (↔follow)",     example: "anything unusual preceding the quake" },
  { word: "give up",          pos: "phr.", meaning: "포기하다, 그만두다",              example: "Instead of giving up, ..." },
  { word: "dig",              pos: "v.",   meaning: "파다, 캐다 (dig-dug-dug)",         example: "scientists dug deeper into the ground" },
  { word: "depth",            pos: "n.",   meaning: "깊이 (a. deep)",                  example: "the fault's final depth of three kilometers" },
  { word: "article",          pos: "n.",   meaning: "(신문·학술) 기사, 논문; 관사",      example: "in an article published in Nature" },
  { word: "publish",          pos: "v.",   meaning: "출판하다, 게재하다, 발표하다 (n. publication)", example: "an article published in the journal" },
  { word: "journal",          pos: "n.",   meaning: "학술지, 정기 간행물; 일기",          example: "the July 2008 journal Nature" },
  { word: "claim",            pos: "v.",   meaning: "주장하다; 청구하다 (claim to have p.p. ~했다고 주장)", example: "claimed to have detected small changes" },
  { word: "shortly before",   pos: "phr.", meaning: "직전에, 얼마 전에 (shortly 곧, 얼마 안 되어)", example: "shortly before an earthquake hit" },
  { word: "crack",            pos: "n./v.", meaning: "균열, 금; 갈라지다",             example: "the cracks in the fault had widened" },
  { word: "widen",            pos: "v.",   meaning: "넓어지다, 넓히다 (wide+en)",        example: "the cracks had widened slightly" },
  { word: "slightly",         pos: "ad.",  meaning: "약간, 조금 (a. slight)",           example: "had widened slightly" },
  { word: "identical",        pos: "a.",   meaning: "동일한, 똑같은 (identical to/with)", example: "they identified identical signs" },
  { word: "demonstrate",      pos: "v.",   meaning: "입증하다, 보여주다; 시연/시위하다 (n. demonstration)", example: "demonstrating that the theory is correct" },
  { word: "in fact",          pos: "phr.", meaning: "사실은, 실제로",                  example: "it may in fact be possible" },
  { word: "a long way to go", pos: "phr.", meaning: "갈 길이 먼, 아직 멀은",           example: "there is still a long way to go" },
  { word: "entirely",         pos: "ad.",  meaning: "완전히, 전적으로 (= completely)",   example: "earthquakes are not entirely random" },
  { word: "design",           pos: "v.",   meaning: "설계하다, 고안하다; (n.) 설계",     example: "design early-warning systems" },
  { word: "prevent",          pos: "v.",   meaning: "막다, 예방하다 (prevent A from B, n. prevention)", example: "prevent the loss of life" },
  { word: "structure",        pos: "n.",   meaning: "구조물, 건축물; 구조 (v. 구조화하다)", example: "new structures are designed to survive earthquakes" },
  { word: "innovate",         pos: "v.",   meaning: "혁신하다, 새로 도입하다 (n. innovation)", example: "engineers need to innovate" },
  { word: "collapse",         pos: "v./n.", meaning: "붕괴하다, 무너지다; 붕괴",         example: "less likely to collapse" },
  { word: "flexible",         pos: "a.",   meaning: "유연한, 잘 구부러지는 (n. flexibility)", example: "flexible joints" },
  { word: "absorb",           pos: "v.",   meaning: "흡수하다, 빨아들이다 (n. absorption)", example: "absorb strong shock waves" },
  { word: "utility",          pos: "n.",   meaning: "(수도·전기 등) 공익 설비, 유용성",   example: "damage to key utilities" },
  { word: "column",           pos: "n.",   meaning: "기둥; (신문의) 칼럼",             example: "steel mesh wrapped around the columns" },
  { word: "sway",             pos: "v.",   meaning: "흔들리다, 흔들다",                example: "allow skyscrapers to sway without breaking" },
  { word: "compress",         pos: "v.",   meaning: "압축하다, 짓누르다 (n. compression)", example: "P-waves compress and punch the rock" },
  { word: "destructive",      pos: "a.",   meaning: "파괴적인 (v. destroy, n. destruction)", example: "S-waves are slower but more destructive" },
  ],
};

/* 위 데이터를 하나의 배열로 펼치고, 각 단어에 소속 지문번호(p)를 붙임 */
const WORDS = [];
Object.keys(WORDS_BY_PASSAGE).forEach(pid => {
  WORDS_BY_PASSAGE[pid].forEach(w => WORDS.push(Object.assign({ p: +pid }, w)));
});

/* ---------- 지문 8개 ----------
   sentences = 본문(문장 단위)  /  extra = 보충자료(선택)
   빈 지문은 sentences: [] 로 두면 '아직 비어있음'으로 표시됩니다. */
const PASSAGES = [
  {
    id: 1,
    title: "The world's game",
    meta: "주제: 축구와 사회 · 난이도 ★★☆ (서사+가벼운 논증)",
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
  {
    id: 2,
    title: "What makes an Olympic champion",
    meta: "주제: 올림픽 챔피언을 만드는 요인 · 난이도 ★★☆ (과학 서사·병렬 구문)",
    sentences: [
      "How does a person become an Olympic champion—someone capable of winning the gold?",
      "In reality, a combination of biological, environmental, and psychological factors, as well as training and practice, all go into making a super athlete.",
      "Perhaps the most important factor involved in becoming an elite athlete is genetic.",
      "Most Olympic competitors are equipped with certain physical characteristics that differentiate them from the average person.",
      "Take an elite athlete's muscles, for example.",
      "In most human skeletal muscles (the ones that make your body move), there are fast-twitch fibers and slow-twitch fibers.",
      "Fast-twitch fibers help us move quickly.",
      "Olympic weightlifters, for example, have a large number of fast-twitch fibers in their muscles—many more than the average person.",
      "These allow them to lift hundreds of kilos from the ground and over their heads in seconds.",
      "Surprisingly, a large, muscular body is not the main requirement to do well in this sport.",
      "It is more important to have a large number of fast-twitch fibers in the muscles.",
      "The legs of an elite marathon runner, on the other hand, might contain up to 90 percent slow-twitch muscle fibers.",
      "These generate energy efficiently and enable an athlete to control fatigue and keep moving for a longer period of time.",
      "When we exercise long or hard, it's common to experience tiredness, muscle pain, and difficulty breathing.",
      "These feelings are caused when the muscles produce high amounts of a substance called lactate and can't remove it quickly enough.",
      "Athletes with many slow-twitch muscle fibers seem to be able to clear the lactate from their muscles faster as they move.",
      "Thus, the average runner might start to feel discomfort halfway into a race.",
      "A trained Olympic athlete, however, might not feel pain until much later in the competition.",
      "For some Olympic competitors, size is important.",
      "Most male champion swimmers are 180 cm or taller, allowing them to reach longer and swim faster.",
      "For both male and female gymnasts, though, a smaller size and body weight mean they can move with greater ease, and are less likely to suffer damage when landing on the floor from a height of up to 4.5 meters.",
      "Some athletes' abilities are naturally enhanced by their environment.",
      "Those raised at high altitudes in countries such as Kenya, Ethiopia, and Morocco have blood that is rich in hemoglobin.",
      "Large amounts of hemoglobin carry oxygen around the body faster, enabling these athletes to run better.",
      "Cultural factors also help some athletes do well at certain sports.",
      "Tegla Loroupe, a young woman from northern Kenya, has won several marathons.",
      "She says some of her success is due to her country's altitude (she trains at about 2,400 meters) and some to her cultural background.",
      "As a child, she had to run 10 kilometers to school every day.",
      "\"I'd be punished if I was late,\" she says.",
      "Although genes, environment, and even culture play a part in becoming an elite athlete, training and practice are needed to succeed.",
      "Marathon runners may be able to control fatigue and keep moving for long periods of time, but they must train to reach and maintain their goals.",
      "Weightlifters and gymnasts perfect their skills by repeating the same motions again and again until they become automatic.",
      "Greg Louganis, winner of four Olympic diving gold medals, says divers must train the same way to be successful: \"You have less than three seconds from takeoff until you hit the water, so it has to be reflex. You have to repeat the dives hundreds, maybe thousands, of times.\"",
      "Training this way requires an athlete to be not only physically fit but psychologically healthy as well.",
      "\"They have to be,\" says Sean McCann, a sports psychologist at the Olympic Training Center in the United States.",
      "\"Otherwise, they couldn't handle the training loads we put on them. [Athletes] have to be good at setting goals, generating energy when they need it, and managing anxiety.\"",
      "How do athletes adjust to such intense pressure?",
      "Louganis explains how he learned to control his anxiety during a competition: \"Most divers think too much...,\" he says.",
      "\"They're too much in their heads. What worked for me was humor. I remember thinking about what my mother would say if she saw me do a bad dive. She'd probably just compliment me on the beautiful splash.\""
    ]
  },
  {
    id: 3,
    title: "What is Beauty?",
    meta: "주제: 아름다움의 정의와 문화 · 난이도 ★★★ (추상 논증·어휘 밀도 상)",
    sentences: [
      "The search for beauty spans centuries and continents.",
      "Paintings of Egyptians dating back over 4,000 years show both men and women painting their nails and wearing makeup.",
      "On the other side of the globe, the ancient Maya of Central America considered crossed eyes \"beautiful,\" and hung little balls between children's eyes to develop this look.",
      "In 18th-century France, wealthy noblemen wore large wigs of long white hair to make themselves attractive.",
      "In cultures throughout the world, people have gone to extreme lengths to achieve beauty.",
      "Today, people continue to devote a lot of time and money to their appearance.",
      "According to a recent report, one out of three consumers globally say they are spending more money on beauty and health-care products than ever before.",
      "Worldwide, sales of makeup, dieting, hair- and skin-care products—as well as gym memberships and cosmetic surgery—generate billions of dollars every year.",
      "And there is at least one good reason for the desire to be attractive: Beauty is power.",
      "Studies suggest that good-looking people make more money, get called on more often in class, and are perceived as friendlier.",
      "But what exactly is beauty?",
      "Trying to define it is difficult, and yet we know it when we see it—or so we think.",
      "\"Beauty is health,\" says one psychologist. \"It's a billboard saying, I'm healthy. I can pass on your genes!\"",
      "And our awareness of it may start at a very early age.",
      "In one set of studies, six-month-old babies were shown a series of photographs.",
      "The faces in the pictures had been rated for attractiveness by a group of college students.",
      "In the studies, the babies spent more time looking at the attractive faces than the unattractive ones.",
      "The idea that even babies judge appearance makes perfect sense to many researchers.",
      "In studies done by psychologists such as Victor Johnston at New Mexico State University and David Perrett at the University of St. Andrews in Scotland, men regularly showed a preference for women with certain features: larger eyes, clear skin, fuller lips, and a smaller nose and chin.",
      "Another study suggests that women prefer men with large shoulders and a narrow waist.",
      "According to scientists, the mind unconsciously tells men and women that these traits—the full lips, clear skin, strong shoulders—equal health and genetic well-being.",
      "In other words, it's a fundamental part of human nature to look for these qualities in a mate.",
      "Not everyone agrees with this notion, however.",
      "\"Our hardwiredness can be altered by all sorts of expectations—predominantly cultural,\" says C. Loring Brace, an anthropologist at the University of Michigan.",
      "What is considered attractive in one culture might not be in another.",
      "Look in most Western fashion magazines, for example, and the women on the pages are thin.",
      "But is this the \"perfect\" body type for women worldwide?",
      "Douglas Yu, a biologist from Great Britain, and Glenn Shepard, an anthropologist at the University of California at Berkeley, say no.",
      "For them, what is considered beautiful is subjective and varies around the world.",
      "Yu and Shepard found in one study, for example, that native peoples in southeast Peru preferred shapes regarded as overweight in Western cultures.",
      "Take another example: In every culture, one's hairstyle sends a clear message.",
      "In the Huli culture of Papua New Guinea, men grow their hair long as a symbol of health and strength.",
      "Teenage boys in this culture learn from a young age to style and decorate their hair—a behavior more commonly associated with the opposite gender in many cultures.",
      "It is also the men in this culture who are the objects of beauty.",
      "For certain festivals and celebrations, men dress up and paint their faces.",
      "The more colorful a man is, the more masculine—and attractive—he is considered.",
      "For better or worse, beauty plays a role in our lives.",
      "But it is extremely difficult to define exactly what makes one person attractive to another.",
      "Although there do seem to be certain physical traits that are considered universally appealing, it is also true that beauty does not always conform to a single, uniform standard.",
      "In the end, beauty really is, as the saying goes, in the eye of the beholder."
    ]
  },
  {
    id: 4,
    title: "Skin: The body's canvas",
    meta: "주제: 피부와 신체 표현(문신·흉터·헤나) · 난이도 ★★★ (상관·도치 구문·정보량 상)",
    sentences: [
      "If you could take off your skin and lay it flat, it would cover an area of about 1.9 square meters.",
      "Skin is, by far, the body's largest organ.",
      "Covering almost the entire body, skin protects us from a variety of external forces.",
      "For example, it protects us from extremes of temperature, damaging sunlight, harmful chemicals, and dangerous infections.",
      "Skin is also packed with nerves, which keeps the brain in touch with the outside world.",
      "The health of our skin and its ability to perform its protective functions are crucial to our well-being.",
      "However, the appearance of our skin is equally—if not more—important to many people on this planet.",
      "Take skin color, for example.",
      "Your genes determine your skin's color, but for centuries, humans have tried to lighten or darken their skin in an attempt to be more attractive.",
      "In the 1800s, white skin was desirable for many Europeans.",
      "Skin this color meant that its owner was a member of the upper class and did not have to work in the sun.",
      "Among darker-skinned people in some parts of the world, products used to lighten skin are still popular today.",
      "During the 20th century, attitudes toward light skin shifted in the opposite direction in other cultures, as cities grew and work moved indoors.",
      "Tanned skin began to indicate leisure time and health.",
      "In many places today, tanning on the beach or in a salon remains popular, even though people are more aware of the dangers of UV rays.",
      "(소제목) Identity and Status",
      "Just as people have altered their skin's color to denote wealth and beauty, so too have cultures around the globe marked their skin to indicate cultural identity or community status.",
      "Tattooing, for example, has been carried out for thousands of years.",
      "Leaders in places including ancient Egypt, Britain, and Peru wore tattoos to mark their status, or their bravery.",
      "Today, among the Maori people of New Zealand as well as in cultures in Samoa, Tahiti, and Borneo, full-facial tattoos are still used to identify the wearer as a member of a certain family.",
      "These tattoos can also symbolize the person's achievements in life.",
      "In Japan, tattooing has been practiced for thousands of years, but was outlawed in the 19th century.",
      "Although there are no laws against it today, tattoos are still strongly associated with criminals—particularly the yakuza, or the Japanese mafia, who are known for their full-body tattoos.",
      "The complex design of a yakuza member's tattoo usually includes symbols of character traits that the wearer wants to have.",
      "The process of getting a full-body tattoo is both slow and painful and can take two years or more to complete.",
      "In some cultures, scarring—a marking caused by cutting or burning the skin—is practiced, usually among people who have darker skin on which a tattoo would be difficult to see.",
      "For many men in West Africa, for instance, scarring is a rite of passage—an act that symbolizes that a male has matured from a child into an adult.",
      "In Australia, among some native peoples, cuts are made on the skin of both men and women when they reach age 16 or 17.",
      "Without these, they were traditionally not permitted to trade, sing ceremonial songs, or participate in other activities.",
      "Not all skin markings are permanent, though.",
      "In countries such as Morocco and India, women decorate their skin with colorful henna designs for celebrations such as weddings and important religious holidays.",
      "The henna coloring, which comes from a plant, fades and disappears over time.",
      "In recent years in many industrialized nations, tattooing, henna body art, and, to a lesser degree, scarring have been gaining in popularity.",
      "What makes these practices appealing to those living in modern cities?",
      "According to photographer Chris Rainier, whose book Ancient Marks examines body markings around the globe, people are looking for a connection with the traditional world.",
      "\"There is a whole sector of modern society—people in search of identity, people in search of meaning...,\" says Rainier.",
      "\"Hence, [there has been] a huge explosion of tattooing and body marking.\"",
      "Rainier reasons that it's \"mankind wanting identity, wanting a sense of place... and a sense of culture within their community.\""
    ]
  },
  {
    id: 5,
    title: "Racing to rescue koalas",
    meta: "주제: 코알라 구조와 서식지 보존 · 난이도 ★☆☆ (평이한 서사·단순 구문)",
    sentences: [
      "It's two in the morning, and a koala is caught on a fence, like a prisoner trying to escape.",
      "A phone rings in the home of Megan Aitken in a suburb of Brisbane, on the east coast of Australia.",
      "Aitken runs a volunteer organization devoted to rescuing wild koalas.",
      "Before she is told the location, she has already thrown her clothes over her pajamas, ready to head out.",
      "When Aitken arrives on the scene, two other volunteers—Jane Davies and Sandra Peachey—are already there.",
      "They discover that the koala's fur is caught in the barbed wire.",
      "Nearby, they notice tall eucalyptus trees.",
      "\"He was obviously trying to get to the trees on the other side,\" Aitken says.",
      "Aitken puts on heavy gloves.",
      "Despite their cute appearance, koalas can be ferocious when resisting capture.",
      "If they feel threatened, they bite, and Aitken has the scars to prove it.",
      "The volunteers get to work.",
      "Davies throws a blanket over the animal, while Peachey opens the lid of a cage.",
      "Aitken firmly grasps the koala through the blanket, frees it from the fence, and drops it in the cage.",
      "Next, they check the animal's physical condition.",
      "If the koala is sick or injured, it may need to be taken to an animal hospital.",
      "If the koala is healthy—like this one—it is normally released where it is found.",
      "Koalas tend to live in a small area, and often eat from the same trees over and over.",
      "Right now, however, Aitken and the rescued koala are in a suburb with almost no trees.",
      "\"This is the whole problem,\" Aitken says. \"There are so few places left for the koala.\"",
      "In the end, Aitken takes the animal to a small park nearby and releases him.",
      "\"Good luck, little one,\" she says.",
      "(소제목) Koalas at Risk",
      "\"Koalas are getting caught in fences and dying,\" explains Deidré de Villiers, a koala researcher in Queensland, Australia.",
      "Others are being killed by dogs or struck by vehicles, she says.",
      "Some even die \"simply because a homeowner cut down several eucalyptus trees in his backyard.\"",
      "For 15 years, de Villiers has been studying koalas and the reasons for their disappearance.",
      "She is also working on ways to make suburban areas more koala-friendly.",
      "De Villiers believes that koalas and humans can live together, if certain changes are made.",
      "She recommends reducing speed limits on streets and creating more green areas for koalas to live in.",
      "Even more important is the need to preserve eucalyptus trees.",
      "Even if these changes are made, koalas still have another problem.",
      "\"Disease is a huge issue,\" explains veterinarian Jon Hanger.",
      "Hanger says that almost half of Queensland's female koalas are affected by a disease called chlamydiosis.",
      "Without treatment, the koalas are unable to reproduce.",
      "\"Koala populations that used to be vibrant are becoming extinct,\" says Hanger.",
      "Once, there were millions of koalas in Australia; now, there are believed to be fewer than 80,000.",
      "(소제목) A Friend to Koalas",
      "At her home near Brisbane, Deidré de Villiers is taking care of a female koala named Ruby.",
      "\"Ruby still sleeps in the basket hugging her teddy bear,\" she says. \"She was rescued from the jaws of a dog.\"",
      "Every two days, de Villiers collects eucalyptus leaves, the koala's primary food, from a nearby farm to feed Ruby.",
      "For 12 years, she has cared for more than 60 koalas.",
      "Later, de Villiers visits a forest near Brisbane to catch Tee Vee, a wild female koala.",
      "De Villiers has been following Tee Vee for over a year.",
      "Using special audio equipment, de Villiers walks and listens for a signal from the koala's radio collar.",
      "She eventually finds Tee Vee sitting on a tree branch 15 meters high.",
      "As de Villiers climbs up a ladder, Tee Vee starts moving down the tree.",
      "Then, suddenly, the koala jumps into the air and lands on the ground.",
      "She is quickly captured by de Villiers's team.",
      "Tee Vee is given medicine to relax her.",
      "Next, de Villiers measures the length of the koala's body and head.",
      "She also checks Tee Vee's teeth and the condition of her fur.",
      "\"I think she has a baby,\" de Villiers says.",
      "She carefully opens the koala's pouch and takes out a 10-centimeter-long baby koala.",
      "De Villiers examines the baby for any problems.",
      "Then she puts it back in the mother's pouch.",
      "\"As long as there are healthy babies,\" she says, \"there's still hope.\""
    ],
    extra: {
      title: "보충자료 · Losing their eucalyptus (시험 가능성 낮음, 보험용)",
      sentences: [
        "Over two centuries ago, about ten million koalas lived in forests on the east coast of Australia.",
        "Eucalyptus leaves—their primary food source—were plentiful.",
        "By the start of this century, nearly two-thirds of the forests had been cleared, leaving fewer than 80,000 koalas left in the wild."
      ]
    }
  },
  {
    id: 6,
    title: "Tracking the snow leopard",
    meta: "주제: 눈표범 보호와 지역 경제 · 난이도 ★★☆ (보존 논리·삽입 구문)",
    sentences: [
      "\"When a snow leopard stalks its prey among the mountain walls, it moves... softly, slowly,\" explains Indian biologist Raghunandan Singh Chundawat, who has studied the animal for years.",
      "\"If it knocks a stone loose, it will reach out a foot to stop it from falling and making noise.\"",
      "One might be moving right now, perfectly silent, maybe close by.",
      "But where?",
      "Best known for its spotted coat and long distinctive tail, the snow leopard is one of the world's most secretive animals.",
      "These elusive cats can only be found high in the remote, mountainous regions of Central Asia.",
      "For this reason, and because they hunt primarily at night, they are very rarely seen.",
      "Snow leopards have been officially protected since 1975, but enforcing this law has proven difficult.",
      "Many continue to be killed for their fur and body parts, which are worth a fortune on the black market.",
      "In recent years, though, conflict with local herders has also led to a number of snow leopard deaths.",
      "This is because the big cats kill the herders' animals, and drag the bodies away high up in the mountains to eat.",
      "As a result of these pressures, the current snow leopard population is estimated at only 4,000 to 7,000, and some fear that the actual number may already have dropped below 3,500.",
      "The only way to reverse this trend and bring these cats back from their threatened status, say conservationists, is to make them more valuable alive than dead.",
      "(소제목) A Fragile Relationship",
      "Because farming is difficult in Central Asia's cold, dry landscape, traditional cultures depend mostly on livestock (mainly sheep and goats) to survive in these mountainous regions.",
      "At night, when snow leopards hunt, herders' animals are in danger of snow leopard attacks.",
      "If a family loses even a few animals, it can push them into desperate poverty.",
      "\"The wolf comes and kills, eats, and goes somewhere else,\" said one herder, \"but snow leopards are always around. They have killed one or two animals many times... Everybody wanted to finish this leopard.\"",
      "To address this problem, local religious leaders have called for an end to snow leopard killings, saying that these wild animals have the right to exist peacefully.",
      "They've also tried to convince people that the leopards are quite rare, and thus it is important to protect them.",
      "(소제목) The Value of Preservation",
      "Financial incentives are also helping to slow snow leopard killings.",
      "The organization Snow Leopard Conservancy India Trust has established Himalayan Homestays, a program that sends visitors to herders' houses.",
      "For a clean room and bed, meals with the family, and an introduction to their culture, visitors pay about ten U.S. dollars a night.",
      "If guests come once every two weeks through the tourist season, the herders will earn enough income to replace the animals lost to snow leopards.",
      "In addition, the organization helps herders build protective fences that keep out snow leopards.",
      "It also conducts environmental classes at village schools, and trains the organization's members as nature guides, available for hire.",
      "In exchange, the herders agree not to kill snow leopards.",
      "In Mongolia, a project called Snow Leopard Enterprises (SLE) helps herder communities earn extra money in exchange for their promise to protect the endangered cat.",
      "Women in Mongolian herder communities make a variety of products—yarn for making clothes, decorative floor rugs, and toys—using the wool from their herds.",
      "SLE buys these items from herding families and sells them abroad.",
      "Herders must agree to protect the snow leopards and to encourage neighbors to do the same.",
      "The arrangement increases herders' incomes by 10 to 15 percent, and elevates the status of the women.",
      "If no one in the community kills the protected animals over the course of a year, the program members are rewarded with a 20 percent bonus in addition to the money they've already made.",
      "An independent review in 2006 found no snow leopard killings in areas where SLE operates.",
      "Today, the organization continues to add more communities.",
      "Projects like the Homestays program in India and SLE's business in Mongolia are doing well.",
      "Though they cover only a small part of the snow leopard's homeland, they make the leopards more valuable to more people each year.",
      "If these programs continue to do well, the snow leopard may just have a fighting chance."
    ]
  },
  {
    id: 7,
    title: "Sacred summits",
    meta: "주제: 화산(후지산·포포카테페틀)과 신앙 · 난이도 ★★☆ (서사+정보·고유명사 다수)",
    sentences: [
      "Volcanoes are creators and destroyers.",
      "They can shape lands and cultures, but can also cause great destruction and loss of life.",
      "Two of the best-known examples are found at opposite ends of the world, on the Pacific Ring of Fire.",
      "(소제목) Symbol of Japan",
      "It's almost sunrise near the summit of Japan's Mount Fuji.",
      "Exhausted climbers, many of whom have hiked the 3,776 meters through the night to reach this point, stop to watch as the sun begins spreading its golden rays across the mountain.",
      "For the climbers, this is an important moment.",
      "They have witnessed the dawn on Mount Fuji—the highest point in Japan.",
      "Mount Fuji is a sacred site.",
      "Japan's native religion, Shintoism, considers Fuji a holy place.",
      "Other people believe the mountain and its waters have the power to make a sick person well.",
      "For many, climbing Fuji is also a rite of passage.",
      "Some do it as part of a religious journey; for others, it is a test of strength.",
      "Whatever their reason, reaching the top in order to stand on Fuji's summit at sunrise is a must for many Japanese.",
      "Every July and August, hundreds of thousands attempt to do so.",
      "Fuji is more than a sacred site and tourist destination, however.",
      "It is also an active volcano around which four million people have settled, and it sits just 112 kilometers from the crowded streets of Tokyo.",
      "The last time Fuji erupted, in 1707, it sent out a cloud of ash that covered the capital city and darkened the skies for weeks.",
      "Today, new information has some volcanologists concerned that Fuji may soon erupt again.",
      "According to Motoo Ukawa and his associates at the National Research Institute for Earth Science and Disaster Prevention, there has been an increase in activity under Fuji recently.",
      "This activity may be caused by low-frequency earthquakes.",
      "Understanding what causes these quakes may help scientists predict when Fuji will come back to life.",
      "In the meantime, locals living near Fuji hold special festivals each year to offer gifts to the goddess of the volcano—as they have for generations—so that she will not erupt and destroy the land and its people below.",
      "(소제목) Mexico's Threatening Mountain",
      "Halfway across the globe from Fuji, Popocatépetl—one of the world's tallest and most dangerous active volcanoes—stands just 70 kilometers southeast of Mexico City.",
      "Although the volcano (whose name means \"smoking mountain\") has erupted many times over the centuries, scientists believe its last great eruption occurred around AD 820.",
      "In recent years, Popocatépetl is once again threatening the lives of the people near the mountain; in December 2000, almost 26,000 people were evacuated when El Popo—as Mexicans call the mountain—started to send out ash and smoke.",
      "As with all active volcanoes, the question is not if it will erupt again (an eruption is inevitable); the question is when it will happen.",
      "\"Every volcano works in a different way,\" explains Carlos Valdés González, a scientist who monitors El Popo.",
      "\"What we're trying to learn here are the symptoms signaling that El Popo will erupt.\"",
      "These include earthquakes, or any sign that the mountain's surface is changing or expanding.",
      "The hope is that scientists will be able to warn people in the surrounding areas so they have enough time to evacuate.",
      "A powerful eruption could displace over 20 million people—people whose lives can be saved if the warning is delivered early enough.",
      "For many people living near El Popo—especially farmers—abandoning their land is unthinkable.",
      "As anyone who farms near a volcano knows, the world's richest soils are volcanic.",
      "They produce bananas and coffee in Central America, fine wines in California, and enormous amounts of rice in Indonesia.",
      "Today, many people continue to see El Popo as their ancestors did.",
      "According to ancient beliefs, a volcano can be a god, a mountain, and a human all at the same time.",
      "To appease El Popo and to ensure rain and a good harvest, locals begin a cycle of ceremonies that starts in March and ends in August.",
      "Carrying food and gifts for the volcano, they hike up the mountain.",
      "Near the summit, they present their offerings, asking the volcano to protect and provide for one more season."
    ],
    extra: {
      title: "보충자료 · 인용문 (혹시 몰라 넣은 자료)",
      sentences: [
        "\"What we're trying to learn here are the symptoms signaling that El Popo will erupt.\" —Carlos Valdés González"
      ]
    }
  },
  {
    id: 8,
    title: "Is prediction possible?",
    meta: "주제: 지진 예측 연구 · 난이도 ★★★ (도치 구문·추상 논증 상)",
    sentences: [
      "Never before have so many people been packed into cities—places such as Los Angeles, Istanbul, Tokyo, and Lima—that are regularly affected by earthquakes.",
      "Located near the edge of Earth's huge, shifting plates, these cities face the risk of serious damage and economic disaster from large quakes as well as the tsunamis, fires, and other kinds of destruction they often cause.",
      "We understand earthquakes better than we did a century ago.",
      "Scientists would like to be able to predict them, but is this possible?",
      "Today, some of the simplest questions about earthquakes are still difficult to answer: Why do they start? What makes them stop?",
      "Perhaps the most important question scientists need to answer is this: Are there clear patterns in earthquakes, or are they basically random and impossible to predict?",
      "In Japan, government scientists say they have an answer to the question.",
      "\"We believe that earthquake prediction is possible,\" says Koshun Yamaoka, a scientist at the Earthquake Research Institute at the University of Tokyo.",
      "In fact, Japan has already predicted where its next great earthquake will be: the region of Tokai southwest of Tokyo.",
      "Here, two plate boundaries have generated huge earthquakes every 100 to 150 years, but there hasn't been a major quake here since 1854.",
      "The theory is that stress is building up in this zone, which could lead to a massive quake.",
      "Unfortunately, this is more a forecast than a prediction.",
      "It's one thing to say that an earthquake is likely to happen in a high-risk area.",
      "It's another to predict exactly where and when the quake will occur.",
      "The desire for a precise prediction of time and place has led to another theory: the idea of \"preslip.\"",
      "Naoyuki Kato, a scientist at the Earthquake Research Institute, says his laboratory experiments show that before a fault in the Earth's crust finally breaks and causes an earthquake, it slips just a little.",
      "If we can detect these early slips taking place deep in the Earth's crust, we may be able to predict the next big quake.",
      "(소제목) Clues in the Desert",
      "Scientists working in Parkfield, California, are also trying to see if predicting earthquakes is possible.",
      "They've chosen the town of Parkfield not only because the San Andreas Fault runs through it, but because it's known for having earthquakes quite regularly—approximately every 22 years.",
      "In the late 1980s, scientists in Parkfield decided to study the fault to see if there were any warning signs prior to a quake.",
      "To do this, they drilled deep into the fault and set up equipment to register activity.",
      "Then they waited for the quake.",
      "Year after year, nothing happened.",
      "When a quake did finally hit on September 28, 2004, it was years off schedule, but most disappointing was the lack of warning signs.",
      "Scientists reviewed the data but could find no evidence of anything unusual preceding the quake.",
      "It led many to believe that perhaps earthquakes really are random events.",
      "Instead of giving up, though, scientists in Parkfield dug deeper into the ground.",
      "By late summer 2005, they had reached the fault's final depth of three kilometers, where they continued collecting data, hoping to find a clue.",
      "And then they found something.",
      "In an article published in the July 2008 journal Nature, the researchers in Parkfield claimed to have detected small changes in the fault shortly before an earthquake hit.",
      "What had they noticed?",
      "Just before a quake, the cracks in the fault had widened slightly.",
      "Scientists registered the first changes 10 hours before an earthquake of 3.0 on the Richter scale hit; they identified identical signs two hours before a 1.0 quake—demonstrating that perhaps the \"pre-slip\" theory is correct.",
      "In other words, it may in fact be possible to predict an earthquake.",
      "Although there is still a long way to go, it appears from the research being done all over the world that earthquakes are not entirely random.",
      "If this is so, in the future we may be able to track the Earth's movements and design early-warning systems that allow us to predict when a quake will happen and, in doing so, prevent the loss of life."
    ],
    extra: {
      title: "보충자료 · Living with the threat (시험 가능성 낮음, 보험용)",
      sentences: [
        "(소제목) Building for Protection",
        "In many of the world's at-risk cities, new structures are designed to survive earthquakes.",
        "However, for older structures, engineers need to innovate.",
        "These changes help to make the structures stronger, which will reduce damage and allow for quicker repairs.",
        "(소제목) Bolted Foundations",
        "Wood-framed homes can be attached to foundations using long steel bolts.",
        "This makes them less likely to collapse.",
        "(소제목) Flexible Joints",
        "Adding flexible joints can allow tunnels to bend.",
        "(소제목) Shock Absorbers",
        "Larger buildings can be separated from their foundations and placed on steel and rubber pads.",
        "This helps the building better absorb strong shock waves.",
        "(소제목) Utility Protectors",
        "Tubes added around water pipes and electrical cables can move when the ground moves.",
        "This prevents damage to key utilities and makes repairs easier.",
        "(소제목) Micropiles and Mesh",
        "Micropiles—long pipes inserted through the foundations—as well as steel mesh wrapped around the columns, can make bridges and overpasses more flexible.",
        "(소제목) Steel \"Skeletons\"",
        "Steel \"skeletons\" attached to inner walls allow skyscrapers to sway without breaking.",
        "(소제목) Waves of Destruction",
        "An earthquake's waves come in two forms.",
        "P-waves (yellow) arrive fastest and compress and punch the rock.",
        "S-waves (red) are slower but more destructive.",
        "They move from side to side to shake and destroy buildings.",
        "At the ground level, P- and S-waves combine to produce surface waves that crack windows and even destroy bridges."
      ]
    }
  },
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

  // 지문 1 · 24번째 문장: All over the continent, thousands of soccer academies now recruit boys from poorer cities and towns to play the game.
  "1-23": {
    form: "3형식 (S + V + O)",
    tense: "단순 현재 (recruit)",
    chips: [
      ["수식어(M)·장소", "All over the continent"],
      ["주어(S)·막연한 다수", "thousands of soccer academies"],
      ["수식어(M)", "now"],
      ["동사(V)", "recruit"],
      ["목적어(O)", "boys (from poorer cities and towns)"],
      ["부사적 용법(목적)", "to play the game"],
    ],
    structure:
      `뼈대: <b>thousands of soccer academies</b>(S) + <b>recruit</b>(V) + <b>boys</b>(O) 의 <b>3형식</b>. 나머지는 수식어.<br><br>` +
      `① <b>All over the continent,</b> (장소 부사구·수식어): "대륙 전역에서". <b>the continent</b> = 아프리카 대륙(재등장 the).<br>` +
      `② <b>thousands of soccer academies</b> (⭐ 주어 · 막연한 다수 표현):<br>` +
      `&nbsp;&nbsp;• <b>thousands of ~</b> = "수천의 ~". 막연히 많은 수. of 뒤는 <b>무관사 복수</b>(soccer academies).<br>` +
      `&nbsp;&nbsp;• ⭐ <b>구별:</b> 막연한 다수는 <b>thousands of</b>(s + of), <b>구체적 숫자</b> 뒤엔 s·of 둘 다 없음 → <b>two thousand</b> academies. (hundreds / thousands / millions <b>of</b> ~ 세트로 암기)<br>` +
      `&nbsp;&nbsp;• (앞서 배운 <b>부분의 of</b>와 달리 여기엔 <b>the가 없음</b> → '그 중 일부'가 아니라 '<b>막연한 전체 수</b>'.)<br>` +
      `③ <b>now</b> (부사·수식어): "이제, 현재".<br>` +
      `④ <b>recruit</b> (동사): "모집하다 / 채용하다".<br>` +
      `⑤ <b>boys from poorer cities and towns</b> (목적어 + 수식어): "더 가난한 도시와 마을 출신의 소년들을". <b>poorer</b> = poor의 <b>비교급</b>("더 가난한"). <b>from ~</b>이 boys를 뒤에서 꾸밈.<br>` +
      `⑥ <b>to play the game</b> (⭐ to부정사 부사적 용법·목적): "그 게임(축구)을 <b>하도록 / 하게 하려고</b>". 왜 소년들을 모집하나? → 축구를 시키려고 (목적).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-adverb')">📐 to부정사 부사적 용법(목적) 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "대륙 전역에서, 이제 수천 개의 축구 아카데미가 더 가난한 도시와 마을의 소년들을 축구를 시키려고 모집한다."`,
    trans: "대륙 전역에서, 이제 수천 개의 축구 아카데미가 더 가난한 도시와 마을 출신 소년들을 축구를 하도록 모집한다.",
  },

  "1-24": {
    form: "중문 (절 A + and + 절 B) · A=3형식 / B=2형식",
    tense: "단순 현재 (learn / are)",
    chips: [
      ["주어(S)·A절", "Many"],
      ["동사(V)·A절", "learn"],
      ["목적어(O)·명사적 to부정사", "to play"],
      ["수식어(M)", "in their bare feet"],
      ["등위접속사", "and"],
      ["주어(S)·B절", "they"],
      ["동사(V)·B절", "are"],
      ["보어(C)·B절", "tough, creative competitors"],
    ],
    structure:
      `뼈대: <b>등위접속사 and</b>가 <b>대등한 두 문장</b>을 이어 붙인 <b>중문</b>. 각 절의 형식이 다름.<br><br>` +
      `<b>[A절] Many learn to play in their bare feet</b> → <b>3형식</b> (S+V+O)<br>` +
      `① <b>Many</b> (⭐ 주어 · 대명사): "많은 이들 / 많은 소년들". 앞 문장에서 모집된 <b>boys</b>를 받는 <b>대명사 Many</b>(= many boys). 뒤에 명사 없이 <b>홀로 주어</b>로 쓰임.<br>` +
      `② <b>learn</b> (동사): "배우다".<br>` +
      `③ <b>to play</b> (⭐ to부정사 <b>명사적 용법</b> · learn의 <b>목적어</b>): "(축구) <b>하는 것을</b>". learn 바로 뒤 목적어 자리 → 명사적.<br>` +
      `&nbsp;&nbsp;• ⭐ <b>24번과 비교:</b> 앞 문장 <b>to play the game</b>은 완전한 문장에 덤으로 붙어 '왜?'에 답한 <b>부사적(목적)</b>. 여기 <b>learn to play</b>는 <b>동사 바로 뒤 목적어</b> 자리라 <b>명사적</b>. 같은 to play, 자리가 용법을 가른다!<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사 명사·부사 용법 구분 자세히 →</span><br>` +
      `④ <b>in their bare feet</b> (전치사구·수식어): "<b>맨발로</b>". <b>bare</b> = 맨-/벌거벗은. 발이 둘이라 <b>feet</b>(foot의 복수).<br><br>` +
      `<b>[B절] they are tough, creative competitors</b> → <b>2형식</b> (S+V+C)<br>` +
      `⑤ <b>they</b> (주어) = 그 소년들.<br>` +
      `⑥ <b>are</b> (be동사): 2형식에서 "S=C"를 이어줌.<br>` +
      `⑦ <b>tough, creative competitors</b> (⭐ 주격보어 · 명사): "<b>강인하고 창의적인 선수들</b>". <b>tough</b>(강인한)와 <b>creative</b>(창의적인) 두 형용사가 <b>competitors</b>(경쟁자·선수)를 앞에서 꾸밈. they = competitors 관계라 <b>보어</b>.<br><br>` +
      `📝 <b>해석:</b> "많은 이들이 맨발로 (축구) 하는 것을 배우며, 그들은 강인하고 창의적인 선수들이다."`,
    trans: "많은 이들이 맨발로 축구를 배우며, 그들은 강인하고 창의적인 선수들이다.",
  },

  "1-25": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재 (is)",
    chips: [
      ["주어(S)", "Their dream"],
      ["동사(V)·be", "is"],
      ["보어(C)·명사적 to부정사 A", "to play for the national team"],
      ["등위접속사", "or"],
      ["보어(C)·명사적 to부정사 B", "to join one of the big clubs ..."],
      ["부분의 of", "one of the big clubs"],
      ["수식어(M)", "in Europe / someday"],
    ],
    structure:
      `뼈대: <b>Their dream</b>(S) + <b>is</b>(V) + <b>to play ... or to join ...</b>(C) 의 <b>2형식</b>. "그들의 꿈 = ~하는 것".<br><br>` +
      `① <b>Their dream</b> (주어): "그들의 꿈". their = 앞의 소년들.<br>` +
      `② <b>is</b> (be동사): 2형식에서 <b>S = C</b>를 이어줌.<br>` +
      `③ <b>보어(C)</b>는 <b>to부정사 명사적 용법</b>("~하는 것") <b>두 개</b>가 <b>등위접속사 or</b>로 병렬 연결됨:<br>` +
      `&nbsp;&nbsp;• <b>A: to play for the national team</b> = "국가대표팀에서 <b>뛰는 것</b>". <b>play for + 팀</b> = "~팀 소속으로 뛰다".<br>` +
      `&nbsp;&nbsp;• <b>B: to join one of the big clubs in Europe someday</b> = "언젠가 유럽의 큰 클럽들 중 <b>하나에 들어가는 것</b>".<br>` +
      `&nbsp;&nbsp;• ⭐ <b>병렬(parallelism):</b> or 앞뒤가 <b>to부정사 vs to부정사</b>로 <b>급을 맞춤</b>. 둘 다 is의 보어 = "꿈은 A 또는 B".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사 명사적 용법(보어) 자세히 →</span><br>` +
      `④ <b>one of the big clubs</b> (⭐ 부분의 of): "그 큰 클럽들 <b>중 하나</b>". <b>one of + the(특정) 복수명사</b> = 부분의 of. 여러 클럽 중 하나를 콕 집음.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분의 of 자세히 →</span><br>` +
      `⑤ <b>in Europe</b> (전치사구·수식어): the big clubs를 꾸밈 = "유럽의 큰 클럽들". <b>someday</b> (부사): "언젠가".<br><br>` +
      `📝 <b>해석:</b> "그들의 꿈은 국가대표팀에서 뛰거나 언젠가 유럽의 큰 클럽들 중 하나에 들어가는 것이다."`,
    trans: "그들의 꿈은 국가대표팀에서 뛰거나 언젠가 유럽의 큰 클럽 중 하나에 들어가는 것이다.",
  },

  "1-26": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재 (comes)",
    chips: [
      ["수식어(M)·전치사구", "For some"],
      ["주어(S)", "the dream"],
      ["동사(V)·불완전자동사", "comes"],
      ["보어(C)·형용사", "true"],
    ],
    structure:
      `뼈대: <b>the dream</b>(S) + <b>comes</b>(V) + <b>true</b>(C) 의 <b>2형식</b>. <b>For some</b>은 수식어.<br><br>` +
      `① <b>For some,</b> (전치사구·수식어): "<b>일부에게는</b>". <b>some</b> = <b>대명사</b>("일부 사람들") = 앞의 소년들 중 몇몇. 뒤에 명사 없이 홀로 쓰인 대명사.<br>` +
      `② <b>the dream</b> (주어): "(그) 꿈". 앞 문장에 나온 그 꿈 → <b>재등장 the</b>.<br>` +
      `③ <b>comes true</b> (⭐ 2형식 · come + 형용사보어): "<b>이루어진다</b>".<br>` +
      `&nbsp;&nbsp;• <b>come true</b> = "실현되다 / 이루어지다". 여기서 <b>come</b>은 "오다"가 아니라 "<b>~한 상태가 되다</b>"(≒ become)의 <b>불완전자동사</b>.<br>` +
      `&nbsp;&nbsp;• ⭐ <b>왜 truly(부사)가 아니라 true(형용사)?</b> 보어는 <b>주어(the dream)를 설명</b>하는 자리라 <b>형용사</b>가 옴. "꿈 = 진실인 상태". 동사를 꾸미는 게 아니므로 부사 truly는 <b>틀림</b>. (get ready, become rich 처럼 '자동사+형용사보어' 세트로 암기)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('linking-become','lb-trap')">📐 상태변화 자동사+형용사보어 (go bad·fall asleep) 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "일부에게는, 그 꿈이 이루어진다."`,
    trans: "일부에게는, 그 꿈이 이루어진다.",
  },

  "1-27": {
    form: "2형식 (S + V + C) · 부정",
    tense: "단순 현재 (is)",
    chips: [
      ["등위접속사", "But"],
      ["주어(S)", "the chance"],
      ["형용사적 to부정사", "to make money (with ~)"],
      ["동사(V)·be", "is"],
      ["수식어(M)·부사", "probably"],
      ["부정", "not"],
      ["보어(C)", "the main reason (for ~)"],
    ],
    structure:
      `뼈대: <b>the chance ...</b>(S) + <b>is</b>(V) + (probably) not + <b>the main reason ...</b>(C) 의 <b>2형식 부정</b>. "그 기회 ≠ 주된 이유".<br><br>` +
      `① <b>But</b> (등위접속사): 앞 문장(꿈이 이루어진다)과 <b>대조</b> — "하지만".<br>` +
      `② <b>the chance to make money with a professional team</b> (주어부):<br>` +
      `&nbsp;&nbsp;• 핵심 주어 = <b>the chance</b>("(그) 기회").<br>` +
      `&nbsp;&nbsp;• ⭐ <b>to make money</b> (<b>to부정사 형용사적 용법</b>): 앞의 명사 <b>chance를 뒤에서 꾸밈</b> = "돈을 <b>벌</b> 기회". <b>chance/way/time/reason + to부정사</b>는 형용사적 후치수식 단골.<br>` +
      `&nbsp;&nbsp;• <b>make money</b> = "돈을 벌다". <b>with a professional team</b> = "프로팀에서(소속으로)".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive')">📐 to부정사 형용사적 용법 자세히 →</span><br>` +
      `③ <b>is</b> (be동사): 2형식에서 <b>S = C</b>를 이어줌.<br>` +
      `④ <b>probably not</b> (⭐ 부사 + 부정): "<b>아마 ~아닐 것이다</b>". <b>probably</b>(부사·수식어)는 확신 낮춤. 위치는 <b>be동사 뒤, not 앞</b> → is probably not.<br>` +
      `⑤ <b>the main reason for soccer's popularity in Africa</b> (보어):<br>` +
      `&nbsp;&nbsp;• <b>the main reason</b> = "주된 이유". the chance = the reason 관계라 <b>주격보어</b>.<br>` +
      `&nbsp;&nbsp;• <b>reason for ~</b> = "~의 이유" (이유엔 전치사 <b>for</b>). <b>soccer's popularity</b> = "축구의 인기"(소유격 's). <b>in Africa</b> = 아프리카에서의.<br><br>` +
      `📝 <b>해석:</b> "하지만 프로팀에서 돈을 벌 기회가 아프리카에서 축구가 인기 있는 주된 이유는 아마 아닐 것이다."`,
    trans: "하지만 프로팀에서 돈을 벌 기회가 아프리카에서의 축구 인기의 주된 이유는 아마 아닐 것이다.",
  },

  "1-28": {
    form: "직접화법 · 인용문 + says + 주어(도치)",
    tense: "단순 현재 (is / says / unifies)",
    chips: [
      ["인용문①·2형식", "\"Soccer is the passion of everyone here\""],
      ["전달동사", "says"],
      ["주어(S)·도치", "Abubakari Abdul-Ganiyu"],
      ["동격(=주어)", "a teacher"],
      ["관계대명사·주격", "who works with youth clubs ..."],
      ["인용문②·3형식", "\"It unifies us.\""],
    ],
    structure:
      `전체 뼈대: <b>"인용문①"</b> + <b>says</b> + <b>주어(사람)</b> ... 그리고 <b>"인용문②"</b>. 큰따옴표 안이 실제 한 말(<b>직접화법</b>).<br><br>` +
      `① <b>"Soccer is the passion of everyone here"</b> (인용문① · <b>2형식</b>):<br>` +
      `&nbsp;&nbsp;• <b>Soccer</b>(S) + <b>is</b>(V) + <b>the passion of everyone here</b>(C).<br>` +
      `&nbsp;&nbsp;• <b>the passion of everyone</b> = "모두<b>의</b> 열정" (<b>소유의 of</b> ≒ everyone's passion). <b>here</b>(부사) = 이곳의.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-possess')">🧬 소유의 of 자세히 →</span><br>` +
      `② <b>says Abubakari Abdul-Ganiyu</b> (⭐ <b>인용문 뒤 도치</b>):<br>` +
      `&nbsp;&nbsp;• 원래 <b>주어 + says</b>인데, 인용문이 앞에 나오면 <b>동사 says + 주어</b>로 <b>도치</b>됨 = "~라고 <b>아부바카리가 말한다</b>". (주어가 대명사면 도치 안 함: "..." he says)<br>` +
      `③ <b>a teacher who works with youth clubs in Tamale, Ghana</b> (주어의 <b>동격</b>):<br>` +
      `&nbsp;&nbsp;• <b>콤마(,) 동격</b>: 앞의 사람(Abubakari) = <b>a teacher</b>. "아부바카리, <b>즉 한 교사</b>"라고 <b>다시 설명</b>.<br>` +
      `&nbsp;&nbsp;• ⭐ <b>who works with youth clubs</b> (<b>관계대명사 주격</b>): 선행사 <b>a teacher</b>(사람)를 꾸밈. who가 뒤 절의 <b>주어 자리</b>를 대신 → 뒤가 주어 없는 불완전절(works…). 3인칭 단수라 work<b>s</b>.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('relative-pronoun')">📐 관계대명사 자세히 →</span><br>` +
      `④ <b>"It unifies us."</b> (인용문② · <b>3형식</b>): <b>It</b>(S, =Soccer) + <b>unifies</b>(V, 통합하다) + <b>us</b>(O). "그것(축구)이 우리를 하나로 만든다".<br><br>` +
      `📝 <b>해석:</b> "'축구는 이곳 <b>모두의 열정</b>입니다'라고, 가나 타말레의 청소년 클럽에서 일하는 교사 아부바카리 압둘가니유는 말한다. '그것은 우리를 하나로 묶어줍니다.'"`,
    trans: "\"축구는 이곳 모두의 열정입니다\"라고, 가나 타말레에서 청소년 클럽과 함께 일하는 교사인 아부바카리 압둘가니유는 말한다. \"그것은 우리를 하나로 만듭니다.\"",
  },

  "1-29": {
    form: "3형식 (S + V + O)",
    tense: "현재완료 (has helped)",
    chips: [
      ["수식어(M)·접속부사", "In fact"],
      ["수식어(M)·빈도", "more than once"],
      ["주어(S)", "the game"],
      ["동사(V)·현재완료", "has helped"],
      ["목적어(O)·to부정사", "to bring people together"],
    ],
    structure:
      `뼈대: <b>the game</b>(S) + <b>has helped</b>(V) + <b>to bring people together</b>(O) 의 <b>3형식</b>. 앞의 두 콤마 덩어리는 수식어.<br><br>` +
      `① <b>In fact,</b> (접속부사·수식어): "<b>사실은</b>". 앞 내용을 <b>강조·부연</b>하며 이어줌.<br>` +
      `② <b>more than once,</b> (⭐ 빈도 수식어): "<b>한 번 이상</b> = 여러 번". <b>once</b>는 "한 번"이란 <b>부사</b>. <b>more than ~</b>("~보다 많이")가 붙어 "한두 번이 아니라 여러 차례"라는 뉘앙스.<br>` +
      `③ <b>the game</b> (주어): "그 경기(축구)". 앞서 나온 축구 → 재등장 the.<br>` +
      `④ <b>has helped</b> (⭐ <b>현재완료</b> · have/has + p.p.):<br>` +
      `&nbsp;&nbsp;• 형태: <b>has</b>(주어 the game 3인칭 단수) + <b>helped</b>(help의 p.p.).<br>` +
      `&nbsp;&nbsp;• 뜻: 단순 과거가 "그때 도왔다(끝)"라면, 현재완료는 <b>과거~현재를 잇는</b> "<b>(지금까지 여러 번) 도와왔다</b>"(경험·계속). 그래서 more than once("여러 번")와 잘 어울림.<br>` +
      `⑤ <b>to bring people together</b> (⭐ 목적어 · <b>help + to부정사</b>):<br>` +
      `&nbsp;&nbsp;• <b>help</b>는 목적어로 <b>to부정사</b>와 <b>원형부정사</b>를 <b>둘 다</b> 취함 → help <b>to</b> bring = help bring (뜻 같음).<br>` +
      `&nbsp;&nbsp;• <b>bring people together</b> = "사람들을 <b>하나로 모으다 / 화합시키다</b>" (bring + 목적어 + together).<br><br>` +
      `📝 <b>해석:</b> "사실, 한 번 이상(여러 번) 그 경기(축구)는 사람들을 하나로 모으는 데 도움을 주어 왔다."`,
    trans: "사실, 여러 번 그 경기(축구)는 사람들을 하나로 모으는 데 도움을 주어 왔다.",
  },

  "1-30": {
    form: "3형식 (S + V + O)",
    tense: "단순 과거 (faced)",
    chips: [
      ["수식어(M)·장소", "In Ivory Coast"],
      ["수식어(M)·접속부사", "for example"],
      ["주어(S)·and 병렬", "immigrants and Muslims"],
      ["동사(V)", "faced"],
      ["목적어(O)", "discrimination"],
      ["수식어(M)·기간", "for years"],
    ],
    structure:
      `뼈대: <b>immigrants and Muslims</b>(S) + <b>faced</b>(V) + <b>discrimination</b>(O) 의 <b>3형식</b>. 나머지는 수식어.<br><br>` +
      `① <b>In Ivory Coast,</b> (장소 수식어): "<b>코트디부아르에서</b>". Ivory Coast = 서아프리카 나라 이름.<br>` +
      `② <b>for example,</b> (접속부사·수식어): "예를 들어". 앞 문장(축구가 사람들을 모아왔다)의 <b>구체적 예</b>를 든다는 신호.<br>` +
      `③ <b>immigrants and Muslims</b> (⭐ 주어 · <b>and 병렬</b>): "이민자들과 무슬림들". <b>등위접속사 and</b>가 <b>두 명사(복수)</b>를 묶어 <b>복수 주어</b>를 만듦 → 동사도 복수 취급.<br>` +
      `④ <b>faced</b> (동사 · 단순 과거): <b>face</b>("직면하다·맞닥뜨리다")의 과거. <b>face discrimination</b> = "차별을 <b>겪다/당하다</b>".<br>` +
      `⑤ <b>discrimination</b> (목적어): "차별".<br>` +
      `⑥ <b>for years</b> (⭐ 기간 수식어): "<b>수년간</b>". <b>for + 기간</b> = "~동안". (참고: 30번의 현재완료와 달리 여기선 <b>과거 시제</b>라 과거의 한 기간을 가리킴.)<br><br>` +
      `📝 <b>해석:</b> "예를 들어 코트디부아르에서, 이민자들과 무슬림들은 수년간 차별을 겪었다."`,
    trans: "예를 들어 코트디부아르에서, 이민자들과 무슬림들은 수년간 차별을 겪었다.",
  },

  "1-31": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재 (are)",
    chips: [
      ["접속부사·대조", "Yet"],
      ["주어(S)·부분의 of", "many of the country's best soccer players"],
      ["동사(V)·be", "are"],
      ["보어(C)·전치사구", "from Muslim and immigrant families"],
    ],
    structure:
      `뼈대: <b>many of ...players</b>(S) + <b>are</b>(V) + <b>from ... families</b>(C) 의 <b>2형식</b>. be from = "~출신이다".<br><br>` +
      `① <b>⭐⭐ Yet</b> (접속부사·<b>반전/대조</b>) — <b style="color:#ff6b6b">★ 꼭 기억!</b>:<br>` +
      `&nbsp;&nbsp;• <b>Yet</b>은 문장 앞에서 "<b>그러나 / 그럼에도 불구하고</b>"라는 뜻으로, <b>앞 문장과 이어져 정반대 내용</b>을 끌고 오는 <b>반전 신호탄</b>. 혼자 보면 안 되고 <b>앞 문장과 묶어서</b> 읽어야 뜻이 살아남!<br>` +
      `&nbsp;&nbsp;• 🔗 <b>흐름:</b> (31번) 이민자·무슬림이 <b>차별을 겪었다</b> 😞 &nbsp;<b>↔ Yet ↔</b>&nbsp; (32번) <b>그런데도</b> 최고 선수 다수가 바로 그 무슬림·이민자 출신이다 ⚽ → "차별받던 이들이 오히려 축구 영웅"이라는 <b>반전</b>.<br>` +
      `&nbsp;&nbsp;• 💡 같은 반전 연결어: <b>but / however / nevertheless / still</b>. 독해에서 Yet·However가 보이면 "<b>앞뒤가 뒤집힌다</b>"고 표시해두기!<br>` +
      `② <b>many of the country's best soccer players</b> (⭐ 주어 · <b>부분의 of</b>):<br>` +
      `&nbsp;&nbsp;• <b>many of the ~</b> = "그 ~ <b>중 다수</b>". <b>수량표현(many) + of + the(특정) 복수명사</b> = 부분의 of. (23번 several of, 26번 one of 와 같은 계열)<br>` +
      `&nbsp;&nbsp;• <b>the country's</b> = "그 나라<b>의</b>" (소유격 's, = 코트디부아르). <b>best</b> = good의 <b>최상급</b>("최고의").<br>` +
      `&nbsp;&nbsp;• ⭐ <b>수일치:</b> 부분의 of는 <b>of 뒤 명사</b>에 동사를 맞춤 → players(복수)라서 <b>are</b>.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분의 of & 수일치 자세히 →</span><br>` +
      `③ <b>are</b> (be동사): 2형식에서 <b>S = C</b>를 이어줌.<br>` +
      `④ <b>from Muslim and immigrant families</b> (⭐ 전치사구 <b>보어</b>): "<b>무슬림·이민자 가정 출신</b>". <b>be from ~</b> = "~ 출신이다"에서 <b>from구 전체가 보어</b>. <b>Muslim·immigrant</b>가 families를 꾸미는 형용사, <b>and</b>로 병렬.<br><br>` +
      `📝 <b>해석:</b> "그러나 그 나라 최고 축구선수들 중 다수는 무슬림·이민자 가정 출신이다."`,
    trans: "그러나 그 나라 최고의 축구선수들 중 다수는 무슬림과 이민자 가정 출신이다.",
  },

  "1-32": {
    form: "현재완료 동사구 2개 병렬 · ①2형식 + ②3형식",
    tense: "현재완료 (has become / has helped)",
    chips: [
      ["수식어(M)·접속부사", "As a result"],
      ["주어(S)", "the national team"],
      ["동사구①·2형식", "has become a symbol of unity"],
      ["등위접속사", "and"],
      ["동사구②·3형식", "has helped to promote peace"],
      ["수식어(M)·장소", "throughout the country"],
    ],
    structure:
      `뼈대: <b>the national team</b>(S) <b>하나</b>에 <b>현재완료 동사구 두 개</b>가 <b>and</b>로 병렬 연결됨.<br><br>` +
      `① <b>As a result,</b> (접속부사·수식어): "<b>그 결과</b>". 앞 문장(무슬림·이민자 선수가 대표팀 주축)의 <b>결과</b>를 이어줌 (인과).<br>` +
      `② <b>the national team</b> (주어): "그 국가대표팀".<br>` +
      `③ ⭐ <b>병렬 구조:</b> 주어 하나에 <b>has become ~</b> <b>and</b> <b>has helped ~</b> — <b>현재완료 동사구 2개</b>가 급을 맞춰 나란히. (앞뒤 <b>has</b> 반복이 병렬 신호)<br>` +
      `&nbsp;&nbsp;<b>[동사구①] has become a symbol of unity</b> → <b>2형식</b> (현재완료):<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;• <b>has become</b> = become("~이 되다")의 <b>현재완료</b> → "(지금까지) <b>~이 되어 왔다/되었다</b>". become은 <b>보어</b>를 데려오는 2형식 동사.<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;• <b>a symbol of unity</b> (보어) = "<b>통합의 상징</b>". of = 무엇을 상징하는지 밝힘("통합이라는 상징").<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-apposition')">🧬 of의 종류(동격의 of) 자세히 →</span><br>` +
      `&nbsp;&nbsp;<b>[동사구②] has helped to promote peace throughout the country</b> → <b>3형식</b> (현재완료):<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;• <b>has helped</b> = help의 현재완료. <b>help + to부정사</b>(30번과 동일) → <b>to promote peace</b>가 목적어. "평화를 <b>증진하는 것을</b> 도와왔다".<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;• <b>promote peace</b> = "평화를 증진하다". <b>throughout the country</b> = "<b>전국에 걸쳐</b>" (throughout = ~전역에).<br><br>` +
      `📝 <b>해석:</b> "그 결과, 국가대표팀은 통합의 상징이 되었고 전국에 걸쳐 평화를 증진하는 데 도움을 주어 왔다."`,
    trans: "그 결과, 국가대표팀은 통합의 상징이 되었고 전국에 걸쳐 평화를 증진하는 데 기여해 왔다.",
  },

  "1-33": {
    form: "2형식 + 콜론(:) 부연 [뒷문장: keep+O+전치사구]",
    tense: "단순 현재 (is / keeps)",
    chips: [
      ["수식어(M)·장소", "All over Africa"],
      ["주어(S)", "soccer"],
      ["동사(V)·be", "is"],
      ["보어(C)·형용사", "popular (with ~)"],
      ["수식어(M)·이유", "for another reason"],
      ["콜론 :", "이유의 구체적 설명"],
      ["뒷문장 S·V·O", "It / keeps / young people"],
      ["삽입 — —", "especially boys"],
      ["보어·전치사구 병렬", "in school and out of trouble"],
    ],
    structure:
      `앞부분 뼈대: <b>soccer</b>(S) + <b>is</b>(V) + <b>popular</b>(C) 의 <b>2형식</b>. 콜론(:) 뒤가 그 이유를 풀어 설명.<br><br>` +
      `① <b>All over Africa,</b> (장소 수식어): "아프리카 전역에서".<br>` +
      `② <b>soccer is popular</b> (2형식): "축구는 인기 있다". <b>be popular with ~</b> = "<b>~에게 인기 있다</b>" → <b>with parents and teachers</b>(부모와 교사들에게).<br>` +
      `③ <b>for another reason</b> (이유 수식어): "<b>또 다른 이유로</b>". 앞에서 여러 이유가 나왔기에 <b>another</b>("또 하나의").<br>` +
      `④ ⭐ <b>:</b> (콜론) — 바로 앞 <b>another reason이 뭔지 뒤에서 공개</b>. "그 이유란 → (짜잔)". 앞 = 뒤 등호 관계.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('punctuation','pn-colon')">🎁 콜론 : 자세히 →</span><br>` +
      `⑤ <b>It keeps young people ... in school and out of trouble</b> (콜론 뒤 문장):<br>` +
      `&nbsp;&nbsp;• <b>It</b>(S, =soccer) + <b>keeps</b>(V) + <b>young people</b>(O) + <b>in school ... out of trouble</b>(전치사구 보어).<br>` +
      `&nbsp;&nbsp;• ⭐ <b>keep + 목적어 + 전치사구</b> = "O를 <b>~한 상태로 유지하다</b>". "젊은이들을 <b>학교 안에</b>, 그리고 <b>말썽에서 벗어난</b> 상태로 붙잡아 둔다".<br>` +
      `&nbsp;&nbsp;• <b>in school</b> = 학교에 다니는(재학) 상태 ↔ <b>out of trouble</b> = 말썽/문제에서 벗어난 상태. <b>and</b>로 두 전치사구 병렬.<br>` +
      `⑥ ⭐ <b>—especially boys—</b> (대시 삽입구): <b>young people을 부연</b>("특히 소년들"). <b>대시 — — 사이는 문장 성분 계산에서 빼고</b> 괄호 친 셈 치고 읽으면 뼈대가 보임.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('punctuation')">🎁 대시 — 삽입 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "아프리카 전역에서, 축구는 또 다른 이유로 부모와 교사들에게 인기 있다: 그것은 젊은이들—특히 소년들—을 학교에 다니고 말썽에서 벗어난 상태로 있게 해준다."`,
    trans: "아프리카 전역에서, 축구는 또 다른 이유로 부모와 교사들에게 인기 있다: 축구는 젊은이들—특히 소년들—을 학교에 남게 하고 말썽에서 벗어나 있게 해준다.",
  },

  "1-34": {
    form: "5형식 (allow + O + to부정사) · 인용문 도치",
    tense: "단순 현재 (don't allow / explains)",
    chips: [
      ["주어(S)·인용문", "Most clubs in Tamale, Ghana"],
      ["동사(V)·부정", "don't allow"],
      ["목적어(O)", "boys"],
      ["목적격보어(OC)·to부정사", "to play"],
      ["조건 부사절", "if they don't go to school"],
      ["전달동사", "explains"],
      ["주어(S)·도치", "Abubakari"],
    ],
    structure:
      `전체 뼈대: <b>"인용문"</b> + <b>explains</b> + <b>주어</b>. 인용문 속이 <b>5형식</b>.<br><br>` +
      `① <b>Most clubs in Tamale, Ghana,</b> (인용문 주어): "가나 타말레의 <b>대부분의 클럽들</b>". <b>most + 복수명사</b>(무관사) = "대부분의 ~". <b>in Tamale, Ghana</b>은 장소 수식어(콤마로 지명 병기).<br>` +
      `② ⭐ <b>don't allow boys to play</b> (핵심 · <b>5형식</b>: allow + O + to부정사):<br>` +
      `&nbsp;&nbsp;• <b>allow + 목적어 + to부정사</b> = "<b>O가 ~하도록 허락하다</b>". 여기선 <b>don't</b>로 부정 → "소년들이 (축구)<b>하는 걸 허락하지 않는다</b>".<br>` +
      `&nbsp;&nbsp;• <b>boys</b> = 목적어(O), <b>to play</b> = <b>목적격보어(OC)</b>. 목적어 boys가 <b>play의 의미상 주어</b>(소년들이 뛰는 것).<br>` +
      `&nbsp;&nbsp;• 💡 같은 5형식(O + to부정사) 동사: <b>want / tell / ask / expect / allow</b> + 목적어 + <b>to V</b>. 세트로 암기!<br>` +
      `③ ⭐ <b>if they don't go to school</b> (조건 부사절): "<b>그들이 학교에 다니지 않으면</b>". <b>if</b> = "~라면"(조건). <b>they</b> = boys. 앞의 '허락 안 함'이 <b>어떤 조건에서</b>인지 밝힘.<br>` +
      `④ ⭐ <b>explains Abubakari</b> (<b>인용문 뒤 도치</b>): 인용문이 앞에 오면 <b>동사(explains) + 주어(Abubakari)</b>로 도치 (<b>29번 says Abubakari</b>와 같은 패턴). "~라고 아부바카리가 설명한다".<br><br>` +
      `📝 <b>해석:</b> "'가나 타말레의 대부분의 클럽은 소년들이 학교에 다니지 않으면 (축구를) 하도록 허락하지 않습니다'라고 아부바카리는 설명한다."`,
    trans: "\"가나 타말레의 대부분의 클럽은 소년들이 학교에 다니지 않으면 (축구를) 하도록 허락하지 않습니다\"라고 아부바카리는 설명한다.",
  },

  "1-35": {
    form: "3형식(try our best) + 목적 to부정사 2개 병렬 [②=5형식 make]",
    tense: "현재진행 (are trying)",
    chips: [
      ["주어(S)", "We"],
      ["동사(V)·현재진행", "'re trying"],
      ["목적어(O)", "our best"],
      ["부사적 to부정사①·목적", "to help young people"],
      ["등위접속사", "and"],
      ["부사적 to부정사②·5형식 make", "to make them responsible"],
      ["수식어(M)", "in society"],
    ],
    structure:
      `뼈대: <b>We</b>(S) + <b>'re trying</b>(V) + <b>our best</b>(O). 그 뒤 <b>to부정사 두 개(목적)</b>가 and로 병렬.<br><br>` +
      `① <b>We're trying</b> (⭐ <b>현재진행</b> · be + -ing): "우리는 <b>노력하고 있다</b>". 지금 진행 중인 동작. <b>We're</b> = We are.<br>` +
      `② <b>our best</b> (목적어): <b>try one's best</b> = "<b>최선을 다하다</b>". our best = "우리의 최선을".<br>` +
      `③ ⭐ <b>to help ... and to make ...</b> (<b>to부정사 부사적 용법·목적</b> 2개 병렬): "무엇을 위해 최선을 다하나?" → 이 두 가지. <b>and</b>로 연결, <b>to</b>를 반복해 급을 맞춤.<br>` +
      `&nbsp;&nbsp;<b>[①] to help young people</b> = "젊은이들을 <b>돕기 (위해)</b>". help + young people.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-adverb')">📐 to부정사 부사적(목적) 자세히 →</span><br>` +
      `&nbsp;&nbsp;<b>[②] to make them responsible</b> = ⭐ <b>5형식 make</b> (make + O + <b>형용사</b> 목적격보어): "그들을 <b>책임감 있게 만들기 (위해)</b>". <b>them</b>(=young people)=목적어, <b>responsible</b>(형용사)=목적격보어. "them = responsible한 상태".<br>` +
      `&nbsp;&nbsp;• 💡 <b>35번 대비:</b> allow는 <b>O + to부정사</b>(to play), <b>make</b>는 <b>O + 형용사/원형</b>(responsible) — 목적격보어 형태가 동사마다 다름!<br>` +
      `④ <b>in society</b> (수식어): "사회에서". responsible을 보충 → "사회에서 책임감 있는".<br><br>` +
      `📝 <b>해석:</b> "우리는 젊은이들을 돕고 그들을 사회에서 책임감 있는 사람으로 만들기 위해 최선을 다하고 있습니다."`,
    trans: "우리는 젊은이들을 돕고 그들을 사회에서 책임감 있는 사람으로 만들기 위해 최선을 다하고 있습니다.",
  },

  // 지문 1 · 37번째 문장: Soccer helps us do this.
  "1-36": {
    form: "5형식 (S + help + O + 원형부정사)",
    tense: "단순 현재",
    chips: [
      ["주어(S)", "Soccer"],
      ["동사(V)", "helps"],
      ["목적어(O)", "us"],
      ["목적격보어(OC)·원형부정사", "do this"],
    ],
    structure:
      `뼈대: <b>Soccer</b>(S) + <b>helps</b>(V) + <b>us</b>(O) + <b>do this</b>(OC) 의 <b>5형식</b>. 짧지만 목적어 뒤에 보어가 하나 더 붙는 5형식 문장.<br><br>` +
      `① <b>Soccer</b> (주어): "축구는". 3인칭 단수라 동사에 <b>-s</b>가 붙어 helps.<br>` +
      `② ⭐ <b>help + O + (to) 동사원형</b> — 핵심! <b>help</b>는 목적격보어로 <b>to부정사와 원형부정사(동사원형)를 둘 다</b> 쓸 수 있는 특별한 동사. 요즘 영어(특히 미국식)는 <b>to를 생략한 원형</b>을 더 즐겨 씀.<br>` +
      `&nbsp;&nbsp;• 📛 <b>정식 명칭: 준사역동사(準使役動詞, semi-causative verb)</b>. 진짜 사역동사(make·have·let)는 목적격보어에 <b>반드시 원형</b>만 쓰지만, <b>help</b>는 원형·to부정사 <b>둘 다</b> 허용해서 '준(準)' 사역동사라 부름.<br>` +
      `&nbsp;&nbsp;• help us <b>do</b> this ⭕ = help us <b>to do</b> this ⭕ (뜻 같음)<br>` +
      `&nbsp;&nbsp;• 그래서 do 앞에 to가 없다고 당황하지 말 것 — <b>help가 허락한 원형부정사</b>임.<br>` +
      `③ <b>us</b> (목적어): "우리가". 이어지는 do의 <b>의미상 주어</b>이기도 함 → "우리가 do this 하도록 돕는다".<br>` +
      `④ <b>do this</b> (목적격보어·원형부정사): "이것을 하도록". <b>this</b>는 앞 문장 내용(젊은이들을 돕고 사회에서 책임감 있는 사람으로 만드는 것)을 통째로 가리키는 지시대명사.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-adverb')">📐 to부정사 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "축구는 우리가 이것을 하도록 돕는다" → 자연스럽게 "축구가 우리를 도와 이 일을 해낼 수 있게 해줍니다."`,
    trans: "축구는 우리가 이것을 해내도록 도와줍니다.",
  },

  // 지문 1 · 38번째 문장: For us, soccer is also a tool for hope.
  "1-37": {
    form: "2형식 (S + V + C)",
    tense: "단순 현재",
    chips: [
      ["수식어(M)·전치사구", "For us"],
      ["주어(S)", "soccer"],
      ["동사(V)·be동사", "is"],
      ["부사", "also"],
      ["보어(C)", "a tool for hope"],
    ],
    structure:
      `뼈대: <b>soccer</b>(S) + <b>is</b>(V) + <b>a tool for hope</b>(C) 의 <b>2형식</b>. be동사가 주어와 보어를 등호(=)로 이어줌 ("축구 = 희망의 도구").<br><br>` +
      `① <b>For us</b> (전치사구·수식어): "우리에게(는) / 우리 입장에서는". 문장 맨 앞으로 나와 <b>강조</b>. 콤마로 분리되며 문장 성분(S·V·C) 계산엔 안 들어감.<br>` +
      `&nbsp;&nbsp;• 💡 <b>for 해석 팁 (처음 보는 형태일 때):</b> <b>for</b>는 <b>일단 "~을 위해"로 넣어보고</b>, 문장이 어색하면 <b>"~에게는 / ~ 입장에서는"</b>으로 바꿔 해석. 여기선 "우리를 위해 축구는~"이 어색하니 → <b>"우리에게(는) 축구는~"</b>이 자연스러움.<br>` +
      `② <b>soccer</b> (주어): "축구는". 종목·개념을 총칭하므로 <b>무관사</b> (a/the 없이 씀).<br>` +
      `③ <b>is</b> (be동사·2형식): 주어와 보어를 이어주는 연결동사. "~이다".<br>` +
      `④ <b>also</b> (부사): "또한/역시". 앞 문장들(축구가 젊은이를 돕는다 등)에 <b>더해</b> 하나를 추가하는 느낌. be동사 뒤·보어 앞에 위치.<br>` +
      `⑤ <b>a tool for hope</b> (보어·명사구): "희망을 위한 하나의 도구". <b>a tool</b>(도구) + <b>for hope</b>(전치사구, tool을 뒤에서 꾸밈).<br>` +
      `&nbsp;&nbsp;• <b>for</b> = "~을 위한/~용(用)". a tool <b>for</b> hope = "희망을 위한 도구" (도구의 <b>목적·용도</b>를 나타냄).<br>` +
      `&nbsp;&nbsp;• <b>hope</b>는 추상 불가산명사라 관사 없이 씀. tool은 셀 수 있는 명사라 앞에 <b>a</b>가 붙음.<br><br>` +
      `📝 <b>해석:</b> "우리에게 축구는 <b>희망을 주는(희망을 위한)</b> 도구이기도 합니다." — 지문 전체를 마무리하는 감동적인 마지막 문장.`,
    trans: "우리에게 축구는 또한 희망의 도구이기도 합니다.",
  },

  // 지문 1 · 39번째 문장(보충자료 1): More than 200 national teams from six regions competed to get a place in 2018 FIFA World Cup in Russia.
  "1-38": {
    form: "1형식 (S + V) + 부사적 to부정사(목적)",
    tense: "단순 과거",
    chips: [
      ["주어(S)", "More than 200 national teams"],
      ["주어 수식·전치사구", "from six regions"],
      ["동사(V)·자동사", "competed"],
      ["부사적 to부정사·목적", "to get a place"],
      ["수식어(M)", "in 2018 FIFA World Cup in Russia"],
    ],
    structure:
      `뼈대: <b>teams</b>(S) + <b>competed</b>(V) 의 <b>1형식</b>. competed는 목적어 없는 자동사라, 뒤는 전부 수식어(전치사구·to부정사).<br><br>` +
      `① <b>More than 200 national teams</b> (주어): "200개가 넘는 대표팀들". <b>more than</b> = ~이상/~넘는. <b>national team</b> = 국가대표팀.<br>` +
      `② <b>from six regions</b> (전치사구·주어 수식): "여섯 개 지역(대륙 연맹)에서 온". 앞의 teams를 뒤에서 꾸며줌. (FIFA는 세계를 6개 대륙 연맹으로 나눔)<br>` +
      `③ <b>competed</b> (동사·자동사, 단순 과거): "경쟁했다". compete는 목적어를 바로 못 받는 <b>자동사</b>라 뒤에 전치사구/to부정사가 옴 → <b>1형식</b>. (경쟁 상대를 쓰려면 compete <b>with/against</b>, ~을 두고 겨루려면 compete <b>for</b>)<br>` +
      `④ ⭐ <b>to get a place</b> (<b>to부정사 부사적 용법·목적</b>): "자리(진출권)를 얻기 <b>위해</b>". "무엇 때문에 경쟁했나?"에 대한 답 → 목적. <b>get a place in ~</b> = "~에서 (한) 자리를 따내다" = 본선 <b>진출권을 얻다</b>.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-adverb')">📐 to부정사 부사적(목적) 자세히 →</span><br>` +
      `⑤ <b>in 2018 FIFA World Cup in Russia</b> (수식어): "러시아에서 열린 2018 FIFA 월드컵에(서)". <b>in</b>이 두 번 — 앞 in은 '월드컵이라는 대회 안에서(자리)', 뒤 in Russia는 '러시아라는 장소에서'.<br><br>` +
      `📝 <b>해석:</b> "여섯 개 대륙의 200개가 넘는 대표팀들이 <b>러시아에서 열린 2018 FIFA 월드컵 본선 진출권을 얻기 위해</b> 경쟁했다."`,
    trans: "여섯 개 지역(대륙)에서 온 200개가 넘는 대표팀들이 2018년 러시아 FIFA 월드컵 본선 진출권을 얻기 위해 경쟁했다.",
  },

  // 지문 1 · 40번째 문장(보충자료 2): Thirty-two soccer teams qualified for the final tournament.
  "1-39": {
    form: "1형식 (S + V + M)",
    tense: "단순 과거",
    chips: [
      ["주어(S)", "Thirty-two soccer teams"],
      ["동사(V)·자동사", "qualified"],
      ["수식어(M)·전치사구", "for the final tournament"],
    ],
    structure:
      `뼈대: <b>teams</b>(S) + <b>qualified</b>(V) 의 <b>1형식</b>. qualified는 목적어 없는 자동사라, 뒤 전치사구는 수식어.<br><br>` +
      `① <b>Thirty-two soccer teams</b> (주어): "32개의 축구팀(대표팀)". 숫자 <b>21~99</b>를 영어로 쓸 땐 <b>하이픈(-)</b>으로 이음 (thirty-two, forty-five …).<br>` +
      `② <b>qualified</b> (동사·자동사, 단순 과거): "(자격을 얻어) 진출했다". qualify는 목적어를 바로 못 받는 <b>자동사</b>라 뒤에 전치사가 필요 → <b>1형식</b>.<br>` +
      `&nbsp;&nbsp;• ⭐ <b>qualify for ~</b> = "~에 진출하다 / ~의 자격을 얻다". 스포츠에서 <b>본선·다음 라운드 진출</b>을 말할 때 딱 쓰는 표현.<br>` +
      `&nbsp;&nbsp;• 💡 <b>39번과 연결:</b> 앞 문장은 "200개 팀이 진출하려 <b>경쟁했다(competed)</b>", 이 문장은 그중 "32개 팀이 <b>진출에 성공했다(qualified)</b>" — 경쟁의 <b>결과</b>.<br>` +
      `③ <b>for the final tournament</b> (전치사구·수식어): "본선(최종 토너먼트)에". <b>the final tournament</b> = (예선을 거친 뒤의) 최종 본선 대회 = 월드컵 본선.<br><br>` +
      `📝 <b>해석:</b> "32개의 축구팀이 본선에 진출했다."`,
    trans: "32개의 축구팀이 본선(최종 토너먼트)에 진출했다.",
  },

  // 지문 1 · 41번째 문장(보충자료 3): Although each team represents a country, it doesn't mean all its players were born there.
  "1-40": {
    form: "복문 (양보 부사절 + 주절 3형식, 주절 목적어=명사절)",
    tense: "단순 현재 (+ 종속절 단순 과거)",
    chips: [
      ["양보 접속사", "Although"],
      ["부사절 S", "each team"],
      ["부사절 V", "represents"],
      ["부사절 O", "a country"],
      ["주절 S", "it"],
      ["주절 V", "doesn't mean"],
      ["주절 O·명사절", "(that) all its players were born there"],
    ],
    structure:
      `뼈대: <b>Although ~</b>(양보 부사절) + <b>it doesn't mean ~</b>(주절). 주절은 <b>it</b>(S) + <b>doesn't mean</b>(V) + <b>명사절</b>(O)의 3형식.<br><br>` +
      `① ⭐ <b>Although</b> (양보 접속사): "비록 ~이지만/~라고 해서". 뒤 내용을 <b>인정</b>하면서 주절에서 <b>반전</b>을 줌. <b>Although = Though</b> (though가 조금 더 구어적). ⚠️ <b>although 뒤엔 '완전한 문장(주어+동사)'</b>이 옴 (전치사 despite/in spite of 뒤엔 명사가 오는 것과 구별!).<br>` +
      `② <b>each team represents a country</b> (양보 부사절·3형식): "각 팀은 한 나라를 대표한다". <b>each + 단수명사 + 단수동사</b> → each team(단수)이라 represent<b>s</b>. represent = 대표하다.<br>` +
      `③ <b>it</b> (주절 주어): 여기 it은 앞 부사절 내용("각 팀이 한 나라를 대표한다는 것")을 받는 <b>가리키는 it</b>. "그것이(그렇다고 해서)".<br>` +
      `④ <b>doesn't mean</b> (주절 동사): "~을 의미하지는 않는다". 3인칭 단수 it이라 does. <b>A doesn't mean B</b> = "A라고 해서 B인 것은 아니다"(부분 부정 뉘앙스).<br>` +
      `⑤ <b>(that) all its players were born there</b> (mean의 목적어·<b>명사절</b>): 접속사 <b>that이 생략</b>됨. 절 전체가 mean의 목적어(명사) 역할.<br>` +
      `&nbsp;&nbsp;• <b>all its players</b>(그 팀의 모든 선수들) + <b>were born</b>(태어났다) + <b>there</b>(거기서=그 나라에서).<br>` +
      `&nbsp;&nbsp;• ⭐ <b>be born</b> = "태어나다" — bear(낳다)의 수동태. '태어나다'는 <b>항상 수동태(be + born)</b>로 씀 (I <b>was born</b> in 2000 ⭕ / I born ❌).<br>` +
      `&nbsp;&nbsp;• <b>its</b> = each team의 소유격 "그 팀의". (it's = it is 와 혼동 금지!)<br><br>` +
      `📝 <b>해석:</b> "각 팀이 한 나라를 대표하긴 하지만, 그렇다고 그 팀의 <b>모든 선수가 그 나라에서 태어났다는 뜻은 아니다</b>."`,
    trans: "각 팀이 한 나라를 대표하긴 하지만, 그렇다고 해서 그 팀의 모든 선수가 그 나라에서 태어났다는 뜻은 아니다.",
  },

  // 지문 1 · 42번째 문장(보충자료 4): Family relations and dual citizenship (having two nationalities) influence which country a player plays for.
  "1-41": {
    form: "3형식 (S + V + O), 목적어=의문사 명사절",
    tense: "단순 현재",
    chips: [
      ["주어(S)·A and B", "Family relations and dual citizenship"],
      ["삽입·부연", "(having two nationalities)"],
      ["동사(V)", "influence"],
      ["목적어(O)·명사절", "which country a player plays for"],
    ],
    structure:
      `뼈대: <b>주어(A and B)</b> + <b>influence</b>(V) + <b>명사절</b>(O) 의 <b>3형식</b>.<br><br>` +
      `① <b>Family relations and dual citizenship</b> (주어): "가족 관계와 이중 국적". <b>A and B</b>로 두 개가 묶인 <b>복수 주어</b> → 동사도 복수형 <b>influence</b>(s가 안 붙음!).<br>` +
      `&nbsp;&nbsp;• <b>dual</b> = 이중의/둘의, <b>citizenship</b> = 시민권/국적.<br>` +
      `② <b>(having two nationalities)</b> (괄호·부연 설명): 앞의 <b>dual citizenship이 뭔지</b> 풀어줌 = "두 개의 국적을 가지는 것". 괄호 안이라 문장 성분 계산엔 안 들어감. having은 <b>동명사</b>("가지는 것").<br>` +
      `③ <b>influence</b> (동사): "~에 영향을 미치다". ⭐ 타동사라 <b>목적어를 바로</b> 받음 → influence <u>on</u>/to ❌, influence + 목적어 ⭕. (명사 influence <b>on</b>과 헷갈리지 말 것)<br>` +
      `④ ⭐ <b>which country a player plays for</b> (influence의 목적어·<b>의문사 명사절 = 간접의문문</b>): "어느 나라를 위해 (한) 선수가 뛰는지".<br>` +
      `&nbsp;&nbsp;• 어순 주의! 간접의문문은 <b>의문사 + 주어 + 동사</b> 순 (의문문 도치 ❌). which country(의문사구) + a player(S) + plays for(V).<br>` +
      `&nbsp;&nbsp;• <b>play for + 나라/팀</b> = "~ 소속으로/~을 위해 뛰다". 끝의 <b>for</b>의 목적어가 앞으로 빠져나가 <b>which country</b>가 됨 (a player plays for <u>which country</u> → which country a player plays for).<br><br>` +
      `📝 <b>해석:</b> "가족 관계와 (두 국적을 가지는) 이중 국적은 <b>선수가 어느 나라를 위해 뛰는지에</b> 영향을 미친다."`,
    trans: "가족 관계와 이중 국적(두 개의 국적을 가지는 것)은 한 선수가 어느 나라를 위해 뛰는지에 영향을 미친다.",
  },

  // 지문 1 · 43번째 문장(보충자료 5): Of the 32 teams competing for the World Cup (shown here), 25 had at least one foreign-born player.
  "1-42": {
    form: "3형식 (S + V + O)",
    tense: "단순 과거",
    chips: [
      ["수식어(M)·부분의 of", "Of the 32 teams"],
      ["현재분사구·teams 수식", "competing for the World Cup"],
      ["삽입·부연", "(shown here)"],
      ["주어(S)", "25"],
      ["동사(V)", "had"],
      ["목적어(O)", "at least one foreign-born player"],
    ],
    structure:
      `뼈대: <b>25</b>(S) + <b>had</b>(V) + <b>one ... player</b>(O) 의 <b>3형식</b>. 맨 앞 <b>Of ~</b> 덩어리는 "그 32팀 중에서"라는 <b>범위 수식어</b>.<br><br>` +
      `① ⭐ <b>Of the 32 teams ...</b> (<b>부분의 of</b>·수식어): "그 32개 팀 <b>중에서</b>". 전체집합을 앞에 내세우고, 뒤에서 그중 일부(25)를 말하는 구조. <b>Of + 전체, 숫자 + 동사</b> 패턴.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분의 of 자세히 →</span><br>` +
      `② <b>competing for the World Cup</b> (현재분사구·<b>teams 수식</b>): "월드컵을 두고 겨루는(출전하는)" 32팀. <b>the 32 teams (which were) competing</b>에서 <b>관계대명사+be가 생략</b>된 형태. teams가 스스로 겨루므로 <b>능동 → -ing(현재분사)</b>. compete <b>for</b> = ~을 두고 경쟁하다.<br>` +
      `③ <b>(shown here)</b> (과거분사구·삽입): "여기 (그림에) 보이는". <b>(which are) shown here</b>의 축약. teams가 <b>보여지는</b> 대상이라 <b>수동 → p.p.(과거분사)</b>. ②와 대비: <b>competing(능동·-ing) ↔ shown(수동·p.p.)</b>.<br>` +
      `④ <b>25</b> (주어): "25개 (팀)". 앞의 teams를 받아 <b>숫자만으로 주어</b>. = 25 (of them/teams).<br>` +
      `⑤ <b>had</b> (동사·단순과거): "가지고 있었다". have의 과거.<br>` +
      `⑥ <b>at least one foreign-born player</b> (목적어): "적어도 한 명의 외국 태생 선수를". <b>at least</b> = 적어도/최소한. <b>foreign-born</b> = "외국에서 태어난"(형용사, foreign + born을 하이픈으로 묶은 복합형용사).<br><br>` +
      `📝 <b>해석:</b> "(여기 보이는) 월드컵에 출전한 32개 팀 <b>중 25개 팀은</b> 외국 태생 선수를 <b>적어도 한 명</b> 보유하고 있었다."`,
    trans: "월드컵에 출전한 32개 팀(여기 표시됨) 중 25개 팀은 적어도 한 명의 외국 태생 선수를 보유하고 있었다.",
  },

  // 지문 1 · 44번째 문장(보충자료 6·마지막): In total, 97 foreign-born players competed in the 2018 World Cup.
  "1-43": {
    form: "1형식 (S + V + M)",
    tense: "단순 과거",
    chips: [
      ["수식어(M)·부사구", "In total"],
      ["주어(S)", "97 foreign-born players"],
      ["동사(V)·자동사", "competed"],
      ["수식어(M)·전치사구", "in the 2018 World Cup"],
    ],
    structure:
      `뼈대: <b>players</b>(S) + <b>competed</b>(V) 의 <b>1형식</b>. competed는 자동사라 뒤 전치사구는 수식어.<br><br>` +
      `① <b>In total</b> (부사구·수식어): "총(합해서) / 전부 해서". 앞 문장들에서 나눠 말한 숫자를 <b>한데 합산</b>하는 마무리 표현. 콤마로 분리되고 문장 성분 계산엔 안 들어감.<br>` +
      `② <b>97 foreign-born players</b> (주어): "97명의 외국 태생 선수들". <b>foreign-born</b>(외국에서 태어난)은 43번에도 나온 복합형용사 → players를 앞에서 꾸밈.<br>` +
      `③ <b>competed</b> (동사·자동사, 단순 과거): "출전했다/경쟁했다". 39번 competed와 같은 자동사 → 목적어 없이 전치사구가 옴 → <b>1형식</b>.<br>` +
      `&nbsp;&nbsp;• 💡 <b>39번과 수미상관:</b> 이 보충자료는 competed로 시작(200팀 경쟁)해서 competed로 끝맺음(97명 출전) — 깔끔한 마무리.<br>` +
      `④ <b>in the 2018 World Cup</b> (전치사구·수식어): "2018 월드컵에(서)". 특정 대회라 <b>the</b>가 붙음 (the 2018 World Cup).<br><br>` +
      `📝 <b>해석:</b> "<b>총</b> 97명의 외국 태생 선수가 2018 월드컵에 출전했다." — 통계를 합산하며 글을 마무리.`,
    trans: "총 97명의 외국 태생 선수가 2018 월드컵에 출전했다.",
  },

  // 지문 2 · 1번째 문장: How does a person become an Olympic champion—someone capable of winning the gold?
  "2-0": {
    form: "2형식 (S + V + C) · How 의문문",
    tense: "현재 (일반적 사실)",
    chips: [
      ["의문부사", "How"],
      ["조동사", "does"],
      ["주어(S)", "a person"],
      ["동사(V)", "become"],
      ["보어(C)", "an Olympic champion"],
      ["동격", "—someone capable of winning the gold"],
    ],
    structure:
      `뼈대: <b>a person(S) + become(V) + an Olympic champion(C)</b> 의 <b>2형식</b>을 <b>How ~ ?</b> 의문문으로 바꾼 문장.<br><br>` +
      `① <b>How does + 주어 + 동사원형 ~?</b> ("어떻게 ~하는가?") — do/does로 만드는 의문문이라 뒤 동사는 반드시 <b>원형 become</b>. 왜 becomes가 아닌가? → 의문·부정을 담당하는 <b>does가 이미 3인칭·현재를 표시</b>했으니, 본동사는 원형으로 돌아감 (does becomes ❌).<br>` +
      `② <b>a person</b> (주어) — 왜 the person도, persons도 아닌 <b>a person</b>인가?<br>` +
      `&nbsp;&nbsp;• 특정 누군가가 아니라 <b>'아무나 한 사람 (사람이라면 누구든)'</b>을 뜻하는 <b>총칭의 a</b>. "한 사람이 어떻게 하면 ~이 되는가"라는 일반론이라 부정관사 a가 딱 맞음.<br>` +
      `③ <b>become</b> (2형식 동사·불완전자동사): "~이 되다". 뒤에 <b>보어</b>가 와서 주어(a person)와 등호(=) 관계 → a person = an Olympic champion. 목적어가 아니라 보어라서 2형식.<br>` +
      `④ <b>an Olympic champion</b> (주격보어) — 왜 <b>an</b>인가? Olympic의 <b>첫소리가 모음 [o]</b>라서 a가 아니라 an. (철자가 아니라 <b>소리</b> 기준!)<br>` +
      `⑤ <b>— … </b> (엠 대시): 앞의 <b>an Olympic champion을 다시 풀어 설명하는 동격</b>. "즉, 다시 말해"로 이어 읽으면 됨. 대시 뒤는 문장 필수 성분이 아니라 부연.<br>` +
      `⑥ <b>someone capable of winning the gold</b> (핵심 중의 핵심!) — 겉보기엔 형용사구가 명사를 <b>뒤에서</b> 꾸미는 후치 수식이지만, 그 밑바탕은 <b>주격 관계대명사 + be동사가 생략</b>된 구조.<br>` +
      `&nbsp;&nbsp;• 완전한 형태로 복원하면: <b>someone <u>who is</u> capable of winning the gold</b> ("금메달을 딸 능력이 있는 사람"). 여기서 <b>주격 관계대명사 who + be동사 is가 통째로 생략</b>된 것.<br>` +
      `&nbsp;&nbsp;• 왜 생략 가능한가? → <b>「주격 관계대명사(who/which/that) + be동사」는 한 세트로 함께 생략</b>할 수 있음. 생략하고 나면 뒤에 남는 게 <b>형용사(구)·분사·전치사구</b>일 때 이렇게 명사 뒤에 바로 붙는 형태가 됨.<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- someone (who is) <b>capable</b> ... → 형용사가 남은 경우 (지금 이 문장)<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- the man (who is) <b>running</b> → 현재분사가 남으면 '진행'<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;- a letter (which was) <b>written</b> in English → 과거분사가 남으면 '수동'<br>` +
      `&nbsp;&nbsp;• 왜 who는 생략돼도 되고 whose·목적격과 다른가? → <b>주격 관계대명사는 단독으론 생략 불가</b>지만, <b>바로 뒤에 be동사가 따라올 때만</b> be동사와 <b>한 묶음으로</b> 생략됨. 그래서 who is 둘 다 사라진 것.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('relative-pronoun','rp-subject-omit')">✂️ 주격 관계대명사 + be동사 생략 자세히 →</span><br>` +
      `&nbsp;&nbsp;• <b>someone</b>(-one으로 끝나는 대명사)은 형용사가 <b>앞이 아니라 뒤에서</b> 꾸미는 게 원칙 → who is를 다시 넣지 않는 한 capable이 someone 뒤에 붙음 (capable someone ❌).<br>` +
      `&nbsp;&nbsp;• <b>be capable of + (동)명사</b>: "~할 능력이 있는". of 다음엔 반드시 <b>동명사(-ing)</b>! → capable of <b>winning</b> (capable to win ❌). ← 이 <b>be</b>가 바로 생략된 <b>is</b>임을 알면 왜 of/-ing가 오는지 더 확실히 보임.<br>` +
      `&nbsp;&nbsp;• <b>the gold</b> = the gold medal(금메달)에서 medal이 생략된 표현. 올림픽에서 딸 그 '금'이라 특정되므로 <b>the</b>.<br><br>` +
      `📝 <b>해석:</b> "어떻게 하면 한 사람이 올림픽 챔피언, 즉 금메달을 딸 능력을 갖춘 사람이 될까?" — 글 전체의 <b>문제 제기(도입 질문)</b>. 바로 다음 문장이 그 답(생물학적·환경적·심리적 요인 + 훈련)을 제시.`,
    trans: "어떻게 하면 한 사람이 올림픽 챔피언—즉 금메달을 딸 수 있는 사람—이 되는 걸까?",
  },

  // 지문 2 · 2번째 문장: In reality, a combination of biological, environmental, and psychological factors, as well as training and practice, all go into making a super athlete.
  "2-1": {
    form: "1형식 (S + V + M)",
    tense: "현재 (일반적 사실·진리)",
    chips: [
      ["수식어(M)·부사구", "In reality"],
      ["주어(S)·핵심명사", "a combination of ... factors"],
      ["삽입구", "as well as training and practice"],
      ["동격 부사", "all"],
      ["동사(V)·자동사", "go"],
      ["수식어(M)·전치사구", "into making a super athlete"],
    ],
    structure:
      `뼈대: <b>a combination(S) + go(V)</b> 의 <b>1형식</b>. go는 자동사라 뒤 into구는 전부 수식어. 주어와 동사 사이에 수식어·삽입구가 잔뜩 끼어 <b>주-동이 멀리 떨어진</b> 문장이라 뼈대부터 잡는 게 핵심.<br><br>` +
      `① <b>In reality</b> (부사구·수식어): "실제로(는) / 사실은". 앞 문장의 질문(2-0)에 대해 "현실을 말하자면"으로 답을 여는 <b>담화표지</b>. 콤마로 분리되고 문장 성분 계산엔 안 들어감.<br>` +
      `② <b>a combination of ... factors</b> (주어) — 핵심명사(head)는 <b>a combination</b>(단수). "~들의 조합/결합".<br>` +
      `&nbsp;&nbsp;• <b>of</b>는 "무엇으로 이루어졌나"를 밝히는 <b>부분·구성의 of</b>: a combination <u>of</u> factors = "여러 요인들로 이루어진 하나의 조합".<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분의 of & 수일치 자세히 →</span><br>` +
      `&nbsp;&nbsp;• 왜 <b>a</b> combination인가? → 여러 요인을 묶은 <b>하나의</b> 덩어리라서 부정관사 a. <span class="wikilink" onclick="gotoGrammar('articles','ar-a')">📐 부정관사 a/an(하나·총칭) 자세히 →</span><br>` +
      `③ <b>biological, environmental, and psychological</b> (병렬) — <b>A, B, and C</b> 형태로 형용사 셋을 대등하게 나열해 factors를 꾸밈. 마지막 항목 앞에만 and, 품사·형태(-al 형용사)를 맞춘 게 <b>병렬구조</b>의 핵심.<br>` +
      `④ <b>factors</b> (무관사 복수) — 특정 요인들이 아니라 '일반적으로 그런 요인들'이라 관사 없이 복수. <span class="wikilink" onclick="gotoGrammar('articles','ar-zero')">📐 무관사(총칭 복수) 자세히 →</span><br>` +
      `⑤ <b>, as well as training and practice,</b> (삽입구) — "훈련과 연습<b>뿐만 아니라</b> (~도)". <b>B as well as A</b> = "A뿐 아니라 B도"인데, 여기선 앞뒤 콤마로 <b>삽입</b>되어 주어를 보충 설명.<br>` +
      `&nbsp;&nbsp;• 🚨 <b>수일치 함정:</b> as well as로 이어진 부분은 <b>진짜 주어가 아님</b>. 동사는 <b>앞의 핵심명사(a combination)</b>에 맞춤 → 이 삽입구가 아무리 복수(training and practice)라도 동사 수를 좌우하지 못함. (「A as well as B」에서 동사는 <b>A</b>에 일치)<br>` +
      `⑥ <b>all go</b> (핵심!) — 왜 단수 goes가 아니라 <b>복수 go</b>인가?<br>` +
      `&nbsp;&nbsp;• 문법상 핵심주어 a combination은 단수라 원칙대로면 goes지만, 글쓴이는 <b>'여러 요인들 + all(모두)'</b>을 <b>내용상 복수</b>로 느껴 <b>go</b>로 씀 → <b>의미(내용) 일치</b>.<br>` +
      `&nbsp;&nbsp;• 바로 앞의 <b>all</b>(동격 부사, "이 모든 것이")이 복수 감각을 굳혀 go를 이끎. all은 주어를 받아 "그것들 모두"라고 힘줘 반복하는 장치.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 of + 수일치(내용 일치) 자세히 →</span><br>` +
      `⑦ <b>go into + -ing</b> ("~하는 데 들어가다/투입되다·기여하다"): into는 전치사라 뒤에 <b>동명사 making</b>. → "슈퍼 선수를 만드는 데 (전부) 투입된다". (go into to make ❌)<br>` +
      `⑧ <b>a super athlete</b> — 특정인이 아닌 '(어떤) 뛰어난 운동선수 한 명'이라 <b>총칭의 a</b>. athlete가 자음 소리로 시작해 an이 아니라 a.<br><br>` +
      `📝 <b>해석:</b> "실제로, 생물학적·환경적·심리적 요인들의 조합이, 훈련과 연습과 더불어, 이 모든 것이 슈퍼 선수를 만드는 데 들어간다." — 2-0의 질문에 대한 <b>총괄 답(요인 나열의 예고편)</b>.`,
    trans: "실제로, 생물학적·환경적·심리적 요인들의 조합이 훈련·연습과 더불어 모두 어우러져 슈퍼 운동선수를 만들어 낸다.",
  },

  // 지문 2 · 3번째 문장: Perhaps the most important factor involved in becoming an elite athlete is genetic.
  "2-2": {
    form: "2형식 (S + V + C)",
    tense: "현재 (일반적 사실)",
    chips: [
      ["문장부사", "Perhaps"],
      ["주어(S)·핵심명사", "the most important factor"],
      ["후치수식·과거분사구", "involved in becoming an elite athlete"],
      ["동사(V)·be", "is"],
      ["보어(C)·형용사", "genetic"],
    ],
    structure:
      `뼈대: <b>the most important factor(S) + is(V) + genetic(C)</b> 의 <b>2형식</b>. 주어와 동사 is 사이에 <b>과거분사 후치수식(involved ...)</b>이 끼어 주-동이 벌어진 문장 → involved를 동사로 착각하면 구조가 무너짐.<br><br>` +
      `① <b>Perhaps</b> (문장부사): "아마도". 문장 전체를 꾸며 <b>단정을 살짝 누그러뜨리는</b> 장치(hedge). 성분 계산엔 안 들어감.<br>` +
      `② <b>the most important factor</b> (주어) — <b>the + 최상급(most important) + 명사</b>. 왜 <b>the</b>인가? → 최상급은 '(그중) 가장 ~한 <b>바로 그것</b>'으로 대상이 <b>딱 하나로 특정</b>되므로 <b>the</b>가 원칙.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('articles','ar-the')">📐 정관사 the(최상급·유일) 자세히 →</span><br>` +
      `③ <b>involved in becoming ...</b> (과거분사구·후치수식) — 핵심 중의 핵심! <b>factor를 뒤에서 꾸미는</b> 분사구.<br>` +
      `&nbsp;&nbsp;• 원래 <b>the factor <u>(which is)</u> involved ...</b> 에서 <b>[주격 관계대명사 which + be동사 is]가 생략</b>된 형태.<br>` +
      `&nbsp;&nbsp;• 왜 involving이 아니라 <b>involved(과거분사)</b>인가? → factor는 스스로 관여하는 게 아니라 '<b>관여되는</b> 대상'(수동) → <b>과거분사 p.p.</b>. (involving이면 '무언가를 관련시키는'이라 어색)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('participle-postmod','pp-omit')">✂️ (관계사+be) 생략 후치수식 자세히 →</span> <span class="wikilink" onclick="gotoGrammar('participle-postmod','pp-active-passive')">🔑 현재분사 vs 과거분사 자세히 →</span><br>` +
      `&nbsp;&nbsp;• <b>be involved in + (동)명사</b>: "~에 관여/연관되다". in은 전치사라 뒤에 <b>동명사 becoming</b> (involved to become ❌).<br>` +
      `④ <b>becoming an elite athlete</b> — in의 목적어인 <b>동명사</b>. <b>an</b> elite athlete: elite의 첫소리가 모음 [ɪ]라서 a가 아니라 <b>an</b> (소리 기준!).<br>` +
      `⑤ <b>is</b> (진짜 동사·be, 2형식) — 🚨 <b>함정:</b> 앞의 involved에 홀려 그걸 동사로 보면 안 됨. involved는 분사(수식어)일 뿐, <b>문장의 본동사는 저 멀리 있는 is</b>. "가장 중요한 요인 <b>은</b> ~<b>이다</b>"의 뼈대를 잡아야 함.<br>` +
      `⑥ <b>genetic</b> (주격보어·형용사) — 왜 부사 genetically가 아닌가? → 보어는 <b>동사가 아니라 주어(factor)를 설명</b>하는 자리 → <b>형용사</b>. "그 요인은 = 유전적인 것"이라는 등호 관계 (is genetically ❌).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('linking-become','lb-why-adj')">📐 보어는 부사 아닌 형용사 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "아마도 뛰어난 운동선수가 되는 데 관여하는 가장 중요한 요인은 <b>유전(적인 것)</b>이다." — 앞 문장(2-1)에서 나열한 요인들 중 <b>'유전'을 첫 번째 주제로 콕 집어</b> 이후 문단을 여는 <b>주제문</b>.`,
    trans: "아마도 뛰어난 운동선수가 되는 데 관여하는 가장 중요한 요인은 유전적인 것이다.",
  },

  // 지문 2 · 4번째 문장: Most Olympic competitors are equipped with certain physical characteristics that differentiate them from the average person.
  "2-3": {
    form: "3형식의 수동태 (S + be p.p. + with ~) · 주격 관계대명사절 포함",
    tense: "현재 (일반적 사실)",
    chips: [
      ["주어(S)", "Most Olympic competitors"],
      ["동사(V)·수동태(be p.p.)", "are equipped with"],
      ["대상·명사구", "certain physical characteristics"],
      ["주격 관계대명사", "that"],
      ["관계절 동사(V)", "differentiate"],
      ["목적어(O)", "them"],
      ["수식어(M)·전치사구", "from the average person"],
    ],
    structure:
      `뼈대: <b>Most Olympic competitors(S) + are equipped with(V·수동태) + certain physical characteristics(대상)</b>. 그 뒤 <b>that절</b>이 characteristics를 꾸미는 <b>주격 관계대명사절</b>.<br><br>` +
      `① <b>Most</b> (무관사 + 복수명사): "대부분의 ~". <b>the 없이 Most + 복수명사</b> = '(일반적으로) 대부분의'라는 총칭.<br>` +
      `&nbsp;&nbsp;• 🚨 <b>함정:</b> 앞 문장의 <b>the most important</b>(최상급 '가장')와 헷갈리지 말 것! 여기 <b>Most</b>는 '가장'이 아니라 <b>'대부분(의)'</b> → the도 없음. (the most competitors ❌)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('articles','ar-zero')">📐 무관사(총칭 복수) 자세히 →</span><br>` +
      `② <b>are equipped with</b> (핵심 중의 핵심 · 수동태) — 능동태는 <b>equip A with B</b>("A에게 B를 갖춰 주다"). 선수는 특성을 스스로 갖춘 게 아니라 '<b>갖추어진/지니게 된</b>' 대상(수동) → <b>be동사(are) + 과거분사(equipped)</b>.<br>` +
      `&nbsp;&nbsp;• 왜 equipping(현재분사)이 아니라 <b>equipped(과거분사)</b>인가? → 수동태의 짝은 언제나 <b>과거분사 p.p.</b>. (are equipping ❌ → 그건 능동·진행)<br>` +
      `&nbsp;&nbsp;• <b>with</b>는 equip과 한 세트로 붙어 다니는 전치사 → 수동태로 바뀌어도 <b>with는 그대로</b> 뒤에 남아 "무엇을 갖췄는지(B)"를 이끎.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('passive-voice','pv-form')">🔄 수동태 be + p.p. 형태 자세히 →</span><br>` +
      `③ <b>certain physical characteristics</b> — certain: "어떤·특정한 (몇몇)". 무관사 복수라 '특정 부류의 신체적 특성들'을 총칭.<br>` +
      `④ <b>that differentiate ...</b> (핵심 함정!) — <b>주격 관계대명사 that</b>이 이끄는 절이 <b>characteristics를 뒤에서 수식</b>. that이 관계절 안에서 <b>주어 역할</b>을 하므로 뒤는 주어가 빠진 <b>불완전한 절</b>.<br>` +
      `&nbsp;&nbsp;• 🚨 <b>수일치 함정:</b> that의 선행사는 <b>복수 characteristics</b> → 관계절 동사도 <b>복수 differentiate</b>. 바로 뒤의 단수 <b>them·person</b>에 홀려 differentiates로 쓰면 안 됨! (동사 수는 <b>선행사</b>에 맞춤)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('relative-pronoun','rp-incomplete')">🔗 주격 관계대명사(불완전절) 자세히 →</span><br>` +
      `⑤ <b>differentiate A from B</b>: "A를 B와 구별 짓다". 여기서 A=<b>them</b>(=Most Olympic competitors), B=<b>the average person</b> → "그들을 <b>보통 사람과</b> 구별 짓는" 특성.<br>` +
      `⑥ <b>the average person</b> — the + average person: 특정 개인이 아니라 '<b>보통 사람이라는 부류 전체</b>'를 대표로 가리키는 <b>총칭의 the</b>.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('articles','ar-the')">📐 정관사 the(총칭·유일) 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "대부분의 올림픽 출전 선수들은 자신을 보통 사람과 구별 짓는 특정한 신체적 특성을 갖추고 있다." — 앞 문장(2-2, 유전이 핵심)을 이어받아, 선수들이 <b>보통 사람과 다른 '신체적 특성'</b>을 지녔다고 구체화 → 뒤에 이어질 <b>근육(속근·지근) 설명의 도입 주제문</b>.`,
    trans: "대부분의 올림픽 출전 선수들은 자신을 보통 사람과 구별 짓는 특정한 신체적 특성을 갖추고 있다.",
  },

  // 지문 2 · 5번째 문장: Take an elite athlete's muscles, for example.
  "2-4": {
    form: "명령문 (동사원형 시작 · 주어 You 생략) · 3형식",
    tense: "현재 (명령·권유)",
    chips: [
      ["동사(V)·명령문", "Take"],
      ["소유격", "an elite athlete's"],
      ["목적어(O)", "muscles"],
      ["삽입·부사구", ", for example"],
    ],
    structure:
      `뼈대: <b>(You) + Take(V) + an elite athlete's muscles(O)</b> 의 <b>3형식 명령문</b>. 짧지만 <b>Take ~ for example</b>("~을 예로 들어보자")가 한 덩어리로 예시를 꺼내는 표현.<br><br>` +
      `① <b>Take</b> (명령문 동사) — 문장이 <b>동사원형</b>으로 시작 → <b>명령문</b>. 주어 <b>You(독자)가 생략</b>된 것. 여기 take는 '가져가다'가 아니라 '<b>(예로) 취하다·들다</b>'의 뜻.<br>` +
      `&nbsp;&nbsp;• <b>Take A for example</b> = "A를 예로 들어보자" → 바로 앞 문장(2-3, '보통 사람과 다른 신체적 특성')의 <b>구체적 예시(근육)를 꺼내는 신호</b>. for example과 짝을 이룸.<br>` +
      `② <b>an elite athlete's</b> (소유격) — <b>'s</b>는 "~의"라는 <b>소유격</b> → "엘리트 선수<b>의</b> (근육)". 뒤 명사 muscles를 꾸밈.<br>` +
      `&nbsp;&nbsp;• 왜 <b>an</b> elite인가? → elite의 첫소리가 <b>모음 [ɪ]</b>라서 a가 아니라 <b>an</b> (철자가 아니라 <b>소리</b> 기준! 2-2의 an elite athlete와 동일).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('articles','ar-a')">📐 부정관사 a/an(소리 기준) 자세히 →</span><br>` +
      `③ <b>muscles</b> (목적어·복수) — Take의 목적어. 근육은 여러 개라 <b>복수 muscles</b>.<br>` +
      `④ <b>, for example</b> (삽입 부사구) — "예를 들어". 콤마로 분리된 <b>삽입어구</b>라 문장 필수 성분은 아님. 문장 앞·중간·끝 어디든 올 수 있는데 여기선 <b>맨 뒤에서 예시임을 마무리</b> 지음.<br><br>` +
      `📝 <b>해석:</b> "예를 들어, 엘리트 운동선수의 근육을 살펴보자." — 앞 문장의 '신체적 특성'을 <b>'근육'이라는 구체적 사례로 좁혀</b> 이후 속근·지근(fast/slow-twitch) 설명으로 넘어가는 <b>전환·예시 문장</b>.`,
    trans: "예를 들어, 엘리트 운동선수의 근육을 살펴보자.",
  },

  // 지문 2 · 6번째 문장: In most human skeletal muscles (the ones that make your body move), there are fast-twitch fibers and slow-twitch fibers.
  "2-5": {
    form: "there + be + 진주어 (유도부사 there 구문 · 주어-동사 도치)",
    tense: "현재 (일반적 사실)",
    chips: [
      ["수식어(M)·전치사구", "In most human skeletal muscles"],
      ["삽입·동격(괄호)", "(the ones that make your body move)"],
      ["유도부사", "there"],
      ["동사(V)·be", "are"],
      ["진주어(S)·복수", "fast-twitch fibers and slow-twitch fibers"],
    ],
    structure:
      `뼈대: <b>there are + fast-twitch fibers and slow-twitch fibers</b> 의 <b>there be 구문</b>. "~이 있다"라는 뜻으로, <b>진짜 주어는 be동사 뒤</b>에 있고 앞의 In~구는 전부 <b>장소 수식어</b>.<br><br>` +
      `① <b>In most human skeletal muscles</b> (전치사구·장소 부사) — "대부분의 사람 골격근 안에(는)". <b>most</b>는 여기서도 '가장'이 아니라 <b>'대부분의'</b>(무관사 복수, 2-3와 동일). <span class="wikilink" onclick="gotoGrammar('articles','ar-zero')">📐 무관사(총칭 복수) 자세히 →</span><br>` +
      `② <b>(the ones that make your body move)</b> (괄호 삽입·부연) — 괄호는 <b>'귓속말'</b>처럼 빼도 되는 보충 설명. 앞의 <b>skeletal muscles가 뭔지 쉬운 말로 다시 풀어줌</b>(동격).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('punctuation','pn-colon')">✏️ 문장부호(괄호·쉼표·대시) 자세히 →</span><br>` +
      `&nbsp;&nbsp;• <b>the ones</b> = the muscles. skeletal <b>muscles</b>(복수)의 반복을 피하려 <b>복수 대명사 ones</b>로 받음. <span class="wikilink" onclick="gotoGrammar('pronoun-one','po-vs-it')">🔁 부정대명사 one/ones 자세히 →</span><br>` +
      `&nbsp;&nbsp;• <b>that make</b> — <b>주격 관계대명사 that</b>이 the ones를 수식. 선행사가 <b>복수 the ones</b>라 동사도 <b>복수 make</b>(makes ❌). 뒤는 주어 빠진 불완전절. <span class="wikilink" onclick="gotoGrammar('relative-pronoun','rp-incomplete')">🔗 주격 관계대명사(불완전절) 자세히 →</span><br>` +
      `&nbsp;&nbsp;• <b>make your body move</b> (핵심 문법!) — <b>사역동사 make + 목적어(your body) + 원형부정사(move)</b> = "몸을 움직이게 하다". 🚨 왜 to move가 아닌 <b>원형 move</b>인가? → <b>make/have/let(사역동사)</b>은 목적격보어로 <b>동사원형</b>을 씀 (make ... to move ❌, make ... moving ❌).<br>` +
      `③ <b>there are</b> (핵심 중의 핵심!) — 문장을 여는 <b>there는 '유도부사(허사)'</b>로 <b>해석하지 않음</b>('거기'가 아님!). 진짜 주어를 be동사 뒤로 미룬 <b>도치 구문</b>이라 "~이 있다"로 품.<br>` +
      `&nbsp;&nbsp;• 🚨 <b>수일치 함정:</b> there be의 동사 수는 <b>뒤에 오는 진주어</b>에 맞춤. 여기 진주어가 <b>A and B(복수)</b>라 <b>are</b> (there is ❌).<br>` +
      `④ <b>fast-twitch fibers and slow-twitch fibers</b> (진주어) — <b>A and B</b> 병렬로 두 종류를 나열 → 복수. fast-twitch=속근, slow-twitch=지근(뒤 문장들에서 대조될 두 주인공).<br><br>` +
      `📝 <b>해석:</b> "대부분의 사람 골격근(몸을 움직이게 하는 근육) 안에는 속근 섬유와 지근 섬유가 있다." — 앞 문장(2-4, '근육을 예로')을 이어받아 <b>근육 속 두 종류의 섬유(속근·지근)를 소개</b> → 이후 둘을 대조 설명하는 <b>발판 문장</b>.`,
    trans: "대부분의 사람 골격근(몸을 움직이게 하는 근육) 안에는 속근 섬유와 지근 섬유가 있다.",
  },

  // 지문 2 · 7번째 문장: Fast-twitch fibers help us move quickly.
  "2-6": {
    form: "5형식 (S + V + O + C) · help + O + (to)원형부정사",
    tense: "현재 (일반적 사실)",
    chips: [
      ["주어(S)·복수", "Fast-twitch fibers"],
      ["동사(V)·준사역", "help"],
      ["목적어(O)", "us"],
      ["목적격보어(C)·원형부정사", "move"],
      ["수식어(M)·부사", "quickly"],
    ],
    structure:
      `뼈대: <b>Fast-twitch fibers(S) + help(V) + us(O) + move(C)</b> 의 <b>5형식</b>. help는 목적어 뒤에 <b>원형부정사</b>를 목적격보어로 데려오는 <b>준사역동사</b>.<br><br>` +
      `① <b>Fast-twitch fibers</b> (주어·복수) — '속근 섬유'. 무관사 복수라 '속근 섬유란 것들 전반'을 총칭. 앞 2-5에서 소개한 두 섬유 중 <b>속근을 주어로 콕 집어</b> 설명 시작. <span class="wikilink" onclick="gotoGrammar('articles','ar-zero')">📐 무관사(총칭 복수) 자세히 →</span><br>` +
      `② <b>help</b> (준사역동사) — <b>help + 목적어 + (to)동사원형</b> = "~가 …하도록 돕다". help는 진짜 사역동사(make/have/let)는 아니지만, <b>사역동사처럼 목적격보어에 원형부정사</b>를 쓸 수 있음.<br>` +
      `③ <b>us</b> (목적어) — help의 목적어 '우리(사람)'. 이 us가 뒤 move의 <b>의미상 주어</b>이기도 함("우리가 움직이는" 것).<br>` +
      `④ <b>move</b> (목적격보어·원형부정사) — 핵심! 🚨 왜 moves·to move가 아니라 <b>원형 move</b>인가? → help는 목적보어로 <b>원형부정사 또는 to부정사</b>가 <b>둘 다 가능</b>한데, 현대 영어(특히 미국식)에선 <b>to 없는 원형</b>이 더 흔함. help us <b>(to)</b> move에서 to가 생략된 것 (help us moves ❌).<br>` +
      `⑤ <b>quickly</b> (부사·수식어) — 🚨 왜 형용사 quick이 아니라 <b>부사 quickly</b>인가? → '어떻게 움직이는지', 즉 <b>동사 move를 꾸미는</b> 자리라 <b>부사</b>가 맞음. (2-2의 보어 자리 genetic이 '형용사'였던 것과 반대 — 여기선 동사를 꾸미므로 부사!)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('linking-become','lb-why-adj')">📐 형용사 vs 부사(무엇을 꾸미나) 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "속근 섬유는 우리가 빠르게 움직이도록 돕는다." — 앞 문장(2-5)에서 소개한 속근·지근 중 <b>속근의 기능(빠른 움직임)</b>을 먼저 설명 → 다음 문장에서 <b>역도 선수 예시</b>로 이어짐.`,
    trans: "속근 섬유는 우리가 빠르게 움직이도록 돕는다.",
  },

  // 지문 2 · 8번째 문장: Olympic weightlifters, for example, have a large number of fast-twitch fibers in their muscles—many more than the average person.
  "2-7": {
    form: "3형식 (S + V + O) · 대시(—) 뒤 비교 부연",
    tense: "현재 (일반적 사실)",
    chips: [
      ["주어(S)·복수", "Olympic weightlifters"],
      ["삽입·부사구", ", for example,"],
      ["동사(V)", "have"],
      ["목적어(O)", "a large number of fast-twitch fibers"],
      ["수식어(M)·전치사구", "in their muscles"],
      ["부연·비교(대시)", "—many more than the average person"],
    ],
    structure:
      `뼈대: <b>Olympic weightlifters(S) + have(V) + a large number of fast-twitch fibers(O)</b> 의 <b>3형식</b>. 뒤의 in~구와 대시(—) 이하는 전부 <b>수식·부연</b>.<br><br>` +
      `① <b>Olympic weightlifters</b> (주어·복수) — '올림픽 역도 선수들'. 무관사 복수 총칭. 2-6의 <b>속근 설명을 잇는 구체적 예</b>. <span class="wikilink" onclick="gotoGrammar('articles','ar-zero')">📐 무관사(총칭 복수) 자세히 →</span><br>` +
      `② <b>, for example,</b> (삽입 부사구) — "예를 들어". 앞뒤 콤마로 <b>삽입</b>(2-4의 for example과 짝) → 속근이 많은 대표 예로 역도 선수를 듦.<br>` +
      `③ <b>have</b> (동사) — '지니다'. 🚨 주어가 <b>복수(weightlifters)</b>라 <b>have</b> (has ❌). 콤마 삽입구에 홀려 수를 놓치지 말 것.<br>` +
      `④ <b>a large number of fast-twitch fibers</b> (목적어) — 핵심 중의 핵심!<br>` +
      `&nbsp;&nbsp;• <b>a number of + 복수명사</b> = "많은 수의 ~"(= many). 여기에 large가 껴 "아주 많은 수의".<br>` +
      `&nbsp;&nbsp;• 🚨 <b>함정 ①:</b> <b>a number of</b>(많은 · 복수 취급) ↔ <b>the number of</b>("~의 수" · 단수 취급) 구별! 뜻과 수일치가 완전히 다름.<br>` +
      `&nbsp;&nbsp;• 🚨 <b>함정 ②:</b> fibers는 <b>셀 수 있는</b> 명사라 <b>number</b>(수)를 씀. 셀 수 없는 것이면 amount(양) → (a large amount of fibers ❌).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분·수량의 of (a number of) 자세히 →</span><br>` +
      `⑤ <b>in their muscles</b> (전치사구·장소) — "그들의 근육 안에". their = weightlifters'(역도 선수들의).<br>` +
      `⑥ <b>—many more than the average person</b> (대시 부연·비교) — 대시(—)는 '<b>확성기</b>'처럼 확 튀게 덧붙이는 부호. <span class="wikilink" onclick="gotoGrammar('punctuation','pn-colon')">✏️ 문장부호(대시·괄호) 자세히 →</span><br>` +
      `&nbsp;&nbsp;• <b>many more</b> = 비교급 more를 <b>many가 강조</b>해 "훨씬 더 많은". 🚨 왜 much more가 아니라 <b>many more</b>인가? → 세는 <b>fibers(가산 복수)</b>를 비교하니 <b>many</b> (much는 불가산용 → much more ❌).<br>` +
      `&nbsp;&nbsp;• <b>than the average person</b> — 비교 대상. 뒤에 반복될 <b>has (many more fibers)</b>가 <b>생략</b>됨(비교문에서 겹치는 부분 생략).<br>` +
      `&nbsp;&nbsp;• <b>the average person</b> = '보통 사람이라는 부류'를 대표로 가리키는 <b>총칭의 the</b>(2-3과 동일). <span class="wikilink" onclick="gotoGrammar('articles','ar-the')">📐 정관사 the(총칭) 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "예를 들어, 올림픽 역도 선수들은 근육에 많은 수의 속근 섬유를 지니고 있다—보통 사람보다 훨씬 더 많이." — 앞 문장(2-6)의 '속근=빠른 힘'을 이어, <b>속근이 유독 많은 예로 역도 선수</b>를 들어 다음 문장(무거운 것을 번쩍 드는 능력)으로 연결.`,
    trans: "예를 들어, 올림픽 역도 선수들은 근육에 많은 수의 속근 섬유를 지니고 있다—보통 사람보다 훨씬 더 많이.",
  },

  // 지문 2 · 9번째 문장: These allow them to lift hundreds of kilos from the ground and over their heads in seconds.
  "2-8": {
    form: "5형식 (S + V + O + OC) · allow + O + to부정사",
    tense: "현재 (일반적 사실)",
    chips: [
      ["주어(S)·대명사", "These"],
      ["동사(V)", "allow"],
      ["목적어(O)", "them"],
      ["목적격보어(OC)·to부정사", "to lift hundreds of kilos"],
      ["수식어(M)·전치사구 병렬", "from the ground and over their heads"],
      ["수식어(M)·부사구", "in seconds"],
    ],
    structure:
      `뼈대: <b>These(S) + allow(V) + them(O) + to lift ...(OC)</b> 의 <b>5형식</b>. allow는 목적어 뒤에 <b>to부정사</b>를 목적격보어로 데려오는 대표 동사.<br><br>` +
      `① <b>These</b> (주어·지시대명사) — 앞 문장(2-7)의 <b>a large number of fast-twitch fibers</b>(많은 속근 섬유)를 통째로 받는 <b>These</b>. 🚨 왜 This가 아니라 <b>These</b>인가? → 가리키는 것이 <b>복수(fibers)</b>라 복수 지시대명사 These, 그래서 동사도 <b>allow</b>(-s 없음).<br>` +
      `② ⭐ <b>allow them to lift ...</b> (핵심 · <b>5형식</b>: allow + O + to부정사):<br>` +
      `&nbsp;&nbsp;• <b>allow + 목적어 + to부정사</b> = "<b>O가 ~하도록 허락하다 / O가 ~할 수 있게 해주다</b>". 여기선 사물(속근)이 주어라 "~<b>할 수 있게 해준다</b>"로 매끄럽게 해석.<br>` +
      `&nbsp;&nbsp;• <b>them</b> = 목적어(O · = weightlifters), <b>to lift</b> = <b>목적격보어(OC)</b>. them이 <b>lift의 의미상 주어</b>(역도 선수들이 드는 것).<br>` +
      `&nbsp;&nbsp;• 🚨 왜 <b>to lift</b>(to부정사)인가? → allow는 목적격보어로 <b>반드시 to부정사</b>를 씀(원형 ❌). 💡 같은 5형식(O + <b>to</b>V) 동사: <b>allow / want / tell / ask / expect / enable</b> — 세트 암기! (2-12의 <b>enable A to V</b>와 형제 구문)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사(명사적·목적격보어) 자세히 →</span><br>` +
      `&nbsp;&nbsp;• ⭐ <b>왜 make가 아니라 allow(≈enable)인가? — 시험 단골 함정!</b><br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;◦ <b>뜻(문맥) 차이:</b> <b>make</b>는 사역동사로 "<b>강제로 ~하게 시키다</b>"(마지못해 억지로)의 어감. 하지만 여기서 속근 섬유는 선수에게 무게를 들라고 <b>강요하는 게 아니라</b>, 들 수 있는 <b>능력을 부여·가능하게 해주는 것</b> → "~할 수 있게 해주다"의 <b>allow / enable</b>이 문맥에 딱 맞음. (make them lift = "억지로 들게 만든다" ❌ 어색)<br>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;◦ <b>형태(문법) 차이:</b> 설령 뜻이 통해도 <b>목적격보어 꼴</b>이 다름 — <b>make</b>는 <b>원형부정사</b>(make them <b>lift</b>), <b>allow</b>는 <b>to부정사</b>(allow them <b>to lift</b>). 즉 allow를 쓰는 이 문장에선 <b>to lift</b>가 필수. (allow them lift ❌ / make them to lift ❌)<br>` +
      `③ <b>hundreds of kilos</b> (to lift의 목적어) — "수백 kg". <b>hundreds of + 복수명사</b> = "수백의 ~"(막연한 큰 수). 🚨 <b>-s + of</b> 꼴(hundreds/thousands of)일 땐 '수백/수천'의 <b>막연한 다수</b>, 반대로 <b>two hundred</b>처럼 숫자가 붙으면 <b>-s 없이</b> 씀(two hundreds ❌).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 부분·수량의 of (hundreds of) 자세히 →</span><br>` +
      `④ <b>from the ground and over their heads</b> (전치사구 <b>병렬</b>) — lift의 <b>이동 경로</b>를 두 전치사구가 <b>and로 병렬</b>: <b>from the ground</b>(바닥<b>에서</b>) → <b>over their heads</b>(머리 <b>위로</b>). 들어 올리는 동작의 시작점·도착점을 한 쌍으로 묶음.<br>` +
      `⑤ <b>in seconds</b> (부사구·시간) — "몇 초 만에". 여기서 <b>in + 시간</b>은 "~ 후에/~ 만에"(짧은 시간 안에 해치움)를 뜻해 역도의 순발력을 강조.<br><br>` +
      `📝 <b>해석:</b> "이것들(속근 섬유)은 그들이 수백 kg을 바닥에서 머리 위로 몇 초 만에 들어 올릴 수 있게 해준다." — 앞 문장(2-7)의 '역도 선수에게 속근이 많다'를 이어, <b>그 속근이 실제로 어떤 능력(순간적 괴력)을 주는지</b> 설명.`,
    trans: "이것들(속근 섬유)은 그들이 수백 kg을 바닥에서 머리 위로 몇 초 만에 들어 올릴 수 있게 해준다.",
  },

  // 지문 2 · 10번째 문장: Surprisingly, a large, muscular body is not the main requirement to do well in this sport.
  "2-9": {
    form: "2형식 (S + V + C) · be동사 부정 · to부정사 형용사적 수식",
    tense: "현재 (일반적 사실)",
    chips: [
      ["문두 부사(문장부사)", "Surprisingly,"],
      ["주어(S)·단수", "a large, muscular body"],
      ["동사(V)·be부정", "is not"],
      ["보어(C)·명사", "the main requirement"],
      ["형용사적 to부정사", "to do well"],
      ["수식어(M)·전치사구", "in this sport"],
    ],
    structure:
      `뼈대: <b>a large, muscular body(S) + is not(V) + the main requirement(C)</b> 의 <b>2형식</b>. be동사가 <b>주어 = 보어</b>를 이어주되 <b>not</b>으로 부정.<br><br>` +
      `① <b>Surprisingly,</b> (문장부사) — 문장 <b>전체</b>를 꾸미는 부사(문두 + 콤마). "놀랍게도". 바로 앞 흐름('역도엔 속근이 많다')과 달리 <b>큰 몸집이 핵심은 아니라는 반전</b>을 미리 예고하는 신호.<br>` +
      `② <b>a large, muscular body</b> (주어·단수) — "크고 근육질인 몸". <b>large</b>와 <b>muscular</b> 두 형용사가 <b>콤마로 대등</b>하게 body를 꾸밈(등위 형용사, and 대신 콤마). <b>a</b>는 '그런 몸이라는 것 하나'를 총칭. <span class="wikilink" onclick="gotoGrammar('articles','ar-a')">📐 부정관사 a(총칭) 자세히 →</span><br>` +
      `③ <b>is not</b> (be동사 · 2형식 부정) — '~이 아니다'. 🚨 주어가 <b>단수(body)</b>라 <b>is</b>(are ❌). be동사는 <b>주어와 보어를 등호(=)</b>로 잇는데, 여기선 <b>not</b>으로 "주어 ≠ 보어"라고 부정.<br>` +
      `④ <b>the main requirement</b> (보어·명사) — "주된 요건". be동사 뒤 <b>명사 보어</b>라 주어와 동격(A=B 관계)인데 not이 붙어 "큰 몸 ≠ 주된 요건". <b>the main</b> = '바로 그 핵심적인'. requirement의 동사형은 <b>require</b>(요구하다).<br>` +
      `⑤ ⭐ <b>to do well (in this sport)</b> (<b>to부정사 형용사적 용법</b>) — 앞의 명사 <b>requirement를 뒤에서 수식</b>: "이 스포츠에서 <b>잘하기 위한</b> (요건)". <b>requirement + to V</b> = "~할/하기 위한 요건". 🚨 부사적(목적)으로 착각 말 것 — 여기선 <b>바로 앞 명사를 꾸미는</b> 형용사적!<br>` +
      `&nbsp;&nbsp;• <b>do well</b> = "잘 해내다, 좋은 성적을 내다". <b>in this sport</b> = "이 종목(역도)에서" (do well을 보충하는 장소·범위 수식어).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive')">📐 to부정사 형용사적 용법(앞 명사 수식) 자세히 →</span><br><br>` +
      `📝 <b>해석:</b> "놀랍게도, 크고 근육질인 몸이 이 종목에서 잘하기 위한 주된 요건은 아니다." — 역도 하면 '덩치'를 떠올리지만, 실제 핵심은 몸집이 아니라(반전) 다음 문장(2-10)에서 밝힐 <b>속근 섬유의 수</b>임을 대조로 예고.`,
    trans: "놀랍게도, 크고 근육질인 몸이 이 종목에서 잘하기 위한 주된 요건은 아니다.",
  },

  // 지문 2 · 11번째 문장: It is more important to have a large number of fast-twitch fibers in the muscles.
  "2-10": {
    form: "2형식 · 가주어 It ~ 진주어 to부정사 · 비교급",
    tense: "현재 (일반적 사실)",
    chips: [
      ["가주어(형식상 S)", "It"],
      ["동사(V)·be", "is"],
      ["보어(C)·비교급", "more important"],
      ["진주어(진짜 S)·to부정사", "to have a large number of fast-twitch fibers"],
      ["수식어(M)·전치사구", "in the muscles"],
    ],
    structure:
      `뼈대: <b>It(가주어) + is(V) + more important(C)</b> … <b>to have ~(진주어)</b> 의 <b>2형식</b>. It은 뜻 없는 <b>형식주어</b>, 진짜 주어는 뒤의 <b>to부정사구</b>.<br><br>` +
      `① ⭐ <b>It</b> (가주어·형식주어) — 🚨 <b>'그것'이라고 해석하지 않음!</b> 진짜 주어인 <b>to have ~</b>가 너무 길어서 <b>뒤로 보내고</b>, 빈 주어 자리에 대신 세운 <b>가주어 It</b>. (= 뒤의 to부정사구를 미리 가리키는 '바람잡이')<br>` +
      `② <b>is more important</b> (be동사 + 비교급 보어) — "더 중요하다". important는 긴 형용사라 <b>-er 대신 more</b>를 붙여 비교급(importanter ❌). 🚨 <b>무엇보다</b> 더? → 앞 문장(2-9)의 <b>'큰 몸집'보다</b> 더. 비교 대상 <b>than ~</b>은 문맥상 뻔해 <b>생략</b>됨.<br>` +
      `③ ⭐ <b>to have a large number of fast-twitch fibers</b> (<b>진주어 · to부정사 명사적 용법</b>) — 문장의 <b>진짜 주어</b>: "많은 수의 속근 섬유를 <b>갖는 것이</b>". 앞 It 자리에 이걸 넣으면 "To have ~ is more important"와 같은 뜻.<br>` +
      `&nbsp;&nbsp;• <b>a large number of + 복수명사</b> = "아주 많은 수의 ~"(2-7 반복). 🚨 셀 수 있는 <b>fibers</b>라 <b>number</b>(수) — amount(양) ❌.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사 명사적 용법(주어) 자세히 →</span> · <span class="wikilink" onclick="gotoGrammar('of-types','of-partitive')">🧬 수량의 of (a number of) 자세히 →</span><br>` +
      `④ <b>in the muscles</b> (전치사구·장소) — "근육 안에". have의 대상이 어디 있는지 보충.<br><br>` +
      `💡 <b>가주어–진주어 공식:</b> <b>It is + 형용사 + to V</b> = "<b>~하는 것은 …하다</b>". 주어가 to부정사구(또는 that절)로 길 때 <b>It</b>을 앞세우고 진짜 주어를 뒤로 미는 영어의 단골 패턴.<br><br>` +
      `📝 <b>해석:</b> "많은 수의 속근 섬유를 근육에 지니고 있는 것이 (그보다) 더 중요하다." — 앞 문장(2-9) '큰 몸집이 핵심 아님'을 이어받아, <b>진짜 중요한 요건(속근 섬유의 수)</b>을 콕 집어 대비시킴.`,
    trans: "많은 수의 속근 섬유를 근육에 지니고 있는 것이 (그보다) 더 중요하다.",
  },

  // 지문 2 · 12번째 문장: The legs of an elite marathon runner, on the other hand, might contain up to 90 percent slow-twitch muscle fibers.
  "2-11": {
    form: "3형식 (S + V + O) · 삽입 부사구 · 조동사 might(추측)",
    tense: "현재 (약한 추측)",
    chips: [
      ["주어(S)·핵심명사", "The legs"],
      ["수식어(M)·of구", "of an elite marathon runner"],
      ["삽입·부사구", ", on the other hand,"],
      ["동사(V)·조동사", "might contain"],
      ["목적어(O)", "up to 90 percent slow-twitch muscle fibers"],
    ],
    structure:
      `뼈대: <b>The legs(S) + might contain(V) + ... fibers(O)</b> 의 <b>3형식</b>. of구와 콤마 삽입구는 전부 <b>수식·삽입</b>.<br><br>` +
      `① <b>The legs of an elite marathon runner</b> (주어) — 핵심명사는 <b>The legs</b>(복수), 뒤의 <b>of an elite marathon runner</b>가 그것을 수식: "엘리트 마라톤 선수<b>의</b> 다리". 🚨 <b>수일치 함정:</b> 진짜 주어는 <b>legs(복수)</b>지 바로 앞 runner(단수)가 아님 — of구에 홀려 동사 수를 틀리지 말 것(여기선 조동사 might라 수 영향은 없지만 원리는 기억!).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('of-types','of-possess')">🧬 소유·소속의 of (A of B = B의 A) 자세히 →</span><br>` +
      `② ⭐ <b>, on the other hand,</b> (삽입 부사구·대조) — "반면에". 앞뒤 콤마로 <b>삽입</b>. 🚨 <b>대조 신호등!</b> 앞(2-8~2-10, <b>역도=속근</b>)과 정반대로 <b>마라톤=지근</b>임을 예고. (2-9 on the other hand와 같은 짝)<br>` +
      `③ <b>might contain</b> (조동사 might + 동사원형) — "~을 포함할 <b>수도 있다</b>". <b>might</b> = 단정이 아닌 <b>약한 추측·가능성</b>("~일지도"). 그래서 <b>단순 현재 contains가 아니라 might contain</b> — '보통 그렇다'는 조심스러운 진술. contain = '포함하다, 들어 있다'(단어카드 75행).<br>` +
      `④ <b>up to 90 percent slow-twitch muscle fibers</b> (목적어) — "최대 90퍼센트<b>까지의</b> 지근 섬유".<br>` +
      `&nbsp;&nbsp;• <b>up to</b> = "~까지(최대)"(단어카드 76행) → 90%가 상한선.<br>` +
      `&nbsp;&nbsp;• <b>slow-twitch</b>(지근) — 2-5에서 소개한 <b>fast-twitch(속근)와 대조</b>되는 나머지 한 종류. 마라톤처럼 오래 버티는 운동에 특화.<br><br>` +
      `🔁 <b>글 전체 대조 구조:</b> 2-8~2-10 <b>역도 선수 = 속근(순간 괴력)</b> ↔ 이 문장부터 <b>마라톤 선수 = 지근(지구력)</b>. <b>on the other hand</b>가 그 전환점.<br><br>` +
      `📝 <b>해석:</b> "반면에, 엘리트 마라톤 선수의 다리는 최대 90퍼센트까지 지근 섬유를 포함하고 있을 수도 있다." — 역도(속근) 이야기를 끝내고 <b>정반대 성격의 마라톤(지근)</b>으로 화제를 트는 문장.`,
    trans: "반면에, 엘리트 마라톤 선수의 다리는 최대 90퍼센트까지 지근 섬유를 포함하고 있을 수도 있다.",
  },

  // 지문 2 · 13번째 문장: These generate energy efficiently and enable an athlete to control fatigue and keep moving for a longer period of time.
  "2-12": {
    form: "3형식 + 5형식 (and 병렬 술어) · enable + O + to부정사",
    tense: "현재 (일반적 사실)",
    chips: [
      ["주어(S)·지시대명사", "These"],
      ["동사①(V)·3형식", "generate"],
      ["목적어①(O)", "energy"],
      ["수식어(M)·부사", "efficiently"],
      ["등위접속사", "and"],
      ["동사②(V)·5형식", "enable"],
      ["목적어②(O)", "an athlete"],
      ["목적격보어(OC)·to부정사 병렬", "to control fatigue and keep moving"],
      ["수식어(M)·기간", "for a longer period of time"],
    ],
    structure:
      `뼈대: <b>These(S)</b>가 술어 <b>두 개</b>를 <b>and로 병렬</b> — [<b>generate energy</b>(3형식)] + [<b>enable an athlete to ...</b>(5형식)]. 주어 These를 둘이 공유.<br><br>` +
      `① <b>These</b> (주어·지시대명사) — 앞 문장(2-11)의 <b>slow-twitch muscle fibers</b>(지근 섬유)를 받는 <b>복수</b> 지시대명사 → 동사 <b>generate·enable</b>(-s 없음). (2-8의 These와 같은 용법)<br>` +
      `② <b>generate energy efficiently</b> (술어①·3형식) — "에너지를 효율적으로 만들어낸다". <b>generate</b>(만들어내다) + <b>energy</b>(O) + <b>efficiently</b>(M). 🚨 왜 형용사 efficient가 아니라 <b>부사 efficiently</b>? → <b>동사 generate를 꾸미므로</b> 부사가 맞음(2-6 quickly와 동일 논리).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('linking-become','lb-why-adj')">📐 형용사 vs 부사(무엇을 꾸미나) 자세히 →</span><br>` +
      `③ <b>and</b> (등위접속사) — 앞 <b>generate</b>와 뒤 <b>enable</b>, <b>두 술어</b>를 대등하게 연결(주어 These 공유). 🚨 이 and를 뒤쪽 control~keep의 and와 헷갈리지 말 것(층위가 다름!).<br>` +
      `④ ⭐ <b>enable an athlete to control ...</b> (술어②·<b>5형식</b>: enable + O + to부정사) — 핵심!<br>` +
      `&nbsp;&nbsp;• <b>enable + 목적어 + to부정사</b> = "O가 ~<b>할 수 있게 하다</b>"(단어카드 79행). <b>an athlete</b>=목적어(O), <b>to control~</b>=목적격보어(OC). an athlete가 control의 <b>의미상 주어</b>.<br>` +
      `&nbsp;&nbsp;• 💡 <b>2-8의 allow와 형제 구문</b> — allow/enable 둘 다 <b>O + to부정사</b>를 취함. (make처럼 원형 ❌)<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사(목적격보어) 자세히 →</span><br>` +
      `⑤ ⭐ <b>to control fatigue and keep moving</b> (목적격보어·<b>to부정사 병렬</b>) — 목적격보어가 <b>두 동작</b>: <b>to control fatigue</b>("피로를 조절하다") <b>and</b> <b>keep moving</b>("계속 움직이다"). 🚨 왜 뒤엔 to가 없나? → 앞의 <b>to가 두 동사에 함께 걸림</b>(to control ... and <b>(to)</b> keep) — 반복 to 생략.<br>` +
      `&nbsp;&nbsp;• <b>keep + -ing</b>(동명사) = "<b>계속 ~하다</b>"(keep to move ❌). <b>fatigue</b> = 피로(단어카드 80행).<br>` +
      `⑥ <b>for a longer period of time</b> (수식어·기간) — "<b>더 오랜 시간 동안</b>". <b>for + 기간</b>. <b>longer</b>는 long의 비교급('(보통 사람)보다 더 오래'). a period of time = '얼마간의 시간'.<br><br>` +
      `📝 <b>해석:</b> "이것들(지근 섬유)은 에너지를 효율적으로 만들어내고, 운동선수가 피로를 조절하며 더 오랜 시간 동안 계속 움직일 수 있게 해준다." — 앞 문장(2-11)에서 꺼낸 <b>지근 섬유의 두 가지 기능</b>(효율적 에너지 생성 + 지구력)을 구체적으로 풀어줌.`,
    trans: "이것들(지근 섬유)은 에너지를 효율적으로 만들어내고, 운동선수가 피로를 조절하며 더 오랜 시간 동안 계속 움직일 수 있게 해준다.",
  },

  // 지문 2 · 14번째 문장: When we exercise long or hard, it's common to experience tiredness, muscle pain, and difficulty breathing.
  "2-13": {
    form: "2형식 · 가주어 it ~ 진주어 to부정사 · 시간 부사절(when)",
    tense: "현재 (일반적 사실)",
    chips: [
      ["시간 부사절(when)", "When we exercise long or hard"],
      ["가주어(형식상 S)", "it"],
      ["동사(V)·be", "'s (is)"],
      ["보어(C)·형용사", "common"],
      ["진주어(진짜 S)·to부정사", "to experience tiredness, muscle pain, and difficulty breathing"],
    ],
    structure:
      `뼈대: [<b>When ~</b> 부사절], <b>it('s)(가주어) + common(C)</b> … <b>to experience ~(진주어)</b>. 주절은 또 <b>가주어–진주어 2형식</b>.<br><br>` +
      `① <b>When we exercise long or hard</b> (시간·조건 부사절) — "우리가 <b>오래 또는 힘들게 운동할 때</b>". <b>when</b> = "~할 때". <b>we exercise</b>(자동사). 🚨 <b>long / hard</b>는 형용사가 아니라 <b>부사</b>(형태가 형용사와 같은 부사!) → 동사 exercise를 꾸며 '오래·세게'. <b>or</b>로 두 부사 병렬.<br>` +
      `② <b>it's common</b> (가주어 it + 형용사 보어) — "~하는 것은 <b>흔하다</b>". 🚨 <b>it</b>은 '그것'이 아니라 뒤 to부정사구를 가리키는 <b>가주어</b>(2-10과 동일 원리). <b>common</b> = '흔한'(형용사 보어).<br>` +
      `③ ⭐ <b>to experience tiredness, muscle pain, and difficulty breathing</b> (<b>진주어 · to부정사 명사적</b>) — 문장의 진짜 주어. "피로·근육통·호흡 곤란을 <b>겪는 것은</b>". experience(겪다)의 <b>목적어 3개가 A, B, and C로 병렬</b>:<br>` +
      `&nbsp;&nbsp;• <b>tiredness</b>(피로) / <b>muscle pain</b>(근육통) / <b>difficulty breathing</b>(호흡 곤란).<br>` +
      `&nbsp;&nbsp;• 🚨 <b>difficulty (in) breathing</b> = "숨쉬는 데(있어서의) 어려움" — <b>have difficulty (in) -ing</b>("~하는 데 애를 먹다") 구문의 흔적. difficulty 뒤엔 <b>동명사(-ing)</b>.<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('to-infinitive','ti-noun')">📐 to부정사 명사적 용법(진주어) 자세히 →</span><br>` +
      `💡 <b>가주어–진주어 공식(2-10과 동일):</b> <b>It is + 형용사 + to V</b> = "~하는 것은 …하다". 진짜 주어(to부정사)가 길어 뒤로 빼고 <b>it</b>을 앞세움.<br><br>` +
      `📝 <b>해석:</b> "오래 또는 힘들게 운동할 때, 피로와 근육통, 그리고 호흡 곤란을 겪는 것은 흔하다." — 지구력(지근) 이야기에 이어, <b>격한 운동 뒤 나타나는 흔한 증상들</b>을 나열하며 다음 문장(그 원인=젖산)으로 넘어가는 도입.`,
    trans: "오래 또는 힘들게 운동할 때, 피로와 근육통, 그리고 호흡 곤란을 겪는 것은 흔하다.",
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
      `&nbsp;&nbsp;some / many / most / several / all / <b>both</b> / each / one / none <b>of the</b> ~<br>` +
      `예) <b>several of the players</b> = "그 선수들 <b>중 몇몇</b>". / most of the money (그 돈의 대부분).<br>` +
      `⭐ <b>of 뒤엔 반드시 the·소유격·this 같은 '한정어'</b>가 붙은 특정 명사 (several of <s>players</s> ✗ → several of <b>the</b> players ✓, several players ✓).<br>` +
      `⚡ <b>수일치 함정:</b> 동사는 <b>of 뒤 명사</b>에 맞춤. some of the <u>money</u> <b>is</b> (단수) / some of the <u>players</u> <b>are</b> (복수).<br><br>` +
      `<b>🔷 both of the ~ ('그 둘 다') — 특히 함정 많음</b><br>` +
      `&nbsp;&nbsp;• <b>both은 '둘'</b>이라 <b>항상 복수 취급</b> → 동사도 복수: both of the players <b>are</b> ✓.<br>` +
      `&nbsp;&nbsp;• ⭐ <b>both 뒤 of는 생략 가능</b>: both <b>(of)</b> the players = both the players. (다른 수량어는 of 못 뺌: most <b>of</b> the ~ ✓ / most the ~ ✗)<br>` +
      `&nbsp;&nbsp;• 대명사 앞에선 of <b>필수</b>: both <b>of</b> them ✓ (both them ✗).<br>` +
      `&nbsp;&nbsp;<span class="wikilink" onclick="gotoGrammar('both-usage','both-optional-of')">🔀 both의 of 생략 규칙 자세히 →</span>` +
      `</div>`,
    eg: [
      ["① 소유의 of", "the leg of the table", "탁자의 다리"],
      ["② 동격의 of", "the city of Seoul", "서울이라는 도시"],
      ["③ 내용의 of", "the promise of great wealth", "막대한 부를 얻는다는 기대"],
      ["④ 부분의 of", "several of the best players", "최고 선수들 중 몇몇"],
      ["④ 부분의 of · both", "both of the players are ~", "그 선수들 둘 다 ~ (항상 복수)"],
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
  {
    id: "linking-become",
    title: "상태변화 자동사 + 형용사보어 — '~한 상태가 되다'",
    tag: "핵심 · 함정",
    body:
      `2형식 동사 중에는 <b>원래 뜻(오다·가다·떨어지다…)이 사라지고</b> "<b>~한 상태가 되다</b>"(≒ become)로 해석되는 무리가 있음. 뒤에 <b>형용사 보어</b>를 데려와 <b>주어의 상태 변화</b>를 나타냄.<br><br>` +
      `<div id="lb-why-adj" class="g-sub">` +
      `<b>⭐ 왜 부사가 아니라 형용사?</b><br>` +
      `보어는 <b>동사가 아니라 주어를 설명</b>하는 자리. "무엇이 <b>어떤 상태</b>가 되었나"를 말하므로 <b>형용사</b>가 옴. 동사를 꾸미는 부사(-ly)를 쓰면 <b>틀림</b>.<br>` +
      `&nbsp;&nbsp;• The milk went <b>bad</b>. (O) ↔ went <b>badly</b> (✗ — 우유가 '나쁘게 간' 게 아니라 '상한 상태'가 됨)` +
      `</div>` +
      `<div id="lb-trap" class="g-sub">` +
      `<b>🚨 직역 함정 (뜻을 통째로 외워라)</b><br>` +
      `&nbsp;&nbsp;• <b>go bad</b>: '나쁘게 가다' (✗) ➜ <b>상하게 되다 / 상하다</b> (O) — 음식이 썩음.<br>` +
      `&nbsp;&nbsp;• <b>fall asleep</b>: '잠으로 떨어지다' (✗) ➜ <b>잠들게 되다 / 잠들다</b> (O) — asleep은 형용사(자고 있는).<br>` +
      `&nbsp;&nbsp;• <b>come true</b>: '진실로 오다' (✗) ➜ <b>이루어지다 / 실현되다</b> (O) — 꿈이 진짜가 됨.<br>` +
      `👉 동사를 <b>직역하지 말고</b> "동사+형용사"를 <b>한 덩어리 상태변화</b>로 해석하는 게 핵심.` +
      `</div>` +
      `<b>💡 자주 나오는 세트</b> (모두 뒤에 형용사): go bad/wrong, fall asleep/ill, come true, get ready/tired, grow old, turn red, run dry.`,
    eg: [
      ["go + 형용사 · 상하다", "The milk went bad.", "그 우유는 상했다. (나쁘게 간 게 X → 상한 상태가 됨)"],
      ["fall + 형용사 · 잠들다", "He fell asleep during class.", "그는 수업 중에 잠들었다. (잠으로 떨어진 게 X → 잠든 상태가 됨)"],
      ["come + 형용사 · 이루어지다", "For some, the dream comes true.", "일부에게는 그 꿈이 이루어진다. (진실로 온 게 X → 실현됨)"],
    ],
  },
];
