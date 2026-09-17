"use client"

import Link from "next/link"
import Image from "next/image"
import Card from "@/components/ui/Card"
import { projects } from "@/lib/projects"

export default function Projects() {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                        <Card 
                            className="hover:border-text-secondary transition-colors"
                            title={project.name}
                            description={project.description}
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={640}
                                    height={360}
                                    className="w-full aspect-video object-cover rounded-t-sm"
                                />
                            )}
                            <div className="p-4">
                                <h2 className="text-lg font-medium">{project.name}</h2>
                                <p className="text-text-secondary text-sm mt-1">{project.description}</p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}