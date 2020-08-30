const ILLUSTRATION_BASEPATH = '/illustrations';
export const config = {
  acronym: 'AC',
  persona: 'Alessandra Comencini',
  social: {
    twitter: 'https://twitter.com/acomencini1',
    instagram: 'https://www.instagram.com/acomencini/',
    linkedin: 'https://www.linkedin.com/in/alessandra-comencini/',
    goodreads:
      'https://www.goodreads.com/user/show/114878357-alessandra-comencini',
  },
  pages: {
    index: {
      illustration: {
        path: `${ILLUSTRATION_BASEPATH}/index.png`,
        alt: '',
      },
    },
    about: {
      name: 'About',
      path: '/about',
      illustration: {
        path: `${ILLUSTRATION_BASEPATH}/about.png`,
        alt: '',
      },
    },
    blog: {
      name: 'Blog',
      path: '/blog',
      illustration: {
        path: `${ILLUSTRATION_BASEPATH}/blog.png`,
        alt: '',
      },
    },
    contact: {
      name: 'Contact',
      path: '/contact',
      illustration: {
        path: `${ILLUSTRATION_BASEPATH}/index.png`, // TODO: replace with correct image
        alt: '',
      },
    },
    portfolio: {
      name: 'Portfolio',
      path: '/portfolio',
      illustration: {
        path: `${ILLUSTRATION_BASEPATH}/portfolio.png`,
        alt: '',
      },
    },
    notFound: {
      name: '404 Not Found',
      illustration: {
        path: `${ILLUSTRATION_BASEPATH}/index.png`, // TODO: replace with correct image
        alt: '',
      },
    },
  },
};
