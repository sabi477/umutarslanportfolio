import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getCasestudyBySlug,
  getAllCasestudySlugs,
} from "@/lib/casestudy-utils";

export function generateStaticParams() {
  return getAllCasestudySlugs().map((slug) => ({ slug }));
}

export default async function ProjeDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCasestudyBySlug(slug);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-16">
          <Link
        href="/#casestudies"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-4" />
            Örnek Çalışmalara dön
          </Link>

          <article className="space-y-8">
            <div className="flex items-center gap-3">
              <img
            src={project.logo}
            alt={project.company}
                className="h-12 w-12 rounded object-contain"
              />
              <div>
                <p className="text-sm text-muted-foreground">{project.tags}</p>
                <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {project.company}
                </h1>
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
                {project.title}
                <span className="font-medium text-primary/70"> {project.subtitle}</span>
              </h2>
              {project.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>

            {project.image && (
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}

            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="mb-4 text-sm text-muted-foreground">
                Bu proje hakkında görüşmek ister misiniz?
              </p>
              <Button asChild size="lg">
                <Link href="/meeting">
                  <CalendarIcon className="mr-2 size-4" />
                  Görüşme Planla
                </Link>
              </Button>
            </div>
          </article>
    </div>
  );
}
