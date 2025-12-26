import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

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
  span: string;
}
const PhotoGallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const galleryItems: GalleryItem[] = [{
    id: 1,
    src: trainingEvent1,
    title: "Graduation Ceremony",
    span: "col-span-2 row-span-2"
  }, {
    id: 2,
    src: trainingEvent2,
    title: "Workshop Session",
    span: "col-span-1 row-span-1"
  }, {
    id: 3,
    src: volunteerService,
    title: "Community Service",
    span: "col-span-1 row-span-1"
  }, {
    id: 4,
    src: networkingEvent,
    title: "Networking Event",
    span: "col-span-1 row-span-2"
  }, {
    id: 5,
    src: leadershipSeminar,
    title: "Leadership Seminar",
    span: "col-span-1 row-span-1"
  }, {
    id: 6,
    src: teamBuilding,
    title: "Team Building",
    span: "col-span-1 row-span-1"
  }];
  const currentIndex = selectedItem ? galleryItems.findIndex(item => item.id === selectedItem.id) : -1;
  const goToNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      setSelectedItem(galleryItems[currentIndex + 1]);
    } else {
      setSelectedItem(galleryItems[0]);
    }
  };
  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(galleryItems[currentIndex - 1]);
    } else {
      setSelectedItem(galleryItems[galleryItems.length - 1]);
    }
  };
  return <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.span className="mb-4 inline-block text-sm font-semibold text-secondary tracking-wider uppercase" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
                Gallery
              </motion.span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Moments of{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Transformation</span>
                  <motion.span className="absolute -bottom-1 left-0 h-3 w-full bg-secondary/20" initial={{
                  scaleX: 0
                }} whileInView={{
                  scaleX: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.3,
                  duration: 0.5
                }} style={{
                  originX: 0
                }} />
                </span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground lg:text-right">
              Capturing the journey of growth, learning, and community impact through our programs.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid Gallery */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          {galleryItems.map((item, index) => <motion.div key={item.id} className={`group relative cursor-pointer overflow-hidden rounded-2xl ${item.span}`} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} onClick={() => setSelectedItem(item)}>
              {/* Image */}
              <img src={item.src} alt={item.title} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                {/* Expand icon */}
                <div className="flex justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Expand className="h-4 w-4" />
                  </div>
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-background">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-secondary/0 transition-all duration-500 group-hover:border-secondary/50" />
            </motion.div>)}
        </motion.div>

        {/* Stats row */}
        
      </div>

      {/* Lightbox */}
      {selectedItem && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm p-4" onClick={() => setSelectedItem(null)}>
          {/* Close button */}
          <button className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20" onClick={() => setSelectedItem(null)}>
            <X className="h-5 w-5" />
          </button>

          {/* Navigation */}
          <button className="absolute left-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background/10 text-background transition-all hover:bg-background/20 hover:scale-110" onClick={e => {
        e.stopPropagation();
        goToPrev();
      }}>
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button className="absolute right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background/10 text-background transition-all hover:bg-background/20 hover:scale-110" onClick={e => {
        e.stopPropagation();
        goToNext();
      }}>
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-background/10 px-4 py-2 text-sm text-background">
            {currentIndex + 1} / {galleryItems.length}
          </div>

          {/* Image */}
          <motion.div key={selectedItem.id} initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-3xl shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src={selectedItem.src} alt={selectedItem.title} className="max-h-[85vh] w-auto object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
              <h3 className="font-display text-2xl font-semibold text-background">{selectedItem.title}</h3>
            </div>
          </motion.div>
        </motion.div>}
    </section>;
};
export default PhotoGallery;