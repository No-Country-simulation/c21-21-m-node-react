import { NextResponse } from 'next/server';

export const middleware = (request) => {
    const token = request.cookies.get('token');
    const user = request.cookies.get('user');

    if (!token || !user) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard/:path*'], 
};
