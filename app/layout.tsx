import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alex Johnson | Modern Developer & Designer Portfolio",
  description:
    "A modern, interactive portfolio showcasing cutting-edge web development and design skills with 3D animations and premium aesthetics.",
  generator: "v0.app",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "web development",
    "3D",
    "interactive",
    "Next.js",
    "React",
    "Three.js",
  ],
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson | Modern Developer & Designer Portfolio",
    description: "A modern, interactive portfolio showcasing cutting-edge web development and design skills.",
    type: "website",
    siteName: "Alex Johnson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson | Modern Developer & Designer Portfolio",
    description: "A modern, interactive portfolio showcasing cutting-edge web development and design skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Suspense
            fallback={
              <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-accent">Loading...</div>
              </div>
            }
          >
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
