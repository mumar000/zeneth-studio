"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * OptimizedMedia component
 * Intelligently loads media based on device capabilities:
 * - Low-end devices: static image placeholder
 * - Mid-range devices: optimized GIF with lazy loading
 * - High-end devices: video (if provided) or GIF
 */
export default function OptimizedMedia({
  videoSrc,
  gifSrc,
  fallbackSrc,
  alt = "Media content",
  className = "",
  priority = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  objectFit = "cover",
  fill = false,
  width,
  height,
  sizes,
}) {
  const [mediaType, setMediaType] = useState("loading");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Detect device capabilities
    const detectDeviceCapability = () => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return "static";
      }

      // Check connection quality (if available)
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      if (connection) {
        // If slow connection (2G, slow-2g), use static
        if (
          connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g"
        ) {
          return "static";
        }
        // If save-data is enabled, use static
        if (connection.saveData) {
          return "static";
        }
      }

      // Check device memory (if available)
      const deviceMemory = navigator.deviceMemory; // In GB
      if (deviceMemory && deviceMemory < 4) {
        // Low memory device - use gif or static
        return videoSrc && deviceMemory >= 2 ? "gif" : "static";
      }

      // Check CPU cores (if available)
      const hardwareConcurrency = navigator.hardwareConcurrency;
      if (hardwareConcurrency && hardwareConcurrency < 4) {
        // Low-end CPU - prefer gif over video
        return "gif";
      }

      // High-end device - use video if available, otherwise gif
      return videoSrc ? "video" : "gif";
    };

    const capability = detectDeviceCapability();
    setMediaType(capability);

    // Setup Intersection Observer for lazy loading
    if (!priority && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: "100px", // Start loading 100px before element is visible
        },
      );

      observer.observe(containerRef.current);

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, [priority, videoSrc]);

  // Auto-play video when visible
  useEffect(() => {
    if (
      isVisible &&
      mediaType === "video" &&
      videoRef.current &&
      autoPlay
    ) {
      videoRef.current.play().catch(() => {
        // If autoplay fails, fallback to gif
        setMediaType("gif");
      });
    }
  }, [isVisible, mediaType, autoPlay]);

  const shouldLoad = priority || isVisible;

  // Render static image (fallback or low-end devices)
  if (mediaType === "static" || mediaType === "loading") {
    const imageSrc = fallbackSrc || gifSrc;
    return (
      <div ref={containerRef} className={className}>
        {imageSrc &&
          (fill ? (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes={sizes}
              className={`object-${objectFit}`}
              priority={priority}
            />
          ) : (
            <Image
              src={imageSrc}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              className={`object-${objectFit}`}
              priority={priority}
            />
          ))}
      </div>
    );
  }

  // Render video (high-end devices)
  if (mediaType === "video" && videoSrc && shouldLoad) {
    return (
      <div ref={containerRef} className={className}>
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className={`w-full h-full object-${objectFit}`}
          preload={priority ? "auto" : "metadata"}
        >
          <source src={videoSrc} type="video/mp4" />
          <source
            src={videoSrc.replace(".mp4", ".webm")}
            type="video/webm"
          />
          {/* Fallback to gif if video not supported */}
          {gifSrc && (
            <Image
              src={gifSrc}
              alt={alt}
              fill={fill}
              width={!fill ? width : undefined}
              height={!fill ? height : undefined}
              className={`object-${objectFit}`}
            />
          )}
        </video>
      </div>
    );
  }

  // Render GIF (mid-range devices or fallback)
  if (mediaType === "gif" && gifSrc && shouldLoad) {
    return (
      <div ref={containerRef} className={className}>
        {fill ? (
          <Image
            src={gifSrc}
            alt={alt}
            fill
            sizes={sizes}
            unoptimized
            className={`object-${objectFit}`}
            priority={priority}
          />
        ) : (
          <Image
            src={gifSrc}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            unoptimized
            className={`object-${objectFit}`}
            priority={priority}
          />
        )}
      </div>
    );
  }

  // Loading state
  return (
    <div
      ref={containerRef}
      className={`${className} bg-gray-100 animate-pulse`}
    />
  );
}
