import type { MutableRefObject, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects as allProjects } from "@/data/projects";

const projects = allProjects.filter((p) => p.id !== "portfolio");

gsap.registerPlugin(ScrollTrigger);

export function initHighlightProjectScroll(
  sectionRef: RefObject<HTMLElement | null>,
  stRef: MutableRefObject<ScrollTrigger | null>,
  activeIdxRef: MutableRefObject<number>,
  progressRef: MutableRefObject<number>,
  lastTickRef: MutableRefObject<number>,
  inViewRef: MutableRefObject<boolean>,
  setActiveIndex: (index: number) => void,
  setPrevIndex: (index: number) => void,
  setProgress: (value: number) => void
) {
  const section = sectionRef.current;
  if (!section) return () => {};

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "highlight-project",
        trigger: section,
        start: "top top",
        end: `+=${projects.length * 50}%`,
        pin: true,
        snap: {
          snapTo: projects.length > 1 ? 1 / (projects.length - 1) : 1,
          directional: false,
          duration: { min: 0.3, max: 0.6 },
          ease: "power1.inOut",
        },
        onToggle(self) {
          inViewRef.current = self.isActive;
          if (self.isActive) lastTickRef.current = Date.now();
        },
        onUpdate(self) {
          if (!stRef.current) stRef.current = self;

          const idx = Math.min(
            Math.round(self.progress * (projects.length - 1)),
            projects.length - 1
          );

          if (idx !== activeIdxRef.current) {
            setPrevIndex(activeIdxRef.current);
            activeIdxRef.current = idx;
            progressRef.current = 0;
            lastTickRef.current = Date.now();
            setActiveIndex(idx);
            setProgress(0);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  });

  stRef.current = ScrollTrigger.getById("highlight-project") ?? null;

  return () => {
    mm.revert();
    stRef.current = null;
  };
}

