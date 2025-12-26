import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiArrowRight } from "react-icons/hi";

// Import images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}
const categories = ["All", "Training", "Events", "Community", "Leadership"];
const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryItems: GalleryItem[] = [{
    id: 1,
    src: gallery1,
    title: "Team Discussion",
    category: "Training"
  }, {
    id: 2,
    src: gallery2,
    title: "Planning Session",
    category: "Training"
  }, {
    id: 3,
    src: gallery3,
    title: "Workshop Meeting",
    category: "Training"
  }, {
    id: 4,
    src: gallery4,
    title: "Career Talk",
    category: "Events"
  }, {
    id: 5,
    src: gallery5,
    title: "Stage Presentation",
    category: "Events"
  }, {
    id: 6,
    src: gallery6,
    title: "Expo Audience",
    category: "Events"
  }, {
    id: 7,
    src: gallery7,
    title: "Career Development",
    category: "Events"
  }, {
    id: 8,
    src: gallery8,
    title: "Networking Session",
    category: "Community"
  }, {
    id: 9,
    src: gallery9,
    title: "Team Photo",
    category: "Leadership"
  }, {
    id: 10,
    src: gallery10,
    title: "Group Portrait",
    category: "Leadership"
  }];
  const filteredItems = activeCategory === "All" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredItems.length);
  };
  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };
  const getVisibleItems = () => {
    const items = [];
    const total = filteredItems.length;
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      items.push({
        ...filteredItems[index],
        position: i
      });
    }
    return items;
  };
  return <section id="gallery" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-12 text-center">
          <motion.span className="mb-4 inline-block text-sm font-semibold text-secondary tracking-wider uppercase" initial={{
          opacity: 0,
          y: -10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            Gallery
          </motion.span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Moments of{" "}
            <span className="text-secondary">Transformation</span>
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Captured during training sessions, events, and community activities.
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        

        {/* Carousel */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {getVisibleItems().map(item => {
            const isCenter = item.position === 0;
            const isAdjacent = Math.abs(item.position) === 1;
            const isOuter = Math.abs(item.position) === 2;
            return <motion.div key={`${item.id}-${item.position}`} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: isOuter ? 0.4 : isAdjacent ? 0.7 : 1,
              scale: isCenter ? 1 : isAdjacent ? 0.75 : 0.55,
              x: item.position * (isCenter ? 0 : isAdjacent ? 280 : 420),
              zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
              rotateY: item.position * -5
            }} exit={{
              opacity: 0,
              scale: 0.8
            }} transition={{
              duration: 0.5,
              ease: "easeInOut"
            }} className="absolute cursor-pointer" onClick={() => {
              if (item.position !== 0) {
                setCurrentIndex((currentIndex + item.position + filteredItems.length) % filteredItems.length);
              }
            }}>
                  <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${isCenter ? "w-[320px] h-[380px] md:w-[400px] md:h-[450px]" : "w-[240px] h-[280px] md:w-[300px] md:h-[340px]"}`}>
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>;
          })}
          </AnimatePresence>

        </div>

        {/* Navigation Arrows */}
        <motion.div className="flex justify-center gap-4 mt-8" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }}>
          <button onClick={goToPrev} className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-border bg-background text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary hover:scale-110">
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goToNext} className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-border bg-background text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary hover:scale-110">
            <HiChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredItems.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-secondary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />)}
        </div>
      </div>
    </section>;
};
export default PhotoGallery;