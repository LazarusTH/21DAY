import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiArrowRight, HiOutlineMail, HiOutlinePhone, HiOutlineSparkles } from "react-icons/hi";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      {/* Subtle grid background - matching hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Decorative blurs - matching hero style */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-background/10 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-background"
        >
          {/* Decorative badge - matching hero style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-sm px-4 py-2 text-sm border border-background/20"
          >
            <HiOutlineSparkles className="h-4 w-4 text-secondary" />
            <span className="text-background/80 font-medium">Transform Lives Today</span>
          </motion.div>

          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to Make an{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-secondary to-primary text-foreground px-3 py-1 rounded-xl">Impact</span>
            </span>
            ?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-background/70 max-w-2xl mx-auto">
            Join us in empowering the next generation of Ethiopian leaders. 
            Your sponsorship creates a ripple effect of positive change in 
            careers and communities.
          </p>

          {/* CTA Button - Single focused action */}
          <div className="mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-foreground/20">
                    <HiArrowRight className="h-3 w-3" />
                  </span>
                  Sponsor Now
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Contact cards - matching brand style */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              href="mailto:contact@21daybootcamp.com"
              className="flex items-center gap-3 rounded-2xl border border-background/20 bg-background/5 backdrop-blur-sm px-5 py-3 transition-all hover:bg-background/10 hover:border-secondary/30"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 border border-background/10">
                <HiOutlineMail className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm text-background/80">contact@21daybootcamp.com</span>
            </motion.a>
            <motion.a 
              href="tel:+251911234567"
              className="flex items-center gap-3 rounded-2xl border border-background/20 bg-background/5 backdrop-blur-sm px-5 py-3 transition-all hover:bg-background/10 hover:border-secondary/30"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 border border-background/10">
                <HiOutlinePhone className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm text-background/80">+251 91 123 4567</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-background/10 pt-8 text-center text-sm text-background/50"
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
