import { ProjeLayoutClient } from "@/components/proje-layout-client";

export default function ProjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjeLayoutClient>{children}</ProjeLayoutClient>;
}
