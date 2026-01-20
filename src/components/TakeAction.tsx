import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiArrowRight, HiOutlineAcademicCap, HiOutlineSparkles, HiCheck } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
const TakeAction = () => {
  return <section id="take-action" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Decorative blurs */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-secondary/8 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <motion.span className="mb-4 inline-block text-sm font-semibold text-secondary tracking-wider uppercase" initial={{
          opacity: 0,
          y: -10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            Get Involved
          </motion.span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Take{" "}
            <span className="text-secondary">Action</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Whether you're a young professional ready to transform your career or an organization looking to invest in the next generation — there's a place for you.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Apply as Student Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative rounded-3xl bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              
              <h3 className="font-display text-2xl font-bold text-foreground">Apply as a Student</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Ready to invest in yourself? Join our next cohort and transform your career trajectory. Applications are now open.
            </p>

            <ul className="space-y-3 mb-8">
              {["21 days of intensive training", "Expert mentorship & coaching", "Certificate of completion", "Alumni network access"].map((item, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1 * index
            }} className="flex items-center gap-3 text-foreground/80">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <HiCheck className="h-3 w-3" />
                  </div>
                  {item}
                </motion.li>)}
            </ul>

            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full font-semibold shadow-md group-hover:shadow-lg transition-all" asChild>
              <a href="https://forms.gle/fLmKU1jCMqLVWFZy7" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  Apply Now
                  <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </motion.div>

          {/* Become a Sponsor Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="relative rounded-3xl bg-foreground text-background p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-secondary/20 blur-[60px]" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                
                <h3 className="font-display text-2xl font-bold">Become a Sponsor</h3>
              </div>
              
              <p className="text-background/70 mb-6">
                Invest in the future by sponsoring participants or partnering with our program. Your contribution creates lasting impact.
              </p>

              <ul className="space-y-3 mb-8">
                {["Sponsor individual participants", "Corporate partnership opportunities", "Mentorship program involvement", "Brand visibility & recognition"].map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1 * index
              }} className="flex items-center gap-3 text-background/80">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/30 text-secondary">
                      <HiCheck className="h-3 w-3" />
                    </div>
                    {item}
                  </motion.li>)}
              </ul>

              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold shadow-md group-hover:shadow-lg transition-all" asChild>
                <a href="https://forms.gle/joSQRC6r6yMZ461n9" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Partner With Us
                    <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default TakeAction;