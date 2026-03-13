import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHeroScrollAnimation(
  sectionRef: RefObject<HTMLElement>,
  navigateCardRef: RefObject<HTMLDivElement>,
  navigateImageRef: RefObject<HTMLDivElement>,
  leftColumnRef: RefObject<HTMLDivElement>,
  infoCardRef: RefObject<HTMLDivElement>,
  avatarRef: RefObject<HTMLDivElement>,
  aboutOverlayRef?: RefObject<HTMLDivElement>,
  profileInfoRef?: RefObject<HTMLDivElement>,
  journeyTrackRef?: RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const card = navigateCardRef.current;
    const image = navigateImageRef.current;
    const leftCol = leftColumnRef.current;
    const infoCard = infoCardRef.current;
    const avatar = avatarRef.current;
    const aboutOverlay = aboutOverlayRef?.current ?? null;
    const profileInfo = profileInfoRef?.current ?? null;
    const journeyTrack = journeyTrackRef?.current ?? null;

    if (!section || !card || !image) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (aboutOverlay && profileInfo) {
        gsap.set(aboutOverlay, { autoAlpha: 0, y: 30 });
        gsap.set(profileInfo, {
          height: 0,
          autoAlpha: 0,
          overflow: "hidden",
        });
      }

      const totalCardScroll =
        journeyTrack && journeyTrack.scrollWidth > journeyTrack.clientWidth
          ? Math.max(0, journeyTrack.scrollWidth - journeyTrack.clientWidth)
          : 0;

      const parentEl = card.parentElement;
      const parentTransformX = parentEl
        ? Number(gsap.getProperty(parentEl, "x")) || 0
        : 0;

      const cardRect = card.getBoundingClientRect();
      const trueLeft = cardRect.left - parentTransformX;
      const targetLeft = 96;
      const moveX = targetLeft - trueLeft;
      const targetTop = (window.innerHeight - cardRect.height) / 2;
      const moveY = targetTop - cardRect.top;
      const slideOut = -window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.6,
          anticipatePin: 1,
        },
      });

      // Slide hero content to the left
      tl.to(
        leftCol,
        {
          x: slideOut,
          duration: 0.5,
          ease: "power3.in",
        },
        0,
      );

      if (infoCard) {
        tl.to(
          infoCard,
          {
            x: slideOut * 0.6,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power3.in",
          },
          0.05,
        );
      }

      if (avatar) {
        tl.to(
          avatar,
          {
            x: slideOut,
            duration: 0.5,
            ease: "power3.in",
          },
          0,
        );
      }

      // Navigate card moves left and grows taller
      tl.to(
        card,
        {
          x: moveX,
          y: moveY,
          height: "580px",
          width: "110%",
          duration: 0.6,
          ease: "power2.inOut",
        },
        0.15,
      );

      // Image becomes square
      tl.to(
        image,
        {
          aspectRatio: "1 / 1",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.2,
      );

      // Profile info expands below the image
      if (profileInfo) {
        tl.to(
          profileInfo,
          {
            height: "auto",
            autoAlpha: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          0.4,
        );
      }

      // About Me overlay slides in from right (contains the timeline)
      if (aboutOverlay) {
        tl.to(
          aboutOverlay,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          0.5,
        );
      }

      if (journeyTrack && totalCardScroll > 0) {
        tl.to(
          journeyTrack,
          {
            x: -totalCardScroll,
            ease: "none",
            duration: 1.2,
          },
          1.2,
        );
      }
    });

    return () => mm.revert();
  }, [
    sectionRef,
    navigateCardRef,
    navigateImageRef,
    leftColumnRef,
    infoCardRef,
    avatarRef,
    aboutOverlayRef,
    profileInfoRef,
    journeyTrackRef,
  ]);
}
