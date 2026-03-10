/**
 * Radial Orbital Timeline verisi - siteData'dan türetilmiş
 * Umut Arslan Full Stack Developer & E-Commerce Specialist
 */

import {
  Code2,
  Server,
  ShoppingCart,
  Layers,
  Rocket,
} from "lucide-react";
import { siteData } from "./site-data";
import type { TimelineItem } from "./timeline-types";

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Frontend",
    date: "2023",
    content: siteData.skills.categories[0].items.join(", "),
    category: siteData.skills.categories[0].name,
    icon: Code2,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Backend & API",
    date: "2023",
    content: siteData.skills.categories[1].items.join(", "),
    category: siteData.skills.categories[1].name,
    icon: Server,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "E-Ticaret",
    date: "2024",
    content: "Mağaza kurulumu, ödeme entegrasyonları, UX optimizasyonu ve satış stratejileri.",
    category: siteData.skills.categories[3].name,
    icon: ShoppingCart,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 4,
    title: "Full Stack Projeler",
    date: "2024",
    content: "E-ticaret platformları, SaaS panelleri ve API köprüleri. Modern stack ile uçtan uca çözümler.",
    category: siteData.services.items[0].title,
    icon: Layers,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 5,
    title: "DevOps & Teslimat",
    date: "2025",
    content: siteData.skills.categories[4].items.join(", "),
    category: siteData.skills.categories[4].name,
    icon: Rocket,
    relatedIds: [4],
    status: "pending",
    energy: 30,
  },
];
