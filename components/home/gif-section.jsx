"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export default function ShowreelSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Scale up from small card to full screen as you scroll in
  const scale = useTransform(smooth, [0, 0.5, 0.85], [0.72, 1, 1]);
  // Border radius collapses to 0 (full screen) as scale reaches 1
  const borderRadius = useTransform(smooth, [0, 0.5], [28, 0]);
  // Fade in at start
  const opacity = useTransform(smooth, [0, 0.2], [0, 1]);

  // Begin the video request shortly before the showreel reaches the viewport.
  // The poster keeps the section visually complete while the media buffers.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Play only while the showreel is visible. Pausing it below the section avoids
  // decoding 1080p frames while the user scrolls through the rest of the page.
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || !shouldLoadVideo) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.3 &&
          !shouldReduceMotion
        ) {
          video
            .play()
            .then(() => {
              setIsPlaying(true);
              video.muted = false;
              setIsMuted(false);
            })
            .catch(() => {
              video.muted = true;
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            });
        } else if (!entry.isIntersecting) {
          video.pause();
          video.muted = true;
          setIsPlaying(false);
          setIsMuted(true);
        }
      },
      { threshold: [0, 0.3] },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldLoadVideo, shouldReduceMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (!shouldLoadVideo) {
        setShouldLoadVideo(true);
        return;
      }
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "140vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className="w-full h-full overflow-hidden bg-black"
          style={{
            scale,
            borderRadius,
            opacity,
            willChange: "transform",
          }}
        >
          <video
            ref={videoRef}
            loop
            playsInline
            muted={isMuted}
            poster="/showreel-poster.webp"
            preload={shouldLoadVideo ? "metadata" : "none"}
            className="w-full h-full object-cover"
          >
            {shouldLoadVideo && (
              <source src="/showreel.mp4" type="video/mp4" />
            )}
          </video>

          {/* Bottom controls */}
          <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
            {/* Sound toggle */}
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/60"
            >
              {isMuted ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  Sound Off
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  Sound On
                </>
              )}
            </button>

            {/* Play / Stop */}
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/60"
            >
              {isPlaying ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                  Stop
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
