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
import mercedesGtBlack from "@/assets/gallery/mercedes-gt-black.jpg";
import bmwX5White from "@/assets/gallery/bmw-x5-white.jpg";
import volvoS60Red from "@/assets/gallery/volvo-s60-red.jpg";
import bmw5Brown from "@/assets/gallery/bmw-5-brown.jpg";
import audiA6Black from "@/assets/gallery/audi-a6-black.jpg";
import porscheCayenneWhite from "@/assets/gallery/porsche-cayenne-white.jpg";
import bmwM4MatteGrey from "@/assets/gallery/bmw-m4-matte-grey.jpg";
import electricCarGrey from "@/assets/gallery/electric-car-grey.jpg";
import maybachTwotone from "@/assets/gallery/maybach-twotone.jpg";
import audiS3Blue from "@/assets/gallery/audi-s3-blue.jpg";
import bmw3Grey from "@/assets/gallery/bmw-3-grey.jpg";
import audiQ5White from "@/assets/gallery/audi-q5-white.jpg";
import bmw3Black from "@/assets/gallery/bmw-3-black.jpg";
import mercedesCWhite from "@/assets/gallery/mercedes-c-white.jpg";
import rangeRoverVelarBlack from "@/assets/gallery/range-rover-velar-black.jpg";
import porschePanameraRear from "@/assets/gallery/porsche-panamera-rear.jpg";
import toggBlack from "@/assets/gallery/togg-black.jpg";
import mercedesCClassBlack from "@/assets/gallery/mercedes-c-class-black.jpg";
import porschePanameraBlack from "@/assets/gallery/porsche-panamera-black.jpg";
import audiA5Black from "@/assets/gallery/audi-a5-black.jpg";
import mercedesSBlack from "@/assets/gallery/mercedes-s-black.jpg";
import bmw2SeriesBlack from "@/assets/gallery/bmw-2-series-black.jpg";
import bmwF30Black from "@/assets/gallery/bmw-f30-black.jpg";
import bmwM4RedRear2 from "@/assets/gallery/bmw-m4-red-rear-2.jpg";
import bmw3SeriesFront from "@/assets/gallery/bmw-3-series-front.jpg";
import bmw4Grey from "@/assets/gallery/bmw-4-grey.jpg";
import miniCooperBlack from "@/assets/gallery/mini-cooper-black.jpg";
import bmwM3Green from "@/assets/gallery/bmw-m3-green.jpg";
import bmw5Black from "@/assets/gallery/bmw-5-black.jpg";
import mercedesECabrioGrey from "@/assets/gallery/mercedes-e-cabrio-grey.jpg";
import audiS3Red from "@/assets/gallery/audi-s3-red.jpg";
import audiS3RedNew from "@/assets/gallery/audi-s3-red-new.jpg";
import bmw5WhiteFront from "@/assets/gallery/bmw-5-white-front.jpg";
import bmw5WhiteSide from "@/assets/gallery/bmw-5-white-side.jpg";

