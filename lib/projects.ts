export type Project = {
    slug: string,
    name: string,
    url: string,
    repoUrl: string,
    image?: string,
    description: string
}

export const projects: Project[] = [
    {
        "slug": "nextjs-boilerplate",
        "name": "Next.js Boilerplate",
        "url": "https://aesakof-next-starter-one.vercel.app/",
        "repoUrl": "https://github.com/aesakof/aesakof-next-starter",
        "image": "@/public/projects/nextjs-boilerplate.png",
        "description": "DESCRIPTION HERE"
    },
    {
        "slug": "pokedex",
        "name": "Pokedex",
        "url": "https://aesakof.github.io/pokedex/",
        "repoUrl": "https://github.com/aesakof/pokedex",
        "image": "",
        "description": "DESCRIPTION HERE"
    }
]