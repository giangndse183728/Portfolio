"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import { useTheme } from "@/components/ThemeProvider";
import { type KeyDef, rows, allTechs, U, GAP } from "@/data/techstack";

// ─── TechKey ─────────────────────────────────────────────────────────────────

function TechKey({
    keyDef,
    selected,
    onSelect,
}: {
    keyDef: KeyDef;
    selected: boolean;
    onSelect: (k: KeyDef) => void;
}) {
    const units = keyDef.u ?? 1;
    const width = U * units + GAP * (units - 1);
    const { theme } = useTheme();

    return (
        <button
            className={`kbc-button kbc-button-lg !flex flex-col items-center justify-center gap-1 shrink-0 transition-all duration-150 ${selected ? "active" : ""
                }`}
            style={{ width, height: U, padding: 0 }}
            title={keyDef.label}
            aria-label={keyDef.label}
            onClick={() => !keyDef.mod && onSelect(keyDef)}
        >
            {keyDef.mod ? (
                <span className="text-[10px] font-semibold tracking-wide text-neu-body">
                    {keyDef.label}
                </span>
            ) : (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center mx-auto" aria-hidden>
                    {keyDef.icon ? (
                        <Image
                            src={keyDef.icon}
                            alt={keyDef.label}
                            width={28}
                            height={28}
                            className={`block object-contain ${keyDef.id === "logo" && theme === "dark" ? "invert" : ""}`}
                        />
                    ) : (
                        <span className="block h-5 w-5 rounded bg-surface-dim" style={{ boxShadow: "inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light)" }} />
                    )}
                </span>
            )}
        </button>
    );
}

// ─── KeyRow ──────────────────────────────────────────────────────────────────

