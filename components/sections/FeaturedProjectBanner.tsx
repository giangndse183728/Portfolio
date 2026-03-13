"use client";

import Image from "next/image";
import { Disc3 } from "lucide-react";
import { projects } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";
import { useTheme } from "@/components/ThemeProvider";

export default function FeaturedProjectBanner() {
    const { theme } = useTheme();
    const years = projects.map((p) => Number(p.year));
    const yearRange =
        Math.min(...years) === Math.max(...years)
            ? String(Math.max(...years))
            : `${Math.min(...years)} – ${Math.max(...years)}`;

    const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).slice(0, 6);

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <NeuCard variant="raised" className="flex items-center gap-4 px-4 py-4 overflow-hidden relative md:gap-6 md:px-6 md:py-5">

                {/* Album art */}
                <NeuCard variant="inset" className="shrink-0 h-16 w-16 md:h-24 md:w-24 rounded-xl md:rounded-2xl overflow-hidden relative flex items-center justify-center">
                   
                    <div className="relative z-10 flex items-center justify-center">
                        <div
                            className="h-10 w-10 md:h-16 md:w-16 rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite]"
                            style={{
                                background: "conic-gradient(#636e72 0deg, #b2bec3 60deg, #636e72 120deg, #b2bec3 180deg, #636e72 240deg, #b2bec3 300deg, #636e72 360deg)",
                                boxShadow: "2px 2px 6px rgba(0,0,0,0.2), -1px -1px 4px rgba(255,255,255,0.4)",
                            }}
                        >
                            <div
                                className="h-5 w-5 md:h-7 md:w-7 rounded-full overflow-hidden flex items-center justify-center animate-[spin_8s_linear_infinite_reverse]"
                                style={{
                                    background: "linear-gradient(135deg, var(--neu-bg), var(--neu-surface-dim))",
                                }}
                            >
                                <Image
                                    src="/images/dnilb.png"
                                    alt="logo"
                                    width={28}
                                    height={28}
                                    className={`w-full h-full object-contain p-0.5 ${theme === "dark" ? "invert" : ""}`}
                                    />
                                </div>
                            </div>
                        </div>
                
                    <Disc3
                        className="absolute bottom-1 right-1 h-3 w-3 md:bottom-1.5 md:right-1.5 md:h-4 md:w-4 opacity-20 text-neu-heading"
                    />
                </NeuCard>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                    <p className="mb-0.5 md:mb-1 text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/35">
                       Project Album · {yearRange}
                    </p>
                    <h2 className="primary-font text-2xl md:text-6xl font-bold uppercase leading-none tracking-wide text-neu-heading">
                        <span className="text-foreground">Featured </span>
                        <span className="text-foreground/60">Projects</span>
                    </h2>
                    <div className="mt-1.5 md:mt-2.5 flex flex-wrap items-center gap-1 md:gap-1.5">
                        <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.25em] text-foreground/30 mr-0.5 md:mr-1">
                            Main Role
                        </span>
                        {["Frontend Lead", "UI/UX Lead", "Backend", "Mobile"].map((role) => (
                            <span
                                key={role}
                                className="rounded-full px-1.5 py-0.5 text-[7px] md:px-2.5 md:text-[9px] font-semibold uppercase tracking-[0.08em] md:tracking-[0.12em] text-foreground/40"
                                style={{
                                    background: "var(--neu-tag-bg)",
                                    boxShadow: "2px 2px 4px var(--neu-tag-shadow), -2px -2px 4px var(--neu-shadow-light)",
                                }}
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                </div>

            
                </NeuCard>
            </div>
    
    );
}
