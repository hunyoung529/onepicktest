# Onepick v1 (SEO·수익화 최우선) — 0부터 재구축 제작 의뢰서

## 1) 제품 목표
- 국내 주요 웹툰(추후 웹소설) 플랫폼 데이터를 통합 수집해 **랭킹/급상승/추천**을 제공
- 작품 상세(정보·댓글·찜), 커뮤니티(작품별/자유게시판) 제공
- 수익화 최우선: **SEO 유입 → PV 증가 → 광고/제휴 → (추후 앱화/AI 추천)**

## 2) 핵심 KPI(초기)
- 검색 유입(색인 수, 유입 키워드, landing page 성과)
- PV/세션길이/재방문(DAU/WAU)
- 작품 상세 CTR, 찜 전환율
- 광고 노출 대비 이탈률(추후)

## 3) 범위 정의 (MVP → v1 확장)
### MVP(2~4주 목표 수준)
**반드시 들어갈 것**
- SEO 랜딩 페이지 3종
  - 홈(오늘/급상승/요일/장르 진입)
  - 작품 상세
  - 요일/장르 리스트
- 계정
  - 구글 로그인(Firebase Auth)
  - 닉네임 설정 + 중복 방지
- 유저 행동
  - 찜(즐겨찾기)
  - 댓글(작품별)
- 크롤링/수집 파이프라인
  - 네이버웹툰 요일별 작품 목록 수집 + 이미지 fallback
  - Firestore 업로드 자동화(스케줄 가능 구조로 설계)
- 운영 필수
  - sitemap/robots/canonical/OG meta 완비
  - 최소 이벤트 로그(analytics)

**MVP에서 제외(나중)**
- 대댓글, 신고/차단, 추천 알고리즘 고도화
- 웹소설 통합, 다중 플랫폼 확장(카카오 등), AI 추천

### v1 확장(4~8주)
- 랭킹 페이지(플랫폼/기간/정렬)
- 댓글 고도화(정렬, 신고, 대댓글)
- 커뮤니티(작품별 게시판 + 자유게시판)
- 추천(찜/댓글 기반 룰 추천 → 간단한 협업필터링)
- 수익화 1차(AdSense) 적용 + 광고 슬롯/빈도 설계

## 3-1) 마일스톤(권장 일정)
### Week 1
- 데이터 모델/권한 설계, Firestore 스키마 확정
- 크롤러 프로토타입(네이버웹툰 요일 목록 수집)
- Next.js App Router 초기 구조 + SEO 페이지 라우팅

### Week 2
- 홈/요일/장르/작품 상세 페이지 구현(SSR/ISR)
- 로그인/닉네임/찜/댓글 기본 기능
- sitemap/robots/canonical/OG/Twitter 카드 적용

### Week 3~4
- analytics 이벤트 최소 6개 연동
- 크롤러 자동화(스케줄/로그/재시도)
- 기본 성능/모바일 레이아웃 개선

### Week 5~8 (v1 확장)
- 랭킹/커뮤니티/댓글 고도화
- 광고 슬롯 및 빈도 설계(Feature flag로 점진적 노출)
- 간단 추천 룰 적용

## 4) UX/IA(페이지 구조)
### 필수 페이지
- `/` 홈
  - 오늘 TOP(플랫폼별 또는 전체)
  - 급상승(랭킹 변동/인기 변화 기반)
  - 요일 탭(월~일)
  - 장르 카드
  - 상단 검색(작품명/작가)
  - 각 섹션은 “더보기”로 리스트로 이동
- `/works/[slug]` 작품 상세 (SEO 핵심 랜딩)
  - 상단: 썸네일, 제목, 작가, 플랫폼, 요일, 장르, 평점(있으면), 업데이트 상태
  - CTA: “찜하기”, “플랫폼에서 보기(외부링크)”
  - 탭: 정보(소개/태그), 댓글, (v1) 커뮤니티
  - 하단 내부링크: 같은 요일/장르/작가 작품 추천
- `/day/[mon|tue|...]` 요일별 리스트
- `/genre/[genre]` 장르 리스트
- `/ranking` 전체 순위(확장)
- `/search?q=` 검색 결과
- `/login` 로그인
- `/me` 내정보(닉네임, 찜 목록, 내가 쓴 댓글)
- `/privacy` `/terms` (AdSense 대비)

## 5) SEO 요구사항(가장 중요)
### 렌더링 전략
- 홈/요일/장르/작품상세는 **SSR 또는 ISR** 우선
- “로딩만 보이는 화면” 금지(최소 텍스트/리스트가 초기 HTML에 있어야 함)

### 메타데이터
모든 SEO 페이지에 포함:
- `title`, `description`
- `canonical`
- OpenGraph(`og:title`, `og:description`, `og:image`)
- Twitter card

작품 상세 `title` 예시:
- `{작품명} | Onepick`

`description` 예시:
- `{작품명} - 작가, 요일, 장르, 평점, 댓글, 추천작`

### sitemap
- `/sitemap.xml` 자동 생성
- 포함: 홈/요일/장르/랭킹/모든 작품 상세
- 업데이트 주기 고려(크롤링 주기와 맞춤)

### 내부링크
- 작품 상세에서 “같은 요일/장르/작가” 링크 필수
- 요일/장르 리스트에서 작품 상세 링크 필수

