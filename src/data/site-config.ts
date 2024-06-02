export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Kweku ',
    subtitle: 'A medical student, machine learning enthusiast, and Astro.js newbie.',
    description: "A medical student, machine learning enthusiast, and Astro.js newbie. I write about my projects, thoughts, and experiences.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/fredobeng'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/@_derf8'
        },
        {
            text: 'Email',
            href: 'mailto:oorbeng@gmail.com'
        }
    ],
    hero: {
        title: 'Hi 👋🏾, and Welcome to My Corner of the Web!',
        text: "\n About myself and this site?\n\n Some think I'm funny, most think I'm reticent. I'm currently studying Medicine in school. I play around with Python and Julia a lot (for machine learning) when I'm free and write about what I learn and build in <a href='projects'>Projects</a>. I use <a href='blog'>Blog</a> as an outlet for my thoughts and experiences.",
        image: {
            src: '/hero.jpg',
            alt: 'A photograph of a beach.',
            caption: "Photograph of a beach. Shot by yours truly."
        },

    }
};

export default siteConfig;
