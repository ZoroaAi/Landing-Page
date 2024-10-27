// src/middleware.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const userSession = cookies().get("user-session");

  if (!userSession && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = userSession ? JSON.parse(userSession.value) : null;

  if (pathname.startsWith("/dashboard/admin") && (!user || user.role !== "admin")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard/admin/:path*"],
};
