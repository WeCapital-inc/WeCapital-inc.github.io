import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import lightTheme from "./src/utils/prism";
import rehypePrismPlus from "rehype-prism-plus";

const config: Config = {
  title: "WeCapital技術ブログ",
  tagline: "WeCapitalエンジニアによる技術ブログ",
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
        googleTagManager: {
          containerId: "GTM-TL85PCMF",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
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
      theme: lightTheme,
      additionalLanguages: [
        "java",
        "latex",
        "haskell",
        "matlab",
        "PHp",
        "powershell",
        "bash",
        "diff",
        "json",
        "scss",
      ],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "error-next-line",
        },
      ],
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
