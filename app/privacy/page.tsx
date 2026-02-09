import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "Onepick 개인정보처리방침",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <h2>개인정보처리방침</h2>
      <p>AdSense 대응을 위한 기본 정책 페이지입니다. 추후 상세 내용 추가.</p>
    </section>
  );
}
