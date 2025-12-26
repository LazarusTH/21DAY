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
          {/* Left Column - Headline, Video, Description */}
          <div className="max-w-xl">
            {/* Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="mb-6 font-display text-[2.75rem] sm:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground">
              <span className="inline">21 Day </span>
              <span className="inline bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-xl shadow-lg">Bootcamp</span>
            </motion.h1>

            {/* Autoplaying Video */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 relative rounded-2xl overflow-hidden shadow-lg border border-border/50 w-80 sm:w-96"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover aspect-video"
              >
                <source src="/videos/video-7.MOV" type="video/mp4" />
              </video>
            </motion.div>

            {/* Short Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed"
            >
              Empowering Ethiopian youth with career skills and leadership training. <span className="font-semibold text-foreground">5,000 Birr</span> per participant.
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

          {/* Right Column - Cards with Connection Lines */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative lg:initial">
            {/* Top Card - Program Overview */}
            <motion.div className="relative z-10 w-full rounded-2xl bg-card/80 backdrop-blur-sm border border-border/80 p-5 shadow-lg" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <HiOutlineCalendar className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold text-foreground text-lg">Program Overview</div>
                <div className="ml-auto">
                  <div className="h-8 w-8 rounded-lg bg-muted/80 flex items-center justify-center border border-border/50">
                    <HiOutlineSparkles className="h-4 w-4 text-muted-foreground" />
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
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1.5 text-xs font-semibold text-secondary border border-secondary/20">Career Ready</span>
                <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/20">Leadership</span>
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">+3</span>
              </div>
            </motion.div>

            {/* Connection Lines Container - Desktop only */}
            <div className="hidden lg:block relative h-16">
              {/* Center vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-8 animated-line rounded-full" />
              
              {/* Left branch */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div className="absolute right-0 w-[110px] h-0.5 animated-line-horizontal rounded-full" />
                <div className="absolute right-[110px] top-0 w-0.5 h-8 animated-line rounded-full" />
              </div>
              
              {/* Right branch */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div className="absolute left-0 w-[110px] h-0.5 animated-line-horizontal rounded-full" />
                <div className="absolute left-[110px] top-0 w-0.5 h-8 animated-line rounded-full" />
              </div>
            </div>

            {/* Mobile spacer */}
            <div className="lg:hidden h-4" />

            {/* Bottom Cards - Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div className="relative z-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/80 p-5 shadow-lg hover:shadow-xl transition-shadow" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20">
                    <HiOutlineBadgeCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="font-semibold text-foreground">Outcome 1</div>
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-2">Job-Ready Skills</div>
                <div className="text-xs text-muted-foreground">
                  Prepared for <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 font-semibold text-foreground/70">Employment</span>
                </div>
              </motion.div>

              <motion.div className="relative z-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/80 p-5 shadow-lg hover:shadow-xl transition-shadow" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9
            }}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20">
                    <HiOutlineUsers className="h-4 w-4 text-violet-600" />
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
    </section>;
};
export default Hero;