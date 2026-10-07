import { journeyData } from "@/data/timeline";

export function Timeline() {
  return (
    <section className="py-14 border-t border-[#232329] font-mono">
      <h2 className="text-xs uppercase tracking-widest text-[#8c8c99] mb-12">
        JOURNEY
      </h2>

      <div className="space-y-10">
        {journeyData.map((item) => (
          <div key={item.year} className="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr] gap-4 items-start">
            <span className="text-xs sm:text-sm text-[#8c8c99] tabular-nums pt-0.5">
              {item.year}
            </span>

            <div className="space-y-1.5">
              <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-[#e1e1e6] uppercase">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8c99] leading-relaxed max-w-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
