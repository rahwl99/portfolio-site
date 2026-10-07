import { siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="pt-14 pb-16 border-t border-[#232329] font-mono text-xs text-[#5f5f6e]">
      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6">
        <div className="space-y-1">
          <div className="text-[#e1e1e6] font-medium">
            {siteMeta.author}
          </div>
          <p>Making things since 2016.</p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#8c8c99]">
          {siteMeta.socials.map((social, index) => (
            <span key={social.key} className="inline-flex items-center">
              <a
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-[#a78bfa] underline underline-offset-4 decoration-[#a78bfa]/30 transition-colors"
              >
                {social.label}
              </a>
              {index < siteMeta.socials.length - 1 && (
                <span className="ml-2 text-[#5f5f6e]">·</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
