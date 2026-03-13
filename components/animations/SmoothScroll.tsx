"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    lenisRef.current = lenis;

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      if (window.location.hash) window.history.replaceState(null, "", "/");
      lenis.scrollTo(0, { immediate: true });
    }

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    return () => {
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", "/");
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname]);

  return null;
}

