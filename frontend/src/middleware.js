import { NextResponse } from 'next/server';

export const middleware = (request) => {
    const token = request.cookies.get('token');
    const userCookie = request.cookies.get('user');
    let userObject;

    if (!token || !userCookie) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    const user = userCookie ? userCookie.value : null;

    try {
        const decodedUser = decodeURIComponent(user); 
        userObject = JSON.parse(decodedUser); 
    } catch (error) {
        console.error('Error al parsear la cookie user:', error.message);
        return NextResponse.redirect(new URL('/', request.url));
    }

    const { role } = userObject;

    const urlPath = request.nextUrl.pathname;

    if (urlPath.startsWith('/dashboard-admin') && role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (urlPath.startsWith('/dashboard') && (role !== 'emprendedor' && role !== 'inversor')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard-admin/:path*'], 
};
