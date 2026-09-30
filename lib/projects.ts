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
        "image": "/projects/nextjs-boilerplate.png",
        "description": "DESCRIPTION HERE"
    },
    {
        "slug": "pokedex",
        "name": "Pokedex",
        "url": "https://aesakof.github.io/pokedex/",
        "repoUrl": "https://github.com/aesakof/pokedex",
        "image": "/projects/pokedex.png",
        "description": "DESCRIPTION HERE"
    },
    {
        "slug": "dummy1",
        "name": "DUMMY PROJECT",
        "url": "https://aesakof.github.io/",
        "repoUrl": "https://github.com/aesakof/",
        "image": "",
        "description": "DESCRIPTION HERE"
    },
]