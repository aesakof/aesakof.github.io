"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"


const links = [
    { href: "/projects", label: "Projects" },
    { href: "/about-me", label: "About Me"},
]

function MobileLink({href, onClick, children}: {href: string, onClick?: () => void, children:React.ReactNode}) {
    return (
        <Link href={href} onClick={onClick} className="px-3 py-1 hover:bg-border rounded-sm">
            {children}
        </Link>
    )
}

export default function NavBar() {
    const [smallMenuOpen, setSmallMenuOpen] = useState(false)
    const pathname = usePathname()

    const closeMenu = () => setSmallMenuOpen(false)

    return (
        <header className="bg-surface-raised border-b border-border text-text-primary p-2 relative">
            <div className="flex justify-between items-center">
                <Link href="/" className="px-4 py-2">Alex Esakof</Link>
                <div className="md:flex hidden">
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className="px-3 py-2 hover:bg-surface rounded-sm">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button onClick={() => setSmallMenuOpen(!smallMenuOpen)} className="md:hidden flex px-4 py-2 hover:bg-surface rounded-sm">
                    {smallMenuOpen ? <X /> : <Menu />}
                </button>
                {smallMenuOpen &&
                    <div className="md:hidden z-50 flex flex-col px-4 py-2 rounded-b-sm absolute top-full left-0 right-0 bg-surface border-b border-border">
                        {links.map(link => (
                            <MobileLink key={link.href} href={link.href}>
                                {link.label}
                            </MobileLink>
                        ))}
                    </div>
                }
            </div>
        </header>
    )
}