const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['randomuser.me'], // 添加你的外部域名列表
    },
};

module.exports = withNextIntl(nextConfig);