import { Trophy, CheckCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

export default function ProjectGoalOutcome({ project }: { project: Project }) {
    return (
        <section className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-w-6xl">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    07
                </p>
                <h2 className="primary-font mb-10 text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-3xl">
                    Goal & Outcome
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Goal */}
                    <NeuCard variant="raised" className="flex flex-col gap-4 p-6 md:p-8">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{
                                background: "var(--neu-bg)",
                                boxShadow:
                                    "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)",
                            }}
                        >
                            <Trophy className="h-5 w-5 text-foreground/40" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                            Goal
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/50 md:text-base">
                            {project.goal.summary}
                        </p>
                    </NeuCard>

                    {/* Outcome */}
                    <NeuCard variant="raised" className="flex flex-col gap-4 p-6 md:p-8">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{
                                background: "var(--neu-bg)",
                                boxShadow:
                                    "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)",
                            }}
                        >
                            <CheckCircle className="h-5 w-5 text-foreground/40" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                            Outcome
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/50 md:text-base">
                            {project.goal.outcome}
                        </p>
                    </NeuCard>
                </div>
            </div>
        </section>
    );
}
