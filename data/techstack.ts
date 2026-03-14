export type KeyDef = {
    id: string;
    label: string;
    icon?: string;
    u?: number;
    mod?: boolean;
    category?: string;
    description?: string;
    level?: "Familiar" | "Comfortable" | "Proficient" | "Expert";
};

export const rows: KeyDef[][] = [
    // Row 1
    [
        {
            id: "logo", label: "IM_DNILB", icon: "/images/dnilb.png",
            description: "Click keycap to see more details",
        },
        {
            id: "html", label: "HTML", icon: "/icon/html.svg",
            category: "Markup", level: "Expert",
            description: "The backbone of every webpage. I write semantic, accessible HTML that search engines and screen readers love.",
        },
        {
            id: "css", label: "CSS", icon: "/icon/css.svg",
            category: "Styling", level: "Expert",
            description: "From custom properties to complex animations — CSS is where design meets code for me.",
        },
        {
            id: "js", label: "JS", icon: "/icon/js.svg",
            category: "Language", level: "Expert",
            description: "The language of the web. I use modern ES2024+ patterns, async flows, and browser APIs daily.",
        },
        {
            id: "ts", label: "TS", icon: "/icon/ts.svg",
            category: "Language", level: "Proficient",
            description: "TypeScript keeps my codebases safe and self-documenting. I default to it on every new project.",
        },
        {
            id: "react", label: "React", icon: "/icon/react.svg",
            category: "UI Library", level: "Expert",
            description: "My primary UI library. I build with hooks, context, and server components using the latest React 19 features.",
        },
        {
            id: "nextjs", label: "Next.js", icon: "/icon/nextjs.svg",
            category: "Framework", level: "Expert",
            description: "My go-to full-stack framework — App Router, server actions, ISR, and edge functions are second nature.",
        },
        {
            id: "threejs", label: "Three.js", icon: "/icon/Threejs.svg",
            category: "3D / WebGL", level: "Comfortable",
            description: "I use Three.js for immersive 3D web experiences, combining it with GSAP for cinematic animations.",
        },
        {
            id: "shadcn", label: "Shadcn", icon: "/icon/shadcn.svg",
            category: "UI Components", level: "Proficient",
            description: "Accessible, composable UI primitives built on Radix. I extend them to match custom design systems.",
        },
        {
            id: "tailwind", label: "Tailwind", icon: "/icon/tailwind.svg",
            category: "Styling", level: "Expert",
            description: "Utility-first CSS that pairs perfectly with component-driven development. I've used it since v1.",
        },
        {
            id: "gsap", label: "GSAP", icon: "/icon/gsap.svg", u: 1.8,
            category: "Animation", level: "Proficient",
            description: "GreenSock Animation Platform powers the scroll-driven and timeline animations across this portfolio.",
        },
        {
            id: "chatgpt", label: "ChatGPT", icon: "/icon/chatgpt.svg",
            category: "AI Tool", level: "Proficient",
            description: "A daily tool for ideation, debugging, and rapid prototyping. I treat it like a senior pair-programmer.",
        },
    ],
    // Row 2
    [
        {
            id: "nodejs", label: "Node.js", icon: "/icon/nodejs.svg", u: 1.5,
            category: "Runtime", level: "Proficient",
            description: "Server-side JavaScript runtime. I build REST APIs, CLI tools, and backend services with it.",
        },
        {
            id: "express", label: "Express", icon: "/icon/express-logo.svg",
            category: "Framework", level: "Comfortable",
            description: "Minimal Node.js framework for quickly wiring up REST endpoints and middleware pipelines.",
        },
        {
            id: "nestjs", label: "NestJS", icon: "/icon/nest.svg",
            category: "Framework", level: "Comfortable",
            description: "Opinionated, modular Node.js framework inspired by Angular. Great for larger backend architectures.",
        },
        {
            id: "postgres", label: "Postgres", icon: "/icon/postgresql.svg",
            category: "Database", level: "Comfortable",
            description: "My preferred relational database. I pair it with Prisma for type-safe queries.",
        },
        {
            id: "mongodb", label: "MongoDB", icon: "/icon/mongodb.svg",
            category: "Database", level: "Comfortable",
            description: "Document-based NoSQL database. I reach for it when flexible schemas matter more than relations.",
        },
        {
            id: "redis", label: "Redis", icon: "/icon/redis.svg",
            category: "Cache / Queue", level: "Familiar",
            description: "In-memory store for caching, sessions, and pub/sub messaging in high-throughput applications.",
        },
        {
            id: "firebase", label: "Firebase", icon: "/icon/firebase.svg",
            category: "BaaS", level: "Proficient",
            description: "Google's all-in-one backend. I use Firestore, Auth, and Cloud Functions for rapid prototypes.",
        },
        {
            id: "gcp", label: "GCP", icon: "/icon/gcp.svg",
            category: "Cloud", level: "Familiar",
            description: "Google Cloud for hosting, Cloud Run, and storage. Pairs well with Firebase projects.",
        },
        {
            id: "supabase", label: "Supabase", icon: "/icon/supabase.svg",
            category: "BaaS", level: "Comfortable",
            description: "Open-source Firebase alternative. Postgres + realtime + auth in a single platform.",
        },
        {
            id: "flutter", label: "Flutter", icon: "/icon/flutter.svg", u: 2.5,
            category: "Mobile", level: "Comfortable",
            description: "Google's cross-platform UI toolkit. I build iOS and Android apps from a single Dart codebase.",
        },
        {
            id: "gemini", label: "Gemini", icon: "/icon/gemini.svg",
            category: "AI Tool", level: "Comfortable",
            description: "Google's multimodal AI model. I integrate it via API for intelligent features in web and mobile apps.",
        },
    ],
    // Row 3
    [
        {
            id: "git", label: "Git", icon: "/icon/git.svg", u: 2,
            category: "Version Control", level: "Expert",
            description: "Branching, rebasing, bisect — I'm comfortable with the full Git workflow in team environments.",
        },
        {
            id: "github", label: "GitHub", icon: "/icon/github.svg",
            category: "Platform", level: "Expert",
            description: "PRs, Actions CI/CD, GitHub Pages — my entire workflow lives here.",
        },
        {
            id: "postman", label: "Postman", icon: "/icon/postman.svg",
            category: "API Testing", level: "Proficient",
            description: "My go-to for testing REST and GraphQL APIs during development and collaboration.",
        },
        {
            id: "vercel", label: "Vercel", icon: "/icon/vercel.svg",
            category: "Deployment", level: "Expert",
            description: "Zero-config deployment for Next.js. Preview deployments per branch make collaboration seamless.",
        },
        {
            id: "jira", label: "Jira", icon: "/icon/jira.svg",
            category: "Project Mgmt", level: "Comfortable",
            description: "Sprint planning, ticket tracking, and roadmap management in agile team settings.",
        },
        {
            id: "vscode", label: "VS Code", icon: "/icon/vscode.svg",
            category: "Editor", level: "Expert",
            description: "My main editor — heavily customized with extensions, snippets, and keybindings.",
        },
        {
            id: "cursor", label: "Cursor", icon: "/icon/cursor.svg",
            category: "AI Editor", level: "Proficient",
            description: "AI-native code editor. The agent mode and inline edits dramatically speed up my workflow.",
        },
        {
            id: "framer", label: "Framer", icon: "/icon/framer.svg",
            category: "Design / Prototype", level: "Comfortable",
            description: "Interactive prototyping tool. I use it to validate motion and layout before coding.",
        },
        {
            id: "figma", label: "Figma", icon: "/icon/figma.svg", u: 2,
            category: "Design", level: "Proficient",
            description: "My primary design tool. I go from wireframe to polished UI with auto-layout and component libraries.",
        },
        { id: "arrow-up", label: "↑", mod: true },
        {
            id: "claude", label: "Claude", icon: "/icon/claude.svg",
            category: "AI Tool", level: "Expert",
            description: "Anthropic's AI — my preferred assistant for long-context reasoning, code review, and architecture decisions.",
        },
    ],
    // Row 4
    [
        { id: "fn1", label: "Ctrl", mod: true, u: 1.2 },
        { id: "fn2", label: "Alt", mod: true, u: 1.2 },
        { id: "space", label: "< Tech Stack />", mod: true, u: 5.78 },
        { id: "fn9", label: "Alt", mod: true, u: 1.2 },
        { id: "fn10", label: "Ctrl", mod: true, u: 1.2 },
        { id: "arrow-left", label: "←", mod: true },
        { id: "arrow-down", label: "↓", mod: true },
        { id: "arrow-right", label: "→", mod: true },
    ],
];

export const LEVEL_COLOR: Record<string, string> = {
    Familiar: "bg-[#e2e8f0] text-[#64748b]",
    Comfortable: "bg-[#dbeafe] text-[#3b82f6]",
    Proficient: "bg-[#d1fae5] text-[#10b981]",
    Expert: "bg-[#fef3c7] text-[#f59e0b]",
};

export const allTechs: KeyDef[] = rows.flat().filter((k) => !k.mod && k.icon);

export const U = 58;
export const GAP = 6;
