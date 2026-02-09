import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "랭킹",
  description: "플랫폼별 인기 웹툰 랭킹", 
  alternates: {
    canonical: "/ranking",
  },
};

const ranks = [
  { id: "rank-01", title: "랭킹 1위" },
  { id: "rank-02", title: "랭킹 2위" },
  { id: "rank-03", title: "랭킹 3위" },
];

export default function RankingPage() {
  return (
    <section className="section">
      <h2>전체 랭킹</h2>
      <div className="list">
        {ranks.map((work, index) => (
          <Link key={work.id} className="card" href={`/works/${work.id}`}>
            {index + 1}. {work.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
