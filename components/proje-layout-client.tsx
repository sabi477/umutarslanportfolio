"use client";

import dynamic from "next/dynamic";
import { MinimalFooter } from "@/components/ui/minimal-footer";

const Header = dynamic(
  () => import("@/components/ui/header-1").then((m) => ({ default: m.Header })),
  { ssr: false },
);

export function ProjeLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <MinimalFooter />
    </div>
  );
}
