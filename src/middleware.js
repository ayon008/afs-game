import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const cookieStore = cookies();
    const cookieObj = cookieStore.get('userToken');
    const token = cookieObj?.value;
    const { pathname } = request.nextUrl;

    // If the user is authenticated, proceed to the requested page
    if (token) {
        return NextResponse.next();
    }

    // If the user is not authenticated, redirect to the login page with the original path in query
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    loginUrl.searchParams.set('message', 'You need to log in to access this page.');

    // Use the constructed loginUrl for redirection
    return NextResponse.redirect(loginUrl);
}

// Matching paths for middleware
export const config = {
    matcher: ['/profile', '/profile/:uid', '/profile/uploadedData', '/leaderboard'],
};
