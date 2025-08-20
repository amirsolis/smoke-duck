import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Smoke Duck - Catálogo Vapes y Flowers",
  description:
    "Conoce aquí nuestro catálogo de productos de Vapes y Flowers. Haz tu pedido hoy. Contamos con envío a domicilio. Productos de cannabis legales, seguros y de la más alta calidad.",
  generator: "v0.dev",
  // Se agrega la configuración del favicon aquí
  icons: {
    icon: "/images/smoke-duck-logo-favicon.png",
  },
   openGraph: {
    images: "/images/smoke-duck-hero-bg.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
