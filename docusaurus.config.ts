import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Browndomain.com',
  tagline: 'Dev collab',
  favicon: 'img/favicon-bd.png',

  // Set the production url of your site here
  url: 'https://home.browndomain.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'annebrown', // Usually your GitHub org/user name.
  projectName: 'home', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'browndomain.com',
      logo: {
        alt: 'browndomain.com Logo',
        src: 'img/favicon-bd.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introSidebar',
          position: 'right',
          label: 'Home',
        },
        {
          type: 'docSidebar',
          sidebarId: 'introSidebar',
          position: 'right',
          label: 'Ref',
        },
        // {
        //   type: 'docSidebar',
         //  sidebarId: 'introSidebar',
        //   position: 'left',
        //   label: 'Digital Media',
        // },
        {
          href: 'https://github.com/annebrown/home',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'home',
          items: [
            {
              label: 'Digital Media',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/annebrown',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/annebrown',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/annebrowndomain',
            },
          ],
        },
        {
          title: 'More',
          items: 
          [
            {
              label: 'GitHub',
              href: 'https://github.com/annebrown/home.git',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Browndomain.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
