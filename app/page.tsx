import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "홈",
  description: "오늘의 웹툰 TOP, 급상승, 요일/장르별 추천을 빠르게 확인하세요.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Onepick 홈",
    description: "오늘의 TOP과 급상승 웹툰을 한눈에.",
    images: ["/og-home.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const todaysTop = [
  { id: "naver-001", title: "집이 있어야 한다", platform: "네이버웹툰" },
  { id: "naver-002", title: "여름의 끝", platform: "네이버웹툰" },
  { id: "kakao-001", title: "밤의 온도", platform: "카카오" },
];

const rising = [
  { id: "naver-003", title: "아무것도 아닌 날", change: "+12" },
  { id: "naver-004", title: "보석 같은 하루", change: "+9" },
  { id: "kakao-002", title: "서늘한 새벽", change: "+7" },
];

const days = [
  { key: "mon", label: "월" },
  { key: "tue", label: "화" },
  { key: "wed", label: "수" },
  { key: "thu", label: "목" },
  { key: "fri", label: "금" },
  { key: "sat", label: "토" },
  { key: "sun", label: "일" },
];

const genres = ["로맨스", "판타지", "무협", "스릴러", "액션", "일상"];

export default function HomePage() {
  return (
    <>
      <section className="section">
        <h2>오늘 TOP</h2>
        <div className="grid">
          {todaysTop.map((work) => (
            <Link className="card" key={work.id} href={`/works/${work.id}`}>
              <strong>{work.title}</strong>
              <p>{work.platform}</p>
              <span className="badge">상세 보기</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>급상승</h2>
        <div className="list">
          {rising.map((work) => (
            <Link className="card" key={work.id} href={`/works/${work.id}`}>
              <strong>{work.title}</strong>
              <p>랭킹 변동 {work.change}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>요일별</h2>
        <div className="grid">
          {days.map((day) => (
            <Link className="card" key={day.key} href={`/day/${day.key}`}>
              <strong>{day.label}요일 웹툰</strong>
              <p>요일별 신작·인기작 모음</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>장르</h2>
        <div className="grid">
          {genres.map((genre) => (
            <Link className="card" key={genre} href={`/genre/${encodeURIComponent(genre)}`}>
              <strong>{genre}</strong>
              <p>핫한 장르 추천작</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>바로 시작하기</h2>
        <p>검색 또는 요일/장르 진입으로 작품을 탐색하세요.</p>
        <Link className="cta" href="/search?q=오늘">
          검색 결과 보기
        </Link>
      </section>
    </>
  );
}
