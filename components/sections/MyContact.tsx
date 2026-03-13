"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeuButton from "../ui/NeuButton";
import { ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MyContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const myRef = useRef<HTMLSpanElement>(null);
  const visionRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const myEl = myRef.current;
    const visionEl = visionRef.current;
    const buttonEl = buttonRef.current;
    if (!section || !imageWrapper || !myEl || !visionEl || !buttonEl)
      return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const navbar = document.querySelector<HTMLElement>("[data-hero-navbar]");
        const sectionH = section.offsetHeight;

        const centerLine = sectionH / 2;
        const myCenter = myEl.offsetTop + myEl.offsetHeight / 2;
        const visionCenter = visionEl.offsetTop + visionEl.offsetHeight / 2;

        const myDelta = centerLine - myCenter;
        const visionDelta = centerLine - visionCenter;

        gsap.set(myEl, { y: 0 });
        gsap.set(visionEl, { y: 0 });
        gsap.set(buttonEl, { opacity: 0, scale: 0.7 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            scrub: 0.6,
            pin: true,
            onEnter: () => {
              if (!navbar) return;
              gsap.to(navbar, {
                autoAlpha: 0,
                y: -16,
                duration: 0.25,
                ease: "power2.out",
              });
            },
            onEnterBack: () => {
              if (!navbar) return;
              gsap.to(navbar, {
                autoAlpha: 0,
                y: -16,
                duration: 0.25,
                ease: "power2.out",
              });
            },
            onLeave: () => {
              if (!navbar) return;
              gsap.to(navbar, {
                autoAlpha: 1,
                y: 0,
                duration: 0.25,
                ease: "power2.out",
              });
            },
            onLeaveBack: () => {
              if (!navbar) return;
              gsap.to(navbar, {
                autoAlpha: 1,
                y: 0,
                duration: 0.25,
                ease: "power2.out",
              });
            },
          },
        });

        tl.to(
          myEl,
          { y: myDelta, duration: 1, ease: "power2.inOut" },
          0
        );

        tl.to(
          visionEl,
          { y: visionDelta, duration: 1, ease: "power2.inOut" },
          0
        );

        tl.to(
          imageWrapper,
          {
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );

        tl.to(
          buttonEl,
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
          0.65
        );
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* ── Mobile layout ── */}
      <section className="md:hidden relative w-full overflow-hidden px-4 py-10">
        <div className="mb-6">
          <h2 className="primary-font text-[clamp(2.5rem,12vw,4rem)] font-medium leading-[0.85] tracking-tighter text-foreground/80">
            Let&apos;s
            <br />
            Connect
          </h2>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-6">
          <video
            src="/catwalk.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <span
            className="pointer-events-none inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-neu-heading"
            style={{ background: "var(--neu-surface-bright)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          >
                    Start a Conversation
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
      </section>

      {/* ── Desktop layout (GSAP animated) ── */}
      <section
        ref={sectionRef}
        className="relative hidden md:block h-screen w-full overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 z-10">
          <span
            ref={myRef}
            className="primary-font absolute left-8 top-0 text-[14vw] font-medium leading-[0.85] tracking-tighter text-foreground/80"
          >
            Let&apos;s
          </span>
          <span
            ref={visionRef}
            className="primary-font absolute bottom-0 right-8 text-[14vw] font-medium leading-[0.85] tracking-tighter text-foreground/80"
          >
            Connect
          </span>
        </div>

        <div
          ref={buttonRef}
          className="absolute inset-x-0 top-1/2 z-20 mt-32 flex justify-center"
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-neu-heading cursor-pointer"
            style={{ background: "var(--neu-surface-bright)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          onClick={() => {
            window.location.href = "/contact";
          }}
          >
                    Start a Conversation
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div
            ref={imageWrapperRef}
            className="relative overflow-hidden rounded-2xl"
            style={{ width: "28%", height: "36%" }}
          >
            <video
              src="/catwalk.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>
    </>
  );
}
