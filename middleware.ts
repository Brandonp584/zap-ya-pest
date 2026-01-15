import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isAdminRoute = pathname.startsWith("/admin");
    const isLoginPage = pathname === "/admin/login";

    const authCookie = req.cookies.get("admin-auth")?.value === "true";

    // If NOT logged in and trying to access admin pages
    if (isAdminRoute && !isLoginPage && !authCookie) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // If loggin in and trying to access login page
    if (isLoginPage && authCookie) {
        return NextResponse.redirect(new URL("/admin/leads", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};