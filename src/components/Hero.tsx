import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Trophy, Sparkles, GraduationCap, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient line styles */}
      <style>{`
        @keyframes flowGradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 200%;
          }
        }
        .animated-line {
          background: linear-gradient(
            180deg,
            hsl(var(--secondary)) 0%,
            hsl(var(--primary)) 25%,
            hsl(var(--secondary)) 50%,
            hsl(var(--primary)) 75%,
            hsl(var(--secondary)) 100%
          );
          background-size: 100% 200%;
          animation: flowGradient 2s linear infinite;
        }
        .animated-line-horizontal {
          background: linear-gradient(
            90deg,
            hsl(var(--secondary)) 0%,
            hsl(var(--primary)) 25%,
            hsl(var(--secondary)) 50%,
            hsl(var(--primary)) 75%,
            hsl(var(--secondary)) 100%
          );
          background-size: 200% 100%;
          animation: flowGradientH 2s linear infinite;
        }
        @keyframes flowGradientH {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 8px hsl(var(--secondary) / 0.6);
          }
          50% {
            box-shadow: 0 0 16px hsl(var(--primary) / 0.8);
          }
        }
        .glow-dot {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Decorative blurs */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-secondary/8 blur-[100px]" />
      <div className="absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[80px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14 flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-lg font-bold text-background font-display shadow-md">
              21
            </div>
            <span className="font-semibold text-foreground">
              Day Bootcamp
            </span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#program" className="hover:text-foreground transition-colors">Program</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
            <a href="#sponsor" className="hover:text-foreground transition-colors">Sponsor</a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground">
              Contact
            </Button>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 shadow-md">
              Sponsor Now
            </Button>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:gap-10 lg:grid-cols-[1fr,500px] xl:grid-cols-[1fr,560px]">
          {/* Left Column - Text */}
          <div className="max-w-xl pt-2 lg:pt-6">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-muted/60 backdrop-blur-sm px-4 py-2 text-sm border border-border/50"
            >
              <div className="flex items-center gap-1.5 bg-emerald-500 text-white px-2.5 py-1 rounded-md text-xs font-bold shadow-sm">
                <Star className="h-3 w-3 fill-current" />
                Success
              </div>
              <span className="text-foreground/70 font-medium">2 Cohorts Completed</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 font-display text-[2.75rem] sm:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground"
            >
              <span className="inline-block bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-xl shadow-lg transform -rotate-1">Transform</span>
              <br />
              <span className="mt-2 inline-block">Youth Into Leaders</span>
              <span className="inline-flex items-center justify-center ml-3 h-11 w-11 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 text-primary border border-primary/20">
                <GraduationCap className="h-6 w-6" />
              </span>
              <br />
              <span className="inline-block mt-1">Build Futures</span>
              <span className="inline-flex items-center justify-center ml-3 h-11 w-11 rounded-full bg-gradient-to-br from-secondary/15 to-secondary/5 text-secondary border border-secondary/20">
                <Sparkles className="h-6 w-6" />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-base sm:text-[1.1rem] text-muted-foreground max-w-md leading-relaxed"
            >
              21-day intensive bootcamp empowering Ethiopian youth with career skills, 
              leadership training, and community service — for just <span className="font-semibold text-foreground">5,000 Birr</span> per participant.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-13 text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5">
                <span className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/20">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  Get Started
                </span>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground h-13 text-sm font-medium group">
                See How It Works
                <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex gap-8 pt-8 border-t border-border/50"
            >
              {[
                { value: "21", label: "Days" },
                { value: "100+", label: "Graduates" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Cards with Connection Lines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Top Card - Program Overview */}
            <motion.div
              className="relative z-10 w-full rounded-2xl bg-card/80 backdrop-blur-sm border border-border/80 p-5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold text-foreground text-lg">Program Overview</div>
                <div className="ml-auto">
                  <div className="h-8 w-8 rounded-lg bg-muted/80 flex items-center justify-center border border-border/50">
                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  21 Days Training
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  Career Skills
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Leadership
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Community Service
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1.5 text-xs font-semibold text-secondary border border-secondary/20">Career Ready</span>
                <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/20">Leadership</span>
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">+3</span>
              </div>
            </motion.div>

            {/* Connection Lines Container */}
            <div className="relative h-20 flex items-center justify-center">
              {/* Center vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-10 animated-line rounded-full" />
              
              {/* Glowing center dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-10 h-3 w-3 rounded-full bg-gradient-to-r from-secondary to-primary glow-dot" />
              
              {/* Left branch line */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center">
                {/* Horizontal left */}
                <div className="absolute right-1/2 w-[120px] h-0.5 animated-line-horizontal rounded-full" />
                {/* Vertical down left */}
                <div className="absolute right-[calc(50%+120px)] top-0 w-0.5 h-10 animated-line rounded-full" />
                {/* Left end dot */}
                <div className="absolute right-[calc(50%+118px)] top-10 h-2.5 w-2.5 rounded-full bg-emerald-500 glow-dot" />
              </div>
              
              {/* Right branch line */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center">
                {/* Horizontal right */}
                <div className="absolute left-1/2 w-[120px] h-0.5 animated-line-horizontal rounded-full" />
                {/* Vertical down right */}
                <div className="absolute left-[calc(50%+120px)] top-0 w-0.5 h-10 animated-line rounded-full" />
                {/* Right end dot */}
                <div className="absolute left-[calc(50%+118px)] top-10 h-2.5 w-2.5 rounded-full bg-violet-500 glow-dot" />
              </div>
            </div>

            {/* Bottom Cards - Outcomes */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative z-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/80 p-5 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20">
                    <Trophy className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="font-semibold text-foreground">Outcome 1</div>
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-2">Job-Ready Skills</div>
                <div className="text-xs text-muted-foreground">
                  Prepared for <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 font-semibold text-foreground/70">Employment</span>
                </div>
              </motion.div>

              <motion.div
                className="relative z-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/80 p-5 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20">
                    <Users className="h-4 w-4 text-violet-600" />
                  </div>
                  <div className="font-semibold text-foreground">Outcome 2</div>
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-2">Community Impact</div>
                <div className="text-xs text-muted-foreground">
                  Serve with <span className="inline-flex items-center rounded-md bg-secondary/15 px-2 py-0.5 font-semibold text-secondary">Purpose</span>
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