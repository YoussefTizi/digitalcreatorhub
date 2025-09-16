const config = {
  siteUrl: 'https://digital-creator-hub.web.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/private/' },
      { userAgent: '*', allow: '/' },
    ],
  },
};

module.exports = config;