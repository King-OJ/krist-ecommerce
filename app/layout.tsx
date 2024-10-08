import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Jost } from "next/font/google";

export const metadata: Metadata = {
  title: "Krist E-commerce",
  description: "An e-commerce app built with NextJS and Firebase by KingOJ",
};

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-jost_font max-w-7xl mx-auto`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