### SEO 체크리스트(개발 검수용)
- SSR/ISR 응답에 핵심 텍스트 노출 여부 확인
- canonical/OG/Twitter 카드 중복 및 누락 방지
- 404/빈 데이터 페이지에서도 기본 메타 제공
- pagination(있을 경우) rel=prev/next 적용 고려

## 6) 수익화 설계(초기부터 고려)
### 광고(웹)
- 1차: AdSense
- 광고 슬롯 위치(UX 덜 깨지게)
  - 리스트 중간(예: 6~8번째)
  - 작품 상세 하단(댓글 위/아래 중 1곳)
- 광고가 붙기 전에도 슬롯 컴포넌트 구조만 설계해두기(Feature flag)

### 광고 슬롯 설계 예시(Feature flag)
- `AdSlot` 컴포넌트: 위치, 크기, 노출 조건을 props로 관리
- 리스트형 페이지: 6~8번째 콘텐츠 사이에 1개 삽입
- 상세 페이지: 댓글 위/아래 중 1개 고정 위치

### 제휴(확장)
- 외부 플랫폼 이동 버튼에 UTM/제휴링크 적용 가능하게 설계(확장)

## 7) 데이터/백엔드 설계(Firebase)
### Firebase 사용
- Auth: Google
- Firestore: 메인 DB
- Storage: 썸네일 캐시(선택: 외부 이미지 핫링크 대신 저장 가능)

### Firestore 컬렉션 제안(초기)
```
users/{uid}
  nickname, photoURL, createdAt

nicknameIndex/{nickname}
  uid, createdAt

works/{workId}
  platform, title, author, dayOfWeek[], genres[], rating, thumbnailUrl,
  externalUrl, synopsis(optional), tags[], updatedAt

workStats/{workId}
  favoritesCount, commentsCount, viewCount(선택), lastRank, rankChange

favorites/{uid}/items/{workId}
  createdAt

comments/{workId}/items/{commentId}
  uid, nicknameSnapshot, content, createdAt, likeCount(optional), deleted(optional)

rankings/{source}/{date}/items/{rankId} (확장)
  workId, rank, score, change
```

### 보안 규칙(최소권한)
- 읽기: `works`, `rankings`는 public read 가능(SEO 때문에)
- 쓰기: `users`, `favorites`, `comments`는 로그인 유저 본인만
- `nicknameIndex`는 트랜잭션 기반 생성/삭제로 중복 방지

## 8) 크롤링/수집 파이프라인(0부터)
### 목표
- 네이버웹툰 요일별 작품 리스트를 매일/주기적으로 수집해 Firestore 반영

### 구현 방식
- Node.js + Puppeteer + Cheerio
- 수집 결과를 `works`에 upsert
- 이미지 없을 경우 og:image fallback

### 스케줄
- 1차: 수동 실행/크론(로컬 or CI)
- 2차: GitHub Actions 또는 Cloud Scheduler + Cloud Functions(확장)

### 필수 로그/에러 핸들링
- 실행 시 수집 개수/변경 개수/실패 URL 로그
- 실패한 작품 재시도 큐(간단히 파일/컬렉션)

### 기본 데이터 정합성 규칙
- `workId`는 플랫폼별 고유 키를 사용(중복 방지)
- 썸네일 없을 경우 `og:image` fallback
- `updatedAt`는 수집 시점 기준으로 일괄 갱신

## 9) 프론트엔드 기술 스택(권장)
- Next.js(App Router) + TypeScript
- Firebase Web SDK
- UI: Tailwind + Headless UI(or shadcn)
- 상태: 최소로 시작(서버 주도), 클라 상태는 찜/로그인 정도
- 배포: Netlify(또는 Vercel도 가능하지만 현재는 Netlify 유지 가능)

## 10) Analytics(초기 최소)
- GA4 또는 Firebase Analytics(웹)
- 이벤트 최소 6개
  - `view_home`, `view_work`, `click_external`, `favorite_add`, `comment_add`, `search`
- 추후 추천/광고 최적화를 위해 필수

### 이벤트 파라미터 예시
- `view_work`: workId, platform, genres, dayOfWeek
- `click_external`: workId, platform, outboundUrl
- `favorite_add`: workId, platform

## 11) 완료 기준(검수 체크리스트)
### 기능
- 로그인/닉네임 설정/중복 방지 동작
- 작품 상세에서 찜/댓글 가능
- 홈/요일/장르/검색에서 작품 탐색 가능
- 크롤러 실행 → Firestore 반영 확인

### SEO
- 홈/요일/장르/작품 상세: 초기 렌더에 콘텐츠 존재(로딩만 금지)
- 메타데이터/OG/canonical 정상
- sitemap/robots 정상
- 내부링크 구조 정상

### 품질
- 모바일 우선 레이아웃
- 기본 성능(이미지 최적화, 무한 로딩 방지)
- 운영 문구(TODO/임시) 노출 금지

## 12) 추가 결정 필요 항목(미정/확인)
- 작품 고유 ID 전략(플랫폼별 slug vs 내부 UUID)
- 썸네일 캐시 정책(외부 핫링크 vs Storage 저장)
- 광고 네트워크 적용 시점(AdSense 승인 일정)
