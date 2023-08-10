// gitprofile.config.js

const config = {
  github: {
    username: 'shpingalet007', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['simplex', 'shpingalet007', 'tpl-crypto-study', 'koa-rest', 'jTime'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'pavelvernigorov',
    twitter: 'shpingalet007',
    mastodon: '',
    facebook: '',
    instagram: 'shpingalet007',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'shpingalet007@protonmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Vue.js',
    'Node.js',
    'MongoDB',
    'PHP',
    'Git',
    'Docker',
    'HTML5/CSS3',
    'Chai',
    'Mocha',
    'DevOps',
    'CI/CD',
  ],
  experiences: [
    {
      company: 'Bastyon Decentralized Social Network',
      position: 'Lead Full-Stack Web Developer',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://bastyon.com/',
    },
    {
      company: 'Startup Reyuno',
      position: 'Web Developer | Protocol Engineer',
      from: 'January 2020',
      to: 'December 2021',
    },
    {
      company: 'Startup React',
      position: 'Web Developer',
      from: '2019',
      to: '2020',
    },
    {
      company: 'Startup Inzerto',
      position: 'Web Developer | Reverse Engineer',
      from: 'June 2018',
      to: 'September 2018',
    },
    {
      company: 'Startup Framox',
      position: 'Web Developer',
      from: 'April 2015',
      to: 'December 2015',
    },
    {
      company: 'Startup Punda',
      position: 'Full-Stack Web Developer',
      from: 'October 2014',
      to: 'April 2015',
    },
    {
      company: 'Votecall Diploma Thesis',
      position: 'Full-Stack Web Developer',
      from: 'April 2015',
      to: 'June 2015',
    },
    {
      company: 'Aquastroy Ltd.',
      position: 'Web Developer',
      from: '2011',
      to: '2014',
      companyLink: 'http://web.archive.org/web/20140814064934/http://www.bas36.ru/',
    },
  ],
  certifications: [
    {
      name: 'Regional WorldSkills 2015 (Russia, Voronezh)',
      body: 'Took 2nd place in the Web Design competence. The championship took place over 3 days',
      year: 'October 2015',
      link: 'https://wsr36.ru/chempionaty/regionalnye-chempionaty/ii-regionalnyjj-chempionat/'
    },
  ],
  education: [
    {
      institution: 'VGPEK',
      degree: 'Secondary Professional Education',
      from: '2012',
      to: '2015',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'flex-tls',
      description:
        'FlexTLS is a powerful JavaScript library that empowers developers with the ability to generate TLS (Transport Layer Security) packets in a granular and flexible manner. With FlexTLS, you can construct TLS packets byte by byte, granting you complete control over the encryption process. This versatility allows you to use the generated packets in various scenarios, such as creating custom proxies or ensuring secure communication between clients and servers. Can be used for both Node.js and browsers.',
      imageUrl: 'https://raw.githubusercontent.com/shpingalet007/shpingalet007.github.io/main/images/flex-tls.png',
    },
    {
      title: 'http-packet',
      description:
        'An NPM module to generate HTTP raw packets. Can be used for both Node.js and browsers.',
      imageUrl: 'https://raw.githubusercontent.com/shpingalet007/shpingalet007.github.io/main/images/http-packet.png',
      link: 'https://www.npmjs.com/package/http-packet',
    },
    {
      title: 'element-selector',
      description:
        'An NPM module to provide developers with their own element inspector. Can be useful in chrome extensions.',
      imageUrl: 'https://raw.githubusercontent.com/shpingalet007/shpingalet007.github.io/main/images/element-selector.png',
      link: 'https://www.npmjs.com/package/element-selector',
    },
    {
      title: 'conflictor',
      description:
        'An Github Action and binary tool that facilitates conflict detection between pull requests. Developed in the context of Bastyon social network CI/CD, Conflictor proves to be an indispensable tool for ensuring a smooth and conflict-free merging process.',
      imageUrl: 'https://raw.githubusercontent.com/shpingalet007/shpingalet007.github.io/main/images/conflictor.png',
      link: 'https://github.com/shpingalet007/conflictor',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
