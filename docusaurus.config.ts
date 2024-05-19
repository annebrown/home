import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Browndomain.com',
  tagline: 'Dev collab',
  favicon: 'img/favicon-bd.ico',

  // Set the production url of your site here
  url: 'https://www.browndomain.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
 // organizationName: 'annebrown', // Usually your GitHub org/user name.
 // projectName: 'home', // Usually your repo name.

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
    image: 'img/logo-bd.svg',
    navbar: {
      title: 'browndomain.com',
      logo: {
        alt: 'browndomain.com Logo -green sail over a white sail, black boat.  Initials on sail: BD',
        src: 'img/favicon-bd.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'introSidebar',
        //   position: 'right',
        //   label: 'Home',
        //   to: 'https://www.browndomain.com',
        // },
        {
          position: 'right',
         label: 'Angular WebApp',
          to: 'https://www.annebrown.ca',
        }, 
        {
         position: 'right',
        label: 'Workflows',
         to: 'https://github.com/annebrown/docs-priv/blob/main/workflows/',
       },
        {
         to: 'https://github.com/annebrown/templates-priv/',
         label: 'Templates',
         position: 'right',
       },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Home',
          items: [
            {
              label: 'Browndomain.com',
              img: '/static/img/logo.svg',
              to: 'https://www.browndomain.com',
            },
            {
              label: 'annebrown.ca',
              img: '/static/img/logo-ab.svg',
              to: 'https://www.annebrown.ca',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/annebrown/',
            },
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/annebrown',
            },
          ],
        },
        {
          title: 'More',
          items: 
          [
            {
              label: 'My Cheatsheets on W3S',
              to: 'https://cheatsheets.w3spaces.com/',
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
