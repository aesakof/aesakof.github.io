import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alex Esakof",
    description: "The personal website and developer portfolio of Alex Esakof",
    openGraph: {
        title: "Alex Esakof",
        description: "The personal website and developer portfolio of Alex Esakof",
        url: "https://aesakof.github.io",
        siteName: "Alex Esakof",
        type: "website",
        images: [
            {
                url: "https://aesakof.github.io/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },
        twitter: {
        card: "summary_large_image",
        title: "Alex Esakof",
        description: "Personal portfolio and projects",
        images: ["https://aesakof.github.io/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistMono.variable} ${spaceGrotesk.variable} ${fraunces.variable} min-h-screen antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-screen flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavBar />
                    <main className="flex flex-col flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}