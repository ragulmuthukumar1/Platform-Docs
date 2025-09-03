const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Platform Docs",
  tagline: "Comprehensive guide for the Platform Console",
  favicon: "/Images/platform.png",

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/your-org/your-repo/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/your-org/your-repo/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Platform Docs",
      logo: {
        alt: "Platform Logo",
        src: "Images/platform.png",
        srcDark: "Images/platform.png", // Add dark mode logo variant
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/adarko-io/platform",
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
          items: [{ label: "Getting Started", to: "/docs/intro" }],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/your-platform",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/your-platform",
            },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: "https://github.com/adarko-io/platform" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ADARKO Platform. All rights reserved.`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
