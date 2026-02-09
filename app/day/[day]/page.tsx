import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: { day: string } };

export function generateMetadata({ params }: Props): Metadata {
  const day = params.day.toUpperCase();
  return {
    title: `${day} 요일 작품`,
    description: `${day}요일 업데이트 웹툰 리스트`,
    alternates: {
      canonical: `/day/${params.day}`,
    },
  };
}

const works = [
  { id: "day-01", title: "요일 대표작" },
  { id: "day-02", title: "신작 추천" },
  { id: "day-03", title: "인기 급상승" },
];

export default function DayPage({ params }: Props) {
  const day = params.day.toUpperCase();

  return (
    <section className="section">
      <h2>{day} 요일 작품 리스트</h2>
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
