import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
    RiNextjsFill,
    RiTailwindCssFill,
    RiOpenaiFill,
    RiWordpressFill,
    RiReactjsFill,
} from "react-icons/ri";
import {
    SiTypescript,
    SiShadcnui,
    SiPrisma,
    SiWoocommerce,
    SiReact,
    SiSupabase,
    SiExpress,
    SiPuppeteer,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiGraphql,
    SiFramer,
    SiThreedotjs,
    SiElectron,
    SiDocker,
    SiDrizzle,
    SiMui,
    SiGit,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { DiRedis } from "react-icons/di";


export const siteConfig = {
    name: "Carley Robinson",
    title: "Carley Robinson | Full-Stack Developer",
    email: "truecolor0121@gmail.com",
    alias: "Aurora",
    description:
        "Carley Robinson is a web developer who builds scalable, user-centric applications using Next.js, WordPress, and other frameworks. With a focus on performance, accessibility, and clean code, Carley creates digital solutions that are both functional and aesthetically pleasing.",
    keywords:
        "Carley Robinson, full-stack developer, web development, Next.js, WordPress, React, Node.js, scalable applications, clean code",
    url: "https://carleyrobinson.dev",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer", "React, NextJS Developer", "Backend Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/dragon0513",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/dragon0513/",
        },
        {
            icon: <FaSquareXTwitter />,
            url: "https://x.com/dragon0513",
        },
        {
            icon: <FaDiscord />,
            url: "https://discord.gg/VY73CaUQ",
        },
        {
            icon: <IoIosMail />,
            url: "mailto:truecolor0121@gmail.com",
        },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME",
            },
            {
                id: "experiences",
                label: "EXPERIENCES",
            },
            {
                id: "projects",
                label: "PROJECTS",
            },
            {
                id: "technologies",
                label: "TECHNOLOGIES",
            },
            {
                id: "contact",
                label: "CONTACT",
            },
        ],
        aboutMe: `
            <p>
                Hi! This is <strong>Carley</strong>, I am highly skilled and results-driven <strong>Fullstack Developer</strong> with <strong>7+ years</strong> of experience designing, developing, and deploying scalable web applications. Proficient in modern technologies such as <strong>React</strong>, <strong>Next.js</strong>, <strong>Wordpress</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>Firebase</strong>, <strong>Supabase</strong>, and <strong>AWS</strong>, with a strong focus on delivering high-quality, user-centric solutions. Adept at collaborating with cross-functional teams to drive innovation and optimize performance.
            </p>
            <p>
                When I’m not coding, you’ll find me playing <strong>Dota 2</strong>, cooking up new recipes, or streaming on <strong>Kick</strong>. Let's connect—I'd love to help with your next <strong>website</strong> or <strong>API</strong> project!
            </p>
        `,
        experiences: [
            {
                company: "TechNova Solutions, San Francisco, CA",
                position: "Senior Fullstack Developer",
                duration: "2023.12 - 2024.11",
                description:
                    "Led the development of a scalable e-commerce platform using Next.js, TypeScript, and Tailwind CSS, resulting in a 30% increase in page load speed and a 20% boost in conversion rates. " +
                    "Designed and implemented RESTful APIs with Node.js and Express.js, integrating with Firebase for real-time data synchronization and Supabase for relational database management. " +
                    "Optimized AWS infrastructure, reducing hosting costs by 25% through efficient use of EC2, S3, and Lambda services. " +
                    "Mentored junior developers in best practices for React and TypeScript, improving team productivity and code quality. " +
                    "Collaborated with UX/UI designers to create responsive, accessible, and visually appealing user interfaces.",
            },
            {
                company: "InnovateX, New York, NY",
                position: "Full-stack Developer",
                duration: "2020.7 - 2023.10",
                description:
                    "Developed a SaaS-based project management tool using React, Redux, and Node.js, serving over 10,000 active users. " +
                    "Integrated third-party APIs for payment processing (Stripe) and authentication (Firebase Auth), ensuring secure. " + 
                    "Implemented server-side rendering (SSR) with Next.js, improving SEO rankings and reducing initial page load times by 40%." +
                    "Conducted code reviews and implemented CI/CD pipelines using GitHub Actions, reducing deployment errors by 15%. " +
                    "Worked closely with product managers to deliver features on time and within budget, adhering to Agile methodologies",
            },
            {
                company: "CloudForge, Austin, TX",
                position: "Software Engineer (Fullstack)",
                duration: "2018.3 - 2023.10",
                description: "Built and deployed a real-time chat application using React, Node.js, and WebSockets, achieving 99.9% uptime and scalability for 5,000+ concurrent users. " +
                    "Utilized AWS services (S3, Lambda) to create a serverless backend architecture, reducing operational overhead by 30%. " + 
                    "Enhanced application performance by optimizing database queries and implementing caching strategies with Redis. " +
                    "Collaborated with cross-functional teams to deliver a mobile-responsive web application, increasing user engagement by 25%. " +
                    "Contributed to open-source projects, including a popular React component library, gaining 500+ stars on GitHub.",
            },
            {
                company: "CodeCrafters, Seattle, WA",
                position: "Junior Fullstack Developer",
                duration: "2017.2 - 2028.3",
                description: "Assisted in the development of a content management system (CMS) using React and Node.js, enabling clients to manage and publish content efficiently. " +
                    "Integrated RESTful APIs for data retrieval and manipulation, ensuring seamless communication between frontend and backend systems. " + 
                    "Wrote unit and integration tests using Jest and Cypress, achieving 95% test coverage and improving code reliability " +
                    "Participated in daily stand-ups and sprint planning sessions, contributing to the successful delivery of multiple projects. " +
                    "Gained hands-on experience with version control (Git) and collaborative development workflows.",
            },
        ],
        projects: [
            {
                title: "Carley Robinson | Portfolio Website",
                description:
                    "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:",
                logo: "/logox.png",
                repoLink: "https://github.com/dragon0513/portfolio",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                ],
                link: "https://carleyrobinson.dev",
            },
            {
                title: "Genzify AI",
                description:
                    "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
                logo: "/genzify-logo.png",
                repoLink: "https://github.com/dragon0513/genzify-app",
                technologies: [
                    {
                        icon: <RiReactjsFill className="text-[#01f3f2]" />,
                        name: "React.js",
                    },
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiOpenaiFill className="text-[#412991]" />,
                        name: "OpenAI API",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                ],
                link: "https://genzify-app-wine.vercel.app/",
            },
            {
                title: "WhatAboutPets",
                description:
                    "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
                logo: "/whataboutpets-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiReactjsFill className="text-[#01f3f2]" />,
                        name: "React.js",
                    },
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <GrGraphQl className="text-[#E10098]" />,
                        name: "GraphQL",
                    },
                    {
                        icon: <SiWoocommerce className="text-[#96588A]" />,
                        name: "Woocommerce",
                    },
                ],
                link: "https://whataboutpets.com",
            },
            {
                title: "丹丹影院 - ynct55.com",
                description:
                    "ynct55.com is a Chinese-language streaming platform offering free access to a diverse library of movies, TV shows, and anime. Managed all aspects of the project, from backend infrastructure and database setup to front-end design and user experience. Implemented efficient streaming solutions and optimized the platform for SEO to reach a broader audience. This project highlights my skills in building and maintaining a complete streaming site, tailored specifically for a Chinese-speaking user base.",
                logo: "/ynct55-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiReactjsFill className="text-[#01f3f2]" />,
                        name: "React.js",
                    },
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <SiPrisma className="text-[#2D3748]" />,
                        name: "Prisma",
                    },
                ],
                link: "https://www.ynct55.com",
            },
        ],
        technologies: {
            main: [
                {
                    name: "Next.js",
                    icon: <RiNextjsFill className="text-[#FFF]" />,
                    description: "A React framework",
                },
                {
                    name: "React",
                    icon: <SiReact className="text-[#61DAFB]" />,
                    description: "A JavaScript UI library",
                },
                {
                    name: "Tailwind CSS",
                    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                    description: "A CSS framework",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-[#3178C6]" />,
                    description: "Typed Javascript",
                },
                {
                    name: "Git",
                    icon: <SiGit className="text-[#F05032]" />,
                    description: "A version control system",
                },
                {
                    name: "Prisma",
                    icon: <SiPrisma className="text-[#4a5b77]" />,
                    description: "An ORM for databases",
                },
                {
                    name: "WordPress",
                    icon: <RiWordpressFill className="text-[#21759B]" />,
                    description: "A CMS for websites",
                },
                {
                    name: "Express.js",
                    icon: <SiExpress className="text-[#FFF]" />, // ORIGINALLY BLACK
                    description: "A Node.js framework",
                },
                {
                    name: "Puppeteer",
                    icon: <SiPuppeteer className="text-[#7a56f1]" />,
                    description: "A library for browser automation",
                },
            ],
            other: [
                {
                    name: "HTML5",
                    icon: <SiHtml5 className="text-[#E34F26]" />,
                },
                {
                    name: "CSS",
                    icon: <SiCss3 className="text-[#009df7]" />,
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#F7DF1E]" />,
                },
                {
                    name: "NodeJS",
                    icon: <SiNodedotjs className="text-[#339933]" />,
                },
                {
                    name: "PHP",
                    icon: <SiPhp className="text-[#5d6dad]" />,
                },
                {
                    name: "MySQL",
                    icon: <SiMysql className="text-[#5798ca]" />,
                },
                {
                    name: "Supabase",
                    icon: <SiSupabase className="text-[#0084d4]" />,
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-[#47A248]" />,
                },
                {
                    name: "Redis",
                    icon: <DiRedis className="text-[#DC382D]" />,
                },
                {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-[#E10098]" />,
                },
                {
                    name: "RESTful API",
                    icon: <TbApi className="text-[#FF5733]" />,
                },
                {
                    name: "Framer Motion",
                    icon: <SiFramer className="text-[#0055FF]" />,
                },
                {
                    name: "Three.js",
                    icon: <SiThreedotjs className="text-[#FFF]" />, // ORIGINALLY BLACK
                },
                {
                    name: "WooCommerce",
                    icon: <SiWoocommerce className="text-[#96588A]" />,
                },
                {
                    name: "React Native",
                    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
                },
                {
                    name: "Electron",
                    icon: <SiElectron className="text-[#47848F]" />,
                },
                {
                    name: "Docker",
                    icon: <SiDocker className="text-[#2496ED]" />,
                },
                {
                    name: "Shadcn/UI",
                    icon: <SiShadcnui className="text-[#FFF]" />,
                },
                {
                    name: "Drizzle",
                    icon: <SiDrizzle className="text-[#00A7E1]" />,
                },
            ],
        },
    },
};
