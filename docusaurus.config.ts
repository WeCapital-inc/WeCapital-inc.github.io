import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tech Blog",
  tagline: "Tech blog by WeCapital Engineers",
  favicon: "img/favicon.ico",

  url: "https://WeCapital-inc.github.io",
  baseUrl: "/",

  organizationName: "WeCapital-inc",
  projectName: "WeCapital-inc.github.io",
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",
  onDuplicateRoutes: "throw",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: false,
          blogSidebarTitle: "最近の投稿",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "Tech Blog",
      hideOnScroll: true,
      logo: {
        alt: "WeCapital Logo",
        src: "img/WeCapital_white.png",
      },
      style: "primary",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Company",
          items: [
            {
              label: "コーポレートサイト",
              href: "https://we-capital.co.jp/",
            },
            {
              label: "採用",
              href: "https://herp.careers/v1/wecapital",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WeCapital Inc. ALL RIGHTS RESERVED`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    format: "mdx",
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    anchors: {
      maintainCase: true,
    },
  },
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],
};

export default config;
