import { ReactNode } from "react";
import Image from "next/image"

type CardProps = {
    image?: { src: string; alt: string; width: number; height: number };
    title?: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
    danger?: boolean;
    className?: string;
};

export default function Card({ image, title, description, children, footer, danger, className = "" }: CardProps) {
    return (
        <div className={`rounded-lg border bg-surface-raised flex flex-col overflow-hidden ${danger ? "border-red-500/30" : "border-border"} ${className}`}>
            {image ? (
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full aspect-video object-cover"
                />
            ) : (
                <div className="w-full aspect-video bg-surface" />
            )}
            {(title || description) && (
                <div className={`p-6 flex-1 ${children ? "pb-4" : ""}`}>
                    {title && <h3 className="text-base font-semibold leading-none text-text-primary">{title}</h3>}
                    {description && <p className="mt-1.5 text-sm text-text-secondary">{description}</p>}
                </div>
            )}
            {children && (
                <div className="px-6 pb-6">
                    {children}
                </div>
            )}
            {footer && (
                <div className={`px-6 py-4 rounded-b-lg border-t ${danger ? "border-red-500/30 bg-red-500/5" : "border-border bg-surface"}`}>
                    {footer}
                </div>
            )}
        </div>
    );
}