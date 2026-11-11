import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import LinkButton from "@/components/ui/LinkButton";
import { projects } from "@/lib/projects";

const stack = ["Next.js", "TypeScript", "Tailwind", "React", "SQL"];

export default function Home() {
    const spotlight = projects.find((project) => project.featured) ?? projects[0];

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 lg:py-24">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                    <p className="mb-2 max-w-xl text-md text-text-secondary">
                        Software Developer
                    </p>
                    <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
                        Alex Esakof
                    </h1>
                    <p className="mt-6 max-w-xl text-xl">
                        This is where I make things on the internet.
                    </p>
                    <p className="mt-2 max-w-xl text-md text-text-secondary">
                        Full-stack web apps, side projects, and whatever else I&apos;m building.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <Badge key={tech} variant="primary" size="xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <LinkButton href="/projects" variant="primary">
                            View Projects
                        </LinkButton>
                        <LinkButton
                            href="https://github.com/aesakof"
                            variant="secondary"
                            external
                        >
                            GitHub
                        </LinkButton>
                    </div>
                </div>
                <Link href={`/projects/${spotlight.slug}`} className="group block">
                    {spotlight.coverImage && (
                        <div className="overflow-hidden rounded-xl border border-border shadow-lg">
                            <Image
                                src={spotlight.coverImage}
                                alt={spotlight.name}
                                width={640}
                                height={360}
                                priority
                                className="aspect-video w-full object-cover object-top"
                            />
                        </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-wide text-text-tertiary">
                                Featured project
                            </p>
                            <p className="font-heading text-xl group-hover:underline">
                                {spotlight.name}
                            </p>
                        </div>
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                </Link>
            </div>
        </div>
    );
}