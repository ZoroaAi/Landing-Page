import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';


export default withAuth(
  function middleware(req) {
    console.info("Middleware triggered", { path: req.nextUrl.pathname });

    const { pathname } = req.nextUrl;
    const userRole = req.nextauth.token?.user.role;
    console.info("User role", { role: userRole, path: req.nextUrl.pathname });

    // Restrict certain pages to admins only
    if (pathname.startsWith("/admin") && userRole !== "admin") {
      console.warn("Forbidden access for non-admin user", { path: req.nextUrl.pathname });
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Only allow logged-in users
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*", 
    "/dashboard/:path*", 
    "/login", 
    "/register",
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
