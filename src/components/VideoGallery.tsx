import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { HiPlay, HiX } from "react-icons/hi";

interface VideoItem {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
}

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Placeholder videos - replace src with actual video files
  const videos: VideoItem[] = [
    {
      id: 1,
      src: "",
      thumbnail: "",
      title: "Training Highlights"
    },
    {
      id: 2,
      src: "",
      thumbnail: "",
      title: "Career Development Session"
    },
    {
      id: 3,
      src: "",
      thumbnail: "",
      title: "Event Recap"
    },
    {
      id: 4,
      src: "",
      thumbnail: "",
      title: "Success Stories"
    }
  ];

  return (
    <section id="videos" className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
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
            Videos
          </motion.span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Watch Our{" "}
            <span className="text-secondary">Journey</span>
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Experience the energy and impact of our programs through video.
          </p>
        </AnimatedSection>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-foreground/5 cursor-pointer"
              onClick={() => video.src && setActiveVideo(video)}
            >
              {/* Thumbnail or Placeholder */}
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Video Coming Soon</span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <HiPlay className="w-8 h-8 text-secondary-foreground ml-1" />
                </motion.div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-background font-semibold text-lg">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-secondary transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <HiX className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoGallery;
