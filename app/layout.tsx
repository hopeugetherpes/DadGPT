import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DadGPT — A steady father-figure voice in ChatGPT",
    template: "%s · DadGPT",
  },
  description:
    "DadGPT is an open, skills-only ChatGPT plugin offering warm, practical father-figure guidance with clear safety boundaries.",
  applicationName: "DadGPT",
  authors: [{ name: "Anatole", url: "https://dadgpt.anatole.co" }],
  creator: "Anatole",
  keywords: [
    "DadGPT",
    "father figure",
    "mentorship",
    "emotional support",
    "healthy masculinity",
    "ChatGPT plugin",
    "open source",
  ],
  icons: {
    icon: "/dadgpt-avatar.png",
    shortcut: "/dadgpt-avatar.png",
    apple: "/dadgpt-avatar.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#72c6ee",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
