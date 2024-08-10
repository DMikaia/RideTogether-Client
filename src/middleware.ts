import { NextResponse, type NextRequest } from "next/server";
import { checkCookie } from "./libs/cookie";

export async function middleware(request: NextRequest) {
  const session = await checkCookie(request, "session");

  const publicPaths = ["/", "/login", "/register", "/forgot", "/reset"];
  const protectedPaths = ["/dashboard", "/offer", "/room", "/profile"];

  const currentPath = request.nextUrl.pathname;

  if (session) {
    // If the user is logged in and tries to access a public page, redirect to the dashboard.
    if (publicPaths.includes(currentPath)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    // If the user is not logged in and tries to access a protected page, redirect to login.
    if (protectedPaths.some((path) => currentPath.startsWith(path))) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/offer/:path*",
    "/room/:path*",
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot",
    "/reset",
  ],
};
