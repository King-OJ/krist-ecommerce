import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Jost } from "next/font/google";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Krist E-commerce",
  description: "An e-commerce app built with NextJS and Firebase by KingOJ",
};

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  return (
    <html lang="en">
      <body className={`${jost.variable} font-jost_font max-w-7xl mx-auto`}>
        <ClientLayout token={tokens}>{children}</ClientLayout>
      </body>
    </html>
  );
}
