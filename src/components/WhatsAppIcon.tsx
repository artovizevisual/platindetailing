import whatsappLogo from "@/assets/whatsapp-logo.png.asset.json";

interface WhatsAppIconProps {
  className?: string;
}

export const WhatsAppIcon = ({ className = "w-5 h-5" }: WhatsAppIconProps) => {
  return (
    <img
      src={whatsappLogo.url}
      alt="WhatsApp"
      className={`${className} object-contain`}
    />
  );
};
