import { Target, AlertCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

export default function ProjectProblem({ project }: { project: Project }) {
    return (
        <section className="px-4 py-20 md:px-8 lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* Section heading */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                        01 &mdash; Understanding
                    </p>
                    <h2 className="primary-font text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-3xl">
                        The Problem
                    </h2>
                </div>

                {/* Statement — large quote-style card */}
                <NeuCard variant="raised" className="relative mb-14 overflow-hidden p-8 md:p-12">
                    <span
                        className="primary-font pointer-events-none absolute -top-4 left-6 text-[120px] leading-none text-foreground/[0.04] select-none md:left-10 md:text-[160px]"
                        aria-hidden
                    >
                        &ldquo;
                    </span>
                    <p className="relative z-10 text-base leading-[1.85] text-foreground/50 md:text-lg">
                        {project.problem.statement}
                    </p>
                </NeuCard>

                {/* Goals */}
                <div className="mb-6 flex items-center gap-3">
                    <div
                        className="h-px flex-1"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, var(--border), transparent)",
                        }}
                    />
                    <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                        Project Goals
                    </p>
                    <div
                        className="h-px flex-1"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, var(--border), transparent)",
                        }}
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {project.problem.goals.map((goal, i) => (
                        <NeuCard
                            key={i}
                            variant="flat"
                            className="group relative flex items-start gap-4 p-5 transition-shadow duration-300 hover:shadow-[6px_6px_14px_var(--neu-shadow-dark),-6px_-6px_14px_var(--neu-shadow-light)]"
                        >
                            {/* Number badge */}
                            <div
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                                style={{
                                    background: "var(--neu-bg)",
                                    boxShadow:
                                        "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)",
                                }}
                            >
                                <span className="primary-font text-[11px] font-bold text-foreground/30">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="flex-1 pt-0.5">
                                <p className="text-sm font-medium leading-relaxed text-foreground/50 transition-colors duration-200 group-hover:text-foreground/65">
                                    {goal}
                                </p>
                            </div>

                            <Target className="mt-1 h-3.5 w-3.5 shrink-0 text-foreground/15 transition-colors duration-200 group-hover:text-foreground/30" />
                        </NeuCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
