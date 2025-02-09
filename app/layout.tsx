import type { Metadata } from "next";
import { Footer, Header } from "@/components/shared";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Store",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
