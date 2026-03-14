export type ProjectColor = {
    name: string;
    hex: string;
};

export type ProjectFont = {
    name: string;
    usage: string;
};

export type ProjectFeature = {
    title: string;
    description: string;
};

export type ProjectScreen = {
    image: string;
    caption: string;
};

export type Project = {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    logo: string;
    mockup: string;
    year: string;
    description: string;
    url?: string;
    tags: string[];
    role: string;
    duration: string;
    team: string;
    tools: string[];
    problem: {
        statement: string;
        goals: string[];
    };
    moodboard?: {
        images: string[];
        description: string;
    };
    designSystem?: {
        colors: ProjectColor[];
        fonts: ProjectFont[];
        description: string;
    };
    features: ProjectFeature[];
    screenLayout?: "default" | "mobile";
    screens: ProjectScreen[];
    webScreens?: ProjectScreen[];
    goal: {
        summary: string;
        outcome: string;
    };
};

export const projects: Project[] = [
    {
        id: "actech",
        title: "ACTECH",
        subtitle: "The official website for ACTECH Architecture",
        thumbnail: "/images/projects/actech/actech.png",
        mockup: "/images/projects/actech/actech-mock.png",
        logo: "/images/projects/actech/actech-logo.png",
        year: "2026",
        description:
            "Designed and developed the official website for ACTECH Architecture, focusing on a modern, minimalist aesthetic that reflects the brand's architectural philosophy.",
        url: "https://actech.vercel.app",
        tags: ["Freelance", "Landing Page", "Next.js"],
        role: "Frontend Developer & Designer",
        duration: "2 weeks",
        team: "Solo",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Figma", "Vercel"],
        problem: {
            statement:
                "ACTECH Architecture needed a digital presence that conveys precision, sophistication, and trust. Their previous site was outdated, failed to showcase their portfolio effectively, and didn't align with their brand identity as a modern architecture firm.",
            goals: [
                "Create a visually striking landing page that mirrors architectural precision",
                "Showcase completed projects with high-quality imagery and smooth transitions",
                "Ensure fast load times and full responsiveness across all devices",
                "Reflect the brand's minimalist and modern design philosophy",
            ],
        },
        moodboard: {
            images: [
                "/images/projects/actech/mood-01.jpg",
                "/images/projects/actech/mood-02.webp",
                "/images/projects/actech/mood-03.jpg",
                "/images/projects/actech/mood-04.webp",
            ],
            description:
                "The moodboard draws from brutalist architecture, clean geometry, and high-contrast monochrome palettes. Inspiration was taken from firms like Tadao Ando and Zaha Hadid — emphasizing raw materials, negative space, and bold structural forms.",
        },
        designSystem: {
            colors: [
                { name: "Black", hex: "#000000" },
                { name: "White", hex: "#ffffff" },
                { name: "Zinc 50", hex: "#fafafa" },
                { name: "Zinc 100", hex: "#f4f4f5" },
                { name: "Zinc 200", hex: "#e4e4e7" },
                { name: "Zinc 300", hex: "#d4d4d8" },
                { name: "Zinc 400", hex: "#a1a1aa" },
                { name: "Zinc 500", hex: "#71717a" },
                { name: "Zinc 700", hex: "#3f3f46" },
                { name: "Zinc 800", hex: "#27272a" },
                { name: "Zinc 900", hex: "#18181b" },
                { name: "Zinc 950", hex: "#09090b" },
              ],
            fonts: [
                { name: "Anta", usage: "Headlines & brand identity" },
                { name: "Inter", usage: "Body text & subtitles" },
            ],
            description:
                "The design system is rooted in architectural precision — a strict monochrome palette with a single warm accent, generous whitespace, and typographic hierarchy that guides the eye through the content.",
        },
        features: [
            {
                title: "Parallax Hero Section",
                description:
                    "Full-screen hero with layered parallax scrolling that creates depth and draws visitors into the architectural narrative.",
            },
            {
                title: "Project Showcase Gallery",
                description:
                    "Interactive portfolio grid with smooth hover animations and lightbox views for each architecture project.",
            },
            {
                title: "Smooth Page Transitions",
                description:
                    "Framer Motion-powered transitions between sections for a seamless, app-like browsing experience.",
            },
            {
                title: "Responsive & Performance-First",
                description:
                    "Optimized images, lazy loading, and mobile-first layout ensuring sub-2s load times on all devices.",
            },
        ],
        screens: [
            { image: "/images/projects/actech/actech.png", caption: "Hero & Navigation" },
            { image: "/images/projects/actech/actech-collection.png", caption: "Project Gallery" },
            { image: "/images/projects/actech/actech-contact.png", caption: "Contact Section" },
            { image: "/images/projects/actech/actech-vision.png", caption: "Vision Section" },
        ],
        goal: {
            summary:
                "Deliver a polished, high-performance website that positions ACTECH as a forward-thinking architecture firm, converting visitors into inquiries through compelling visual storytelling.",
            outcome:
                "Launched a fully responsive, sub-2s load-time website with GSAP-driven scroll animations that increased client inquiries and strengthened ACTECH's digital brand presence.",
        },
    },
    {
        id: "pento",
        title: "Pento",
        subtitle: "Smart Household Food Management System",
        thumbnail: "/images/projects/pento/pentofood.png",
        mockup: "/images/projects/pento/pento-mock.png",
        logo: "/images/projects/pento/pento-logo.PNG",
        year: "2025",
        url: "https://pento-food.vercel.app",
        description:
            "A mobile application for household food management that allows users to organize food by storage areas and compartments, scan barcodes, recognize products via OCR and image processing, plan smart meals, track detailed recipes, generate shopping lists, locate nearby stores, and trade food items within the household inventory.",
        tags: ["Capstone Project", "Mobile", "Web", "3D", "AI"],
        role: "Full-stack Developer & UI/UX Designer",
        duration: "4 months",
        team: "4 members",
        tools: ["Next.js", "TypeScript", "Flutter", "Three.js", "Tailwind CSS", "GSAP", "Firebase", "NestJS", "GCP", "Vercel"],
        problem: {
            statement:
                "Households waste an estimated 30-40% of food due to poor inventory tracking, forgotten expiry dates, and unplanned grocery shopping. Existing solutions are either too simplistic (basic lists) or too complex for everyday family use, creating a gap for an intuitive yet powerful management system.",
            goals: [
                "Reduce household food waste through smart expiration tracking and alerts",
                "Simplify food inventory management with barcode scanning and OCR recognition",
                "Enable intelligent meal planning based on available ingredients",
                "Create a household food trading system to minimize community waste",
            ],
        },
        moodboard: {
            images: [
                "/images/projects/pento/mood-01.webp",
                "/images/projects/pento/mood-02.jpg",
                "/images/projects/pento/mood-03.png",
                "/images/projects/pento/mood-04.png",
            ],
            description:
                "The visual direction blends organic, food-inspired warmth with clean digital interfaces. Soft greens and earthy tones evoke freshness and sustainability, while rounded UI elements and playful illustrations make the complex system feel approachable.",
        },
        designSystem: {
            colors: [
                { name: "iceberg", hex: "#F7FBFC" },
                { name: "babyBlue", hex: "#D6E6F2" },
                { name: "powderBlue", hex: "#B9D7EA" },
                { name: "blueGray", hex: "#769FCD" },
                { name: "darkBlue", hex: "#113F67" }
              ],
            fonts: [
                { name: "MonoTrustDisplay", usage: "Headlines" },
                { name: "Roboto", usage: "Body text" },
            ],
            description:
                "A friendly, approachable design system that balances playfulness with clarity. The color palette references fresh produce and natural ingredients, while the typography ensures readability across complex data-heavy screens.",
        },
        features: [
            {
                title: "Smart Barcode & OCR Scanning",
                description:
                  "Quickly add food items by scanning barcodes or using OCR to recognize product labels and nutritional information."
              },
              {
                title: "Smart Meal Planner",
                description:
                  "Plan meals based on available ingredients, dietary preferences, and upcoming expiration dates to reduce food waste."
              },
              {
                title: "Food Inventory Board",
                description:
                  "A Kanban-style board that helps users manage ingredients by status such as fresh, expiring soon, or used."
              },
              {
                title: "Community Food Trading",
                description:
                  "A neighborhood sharing feature that allows users to exchange or give away surplus food with nearby households."
              },
              {
                title: "Smart Grocery List",
                description:
                  "Automatically generated grocery lists based on meal plans and low inventory items."
              },
              {
                title: "Nearby Stores Discovery",
                description:
                  "Find grocery stores nearby using location services to quickly purchase missing ingredients."
              }
        ],
        screenLayout: "mobile",
        screens: [
            { image: "/images/projects/pento/mobile/recipe.jpg", caption: "Recipe Detail" },
            { image: "/images/projects/pento/mobile/list.jpg", caption: "Recipe List" },
            { image: "/images/projects/pento/mobile/plan.jpg", caption: "Meal Plan Detail" },
            { image: "/images/projects/pento/mobile/map.jpg", caption: "Groceries Map" },
            { image: "/images/projects/pento/mobile/dashboard.jpg", caption: "Dashboard & Storage" },
            { image: "/images/projects/pento/mobile/pantry.jpg", caption: "Pantry Detail" },
            { image: "/images/projects/pento/mobile/detail.jpg", caption: "Food Detail" },
            { image: "/images/projects/pento/mobile/achievement.jpg", caption: "Achievement" },
        ],
        webScreens: [
            { image: "/images/projects/pento/pento.png", caption: "Landing Page" },
            { image: "/images/projects/pento/dashboard.png", caption: "Admin Dashboard" },
            { image: "/images/projects/pento/pento-landing.png", caption: "Landing Page" },
            { image: "/images/projects/pento/pento-news.png", caption: "Food News" },
        ],
        goal: {
            summary:
                "Design a visually engaging web landing page and a functional mobile application for smart household food management. The web experience focuses on presenting the product through immersive 3D visuals and modern glassmorphism UI, while the mobile app provides practical tools for managing food inventory, planning meals, tracking groceries, and reducing food waste in daily life.",
            outcome:
                "Delivered a cross-platform system — an immersive 3D landing page and a Flutter mobile app — as a capstone project, demonstrating end-to-end full-stack development and design capability.",
        },
    },
    {
        id: "vestige",
        title: "Vestige",
        subtitle: "Avant-Garde Fashion Marketplace Platform",
        thumbnail: "/images/projects/vestige/vestige.png",
        mockup: "/images/projects/vestige/vestige-mock.png",
        logo: "/images/projects/vestige/vestige-logo.png",
        year: "2025",
        url: "https://vestigehouse.asia",
        description:
            "An intermediary fashion and collectibles marketplace platform designed for Gen Z consumers, enabling users to buy and sell avant-garde and limited-edition items and community-driven environment.",
        tags: ["Web", "Editorial", "Rock-Punk", "Ecommerce"],
        role: "UI/UX Designer & Frontend Developer",
        duration: "3 months",
        team: "4 members",
        tools: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS", "Figma", "Vercel"],
        problem: {
            statement:
                "Gen Z consumers passionate about avant-garde fashion struggle to find a dedicated marketplace that understands their aesthetic. Mainstream platforms like eBay or Depop lack the editorial curation and community features that make discovering and trading rare, statement pieces feel special and authentic.",
            goals: [
                "Build an editorial-driven marketplace that celebrates avant-garde aesthetics",
                "Create a community-first platform with seller profiles, reviews, and collections",
                "Implement secure peer-to-peer transactions with buyer protection",
                "Design a bold, punk-inspired visual identity that resonates with Gen Z",
            ],
        },
        moodboard: {
            images: [
                "/images/projects/vestige/mood-01.jpeg",
                "/images/projects/vestige/mood-02.jpg",
                "/images/projects/vestige/mood-03.jpg",
                "/images/projects/vestige/mood-04.webp",
            ],
            description:
                "Inspired by punk zines, underground fashion editorials, and brutalist web design. The moodboard blends raw typography, high-contrast imagery, and distressed textures — capturing the rebellious energy of the avant-garde fashion community.",
        },
        designSystem: {
            colors: [
                { name: "Dark Red", hex: "#960000" },
                { name: "Red 900", hex: "#460809" },
                { name: "Red 800", hex: "#82181A" },
                { name: "Red 700", hex: "#9F0712" },
                { name: "Red 600", hex: "#C10007" },
                { name: "Red 500", hex: "#E7000B" },
                { name: "Red 400", hex: "#FB2C36" },
                { name: "Red 300", hex: "#FF6467" },
                { name: "Red 200", hex: "#FFC9C9" },
                { name: "Red 100", hex: "#FFE2E2" },
                { name: "Red 50", hex: "#FEF2F2" },
                { name: "Warm Cream", hex: "#FFFBEB" }
              ],
            fonts: [
                { name: "Metal Mania", usage: "Headlines & brand elements" },
                { name: "Cinzel", usage: "Subtitles" },
            ],
            description:
                "A deliberately raw and editorial design system that rejects polish in favor of authenticity. Heavy black backgrounds, aggressive red accents, and monospaced type create a visual language that feels like a digital punk zine.",
        },
        features: [
            {
                title: "Editorial Product Listings",
                description:
                    "Magazine-style product pages with full-bleed imagery, designer stories, and styled lookbook presentations.",
            },
            {
                title: "Curated Collections",
                description:
                    "User and editor-curated thematic collections that surface rare finds by aesthetic, era, designer, or mood.",
            },
            {
                title: "Secure P2P Transactions",
                description:
                    "Stripe-powered escrow payment system with buyer protection, authentication verification, and dispute resolution.",
            },
            {
                title: "Community Profiles & Reviews",
                description:
                    "Rich seller profiles with reputation scores, style-tagged collections, and verified buyer reviews.",
            },
        ],
        screens: [
            { image: "/images/projects/vestige/vestige-landingpage.jpg", caption: "Landing & Featured Drops" },
            { image: "/images/projects/vestige/vestige-detail.jpg", caption: "Product Detail" },
            { image: "/images/projects/vestige/vestige-collection.png", caption: "Curated Collection" },
            { image: "/images/projects/vestige/vestige-profile.jpg", caption: "Seller Profile" },
            { image: "/images/projects/vestige/vestige-login.png", caption: "Login & Signup" },
            { image: "/images/projects/vestige/vestige-news.png", caption: "Editorial News" },
        ],
        goal: {
            summary:
                "Establish Vestige as the definitive marketplace for avant-garde fashion, creating a space where aesthetic curation and community authenticity drive discovery and commerce.",
            outcome:
                "Shipped a live editorial marketplace at vestigehouse.asia with Stripe-powered transactions, curated collections, and a punk-inspired design identity that resonates with the Gen Z fashion community.",
        },
    },
    {
        id: "zerotine",
        title: "Zerotine",
        subtitle: "Smoking Cessation Support Platform",
        thumbnail: "/images/projects/smoking/smoking-cessation.png",
        mockup: "/images/projects/smoking/smoking-mock.png",
        logo: "/images/projects/smoking/smoking-logo.png",
        year: "2025",
        url: "https://fe-smoking-cessation-support-platfo.vercel.app/",
        description:
            "The system supports AI-generated quit plans across multiple phases based on smoking habit quizzes, enables user interaction with coaches via chat and video calls, and includes engagement features such as achievements and community posts.",
        tags: ["Mobile", "Web", "AI", "Real-time"],
        role: "Leader & Backend Developer",
        duration: "3 months",
        team: "4 members",
        tools: ["NestJS", "TypeScript", "Supabase", "GCP", "React", "Redis", "PostgreSQL", "Vercel"],
        problem: {
            statement:
                "Smoking cessation is a deeply personal and often isolating journey. Existing apps provide generic plans that don't adapt to individual habits, lack real human support, and fail to sustain long-term engagement — resulting in high relapse rates among users who attempt to quit alone.",
            goals: [
                "Deliver personalized AI-generated quit plans based on individual smoking habits",
                "Provide real-time coaching support through chat and video calls",
                "Build engagement loops with achievements, streaks, and community features",
                "Track progress with detailed analytics and health improvement metrics",
            ],
        },
        features: [
            {
                title: "AI-Powered Quit Plans",
                description:
                    "OpenAI-driven assessment engine that generates multi-phase personalized quit plans based on smoking frequency, triggers, and lifestyle factors.",
            },
            {
                title: "Real-time Coach Chat & Video",
                description:
                    "Socket.io-powered live chat and WebRTC video calls connecting users with certified cessation coaches for instant support.",
            },
            {
                title: "Achievement & Streak System",
                description:
                    "Gamified milestones tracking smoke-free days, money saved, and health improvements with shareable achievement badges.",
            },
            {
                title: "Community Support Feed",
                description:
                    "Social feed where users share progress, encouragement, and tips — creating accountability and reducing isolation.",
            },
            {
                title: "Health Recovery Dashboard",
                description:
                    "Visual timeline showing real-time body recovery milestones — lung capacity improvement, circulation, taste restoration, and more.",
            },
        ],
        screens: [
            { image: "/images/projects/smoking/smoking-cessation.png", caption: "Landing Page" },
            { image: "/images/projects/smoking/news.png", caption: "News Page" },
            { image: "/images/projects/smoking/quitplan.jpg", caption: "Quit Plan Page" },
            { image: "/images/projects/smoking/quizz.png", caption: "Quiz Page" },
        ],
        goal: {
            summary:
                "Create a compassionate, technology-driven cessation companion that combines AI personalization with human coaching to help users successfully quit smoking and maintain long-term health.",
            outcome:
                "Built a real-time platform with AI-generated quit plans, live coach chat and video calls, and gamified progress tracking — providing a complete support ecosystem for smoking cessation.",
        },
    },
    {
        id: "blindbox",
        title: "BlindB!ox",
        subtitle: "BlindBox Platform & Custom Accessories",
        thumbnail: "/images/projects/blindbox/custom.png",
        mockup: "/images/projects/blindbox/blindbox-mock.png",
        logo: "/images/projects/blindbox/blindbox-logo.png",
        year: "2024",
        url: "https://blindbox-vn.vercel.app/",
        description:
            "The platform delivers a gamified shopping experience with a playful Astro 8-bit visual theme, combining 3D product previews, smooth transitions, and a streamlined checkout flow that makes online blind box shopping feel like an interactive unboxing game.",
        tags: ["Web", "3D", "Ecommerce"],
        role: "Frontend Developer",
        duration: "2 months",
        team: "4 members",
        tools: ["Three.js", "React", "JavaScript", "MongoDB", "Postman", "Vercel"],
        problem: {
            statement:
                "The blind box collectibles market is booming, but online purchasing lacks the tactile excitement and surprise element that makes physical unboxing so addictive. Existing e-commerce platforms treat blind boxes like any other product, failing to capture the thrill of the unknown.",
            goals: [
                "Recreate the excitement of physical blind box unboxing in a digital experience",
                "Build a gamified shopping flow with 3D animations and reveal mechanics",
                "Design a nostalgic 8-bit aesthetic that appeals to the collector community",
                "Enable custom accessory creation and visualization before purchase",
            ],
        },
        moodboard: {
            images: [
                "/images/projects/blindbox/mood-01.webp",
                "/images/projects/blindbox/mood-02.jpg",
                "/images/projects/blindbox/mood-03.png",
                "/images/projects/blindbox/mood-04.jpg",
            ],
            description:
                "A playful collision of retro pixel art, arcade aesthetics, and modern 3D renders. The moodboard channels the nostalgia of 8-bit games and gacha machines while maintaining a premium, collectible-worthy feel through rich colors and detailed 3D models.",
        },
        designSystem: {
            colors: [
                { name: "Yellow 50", hex: "#fefce8" },
                { name: "Yellow 100", hex: "#fef9c3" },
                { name: "Yellow 200", hex: "#fef08a" },
                { name: "Yellow 300", hex: "#fde047" },
                { name: "Yellow 400", hex: "#facc15" },
                { name: "Yellow 500", hex: "#eab308" },
                { name: "Yellow 600", hex: "#ca8a04" },
                { name: "Yellow 700", hex: "#a16207" },    
                { name: "White", hex: "#ffffff" },
                { name: "Black", hex: "#000000" },
              ],
            fonts: [
                { name: "Jersey 15", usage: "Headlines & game-like elements" },
            ],
            description:
                "A vibrant, arcade-inspired design system that merges 8-bit nostalgia with modern e-commerce clarity. Neon colors pop against dark backgrounds, pixel fonts evoke gaming culture, and smooth gradients add premium polish.",
        },
        features: [
            {
                title: "Blindbox Catalog Explorer",
                description:
                    "Various curated catalogs for different blindbox series, so users can quickly find figures and sets by collection, style, and theme.",
            },
            {
                title: "3D Accessory Preview",
                description:
                    "Lightweight 3D preview that lets users rotate and zoom accessories on a sample blindbox to see how they look before buying.",
            },
            {
                title: "Simple Purchase Flow",
                description:
                    "Streamlined flow for selecting quantities, choosing variants, and checking out accessories with clear pricing and stock status.",
            },
            {
                title: "8-Bit Astro UI",
                description:
                    "Playful 8-bit inspired interface with pixel icons, starfield details, and arcade-style microinteractions themed around space collectibles.",
            },
        ],
        screens: [
            { image: "/images/projects/blindbox/custom.png", caption: "Custom Accessory" },
            { image: "/images/projects/blindbox/dashboard.png", caption: "Dashboard" },
            { image: "/images/projects/blindbox/home.png", caption: "Landing Page" },
            { image: "/images/projects/blindbox/login.png", caption: "Login Page" },
        ],
        goal: {
            summary:
                "Transform online blind box shopping from a mundane transaction into an immersive, gamified experience that captures the magic of physical unboxing and builds a passionate collector community.",
            outcome:
                "Delivered a gamified e-commerce platform with interactive 3D accessory previews, an 8-bit Astro-themed UI, and a streamlined checkout flow that turns browsing into a playful experience.",
        },
    },
    {
        id: "portfolio",
        title: "Portfolio",
        subtitle: "Personal Neumorphic Portfolio Website",
        thumbnail: "/images/port-mock.png",
        mockup: "/images/port-mock.png",
        logo: "/images/dnilb.png",
        year: "2026",
        description:
            "A personal portfolio website built with a neumorphic design language, featuring smooth GSAP-driven scroll animations, dark/light theme switching with crossfade transitions, and a curated project showcase — all crafted to reflect a modern, detail-oriented design philosophy.",
        url: "https://giangnguyen-portfolio.vercel.app",
        tags: ["Portfolio", "Neumorphism", "Next.js", "Animation"],
        role: "Frontend Developer & Designer",
        duration: "2 weeks",
        team: "Solo",
        tools: ["Next.js", "GSAP", "Tailwind CSS"],
        problem: {
            statement:
                "Most developer portfolios rely on generic templates that fail to communicate personality and craft. A portfolio should itself be a demonstration of design thinking, animation skill, and frontend engineering — not just a list of past projects.",
            goals: [
                "Build a portfolio that doubles as a live showcase of frontend and design expertise",
                "Implement a full neumorphic design system with seamless dark/light theme support",
                "Create rich scroll-driven animations using GSAP and Lenis for a cinematic feel",
                "Present projects with in-depth case studies covering process, design system, and outcomes",
            ],
        },
        moodboard: {
            images: [
                "/images/mood-01.jpg",
                "/images/mood-02.jpg",
                "/images/mood-03.webp",
                "/images/mood-04.png",
            ],
            description:
                "Inspired by soft-touch industrial design, clay renders, and tactile UI trends. The moodboard blends neumorphic references with minimalist editorial layouts — emphasizing depth through light, shadow, and subtle material contrasts.",
        },
        designSystem: {
            colors: [
                { name: "Whisper Gray", hex: "#f5f5f5" },
                { name: "Midnight", hex: "#000000" },
                { name: "Slate", hex: "#666666" },
                { name: "Silver", hex: "#bfbfbf" },
                { name: "Snow", hex: "#ffffff" },
                { name: "Charcoal", hex: "#2d3436" },
                { name: "Stone", hex: "#636e72" },
                { name: "Cloud", hex: "#e0e5ec" },
                { name: "Ash", hex: "#ebebeb" },
                { name: "Pewter", hex: "#d5d5d5" },
                { name: "Fog", hex: "#f0f0f0" },
            ],
            fonts: [
                { name: "Audiowide", usage: "Headlines, hero text & brand identity" },
                { name: "Inter", usage: "Body text & secondary UI elements" },
            ],
            description:
                "A dual-tone neumorphic design system with carefully tuned shadow pairs for both light and dark modes. Soft extruded surfaces, inset inputs, and raised cards create a tactile, almost physical interface that feels alive under both themes.",
        },
        features: [
            {
                title: "Neumorphic UI System",
                description:
                    "A complete set of raised, inset, and flat neumorphic components — cards, buttons, and tags — with consistent shadow logic across light and dark themes.",
            },
            {
                title: "GSAP Scroll Animations",
                description:
                    "Cinematic scroll-driven animations including hero parallax, section reveals, and element staggering powered by GSAP ScrollTrigger and Lenis smooth scrolling.",
            },
            {
                title: "Dark/Light Theme Crossfade",
                description:
                    "Smooth theme switching with crossfade avatar transitions, CSS variable-driven color shifts, and zero-flash hydration via system preference detection.",
            },
            {
                title: "Project Case Studies",
                description:
                    "In-depth project pages featuring moodboards, design systems, feature breakdowns, and screen galleries for a comprehensive storytelling experience.",
            },
        ],
        screens: [],
        goal: {
            summary:
                "Craft a portfolio that is itself a testament to design and engineering excellence — where every scroll, transition, and pixel reinforces the skills being presented.",
            outcome:
                "Launched a neumorphic portfolio with cinematic GSAP scroll animations, seamless dark/light theme crossfade, and in-depth project case studies — serving as a living demo of frontend craft.",
        },
    },
];
