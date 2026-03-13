"use client";

import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Github } from "lucide-react";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import { useRef } from "react";
import { useHeroIntroAnimation } from "@/components/animations/useHeroIntroAnimation";
import { useHeroScrollAnimation } from "@/components/animations/useHeroScrollAnimation";
import { AboutMeOverlay } from "@/components/sections/AboutMe";
import { useTheme } from "@/components/ThemeProvider";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const infoCardRef = useRef<HTMLDivElement | null>(null);
  const navigateCardRef = useRef<HTMLDivElement | null>(null);
  const navigateImageRef = useRef<HTMLDivElement | null>(null);
  const profileInfoRef = useRef<HTMLDivElement | null>(null);
  const aboutOverlayRef = useRef<HTMLDivElement | null>(null);
  const journeyTrackRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  useHeroIntroAnimation(
    mainContentRef as React.RefObject<HTMLDivElement>,
    avatarRef as React.RefObject<HTMLDivElement>,
    rightColumnRef as React.RefObject<HTMLDivElement>,
  );

  useHeroScrollAnimation(
    sectionRef as React.RefObject<HTMLElement>,
    navigateCardRef as React.RefObject<HTMLDivElement>,
    navigateImageRef as React.RefObject<HTMLDivElement>,
    leftColumnRef as React.RefObject<HTMLDivElement>,
    infoCardRef as React.RefObject<HTMLDivElement>,
    avatarRef as React.RefObject<HTMLDivElement>,
    aboutOverlayRef as React.RefObject<HTMLDivElement>,
    profileInfoRef as React.RefObject<HTMLDivElement>,
    journeyTrackRef as React.RefObject<HTMLDivElement>,
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex h-screen flex-col overflow-hidden"
    >
      {/* ── Mobile Hero ── */}
      <div className="relative z-20 flex h-full flex-col px-4 pb-5 pt-20 md:hidden">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
          Frontend &amp; UI/UX Designer
        </p>

        <div className="relative flex flex-1 items-end justify-center overflow-hidden">
          <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
            <Image
              src="/images/hero-avatar.png"
              alt="Hero avatar light"
              width={400}
              height={600}
              priority
              className="h-[55vh] w-auto max-w-none object-cover object-top drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-opacity duration-700 ease-in-out"
              style={{ opacity: isDark ? 0 : 1 }}
            />
            <Image
              src="/dark-hero-avatar.png"
              alt="Hero avatar dark"
              width={400}
              height={600}
              priority
              className="h-[55vh] w-auto max-w-none object-cover object-top drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-opacity duration-700 ease-in-out"
              style={{ opacity: isDark ? 1 : 0 }}
            />
          </div>
        </div>

        <div className="relative z-10 -mt-16">
          <h1 className="primary-font select-none text-center text-[clamp(2.8rem,13vw,5rem)] leading-[0.88] font-bold uppercase tracking-wide text-foreground">
            Giang
            <br />
            <span className="text-foreground/60">Nguyen</span>
          </h1>

          <NeuCard variant="inset" className="mt-4 p-3">
            <div className="flex items-center justify-between gap-2">
              <NeuButton variant="pill" href="/projects">
                <span className="text-[10px] tracking-[0.1em] uppercase">
                  Highlight Project
                </span>
              </NeuButton>
              <NeuButton variant="pill" href="/contact">
                <span className="text-[10px] tracking-[0.1em] uppercase">
                  Let&apos;s Connect
                </span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </NeuButton>
            </div>
          </NeuCard>
        </div>
      </div>

      {/* ── Desktop Hero ── */}
      <div
        ref={mainContentRef}
        className="relative z-20 hidden h-full flex-row gap-8 px-8 py-8 md:flex lg:px-8"
      >
        <div ref={leftColumnRef} className="flex w-[90%] flex-col">
          <div className="flex flex-1 flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Frontend &amp; UI/UX Designer
            </p>
            <h1 className="primary-font select-none text-[clamp(3rem,12vw,150px)] leading-[0.9] font-bold uppercase tracking-wide text-foreground">
              Giang
              <br />
              <span className="text-foreground/60">Nguyen</span>
              <br />
              <span className="text-foreground/40">PORTFOLIO</span>
            </h1>
          </div>
          <div className="relative z-30 mt-auto w-[45%] pb-2">
            <NeuCard variant="inset" className="p-4">
              <div className="flex items-center justify-between gap-3">
                <NeuButton variant="pill" href="/projects">
                  <span className="mr-2 text-xs tracking-[0.15em] uppercase">
                    Highlight Project
                  </span>
                </NeuButton>
                <NeuButton variant="pill" href="/contact">
                  <span className="mr-2 text-xs tracking-[0.15em] uppercase">
                    Let&apos;s Connect
                  </span>
                  <ArrowRight className="h-3 w-3" />
                </NeuButton>
              </div>
            </NeuCard>
          </div>
        </div>

        <div
          ref={rightColumnRef}
          className="flex w-[30%] flex-col justify-center gap-5"
        >
          <div ref={infoCardRef}>
            <NeuCard variant="raised" className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-dim"
                  style={{
                    boxShadow:
                      "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)",
                  }}
                >
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#636e72] to-[#2d3436]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neu-heading">
                    Crafting Experiences
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-neu-body">
                    Modern interfaces with smooth interactions and pixel-perfect
                    attention to detail.
                  </p>
                </div>
              </div>
            </NeuCard>
          </div>

          <div ref={navigateCardRef} className="relative z-10">
            <NeuCard variant="flat" className="h-full flex flex-col px-5 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-neu-heading">
                  About Me
                </span>
                <svg
                  className="h-4 w-4 text-neu-body"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              <div
                ref={navigateImageRef}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/avatar.jpg"
                  alt="Navigate preview"
                  fill
                  className="z-0 rounded-xl object-cover object-left"
                />
              </div>

              <div
                ref={profileInfoRef}
                className="py-4 flex flex-col gap-4 h-0 opacity-0 overflow-hidden"
              >
                <div className="flex flex-col">
                  <h3 className="text-2xl secondary-font font-bold text-foreground">
                    Nguyen Dong Giang
                  </h3>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="mt-1 text-xs text-neu-body">
                      Frontend &amp; UI/UX Designer
                    </p>
                    <span className="text-[11px] text-muted">21-08-2004</span>
                  </div>
                </div>
                <div className="mt-4">
                  <NeuCard variant="inset" className="px-4 py-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <NeuButton
                          variant="pill"
                          href="https://www.facebook.com/nguyen.giang.76784"
                          className="h-9 w-9 !px-0 !py-0"
                        >
                          <Facebook className="h-4 w-4 text-neu-heading" />
                        </NeuButton>
                        <NeuButton
                          variant="pill"
                          href="https://www.instagram.com/im_dnilb"
                          className="h-9 w-9 !px-0 !py-0"
                        >
                          <Instagram className="h-4 w-4 text-neu-heading" />
                        </NeuButton>
                        <NeuButton
                          variant="pill"
                          href="https://github.com/giangndse183728"
                          className="h-9 w-9 !px-0 !py-0"
                        >
                          <Github className="h-4 w-4 text-neu-heading" />
                        </NeuButton>
                      </div>
                      <NeuButton
                        variant="pill"
                        href="/contact"
                        className="justify-center gap-2 !py-2 text-xs tracking-[0.15em] uppercase"
                      >
                        Contact
                        <ArrowRight className="h-4 w-4" />
                      </NeuButton>
                    </div>
                  </NeuCard>
                </div>
              </div>
            </NeuCard>
          </div>
        </div>

        <AboutMeOverlay
          aboutOverlayRef={aboutOverlayRef as React.RefObject<HTMLDivElement>}
          profileInfoRef={profileInfoRef as React.RefObject<HTMLDivElement>}
          journeyTrackRef={journeyTrackRef as React.RefObject<HTMLDivElement>}
        />
      </div>

      <div
        ref={avatarRef}
        className="pointer-events-none absolute -bottom-50 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
          <Image
            src="/images/hero-avatar.png"
            alt="Hero avatar light"
            width={600}
            height={880}
            priority
            className="h-[80vh] w-auto max-w-none object-cover object-top lg:h-[120vh] max-h-[1020px] drop-shadow-[0_0_60px_rgba(255,255,255,0.8)] transition-opacity duration-700 ease-in-out"
            style={{ opacity: isDark ? 0 : 1 }}
          />
          <Image
            src="/dark-hero-avatar.png"
            alt="Hero avatar dark"
            width={600}
            height={880}
            priority
            className="h-[80vh] w-auto max-w-none object-cover object-top lg:h-[120vh] max-h-[1020px] drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-opacity duration-700 ease-in-out"
            style={{ opacity: isDark ? 1 : 0 }}
          />
        </div>
      </div>
    </section>
  );
}
