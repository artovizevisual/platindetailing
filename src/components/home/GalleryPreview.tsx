import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

// Import gallery images
import bmw5Blue from "@/assets/gallery/bmw-5-blue.jpg";
import rangeRoverBlack from "@/assets/gallery/range-rover-black.jpg";
import bmw4Cabrio from "@/assets/gallery/bmw-4-cabrio.jpg";
import bmwM4Matte from "@/assets/gallery/bmw-m4-matte.jpg";
import electricCar from "@/assets/gallery/electric-car.jpg";
import bmwM5Teal from "@/assets/gallery/bmw-m5-teal.jpg";

const galleryImages = [
  {
    id: 1,
    src: bmw5Blue,
    alt: "BMW 5 Serisi PPF Kaplama",
    category: "PPF",
  },
  {
    id: 2,
    src: rangeRoverBlack,
    alt: "Range Rover Seramik Kaplama",
    category: "Seramik",
  },
  {
    id: 3,
    src: bmw4Cabrio,
    alt: "BMW 4 Serisi Cabrio PPF",
    category: "PPF",
  },
  {
    id: 4,
    src: bmwM4Matte,
    alt: "BMW M4 Mat Kaplama",
    category: "Pasta Cila",
  },
  {
    id: 5,
    src: electricCar,
    alt: "Elektrikli Araç Seramik",
    category: "Seramik",
  },
  {
    id: 6,
    src: bmwM5Teal,
    alt: "BMW M5 PPF Koruma",
    category: "PPF",
  },
];

export const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-charcoal">
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
            Galeri
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Aracın <span className="text-gradient-platinum">konuşsun</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Koruma görünmez olur, etki kalır.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-platinum text-sm font-medium">
                  {image.category}
                </span>
              </div>
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
            to="/galeri"
            className="inline-flex items-center gap-2 text-platinum hover:text-platinum-light transition-colors duration-300 group"
          >
            <span className="font-body">Tüm galeriyi görüntüle</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground hover:text-platinum transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
