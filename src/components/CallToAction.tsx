import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiArrowRight, HiOutlineMail, HiOutlinePhone, HiOutlineSparkles } from "react-icons/hi";
const CallToAction = () => {
  return <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle grid background - matching hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Decorative blurs - matching hero style */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} className="mx-auto max-w-3xl text-center text-foreground">
          {/* Decorative badge - matching hero style */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="mb-6 inline-flex items-center rounded-full bg-muted/60 backdrop-blur-sm px-4 py-2 text-sm border border-border/50">
            <span className="text-foreground/70 font-medium">Transform Lives Today</span>
          </motion.div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Ready to Make an{" "}
            <span className="text-secondary">Impact</span>?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Join us in empowering the next generation of Ethiopian leaders. 
            Your sponsorship creates a ripple effect of positive change in 
            careers and communities.
          </p>

          {/* CTA Button - Single focused action */}
          <div className="mb-12">
            
          </div>

          {/* Contact cards - matching brand style */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a href="mailto:contact@21daybootcamp.com" className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-5 py-3 transition-all hover:border-secondary/50 hover:shadow-lg" whileHover={{
            scale: 1.02,
            y: -2
          }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20">
                <HiOutlineMail className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm text-foreground">contact@21daybootcamp.com</span>
            </motion.a>
            <motion.a href="tel:+251911234567" className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-5 py-3 transition-all hover:border-secondary/50 hover:shadow-lg" whileHover={{
            scale: 1.02,
            y: -2
          }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20">
                <HiOutlinePhone className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm text-foreground">+251 91 123 4567</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.7,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="mt-20 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 21-Day Career & Leadership Bootcamp. Founded by Dr. Daniel Digafie.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default CallToAction;