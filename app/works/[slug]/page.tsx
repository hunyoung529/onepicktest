import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const title = decodeURIComponent(params.slug);
  return {
    title,
    description: `${title} - 작가, 요일, 장르, 평점, 댓글, 추천작`,
    alternates: {
      canonical: `/works/${params.slug}`,
    },
    openGraph: {
      title: `${title} | Onepick`,
      description: `${title} 상세 정보와 추천작을 확인하세요.`,
      images: ["/og-work.png"],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

const relatedWorks = [
  { id: "naver-101", title: "같은 요일 인기작" },
  { id: "naver-102", title: "같은 장르 추천" },
  { id: "naver-103", title: "작가의 다른 작품" },
];

export default function WorkDetailPage({ params }: Props) {
  const title = decodeURIComponent(params.slug);

  return (
    <div className="section">
      <h2>{title}</h2>
      <p>플랫폼: 네이버웹툰</p>
      <p>요일: 월 · 수</p>
      <p>장르: 판타지 · 액션</p>
      <p>평점: 9.8</p>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button className="cta" type="button">
          찜하기
        </button>
        <a className="cta" href="https://comic.naver.com" target="_blank" rel="noreferrer">
          플랫폼에서 보기
        </a>
      </div>

      <div style={{ marginTop: 24 }}>
        <h3>소개</h3>
        <p>작품 소개 및 태그 영역입니다. 추후 Firestore 데이터로 교체됩니다.</p>
      </div>

      <div style={{ marginTop: 24 }}>
        <h3>댓글</h3>
        <div className="list">
          <div className="card">첫 번째 댓글 샘플</div>
          <div className="card">두 번째 댓글 샘플</div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <h3>같은 요일/장르/작가 작품</h3>
        <div className="grid">
          {relatedWorks.map((work) => (
            <Link key={work.id} className="card" href={`/works/${work.id}`}>
              <strong>{work.title}</strong>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
