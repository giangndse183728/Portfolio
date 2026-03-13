import { Type } from "lucide-react";
import type { Project } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

export default function ProjectDesignSystem({ project }: { project: Project }) {
    if (!project.designSystem) return null;

    const { colors, fonts, description } = project.designSystem;

    return (
        <section className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* Section heading */}
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    03
                </p>
                <h2 className="primary-font mb-4 text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-3xl">
                    Design System
                </h2>
                <p className="mb-10 max-w-2xl text-sm leading-relaxed text-foreground/40">
                    {description}
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Colors */}
                    <NeuCard variant="raised" className="p-6">
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            Color Palette
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {colors.map((color) => (
                                <div key={color.hex} className="flex items-center gap-3">
                                    <div
                                        className="h-10 w-10 shrink-0 rounded-xl"
                                        style={{
                                            background: color.hex,
                                            boxShadow:
                                                "inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.15)",
                                        }}
                                    />
                                    <div>
                                        <p className="text-xs font-semibold text-neu-heading">
                                            {color.name}
                                        </p>
                                        <p className="font-mono text-[10px] uppercase text-foreground/30">
                                            {color.hex}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </NeuCard>

                    {/* Typography */}
                    <NeuCard variant="raised" className="p-6">
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            Typography
                        </p>
                        <div className="flex flex-col gap-4">
                            {fonts.map((font) => (
                                <NeuCard
                                    key={font.name}
                                    variant="inset"
                                    className="flex items-center gap-4 rounded-xl p-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--neu-bg)] shadow-[3px_3px_6px_var(--neu-shadow-dark),-3px_-3px_6px_var(--neu-shadow-light)]">
                                        <Type className="h-4 w-4 text-foreground/40" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-neu-heading">
                                            {font.name}
                                        </p>
                                        <p className="text-[10px] text-foreground/40">
                                            {font.usage}
                                        </p>
                                    </div>
                                </NeuCard>
                            ))}
                        </div>
                    </NeuCard>
                </div>
            </div>
        </section>
    );
}
