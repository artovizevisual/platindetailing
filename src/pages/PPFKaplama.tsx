import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Check, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "905469049644";
const WHATSAPP_MESSAGE = "Merhaba Emre Bey, Bilgi almak ve Randevu oluşturmak istiyorum.";

const ppfBenefits = [
  "Taş sıçraması ve çiziklere karşı koruma",
  "UV ışınlarına karşı boya koruması",
  "Self-healing (kendi kendine iyileşen) teknoloji",
  "10 yıla kadar üretici garantisi",
  "Aracın değerini korur",
  "Bakımı kolay, temizliği pratik",
];

const ppfFaqs = [
  {
    q: "PPF nedir?",
    a: "Paint Protection Film (PPF), aracınızın boyasını dış etkenlerden koruyan şeffaf, esnek bir film kaplamadır. Taş sıçraması, çizik, böcek asidi ve UV ışınlarına karşı etkili koruma sağlar.",
  },
  {
    q: "Hangi araçlara PPF önerilir?",
    a: "Yeni araçlar, lüks ve spor araçlar, uzun yol yapan araçlar ve değerini korumak isteyen tüm araç sahipleri için önerilir. Özellikle sıfır araç aldıktan sonra hemen uygulatılması tavsiye edilir.",
  },
  {
    q: "Parlak mı yoksa mat PPF mi tercih etmeliyim?",
    a: "Parlak PPF boyanızın doğal görünümünü korur, mat PPF ise saten/mat görünüm sağlar. Araç renginize ve stilinize göre seçim yapabilirsiniz. Mat PPF son yıllarda çok popüler.",
  },
  {
    q: "PPF ne kadar süre dayanır?",
    a: "Kaliteli PPF uygulamaları, doğru bakımla 7-10 yıl dayanabilir. Kullandığımız premium filmler uzun ömürlü ve garantilidir.",
  },
  {
    q: "PPF görünür mü?",
    a: "Profesyonel uygulama ile PPF tamamen görünmezdir. Film kenarları özenle gizlenir ve yüzey pürüzsüz kalır.",
  },
  {
    q: "PPF bakımı nasıl yapılır?",
    a: "Normal araç yıkaması yeterlidir. Sert kimyasallardan kaçınılmalı, özel PPF bakım ürünleri kullanılabilir. Periyodik bakım ömrü uzatır.",
  },
  {
    q: "PPF fiyatları neye göre değişir?",
    a: "Aracın büyüklüğü, kaplama alanı (tam veya kısmi), film kalitesi ve marka tercihine göre fiyatlandırma yapılır. Ücretsiz keşif ile size özel teklif sunuyoruz.",
  },
  {
    q: "PPF ile seramik kaplama birlikte yapılır mı?",
    a: "Evet, ideal kombinasyondur. PPF fiziksel koruma sağlarken, üzerine uygulanan seramik kaplama hidrofobik etki ve ekstra parlaklık kazandırır.",
  },
];

const PPFLandingPage = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <Helmet>
        <title>Başakşehir PPF Kaplama | PLATIN DETAILING</title>
        <meta
          name="description"
          content="Başakşehir'de profesyonel PPF kaplama hizmeti. Taş sıçraması, çizik ve UV'ye karşı araç boyası koruma. 10 yıl garanti. Ücretsiz keşif."
        />
        <meta property="og:title" content="Başakşehir PPF Kaplama | PLATIN DETAILING" />
        <meta
          property="og:description"
          content="Profesyonel PPF kaplama ile aracınızı koruyun. Taş, çizik ve UV koruması. 10 yıl garanti."
        />
        <link rel="canonical" href="https://platindetailing.com/ppf-kaplama" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PLATIN DETAILING",
            description: "Premium araç detailing hizmeti - PPF, seramik kaplama, pasta cila",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ziya Gökalp, 1. Blok Eskoop Sanayi Sitesi C8-1 Blok No 494",
              postalCode: "34490",
              addressLocality: "Başakşehir",
              addressRegion: "İstanbul",
              addressCountry: "TR",
            },
            telephone: "+905469049644",
            priceRange: "$$",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-platinum/5 blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full border border-platinum/20 bg-platinum/5 text-platinum text-sm tracking-[0.2em] uppercase mb-6">
                  Başakşehir • İstanbul
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  Başakşehir <span className="text-gradient-platinum">PPF Kaplama</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Aracınızın boyasını taş sıçraması, çizik ve UV ışınlarına karşı koruyan görünmez zırh. 
                  Premium film, uzman uygulama, 10 yıl garanti.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="whatsapp" size="xl" asChild>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Ücretsiz Fiyat & Randevu
                    </a>
                  </Button>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/galeri" className="flex items-center gap-2">
                      Örnek Çalışmalar
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                PPF'in <span className="text-gradient-platinum">Avantajları</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {ppfBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <Check className="w-5 h-5 text-platinum flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Sık Sorulan <span className="text-gradient-platinum">Sorular</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {ppfFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <AccordionItem
                      value={`faq-${index}`}
                      className="card-premium rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-foreground text-left hover:no-underline py-5 text-lg">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        <section className="py-16 lg:py-24 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-16 h-16 text-platinum mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Aracınızı korumaya başlayın
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                WhatsApp'tan fiyat bilgisi ve randevu alın. Ücretsiz keşif.
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp'tan Fiyat Al
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PPFLandingPage;
