import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PLATIN DETAILING | Premium Car Detailing Başakşehir</title>
        <meta
          name="description"
          content="Başakşehir'de premium araç detailing hizmeti. PPF kaplama, seramik kaplama, pasta cila, iç kuaför ve cam filmi. Your car on the Platin Stage."
        />
        <meta property="og:title" content="PLATIN DETAILING | Premium Car Detailing" />
        <meta
          property="og:description"
          content="PPF, seramik, boya koruma ve detaylı iç temizlikte platin seviye işçilik."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://platindetailing.com" />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <TrustBar />
        <GalleryPreview />
        <ServicesHighlight />
        <ProcessSection />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
};

export default Index;
