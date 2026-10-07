import { siteMeta } from "@/data/site";

export function Hero() {
  return (
    <section className="pt-16 pb-12 font-mono">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e1e1e6] mb-6">
        {siteMeta.headline}
      </h1>

      <div className="space-y-4 text-sm sm:text-base text-[#8c8c99] leading-relaxed max-w-xl">
        <p className="text-[#e1e1e6]/90">
          {siteMeta.role}
        </p>
        <p>
          {siteMeta.bioLead}
        </p>
      </div>

      <nav aria-label="Social connections" className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#8c8c99]">
        {siteMeta.socials.map((item, index) => (
          <span key={item.key} className="inline-flex items-center">
            <a
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-[#a78bfa] underline underline-offset-4 decoration-[#a78bfa]/30 transition-colors"
            >
              {item.label}
            </a>
            {index < siteMeta.socials.length - 1 && (
              <span className="ml-2 text-[#5f5f6e]">·</span>
            )}
          </span>
        ))}
      </nav>
    </section>
  );
}
