import { notFound } from "next/navigation"
import Image from "next/image"
import { projects } from "@/lib/projects"

export function generateStaticParams() {
    return projects.map(project => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {project.image && (
                <Image
                    src={project.image}
                    alt={project.name}
                    width={1280}
                    height={720}
                    className="w-full aspect-video object-cover rounded-lg mb-6"
                />
            )}
            <h1 className="text-2xl font-semibold font-heading">{project.name}</h1>
            <p className="text-text-secondary mt-2">{project.description}</p>
            <div className="flex gap-4 mt-6">
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-sm bg-surface-raised border border-border hover:border-text-secondary transition-colors"
                >
                    View Live
                </a>
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-sm bg-surface-raised border border-border hover:border-text-secondary transition-colors"
                >
                    View Repo
                </a>
            </div>
        </div>
    )
}