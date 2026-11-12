"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumbs() {
    const pathname = usePathname()
    const pathSegments = pathname.split('/')
    
    return (
        <div className="mx-auto w-full max-w-7xl items-center px-6 pt-16 text-text-secondary">
            <Link href="/" className="hover:underline">Home</Link>

            {pathSegments.map( (segment) => {
                return (
                    <Link key={segment} href={segment}>{segment}</Link>
                )
            })}

            <p>Current pathname: /home{pathname}</p>
            <hr className="h-px my-8 bg-foreground border-0"></hr>
        </div>
    )
}