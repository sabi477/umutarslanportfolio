"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { siteData } from "@/lib/site-data";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  const { title, subtitle, items } = siteData.features;

  return (
    <section className="py-8 md:py-12" id="features">
      <div className="mx-auto max-w-5xl space-y-8 px-4 md:space-y-10 md:px-6">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <h2 className="mt-2 text-balance text-2xl font-semibold text-foreground md:text-3xl">
              {title}
            </h2>
          </div>
        </div>

        <motion.div
          className="relative mx-auto grid max-w-2xl overflow-hidden rounded-[15px] border-[1px] border-border divide-x-[1px] divide-y-[1px] divide-border *:p-8 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          {items.map((featureItem) => {
            const Icon = iconMap[featureItem.icon];
            return (
              <motion.div
                key={featureItem.id}
                className="space-y-3"
                variants={item}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="size-4 text-foreground" />}
                  <h3 className="text-[15px] font-medium text-foreground">
                    {featureItem.title}
                  </h3>
                </div>
                <p className="text-[15px] text-muted-foreground">
                  {featureItem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
