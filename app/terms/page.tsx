import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 이용약관",
  description: "Onepick 서비스 이용약관",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="section">
      <h2>서비스 이용약관</h2>
      <p>AdSense 대응을 위한 기본 약관 페이지입니다. 추후 상세 내용 추가.</p>
    </section>
  );
}
