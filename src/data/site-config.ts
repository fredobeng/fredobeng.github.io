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
            href: 'https://github.com/mlmsme'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hi 👋🏾, and Welcome to My Corner of the Web!',
        text: "My name is Kweku, and I'm currently studying Medicine in school. I spend a great deal of my free time learning about (and playing with) machine learning algorithms, getting lost on the internet, and listening to podcast episodes.\n\n\n I write about my programming, machine learning, and web development projects in <a href='projects'>Projects</a>. I however use <a href='blog'>Blog</a> as an outlet for my thoughts and experiences.",
        image: {
            src: '/lois.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },

    }
};

export default siteConfig;
