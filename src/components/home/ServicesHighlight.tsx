import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Droplets, Sparkles, Car, Sun, Crown, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "PPF Kaplama",
    description: "Görünmez zırh. Taş, çizik ve dış etkenlerden koruma.",
    href: "/ppf-kaplama",
  },
  {
    icon: Droplets,
    title: "Seramik Kaplama",
    description: "Hidrofobik yüzey. Uzun süreli parlaklık ve koruma.",
    href: "/hizmetler",
  },
  {
    icon: Sparkles,
    title: "Pasta Cila",
    description: "Boya düzeltme. Swirl ve ince çizik giderme.",
    href: "/hizmetler",
  },
  {
    icon: Car,
    title: "İç Kuaför",
    description: "Detaylı iç temizlik. Deri bakım ve koku giderme.",
    href: "/hizmetler",
  },
  {
    icon: Sun,
    title: "Cam Filmi",
    description: "UV koruma. Isı yalıtımı ve mahremiyet.",
    href: "/hizmetler",
  },
  {
    icon: Crown,
    title: "VIP Yıkama",
    description: "Premium dış yıkama. Özel ürünlerle bakım.",
    href: "/hizmetler",
  },
];

export const ServicesHighlight = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-platinum/20 bg-platinum/5 text-platinum text-sm tracking-[0.2em] uppercase mb-6">
            Hizmetlerimiz
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Detay <span className="text-gradient-platinum">fark yaratır</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İşçilik platin seviyede. Her hizmet, aracınıza özel yaklaşımla.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                to={service.href}
                className="group block h-full card-premium p-8 rounded-xl transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg border border-border bg-charcoal group-hover:border-platinum/30 group-hover:bg-platinum/10 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-platinum" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gradient-platinum transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 text-platinum hover:text-platinum-light transition-colors duration-300 group"
          >
            <span className="font-body">Tüm hizmetleri görüntüle</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
