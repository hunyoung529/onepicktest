import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/ranking", label: "랭킹" },
  { href: "/search?q=오늘", label: "검색" },
  { href: "/login", label: "로그인" },
];

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <div className="nav">
          <Link href="/">Onepick</Link>
          <nav>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="inner">
          <strong>Onepick v1</strong>
          <span>SEO · 수익화 최우선 웹툰 탐색 서비스</span>
          <div>
            <Link href="/privacy">개인정보처리방침</Link>
            <span> · </span>
            <Link href="/terms">이용약관</Link>
          </div>
          <span>© 2024 Onepick</span>
        </div>
      </footer>
    </>
  );
}
