import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "내 정보",
  description: "닉네임 설정 및 찜/댓글 내역",
  alternates: {
    canonical: "/me",
  },
};

const favorites = [
  { id: "fav-01", title: "찜한 작품 A" },
  { id: "fav-02", title: "찜한 작품 B" },
];

export default function MePage() {
  return (
    <section className="section">
      <h2>내 정보</h2>
      <p>닉네임 설정 영역 (중복 검사 포함)</p>
      <div style={{ margin: "12px 0 24px" }}>
        <input
          style={{ padding: 10, borderRadius: 8, border: "1px solid #e2e8f0" }}
          placeholder="닉네임"
        />
        <button className="cta" style={{ marginLeft: 8 }} type="button">
          저장
        </button>
      </div>
      <h3>찜 목록</h3>
      <div className="list">
        {favorites.map((work) => (
          <Link key={work.id} className="card" href={`/works/${work.id}`}>
            {work.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
