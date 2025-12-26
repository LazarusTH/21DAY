import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Play, Volume2, Users, Star } from "lucide-react";
import { useState } from "react";
const VideoTestimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return <section id="testimonials" className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute -left-20 top-20 h-72 w-72 rounded-full border border-background/10" animate={{
        rotate: 360
      }} transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }} />
        <motion.div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full border border-background/5" animate={{
        rotate: -360
      }} transition={{
        duration: 80,
        repeat: Infinity,
        ease: "linear"
      }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[150px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14 text-center">
          
          <h2 className="font-display text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl mb-4">
            Real Stories,{" "}
            <span className="text-secondary">Real Transformation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-background/60">
            Hear directly from our graduates about their journey
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Video Section */}
          <AnimatedSection direction="scale">
            <div className="relative">
              {/* Floating elements around video */}
              <motion.div className="absolute -left-4 top-1/4 z-20 hidden lg:block" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.6
            }}>
                <div className="rounded-2xl bg-card p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">30+</div>
                      <div className="text-xs text-muted-foreground">Graduates</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="absolute -right-4 top-1/3 z-20 hidden lg:block" initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.7
            }}>
                
              </motion.div>

              <motion.div className="absolute -bottom-6 left-1/4 z-20 hidden lg:block" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.8
            }} animate={{
              y: [0, -8, 0]
            }}>
                <div className="rounded-full bg-secondary px-4 py-2 shadow-xl">
                  <span className="text-sm font-semibold text-secondary-foreground">🎯 80% Success Rate</span>
                </div>
              </motion.div>

              {/* Main video container */}
              <motion.div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-background/10 shadow-2xl" whileHover={{
              scale: 1.01
            }} transition={{
              duration: 0.4
            }} onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? <div className="relative aspect-video bg-gradient-to-br from-primary via-primary/90 to-secondary/80">
                    {/* Decorative patterns */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
                    </div>
                    
                    {/* Animated circles */}
                    <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-white/20" animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }} />
                    <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-white/20" animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0, 0.3]
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5
                }} />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 group-hover:scale-110" whileHover={{
                    scale: 1.1
                  }}>
                        <Play className="ml-1.5 h-10 w-10 text-primary" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Bottom gradient & text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-8">
                      <div className="flex items-end justify-between">
                        <div className="text-white">
                          <div className="mb-1 text-sm opacity-80 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            Watch Video
                          </div>
                          <div className="font-display text-2xl font-bold">
                            Trainee Testimonials
                          </div>
                        </div>
                        <div className="text-right text-white/80">
                          <div className="text-sm">Duration</div>
                          <div className="font-semibold">9:30</div>
                        </div>
                      </div>
                    </div>
                  </div> : <div className="flex aspect-video items-center justify-center bg-foreground text-background">
                    <div className="text-center">
                      <motion.div initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                        <Play className="ml-1 h-8 w-8 text-secondary-foreground" fill="currentColor" />
                      </motion.div>
                      <p className="mb-2 text-xl font-semibold">Video Player</p>
                      <p className="text-sm opacity-60">Your testimonial video will play here</p>
                      <button className="mt-6 rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105" onClick={e => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}>
                        Close Video
                      </button>
                    </div>
                  </div>}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default VideoTestimonials;