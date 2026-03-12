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
  title: "Smoke Duck - Catálogo Dispensario en Línea",
  description:
    "Conoce aquí nuestro catálogo de dispensario en línea de productos de vapes, flowers, prerolados, gomitas, accesorios y más. Haz tu pedido hoy. Envío a domicilio.",
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
