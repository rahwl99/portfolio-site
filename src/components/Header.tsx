import Link from "next/link";
import { siteMeta } from "@/data/site";

export function Header() {
  const headerLinks = siteMeta.socials.filter((s) => s.key !== "email");

  return (
    <header className="sticky top-0 z-50 bg-[#131316]/90 backdrop-blur-sm border-b border-[#232329]/60">
      <div className="max-w-[760px] mx-auto px-6 h-14 flex items-center justify-between font-mono text-sm">
        <Link
          href="/"
          className="font-semibold tracking-tight text-[#e1e1e6] hover:text-[#a78bfa] transition-colors"
        >
          {siteMeta.initials}
        </Link>

        <nav aria-label="External social links" className="flex items-center gap-5 sm:gap-6 text-xs text-[#8c8c99]">
          {headerLinks.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-[#e1e1e6] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
