"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import UserMenu from "./UserMenu"
import { Menu, X } from "lucide-react"

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
    const router = useRouter()

    const publicLinks = [
        { href: "/ui-samples", label: "UI Samples" }
    ]

    const closeMenu = () => setSmallMenuOpen(false)

    return (
        <header className="bg-surface-raised border-b border-border text-text-primary p-2 relative">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <Link href="/" className="px-4 py-2">[PROJECT LOGO HERE]</Link>
                    <div className="md:flex hidden">
                        {publicLinks.map(link => (
                            <Link key={link.href} href={link.href} className="px-3 py-2 hover:bg-surface rounded-sm">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="md:flex items-center gap-4 hidden">

                </div>
                <button onClick={() => setSmallMenuOpen(!smallMenuOpen)} className="md:hidden flex px-4 py-2 hover:bg-surface rounded-sm">
                    {smallMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    )
}