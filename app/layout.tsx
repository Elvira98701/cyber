import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Footer, Header, Providers } from "@/components/shared";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Cyber E-Store",
    default: "Cyber E-Store",
  },
  description:
    "Online hardware store with a wide range of smartphones, laptops, household appliances and accessories at competitive prices. Fast delivery and quality assurance.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          {modal}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
