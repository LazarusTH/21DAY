import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState, useRef } from "react";
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from "react-icons/hi";

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const VideoGallery = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const videos: VideoItem[] = [
    { id: 1, src: "/videos/video-1.MOV", title: "Training Session" },
    { id: 2, src: "/videos/video-2.MOV", title: "Workshop Highlights" },
    { id: 3, src: "/videos/video-3.MOV", title: "Career Talk" },
    { id: 4, src: "/videos/video-4.MOV", title: "Team Activity" },
    { id: 5, src: "/videos/video-5.MOV", title: "Event Moments" },
    { id: 6, src: "/videos/video-6.MOV", title: "Success Stories" },
    { id: 7, src: "/videos/video-7.MOV", title: "Networking" },
    { id: 8, src: "/videos/video-8.MOV", title: "Graduation" },
    { id: 9, src: "/videos/video-9.MOV", title: "Behind the Scenes" },
  ];

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing video
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const toggleMute = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    const newMuted = new Set(mutedVideos);
    if (mutedVideos.has(id)) {
      newMuted.delete(id);
      video.muted = false;
    } else {
      newMuted.add(id);
      video.muted = true;
    }
    setMutedVideos(newMuted);
  };

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

        {/* Video Grid - Responsive with natural aspect ratios */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-foreground/5 cursor-pointer"
              onClick={() => togglePlay(video.id)}
            >
              {/* Video Element */}
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.src}
                muted={mutedVideos.has(video.id)}
                loop
                playsInline
                className="w-full h-auto object-cover"
                onEnded={() => setPlayingId(null)}
              />

              {/* Overlay - Hidden when playing */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent transition-opacity duration-300 ${
                  playingId === video.id ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              />

              {/* Play/Pause Button */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  playingId === video.id ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/90 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {playingId === video.id ? (
                    <HiPause className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
                  ) : (
                    <HiPlay className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground ml-0.5" />
                  )}
                </motion.div>
              </div>

              {/* Mute Button */}
              <button
                onClick={(e) => toggleMute(video.id, e)}
                className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center transition-opacity duration-300 hover:bg-background ${
                  playingId === video.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {mutedVideos.has(video.id) ? (
                  <HiVolumeOff className="w-4 h-4 text-foreground" />
                ) : (
                  <HiVolumeUp className="w-4 h-4 text-foreground" />
                )}
              </button>

              {/* Title */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-300 ${
                  playingId === video.id ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <h3 className="text-background font-medium text-sm">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
