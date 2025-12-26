import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Sparkles, Users, Heart, Trophy } from "lucide-react";

const floatingStats = [
  { icon: Users, value: "500+", label: "Lives Changed", position: "left-[5%] top-[20%]" },
  { icon: Heart, value: "100%", label: "Dedication", position: "right-[5%] top-[15%]" },
  { icon: Trophy, value: "21", label: "Days Program", position: "left-[8%] bottom-[25%]" },
  { icon: Sparkles, value: "∞", label: "Possibilities", position: "right-[8%] bottom-[20%]" },
];

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-32">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1], 
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1], 
          x: [0, -50, 0],
          opacity: [0.15, 0.3, 0.15] 
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating stats cards */}
      {floatingStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={`absolute ${stat.position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md p-4 text-primary-foreground"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity }}
          >
            <stat.icon className="mb-2 h-5 w-5 opacity-80" />
            <div className="text-2xl font-bold font-display">{stat.value}</div>
            <div className="text-xs opacity-70">{stat.label}</div>
          </motion.div>
        </motion.div>
      ))}

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-primary-foreground"
        >
          {/* Decorative badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Transform Lives Today</span>
          </motion.div>

          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to Make an{" "}
            <span className="relative">
              Impact
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
            ?
          </h2>
          <p className="mb-10 text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
            Join us in empowering the next generation of Ethiopian leaders. 
            Your sponsorship creates a ripple effect of positive change in 
            careers and communities.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="secondary" 
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl shadow-black/20"
              >
                <span>Sponsor Now</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="hero-outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Contact cards */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              href="mailto:contact@21daybootcamp.com"
              className="flex items-center gap-3 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-3 backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-sm">contact@21daybootcamp.com</span>
            </motion.a>
            <motion.a 
              href="tel:+251911234567"
              className="flex items-center gap-3 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-3 backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-sm">+251 91 123 4567</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60"
        >
          <p>
            © 2025 21-Day Career & Leadership Bootcamp. Founded by Dr. Daniel Digafie.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
