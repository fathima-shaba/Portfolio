import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Fathima Shaba | Full Stack Developer",
  description: "Portfolio of Fathima Shaba - Full stack developer building modern web experiences with React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
