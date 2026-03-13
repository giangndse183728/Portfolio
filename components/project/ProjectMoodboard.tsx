import Image from "next/image";
import type { Project } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

export default function ProjectMoodboard({ project }: { project: Project }) {
    if (!project.moodboard) return null;

    const { description, images } = project.moodboard;

    return (
        <section className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* Section heading */}
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    02
                </p>
                <h2 className="primary-font mb-4 text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-3xl">
                    Moodboard
                </h2>
                <p className="mb-10 max-w-2xl text-sm leading-relaxed text-foreground/40">
                    {description}
                </p>

                {/* Image grid */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {images.map((src, i) => (
                        <NeuCard
                            key={i}
                            variant="raised"
                            className="overflow-hidden"
                        >
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={src}
                                    alt={`${project.title} moodboard ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </NeuCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
