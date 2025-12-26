import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState, useRef } from "react";
import { HiPlay, HiPause } from "react-icons/hi";

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

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  size: "small" | "medium" | "large" | "tall";
}

const PhotoGallery = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const mediaItems: MediaItem[] = [
    // Row 1
    { id: 1, type: "image", src: gallery1, size: "medium" },
    { id: 2, type: "video", src: "/videos/video-1.MOV", size: "tall" },
    { id: 3, type: "image", src: gallery2, size: "small" },
    { id: 4, type: "video", src: "/videos/video-2.MOV", size: "tall" },
    // Row 2
    { id: 5, type: "video", src: "/videos/video-3.MOV", size: "tall" },
    { id: 6, type: "image", src: gallery3, size: "medium" },
    { id: 7, type: "image", src: gallery4, size: "small" },
    { id: 8, type: "video", src: "/videos/video-4.MOV", size: "tall" },
    // Row 3
    { id: 9, type: "image", src: gallery5, size: "small" },
    { id: 10, type: "video", src: "/videos/video-5.MOV", size: "tall" },
    { id: 11, type: "image", src: gallery6, size: "medium" },
    { id: 12, type: "video", src: "/videos/video-6.MOV", size: "tall" },
    // Row 4
    { id: 13, type: "video", src: "/videos/video-7.MOV", size: "tall" },
    { id: 14, type: "image", src: gallery7, size: "small" },
    { id: 15, type: "image", src: gallery8, size: "medium" },
    { id: 16, type: "video", src: "/videos/video-8.MOV", size: "tall" },
    // Row 5
    { id: 17, type: "image", src: gallery9, size: "medium" },
    { id: 18, type: "video", src: "/videos/video-9.MOV", size: "tall" },
    { id: 19, type: "image", src: gallery10, size: "small" },
  ];

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
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
            Captured during training sessions, events, and community activities.
          </p>
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 5) * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => item.type === "video" && togglePlay(item.id)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative">
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Play/Pause Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      playingId === item.id ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <div className="absolute inset-0 bg-foreground/20" />
                    <motion.div
                      className="relative z-10 w-12 h-12 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {playingId === item.id ? (
                        <HiPause className="w-5 h-5 text-secondary-foreground" />
                      ) : (
                        <HiPlay className="w-5 h-5 text-secondary-foreground ml-0.5" />
                      )}
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 ring-2 ring-inset ring-secondary/50 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
