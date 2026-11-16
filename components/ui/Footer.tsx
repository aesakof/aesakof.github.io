const links = [
    { label: "GitHub", href: "https://github.com/aesakof", external: true },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aesakof",
        external: true,
    },
    { label: "Email", href: "mailto:aesakof@gmail.com" },
]

export default function Footer() {
    return (
        <footer className="bg-surface-raised text-text-primary border-border border-t p-6 flex flex-wrap items-center justify-center gap-y-2">
            <p className="px-4">Developed by Alexander Esakof</p>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="px-4 hover:underline"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                >
                    {link.label}
                </a>
            ))}
        </footer>
    )
}