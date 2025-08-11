"use client"

import { useState } from "react"
import { Leaf, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductImage, getDefaultImage } from "@/lib/product-images"

const openWhatsApp = (productName: string) => {
  const phoneNumber = "5215583728319"
  const message = `Hola! Me interesa el producto: ${productName}. ¿Podrías darme más información?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

const vapesProducts = [
  { name: "STIIIZY 40s Blue Dream", type: "vape cartridge", strain: "blue dream" },
  { name: "CAKE OG Classics Hawaiian Guava", type: "vape cartridge", strain: "hawaiian guava" },
  { name: "BOUTIQ switch Hawaiian Snow Sour Slush", type: "vape cartridge", strain: "hawaiian snow" },
  { name: "Camino Sours Watermelon Spritz", type: "gummies", strain: "watermelon" },
  { name: "CAKE Designer Distillate Strawberry Mango", type: "vape cartridge", strain: "strawberry mango" },
  { name: "The Cure Company Papaya", type: "vape cartridge", strain: "papaya" },
  { name: "Camino Uplifting Pineapple Habanero", type: "gummies", strain: "pineapple" },
  { name: "8-BIT BUDS Infused Live Rosin Piña Colada", type: "vape cartridge", strain: "pina colada" },
  { name: "Cure Injoy Strawnana", type: "vape cartridge", strain: "strawnana" },
  { name: "Muha Meds Live Resin Sour Diesel", type: "vape cartridge", strain: "sour diesel" },
  { name: "Cali Clear Sour Diesel", type: "vape cartridge", strain: "sour diesel" },
  { name: "Crystal Clear Blue Dream", type: "vape cartridge", strain: "blue dream" },
  { name: "DAB DADDY Thin Mint Cookies x Jealousy", type: "vape cartridge", strain: "thin mint cookies" },
  { name: "Gramlin Sour Apple Pie", type: "vape cartridge", strain: "sour apple" },
  { name: "Pretty Dope Strawberry Mimosa", type: "vape cartridge", strain: "strawberry mimosa" },
  { name: "Side Hustle Blue Dream", type: "vape cartridge", strain: "blue dream" },
  { name: "Gelato Green Crack", type: "vape cartridge", strain: "green crack" },
  { name: "Cabo Canabotanica", type: "vape cartridge", strain: "hybrid" },
  { name: "BIG CHIEF Pineapple Express", type: "vape cartridge", strain: "pineapple express" },
  { name: "West Coast Cure Orange Creamsicle", type: "vape cartridge", strain: "orange creamsicle" },
  { name: "Kushy Punch Blue Raspberry", type: "gummies", strain: "blue raspberry" },
]

const flowersProducts = [
  { name: "RUNTZ OG", type: "cannabis flower", strain: "runtz" },
  { name: "DANTE'S INFERNO", type: "cannabis flower", strain: "fire strain" },
  { name: "GENOLADE", type: "cannabis flower", strain: "lemonade genetics" },
  { name: "SIRI", type: "cannabis flower", strain: "premium indica" },
  { name: "GOLDEN GAS", type: "cannabis flower", strain: "golden buds" },
  { name: "THE SOUP", type: "cannabis flower", strain: "mixed strain" },
  { name: "RAINBOW", type: "cannabis flower", strain: "colorful buds" },
  { name: "DRIPPIN' AIN'T EASY", type: "cannabis flower", strain: "sticky buds" },
  { name: "LEMONCHERRY", type: "cannabis flower", strain: "lemon cherry" },
  { name: "LAZEL FUEL", type: "cannabis flower", strain: "fuel genetics" },
  { name: "POP TARTZ", type: "cannabis flower", strain: "sweet strain" },
  { name: "ALL GAS", type: "cannabis flower", strain: "gas strain" },
  { name: "F. BERRIES", type: "cannabis flower", strain: "berry strain" },
  { name: "HEAD HUNTER", type: "cannabis flower", strain: "potent sativa" },
  { name: "PERMANENT OCTANE", type: "cannabis flower", strain: "octane genetics" },
  { name: "VICE CITY", type: "cannabis flower", strain: "city genetics" },
]

// Remover la función getProductImage anterior y usar la importada

export default function DispensarioPage() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Dispensario Premium
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Button
                variant={activeSection === "inicio" ? "default" : "ghost"}
                onClick={() => scrollToSection("inicio")}
                className="text-green-700 hover:text-green-800"
              >
                Inicio
              </Button>
              <Button
                variant={activeSection === "vapes" ? "default" : "ghost"}
                onClick={() => scrollToSection("vapes")}
                className="text-green-700 hover:text-green-800"
              >
                Vapes
              </Button>
              <Button
                variant={activeSection === "flowers" ? "default" : "ghost"}
                onClick={() => scrollToSection("flowers")}
                className="text-green-700 hover:text-green-800"
              >
                Flowers
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-green-200 pt-4">
              <div className="flex flex-col space-y-2">
                <Button
                  variant={activeSection === "inicio" ? "default" : "ghost"}
                  onClick={() => scrollToSection("inicio")}
                  className="justify-start"
                >
                  Inicio
                </Button>
                <Button
                  variant={activeSection === "vapes" ? "default" : "ghost"}
                  onClick={() => scrollToSection("vapes")}
                  className="justify-start"
                >
                  Vapes
                </Button>
                <Button
                  variant={activeSection === "flowers" ? "default" : "ghost"}
                  onClick={() => scrollToSection("flowers")}
                  className="justify-start"
                >
                  Flowers
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Catálogo Premium
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Descubre nuestra selección exclusiva de productos de la más alta calidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("vapes")}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg"
              >
                Ver Vapes
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("flowers")}
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
              >
                Ver Flowers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vapes Section */}
      <section id="vapes" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">Menú Vapes</h3>
            <p className="text-xl text-gray-600">Cartuchos y concentrados premium</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vapesProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-green-200 overflow-hidden group"
              >
                <CardHeader className="pb-3">
                  <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-purple-50 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={getProductImage(product.name, "vapes") || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = getDefaultImage("vapes")
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-green-600">$1,400</span>
                      <span className="text-sm text-gray-500">c/u</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => openWhatsApp(product.name)}
                      className="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contáctanos
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Vape
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.strain}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flowers Section */}
      <section id="flowers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">Menú Flowers</h3>
            <p className="text-xl text-gray-600">Flores premium de la más alta calidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowersProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-purple-200 overflow-hidden group"
              >
                <CardHeader className="pb-3">
                  <div className="relative w-full h-64 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={getProductImage(product.name, "flowers") || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = getDefaultImage("flowers")
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-purple-700 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-purple-600">$1,400</span>
                      <span className="text-sm text-gray-500">c/u</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => openWhatsApp(product.name)}
                      className="bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contáctanos
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Flower
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.strain}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-xl font-bold">Dispensario Premium</h4>
          </div>
          <p className="text-gray-400 mb-6">Productos de cannabis de la más alta calidad para usuarios responsables</p>
          <Button
            onClick={() => scrollToSection("inicio")}
            variant="outline"
            className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
          >
            Regresar al Inicio
          </Button>
        </div>
      </footer>
    </div>
  )
}
