export default {
  siteUrl: process.env.NEXT_PUBLIC_MAIN_URL,
  generateRobotsTxt: true,
  exclude: ['/api*', '/revalidate*', '/blog/new'],

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
