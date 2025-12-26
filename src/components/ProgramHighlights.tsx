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

  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-20 top-1/2 h-80 w-80 rounded-full border border-secondary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-10 bottom-1/4 h-60 w-60 rounded-full border border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Program Structure
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A Proven Framework for{" "}
            <span className="text-gradient">Success</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Our holistic curriculum addresses the gaps between academic knowledge 
            and workplace readiness.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="scale"
            >
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:border-secondary/30 hover:shadow-elevated"
                whileHover={{ y: -5 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <motion.div 
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground"
                    whileHover={{ rotate: 5 }}
                  >
                    <highlight.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline indicator */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero font-display text-xl font-bold text-primary-foreground">
                  21
                </div>
                <div>
                  <div className="font-semibold text-foreground">Days to Transform</div>
                  <div className="text-sm text-muted-foreground">Intensive but achievable</div>
                </div>
              </div>
              <div className="hidden h-1 flex-1 mx-8 rounded-full bg-muted sm:block">
                <motion.div
                  className="h-full rounded-full bg-gradient-warm"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-right font-semibold text-foreground">Career Ready</div>
                  <div className="text-right text-sm text-muted-foreground">Confident & skilled</div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-2xl">
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
