export type Project = {
    slug: string,
    name: string,
    url: string,
    repoUrl: string,
    coverImage?: string,
    images?: string[],
    description: string
    tags?: string[]
}

export const projects: Project[] = [
    {
        "slug": "nextjs-boilerplate",
        "name": "Next.js Boilerplate",
        "url": "https://aesakof-next-starter-one.vercel.app/",
        "repoUrl": "https://github.com/aesakof/aesakof-next-starter",
        "coverImage": "/projects/nextjs-boilerplate.png",
        "images": [
            "/projects/pokedex.png",
        ],
        "description": "Some more text to get a better idea how everything looks",
        "tags": [
            "Next.js",
            "Typescript",
            "Prisma"
        ]
    },
    {
        "slug": "pokedex",
        "name": "Pokedex",
        "url": "https://aesakof.github.io/pokedex/",
        "repoUrl": "https://github.com/aesakof/pokedex",
        "coverImage": "/projects/pokedex.png",
        "images": [
            "/projects/nextjs-boilerplate.png",
            "/projects/pokedex.png",
            "/projects/nextjs-boilerplate.png",
        ],
        "description": "Filler text! Filler text! Filler text! Filler text! Filler text! Filler text! Filler text!",
        "tags": []
    },
    {
        "slug": "dummy1",
        "name": "DUMMY PROJECT",
        "url": "https://aesakof.github.io/",
        "repoUrl": "https://github.com/aesakof/",
        "coverImage": "",
        "images": [
            
        ],
        "description": "DESCRIPTION HERE",
        "tags": []
    },
]