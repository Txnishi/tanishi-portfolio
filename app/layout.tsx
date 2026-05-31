import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import {
  indie,
  marcellus,
  mansalva,
  caveat_brush,
  homemade_apple,
  the_girl_next_door,
  la_belle_aurore,
} from "./fonts"
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
    <html
      lang="en"
      className={`${indie.variable} ${marcellus.variable} ${mansalva.variable} ${caveat_brush.variable} ${homemade_apple.variable} ${the_girl_next_door.variable} ${la_belle_aurore.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
