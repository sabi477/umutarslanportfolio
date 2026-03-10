import {
  GithubIcon,
  Grid2X2Plus,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { siteData } from "@/lib/site-data";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <LinkedinIcon className="size-4" />,
  github: <GithubIcon className="size-4" />,
  twitter: <TwitterIcon className="size-4" />,
};

export function MinimalFooter() {
  const year = new Date().getFullYear();
  const { tagline, company, resources, social } = siteData.footer;
  const { linkedin, github } = siteData.contact.links;

  const socialWithLinks = [
    { id: "linkedin" as const, href: linkedin.startsWith("[") ? "#" : linkedin },
    { id: "github" as const, href: github.startsWith("[") ? "#" : github },
    { id: "twitter" as const, href: "#" },
  ];

  return (
    <footer className="relative">
      <div className="mx-auto max-w-4xl bg-[radial-gradient(35%_80%_at_30%_0%,rgb(237_237_237/0.1),transparent)] md:border-x-[1px] md:border-border">
        <div className="absolute inset-x-0 h-[1px] w-full bg-border" />
        <div className="grid max-w-4xl grid-cols-6 gap-4 p-4">
          <div className="col-span-6 flex flex-col gap-3 md:col-span-4">
            <a href="/" className="w-max opacity-25 transition-opacity hover:opacity-50">
              <Grid2X2Plus className="size-8 text-foreground" />
            </a>
            <p className="max-w-sm text-sm text-balance text-muted-foreground">
              {tagline}
            </p>
            <div className="flex gap-2">
              {socialWithLinks.map((item) => (
                <a
                  key={item.id}
                  className="rounded-md border-[1px] border-border p-1.5 text-foreground transition-colors hover:bg-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                >
                  {socialIcons[item.id]}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-muted-foreground">Kaynaklar</span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }) => (
                <a
                  key={title}
                  className="w-max py-1 text-sm text-foreground duration-200 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-muted-foreground">Kurumsal</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }) => (
                <a
                  key={title}
                  className="w-max py-1 text-sm text-foreground duration-200 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 h-[1px] w-full bg-border" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pb-5 pt-2">
          <p className="text-center text-sm text-muted-foreground">
            © {year} {siteData.person.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
