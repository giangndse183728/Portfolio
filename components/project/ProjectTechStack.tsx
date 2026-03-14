"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

const TOOL_ICON: Record<string, string> = {
    "Next.js": "/icon/nextjs.svg",
    "Tailwind CSS": "/icon/tailwind.svg",
    Figma: "/icon/figma.svg",
    React: "/icon/react.svg",
    "Three.js": "/icon/Threejs.svg",
    "Node.js": "/icon/nodejs.svg",
    MongoDB: "/icon/mongodb.svg",
    PostgreSQL: "/icon/postgresql.svg",
    GSAP: "/icon/gsap.svg",
    TypeScript: "/icon/ts.svg",
    JavaScript: "/icon/js.svg",
    Flutter: "/icon/flutter.svg",
    Firebase: "/icon/firebase.svg",
    NestJS: "/icon/nest.svg",
    GCP: "/icon/gcp.svg",
    Vercel: "/icon/vercel.svg",
    Shadcn: "/icon/shadcn.svg",
    Supabase: "/icon/supabase.svg",
    Redis: "/icon/redis.svg",
    Postman: "/icon/postman.svg",
};

const U = 58;

export default function ProjectTechStack({ project }: { project: Project }) {
    return (
        <section className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
                <p className="mb-1 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    06
                </p>
                <h2 className="primary-font mb-10 text-center text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-3xl">
                    Tech Stack
                </h2>

                <div
                    className="rounded-3xl p-5 w-max max-w-full"
                    style={{
                        background: "var(--neu-surface-bright)",
                        boxShadow:
                            "6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light)",
                    }}
                >
                    <div
                        className="rounded-2xl p-5"
                        style={{
                            background: "var(--neu-surface-dim)",
                            boxShadow:
                                "inset 4px 4px 10px var(--neu-shadow-dark), inset -4px -4px 10px var(--neu-shadow-light)",
                        }}
                    >
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => {
                                const icon = TOOL_ICON[tool];
                                return (
                                    <button
                                        key={tool}
                                        className="kbc-button kbc-button-lg !flex flex-col items-center justify-center gap-1 shrink-0"
                                        style={{
                                            width: U,
                                            height: U,
                                            padding: 0,
                                            cursor: "default",
                                        }}
                                        title={tool}
                                        aria-label={tool}
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center mx-auto">
                                            {icon ? (
                                                <Image
                                                    src={icon}
                                                    alt={tool}
                                                    width={28}
                                                    height={28}
                                                    className="block object-contain"
                                                />
                                            ) : (
                                                <span
                                                    className="block h-5 w-5 rounded bg-surface-dim"
                                                    style={{
                                                        boxShadow:
                                                            "inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light)",
                                                    }}
                                                />
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between px-1">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-foreground/20">
                            Tools & Technologies
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
        </section>
    );
}
