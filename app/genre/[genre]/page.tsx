import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: { genre: string } };

export function generateMetadata({ params }: Props): Metadata {
  const genre = decodeURIComponent(params.genre);
  return {
    title: `${genre} 장르`,
    description: `${genre} 장르 작품 모음`,
    alternates: {
      canonical: `/genre/${params.genre}`,
    },
  };
}

const works = [
  { id: "genre-01", title: "장르 대표작" },
  { id: "genre-02", title: "추천 작품" },
  { id: "genre-03", title: "신규 작품" },
];

export default function GenrePage({ params }: Props) {
  const genre = decodeURIComponent(params.genre);

  return (
    <section className="section">
      <h2>{genre} 장르 리스트</h2>
      <div className="list">
        {works.map((work) => (
          <Link key={work.id} className="card" href={`/works/${work.id}`}>
            {work.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
