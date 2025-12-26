import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bootcamp.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-subtle">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative mx-auto px-6 py-12 lg:py-20">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-2xl font-bold text-primary-foreground font-display">
              21
            </div>
            <span className="hidden font-semibold text-foreground sm:block">
              Day Bootcamp
            </span>
          </div>
          <Button variant="hero" size="lg">
            Sponsor Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.nav>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary"
            >
              <Sparkles className="h-4 w-4" />
              Now in our 2nd successful cohort
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              21-Day Career &{" "}
              <span className="text-gradient">Leadership</span>{" "}
              Bootcamp
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Empowering Ethiopian youth with skills for tomorrow. Transform into a 
              job-ready, confident, and purpose-driven professional through our 
              unique dual-impact model.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl">
                Sponsor a Participant
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: "21", label: "Days of Training" },
                { value: "5000", label: "Birr per Participant" },
                { value: "2", label: "Successful Cohorts" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="font-display text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={heroImage}
                  alt="Young professionals in leadership training workshop"
                  className="aspect-[4/3] w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Dr. Daniel Digafie</div>
                    <div className="text-xs text-muted-foreground">Program Founder</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
