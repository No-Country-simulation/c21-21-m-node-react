import { NextResponse } from 'next/server';

export const middleware = (request) => {
    const token = request.cookies.get('token');
    const userCookie = request.cookies.get('user');
    let userObject;

    const user = userCookie ? userCookie.value : null;

    if (!token || !user) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    try {
        const decodedUser = decodeURIComponent(user); 
        userObject = JSON.parse(decodedUser); 
    } catch (error) {
        console.error('Error al parsear la cookie user:', error.message);
        return NextResponse.redirect(new URL('/', request.url));
    }

    const isAdmin = userObject.role === 'admin';

    if (!isAdmin) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard-admin/:path*'], 
};
