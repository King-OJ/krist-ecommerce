import { authMiddleware } from "next-firebase-auth-edge";
import { NextRequest } from "next/server";
import { clientConfig, serverConfig } from "./config";

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/sign-in",
    logoutPath: "/api/logout",
    apiKey: clientConfig.apiKey,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieName: serverConfig.cookieName,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
  });
}

export const config = {
  matcher: ["/", "/((?!_next|api|.*\\.).*)", "/api/sign-in", "/api/logout"],
};
