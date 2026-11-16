"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { usePathname } from "next/navigation"


const links = [
    { href: "/projects", label: "Projects" },
    { href: "/about-me", label: "About Me"},
]

function MobileLink({href, active, onClick, children}: {href: string, active?: boolean, onClick?: () => void, children:React.ReactNode}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-1 hover:bg-border rounded-sm ${
                active ? "underline underline-offset-4" : ""
            }`}
        >
            {children}
        </Link>
    )
}

export default function NavBar() {
    const [smallMenuOpen, setSmallMenuOpen] = useState(false)
    const pathname = usePathname()

    const closeMenu = () => setSmallMenuOpen(false)
    const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

    return (
        <header className="bg-surface-raised border-b border-border text-text-primary relative">
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                <Link href="/" className="px-4 py-2 -ml-4 hover:bg-surface rounded-sm font-semibold tracking-tight text-xl font-heading">Alex Esakof</Link>
                <div className="md:flex hidden">
                    {links.map(link => {
                        const active = isActive(link.href)

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={`px-3 py-2 hover:bg-surface rounded-sm ${
                                    active ? "underline underline-offset-4" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                    <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center gap-1">
                    <ThemeToggle />
                    <button onClick={() => setSmallMenuOpen(!smallMenuOpen)} className="flex px-4 py-2 hover:bg-surface rounded-sm">
                        {smallMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {smallMenuOpen &&
                    <div className="md:hidden z-50 flex flex-col px-4 py-2 rounded-b-sm absolute top-full left-0 right-0 bg-surface border-b border-border">
                        {links.map(link => (
                            <MobileLink key={link.href} href={link.href} active={isActive(link.href)} onClick={closeMenu}>
                                {link.label}
                            </MobileLink>
                        ))}
                    </div>
                }
            </div>
        </header>
    )
}