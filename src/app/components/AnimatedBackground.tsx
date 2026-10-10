"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse and Touch tracking
    let mouse = { x: width / 2, y: height / 2, moved: false };
    let isTouch = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moved = true;
    };
    
    const handleTouch = (e: TouchEvent) => {
      isTouch = true;
      mouse.moved = false; // Disable follow on touch
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouch, { passive: true });

    // Performance optimizations
    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = width < 768;


    // Dark mode colors vs light mode colors
    const isDark = resolvedTheme === "dark";

    // 1. Particles
    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      baseX: number;
      baseY: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        
        const colors = isDark 
          ? ["rgba(6, 182, 212, 0.6)", "rgba(14, 116, 144, 0.4)", "rgba(161, 161, 170, 0.2)"] 
          : ["rgba(6, 182, 212, 0.4)", "rgba(8, 145, 178, 0.3)", "rgba(113, 113, 122, 0.1)"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction
        if (mouse.moved) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            this.x -= (dx / distance) * force * 1.5;
            this.y -= (dy / distance) * force * 1.5;
          }
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    // 2. Spheres
    class Sphere {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color1: string;
      color2: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 15 + 10;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.color1 = isDark ? "rgba(6, 182, 212, 0.15)" : "rgba(6, 182, 212, 0.1)";
        this.color2 = isDark ? "rgba(8, 145, 178, 0.05)" : "rgba(8, 145, 178, 0.02)";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
        
        if (mouse.moved) {
          const dx = mouse.x - (width / 2);
          const dy = mouse.y - (height / 2);
          this.x -= dx * 0.0005;
          this.y -= dy * 0.0005;
        }
      }

      draw() {
        const gradient = ctx!.createRadialGradient(
          this.x - this.size * 0.3, this.y - this.size * 0.3, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, this.color1);
        gradient.addColorStop(1, this.color2);
        
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();
      }
    }

    // 3. Curves
    class Curve {
      yBase: number;
      amplitude: number;
      speed: number;
      offset: number;
      
      constructor() {
        this.yBase = Math.random() * height;
        this.amplitude = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.002 + 0.001;
        this.offset = Math.random() * 100;
      }
      
      draw(time: number) {
        ctx!.beginPath();
        for (let x = 0; x < width; x += 20) {
          const y = this.yBase + Math.sin(x * 0.005 + time * this.speed + this.offset) * this.amplitude;
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.strokeStyle = isDark ? "rgba(6, 182, 212, 0.05)" : "rgba(6, 182, 212, 0.08)";
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
    }

    const particleCount = isMobile ? 30 : prefersReducedMotion ? 20 : 70;
    const sphereCount = isMobile ? 4 : prefersReducedMotion ? 3 : 8;
    const curveCount = isMobile ? 2 : prefersReducedMotion ? 1 : 3;

    const particles = Array.from({ length: particleCount }, () => new Particle());
    const spheres = Array.from({ length: sphereCount }, () => new Sphere());
    const curves = Array.from({ length: curveCount }, () => new Curve());

    let lastTime = 0;
    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      
      // Throttle if reduced motion
      if (prefersReducedMotion && time - lastTime < 33) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastTime = time;

      ctx!.clearRect(0, 0, width, height);

      if (mouse.moved && !isTouch && !prefersReducedMotion) {
        const glow = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        glow.addColorStop(0, isDark ? "rgba(6, 182, 212, 0.03)" : "rgba(6, 182, 212, 0.03)");
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx!.fillStyle = glow;
        ctx!.fillRect(0, 0, width, height);
      }

      curves.forEach(curve => curve.draw(time));
      
      spheres.forEach(sphere => {
        if (!prefersReducedMotion) sphere.update();
        sphere.draw();
      });

      particles.forEach(particle => {
        if (!prefersReducedMotion) particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100"
      style={{ display: "block" }}
    />
  );
}
