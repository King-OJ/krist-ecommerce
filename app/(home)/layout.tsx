import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krist E-commerce",
  description: "An e-commerce app built with NextJS and Firebase by KingOJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
