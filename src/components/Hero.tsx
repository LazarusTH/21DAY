import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HiArrowRight, HiOutlineCalendar, HiOutlineUsers, HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineBadgeCheck, HiCheck, HiMenu, HiX } from "react-icons/hi";
const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };
  const navLinks = [{
    href: "program",
    label: "Program"
  }, {
    href: "testimonials",
    label: "Testimonials"
  }, {
    href: "gallery",
    label: "Gallery"
  }, {
    href: "sponsor",
    label: "Sponsor"
  }];
  return <section className="relative min-h-screen overflow-hidden bg-background">
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
      `}</style>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Decorative blurs */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-secondary/8 blur-[100px]" />
      <div className="absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[80px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation */}
        <motion.nav initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-16 lg:mb-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-lg font-bold text-background font-display shadow-md">
              21
            </div>
            <span className="font-semibold text-foreground">
              Day Bootcamp
            </span>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map(link => <a key={link.href} href={`#${link.href}`} onClick={e => scrollToSection(e, link.href)} className="hover:text-foreground transition-colors">
                {link.label}
              </a>)}
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 shadow-md">
              Sponsor Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-muted/60 border border-border/50 text-foreground">
              {mobileMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && <>
              {/* Backdrop */}
              <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 0.2
          }} className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
              
              {/* Slide-in Menu */}
              <motion.div initial={{
            x: "100%"
          }} animate={{
            x: 0
          }} exit={{
            x: "100%"
          }} transition={{
            type: "spring",
            damping: 25,
            stiffness: 200
          }} className="fixed top-0 right-0 h-full w-72 bg-background border-l border-border shadow-elevated z-50 lg:hidden">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-semibold text-foreground">Menu</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center h-9 w-9 rounded-lg bg-muted/60 text-foreground">
                    <HiX className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => <motion.a key={link.href} href={`#${link.href}`} onClick={e => scrollToSection(e, link.href)} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="block px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted/60 transition-colors">
                      {link.label}
                    </motion.a>)}
                  
                  <div className="pt-4">
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl">
                      Sponsor Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>}
        </AnimatePresence>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:gap-10 lg:grid-cols-[1fr,500px] xl:grid-cols-[1fr,560px]">
          {/* Left Column - Text */}
          <div className="max-w-xl">
            {/* Trust Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-muted/60 backdrop-blur-sm px-4 py-2 text-sm border border-border/50">
              <div className="flex items-center gap-1.5 bg-emerald-500 text-white px-2.5 py-1 rounded-md text-xs font-bold shadow-sm">
                <HiCheck className="h-3 w-3" />
                Success
              </div>
              <span className="text-foreground/70 font-medium">Multiple Cohorts Completed</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mb-6 font-display text-[2.75rem] sm:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground">
              <span className="inline-block bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-xl shadow-lg transform -rotate-1">Transform</span>
              <br />
              <span className="mt-2 inline-block">Youth Into Leaders</span>
              <span className="inline-flex items-center justify-center ml-3 h-11 w-11 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 text-primary border border-primary/20">
                <HiOutlineAcademicCap className="h-6 w-6" />
              </span>
              <br />
              <span className="inline-block mt-1">Build Futures</span>
              <span className="inline-flex items-center justify-center ml-3 h-11 w-11 rounded-full bg-gradient-to-br from-secondary/15 to-secondary/5 text-secondary border border-secondary/20">
                <HiOutlineSparkles className="h-6 w-6" />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="mb-8 text-base sm:text-[1.1rem] text-muted-foreground max-w-md leading-relaxed">21-day intensive bootcamp empowering Ethiopian youth with career skills, leadership training, and community service for just 5,000 Birr per participant.<span className="font-semibold text-foreground">5,000 Birr</span> per participant.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex flex-wrap items-center gap-3">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                <span className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/20">
                    <HiArrowRight className="h-3 w-3" />
                  </span>
                  Get Started
                </span>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground font-medium group">
                Sponsor
                <HiArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Video + Cards */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            {/* Autoplaying Video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 mb-6">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
              >
                <source src="/videos/video-7.MOV" type="video/mp4" />
              </video>
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating stats on video */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex-1 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                      <HiOutlineCalendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="text-sm font-semibold text-foreground">21 Days</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex-1 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20">
                      <HiOutlineUsers className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Per Cohort</div>
                      <div className="text-sm font-semibold text-foreground">50+ Youth</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;