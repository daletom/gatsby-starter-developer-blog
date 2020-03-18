module.exports = {
  pathPrefix: '/gatsby-starter-developer-blog',
  siteUrl: 'https://tomdevblog.netlify.com',
  siteTitle: 'Tom Dev Blog',
  siteDescription: 'Logbook of a dev journey',
  author: 'tomdale',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: 'https://luigi-colella.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    about: 'about',
    tag: 'tag',
    archive: 'archive',
  },
  social: {
    github: 'https://github.com/daletom',
    linkedin: 'https://www.linkedin.com/in/daletom/',
    rss: '/rss.xml',
  },
  tags: {
    imgix: {
      description: 'imgix is an on-demand image solution.',
    },
    githubpages: {
      name: 'Github Pages',
      description: 'Github pages is an online.',
    },
    javascript: {
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
    },
    gatsby: {
      description: 'Gatsby is a serverless ...',
    },
    nodejs: {
      name: 'Node.js',
      description:
        'Node.js is a tool for executing JavaScript in a variety of environments.',
    },
    netlify: {
      name: 'Netlify',
      description: 'Netlify is...',
    },
    sass: {
      description: 'Sass is a stable extension to classic CSS.',
    },
    typescript: {
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    react: {
      description:
        'React is an open source JavaScript library used for designing user interfaces.',
    },
    vuejs: {
      name: 'Vue.js',
      description:
        'Vue.js is a JavaScript framework for building interactive web applications.',
    },
  },
}
