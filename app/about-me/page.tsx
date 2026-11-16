import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "Software developer with a background in QA, building full-stack web apps.",
};

export default function AboutMe() {
    return (
        <div className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
                <div className="max-w-2xl">
                    <h1 className="font-heading text-5xl font-semibold tracking-tight">
                        About Me
                    </h1>

                    <div className="mt-8 space-y-6 text-lg leading-relaxed">
                        <p>
                            I&apos;m Alex! I grew up outside Boston and got my B.S. in Computer Science from Brandeis University in 2016. I then spent two years as a Technical Analyst and six as a QA Engineer, learning how products are built and, more usefully, where they break.
                        </p>
                        <p>
                            I kept building on the side the whole time: a Python tool for work, a React Pokedex back when I was first learning React, and most recently a full-stack Next.js starter that I now use as the base for new projects (including this site!).
                        </p>
                        <p>
                            Away from the keyboard I&apos;m usually running, playing ultimate frisbee, cooking, or being a big old nerd playing video games, board games, and Magic: The Gathering.
                        </p>
                    </div>

                    <p className="mt-12 text-lg">
                        Want to see what I&apos;ve built?{" "}
                        <Link href="/projects" className="underline hover:no-underline">
                            Browse my projects
                        </Link>{" "}
                        or find me on{" "}
                        <Link
                            href="https://github.com/aesakof"
                            className="underline hover:no-underline"
                            target="_blank"
                        >
                            GitHub
                        </Link>
                        .
                    </p>
                    <p className="mt-2 text-lg">
                        Want to get in touch?{" "}
                        <a
                            href="mailto:aesakof@gmail.com"
                            className="underline hover:no-underline"
                        >
                            Send me an email
                        </a>{" "}
                        or{" "}
                        <Link
                            href="https://www.linkedin.com/in/aesakof"
                            className="underline hover:no-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            connect on LinkedIn
                        </Link>
                        .
                    </p>
                </div>

                <div className="order-first w-full max-w-xs lg:order-last lg:max-w-none">
                    <Image
                        src="/about-me/about-me-pic1.png"
                        alt="Alex Esakof"
                        width={800}
                        height={1000}
                        priority
                        className="aspect-[4/5] w-full rounded-xl border border-border object-cover"
                    />
                </div>
            </div>
        </div>
    );
}