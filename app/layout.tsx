import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Instrument_Sans, Fraunces } from "next/font/google";
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
    title: "[Project Name Here]",
    description: "[Project description here]",
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