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
        return NextResponse.redirect(new URL('/', request.url));
    }

    const { role } = userObject;

    const urlPath = request.nextUrl.pathname;

    if (urlPath.startsWith('/dashboard-admin')) {
        if (role === 'admin') {
            return NextResponse.next(); 
        } else {
            return NextResponse.redirect(new URL('/', request.url)); 
        }
    }

    if (urlPath.startsWith('/dashboard')) {
        if (role === 'emprendedor' || role === 'inversor') {
            return NextResponse.next(); 
        } else {
            console.log('Redirigiendo: Acceso denegado a dashboard');
            return NextResponse.redirect(new URL('/', request.url)); 
        }
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard-admin/:path*'], 
};
