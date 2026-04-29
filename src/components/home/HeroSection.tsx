import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "905469049644";
const WHATSAPP_MESSAGE = "Merhaba Emre Bey, Bilgi almak ve Randevu oluşturmak istiyorum.";

export const HeroSection = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-platinum/5 via-transparent to-transparent" />
        
        {/* Animated glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-platinum/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--platinum)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--platinum)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-platinum/20 bg-platinum/5 text-platinum text-sm tracking-[0.2em] uppercase">
              Premium Car Detailing
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8"
          >
            <span className="text-foreground">Aracın görünüşü</span>
            <br />
            <span className="text-foreground">bir detay değil.</span>
            <br />
            <span className="text-gradient-platinum">Bir duruş.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            PPF, seramik, boya koruma ve detaylı iç temizlikte platin seviye işçilik.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp'tan Randevu Al
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/hizmetler">Hizmetleri İncele</Link>
            </Button>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 text-muted-foreground text-sm tracking-wider"
          >
            İstanbul / Başakşehir
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => {
            document.getElementById("galeri-onizleme")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-platinum transition-colors cursor-pointer"
          aria-label="Galeriye kaydır"
        >
          <span className="text-xs tracking-wider uppercase">Keşfet</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};
