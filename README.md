# 총신대 편입영어 🎯

편입 영어 100점 목표 학습 앱. 순수 정적 사이트(빌드 도구 없음).

## 기능

- **🃏 단어카드** — 탭하면 뒤집히는 플래시카드
- **📖 지문** — 영어 지문 8개 (문장 탭하면 하이라이트)
- **🔍 문장분석** — 지문 1~8 선택 또는 🔀 셔플 모드로 문장 하나씩 분석·해석

## 로컬 실행

의존성 없음. 아래 중 편한 방법으로:

```bash
# 방법 1: 파이썬 내장 서버
python3 -m http.server 5173
# → http://localhost:5173

# 방법 2: 그냥 index.html 을 브라우저로 열기 (더블클릭)
```

## 콘텐츠 채우기

공부한 내용은 **`data.js` 한 파일**만 고치면 됩니다.

- 단어 추가 → `WORDS` 배열에 `{ word, pos, meaning, example }` 추가
- 지문 채우기 → `PASSAGES` 의 해당 지문 `sentences` 배열에 문장 넣기
- 문장 분석 → `ANALYSIS["지문id-문장index"]` 에 `{ chips, structure, trans }` 추가

로직(`app.js`)이나 디자인(`styles.css`)은 건드릴 필요 없습니다.

## 파일 구조

```
index.html    화면 구조
styles.css    디자인
app.js        동작 로직
data.js       콘텐츠 (← 여기만 채우면 됨)
```

## Vercel 배포

빌드 설정 없이 그대로 올라갑니다.

```bash
npm i -g vercel   # 처음 한 번
vercel            # 프리뷰 배포
vercel --prod     # 공개 배포
```

또는 이 폴더를 GitHub 저장소에 올리고 [vercel.com](https://vercel.com) 에서 Import → Framework Preset을 **Other**(정적)로 두면 끝.
