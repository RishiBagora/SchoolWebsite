import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallerySection() {
  const videos = [
    {
      id: 1,
      thumbnail: "/videos/thumb1.jpg",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
      title: "Annual Day Celebration",
      alt: "Annual day event at Golden Dreams Academy",
    },
    {
      id: 2,
      thumbnail: "/videos/thumb2.jpg",
      url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      title: "Sports Day Highlights",
      alt: "Sports day highlights",
    },
    {
      id: 3,
      thumbnail: "/videos/thumb3.jpg",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "Campus Life",
      alt: "Campus highlights",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  // ESC close modal
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-[#7B1E1E] text-sm tracking-widest font-semibold mb-3">
            EVENT HIGHLIGHTS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Moments Captured in Motion
          </h2>

          <p className="text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Watch selected highlights from school events and activities that
            reflect the vibrant spirit of Golden Dreams Academy.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setActiveVideo(video.url)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#1F2937]">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
                <iframe
                  src={`${activeVideo}?autoplay=1`}
                  title="School Event Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
