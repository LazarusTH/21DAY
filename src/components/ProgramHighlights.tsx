import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Calendar, Users, Award, TrendingUp, BookOpen, Heart } from "lucide-react";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "21-Day Curriculum",
      description: "Structured daily sessions combining theory with practical application",
    },
    {
      icon: Users,
      title: "Cohort-Based Learning",
      description: "Build lasting connections with peers on the same journey",
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Soft skills, digital presence, and emotional intelligence training",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Mandatory volunteer projects creating real community impact",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized certificate upon successful program completion",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Measurable transformation in employability and confidence",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedHighlights = [...highlights, ...highlights];

  return (
    <section id="program" className="relative overflow-hidden bg-muted/30 py-24">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold text-secondary tracking-wider uppercase">
            Program Structure
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            A Proven Framework for{" "}
            <span className="text-secondary">Success</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Our holistic curriculum addresses the gaps between academic knowledge 
            and workplace readiness.
          </p>
        </AnimatedSection>
      </div>

      {/* Scrolling container with fade edges */}
      <div className="relative mt-8">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-40 bg-gradient-to-r from-muted/30 via-muted/30 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-40 bg-gradient-to-l from-muted/30 via-muted/30 to-transparent" />

        {/* Auto-scrolling row */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 80,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-72 overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-secondary/30"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline indicator */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-lg font-bold text-white shadow-md">
                  21
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Days to Transform</div>
                  <div className="text-xs text-muted-foreground">Intensive but achievable</div>
                </div>
              </div>
              <div className="hidden h-1.5 flex-1 mx-6 rounded-full bg-muted sm:block overflow-hidden relative">
                {/* Background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full" />
                {/* Animated flowing gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Main progress bar */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary relative"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Shimmer on top */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                </motion.div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-right font-semibold text-foreground text-sm">Career Ready</div>
                  <div className="text-right text-xs text-muted-foreground">Confident & skilled</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-xl">
                  🎯
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProgramHighlights;