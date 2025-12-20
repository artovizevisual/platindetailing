import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/home/CTABanner";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import gallery images
import bmw5Blue from "@/assets/gallery/bmw-5-blue.jpg";
import rangeRoverBlack from "@/assets/gallery/range-rover-black.jpg";
import bmw4Cabrio from "@/assets/gallery/bmw-4-cabrio.jpg";
import bmwM4Matte from "@/assets/gallery/bmw-m4-matte.jpg";
import electricCar from "@/assets/gallery/electric-car.jpg";
import bmwM5Teal from "@/assets/gallery/bmw-m5-teal.jpg";
import bmwM4Blue from "@/assets/gallery/bmw-m4-blue.jpg";
import bentleyBlack from "@/assets/gallery/bentley-black.jpg";
import bmwM5Brown from "@/assets/gallery/bmw-m5-brown.jpg";
import rangeRoverVelar from "@/assets/gallery/range-rover-velar.jpg";
import bmwM4RedFront from "@/assets/gallery/bmw-m4-red-front.jpg";
import bmwM4RedRear from "@/assets/gallery/bmw-m4-red-rear.jpg";
import bmwM3Orange from "@/assets/gallery/bmw-m3-orange.jpg";
import porschePanamera from "@/assets/gallery/porsche-panamera.jpg";
import bmwM2GoldWheels from "@/assets/gallery/bmw-m2-gold-wheels.jpg";
import cupraTravascan from "@/assets/gallery/cupra-tavascan.jpg";
import bmwM3Red from "@/assets/gallery/bmw-m3-red.jpg";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "ppf", label: "PPF" },
  { id: "seramik", label: "Seramik" },
  { id: "pasta", label: "Pasta Cila" },
];

const galleryItems = [
  { id: 1, category: "ppf", src: bmw5Blue, alt: "BMW 5 Serisi PPF Kaplama" },
  { id: 2, category: "seramik", src: rangeRoverBlack, alt: "Range Rover Seramik Kaplama" },
  { id: 3, category: "ppf", src: bmw4Cabrio, alt: "BMW 4 Serisi Cabrio PPF" },
  { id: 4, category: "pasta", src: bmwM4Matte, alt: "BMW M4 Mat Kaplama" },
  { id: 5, category: "seramik", src: electricCar, alt: "Elektrikli Araç Seramik" },
  { id: 6, category: "ppf", src: bmwM5Teal, alt: "BMW M5 PPF Koruma" },
  { id: 7, category: "pasta", src: bmwM4Blue, alt: "BMW M4 Pasta Cila" },
  { id: 8, category: "seramik", src: bentleyBlack, alt: "Bentley Seramik Kaplama" },
  { id: 9, category: "ppf", src: bmwM5Brown, alt: "BMW M5 PPF Uygulama" },
  { id: 10, category: "seramik", src: rangeRoverVelar, alt: "Range Rover Velar Seramik" },
  { id: 11, category: "ppf", src: bmwM4RedFront, alt: "BMW M4 Kırmızı PPF" },
  { id: 12, category: "pasta", src: bmwM4RedRear, alt: "BMW M4 Kırmızı Detay" },
  { id: 13, category: "pasta", src: bmwM3Orange, alt: "BMW M3 Turuncu Pasta Cila" },
  { id: 14, category: "seramik", src: porschePanamera, alt: "Porsche Panamera Seramik" },
  { id: 15, category: "ppf", src: bmwM2GoldWheels, alt: "BMW M2 Altın Jant PPF" },
  { id: 16, category: "seramik", src: cupraTravascan, alt: "Cupra Tavascan Seramik" },
  { id: 17, category: "ppf", src: bmwM3Red, alt: "BMW M3 Kırmızı PPF" },
];

const GaleriPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Galeri | PLATIN DETAILING</title>
        <meta
          name="description"
          content="PPF, seramik kaplama, pasta cila ve iç kuaför çalışmalarımızdan örnekler. Öncesi/sonrası fotoğraflar."
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
                Galeri
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Aracın <span className="text-gradient-platinum">konuşsun</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Koruma görünmez olur, etki kalır.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-charcoal border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-platinum text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-platinum/50 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground hover:text-platinum transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedIndex > 0 && (
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-border bg-card hover:border-platinum/50 transition-all z-10"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6 text-platinum" />
              </button>
            )}

            {selectedIndex < filteredItems.length - 1 && (
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-border bg-card hover:border-platinum/50 transition-all z-10"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6 text-platinum" />
              </button>
            )}

            <motion.img
              key={filteredItems[selectedIndex].id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filteredItems[selectedIndex].src}
              alt={filteredItems[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GaleriPage;
