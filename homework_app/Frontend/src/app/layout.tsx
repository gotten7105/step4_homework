//nextから持ってきているのがなぜかは分からない
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//この下の部分の定義もよく分からない
export default function RootLayout({ 
  children,
 }: Readonly<{
  children: React.ReactNode;
 }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
