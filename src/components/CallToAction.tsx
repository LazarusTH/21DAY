import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary-foreground/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-primary-foreground"
        >
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Make an Impact?
          </h2>
          <p className="mb-10 text-lg leading-relaxed opacity-80">
            Join us in empowering the next generation of Ethiopian leaders. 
            Your sponsorship creates a ripple effect of positive change in 
            careers and communities.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Sponsor Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a 
              href="mailto:contact@21daybootcamp.com" 
              className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
            >
              <Mail className="h-4 w-4" />
              <span>contact@21daybootcamp.com</span>
            </a>
            <a 
              href="tel:+251911234567" 
              className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
            >
              <Phone className="h-4 w-4" />
              <span>+251 91 123 4567</span>
            </a>
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
