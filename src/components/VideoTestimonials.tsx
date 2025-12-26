import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

const VideoTestimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      name: "Meron Tadesse",
      role: "Cohort 1 Graduate",
      quote: "Before the bootcamp, I had the skills but lacked the confidence. Now I walk into interviews knowing my worth.",
    },
    {
      name: "Yohannes Bekele",
      role: "Cohort 1 Graduate", 
      quote: "The volunteer component taught me that leadership is about service. That perspective changed everything.",
    },
    {
      name: "Sara Alemayehu",
      role: "Cohort 2 Participant",
      quote: "21 days to transform my career mindset. The community we built here is invaluable.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-card py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Hear From Our Graduates
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real Stories,{" "}
            <span className="text-gradient">Real Transformation</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Video Section */}
          <AnimatedSection direction="scale">
            <div className="relative">
              {/* Video placeholder with play button */}
              <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-hero shadow-elevated"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {!isPlaying ? (
                  <>
                    <div className="flex aspect-video items-center justify-center">
                      {/* Decorative elements */}
                      <div className="absolute inset-0">
                        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
                        <div className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-primary-foreground/10 blur-xl" />
                      </div>
                      
                      {/* Play button */}
                      <motion.div
                        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-secondary shadow-glow transition-all duration-300 group-hover:scale-110"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Play className="ml-1 h-10 w-10 text-secondary-foreground" fill="currentColor" />
                      </motion.div>

                      {/* Text overlay */}
                      <div className="absolute bottom-6 left-6 text-left text-primary-foreground">
                        <div className="mb-1 text-sm opacity-80">Watch Video</div>
                        <div className="font-display text-xl font-semibold">
                          Trainee Testimonials
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-primary/90 text-primary-foreground">
                    <div className="text-center">
                      <p className="mb-2 text-lg">Video Player Placeholder</p>
                      <p className="text-sm opacity-70">Your testimonial video will play here</p>
                      <button 
                        className="mt-4 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlaying(false);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Video badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 rounded-xl bg-card p-4 shadow-elevated"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                    <span className="text-lg">🎬</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">50+ Graduates</div>
                    <div className="text-xs text-muted-foreground">Share their journey</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
