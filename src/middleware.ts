import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // console.log("first", request);
  // Get a cookie
  const cookie = request.cookies.get("x-custom-auth-header")?.value;
  console.log("VV", cookie);

  // Get all cookies
  request.cookies.getAll();

  // To change a cookie, first create a response
  const response = NextResponse.next();

  // Set a cookie
  const cookies = response.cookies.set("x-custom-auth-header", "");
  console.log(cookies);

  // Delete a cookie
  response.cookies.delete("myCookieName");

  return response;
}
