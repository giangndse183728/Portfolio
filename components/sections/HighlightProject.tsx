"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SkipBack, SkipForward, Pause, Play, ArrowUpRight, ChevronsDown } from "lucide-react";
import { projects as allProjects, type Project } from "@/data/projects";

const projects = allProjects.filter((p) => p.id !== "portfolio");
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { initHighlightProjectScroll } from "@/components/animations/highlightProjectScroll";
import Waveform from "@/components/ui/Waveform";
import NeuButton from "@/components/ui/NeuButton";
import NeuCard from "@/components/ui/NeuCard";

const DURATION = 10000;
const TICK_MS  = 50;

// ─── Music bar ────────────────────────────────────────────────────────────────

function MusicBar({
    project,
    progress,
    isPlaying,
    onPrev,
    onPlayPause,
    onNext,
}: {
    project: Project;
    progress: number;
    isPlaying: boolean;
    onPrev: () => void;
    onPlayPause: () => void;
    onNext: () => void;
}) {
    return (
        <NeuCard variant="raised" className="flex-none flex items-center gap-3 px-3 py-3 md:gap-4 md:px-5 md:py-4">
            {/* Logo */}
            <NeuCard variant="flat" className="shrink-0 h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-xl flex items-center justify-center">
                <Image
                    src={project.logo}
                    alt={project.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover p-1"
                />
            </NeuCard>

            {/* Title + waveform + progress */}
            <div className="flex-1 min-w-0 flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-2">
                    <span className="primary-font truncate text-xs md:text-sm font-bold uppercase tracking-wider text-neu-heading">
                        {project.title}
                    </span>
                    <span className="hidden sm:block truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                        {project.subtitle}
                    </span>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                        {project.year}
                    </span>
                </div>

                <Waveform active={isPlaying} />

                {/* Progress track */}
                <NeuCard variant="inset" className="h-2 w-full rounded-full p-[2px]">
                    <div
                        className="h-full rounded-full"
                        style={{
                            width: `${progress}%`,
                            background: "linear-gradient(90deg,#a0aec0,#718096)",
                            transition: "width 60ms linear",
                        }}
                    />
                </NeuCard>
            </div>

            {/* Controls */}
            <div className="shrink-0 flex items-center gap-2 md:gap-4">
                <NeuButton
                    variant="flat"
                    onClick={onPrev}
                    className="h-8 w-8 md:h-9 md:w-9 !px-0 !py-0 text-foreground/60 hover:text-foreground/80"
                >
                    <SkipBack className="h-3.5 w-3.5" />
                </NeuButton>
                <NeuButton
                    variant="pill"
                    onClick={onPlayPause}
                    className="h-8 w-8 md:h-9 md:w-9 !px-0 !py-0 text-foreground/60 hover:text-foreground/80"
                >
                    {isPlaying
                        ? <Pause className="h-3.5 w-3.5" />
                        : <Play  className="h-3.5 w-3.5" />}
                </NeuButton>
                <NeuButton
                    variant="flat"
                    onClick={onNext}
                    className="h-8 w-8 md:h-9 md:w-9 !px-0 !py-0 text-foreground/60 hover:text-foreground/80"
                >
                    <SkipForward className="h-3.5 w-3.5" />
                </NeuButton>
            </div>

           
        </NeuCard>
    );
}

// ─── Playlist item ────────────────────────────────────────────────────────────

function PlaylistItem({
    project,
    index,
    active,
    onClick,
}: {
    project: Project;
    index: number;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <NeuButton
            onClick={onClick}
            variant={active ? "pressed" : "none"}
            className="group w-full !justify-start gap-4 !px-4 !py-3 text-left"
        >
            <span className="shrink-0 w-6 text-center text-[10px] font-bold tabular-nums text-foreground/25">
                {String(index + 1).padStart(2, "0")}
            </span>

            <NeuCard
                variant={active ? "flat" : "concave"}
                className="shrink-0 h-9 w-9 rounded-lg overflow-hidden flex items-center justify-center"
            >
                <Image
                    src={project.logo}
                    alt={project.title}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover p-1"
                />
            </NeuCard>

            <span
                className={`flex-1 min-w-0 truncate primary-font text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                    active ? "text-neu-heading" : "text-foreground/40 group-hover:text-foreground/60"
                }`}
            >
                {project.title}
            </span>

            <span className="shrink-0 text-[10px] font-semibold tabular-nums text-foreground/25">
                {project.year}
            </span>
        </NeuButton>
    );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function HighlightProject() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex,   setPrevIndex]   = useState(0);
    const [isPlaying,   setIsPlaying]   = useState(true);
    const [progress,    setProgress]    = useState(0);

    const sectionRef   = useRef<HTMLElement | null>(null);
    const stRef        = useRef<ScrollTrigger | null>(null);
    const inViewRef    = useRef(false);

    const activeIdxRef = useRef(0);
    const isPlayingRef = useRef(true);
    const progressRef  = useRef(0);
    const lastTickRef  = useRef(Date.now());

    // ── scroll to a specific project index ───────────────────────────────────
    const scrollToProject = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
        const st = stRef.current;
        if (!st) return;
        const clamped  = Math.max(0, Math.min(projects.length - 1, index));
        const fraction = projects.length > 1 ? clamped / (projects.length - 1) : 0;
        const scrollY  = st.start + fraction * (st.end - st.start);
        window.scrollTo({ top: scrollY, behavior });
    }, []);

    const navigate = useCallback((dir: number) => {
        const next = Math.max(0, Math.min(projects.length - 1, activeIdxRef.current + dir));
        if (next !== activeIdxRef.current) {
            setPrevIndex(activeIdxRef.current);
            if (stRef.current) {
                scrollToProject(next, "smooth");
            } else {
                activeIdxRef.current = next;
                progressRef.current = 0;
                lastTickRef.current = Date.now();
                setActiveIndex(next);
                setProgress(0);
            }
        }
    }, [scrollToProject]);

    const goTo = useCallback((index: number) => {
        if (index !== activeIdxRef.current) {
            setPrevIndex(activeIdxRef.current);
            // Jump instantly so it doesn't animate through intermediate projects
            scrollToProject(index, "auto");
        }
    }, [scrollToProject]);

    // ── keep refs in sync ────────────────────────────────────────────────────
    useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
    useEffect(() => {
        if (isPlaying) lastTickRef.current = Date.now();
    }, [isPlaying]);

    // ── progress bar: fills over DURATION, resets on project change via scroll ─
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPlayingRef.current) return;

            const now     = Date.now();
            const elapsed = now - lastTickRef.current;
            lastTickRef.current = now;

            const next = Math.min(progressRef.current + (elapsed / DURATION) * 100, 100);
            progressRef.current = next;
            setProgress(next);
        }, TICK_MS);

        return () => clearInterval(timer);
    }, []);

    // ── GSAP ScrollTrigger: pin + snap only (moved to animations module) ─
    useEffect(() => {
        return initHighlightProjectScroll(
            sectionRef,
            stRef,
            activeIdxRef,
            progressRef,
            lastTickRef,
            inViewRef,
            setActiveIndex,
            setPrevIndex,
            setProgress
        );
    }, []);

    const active = projects[activeIndex];

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="min-h-0 flex flex-col gap-6 px-4 py-8 md:h-screen md:overflow-hidden md:px-8 md:py-12 lg:px-16"
        >
            {/* ── Heading ── */}
            <div className="flex-none flex items-end justify-between">
              
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/25">
                    {String(activeIndex + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}
                </span>
                <div>
                    <p className="mb-1 text-xs font-semibold text-right uppercase tracking-[0.25em] text-foreground/40">
                        Selected Work
                    </p>
                    <h2 className="primary-font text-4xl font-bold uppercase leading-none tracking-wide text-foreground">
                        Highlights
                    </h2>
                </div>
            </div>

            {/* ── Main two-col ── */}
            <div className="flex-1 min-h-0 flex flex-col gap-6 md:flex-row">

                {/* Left: thumbnail stack + music bar */}
                <div className="flex w-full flex-col gap-4 min-h-0 md:w-[70%]">
                    <div className="group relative overflow-hidden aspect-[16/10] md:aspect-auto md:flex-1 md:min-h-0">
                        {projects.map((p, i) => {
                            const isActive = i === activeIndex;
                            const isPrev   = i === prevIndex;
                            return (
                                <div
                                    key={p.id}
                                    className="absolute inset-0"
                                    style={{
                                        opacity:    isActive ? 1 : 0,
                                        zIndex:     isActive ? 2 : isPrev ? 1 : 0,
                                        transition: isActive ? "opacity 500ms ease-in-out" : "none",
                                    }}
                                >
                                    <Image
                                        src={p.thumbnail}
                                        alt={p.title}
                                        fill
                                        className="object-contain object-top"
                                        sizes="80vw"
                                        priority={i === 0}
                                    />
                                </div>
                            );
                        })}
                        <a
                            href={`/projects/${active.id}`}
                            className="absolute inset-0 z-[4] flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        >
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#2d3436] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.03] active:scale-[0.99] transition-transform duration-200">
                                View Project
                            </span>
                        </a>
                    </div>

                    <MusicBar
                        project={active}
                        progress={progress}
                        isPlaying={isPlaying}
                        onPrev={() => navigate(-1)}
                        onPlayPause={() => setIsPlaying((p) => !p)}
                        onNext={() => navigate(1)}
                    />

                    {/* Mobile: project description + tags (hidden on desktop where playlist shows this) */}
                    <div className="md:hidden">
                        <p className="text-xs leading-relaxed text-foreground/35 line-clamp-3">
                            {active.description}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {active.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-foreground/40"
                                    style={{
                                        background: "var(--neu-tag-bg)",
                                        boxShadow: "2px 2px 4px var(--neu-tag-shadow), -2px -2px 4px var(--neu-shadow-light)",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-3">
                            <NeuButton
                                href={`/projects/${active.id}`}
                                variant="pill"
                                className="justify-center gap-2 !py-2 text-[10px] tracking-[0.12em] uppercase w-full"
                            >
                                View Project
                                <ArrowUpRight className="h-3 w-3" />
                            </NeuButton>
                        </div>
                    </div>
                </div>

                {/* Right: playlist */}
                <div className="hidden md:flex w-[30%] flex-col min-h-0">
                    <NeuCard variant="raised" className="flex-1 min-h-0 flex flex-col overflow-hidden">
                        {/* Playlist header */}
                        <div
                            className="flex-none flex items-center justify-between px-5 py-4 border-b"
                            style={{ borderColor: "var(--border)" }}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                                Playlist
                            </span>
                            <div className="flex gap-1">
                                {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                                    <span key={c} className="h-2 w-2 rounded-full opacity-50" style={{ background: c }} />
                                ))}
                            </div>
                        </div>

                        {/* Tracks */}
                        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
                            {projects.map((p, i) => (
                                <PlaylistItem
                                    key={p.id}
                                    project={p}
                                    index={i}
                                    active={activeIndex === i}
                                    onClick={() => goTo(i)}
                                />
                            ))}
                        </div>

                        {/* Active project description + tags */}
                        <div
                            className="flex-none px-5 py-4 border-t"
                            style={{ borderColor: "var(--border)" }}
                        >
                            <p className="text-xs leading-relaxed text-foreground/35 line-clamp-3">
                                {active.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {active.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-foreground/40"
                                        style={{
                                            background: "var(--neu-tag-bg)",
                                            boxShadow: "2px 2px 4px var(--neu-tag-shadow), -2px -2px 4px var(--neu-shadow-light)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </NeuCard>

                    {/* Scroll hint */}
                    <div className="mt-3 flex items-center justify-end gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/30">
                        <span>Scroll down</span>
                        <ChevronsDown className="h-3.5 w-3.5 animate-bounce" />
                    </div>
                </div>

            </div>
        </section>
    );
}
