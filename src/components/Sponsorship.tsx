import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Coffee, Laptop, Award, Heart, Sparkles, Check } from "lucide-react";
const Sponsorship = () => {
  const includes = [{
    icon: BookOpen,
    label: "21 Days Training"
  }, {
    icon: Laptop,
    label: "Digital Skills"
  }, {
    icon: Coffee,
    label: "Materials"
  }, {
    icon: Award,
    label: "Certification"
  }];
  const benefits = ["Full 21-day curriculum access", "Volunteer project participation", "Certificate upon completion", "Donor recognition benefits", "Impact report & updates"];
  return <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <motion.div initial={{
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          type: "spring",
          stiffness: 200
        }} className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary shadow-lg">
            <Heart className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Invest in a Future{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-secondary">Leader</span>
              <motion.span className="absolute -bottom-1 left-0 h-3 w-full bg-secondary/20" initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.5
            }} style={{
              originX: 0
            }} />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Your sponsorship directly transforms a young person's future while building stronger communities.
          </p>
        </AnimatedSection>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left side - What's included */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="lg:col-span-5">
            <div className="rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-secondary" />
                <span className="font-semibold text-foreground">What's Included</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {includes.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1 + index * 0.1
              }} className="rounded-2xl bg-muted/50 p-4 text-center">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-foreground">{item.label}</div>
                  </motion.div>)}
              </div>

              {/* Impact stats */}
              <div className="flex items-center justify-around py-6 border-t border-border/50">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-foreground">21</div>
                  <div className="text-xs text-muted-foreground">Days</div>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-foreground">2x</div>
                  <div className="text-xs text-muted-foreground">Impact</div>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-foreground">1</div>
                  <div className="text-xs text-muted-foreground">Life Changed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Pricing card */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="lg:col-span-7">
            <div className="relative">
              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 lg:p-10 text-background">
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary via-primary to-secondary opacity-20" style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s linear infinite"
                }} />
                </div>
                
                <style>{`
                  @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                  }
                `}</style>

                <div className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    {/* Left - Price */}
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                        One-Time Sponsorship
                      </div>
                      <div className="flex items-baseline gap-2 mt-4">
                        <span className="font-display text-6xl lg:text-7xl font-bold">5000</span>
                        <span className="text-2xl font-medium text-background/60">Birr</span>
                      </div>
                      <p className="mt-4 text-background/60 max-w-xs">
                        Sponsor one participant through the complete 21-day transformation journey.
                      </p>
                      
                      <Button size="lg" className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                        Sponsor Now
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </div>

                    {/* Right - Benefits */}
                    <div className="lg:max-w-xs">
                      <div className="space-y-4">
                        {benefits.map((benefit, index) => <motion.div key={index} initial={{
                        opacity: 0,
                        x: 20
                      }} whileInView={{
                        opacity: 1,
                        x: 0
                      }} viewport={{
                        once: true
                      }} transition={{
                        delay: 0.3 + index * 0.1
                      }} className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
                              <Check className="h-3.5 w-3.5 text-secondary" />
                            </div>
                            <span className="text-sm text-background/80">{benefit}</span>
                          </motion.div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.6,
              type: "spring"
            }} className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6">
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Sponsorship;