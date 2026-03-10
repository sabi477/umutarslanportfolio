"use client";

import Link from "next/link";
import { CalendarScheduler } from "@/components/ui/calendar-scheduler";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function MeetingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-8">
      <div className="mb-6 flex w-full max-w-[600px] items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/" aria-label="Ana sayfaya dön">
            <ArrowLeftIcon className="size-4" />
          </Link>
        </Button>
        <h1 className="text-lg font-medium text-muted-foreground">
          Toplantı planla
        </h1>
      </div>
      <CalendarScheduler
        onConfirm={async (val) => {
          try {
            await fetch("/api/meetings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: val.name,
                subject: val.subject,
                phone: val.phone,
                email: val.email,
                date: val.date?.toISOString(),
                time: val.time,
              }),
            });
          } catch {
            // Hata durumunda sessizce devam et
          }
        }}
      />
    </div>
  );
}
