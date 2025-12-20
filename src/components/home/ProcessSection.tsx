import { motion } from "framer-motion";
import { Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Keşif & İhtiyaç",
    description: "Aracınızı inceliyor, ihtiyaçlarınızı dinliyor, size en uygun çözümü öneriyoruz.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Uygulama & Kontrol",
    description: "Uzman ekibimiz, premium ürünlerle titiz bir uygulama gerçekleştiriyor.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Teslim & Bakım Önerileri",
    description: "Aracınızı teslim ediyor, uzun ömürlü koruma için bakım önerileri sunuyoruz.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-platinum/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-platinum/20 to-transparent" />

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
            Süreç
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Nasıl <span className="text-gradient-platinum">çalışıyoruz</span>?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-platinum/10 blur-xl group-hover:bg-platinum/20 transition-all duration-500" />
                <div className="relative w-24 h-24 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-platinum/30 transition-all duration-300">
                  <span className="font-display text-3xl text-gradient-platinum">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <step.icon className="w-6 h-6 text-platinum" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
