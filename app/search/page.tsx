import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "검색",
  description: "작품명/작가명 검색 결과",
  alternates: {
    canonical: "/search",
  },
};

const results = [
  { id: "search-01", title: "검색 결과 A" },
  { id: "search-02", title: "검색 결과 B" },
  { id: "search-03", title: "검색 결과 C" },
];

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q ?? "";

  return (
    <section className="section">
      <h2>검색 결과</h2>
      <p>키워드: {query || "전체"}</p>
      <div className="list">
        {results.map((work) => (
          <Link key={work.id} className="card" href={`/works/${work.id}`}>
            {work.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
