import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  description: "Google 로그인으로 Onepick을 시작하세요.",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
  return (
    <section className="section">
      <h2>로그인</h2>
      <p>Firebase Google 로그인 버튼이 들어갈 자리입니다.</p>
      <button className="cta" type="button">
        Google로 로그인
      </button>
    </section>
  );
}
