"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import React from "react";
import { siteData } from "@/lib/site-data";

interface CasestudyItem {
  logo: string;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

interface Casestudy5Props {
  featuredCasestudy?: CasestudyItem;
  casestudies?: CasestudyItem[];
}

export function Casestudy5({
  featuredCasestudy,
  casestudies,
}: Casestudy5Props) {
  const featured = featuredCasestudy ?? siteData.casestudies.featured;
  const items = casestudies ?? siteData.casestudies.items;
  return (
    <section className="py-10 md:py-14" id="casestudies">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <p className="text-base text-muted-foreground">Referans çalışmalar</p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
            Örnek Çalışmalar
          </h2>
        </div>
        <div className="overflow-hidden rounded-[15px] border border-border">
          <motion.a
            href={featured.link || "#"}
            className="group grid min-w-0 grid-cols-1 gap-3 overflow-hidden px-4 transition-colors duration-500 ease-out hover:bg-muted/40 md:px-6 lg:grid-cols-2 xl:px-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="flex flex-col justify-between gap-3 pt-6 md:pt-10 lg:pb-10">
              <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                <img
src={featured.logo}
                    alt={featured.company}
                  className="h-9 w-9 rounded object-contain"
                />
                {featured.company}
              </div>
              <div>
                <span className="text-xs text-muted-foreground sm:text-sm">
                  {featured.tags}
                </span>
                <h2 className="mb-3 mt-2 text-balance text-xl font-semibold text-foreground sm:text-2xl sm:leading-tight">
                  {featured.title}
                  <span className="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/70">
                    {" "}
                    {featured.subtitle}
                  </span>
                </h2>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  Örnek çalışmayı incele
                  <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="relative isolate min-h-[200px] py-6 md:py-10">
              <div className="relative isolate h-full min-h-[200px] border border-border bg-background p-2">
                <div className="h-full min-h-[180px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="aspect-[14/9] h-full min-h-[180px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.a>
          <div className="flex border-t border-border">
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] opacity-15 xl:block [background-size:10px_10px]"></div>
            <div className="grid lg:grid-cols-2">
              {items.map((item, idx) => (
                <motion.a
                  key={item.company}
                  href={item.link || "#"}
                  className={`group flex min-w-0 flex-col justify-between gap-6 border-border bg-background px-4 py-6 transition-colors duration-500 ease-out hover:bg-muted/40 md:px-6 md:py-10 lg:pb-10 xl:gap-8 ${
                    idx === 0
                      ? "xl:border-l xl:pl-8"
                      : "border-t lg:border-t-0 lg:border-l xl:border-r xl:pl-8"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-9 w-9 rounded object-contain"
                    />
                    {item.company}
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground sm:text-sm">
                      {item.tags}
                    </span>
                    <h2 className="mb-3 mt-2 text-balance text-xl font-semibold text-foreground sm:text-2xl sm:leading-tight">
                      {item.title}
                      <span className="font-medium text-primary/50 transition-colors duration-500 ease-out group-hover:text-primary/70">
                        {" "}
                        {item.subtitle}
                      </span>
                    </h2>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      Örnek çalışmayı incele
                      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] opacity-15 xl:block [background-size:10px_10px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
