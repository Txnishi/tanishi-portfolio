import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { indie, marcellus } from "./fonts"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tanishi Devlal - Portfolio",
  description:
    "this is my portfolio website built with Next.js 13 and Tailwind CSS",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${indie.variable} ${marcellus.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
