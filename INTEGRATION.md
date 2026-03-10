# Hero & Header Bileşen Entegrasyonu

## Proje Yapısı

Bu proje aşağıdaki yapıyı kullanır:

- **Bileşenler**: `/components/ui/` - shadcn/ui uyumlu bileşenler
- **Stiller**: `app/globals.css` - Tailwind CSS + shadcn tema değişkenleri
- **Yardımcılar**: `/lib/utils.ts` - `cn()` sınıf birleştirme fonksiyonu
- **Veri**: `/lib/site-data.ts` - Umut Arslan portfolio içeriği
- **Timeline verisi**: `/lib/timeline-data.ts` - siteData'dan türetilmiş

## Kurulu Bağımlılıklar

- `lucide-react` - İkonlar
- `@radix-ui/react-slot` - Button asChild desteği
- `class-variance-authority` - Button varyantları
- `framer-motion` - InfiniteSlider animasyonları
- `react-use-measure` - InfiniteSlider boyut ölçümü
- `tailwind-merge`, `clsx` - cn() yardımcısı

## Bileşen Listesi

| Bileşen | Dosya | Açıklama |
|---------|-------|----------|
| HeroSection | hero-1.tsx | Ana hero bölümü |
| LogosSection | hero-1.tsx | Logo bulutu bölümü |
| Header | header-1.tsx | Sticky header, mobil menü |
| Button | button.tsx | shadcn Button |
| Badge | badge.tsx | shadcn Badge |
| Card | card.tsx | shadcn Card |
| RadialOrbitalTimeline | radial-orbital-timeline.tsx | Orbital timeline (site verileriyle) |
| MenuToggleIcon | menu-toggle-icon.tsx | Hamburger ikon |
| useScroll | use-scroll.tsx | Scroll threshold hook |
| LogoCloud | logo-cloud-3.tsx | Sonsuz logo slider |
| InfiniteSlider | infinite-slider.tsx | Framer Motion slider |

## Kullanım

Ana sayfa (`/`) ve demo sayfası (`/demo`) aynı içeriği gösterir:

```tsx
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <HeroSection />
        <LogosSection />
      </main>
    </div>
  );
}
```

## Özelleştirme

- **Logolar**: `components/ui/hero-1.tsx` içindeki `logos` dizisini düzenleyin
- **Header linkleri**: `components/ui/header-1.tsx` içindeki `links` dizisi
- **Tema**: `app/globals.css` içindeki CSS değişkenleri

## Çalıştırma

```bash
npm run dev
```

http://localhost:3000 adresinde uygulama çalışır.
