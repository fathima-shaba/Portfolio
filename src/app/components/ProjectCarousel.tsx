"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type ProjectData = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
};

interface ProjectCarouselProps {
  projects: ProjectData[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const isTransitioningRef = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const count = projects?.length || 0;

  // Track responsive screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track tab visibility to pause autoplay when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Safe navigation with debouncing to prevent animation collisions
  const paginate = useCallback(
    (direction: number) => {
      if (count <= 1 || isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setCurrentIndex((prev) => prev + direction);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 520);
    },
    [count]
  );

  // Jump to specific slide using shortest circular distance
  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (count <= 1 || isTransitioningRef.current) return;
      const currentActive = ((currentIndex % count) + count) % count;
      if (targetIndex === currentActive) return;

      let diff = targetIndex - currentActive;
      const half = count / 2;
      if (diff > half) {
        diff -= count;
      } else if (diff < -half) {
        diff += count;
      }

      isTransitioningRef.current = true;
      setCurrentIndex((prev) => prev + diff);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 520);
    },
    [count, currentIndex]
  );

  // Autoplay management: clean timer that avoids conflicting with manual interactions
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }

    if (isHovered || !isTabVisible || count <= 1) {
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      paginate(1);
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [isHovered, isTabVisible, count, currentIndex, paginate]);

  // Touch handlers that preserve native vertical scrolling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only swipe if horizontal motion exceeds threshold and is significantly greater than vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      paginate(-1);
    } else if (e.key === "ArrowRight") {
      paginate(1);
    }
  };

  if (!projects || count === 0) {
    return null;
  }

  const activeProjectIndex = ((currentIndex % count) + count) % count;

  // Offsets for the virtual 5-card layout (-2: far left, -1: left, 0: center, 1: right, 2: far right)
  const visibleOffsets = [-2, -1, 0, 1, 2];

  // Calculate visual style based on offset
  const getCardStyle = (offset: number) => {
    const sideX = isMobile ? "68%" : "96%";
    const farX = isMobile ? "120%" : "175%";

    if (offset === 0) {
      return {
        x: "0%",
        scale: 1,
        rotateY: 0,
        opacity: 1,
        zIndex: 30,
      };
    } else if (offset === -1) {
      return {
        x: `-${sideX}`,
        scale: isMobile ? 0.82 : 0.86,
        rotateY: isMobile ? 8 : 16,
        opacity: isMobile ? 0.35 : 0.45,
        zIndex: 20,
      };
    } else if (offset === 1) {
      return {
        x: sideX,
        scale: isMobile ? 0.82 : 0.86,
        rotateY: isMobile ? -8 : -16,
        opacity: isMobile ? 0.35 : 0.45,
        zIndex: 20,
      };
    } else if (offset <= -2) {
      return {
        x: `-${farX}`,
        scale: 0.7,
        rotateY: isMobile ? 12 : 24,
        opacity: 0,
        zIndex: 10,
      };
    } else {
      return {
        x: farX,
        scale: 0.7,
        rotateY: isMobile ? -12 : -24,
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <div
      className="relative w-full py-2 flex flex-col items-center justify-center select-none focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Carousel Stage */}
      <div
        className="relative w-full max-w-5xl mx-auto h-[490px] sm:h-[520px] md:h-[560px] flex items-center justify-center overflow-visible"
        style={{ perspective: 1200 }}
      >
        {/* Navigation Arrow Left */}
        {count > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 md:-left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-3.5 rounded-full bg-zinc-900/90 border border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all shadow-xl backdrop-blur-md group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <FaChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-0.5" />
          </button>
        )}

        {/* Center Card Anchor Container */}
        <div className="relative w-[300px] xs:w-[330px] sm:w-[370px] md:w-[410px] h-[460px] sm:h-[490px] md:h-[530px] flex items-center justify-center">
          {visibleOffsets.map((offset) => {
            const virtualIndex = currentIndex + offset;
            const projectIndex = ((virtualIndex % count) + count) % count;
            const project = projects[projectIndex];
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;
            const cardStyle = getCardStyle(offset);

            return (
              <motion.div
                key={virtualIndex}
                className={`absolute inset-0 w-full h-full bg-zinc-950 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden select-none ${
                  isCenter
                    ? "pointer-events-auto"
                    : isVisible
                    ? "cursor-pointer pointer-events-auto hover:border-cyan-500/40"
                    : "pointer-events-none"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={cardStyle}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => {
                  if (offset === -1) paginate(-1);
                  else if (offset === 1) paginate(1);
                }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-950 to-indigo-950/60 pointer-events-none z-0" />

                {/* Card Image Banner */}
                <div className="relative w-full h-44 sm:h-48 md:h-52 z-10 overflow-hidden bg-zinc-900 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 370px, 410px"
                    className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105 pointer-events-none"
                    priority={isCenter}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between overflow-hidden">
                  <div className="flex flex-col">
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-wide mb-2 line-clamp-1 leading-snug">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions / Links */}
                  {(project.live || project.github) && (
                    <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10 mt-auto pointer-events-auto">
                      {project.live && (
                        <a
                          href={project.live}
                          target={project.live.startsWith("http") ? "_blank" : undefined}
                          rel={project.live.startsWith("http") ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="flex-1 text-center text-[10px] sm:text-xs font-black text-zinc-950 bg-cyan-500 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 active:scale-95"
                        >
                          View Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="flex-1 text-center text-[10px] sm:text-xs font-black text-white border border-white/15 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl uppercase tracking-widest hover:bg-white/15 hover:border-white/30 transition-all active:scale-95"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrow Right */}
        {count > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 md:-right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-3.5 rounded-full bg-zinc-900/90 border border-white/10 text-white/80 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all shadow-xl backdrop-blur-md group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <FaChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        )}
      </div>

      {/* Clean Navigation Dots Below (Properly aligned, no extra spacing, no duplicate controls) */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-2.5 mt-6 z-30">
          {projects.map((_, idx) => {
            const isActive = idx === activeProjectIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  isActive
                    ? "w-8 bg-cyan-400 shadow-md shadow-cyan-400/30"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
