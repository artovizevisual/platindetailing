import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";
import platinLogo from "@/assets/platin-logo.jpg";

const WHATSAPP_NUMBER = "905469049644";

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={platinLogo} 
                alt="Platin Detailing Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="font-display text-2xl font-semibold tracking-wider text-gradient-platinum">
                  PLATIN
                </span>
                <span className="font-body text-sm font-light tracking-[0.3em] text-muted-foreground ml-1">
                  DETAILING
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your car on the Platin Stage.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/platindetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-platinum/50 hover:bg-platinum/5 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-platinum" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-foreground">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Anasayfa" },
                { href: "/hizmetler", label: "Hizmetler" },
                { href: "/galeri", label: "Galeri" },
                { href: "/ppf-kaplama", label: "PPF Kaplama" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-platinum transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-foreground">Hizmetler</h4>
            <ul className="space-y-3">
              {[
                "PPF Kaplama",
                "Seramik Kaplama",
                "Pasta Cila",
                "İç Kuaför",
                "Cam Filmi",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-foreground">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-platinum mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Ziya Gökalp, 1. Blok Eskoop Sanayi Sitesi C8-1 Blok No 494, 34490 Başakşehir/İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-platinum flex-shrink-0" />
                <a
                  href="tel:+905469049644"
                  className="text-muted-foreground hover:text-platinum transition-colors duration-300 text-sm"
                >
                  +90 546 904 96 44
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-platinum flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Pzt - Cmt: 09:00 - 20:30
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Platin Detailing. Tüm hakları saklıdır.
          </p>
          <p className="text-muted-foreground text-xs">
            İstanbul / Başakşehir
          </p>
        </div>
      </div>
    </footer>
  );
};
