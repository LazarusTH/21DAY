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

const photos = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10
];

const videos = [
  "/videos/video-1.MOV",
  "/videos/video-2.MOV",
  "/videos/video-3.MOV",
  "/videos/video-4.MOV",
  "/videos/video-5.MOV",
  "/videos/video-6.MOV",
  "/videos/video-7.MOV",
  "/videos/video-8.MOV",
  "/videos/video-9.MOV",
];

const PhotoGallery = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

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
        <AnimatedSection className="mb-16 text-center">
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

        {/* Photos Section */}
        <div className="mb-16">
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Photos</span>
            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
          </motion.div>

          {/* Horizontal Scroll Photos */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
              {photos.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
                  style={{ 
                    width: index % 3 === 0 ? '280px' : index % 3 === 1 ? '220px' : '250px',
                  }}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-secondary/0 group-hover:ring-secondary/60 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Videos</span>
            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3">
            {videos.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted/50"
                onClick={() => togglePlay(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={src}
                  muted
                  loop
                  playsInline
                  className="w-full aspect-[9/16] object-cover"
                />

                {/* Play/Pause Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    playingId === index ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-foreground/30 backdrop-blur-[1px]" />
                  <motion.div
                    className="relative z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {playingId === index ? (
                      <HiPause className="w-4 h-4 text-secondary-foreground" />
                    ) : (
                      <HiPlay className="w-4 h-4 text-secondary-foreground ml-0.5" />
                    )}
                  </motion.div>
                </div>

                {/* Active Border */}
                <div className={`absolute inset-0 rounded-xl ring-2 ring-inset transition-all duration-300 ${
                  playingId === index ? "ring-secondary" : "ring-transparent group-hover:ring-secondary/50"
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;
