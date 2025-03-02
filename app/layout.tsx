import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Permanent_Marker } from "next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-permanent-marker",
})

export const metadata: Metadata = {
  title: "Hostel Cliff - Tu refugio surfer en Chapadmalal",
  description:
    "Descubre Hostel Cliff, tu hogar lejos de casa en Chapadmalal. Disfruta de una experiencia única con ambiente surfer y playa cercana.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${poppins.variable} ${permanentMarker.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}



import './globals.css'