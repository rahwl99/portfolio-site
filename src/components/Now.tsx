import { nowData } from "@/data/site";

export function Now() {
  return (
    <section className="py-14 border-t border-[#232329] font-mono">
      <h2 className="text-xs uppercase tracking-widest text-[#8c8c99] mb-4">
        CURRENTLY BUILDING
      </h2>

      <div className="space-y-4 max-w-lg">
        <p className="text-xs sm:text-sm text-[#e1e1e6]/90 leading-relaxed">
          {nowData.headline}
        </p>

        {nowData.lastUpdated && (
          <p className="text-xs text-[#5f5f6e]">
            Last updated · {nowData.lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
}
