import { getPermalink, getAsset } from './utils/permalinks';
const currentYear: number = new Date().getFullYear();
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
        {
          text: 'Mobile App',
          href: getPermalink('/mobile-app'),
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
  actions: [{ text: 'Contact us', href: getPermalink('/contact')}],
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
        {
          text: 'Mobile App',
          href: getPermalink('/mobile-app'),
        },
      ],
    },
    {
      title: 'Integration & IoT',
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
        { text: 'About', href: '/about' },
        { text: 'Client Stories', href: '/clients' },
        { text: 'Career', href: '/career' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:consult@microweb.my' },
    { ariaLabel: 'Phone', icon: 'tabler:phone', href: 'tel:+60168880650' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: "© " + currentYear + `
    <a class="text-blue-200 dark:text-muted" href="https://www.microweb.my/"> microweb.my</a> · All rights reserved.
  `,
};
