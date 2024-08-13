import { NextResponse } from "next/server";

export function middleware(requset){
    return NextResponse.redirect(new URL('/',requset.url))
    //return NextResponse.next()
}

export const config = {
    matcher: ["/blog/:path"]
}