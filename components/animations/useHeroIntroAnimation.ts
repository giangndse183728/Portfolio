import { useEffect, type RefObject } from "react";
import gsap from "gsap";

export function useHeroIntroAnimation(
  mainContentRef: RefObject<HTMLDivElement>,
  avatarRef: RefObject<HTMLDivElement>,
  rightColumnRef: RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    if (!mainContentRef.current || !avatarRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(mainContentRef.current, { autoAlpha: 0 });
      gsap.set("[data-hero-navbar]", { autoAlpha: 0 });
      gsap.set(avatarRef.current, { xPercent: -50, x: 0 });
      if (rightColumnRef.current) {
        gsap.set(rightColumnRef.current, { autoAlpha: 0, x: 80 });
      }

      const tl = gsap.timeline().timeScale(1.6);

      tl.fromTo(
        avatarRef.current,
        { scale: 0.8, autoAlpha: 0, y: 80, xPercent: -50, x: 0 },
        {
          scale: 1.1,
          autoAlpha: 1,
          y: 0,
          xPercent: -50,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
        },
      )
        .to(avatarRef.current, {
          scale: 1,
          xPercent: -50,
          x: 0,
          duration: 0.7,
          ease: "power2.inOut",
        })
        .to(
          mainContentRef.current,
          {
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          rightColumnRef.current,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "<",
        )
        .to(
          "[data-hero-navbar]",
          {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<",
        );
    });

    return () => mm.revert();
  }, [avatarRef, mainContentRef, rightColumnRef]);
}

