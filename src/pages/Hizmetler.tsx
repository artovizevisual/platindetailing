import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/home/CTABanner";
import { Shield, Droplets, Sparkles, Car, Sun, Check, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "ppf",
    icon: Shield,
    title: "PPF Kaplama",
    description: "Paint Protection Film (PPF), aracınızın boyasını taş sıçraması, çizik, böcek asidi ve UV ışınlarına karşı koruyan şeffaf bir film kaplamadır.",
    forWhom: [
      "Yeni araç sahipleri",
      "Uzun yol yapanlar",
      "Araç değerini korumak isteyenler",
      "Lüks ve spor araç sahipleri",
    ],
    benefits: [
      "Taş sıçramalarına karşı koruma",
      "Self-healing (kendi kendine iyileşen) teknoloji",
      "UV koruma ile solmayı önler",
      "10 yıla kadar garanti",
    ],
    faq: [
      {
        q: "PPF ne kadar süre dayanır?",
        a: "Kaliteli PPF uygulamaları, doğru bakımla 7-10 yıl dayanabilir.",
      },
      {
        q: "PPF görünür mü?",
        a: "Hayır, profesyonel uygulama ile PPF tamamen görünmezdir.",
      },
    ],
  },
  {
    id: "seramik",
    icon: Droplets,
    title: "Seramik Kaplama",
    description: "Seramik kaplama, aracınızın boyası üzerinde hidrofobik (su itici) bir tabaka oluşturarak uzun süreli parlaklık ve koruma sağlar.",
    forWhom: [
      "Parlaklık isteyenler",
      "Kolay temizlik arayanlar",
      "Boya koruma düşünenler",
      "Düzenli araç bakımı yapanlar",
    ],
    benefits: [
      "Hidrofobik yüzey",
      "UV ve kimyasal koruma",
      "Kolay temizlik",
      "2-5 yıl dayanıklılık",
    ],
    faq: [
      {
        q: "Seramik mi PPF mi seçmeliyim?",
        a: "İkisi farklı amaçlara hizmet eder. PPF fiziksel koruma, seramik kimyasal koruma sağlar. İdeal olan ikisinin birlikte kullanımıdır.",
      },
      {
        q: "Seramik kaplama sonrası bakım gerekli mi?",
        a: "Evet, özel şampuan ve periyodik bakım ürünleri ile ömrü uzatılabilir.",
      },
    ],
  },
  {
    id: "pasta",
    icon: Sparkles,
    title: "Pasta Cila & Boya Koruma",
    description: "Boya düzeltme işlemi ile swirl (dairesel çizik), ince çizik ve oksidasyonları giderip boyanızı fabrika parlaklığına kavuşturuyoruz.",
    forWhom: [
      "Çizik problemi yaşayanlar",
      "Araç satışı düşünenler",
      "Yenileme isteyenler",
      "Detaycı araç sahipleri",
    ],
    benefits: [
      "Çizik ve swirl giderme",
      "Fabrika parlaklığı",
      "Boya derinliği artışı",
      "Koruma katmanı",
    ],
    faq: [
      {
        q: "Her araç pasta cilaya uygun mu?",
        a: "Evet, boya durumuna göre doğru kombinasyon seçilerek tüm araçlara uygulanabilir.",
      },
      {
        q: "Pasta cila boyaya zarar verir mi?",
        a: "Doğru teknik ve ürünlerle yapıldığında zarar vermez, aksine korur.",
      },
    ],
  },
  {
    id: "ic-kuafor",
    icon: Car,
    title: "Detaylı İç Kuaför",
    description: "Aracınızın iç mekanını en ince detayına kadar temizliyor, deri bakımı yapıyor ve koku giderme işlemi uyguluyoruz.",
    forWhom: [
      "Hijyen hassasiyeti olanlar",
      "Çocuklu aileler",
      "2. el araç alanlar",
      "Uzun yol yapanlar",
    ],
    benefits: [
      "Derin temizlik",
      "Deri nemlendirme",
      "Bakteri giderme",
      "Koku arındırma",
    ],
    faq: [
      {
        q: "İç kuaför ne kadar sürer?",
        a: "Aracın durumuna göre 4-8 saat arasında sürebilir.",
      },
      {
        q: "Deri koltuklara zarar verir mi?",
        a: "Hayır, özel deri temizlik ve bakım ürünleri kullanıyoruz.",
      },
    ],
  },
  {
    id: "cam-filmi",
    icon: Sun,
    title: "Cam Filmi",
    description: "UV ışınlarını bloke eden, ısı yalıtımı sağlayan ve mahremiyet sunan profesyonel cam filmi uygulaması.",
    forWhom: [
      "Sıcak bölgelerde yaşayanlar",
      "UV koruma isteyenler",
      "Mahremiyet arayanlar",
      "Klimayı verimli kullanmak isteyenler",
    ],
    benefits: [
      "%99 UV koruma",
      "Isı reddi",
      "Göz koruma",
      "Estetik görünüm",
    ],
    faq: [
      {
        q: "Cam filmi yasal mı?",
        a: "Ön camlarda sınırlamalar var, yan ve arka camlar için yasal.",
      },
      {
        q: "Hangi tonlar mevcut?",
        a: "Çok açıktan çok koyuya geniş ton seçenekleri sunuyoruz.",
      },
    ],
  },
];

const HizmetlerPage = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | PLATIN DETAILING</title>
        <meta
          name="description"
          content="PPF kaplama, seramik kaplama, pasta cila, iç kuaför ve cam filmi hizmetleri. Başakşehir'de premium araç bakımı."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-charcoal">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-platinum/20 bg-platinum/5 text-platinum text-sm tracking-[0.2em] uppercase mb-6">
                Hizmetlerimiz
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                İşçilik <span className="text-gradient-platinum">platin seviyede</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Her hizmet, aracınıza özel yaklaşımla, premium ürünlerle ve uzman ekibimizle sunulur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="card-premium rounded-2xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl border border-border bg-charcoal">
                        <service.icon className="w-8 h-8 text-platinum" />
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* For Whom */}
                    <div className="mb-8">
                      <h3 className="font-display text-lg text-foreground mb-4">
                        Kimler için?
                      </h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {service.forWhom.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-platinum flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-4">
                        Ne kazandırır?
                      </h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {service.benefits.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-gold flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right - FAQ */}
                  <div className="lg:border-l lg:border-border lg:pl-12">
                    <div className="flex items-center gap-2 mb-6">
                      <HelpCircle className="w-5 h-5 text-platinum" />
                      <h3 className="font-display text-lg text-foreground">
                        Sık Sorulan Sorular
                      </h3>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                      {service.faq.map((item, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${service.id}-${faqIndex}`}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-foreground text-left hover:no-underline py-4">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-4">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  );
};

export default HizmetlerPage;