function KeyRow({
    keys,
    selectedId,
    onSelect,
}: {
    keys: KeyDef[];
    selectedId: string | null;
    onSelect: (k: KeyDef) => void;
}) {
    return (
        <div className="flex gap-[6px]">
            {keys.map((k) => (
                <TechKey
                    key={k.id}
                    keyDef={k}
                    selected={k.id === selectedId}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}

// ─── InfoCard ────────────────────────────────────────────────────────────────

function InfoCard({ tech }: { tech: KeyDef }) {
    return (
        <div className="flex flex-row-reverse items-start gap-4 p-4">
            {/* Icon on the far right */}
            {tech.icon && (
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--neu-bg)", boxShadow: "4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light)" }}>
                    <Image
                        src={tech.icon}
                        alt={tech.label}
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                </div>
            )}

            {/* Text, right-aligned, just to the left of the icon */}
            <div className="flex-1 min-w-0 text-right">
                <div className="mb-1 flex flex-wrap items-center justify-end gap-2">
                    <h3 className="text-sm font-bold text-neu-heading">{tech.label}</h3>
                    {tech.category && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-dim text-neu-body">
                            {tech.category}
                        </span>
                    )}
                </div>
                <p className="text-xs leading-relaxed text-neu-body">
                    {tech.description ?? "No description yet."}
                </p>
            </div>
        </div>
    );
}

// ─── Mobile Tech Grid ────────────────────────────────────────────────────────

function MobileTechGrid({
    techs,
    selectedId,
    onSelect,
}: {
    techs: KeyDef[];
    selectedId: string | null;
    onSelect: (k: KeyDef) => void;
}) {
    return (
        <div className="grid grid-cols-5 gap-2.5">
            {techs.map((k) => (
                <button
                    key={k.id}
                    onClick={() => onSelect(k)}
                    className="flex flex-col items-center gap-1.5 rounded-xl p-2.5 transition-all duration-150"
                    style={
                        k.id === selectedId
                            ? { background: "var(--neu-surface-dim)", boxShadow: "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)" }
                            : { background: "var(--neu-bg)", boxShadow: "3px 3px 6px var(--neu-shadow-dark), -3px -3px 6px var(--neu-shadow-light)" }
                    }
                >
                    {k.icon && (
                        <Image
                            src={k.icon}
                            alt={k.label}
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                        />
                    )}
                    <span className="text-[8px] font-semibold uppercase tracking-wide text-foreground/50 truncate w-full text-center">
                        {k.label}
                    </span>
                </button>
            ))}
        </div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function TechStack() {
    const [selected, setSelected] = useState<KeyDef | null>(() => rows[0][0]);

    const handleSelect = (k: KeyDef) => {
        setSelected((prev) => (prev?.id === k.id ? null : k));
    };

    return (
        <section
            id="tech-stack"
            className="hidden md:flex flex-col gap-6 px-4 py-10 md:min-h-screen md:justify-center md:gap-8 md:px-8 md:py-20 lg:px-16"
        >
            {/* ── Mobile layout ── */}
            <div className="md:hidden flex flex-col gap-6">
                <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/40">
                        Tools &amp; Technologies
                    </p>
                    <h2 className="primary-font text-[clamp(2rem,10vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-wide text-foreground">
                        Tech <span className="text-foreground/60">Stack</span>
                    </h2>
                    <p className="mt-4 text-xs leading-relaxed text-foreground/30">
                        The technologies and tools I use daily to build modern digital experiences.
                    </p>
                </div>

                <InfoCard tech={selected ?? rows[0][0]} />

                <MobileTechGrid
                    techs={allTechs}
                    selectedId={selected?.id ?? null}
                    onSelect={handleSelect}
                />

                <NeuButton
                    variant="pill"
                    href="/projects"
                    className="justify-center gap-2 !py-2 text-xs tracking-[0.15em] uppercase w-full"
                >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                </NeuButton>
            </div>

            {/* ── Desktop layout ── */}
            <div className="hidden md:flex flex-col gap-10 md:flex-row md:items-start md:gap-24">

                {/* Left — Heading + CTA */}
                <div className="flex w-full flex-col justify-between gap-8 md:w-64 lg:w-72">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
                            Tools &amp; Technologies
                        </p>
                        <h2 className="primary-font text-[clamp(2.5rem,6vw,80px)] font-bold uppercase leading-[0.9] tracking-wide text-foreground">
                            Tech
                            <br />
                            <span className="text-foreground/60">Stack</span>
                        </h2>
                        <p className="mt-6 text-sm text-foreground/30">
                            A 40% keyboard showcasing the technologies and tools I use daily to build modern digital experiences. While my main focus is frontend development and UI/UX design, I also have experience with mobile development and basic backend integration, enabling me to create well-rounded, user-centered applications.
                        </p>
                    </div>

                    <div className="mt-auto">
                        <NeuButton
                            variant="pill"
                            href="/projects"
                            className="justify-center gap-2 !py-2 text-xs tracking-[0.15em] uppercase"
                        >
                            View Projects
                            <ArrowRight className="h-4 w-4" />
                        </NeuButton>
                    </div>
                </div>

                {/* Right — Info card + Keyboard stacked */}
                <div className="flex flex-col gap-4 w-full">

                    <div className="transition-all duration-300 ease-in-out">
                        <InfoCard tech={selected ?? rows[0][0]} />
                    </div>

                    <div className="w-full pb-2">
                        <div
                            className="rounded-3xl p-4 w-max"
                            style={{
                                background: "var(--neu-surface-bright)",
                                boxShadow: "6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)",
                            }}
                        >
                            <div
                                className="rounded-2xl p-4"
                                style={{
                                    background: "var(--neu-surface-dim)",
                                    boxShadow: "inset 4px 4px 10px var(--neu-shadow-dark), inset -4px -4px 10px var(--neu-shadow-light)",
                                }}
                            >
                                <div className="flex flex-col gap-1.5">
                                    {rows.map((row, i) => (
                                        <KeyRow
                                            key={i}
                                            keys={row}
                                            selectedId={selected?.id ?? null}
                                            onSelect={handleSelect}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-3 flex items-center justify-between px-1">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-foreground/20">
                                    Tech Stack Keyboard
                                </span>
                                <div className="flex gap-1.5">
                                    {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                                        <div
                                            key={c}
                                            className="h-2 w-2 rounded-full opacity-50"
                                            style={{ background: c }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
