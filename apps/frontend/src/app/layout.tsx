import { ThemeProvider } from "@/lib/providers/theme-provider";
import type { Metadata, Viewport } from "next";

import Footer from "@/app/shared/footer";
import Header from "@/app/shared/header";

import { FALLBACK_SEO } from "@/app.config";
import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { BreadcrumbResponsive } from "./_layouts/breadcrumb";

export const metadata: Metadata = {
  ...FALLBACK_SEO,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#333333" />
      </head>
      <body
        className={cn(
          inter.className,
          "flex min-h-screen flex-col bg-background text-foreground",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <BreadcrumbResponsive />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
