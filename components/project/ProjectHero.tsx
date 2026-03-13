import Image from "next/image";
import { ArrowUpRight, Calendar, Users, Briefcase } from "lucide-react";
import type { Project } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";

export default function ProjectHero({ project }: { project: Project }) {
    return (
        <section className="flex h-screen items-center px-4 md:px-8 lg:px-16">
            <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                {/* Left — Image */}
                <div className="w-full lg:w-[55%]">
                    <NeuCard variant="raised" className="overflow-hidden">
                        <div className="relative aspect-[16/10] w-full">
                            <Image
                                src={project.mockup}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                priority
                            />
                        </div>
                    </NeuCard>
                </div>

                {/* Right — Info */}
                <div className="flex w-full flex-col gap-6 lg:w-[45%]">
                    {/* Logo + Title */}
                    <div className="flex items-center gap-4">
                        <NeuCard
                            variant="flat"
                            className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={project.logo}
                                alt={project.title}
                                width={56}
                                height={56}
                                className="h-full w-full object-cover p-1.5"
                            />
                        </NeuCard>
                        <div>
                            <h1 className="primary-font text-3xl font-bold uppercase tracking-wider text-neu-heading md:text-4xl">
                                {project.title}
                            </h1>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
                                {project.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-foreground/50">
                        {project.description}
                    </p>

                    {/* Meta grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <NeuCard variant="flat" className="flex items-center gap-3 px-4 py-3">
                            <Briefcase className="h-4 w-4 shrink-0 text-foreground/30" />
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30">Role</p>
                                <p className="text-xs font-semibold text-neu-heading">{project.role}</p>
                            </div>
                        </NeuCard>
                        <NeuCard variant="flat" className="flex items-center gap-3 px-4 py-3">
                            <Calendar className="h-4 w-4 shrink-0 text-foreground/30" />
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30">Duration</p>
                                <p className="text-xs font-semibold text-neu-heading">{project.duration}</p>
                            </div>
                        </NeuCard>
                        <NeuCard variant="flat" className="flex items-center gap-3 px-4 py-3">
                            <Users className="h-4 w-4 shrink-0 text-foreground/30" />
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30">Team</p>
                                <p className="text-xs font-semibold text-neu-heading">{project.team}</p>
                            </div>
                        </NeuCard>
                        <NeuCard variant="flat" className="flex items-center gap-3 px-4 py-3">
                            <Calendar className="h-4 w-4 shrink-0 text-foreground/30" />
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30">Year</p>
                                <p className="text-xs font-semibold text-neu-heading">{project.year}</p>
                            </div>
                        </NeuCard>
                    </div>

                    {/* Live site button */}
                    {project.url && (
                        <NeuButton
                            href={project.url}
                            variant="raised"
                            className="mt-2 gap-2 self-start text-xs uppercase tracking-[0.15em]"
                        >
                            Visit Live Site
                            <ArrowUpRight className="h-4 w-4" />
                        </NeuButton>
                    )}
                </div>
            </div>
        </section>
    );
}
