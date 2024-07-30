import { NextResponse, type NextRequest } from "next/server";
import { checkCookie } from "./libs/cookie";

export async function middleware(request: NextRequest) {
  const session = await checkCookie(request, "session");

  if (
    (request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register" ||
      request.nextUrl.pathname === "/forgot" ||
      request.nextUrl.pathname === "/reset") &&
    session
  ) {
    return NextResponse.redirect(new URL("/main", request.url));
  } else if (request.nextUrl.pathname === "/main" && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login/:path*",
    "/register/:path*",
    "/forgot/:path*",
    "/reset/:path*",
    "/main",
  ],
};
