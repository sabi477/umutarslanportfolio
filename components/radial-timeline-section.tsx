"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { SectionHeader } from "@/components/ui/section-header";
import { timelineData } from "@/lib/timeline-data";

export function RadialTimelineSection() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        subtitle="Yol haritam"
        title="Deneyim Timeline"
      />
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}
