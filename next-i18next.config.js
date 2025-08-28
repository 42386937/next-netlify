/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    // localeDetection: true, // 自动检测浏览器语言
  },
//   reloadOnPrerender: process.env.NODE_ENV === 'development', // 开发模式下热重载
};