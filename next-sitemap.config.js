export default {
  siteUrl: process.env.NEXT_PUBLIC_ENVIROMENT,
  generateRobotsTxt: true,
  exclude: ['/api*', '/revalidate*', '/blog/new'],

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
