import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navigation, NavigationItem, NavigationList, NavigationLogo} from "@/components/Navigation";
import {CartButton} from "@/components/CartButton";
import {CartProvider} from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
    sidebar
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
