import {
  authMiddleware,
  redirectToHome,
  redirectToLogin,
} from "next-firebase-auth-edge";
import { NextRequest, NextResponse } from "next/server";
import { clientConfig, serverConfig } from "./config";
import { InvalidTokenReason } from "next-firebase-auth-edge/lib/auth/error";

const PUBLIC_PATHS = [
  "/register",
  "/login",
  "/forgot-password",
  "/forgot-password/otp",
];

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    apiKey: clientConfig.apiKey,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieName: serverConfig.cookieName,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
    handleValidToken: async ({ token, decodedToken }, headers) => {
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      return NextResponse.next({
        request: {
          headers,
        },
      });
    },
    // handleInvalidToken: async (reason: InvalidTokenReason) => {
    //   console.info("Missing or malformed credentials", { reason });
    //   return redirectToLogin(request, {
    //     path: "/login",
    //     publicPaths: PUBLIC_PATHS,
    //   });
    // },
  });
}

export const config = {
  matcher: ["/", "/((?!_next|api|.*\\.).*)", "/api/login", "/api/logout"],
};
