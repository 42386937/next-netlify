// middleware.ts
import { NextResponse } from 'next/server';
// import { useSetCookie } from 'cookies-next/client';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// 1. 配置支持的语言和默认语言
const locales = ['en', 'zh'] // 使用 'as const' 获得更好的类型推断
// export type Locale = (typeof locales)[number];
const defaultLocale = 'en';

// 2. 从请求中获取最合适的locale
function getLocale(request) {
  // 优先从 Cookie 中获取用户明确的选择
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  // 如果 Cookie 中存在且是支持的语言，则优先使用
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Cookie 中没有，则使用 Accept-Language Header 进行协商

  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();

  // 匹配最合适的语言
  try {
    // @ts-ignore - locales 类型匹配问题
    return matchLocale(languages, locales, defaultLocale);
  } catch (e) {
    // 匹配失败时使用默认语言
    return defaultLocale;
  }
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // 3. 检查路径是否已包含语言标识
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  // 如果路径已有语言，则跳过重定向
  if (pathnameHasLocale) {
    // 但仍然可以在这里设置或更新 Cookie（可选）
    // 例如，确保 Cookie 中的值和 URL 一致
    return NextResponse.next();
  }

  // 4. 获取应使用的语言（优先从 Cookie）
  const locale = getLocale(request);
  // 5. 重定向到包含语言标识的 URL
  // 例如：/about -> /en/about
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  // 6. 创建重定向响应，并在响应中设置/更新 Cookie
  // const response = NextResponse.redirect(newUrl);
  const response = NextResponse.next();

  // 将当前决定的语言（无论是来自Cookie还是新协商的）存入Cookie，延长有效期
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 365 * 24 * 60 * 60, // 1年有效期
    path: '/', // 对整个站点有效
    sameSite: 'lax', // 良好的安全默认值
    // secure: process.env.NODE_ENV === 'production', // 生产环境建议开启
  });

  return response;
}

// 7. 配置中间件匹配路径（排除静态文件等）
export const config = {
  matcher: [
    // 跳过所有内部路径 (_next, api, favicon.ico 等)
    '/((?!api|_next/static|_next/image|favicon.ico|opengraph-image.*|twitter-image.*).*)',
  ],
};