import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import ImageCarousel from "@/components/ui/ImageCarousel"
import LinkButton from "@/components/ui/LinkButton"
import Badge from "@/components/ui/Badge"
import type { Metadata } from "next"
import Card from "@/components/ui/Card"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        return { title: "Project not found" }
    }

    const title = `${project.name} | Alex Esakof`

    return {
        title,
        description: project.blurb,
        openGraph: {
            title,
            description: project.blurb,
            url: `https://aesakof.github.io/projects/${project.slug}`,
            siteName: "Alex Esakof",
            type: "website",
            images: [
                {
                    url: "https://aesakof.github.io/og-image.png",
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: project.blurb,
            images: ["https://aesakof.github.io/og-image.png"],
        },
    }
}


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

            <div className="flex flex-wrap gap-4 mt-6 mb-4">
                {
                    project.tags?.map( (tag) => (
                        <Badge variant="primary" key={tag}>{tag}</Badge>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3">
                    <ImageCarousel images={project.images ?? []} alt={project.name} />
                    <div className="flex gap-4 mt-8">
                        <LinkButton href={project.url} variant="primary" external>View Live</LinkButton>
                        <LinkButton href={project.repoUrl} variant="secondary" external>GitHub</LinkButton>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <Card className="lg:col-span-2 self-start">
                        <p className="text-lg leading-relaxed text-text-primary">{project.description}</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}