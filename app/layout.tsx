import type React from "react"
import type { Metadata } from "next"
import { Special_Gothic_Expanded_One } from "next/font/google"
import "./globals.css"

const specialGothicExpanded = Special_Gothic_Expanded_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-gothic-expanded",
})

export const metadata: Metadata = {
  title: "Dispensario Premium - Catálogo",
  description: "Catálogo premium de productos de cannabis de la más alta calidad",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={specialGothicExpanded.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
