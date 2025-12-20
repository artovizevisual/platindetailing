import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/home/CTABanner";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "ppf", label: "PPF" },
  { id: "seramik", label: "Seramik" },
  { id: "pasta", label: "Pasta Cila" },
  { id: "ic", label: "İç Kuaför" },
  { id: "cam", label: "Cam Filmi" },
];

const galleryItems = [
  { id: 1, category: "ppf", src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", alt: "PPF kaplama" },
  { id: 2, category: "seramik", src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", alt: "Seramik kaplama" },
  { id: 3, category: "pasta", src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80", alt: "Pasta cila" },
  { id: 4, category: "ic", src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80", alt: "İç temizlik" },
  { id: 5, category: "cam", src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", alt: "Cam filmi" },
  { id: 6, category: "ppf", src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80", alt: "PPF detay" },
  { id: 7, category: "seramik", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", alt: "Seramik parlaklık" },
  { id: 8, category: "pasta", src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", alt: "Boya düzeltme" },
  { id: 9, category: "ppf", src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80", alt: "PPF uygulama" },
  { id: 10, category: "ic", src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80", alt: "İç mekan detay" },
  { id: 11, category: "cam", src: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80", alt: "Cam filmi sonuç" },
  { id: 12, category: "seramik", src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", alt: "Seramik finish" },
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
