import type { Metadata } from "next";
import LayoutShell from "./components/LayoutShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Onepick | 웹툰 랭킹·급상승·추천",
    template: "%s | Onepick",
  },
  description: "국내 웹툰 플랫폼 데이터를 모아 랭킹, 급상승, 추천을 제공하는 Onepick.",
  metadataBase: new URL("https://onepick.example"),
  openGraph: {
    title: "Onepick",
    description: "SEO 유입 중심 웹툰 추천/랭킹 서비스",
    images: ["/og-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
