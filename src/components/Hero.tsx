import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Trophy, Sparkles, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-bootcamp.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative blurs */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6 py-8">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-xl font-bold text-background font-display">
              21
            </div>
            <span className="font-semibold text-foreground text-lg">
              Day Bootcamp
            </span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#program" className="hover:text-foreground transition-colors">Program</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
            <a href="#sponsor" className="hover:text-foreground transition-colors">Sponsor</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Contact
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              Sponsor Now
            </Button>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm"
            >
              <div className="flex items-center gap-1 bg-emerald-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                <Star className="h-3 w-3 fill-current" />
                Success
              </div>
              <span className="text-muted-foreground font-medium">2 Cohorts Completed</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground"
            >
              <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-lg">Transform</span>{" "}
              Youth Into
              <br />
              Leaders{" "}
              <span className="inline-flex items-center justify-center mx-2 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>{" "}
              Build
              <br />
              Futures{" "}
              <span className="inline-flex items-center justify-center mx-2 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-secondary/20 text-secondary">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>{" "}
              Together
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              21-day intensive bootcamp empowering Ethiopian youth with career skills, 
              leadership training, and community service — for just 5,000 Birr per participant.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="xl" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base font-semibold shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  Get Started
                </span>
              </Button>
              <Button variant="ghost" size="xl" className="text-muted-foreground hover:text-foreground h-14 text-base font-medium">
                See How It Works
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <motion.path
                d="M200,80 L200,180"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.path
                d="M200,280 L200,340 L120,400"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d="M200,280 L200,340 L280,400"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              {/* Connection dots */}
              <motion.circle cx="200" cy="180" r="4" fill="hsl(var(--secondary))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
              <motion.circle cx="200" cy="340" r="4" fill="hsl(var(--primary))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
            </svg>

            {/* Avatars cluster */}
            <motion.div 
              className="absolute right-0 top-0 flex -space-x-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[heroImage, heroImage, heroImage].map((_, i) => (
                <div key={i} className="h-12 w-12 rounded-full border-3 border-background bg-muted overflow-hidden shadow-md">
                  <img src={heroImage} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>

            {/* Card 1 - Program Info */}
            <motion.div
              className="absolute left-12 top-12 w-72 rounded-2xl bg-card border border-border p-5 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold text-foreground">Program</div>
                <div className="ml-auto flex gap-1">
                  <div className="h-6 w-6 rounded-lg bg-muted flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  21 Days Intensive Training
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Career & Leadership Skills
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Career</span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Leadership</span>
              </div>
            </motion.div>

            {/* Card 2 - Impact */}
            <motion.div
              className="absolute left-24 top-56 w-72 rounded-2xl bg-card border border-border p-5 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div className="font-semibold text-foreground">Dual Impact</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Individual Skill Development
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Community Service Projects
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">Priority:</span>
                <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-600">High</span>
                <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-600">Urgent</span>
              </div>
            </motion.div>

            {/* Card 3 - Outcomes */}
            <motion.div
              className="absolute left-0 bottom-16 w-56 rounded-2xl bg-card border border-border p-4 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Trophy className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="font-semibold text-sm text-foreground">Outcome 1</div>
              </div>
              <div className="text-sm text-muted-foreground">Job-Ready Skills</div>
              <div className="mt-2 text-xs text-muted-foreground">
                Prepared for <span className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 font-medium">Employment</span>
              </div>
            </motion.div>

            {/* Card 4 - Community */}
            <motion.div
              className="absolute right-0 bottom-16 w-56 rounded-2xl bg-card border border-border p-4 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                  <Users className="h-4 w-4 text-violet-600" />
                </div>
                <div className="font-semibold text-sm text-foreground">Outcome 2</div>
              </div>
              <div className="text-sm text-muted-foreground">Community Impact</div>
              <div className="mt-2 text-xs text-muted-foreground">
                Serve with <span className="inline-flex items-center rounded bg-secondary/10 px-1.5 py-0.5 font-medium text-secondary">Purpose</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
