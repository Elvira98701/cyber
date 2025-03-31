import type { Metadata } from "next";
import { Footer, Header, Providers } from "@/components/shared";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Cyber E-Store",
    default: "Cyber E-Store",
  },
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <Providers>
          {children}
          {modal}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
