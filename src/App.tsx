import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Hizmetler from "./pages/Hizmetler";
import Galeri from "./pages/Galeri";
import Paketler from "./pages/Paketler";
import Iletisim from "./pages/Iletisim";
import PPFKaplama from "./pages/PPFKaplama";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hizmetler" element={<Hizmetler />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/paketler" element={<Paketler />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/ppf-kaplama" element={<PPFKaplama />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
