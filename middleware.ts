import { NextRequest, NextResponse } from 'next/server';

const adminPage = (pathname: string) => {
    const paths = [
        '/dashboard',
        '/users',
        '/products',
    ];
    return paths.includes(pathname);
}

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('_r')?.value;
    
    const { pathname } = req.nextUrl;
    

    console.log('token : ', token);
    console.log('pathname : ', pathname);
    

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    const role  = req.cookies.get('role');
    // console.log('ROLE : ', role);
    
    // if (pathname == '/login') {
    //     return NextResponse.redirect(new URL('/dashboard', req.url));
    // }
    if (role?.value != 'admin' && adminPage(pathname)) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/products', '/users']
};