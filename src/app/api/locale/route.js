// app/api/locale/route.ts
import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

export async function POST(request) {
  try {
    const { locale } = await request.json();

    // 简单的验证
    const validLocales = ['en', 'zh'];
    if (!validLocales.includes(locale)) {
      return NextResponse.json(
        { error: 'Invalid locale' },
        { status: 400 }
      );
    }

    // 创建响应并设置 Cookie
    const response = NextResponse.json(
      { success: true, locale },
      { status: 200 }
    );

    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 365 * 24 * 60 * 60, // 1年
      path: '/',
      sameSite: 'lax',
      // secure: true, // 在生产环境中取消注释
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// 可选：添加一个 GET 方法来读取当前设置
export async function GET(request) {
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';
  
  return NextResponse.json({ locale });
}