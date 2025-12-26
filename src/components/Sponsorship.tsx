import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Coffee, Laptop, Award } from "lucide-react";

const Sponsorship = () => {
  const includes = [
    { icon: BookOpen, label: "21 Days of Intensive Training" },
    { icon: Coffee, label: "Materials & Resources" },
    { icon: Laptop, label: "Digital Skills Development" },
    { icon: Award, label: "Certification & Portfolio" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-24">
      {/* Decorative circles */}
      <motion.div
        className="absolute right-10 top-10 h-64 w-64 rounded-full border border-secondary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -left-20 bottom-20 h-48 w-48 rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <AnimatedSection direction="left">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Investment in Future Leaders
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Sponsor a Participant for{" "}
              <span className="text-gradient">5000 Birr</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Your sponsorship directly funds both a young person's employability 
              training and their contribution to community development through 
              structured volunteer projects.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="xl">
              Become a Sponsor
              <ArrowRight className="h-5 w-5" />
            </Button>
          </AnimatedSection>

          {/* Right - Visual */}
          <AnimatedSection direction="scale" delay={0.2}>
            <div className="relative">
              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-elevated">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />
                
                <div className="relative">
                  <div className="mb-2 text-sm font-medium opacity-80">
                    One-Time Sponsorship
                  </div>
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="font-display text-6xl font-bold">5000</span>
                    <span className="text-2xl font-medium opacity-80">Birr</span>
                  </div>
                  
                  <div className="mb-8 h-px bg-primary-foreground/20" />
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/30">
                        ✓
                      </div>
                      <span>Full 21-day curriculum access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/30">
                        ✓
                      </div>
                      <span>Volunteer project participation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/30">
                        ✓
                      </div>
                      <span>Certificate upon completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/30">
                        ✓
                      </div>
                      <span>Donor recognition benefits</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating testimonial */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-4 max-w-xs rounded-xl bg-card p-4 shadow-elevated"
              >
                <p className="mb-2 text-sm italic text-muted-foreground">
                  "This program transformed not just my career prospects, but my entire outlook on life."
                </p>
                <div className="text-xs font-medium text-foreground">
                  — Cohort 1 Graduate
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
