import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Trophy, Sparkles, GraduationCap, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative blurs */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-lg font-bold text-background font-display">
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
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Contact
            </Button>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5">
              Sponsor Now
            </Button>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:gap-8 lg:grid-cols-[1fr,480px] xl:grid-cols-[1fr,540px]">
          {/* Left Column - Text */}
          <div className="max-w-xl pt-4 lg:pt-8">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-muted/80 px-3 py-1.5 text-sm"
            >
              <div className="flex items-center gap-1 bg-emerald-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                <Star className="h-3 w-3 fill-current" />
                Success
              </div>
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">2 Cohorts Completed</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight text-foreground"
            >
              <span className="inline-block bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-lg">Transform</span>{" "}
              <span className="whitespace-nowrap">Youth Into</span>{" "}
              <span className="inline-flex items-baseline">
                Leaders
                <span className="inline-flex items-center justify-center mx-1.5 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-primary/10 text-primary align-middle">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </span>{" "}
              <span className="whitespace-nowrap">
                Build Futures
                <span className="inline-flex items-center justify-center mx-1.5 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-secondary/20 text-secondary align-middle">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              21-day intensive bootcamp empowering Ethiopian youth with career skills, 
              leadership training, and community service — for just 5,000 Birr per participant.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 h-12 text-sm font-semibold shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/20">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  Get Started
                </span>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground h-12 text-sm font-medium">
                See How It Works
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Cards & Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Top Card - Program Info */}
            <motion.div
              className="w-full rounded-2xl bg-card border border-border p-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold text-foreground">Program Overview</div>
                <div className="ml-auto">
                  <div className="h-7 w-7 rounded-lg bg-muted flex items-center justify-center">
                    <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  21 Days Training
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Career Skills
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Leadership
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Community Service
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Career Ready</span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Leadership</span>
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">+3</span>
              </div>
            </motion.div>

            {/* Middle - Video */}
            <motion.div
              className="w-full rounded-2xl bg-gradient-to-br from-muted/50 to-muted overflow-hidden border border-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="relative aspect-video bg-foreground/5">
                {/* Video placeholder - replace src with actual video */}
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster=""
                >
                  {/* Add your video source here */}
                  <source src="" type="video/mp4" />
                </video>
                {/* Play overlay for when no video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <Play className="h-6 w-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">Watch Our Story</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Cards - Outcomes */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl bg-card border border-border p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Trophy className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="font-semibold text-sm text-foreground">Outcome 1</div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Job-Ready Skills</div>
                <div className="text-xs text-muted-foreground">
                  Prepared for <span className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 font-medium">Employment</span>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-card border border-border p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                    <Users className="h-4 w-4 text-violet-600" />
                  </div>
                  <div className="font-semibold text-sm text-foreground">Outcome 2</div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Community Impact</div>
                <div className="text-xs text-muted-foreground">
                  Serve with <span className="inline-flex items-center rounded bg-secondary/10 px-1.5 py-0.5 font-medium text-secondary">Purpose</span>
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
