"use client"

import Link from "next/link"
import Card from "@/components/ui/Card"
import { projects } from "@/lib/projects"

export default function Projects() {
    return (
        <div className="p-24 mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 max-w-7xl">
                {projects.map(project => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                        <Card 
                            image={project.image ? { src: project.image, alt: project.name, width: 640, height: 360 } : undefined}
                            className="hover:border-text-secondary transition-colors h-full"
                            title={project.name}
                            description={project.description}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}