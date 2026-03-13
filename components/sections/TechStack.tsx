"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import { useTheme } from "@/components/ThemeProvider";

type KeyDef = {
    id: string;
    label: string;
    icon?: string;
    u?: number;
    mod?: boolean;
    category?: string;
    description?: string;
    level?: "Familiar" | "Comfortable" | "Proficient" | "Expert";
};

const rows: KeyDef[][] = [
    // Row 1
    [
        {
            id: "logo", label: "IM_DNILB", icon: "/images/dnilb.png",
            description: "Click keycap to see more details",
        },
        {
            id: "html", label: "HTML", icon: "/icon/html.svg",
            category: "Markup", level: "Expert",
            description: "The backbone of every webpage. I write semantic, accessible HTML that search engines and screen readers love.",
        },
        {
            id: "css", label: "CSS", icon: "/icon/css.svg",
            category: "Styling", level: "Expert",
            description: "From custom properties to complex animations — CSS is where design meets code for me.",
        },
        {
            id: "js", label: "JS", icon: "/icon/js.svg",
            category: "Language", level: "Expert",
            description: "The language of the web. I use modern ES2024+ patterns, async flows, and browser APIs daily.",
        },
        {
            id: "ts", label: "TS", icon: "/icon/ts.svg",
            category: "Language", level: "Proficient",
            description: "TypeScript keeps my codebases safe and self-documenting. I default to it on every new project.",
        },
        {
            id: "react", label: "React", icon: "/icon/react.svg",
            category: "UI Library", level: "Expert",
            description: "My primary UI library. I build with hooks, context, and server components using the latest React 19 features.",
        },
        {
            id: "nextjs", label: "Next.js", icon: "/icon/nextjs.svg",
            category: "Framework", level: "Expert",
            description: "My go-to full-stack framework — App Router, server actions, ISR, and edge functions are second nature.",
        },
        {
            id: "threejs", label: "Three.js", icon: "/icon/threejs.svg",
            category: "3D / WebGL", level: "Comfortable",
            description: "I use Three.js for immersive 3D web experiences, combining it with GSAP for cinematic animations.",
        },
        {
            id: "shadcn", label: "Shadcn", icon: "/icon/shadcn.svg",
            category: "UI Components", level: "Proficient",
            description: "Accessible, composable UI primitives built on Radix. I extend them to match custom design systems.",
        },
        {
            id: "tailwind", label: "Tailwind", icon: "/icon/tailwind.svg",
            category: "Styling", level: "Expert",
            description: "Utility-first CSS that pairs perfectly with component-driven development. I've used it since v1.",
        },
        {
            id: "gsap", label: "GSAP", icon: "/icon/gsap.svg", u: 1.8,
            category: "Animation", level: "Proficient",
            description: "GreenSock Animation Platform powers the scroll-driven and timeline animations across this portfolio.",
        },
        {
            id: "chatgpt", label: "ChatGPT", icon: "/icon/chatgpt.svg",
            category: "AI Tool", level: "Proficient",
            description: "A daily tool for ideation, debugging, and rapid prototyping. I treat it like a senior pair-programmer.",
        },
    ],
    // Row 2
    [
        {
            id: "nodejs", label: "Node.js", icon: "/icon/nodejs.svg", u: 1.5,
            category: "Runtime", level: "Proficient",
            description: "Server-side JavaScript runtime. I build REST APIs, CLI tools, and backend services with it.",
        },
        {
            id: "express", label: "Express", icon: "/icon/express-logo.svg",
            category: "Framework", level: "Comfortable",
            description: "Minimal Node.js framework for quickly wiring up REST endpoints and middleware pipelines.",
        },
        {
            id: "nestjs", label: "NestJS", icon: "/icon/nest.svg",
            category: "Framework", level: "Comfortable",
            description: "Opinionated, modular Node.js framework inspired by Angular. Great for larger backend architectures.",
        },
        {
            id: "postgres", label: "Postgres", icon: "/icon/postgresql.svg",
            category: "Database", level: "Comfortable",
            description: "My preferred relational database. I pair it with Prisma for type-safe queries.",
        },
        {
            id: "mongodb", label: "MongoDB", icon: "/icon/mongodb.svg",
            category: "Database", level: "Comfortable",
            description: "Document-based NoSQL database. I reach for it when flexible schemas matter more than relations.",
        },
        {
            id: "redis", label: "Redis", icon: "/icon/redis.svg",
            category: "Cache / Queue", level: "Familiar",
            description: "In-memory store for caching, sessions, and pub/sub messaging in high-throughput applications.",
        },
        {
            id: "firebase", label: "Firebase", icon: "/icon/firebase.svg",
            category: "BaaS", level: "Proficient",
            description: "Google's all-in-one backend. I use Firestore, Auth, and Cloud Functions for rapid prototypes.",
        },
        {
            id: "gcp", label: "GCP", icon: "/icon/gcp.svg",
            category: "Cloud", level: "Familiar",
            description: "Google Cloud for hosting, Cloud Run, and storage. Pairs well with Firebase projects.",
        },
        {
            id: "supabase", label: "Supabase", icon: "/icon/supabase.svg",
            category: "BaaS", level: "Comfortable",
            description: "Open-source Firebase alternative. Postgres + realtime + auth in a single platform.",
        },
        {
            id: "flutter", label: "Flutter", icon: "/icon/flutter.svg", u: 2.5,
            category: "Mobile", level: "Comfortable",
            description: "Google's cross-platform UI toolkit. I build iOS and Android apps from a single Dart codebase.",
        },
        {
            id: "gemini", label: "Gemini", icon: "/icon/gemini.svg",
            category: "AI Tool", level: "Comfortable",
            description: "Google's multimodal AI model. I integrate it via API for intelligent features in web and mobile apps.",
        },
    ],
    // Row 3
    [
        {
            id: "git", label: "Git", icon: "/icon/git.svg", u: 2,
            category: "Version Control", level: "Expert",
            description: "Branching, rebasing, bisect — I'm comfortable with the full Git workflow in team environments.",
        },
        {
            id: "github", label: "GitHub", icon: "/icon/github.svg",
            category: "Platform", level: "Expert",
            description: "PRs, Actions CI/CD, GitHub Pages — my entire workflow lives here.",
        },
        {
            id: "postman", label: "Postman", icon: "/icon/postman.svg",
            category: "API Testing", level: "Proficient",
            description: "My go-to for testing REST and GraphQL APIs during development and collaboration.",
        },
        {
            id: "vercel", label: "Vercel", icon: "/icon/vercel.svg",
            category: "Deployment", level: "Expert",
            description: "Zero-config deployment for Next.js. Preview deployments per branch make collaboration seamless.",
        },
        {
            id: "jira", label: "Jira", icon: "/icon/jira.svg",
            category: "Project Mgmt", level: "Comfortable",
            description: "Sprint planning, ticket tracking, and roadmap management in agile team settings.",
        },
        {
            id: "vscode", label: "VS Code", icon: "/icon/vscode.svg",
            category: "Editor", level: "Expert",
            description: "My main editor — heavily customized with extensions, snippets, and keybindings.",
        },
        {
            id: "cursor", label: "Cursor", icon: "/icon/cursor.svg",
            category: "AI Editor", level: "Proficient",
            description: "AI-native code editor. The agent mode and inline edits dramatically speed up my workflow.",
        },
        {
            id: "framer", label: "Framer", icon: "/icon/framer.svg",
            category: "Design / Prototype", level: "Comfortable",
            description: "Interactive prototyping tool. I use it to validate motion and layout before coding.",
        },
        {
            id: "figma", label: "Figma", icon: "/icon/figma.svg", u: 2,
            category: "Design", level: "Proficient",
            description: "My primary design tool. I go from wireframe to polished UI with auto-layout and component libraries.",
        },
        { id: "arrow-up", label: "↑", mod: true },
        {
            id: "claude", label: "Claude", icon: "/icon/claude.svg",
            category: "AI Tool", level: "Expert",
            description: "Anthropic's AI — my preferred assistant for long-context reasoning, code review, and architecture decisions.",
        },
    ],
    // Row 4
    [
        { id: "fn1", label: "Ctrl", mod: true, u: 1.2 },
        { id: "fn2", label: "Alt", mod: true, u: 1.2 },
        { id: "space", label: "< Tech Stack />", mod: true, u: 5.78 },
        { id: "fn9", label: "Alt", mod: true, u: 1.2 },
        { id: "fn10", label: "Ctrl", mod: true, u: 1.2 },
        { id: "arrow-left", label: "←", mod: true },
        { id: "arrow-down", label: "↓", mod: true },
        { id: "arrow-right", label: "→", mod: true },
    ],
];

const LEVEL_COLOR: Record<string, string> = {
    Familiar: "bg-[#e2e8f0] text-[#64748b]",
    Comfortable: "bg-[#dbeafe] text-[#3b82f6]",
    Proficient: "bg-[#d1fae5] text-[#10b981]",
    Expert: "bg-[#fef3c7] text-[#f59e0b]",
};

const allTechs: KeyDef[] = rows.flat().filter((k) => !k.mod && k.icon);

const U = 58;
const GAP = 6;

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
