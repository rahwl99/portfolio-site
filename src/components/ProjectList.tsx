import { selectedProjects } from "@/data/projects";

export function ProjectList() {
  return (
    <section className="py-14 border-t border-[#232329] font-mono">
      <h2 className="text-xs uppercase tracking-widest text-[#8c8c99] mb-12">
        RECENT WORK
      </h2>

      <div className="space-y-14">
        {selectedProjects.map((project) => (
          <article key={project.id} className="space-y-3.5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#e1e1e6] tracking-tight">
                {project.title}
              </h3>
              <span className="text-[10px] tracking-wider uppercase text-[#8c8c99]">
                {project.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#e1e1e6]/80">
              {project.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#8c8c99] leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="text-xs text-[#5f5f6e] pt-1">
              {project.technologies}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="pt-1 flex items-center gap-4 text-xs">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a78bfa] hover:text-[#c4b5fd] underline underline-offset-4 decoration-[#a78bfa]/40 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
