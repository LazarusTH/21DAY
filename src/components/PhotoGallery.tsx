import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import trainingEvent1 from "@/assets/training-event-1.jpg";
import trainingEvent2 from "@/assets/training-event-2.jpg";
import volunteerService from "@/assets/volunteer-service.jpg";
import networkingEvent from "@/assets/networking-event.jpg";
import leadershipSeminar from "@/assets/leadership-seminar.jpg";
import teamBuilding from "@/assets/team-building.jpg";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
}

const PhotoGallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const galleryItems: GalleryItem[] = [
    { id: 1, type: "image", src: trainingEvent1, title: "Graduation Ceremony", category: "events" },
    { id: 2, type: "image", src: trainingEvent2, title: "Workshop Session", category: "training" },
    { id: 3, type: "image", src: volunteerService, title: "Community Service", category: "volunteer" },
    { id: 4, type: "video", src: networkingEvent, title: "Networking Event", category: "events" },
    { id: 5, type: "image", src: leadershipSeminar, title: "Leadership Seminar", category: "training" },
    { id: 6, type: "image", src: teamBuilding, title: "Team Building", category: "volunteer" },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "training", label: "Training" },
    { id: "events", label: "Events" },
    { id: "volunteer", label: "Volunteer" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const currentIndex = selectedItem 
    ? filteredItems.findIndex(item => item.id === selectedItem.id) 
    : -1;

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  return (
    <section className="relative overflow-hidden bg-card py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Gallery
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Moments of{" "}
            <span className="text-gradient">Transformation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Capturing the journey of growth, learning, and community impact.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1} className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-secondary text-secondary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              delay={index * 0.1}
              direction="scale"
            >
              <motion.div
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-soft"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-80 capitalize">{item.category}</p>
                  </div>
                </div>

                {/* Video indicator */}
                {item.type === "video" && (
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary shadow-lg">
                    <Play className="ml-0.5 h-4 w-4 text-secondary-foreground" fill="currentColor" />
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View more hint */}
        <AnimatedSection delay={0.5} className="mt-10 text-center">
          <p className="text-muted-foreground">
            More photos and videos from our training sessions and events
          </p>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            onClick={() => setSelectedItem(null)}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {currentIndex < filteredItems.length - 1 && (
            <button
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image/Video */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <div className="flex aspect-video items-center justify-center bg-card">
                <div className="text-center">
                  <Play className="mx-auto mb-4 h-16 w-16 text-secondary" />
                  <p className="text-foreground">Video: {selectedItem.title}</p>
                  <p className="text-sm text-muted-foreground">Video player placeholder</p>
                </div>
              </div>
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[80vh] w-auto"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6 text-primary-foreground">
              <h3 className="font-display text-xl font-semibold">{selectedItem.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PhotoGallery;
