import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "905469049644";
const WHATSAPP_MESSAGE = "Merhaba, bilgi almak istiyorum.";

const IletisimPage = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <Helmet>
        <title>İletişim | PLATIN DETAILING</title>
        <meta
          name="description"
          content="Platin Detailing Başakşehir iletişim bilgileri. Adres, telefon ve WhatsApp ile bize ulaşın."
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
                İletişim
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Bize <span className="text-gradient-platinum">ulaşın</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Sorularınız için bizi arayın veya WhatsApp'tan yazın.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="card-premium rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl border border-border bg-charcoal">
                      <MapPin className="w-6 h-6 text-platinum" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        Adres
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ziya Gökalp, 1. Blok Eskoop Sanayi Sitesi
                        <br />
                        C8-1 Blok No 494, 34490 Başakşehir/İstanbul
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-premium rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl border border-border bg-charcoal">
                      <Phone className="w-6 h-6 text-platinum" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        Telefon
                      </h3>
                      <a
                        href="tel:+905469049644"
                        className="text-muted-foreground hover:text-platinum transition-colors text-lg"
                      >
                        +90 546 904 96 44
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-premium rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl border border-border bg-charcoal">
                      <Clock className="w-6 h-6 text-platinum" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        Çalışma Saatleri
                      </h3>
                      <p className="text-muted-foreground">
                        Pazartesi - Cumartesi: 09:00 - 19:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social & CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="whatsapp" size="xl" className="flex-1" asChild>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp'tan Yaz
                    </a>
                  </Button>
                  <Button variant="hero" size="xl" className="flex-1" asChild>
                    <a
                      href="https://instagram.com/platindetailing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Right - Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-premium rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503.5!2d28.7897!3d41.0645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5a3c5b2e8e7%3A0x8b7c5e9f2a3d4e5f!2sPLATIN%20DETAILING%20%7C%20BA%C5%9EAK%C5%9EEH%C4%B0R%20PPF!5e0!3m2!1str!2str!4v1703000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Platin Detailing Konum"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IletisimPage;
