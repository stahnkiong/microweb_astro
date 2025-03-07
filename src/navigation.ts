import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Custom Software',
          href: getPermalink('/software'),
        },
        {
          text: 'AI Marketing',
          href: getPermalink('/ai-marketing'),
        },
        {
          text: 'System Integration',
          href: getPermalink('/integration'),
        },
        {
          text: 'Web Development',
          href: getPermalink('/web-development'),
        },
      ],
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Enterprise',
          href: getPermalink('/enterprise'),
        },
        {
          text: 'Healthcare',
          href: getPermalink('/healthcare'),
        },
        {
          text: 'Logistics & Supply Chain',
          href: getPermalink('/logistics'),
        },
        {
          text: 'Retail & Ecommerce',
          href: getPermalink('/retail'),
        },
        {
          text: 'Manufacturing',
          href: getPermalink('/manufacturing'),
        },
        {
          text: 'Agriculture',
          href: getPermalink('/agriculture'),
        },
        {
          text: 'Hospitality',
          href: getPermalink('/hospitality'),
        },
        {
          text: 'Education',
          href: getPermalink('/education'),
        },
        {
          text: '3D Development',
          href: getPermalink('/games'),
        },
      ],
    },
    {
      text: 'Client Stories',
      href: getPermalink('/clients'),
    },
    {
      text: 'Career',
      href: getPermalink('/career'),
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [{ text: 'Reach us', href: getPermalink('/contact')}],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Custom Software',
          href: getPermalink('/software'),
        },
        {
          text: 'AI Marketing',
          href: getPermalink('/ai-marketing'),
        },
        {
          text: 'System Integration',
          href: getPermalink('/integration'),
        },
        {
          text: 'Web Development',
          href: getPermalink('/web-development'),
        },
      ],
    },
    {
      title: 'Industries & IoT',
      links: [
        {
          text: 'Enterprise',
          href: getPermalink('/enterprise'),
        },
        {
          text: 'Healthcare',
          href: getPermalink('/healthcare'),
        },
        {
          text: 'Logistics & Supply Chain',
          href: getPermalink('/logistics'),
        },
        {
          text: 'Retail & Ecommerce',
          href: getPermalink('/retail'),
        },
        {
          text: 'Manufacturing',
          href: getPermalink('/manufacturing'),
        },
        {
          text: 'Agriculture',
          href: getPermalink('/agriculture'),
        },
        {
          text: 'Hospitality',
          href: getPermalink('/hospitality'),
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          text: 'Education',
          href: getPermalink('/education'),
        },
        {
          text: '3D Development',
          href: getPermalink('/games'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Client Stories', href: 'clients' },
        { text: 'Career', href: 'career' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
