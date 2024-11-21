import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SplashScreen } from "@/components/SplashScreen";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gnoni Gabriele | Front-end Developer Portfolio",
  description: "Generated by create next app",
};

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/icon?svg"
          type="image/svg"
        />
      </head>

      <body className={`${interFont.className} antialiased`}>
        <SplashScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}
