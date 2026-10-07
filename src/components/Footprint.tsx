import { footprintData } from "@/data/site";
import { selectedProjects } from "@/data/projects";

export function Footprint() {
  // Live projects: count projects that are published/in-progress or active for public use
  const liveProjectCount = selectedProjects.filter(
    (p) => p.status === "ACTIVE" || p.status === "IN PROGRESS" || p.status === "SHIPPED"
  ).length;

  const metrics = [
    {
      value: footprintData.youtubeSubscribers,
      labelFirst: "YouTube",
      labelSecond: "subscribers",
    },
    {
      value: footprintData.youtubeViews,
      labelFirst: "YouTube",
      labelSecond: "views",
    },
    {
      value: footprintData.playStoreDownloads,
      labelFirst: "Play Store",
      labelSecond: "downloads",
    },
    {
      value: liveProjectCount.toString(),
      labelFirst: "Live",
      labelSecond: "projects",
    },
  ];

  return (
    <section className="py-14 border-t border-[#232329] font-mono">
      <h2 className="text-xs uppercase tracking-widest text-[#8c8c99] mb-3">
        INTERNET FOOTPRINT
      </h2>

      <p className="text-xs sm:text-sm text-[#8c8c99] mb-10 max-w-lg">
        {footprintData.intro}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#e1e1e6] tabular-nums">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-[#8c8c99] leading-snug">
              <div>{item.labelFirst}</div>
              <div>{item.labelSecond}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
