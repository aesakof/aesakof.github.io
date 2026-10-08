"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectGallery({ images, alt }: { images: string[], alt: string }) {
    const [index, setIndex] = useState(0)

    if (images.length === 0) {
        return <div className="w-full aspect-video rounded-lg bg-surface" />
    }

    const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
    const next = () => setIndex(i => (i + 1) % images.length)

    return (
        <div className="relative">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface">
                <Image
                    src={images[index]}
                    alt={`${alt} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Previous screenshot"
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface-raised border border-border hover:border-text-secondary transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next screenshot"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface-raised border border-border hover:border-text-secondary transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="flex justify-center gap-2 mt-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Go to screenshot ${i + 1}`}
                                className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-accent" : "bg-border"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}