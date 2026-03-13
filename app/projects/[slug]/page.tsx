import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import NeuButton from "@/components/ui/NeuButton";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectProblem from "@/components/project/ProjectProblem";
import ProjectMoodboard from "@/components/project/ProjectMoodboard";
import ProjectDesignSystem from "@/components/project/ProjectDesignSystem";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectScreens from "@/components/project/ProjectScreens";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectGoalOutcome from "@/components/project/ProjectGoalOutcome";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | DNILB`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);
    if (!project) notFound();

    return (
        <main className="min-h-screen">
       
            {/* Sections */}
            <ProjectHero project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectProblem project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectMoodboard project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectDesignSystem project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectFeatures project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectScreens project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectTechStack project={project} />

            <div
                className="mx-4 md:mx-8 lg:mx-16"
                style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
            />

            <ProjectGoalOutcome project={project} />
        </main>
    );
}
