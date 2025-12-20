import { motion } from "framer-motion";
import { Award, Eye, Calendar, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "Premium Ürünler",
    description: "Dünya markası film ve kaplama",
  },
  {
    icon: Eye,
    title: "Detay Odaklı",
    description: "Her milimetre özenle işlenir",
  },
  {
    icon: Calendar,
    title: "Randevulu Çalışma",
    description: "Zamanınız değerli",
  },
  {
    icon: Sparkles,
    title: "Şeffaf Süreç",
    description: "Öncesi/sonrası her adımda",
  },
];

export const TrustBar = () => {
  return (
    <section className="py-16 bg-charcoal border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-full border border-border bg-card group-hover:border-platinum/30 group-hover:bg-platinum/5 transition-all duration-300">
                <item.icon className="w-6 h-6 text-platinum" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
