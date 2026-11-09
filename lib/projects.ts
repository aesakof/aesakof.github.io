export type Project = {
    slug: string,
    name: string,
    url: string,
    repoUrl: string,
    coverImage?: string,
    featured?: boolean,
    images?: string[],
    blurb: string,
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
        "featured": true,
        "images": [
            "/projects/nextjs-boilerplate.png",
            "/projects/nextjs-boilerplate2.png",
            "/projects/nextjs-boilerplate3.png"
        ],
        "blurb": "A full-stack Next.js starter to cut down on new project setup.",
        "description": "A full-stack Next.js starter I built to skip the repeated setup on new projects. It comes with email and password authentication including password reset, a settings area, light and dark themes, and a reusable component library, all backed by a Postgres database. Vitest unit tests and Playwright end-to-end tests are already set up, so new projects start with testing in place.",
        "tags": [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Prisma",
            "Postgres",
            "Better Auth",
            "Vitest",
            "Playwright"
        ]
    },
    {
        "slug": "pokedex",
        "name": "Pokedex",
        "url": "https://aesakof.github.io/pokedex/",
        "repoUrl": "https://github.com/aesakof/pokedex",
        "coverImage": "/projects/pokedex.png",
        "featured": false,
        "images": [
            "/projects/pokedex.png",
            "/projects/pokedex2.png",
        ],
        "blurb": "Browse, filter, and favorite Pokemon, built with React and React Router.",
        "description": "A Pokedex I built in 2021 with React and React Router, when I first learned frontend development. Browse Pokemon as type-colored cards, filter by generation or type, and mark your favorites. All the data comes from PokeAPI.",
        "tags": [
            "JavaScript",
            "React",
            "React Router"
        ]
    },
]