import mercedesEqeBlack from "@/assets/gallery/mercedes-eqe-black.jpg";
import mercedesEqeFront from "@/assets/gallery/mercedes-eqe-front.jpg";
import mustangClassicBlack from "@/assets/gallery/mustang-classic-black.jpg";
import bmw4RedFront from "@/assets/gallery/bmw-4-red-front.jpg";
import bmw4RedSide from "@/assets/gallery/bmw-4-red-side.jpg";
import bmwM3IceBlue from "@/assets/gallery/bmw-m3-iceblue.jpg";
import ferrari458Side from "@/assets/gallery/ferrari-458-side.jpg";
import nissan350zRed from "@/assets/gallery/nissan-350z-red.jpg";
import ferrari458Front from "@/assets/gallery/ferrari-458-front.jpg";
import ferrari458Angle from "@/assets/gallery/ferrari-458-angle.jpg";
import ferrari458Rear from "@/assets/gallery/ferrari-458-rear.jpg";


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
  { id: 59, category: "seramik", src: bmw4RedFront, alt: "BMW 4 Serisi Kırmızı Seramik Kaplama" },
  { id: 7, category: "pasta", src: bmwM4Blue, alt: "BMW M4 Pasta Cila" },
  { id: 8, category: "seramik", src: bentleyBlack, alt: "Bentley Seramik Kaplama" },
  { id: 62, category: "seramik", src: ferrari458Angle, alt: "Ferrari 458 Italia Seramik Kaplama" },
  { id: 57, category: "ppf", src: bmw5WhiteFront, alt: "BMW 5 Serisi Beyaz PPF Kaplama" },
  { id: 9, category: "ppf", src: mercedesEqeBlack, alt: "Mercedes EQE PPF Koruma" },
  { id: 10, category: "ppf", src: bmwM5Brown, alt: "BMW M5 PPF Uygulama" },
  { id: 11, category: "seramik", src: rangeRoverVelar, alt: "Range Rover Velar Seramik" },
  { id: 12, category: "ppf", src: bmwM4RedFront, alt: "BMW M4 Kırmızı PPF" },
  { id: 13, category: "pasta", src: bmwM4RedRear, alt: "BMW M4 Kırmızı Detay" },
  { id: 14, category: "seramik", src: mercedesEqeFront, alt: "Mercedes EQE Seramik Kaplama" },
  { id: 15, category: "pasta", src: bmwM3Orange, alt: "BMW M3 Turuncu Pasta Cila" },
  { id: 16, category: "seramik", src: porschePanamera, alt: "Porsche Panamera Seramik" },
  { id: 17, category: "ppf", src: bmwM2GoldWheels, alt: "BMW M2 Altın Jant PPF" },

  { id: 16, category: "seramik", src: cupraTravascan, alt: "Cupra Tavascan Seramik" },
  { id: 17, category: "ppf", src: bmwM3Red, alt: "BMW M3 Kırmızı PPF" },
  { id: 18, category: "seramik", src: mercedesGtBlack, alt: "Mercedes GT Seramik Kaplama" },
  { id: 63, category: "pasta", src: nissan350zRed, alt: "Nissan 350Z Kırmızı Pasta Cila" },
  { id: 19, category: "ppf", src: bmwX5White, alt: "BMW X5 Beyaz PPF" },
  { id: 20, category: "pasta", src: volvoS60Red, alt: "Volvo S60 Pasta Cila" },
  { id: 60, category: "ppf", src: bmw4RedSide, alt: "BMW 4 Serisi Kırmızı PPF Koruma" },
  { id: 21, category: "seramik", src: audiS3RedNew, alt: "Audi S3 Kırmızı Seramik Kaplama" },
  { id: 22, category: "seramik", src: bmw5Brown, alt: "BMW 5 Serisi Seramik Kaplama" },
  { id: 27, category: "ppf", src: audiA6Black, alt: "Audi A6 PPF Koruma" },
  { id: 28, category: "pasta", src: mustangClassicBlack, alt: "Ford Mustang Klasik Pasta Cila" },
  { id: 29, category: "seramik", src: porscheCayenneWhite, alt: "Porsche Cayenne Seramik" },
  { id: 31, category: "ppf", src: bmwM4MatteGrey, alt: "BMW M4 Mat Gri PPF" },
  { id: 32, category: "seramik", src: electricCarGrey, alt: "Elektrikli Araç Seramik Kaplama" },
  { id: 34, category: "pasta", src: maybachTwotone, alt: "Maybach Pasta Cila" },
  { id: 35, category: "seramik", src: audiS3Blue, alt: "Audi S3 Mavi Seramik Kaplama" },
  { id: 64, category: "ppf", src: ferrari458Side, alt: "Ferrari 458 Italia Yan PPF Kaplama" },
  { id: 36, category: "ppf", src: bmw3Grey, alt: "BMW 3 Serisi Gri PPF" },
  { id: 37, category: "ppf", src: audiQ5White, alt: "Audi Q5 Beyaz PPF" },
  { id: 38, category: "seramik", src: bmw3Black, alt: "BMW 3 Serisi Siyah Seramik" },
  { id: 39, category: "pasta", src: mercedesCWhite, alt: "Mercedes C Beyaz Pasta Cila" },
  { id: 40, category: "ppf", src: rangeRoverVelarBlack, alt: "Range Rover Velar Siyah PPF" },
  { id: 61, category: "seramik", src: bmwM3IceBlue, alt: "BMW M3 Buz Mavisi Seramik Kaplama" },
  { id: 58, category: "seramik", src: bmw5WhiteSide, alt: "BMW 5 Serisi Beyaz Seramik Kaplama" },
  { id: 41, category: "seramik", src: porschePanameraRear, alt: "Porsche Panamera Arka Seramik" },
  { id: 42, category: "ppf", src: toggBlack, alt: "Togg T10X Siyah PPF" },
  { id: 43, category: "seramik", src: mercedesCClassBlack, alt: "Mercedes C Sınıfı Seramik" },
  { id: 44, category: "pasta", src: porschePanameraBlack, alt: "Porsche Panamera Siyah Pasta Cila" },
  { id: 65, category: "seramik", src: ferrari458Front, alt: "Ferrari 458 Italia Ön Seramik Kaplama" },
  { id: 45, category: "seramik", src: audiA5Black, alt: "Audi A5 Siyah Seramik Kaplama" },
  { id: 46, category: "ppf", src: mercedesSBlack, alt: "Mercedes S Sınıfı Siyah PPF" },
  { id: 47, category: "seramik", src: bmw2SeriesBlack, alt: "BMW 2 Serisi Seramik" },
  { id: 48, category: "ppf", src: bmwF30Black, alt: "BMW F30 Siyah PPF" },
  { id: 49, category: "pasta", src: bmwM4RedRear2, alt: "BMW M4 Kırmızı Arka Pasta Cila" },
  { id: 50, category: "seramik", src: bmw3SeriesFront, alt: "BMW 3 Serisi Ön Seramik" },
  { id: 51, category: "ppf", src: bmw4Grey, alt: "BMW 4 Serisi Gri PPF" },
  { id: 52, category: "seramik", src: miniCooperBlack, alt: "Mini Cooper Siyah Seramik" },
  { id: 53, category: "ppf", src: bmwM3Green, alt: "BMW M3 Yeşil PPF Kaplama" },
  { id: 54, category: "seramik", src: bmw5Black, alt: "BMW 5 Serisi Siyah Seramik" },
  { id: 66, category: "pasta", src: ferrari458Rear, alt: "Ferrari 458 Italia Arka Pasta Cila" },
  { id: 55, category: "seramik", src: mercedesECabrioGrey, alt: "Mercedes E Cabrio Seramik Kaplama" },
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
