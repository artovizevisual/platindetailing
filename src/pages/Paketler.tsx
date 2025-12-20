import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, Crown, Shield, Sparkles, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "905469049644";

const packages = [
  {
    id: "essential",
    icon: Sparkles,
    name: "Essential",
    tagline: "Temel bakım paketi",
    features: [
      "VIP dış yıkama",
      "Detaylı iç temizlik",
      "Lastik & jant bakımı",
      "Cam temizliği",
    ],
    popular: false,
  },
  {
    id: "protection",
    icon: Shield,
    name: "Protection",
    tagline: "Koruma odaklı paket",
    features: [
      "Essential paketi dahil",
      "Seramik kaplama",
      "Boya koruma",
      "6 ay garanti",
    ],
    popular: true,
  },
  {
    id: "ultimate",
    icon: Crown,
    name: "Ultimate",
    tagline: "Tam koruma paketi",
    features: [
      "Protection paketi dahil",
      "PPF kaplama (seçili bölgeler)",
      "Premium detay işçilik",
      "1 yıl garanti",
    ],
    popular: false,
  },
];

const serviceOptions = [
  "PPF Kaplama",
  "Seramik Kaplama",
  "Pasta Cila",
  "İç Kuaför",
  "Cam Filmi",
  "VIP Yıkama",
  "Essential Paket",
  "Protection Paket",
  "Ultimate Paket",
];

const PaketlerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Merhaba, randevu almak istiyorum.

Ad: ${formData.name}
Telefon: ${formData.phone}
Araç: ${formData.vehicle}
Hizmet: ${formData.service}
Not: ${formData.note || "-"}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("WhatsApp'a yönlendiriliyorsunuz...");
  };

  return (
    <>
      <Helmet>
        <title>Paketler & Randevu | PLATIN DETAILING</title>
        <meta
          name="description"
          content="Essential, Protection ve Ultimate paketlerimiz ile aracınıza en uygun bakımı seçin. Online randevu alın."
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
                Paketler & Randevu
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Aracına <span className="text-gradient-platinum">uygun paketi</span> seç
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                İhtiyacına göre hazırlanmış paketlerimiz veya özel teklif için randevu al.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative card-premium rounded-2xl p-8 ${
                    pkg.popular ? "ring-2 ring-platinum" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-platinum text-primary-foreground text-xs font-semibold">
                        En Popüler
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="inline-flex p-4 rounded-xl border border-border bg-charcoal mb-4">
                      <pkg.icon className="w-8 h-8 text-platinum" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-platinum flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.popular ? "platinum" : "hero"}
                    className="w-full"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, service: `${pkg.name} Paket` }))
                    }
                  >
                    Teklif Al
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="randevu" className="py-16 lg:py-24 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  Randevu Al
                </h2>
                <p className="text-muted-foreground">
                  Formu doldurun, size uygun saatleri gönderelim.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                onSubmit={handleSubmit}
                className="card-premium rounded-2xl p-8 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Adınız"
                      required
                      className="bg-charcoal border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="05XX XXX XX XX"
                      required
                      className="bg-charcoal border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle">Araç Modeli</Label>
                  <Input
                    id="vehicle"
                    value={formData.vehicle}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, vehicle: e.target.value }))
                    }
                    placeholder="Örn: BMW 320i 2023"
                    required
                    className="bg-charcoal border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">İstenen Hizmet</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, service: e.target.value }))
                    }
                    required
                    className="w-full h-10 px-3 rounded-md border border-border bg-charcoal text-foreground"
                  >
                    <option value="">Seçiniz</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Not (Opsiyonel)</Label>
                  <Textarea
                    id="note"
                    value={formData.note}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, note: e.target.value }))
                    }
                    placeholder="Ek bilgi veya istekleriniz..."
                    rows={4}
                    className="bg-charcoal border-border"
                  />
                </div>

                <Button type="submit" variant="whatsapp" size="xl" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp'a Gönder
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PaketlerPage;
