import AnimatedSection from "./AnimatedSection";
import { Briefcase, Heart, Target, Users } from "lucide-react";

const DualImpact = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: "Professional Skills",
      description: "Develop soft skills, professional etiquette, digital presence, and emotional intelligence for career success.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Mandatory volunteer projects that create real impact while building leadership and teamwork skills.",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  const outcomes = [
    { icon: Target, label: "Job-Ready Professionals" },
    { icon: Users, label: "Community Development" },
  ];

  return (
    <section className="relative overflow-hidden bg-card py-24">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-muted to-transparent" />
      </div>

      <div className="container relative mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Dual-Impact Model
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Transform Yourself,{" "}
            <span className="text-gradient">Transform Your Community</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
              direction={index === 0 ? "left" : "right"}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:shadow-elevated">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${pillar.color}`}>
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Outcomes */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-full bg-muted px-6 py-3"
              >
                <outcome.icon className="h-5 w-5 text-secondary" />
                <span className="font-medium text-foreground">{outcome.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DualImpact;
