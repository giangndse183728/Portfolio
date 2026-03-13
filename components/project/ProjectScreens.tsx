import Image from "next/image";
import type { Project, ProjectScreen } from "@/data/projects";
import NeuCard from "@/components/ui/NeuCard";

function ScreenGrid({
    screens,
    variant,
}: {
    screens: ProjectScreen[];
    variant: "mobile" | "desktop";
}) {
    const isMobile = variant === "mobile";

    return (
        <div
            className={
                isMobile
                    ? "grid grid-cols-2 gap-4 md:grid-cols-4"
                    : "grid gap-6 md:grid-cols-2"
            }
        >
            {screens.map((screen, i) => (
                <NeuCard key={i} variant="raised" className="overflow-hidden">
                    <div
                        className={`relative w-full ${
                            isMobile ? "aspect-[9/19]" : "aspect-[16/9]"
                        }`}
                    >
                        <Image
                            src={screen.image}
                            alt={screen.caption}
                            fill
                            className={isMobile ? "object-cover" : "object-contain"}
                            sizes={
                                isMobile
                                    ? "(max-width: 768px) 50vw, 25vw"
                                    : "(max-width: 768px) 100vw, 50vw"
                            }
                        />
                    </div>
                    <div className="px-4 py-3">
                        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/35">
                            {screen.caption}
                        </p>
                    </div>
                </NeuCard>
            ))}
        </div>
    );
}

export default function ProjectScreens({ project }: { project: Project }) {
    const isMobile = project.screenLayout === "mobile";
    const hasWeb = project.webScreens && project.webScreens.length > 0;

    return (
        <section className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                    05
                </p>
                <h2 className="primary-font mb-10 text-2xl font-bold uppercase tracking-wider text-neu-heading md:text-3xl">
                    UI Screens
                </h2>

                {/* Mobile screens */}
                {isMobile && (
                    <>
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            Mobile App
                        </p>
                        <ScreenGrid screens={project.screens} variant="mobile" />
                    </>
                )}

                {/* Web screens */}
                {hasWeb && (
                    <div className={isMobile ? "mt-14" : ""}>
                        {isMobile && (
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                                Web Platform
                            </p>
                        )}
                        <ScreenGrid screens={project.webScreens!} variant="desktop" />
                    </div>
                )}

                {/* Default (non-mobile, no webScreens) */}
                {!isMobile && !hasWeb && (
                    <ScreenGrid screens={project.screens} variant="desktop" />
                )}
            </div>
        </section>
    );
}
