import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fathima Shaba | Frontend Developer",
  description: "Portfolio of Fathima Shaba - Frontend developer building modern web experiences with React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-surface text-text-default font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
