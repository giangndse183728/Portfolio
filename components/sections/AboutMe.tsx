import React, { type RefObject } from "react";
import Image from "next/image";
import NeuCard from "@/components/ui/NeuCard";

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
    {
      year: "2021",
      title: "First Line of Code",
      description:
        "Discovered web development through HTML & CSS and built my first static pages.",
    },
    {
      year: "2022",
      title: "IELTS – Band Score 6.0",
      description:
        "Achieved an IELTS score of 6.0, enabling me to learn from global resources and collaborate in English.",
    },
    {
      year: "2023",
      title: "FPT University – Software Engineering",
      description:
        "Started studying Software Engineering, building a strong foundation in programming.",
    },
    {
      year: "2024",
      title: "Frontend Developer Intern – FPT Software",
      description:
        "Developed an Intern Management System to support intern management in a professional team environment.",
    },
    {
      year: "2025",
      title: "Graduation Project Completed",
      description:
        "Completed my graduation project, applying full-stack skills to build a user-centered web and mobile application.",
    },
    {
        year: "2026",
        title: "Exploring UI/UX Direction",
        description:
          "Focusing on UI/UX design and product-oriented interfaces, aiming to combine design thinking with frontend development.",
      }
  ];

export interface AboutMeOverlayProps {
  aboutOverlayRef: RefObject<HTMLDivElement>;
  profileInfoRef: RefObject<HTMLDivElement>;
  journeyTrackRef: RefObject<HTMLDivElement>;
}

export function AboutMeOverlay({
  aboutOverlayRef,
  profileInfoRef,
  journeyTrackRef,
}: AboutMeOverlayProps) {
  return (
    <div
      ref={aboutOverlayRef}
      className="pointer-events-none absolute inset-0 flex opacity-0 -z-10"
    >
   
      <span
        className="primary-font absolute left-0 top-0 z-[-12] select-none text-[clamp(8rem,12vw,10rem)] font-bold uppercase leading-none text-foreground/20 tracking-wider"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        DESIGN
      </span>

      {/* Left col spacer — matches where the card lands */}
      <div className="w-[35%] flex-shrink-0" />

      {/* Right col — About Me text + My Journey (vertically centered) */}
      <div className="flex flex-1 flex-col justify-center overflow-hidden pr-24 gap-4">
        {/* About Me text */}
        <div className="flex justify-end">
          <div className="max-w-4xl text-right">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Get to know me
            </p>
            <h2 className="primary-font text-[clamp(2rem,5vw,56px)] leading-[0.95] font-bold uppercase tracking-wide text-foreground">
              About Me
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-neu-body">
              I&apos;m Nguyễn Đông Giang, a Frontend Developer &amp; UI/UX
              Designer passionate about crafting beautiful and intuitive digital
              experiences. I focus on building clean, user-centered interfaces
              that combine thoughtful design with solid frontend architecture.  With a strong eye for detail and smooth interactions, I transform
              ideas into pixel-perfect, responsive web applications that are
              both visually engaging and highly performant, while ensuring
              seamless integration with the systems behind the scenes.
            </p>
           
          </div>
        </div>

        {/* My Journey */}
        <div className="mt-8 flex-shrink-0 pb-6">
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/30">
              Timeline
            </p>
            <h3 className="primary-font mt-1 text-lg font-bold uppercase tracking-wide text-foreground/80">
              My Journey
            </h3>
          </div>
          <div
            ref={journeyTrackRef}
            className="flex items-stretch gap-5 pr-8"
          >
            {milestones.map((m, i) => (
              <NeuCard
                key={m.year}
                variant="raised"
                className="milestone-card relative flex h-[180px] w-[280px] flex-shrink-0 flex-col justify-between p-5 sm:h-[240px] sm:w-[360px] sm:p-6"
              >
                <div>
                  <span className="primary-font text-4xl font-bold text-neu-heading/15 sm:text-5xl">
                    {m.year}
                  </span>
                  <h4 className="primary-font mt-3 text-base font-normal text-neu-heading sm:text-lg">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neu-body">
                    {m.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-neu-heading/30" />
                  <div className="h-px flex-1 bg-neu-heading/10" />
                  <span className="secondary-font text-xs text-neu-body/50">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(milestones.length).padStart(2, "0")}
                  </span>
                </div>
              </NeuCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile standalone About Me section ──────────────────────────────────────

export default function AboutMeSection() {
  return (
    <section id="about" className="md:hidden px-4 py-10">
      <div className="flex items-center gap-4 mb-6">
        <NeuCard
          variant="flat"
          className="shrink-0 h-20 w-20 overflow-hidden rounded-2xl flex items-center justify-center"
        >
          <Image
            src="/images/avatar.jpg"
            alt="Nguyen Dong Giang"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </NeuCard>
        <div>
          <h3 className="text-lg secondary-font font-bold text-foreground">
            Nguyen Dong Giang
          </h3>
          <p className="text-xs text-neu-body">
            Frontend &amp; UI/UX Designer
          </p>
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
          Get to know me
        </p>
        <h2 className="primary-font text-[clamp(2rem,8vw,3rem)] leading-[0.95] font-bold uppercase tracking-wide text-foreground">
          About Me
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neu-body">
          I&apos;m Nguyễn Đông Giang, a Frontend Developer &amp; UI/UX
          Designer passionate about crafting beautiful and intuitive digital
          experiences. I focus on building clean, user-centered interfaces
          that combine thoughtful design with solid frontend architecture.
          With a strong eye for detail and smooth interactions, I transform
          ideas into pixel-perfect, responsive web applications that are
          both visually engaging and highly performant, while ensuring
          seamless integration with the systems behind the scenes.
        </p>
      </div>

      <div>
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/30">
            Timeline
          </p>
          <h3 className="primary-font mt-1 text-lg font-bold uppercase tracking-wide text-foreground/80">
            My Journey
          </h3>
        </div>

        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-neu-heading/10" />

          {milestones.map((m, i) => (
            <div key={m.year} className="relative flex gap-4 pb-6 last:pb-0">
              {/* Dot on the timeline */}
              <div className="relative z-10 flex flex-col items-center pt-1">
                <div
                  className="h-[10px] w-[10px] rounded-full bg-neu-heading/25 ring-4"
                  style={{ "--tw-ring-color": "var(--neu-ring)" } as React.CSSProperties}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="primary-font text-sm font-bold text-neu-heading/30">
                    {m.year}
                  </span>
                  <span className="secondary-font text-[10px] text-neu-body/40">
                    {String(i + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="primary-font mt-0.5 text-sm font-semibold text-neu-heading">
                  {m.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-neu-body">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


