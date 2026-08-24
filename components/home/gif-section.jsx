"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function ShowreelSection() {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const videoRef = useRef(null);
  const controlsTimerRef = useRef(null);
  const sectionIsVisibleRef = useRef(false);
  const isFullscreenRef = useRef(false);
  const isPlayingRef = useRef(false);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 420, damping: 34 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const scale = useTransform(smooth, [0, 0.5, 0.85], [0.72, 1, 1]);
  const borderRadius = useTransform(smooth, [0, 0.5], [28, 0]);
  const opacity = useTransform(smooth, [0, 0.2], [0, 1]);

  const clearControlsTimer = useCallback(() => {
    if (!controlsTimerRef.current) return;
    clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = null;
  }, []);

  const scheduleControlsHide = useCallback(() => {
    clearControlsTimer();
    if (!isFullscreenRef.current || !isPlayingRef.current || isMobile) return;

    controlsTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 2400);
  }, [clearControlsTimer, isMobile]);

  const revealControls = useCallback(() => {
    setControlsVisible(true);
    scheduleControlsHide();
  }, [scheduleControlsHide]);

  useEffect(() => {
    let frameId;
    let fallbackId;

    const beginBuffering = () => {
      if (fallbackId) {
        clearTimeout(fallbackId);
        fallbackId = undefined;
      }
      if (frameId) return;
      frameId = requestAnimationFrame(() => setShouldLoadVideo(true));
    };

    if (window.__nymborLoaderComplete) {
      beginBuffering();
    } else {
      window.addEventListener("nymbor:loader-complete", beginBuffering, {
        once: true,
      });
      fallbackId = window.setTimeout(beginBuffering, 1800);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (fallbackId) clearTimeout(fallbackId);
      window.removeEventListener("nymbor:loader-complete", beginBuffering);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || !shouldLoadVideo) return;

    video.muted = true;
    video.load();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting && entry.intersectionRatio >= 0.12;
        sectionIsVisibleRef.current = isVisible;

        if (isFullscreenRef.current) return;

        if (isVisible && !shouldReduceMotion) {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: [0, 0.12] },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldLoadVideo, shouldReduceMotion]);

  useEffect(() => {
    const player = playerRef.current;
    const video = videoRef.current;
    if (!player || !video) return;

    const enterFullscreenMode = () => {
      isFullscreenRef.current = true;
      setIsFullscreen(true);
      setIsCursorVisible(false);
      setControlsVisible(true);
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
      window.lenis?.stop();
      video.play().catch(() => {});
      scheduleControlsHide();
    };

    const leaveFullscreenMode = () => {
      isFullscreenRef.current = false;
      setIsFullscreen(false);
      clearControlsTimer();
      setControlsVisible(true);
      video.muted = true;
      setIsMuted(true);
      window.lenis?.start();

      if (sectionIsVisibleRef.current && !shouldReduceMotion) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement;

      if (fullscreenElement === player) {
        enterFullscreenMode();
      } else if (isFullscreenRef.current) {
        leaveFullscreenMode();
      }
    };

    const handleIOSFullscreenStart = () => enterFullscreenMode();
    const handleIOSFullscreenEnd = () => leaveFullscreenMode();

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    video.addEventListener("webkitbeginfullscreen", handleIOSFullscreenStart);
    video.addEventListener("webkitendfullscreen", handleIOSFullscreenEnd);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      video.removeEventListener(
        "webkitbeginfullscreen",
        handleIOSFullscreenStart,
      );
      video.removeEventListener("webkitendfullscreen", handleIOSFullscreenEnd);
      clearControlsTimer();
      window.lenis?.start();
    };
  }, [clearControlsTimer, scheduleControlsHide, shouldReduceMotion]);

  const openFullscreen = async () => {
    const player = playerRef.current;
    const video = videoRef.current;
    if (!player || !video) return;

    video.muted = false;
    video.volume = 1;
    setIsMuted(false);

    try {
      if (player.requestFullscreen) {
        await player.requestFullscreen();
      } else if (player.webkitRequestFullscreen) {
        await player.webkitRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      } else if (video.requestFullscreen) {
        await video.requestFullscreen();
      }

      await video.play();
    } catch {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const exitFullscreen = async () => {
    const video = videoRef.current;

    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (
      document.webkitFullscreenElement &&
      document.webkitExitFullscreen
    ) {
      await document.webkitExitFullscreen();
    } else if (video?.webkitExitFullscreen) {
      video.webkitExitFullscreen();
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    revealControls();
  };

  const handleSeek = (event) => {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Number(event.target.value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
    revealControls();
  };

  const handlePointerMove = (event) => {
    if (isFullscreenRef.current) {
      revealControls();
      return;
    }

    if (event.pointerType === "touch") return;
    const player = playerRef.current;
    if (!player) return;

    const bounds = player.getBoundingClientRect();
    const coordinateScaleX = player.offsetWidth / bounds.width;
    const coordinateScaleY = player.offsetHeight / bounds.height;
    cursorX.set((event.clientX - bounds.left) * coordinateScaleX);
    cursorY.set((event.clientY - bounds.top) * coordinateScaleY);
  };

  const handlePlayerClick = (event) => {
    if (event.target.closest("[data-player-control]")) return;
    if (isFullscreenRef.current) togglePlay();
  };

  const handleVideoPlay = () => {
    isPlayingRef.current = true;
    setIsPlaying(true);
    scheduleControlsHide();
  };

  const handleVideoPause = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    clearControlsTimer();
    setControlsVisible(true);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      aria-label="Nymbor showreel"
      className="relative h-[78svh] w-full md:h-[112vh]"
    >
      <div className="sticky top-0 flex h-[78svh] w-full items-center overflow-hidden bg-black md:block md:h-screen">
        <motion.div
          className="h-full w-full overflow-hidden bg-black"
          style={{
            scale: isMobile ? 1 : scale,
            borderRadius: isMobile ? 0 : borderRadius,
            opacity: isMobile ? 1 : opacity,
            willChange: "transform",
          }}
        >
          <div
            ref={playerRef}
            className={`showreel-player relative w-full overflow-hidden bg-black ${
              isFullscreen ? "h-screen cursor-auto" : "h-full md:cursor-none"
            }`}
            onClick={handlePlayerClick}
            onPointerMove={handlePointerMove}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch" && !isFullscreenRef.current) {
                setIsCursorVisible(true);
              }
            }}
            onPointerLeave={() => {
              setIsCursorVisible(false);
              scheduleControlsHide();
            }}
          >
            <video
              ref={videoRef}
              loop
              playsInline
              muted={isMuted}
              poster="/showreel-poster.webp"
              preload={shouldLoadVideo ? "auto" : "none"}
              aria-label="Nymbor selected work showreel"
              className={`h-full w-full select-none ${
                isFullscreen ? "object-contain" : "object-cover"
              }`}
              onLoadedMetadata={(event) =>
                setDuration(event.currentTarget.duration)
              }
              onTimeUpdate={(event) =>
                setCurrentTime(event.currentTarget.currentTime)
              }
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
            >
              {shouldLoadVideo && (
                <source src="/showreel.mp4" type="video/mp4" />
              )}
            </video>

            {!isFullscreen && (
              <button
                type="button"
                aria-label="Expand Nymbor showreel to fullscreen"
                onClick={(event) => {
                  event.stopPropagation();
                  openFullscreen();
                }}
                className="absolute inset-0 z-10 cursor-pointer bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white md:cursor-none"
              />
            )}

            <AnimatePresence>
              {isCursorVisible && !isFullscreen && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-30 hidden md:block"
                  style={{ x: cursorXSpring, y: cursorYSpring }}
                  initial={{ opacity: 0, scale: 0.72 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.72 }}
                  transition={{ duration: 0.24, ease }}
                >
                  <div className="flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-black/10 bg-white/95 px-4 py-3 text-[11px] font-[600] uppercase tracking-[0.11em] text-black shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.7} />
                    Expand video
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isFullscreen && (
              <button
                type="button"
                data-player-control
                onClick={(event) => {
                  event.stopPropagation();
                  openFullscreen();
                }}
                className="absolute bottom-4 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-3 text-[11px] font-[600] uppercase tracking-[0.1em] text-white backdrop-blur-xl md:hidden"
              >
                <Maximize2 className="h-4 w-4" strokeWidth={1.7} />
                Expand video
              </button>
            )}

            {isFullscreen && (
              <>
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/60 to-transparent px-5 pb-16 pt-[calc(1.25rem+env(safe-area-inset-top))] transition-opacity duration-300 sm:px-8 ${
                    controlsVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-[11px] font-[600] uppercase tracking-[0.18em] text-white/55">
                    Nymbor / Selected work
                  </p>
                  <p className="mt-1 text-sm font-[500] tracking-[-0.01em] text-white sm:text-base">
                    Showreel 2026
                  </p>
                </div>

                <div
                  data-player-control
                  className={`absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-20 transition-opacity duration-300 sm:px-8 sm:pb-7 ${
                    controlsVisible
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="mx-auto flex max-w-[1500px] items-center gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause showreel" : "Play showreel"}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" fill="currentColor" />
                      ) : (
                        <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                      )}
                    </button>

                    <span className="hidden min-w-[78px] text-[11px] tabular-nums text-white/65 sm:block">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Showreel progress"
                      className="h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full accent-white"
                      style={{
                        background: `linear-gradient(to right, #ffffff 0%, #ffffff ${progress}%, rgba(255,255,255,0.25) ${progress}%, rgba(255,255,255,0.25) 100%)`,
                      }}
                    />

                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Turn sound on" : "Mute showreel"}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" strokeWidth={1.7} />
                      ) : (
                        <Volume2 className="h-5 w-5" strokeWidth={1.7} />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={exitFullscreen}
                      aria-label="Exit fullscreen"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Minimize2 className="h-5 w-5" strokeWidth={1.7} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
