import { professionalWorkData } from "@/data/professionalWork";

export function ProfessionalWork() {
  return (
    <section className="py-14 border-t border-[#232329] font-mono">
      <h2 className="text-xs uppercase tracking-widest text-[#8c8c99] mb-3">
        PROFESSIONAL WORK
      </h2>

      <p className="text-xs sm:text-sm text-[#8c8c99] mb-12 max-w-lg">
        Software built for real-world workflows.
      </p>

      <div className="space-y-14">
        {professionalWorkData.map((project, index) => (
          <article key={index} className="space-y-3.5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#e1e1e6] tracking-tight">
                {project.title}
              </h3>
              <span className="text-xs sm:text-sm text-[#8c8c99] tabular-nums">
                {project.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#e1e1e6]/80">
              {project.company} · {project.role}
            </p>

            <p className="text-xs sm:text-sm text-[#8c8c99] leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="text-xs text-[#5f5f6e] pt-1">
              {project.technologies.join(" · ")}
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[10px] tracking-wider uppercase text-[#8c8c99]">
                {project.status}
              </span>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#a78bfa] hover:text-[#c4b5fd] underline underline-offset-4 decoration-[#a78bfa]/40 transition-colors"
                >
                  source ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
