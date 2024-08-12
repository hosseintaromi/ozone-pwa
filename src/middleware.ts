import { type NextRequest, NextResponse } from 'next/server';

import { ROUTES } from '@/constant/routes';

export async function middleware(request: NextRequest) {
  const { url } = request;
  const hasToken = request.cookies.get('token')?.value;
  if (request.url.indexOf(ROUTES.LOGIN) > -1) {
    if (hasToken) {
      return NextResponse.redirect(new URL(ROUTES.HOME, url));
    }

    return NextResponse.next();
  }
  if (!hasToken) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/home/', '/login/', '/wallet/', '/KYC/', '/kyc/', '/setting/'],
};
