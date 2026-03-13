import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 py-24 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
            All Work
          </p>
          <h1 className="primary-font text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-none tracking-wide text-foreground">
            Projects
          </h1>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/25">
          {String(projects.length).padStart(2, "0")}&nbsp;Projects
        </span>
      </div>

      {/* 2-row grid: 3 cols on lg, 2 cols on md, 1 col on mobile */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {projects.map((project, i) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block">
            <NeuCard
              variant="raised"
              className="group flex flex-col overflow-hidden transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.mockup}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="70vw"
                  priority={i < 3}
                />
                <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                  <span className="pointer-events-none inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#2d3436] shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    View Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                {/* Logo + Title row */}
                <div className="flex items-center gap-3">
                  <NeuCard
                    variant="flat"
                    className="shrink-0 h-10 w-10 overflow-hidden rounded-xl flex items-center justify-center"
                  >
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover p-1"
                    />
                  </NeuCard>
                  <div className="min-w-0 flex-1">
                    <h2 className="primary-font truncate text-sm font-bold uppercase tracking-wider text-neu-heading">
                      {project.title}
                    </h2>
                    <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-foreground/35 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-foreground/40"
                      style={{
                        background: "var(--neu-tag-bg)",
                        boxShadow:
                          "2px 2px 4px var(--neu-tag-shadow), -2px -2px 4px var(--neu-shadow-light)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NeuCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
