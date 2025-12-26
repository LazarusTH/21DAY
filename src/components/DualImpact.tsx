import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, Heart, Target, Users, ArrowRight, Zap } from "lucide-react";

const DualImpact = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: "Professional Skills",
      description: "Develop soft skills, professional etiquette, digital presence, and emotional intelligence for career success.",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconBg: "bg-primary/15 text-primary border-primary/20",
      number: "01",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Mandatory volunteer projects that create real impact while building leadership and teamwork skills.",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
      iconBg: "bg-secondary/15 text-secondary border-secondary/20",
      number: "02",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-20">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-secondary/5 blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 lg:mb-20">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary shadow-lg"
            >
              <Zap className="h-8 w-8 text-white" />
            </motion.div>
            <span className="mb-4 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-muted-foreground">
              Dual-Impact Model
            </span>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Transform Yourself,{" "}
              <span className="relative">
                <span className="relative z-10 text-secondary">Transform Your Community</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-3 w-full bg-secondary/20 -z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Main Content - Bento Style */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Pillar Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-8 lg:p-10">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillars[0].gradient} opacity-50`} />
              
              {/* Number */}
              <span className="absolute right-6 top-6 font-display text-6xl font-bold text-muted/30">
                {pillars[0].number}
              </span>
              
              <div className="relative">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${pillars[0].iconBg}`}>
                  <Briefcase className="h-7 w-7" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-foreground lg:text-3xl">
                  {pillars[0].title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {pillars[0].description}
                </p>
                
                {/* Skills tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Soft Skills", "Digital Presence", "Etiquette"].map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/20" />
            </div>
          </motion.div>

          {/* Center - Connection Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-2 items-center justify-center"
          >
            <div className="relative flex flex-col items-center gap-4">
              {/* Animated connection line */}
              <div className="h-20 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary rounded-full overflow-hidden">
                <motion.div
                  className="h-8 w-full bg-white/50"
                  animate={{ y: ["-100%", "300%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Center icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-xl">
                <ArrowRight className="h-6 w-6 text-white rotate-90" />
              </div>
              
              <div className="h-20 w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-8 w-full bg-white/50"
                  animate={{ y: ["-100%", "300%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Pillar Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-8 lg:p-10">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillars[1].gradient} opacity-50`} />
              
              {/* Number */}
              <span className="absolute right-6 top-6 font-display text-6xl font-bold text-muted/30">
                {pillars[1].number}
              </span>
              
              <div className="relative">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${pillars[1].iconBg}`}>
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-foreground lg:text-3xl">
                  {pillars[1].title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {pillars[1].description}
                </p>
                
                {/* Skills tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Volunteering", "Leadership", "Teamwork"].map((skill) => (
                    <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/0 transition-all duration-500 group-hover:border-secondary/20" />
            </div>
          </motion.div>
        </div>

        {/* Outcomes Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 rounded-2xl bg-card border border-border/80 px-6 py-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Job-Ready Professionals</span>
            </div>
            
            <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="flex items-center gap-3 rounded-2xl bg-card border border-border/80 px-6 py-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Users className="h-5 w-5 text-secondary" />
              </div>
              <span className="font-semibold text-foreground">Community Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualImpact;