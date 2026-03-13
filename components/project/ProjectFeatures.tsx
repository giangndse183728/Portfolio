import { Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

export default function ProjectFeatures({ project }: { project: Project }) {
    return (
        <section className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* Section heading */}
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    04
                </p>
                <h2 className="primary-font mb-10 text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-4xl">
                    Key Features
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    {project.features.map((feature, i) => (
                        <NeuCard
                            key={i}
                            variant="raised"
                            className="flex flex-col gap-3 p-6"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                                    style={{
                                        background: "var(--neu-bg)",
                                        boxShadow:
                                            "inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light)",
                                    }}
                                >
                                    <Sparkles className="h-4 w-4 text-foreground/40" />
                                </div>
                                <h3 className="text-md font-bold text-neu-heading">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed text-foreground/45">
                                {feature.description}
                            </p>
                        </NeuCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
