/**
 * Site içeriği - Umut Arslan Portfolio
 * Bu veriler farklı bileşenlerde kullanılır.
 */

export const siteData = {
  // Kişisel Bilgiler
  person: {
    name: "Umut Arslan",
    title: "Full Stack Developer & E-Commerce Specialist",
    tagline:
      "Dijital dünyada uçtan uca çözümler: Koddan satışa, fikirden markaya.",
  },

  // Hakkımda
  about: {
    title: "Hakkımda",
    titleEn: "About Me",
    description:
      "Modern web teknolojilerinde uzmanlaşmış bir Full Stack Developer ve dijital pazar dinamiklerini iyi bilen bir E-Ticaret Uzmanıyım. Sadece çalışan kodlar yazmakla kalmıyor, aynı zamanda bu kodların iş hedeflerine ve satış dönüşümlerine (conversion) nasıl hizmet etmesi gerektiğini analiz ediyorum.",
    motivation:
      "Kullanıcı dostu arayüzler tasarlıyor, ölçeklenebilir backend sistemleri kuruyor ve e-ticaret platformlarının büyüme stratejilerini yönetiyorum. Karmaşık problemleri basit, şık ve performans odaklı çözümlere dönüştürmek en büyük motivasyonum.",
  },

  // Teknik Yetenekler
  skills: {
    title: "Teknik Yetenekler",
    titleEn: "Skills",
    categories: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "Express",
          "Python (Django/Flask)",
          "RESTful API",
        ],
      },
      {
        name: "Database",
        items: ["MongoDB", "PostgreSQL", "Firebase"],
      },
      {
        name: "E-Commerce",
        items: [
          "Shopify (Liquid)",
          "WooCommerce",
          "Magento",
          "SEO",
          "Google Analytics",
        ],
      },
      {
        name: "DevOps & Tools",
        items: ["Docker", "AWS", "Git", "Figma"],
      },
    ],
  },

  // Hizmetler
  services: {
    title: "Deneyim & Neler Yapıyorum?",
    titleEn: "Services",
    items: [
      {
        id: "web-dev",
        title: "Web Geliştirme (Full Stack)",
        description:
          "Sıfırdan, yüksek performanslı ve mobil uyumlu web uygulamaları geliştiriyorum. Modern tech-stack'ler kullanarak geleceğe hazır yapılar kuruyorum.",
      },
      {
        id: "ecommerce",
        title: "E-Ticaret Danışmanlığı & Yönetimi",
        description:
          "Mağaza kurulumundan ödeme entegrasyonlarına, kullanıcı deneyimi (UX) optimizasyonundan satış artırıcı stratejilere kadar e-ticaretin her adımında destek veriyorum.",
      },
      {
        id: "api",
        title: "API & Entegrasyon Çözümleri",
        description:
          "Pazaryerleri (Trendyol, Hepsiburada, Amazon vb.) entegrasyonları, kargo ve ödeme sistemleri gibi kritik dış servislerin mevcut yapıya sorunsuz bağlanmasını sağlıyorum.",
      },
    ],
  },

  // Örnek Projeler
  projects: {
    title: "Örnek Projeler",
    titleEn: "Projects",
    items: [
      {
        id: "project-x",
        title: "Project X (E-Commerce Platform)",
        description:
          "Next.js ve Stripe kullanılarak geliştirilmiş, %30 daha hızlı yükleme süresine sahip bir moda mağazası.",
      },
      {
        id: "project-y",
        title: "Project Y (SaaS Dashboard)",
        description:
          "İşletmeler için gerçek zamanlı stok ve satış analitiği sunan kapsamlı bir yönetim paneli.",
      },
      {
        id: "project-z",
        title: "Project Z (Custom API Bridge)",
        description:
          "ERP sistemleri ile e-ticaret altyapıları arasında veri senkronizasyonu sağlayan middleware yazılımı.",
      },
    ],
  },

  // Özellikler (Features)
  features: {
    title: "Yaratıcı ekipler için temel",
    titleEn: "The foundation for creative teams",
    subtitle:
      "Dijital dünyada uçtan uca çözümler sunuyorum. API'lerden platformlara, geliştiricilerden işletmelere kadar yenilikçi projeler için destek sağlıyorum.",
    items: [
      {
        id: "fast",
        icon: "Zap",
        title: "Hızlı",
        description:
          "Yüksek performanslı ve mobil uyumlu web uygulamaları. Modern tech-stack ile %30 daha hızlı yükleme süreleri.",
      },
      {
        id: "powerful",
        icon: "Cpu",
        title: "Güçlü",
        description:
          "Ölçeklenebilir backend sistemleri ve RESTful API'ler ile kurumsal düzeyde altyapı.",
      },
      {
        id: "security",
        icon: "Fingerprint",
        title: "Güvenlik",
        description:
          "Pazaryeri ve ödeme entegrasyonlarında güvenli veri akışı ve koruma.",
      },
      {
        id: "customization",
        icon: "Pencil",
        title: "Özelleştirme",
        description:
          "Kullanıcı dostu arayüzler ve iş hedeflerinize uygun özelleştirilebilir çözümler.",
      },
      {
        id: "control",
        icon: "Settings2",
        title: "Kontrol",
        description:
          "E-ticaret platformlarının büyüme stratejilerini yönetimi ve UX optimizasyonu.",
      },
      {
        id: "ai-ready",
        icon: "Sparkles",
        title: "Geleceğe Hazır",
        description:
          "Karmaşık problemleri basit, şık ve performans odaklı çözümlere dönüştürme.",
      },
    ],
  },

  // Örnek Çalışmalar (Case Studies)
  casestudies: {
    featured: {
      slug: "moda-magazasi",
      logo: "https://placehold.co/36x36/171717/ededed?text=EX",
      company: "Moda Mağazası",
      tags: "E-TİCARET / NEXT.JS / STRIPE",
      title: "Yüksek performanslı e-ticaret platformu.",
      subtitle: "Next.js ve Stripe ile %30 daha hızlı yükleme süresi.",
      description:
        "Moda sektörü için sıfırdan geliştirilen, Next.js ve Stripe entegrasyonlu e-ticaret platformu. %30 daha hızlı yükleme süreleri, mobil öncelikli tasarım ve dönüşüm odaklı checkout akışı.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      link: "/proje/moda-magazasi",
    },
    items: [
      {
        slug: "saas-dashboard",
        logo: "https://placehold.co/36x36/171717/ededed?text=SAAS",
        company: "SaaS Dashboard",
        tags: "YÖNETİM PANELİ / GERÇEK ZAMANLI ANALİTİK",
        title: "Stok ve satış analitiği paneli.",
        subtitle: "İşletmeler için gerçek zamanlı veri görselleştirme.",
        description:
          "İşletmeler için gerçek zamanlı stok takibi ve satış analitiği sunan kapsamlı yönetim paneli. Veri görselleştirme, raporlama ve otomasyon özellikleri.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        link: "/proje/saas-dashboard",
      },
      {
        slug: "api-bridge",
        logo: "https://placehold.co/36x36/171717/ededed?text=API",
        company: "API Bridge",
        tags: "ERP ENTEGRASYON / VERİ SENKRONİZASYONU",
        title: "ERP ile e-ticaret köprüsü.",
        subtitle: "Veri senkronizasyonu için middleware çözümü.",
        description:
          "ERP sistemleri ile e-ticaret altyapıları arasında gerçek zamanlı veri senkronizasyonu sağlayan middleware. Stok, sipariş ve müşteri verilerinin güvenli aktarımı.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        link: "/proje/api-bridge",
      },
    ],
  },

  // Carousel (Hizmetler & Projeler)
  carousel: {
    title: "Hizmetler & Projeler",
    subtitle: "Neler yapıyorum?",
    items: [
      {
        id: 1,
        imgUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        content:
          "Web Geliştirme: Sıfırdan, yüksek performanslı ve mobil uyumlu web uygulamaları. React, Next.js, TypeScript ile modern tech-stack. %30'a varan daha hızlı yükleme süreleri.",
      },
      {
        id: 2,
        imgUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        content:
          "E-Ticaret: Mağaza kurulumu, ödeme entegrasyonları (Stripe vb.), UX optimizasyonu ve satış stratejileri. Shopify, WooCommerce, Magento deneyimi.",
      },
      {
        id: 3,
        imgUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        content:
          "SaaS Dashboard: İşletmeler için gerçek zamanlı stok ve satış analitiği. Kapsamlı yönetim panelleri ve veri görselleştirme.",
      },
      {
        id: 4,
        imgUrl:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        content:
          "API & Entegrasyon: Trendyol, Hepsiburada, Amazon entegrasyonları. Kargo, ödeme ve ERP sistemleri ile veri senkronizasyonu.",
      },
      {
        id: 5,
        imgUrl:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        content:
          "E-Ticaret Platformu: Next.js ve Stripe ile moda mağazası. Hızlı checkout, SEO optimizasyonu ve dönüşüm odaklı tasarım.",
      },
      {
        id: 6,
        imgUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        content:
          "Ekip & Danışmanlık: Büyüme stratejileri, rakip analizi ve teknik danışmanlık. Fikirden ürüne, koddan satışa.",
      },
    ],
  },

  // SSS (FAQ)
  faq: {
    title: "Sıkça Sorulan Sorular",
    subtitle: "Merak ettikleriniz",
    categories: {
      "web-dev": "Web Geliştirme",
      "ecommerce": "E-Ticaret",
      "api": "API & Entegrasyon",
    },
    data: {
      "web-dev": [
        {
          question: "Web geliştirme nedir?",
          answer:
            "Web geliştirme, web siteleri ve uygulamaları oluşturma ve sürdürme sürecidir. React, Next.js, TypeScript gibi modern teknolojilerle yüksek performanslı ve mobil uyumlu çözümler sunuyorum.",
        },
        {
          question: "Bir web projesi ne kadar sürede tamamlanır?",
          answer:
            "Proje karmaşıklığına göre değişir. Basit bir landing sayfası birkaç gün, karmaşık bir e-ticaret platformu birkaç ay sürebilir. Detaylı süre için ücretsiz danışmanlık sunuyorum.",
        },
        {
          question: "Hangi teknolojileri kullanıyorsunuz?",
          answer:
            "Frontend'de React.js, Next.js, TypeScript ve Tailwind CSS; backend'de Node.js, Express ve Python; veritabanı olarak MongoDB, PostgreSQL ve Firebase kullanıyorum.",
        },
        {
          question: "Responsive tasarım nedir?",
          answer:
            "Responsive tasarım, web sitelerinin farklı cihaz ve ekran boyutlarında düzgün görünmesini sağlayan yaklaşımdır. Tüm projelerimde mobil öncelikli tasarım uyguluyorum.",
        },
        {
          question: "Performans optimizasyonu yapıyor musunuz?",
          answer:
            "Evet. Next.js ile %30'a varan daha hızlı yükleme süreleri, lazy loading, image optimization ve kod splitting gibi tekniklerle performans odaklı geliştirme yapıyorum.",
        },
      ],
      ecommerce: [
        {
          question: "E-ticaret mağazası kurulumu ne içerir?",
          answer:
            "Mağaza kurulumu, ödeme entegrasyonları (Stripe vb.), kargo sistemleri, ürün yönetimi, SEO optimizasyonu ve kullanıcı deneyimi (UX) iyileştirmelerini kapsar.",
        },
        {
          question: "Hangi e-ticaret platformlarında çalışıyorsunuz?",
          answer:
            "Shopify (Liquid), WooCommerce ve Magento ile çalışıyorum. Ayrıca özel Next.js tabanlı e-ticaret çözümleri de geliştiriyorum.",
        },
        {
          question: "Pazaryeri entegrasyonu yapıyor musunuz?",
          answer:
            "Evet. Trendyol, Hepsiburada, Amazon gibi pazaryerleri ile entegrasyon, stok senkronizasyonu ve sipariş yönetimi çözümleri sunuyorum.",
        },
        {
          question: "Satış dönüşümlerini nasıl artırırsınız?",
          answer:
            "UX optimizasyonu, A/B testleri, checkout süreci iyileştirmesi, SEO ve Google Analytics ile veri odaklı stratejiler uyguluyorum.",
        },
        {
          question: "E-ticaret danışmanlığı ne kapsar?",
          answer:
            "Mağaza stratejisi, rakip analizi, fiyatlandırma, pazarlama kanalları ve büyüme stratejileri konularında danışmanlık veriyorum.",
        },
      ],
      api: [
        {
          question: "API entegrasyonu nedir?",
          answer:
            "API entegrasyonu, farklı yazılım sistemlerinin birbirleriyle veri alışverişi yapmasını sağlar. Ödeme, kargo, ERP ve pazaryeri sistemlerini mevcut altyapınıza bağlıyorum.",
        },
        {
          question: "ERP ile e-ticaret senkronizasyonu nasıl çalışır?",
          answer:
            "Custom API Bridge ile ERP sisteminizdeki stok, sipariş ve müşteri verilerini e-ticaret platformunuzla gerçek zamanlı senkronize ediyorum.",
        },
        {
          question: "Hangi entegrasyonları yapıyorsunuz?",
          answer:
            "Ödeme sistemleri (Stripe, iyzico), kargo firmaları, pazaryerleri (Trendyol, Hepsiburada), ERP ve CRM sistemleri entegrasyonları yapıyorum.",
        },
        {
          question: "Entegrasyon projesi ne kadar sürer?",
          answer:
            "Entegrasyon karmaşıklığına göre 1-4 hafta arasında değişir. Mevcut sisteminizi analiz edip net bir süre tahmini sunuyorum.",
        },
        {
          question: "Güvenlik nasıl sağlanıyor?",
          answer:
            "OAuth, API key yönetimi, veri şifreleme ve güvenli veri akışı protokolleri ile tüm entegrasyonlarda güvenlik standartlarına uyuyorum.",
        },
      ],
    },
  },

  // Footer
  footer: {
    tagline: "Dijital dünyada uçtan uca çözümler: Koddan satışa, fikirden markaya.",
    company: [
      { title: "Hakkımda", href: "#about" },
      { title: "Hizmetler", href: "#features" },
      { title: "Örnek Çalışmalar", href: "#casestudies" },
      { title: "Admin", href: "/admin" },
      { title: "Gizlilik Politikası", href: "#" },
      { title: "Kullanım Koşulları", href: "#" },
    ],
    resources: [
      { title: "İletişim", href: "#contact" },
      { title: "Yardım Merkezi", href: "#" },
      { title: "Destek", href: "#" },
      { title: "Topluluk", href: "#" },
      { title: "Güvenlik", href: "#" },
    ],
    social: [
      { id: "linkedin", href: "#" },
      { id: "github", href: "#" },
      { id: "twitter", href: "#" },
    ],
  },

  // İletişim
  contact: {
    title: "İletişim",
    titleEn: "Contact",
    cta: "Dijital dünyada fark yaratacak bir proje mi var? Hadi konuşalım!",
    links: {
      email: "[E-posta adresin]",
      linkedin: "[LinkedIn profil linkin]",
      github: "[GitHub profil linkin]",
    },
  },
} as const;

export type SiteData = typeof siteData;
