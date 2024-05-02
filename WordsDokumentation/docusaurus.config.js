// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Words",
    tagline: "Words!",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://docs.words.niculian.me",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "  Nicola3341246/words", // Usually your GitHub org/user name.
    projectName: "Words", // Usually your repo name.
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/Nicola3341246/words/tree/Dokumentation/wordDokumentation/docs/Dokumentation.md",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Words",
                logo: {
                    alt: "Logo",
                    src: "img/logo.svg",
                },
                items: [
                    { to: "/docs/Dokumentation", label: "Dokumentation", position: "left" },
                    {
                        href: "https://github.com/Nicola3341246/Words",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Projektdokumentation",
                                to: "/docs/Dokumentation",
                            },
                        ],
                    },
                    {
                        title: "Autoren",
                        items: [
                            {
                                label: "sanqro",
                                href: "https://github.com/sanqro/",
                            },
                            {
                                label: "Nicola3341246",
                                href: "https://github.com/Nicola3341246",
                            },
                            {
                                label: "Titepasile",
                                href: "https://github.com/titepasile",
                            },
                            {
                                label: "RelxOff",
                                href: "https://github.com/RelxOff",
                            },
                        ],
                    },
                    {
                        title: "Mehr",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/Nicola3341246/Words",
                            },
                            {
                                label: "Website",
                                href: "https://wordle.niculian.me",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Nicola3341246, sanqro, RelxOff, titepasile`,
            },
            prism: {
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
