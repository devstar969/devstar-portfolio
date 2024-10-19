import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import Glow from "./components/Glow";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "./config";
import { Toaster } from "sonner";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: {
        canonical: siteConfig.url,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        type: "website",
        siteName: siteConfig.title,
        images: [
            {
                url: "/Portfolio.png",
                width: 1920,
                height: 1080,
                alt: "Alvin Chang Portfolio",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-48x48.png"
                    sizes="48x48"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="AlvinChang.dev"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link 
                    rel="alternate" 
                    type="application/rss+xml" 
                    title={`RSS Feed for ${siteConfig.name}'s Blog`} 
                    href="/feed.xml" 
                />
            </head>
            <body
                className={`${inter.className} antialiased bg-background text-slate-100`}
            >
                <StarsCanvas />
                <Glow />
                <Toaster />
                {children}
            </body>
            <Analytics />
            <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
            />
        </html>
    );
}
