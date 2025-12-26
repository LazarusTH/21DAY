import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiArrowRight } from "react-icons/hi";

// Import images
import trainingEvent1 from "@/assets/training-event-1.jpg";
import trainingEvent2 from "@/assets/training-event-2.jpg";
import volunteerService from "@/assets/volunteer-service.jpg";
import networkingEvent from "@/assets/networking-event.jpg";
import leadershipSeminar from "@/assets/leadership-seminar.jpg";
import teamBuilding from "@/assets/team-building.jpg";

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

  const galleryItems: GalleryItem[] = [
    { id: 1, src: trainingEvent1, title: "Graduation Ceremony", category: "Training" },
    { id: 2, src: trainingEvent2, title: "Workshop Session", category: "Training" },
    { id: 3, src: volunteerService, title: "Community Service", category: "Community" },
    { id: 4, src: networkingEvent, title: "Networking Event", category: "Events" },
    { id: 5, src: leadershipSeminar, title: "Leadership Seminar", category: "Leadership" },
    { id: 6, src: teamBuilding, title: "Team Building", category: "Events" },
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    const total = filteredItems.length;
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      items.push({ ...filteredItems[index], position: i });
    }
    return items;
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-12 text-center">
          <motion.span 
            className="mb-4 inline-block text-sm font-semibold text-secondary tracking-wider uppercase"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Moments of{" "}
            <span className="text-secondary">Transformation</span>
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Capturing the journey of growth, learning, and community impact through our programs.
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {getVisibleItems().map((item) => {
              const isCenter = item.position === 0;
              const isAdjacent = Math.abs(item.position) === 1;
              const isOuter = Math.abs(item.position) === 2;

              return (
                <motion.div
                  key={`${item.id}-${item.position}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isOuter ? 0.4 : isAdjacent ? 0.7 : 1,
                    scale: isCenter ? 1 : isAdjacent ? 0.75 : 0.55,
                    x: item.position * (isCenter ? 0 : isAdjacent ? 280 : 420),
                    zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                    rotateY: item.position * -5,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute cursor-pointer"
                  onClick={() => {
                    if (item.position !== 0) {
                      setCurrentIndex((currentIndex + item.position + filteredItems.length) % filteredItems.length);
                    }
                  }}
                >
                  <div 
                    className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
                      isCenter ? "w-[320px] h-[380px] md:w-[400px] md:h-[450px]" : "w-[240px] h-[280px] md:w-[300px] md:h-[340px]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {isCenter && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-background mt-1">
                          {item.title}
                        </h3>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* View More Button */}
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 px-5 py-3 bg-background border border-border rounded-full text-sm font-medium text-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:border-secondary z-40"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            View More
            <HiArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Navigation Arrows */}
        <motion.div 
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={goToPrev}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-border bg-background text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary hover:scale-110"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-border bg-background text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary hover:scale-110"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-secondary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;