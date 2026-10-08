import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import ImageCarousel from "@/components/ui/ImageCarousel"
import LinkButton from "@/components/ui/LinkButton"

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
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
            <h1 className="text-4xl font-semibold font-heading mb-4">{project.name}</h1>

            {/* tags row goes here once the data model supports it */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3">
                    <ImageCarousel images={project.images ?? []} alt={project.name} />
                    <div className="flex gap-4 mt-8">
                        <LinkButton href={project.url} variant="primary">View Live</LinkButton>
                        <LinkButton href={project.repoUrl} variant="secondary">GitHub</LinkButton>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="flex gap-4 mt-6 mb-8">
                        <p className="text-text-secondary">{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}