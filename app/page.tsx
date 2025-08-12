"use client"

import { useState } from "react"
import { Leaf, MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const vapesProducts = [
  {
    name: "STIIIZY 40s Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
    description: "Una experiencia relajante y eufórica perfecta para cualquier momento del día.",
  },
  {
    name: "CAKE OG Classics Hawaiian Guava",
    type: "vape cartridge",
    strain: "hawaiian guava",
    description: "Sabor tropical intenso con efectos equilibrados.",
  },
  {
    name: "BOUTIQ switch Hawaiian Snow Sour Slush",
    type: "vape cartridge",
    strain: "hawaiian snow",
  },
  {
    name: "Camino Sours Watermelon Spritz",
    type: "gummies",
    strain: "watermelon",
  },
  {
    name: "CAKE Designer Distillate Strawberry Mango",
    type: "vape cartridge",
    strain: "strawberry mango",
  },
  {
    name: "The Cure Company Papaya",
    type: "vape cartridge",
    strain: "papaya",
  },
  {
    name: "Camino Uplifting Pineapple Habanero",
    type: "gummies",
    strain: "pineapple habanero",
  },
  {
    name: "8-BIT BUDS Infused Live Rosin Piña Colada",
    type: "vape cartridge",
    strain: "piña colada",
  },
  {
    name: "Cure Injoy Strawnana",
    type: "vape cartridge",
    strain: "strawnana",
  },
  {
    name: "Muha Meds Live Resin Sour Diesel",
    type: "vape cartridge",
    strain: "sour diesel",
  },
  {
    name: "Cali Clear Sour Diesel",
    type: "vape cartridge",
    strain: "sour diesel",
  },
  {
    name: "Crystal Clear Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
  },
  {
    name: "DAB DADDY Thin Mint Cookies x Jealousy",
    type: "vape cartridge",
    strain: "thin mint cookies",
  },
  {
    name: "Gramlin Sour Apple Pie",
    type: "vape cartridge",
    strain: "sour apple pie",
  },
  {
    name: "Pretty Dope Strawberry Mimosa",
    type: "vape cartridge",
    strain: "strawberry mimosa",
  },
  {
    name: "Side Hustle Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
  },
  {
    name: "Gelato Green Crack",
    type: "vape cartridge",
    strain: "green crack",
  },
  {
    name: "Cabo Canabotanica",
    type: "vape cartridge",
    strain: "hybrid",
  },
  {
    name: "BIG CHIEF Pineapple Express",
    type: "vape cartridge",
    strain: "pineapple express",
  },
  {
    name: "West Coast Cure Orange Creamsicle",
    type: "vape cartridge",
    strain: "orange creamsicle",
  },
  {
    name: "Kushy Punch Blue Raspberry",
    type: "gummies",
    strain: "blue raspberry",
  },
]

const flowersProducts = [
  {
    name: "RUNTZ OG",
    type: "cannabis flower",
    strain: "runtz",
    description: "Una variedad premium con sabores dulces y efectos potentes.",
    effects: ["Eufórico", "Relajado"],
    calmingLevel: 3, // 1-5 scale (1=energizante, 5=calmante)
    thcLevel: 4, // 1-5 scale (1=bajo THC, 5=alto THC)
  },
  {
    name: "DANTE'S INFERNO",
    type: "cannabis flower",
    strain: "hybrid",
    description: "Intenso y ardiente, perfecto para usuarios experimentados.",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 2,
    thcLevel: 5,
  },
  {
    name: "GENOLADE",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico"],
    calmingLevel: 3,
    thcLevel: 3,
  },
  {
    name: "SIRI",
    type: "cannabis flower",
    strain: "sativa",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 1,
    thcLevel: 3,
  },
  {
    name: "GOLDEN GAS",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 4,
  },
  {
    name: "THE SOUP",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Relajado"],
    calmingLevel: 4,
    thcLevel: 3,
  },
  {
    name: "RAINBOW",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico"],
    calmingLevel: 3,
    thcLevel: 3,
  },
  {
    name: "DRIPPIN' AIN'T EASY",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 4,
  },
  {
    name: "LEMONCHERRY",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Enfocado"],
    calmingLevel: 2,
    thcLevel: 3,
  },
  {
    name: "LAZEL FUEL",
    type: "cannabis flower",
    strain: "sativa",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 1,
    thcLevel: 4,
  },
  {
    name: "POP TARTZ",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico"],
    calmingLevel: 3,
    thcLevel: 3,
  },
  {
    name: "ALL GAS",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 5,
  },
  {
    name: "F. BERRIES",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Relajado"],
    calmingLevel: 4,
    thcLevel: 3,
  },
  {
    name: "HEAD HUNTER",
    type: "cannabis flower",
    strain: "sativa",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 1,
    thcLevel: 4,
  },
  {
    name: "PERMANENT OCTANE",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 5,
  },
  {
    name: "VICE CITY",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Enfocado"],
    calmingLevel: 2,
    thcLevel: 4,
  },
]

const getProductImage = (product: any) => {
  const productName = product.name.toLowerCase().replace(/[^a-z0-9]/g, "-")
  const category = vapesProducts.includes(product) ? "vapes" : "flowers"
  return `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(`${category} ${product.strain} ${product.type}`)}`
}

const openWhatsApp = (productName: string) => {
  const phoneNumber = "5215583728319"
  const message = `Hola! Me interesa el producto: ${productName}. ¿Podrías darme más información?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

const renderLevelBar = (level: number, leftLabel: string, rightLabel: string) => {
  const percentage = (level - 1) * 25 // Convert 1-5 scale to 0-100%
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-gray-800 h-2 rounded-full transition-all duration-300" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

const renderEffects = (effects: string[]) => {
  const effectIcons = {
    Enfocado: "🎯",
    Eufórico: "✨",
    Relajado: "🧘",
  }

  return (
    <div className="mb-3">
      <h4 className="text-sm font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">Efectos principales</h4>
      <div className="space-y-1">
        {effects.map((effect, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <span className="mr-2">{effectIcons[effect as keyof typeof effectIcons]}</span>
            <span>{effect}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DispensarioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Dispensario Premium
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Inicio
              </button>

              {/* Dropdown Menu for Products */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                    Productos <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Vapes</DropdownMenuLabel>
                  {vapesProducts.slice(0, 5).map((product) => (
                    <DropdownMenuItem
                      key={product.name}
                      onClick={() => scrollToSection("vapes")}
                      className="cursor-pointer"
                    >
                      {product.name}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Flowers</DropdownMenuLabel>
                  {flowersProducts.slice(0, 5).map((product) => (
                    <DropdownMenuItem
                      key={product.name}
                      onClick={() => scrollToSection("flowers")}
                      className="cursor-pointer"
                    >
                      {product.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection("vapes")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Vapes
              </button>
              <button
                onClick={() => scrollToSection("flowers")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Flowers
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-green-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("vapes")}
                  className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Vapes
                </button>
                <button
                  onClick={() => scrollToSection("flowers")}
                  className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Flowers
                </button>
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
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Vapes
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("flowers")}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Flowers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vapes Section */}
      <section id="vapes" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Vapes Premium
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cartuchos y productos vaporizables de las mejores marcas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vapesProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm flex flex-col"
              >
                <CardHeader className="p-4 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg mb-3 h-40">
                    <img
                      src={getProductImage(product) || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </CardTitle>
                  {product.description && (
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
                  )}
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      {product.strain}
                    </Badge>
                    <span className="text-2xl font-bold text-green-600">$1,400</span>
                  </div>
                  <Button
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contáctanos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flowers Section */}
      <section id="flowers" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Flowers Premium
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flores de cannabis de la más alta calidad y potencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flowersProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-purple-200"
              >
                <CardHeader className="p-4">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={`/placeholder.svg?height=200&width=200&query=${encodeURIComponent(`${product.type} ${product.strain} cannabis flower`)}`}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-purple-700 transition-colors">
                    {product.name}
                  </CardTitle>
                  {product.description && (
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
                  )}
                </CardHeader>
                <CardContent className="p-4 pt-0 flex flex-col">
                  <Badge variant="secondary" className="w-fit mb-3 bg-purple-100 text-purple-800 hover:bg-purple-200">
                    {product.strain}
                  </Badge>

                  {product.effects && renderEffects(product.effects)}

                  {product.calmingLevel && renderLevelBar(product.calmingLevel, "energizante", "calmante")}

                  {product.thcLevel &&
                    renderLevelBar(product.thcLevel, "bajo contenido de THC", "alto contenido de THC")}

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-purple-600">$1,400</span>
                    <span className="text-sm text-gray-500">c/u</span>
                  </div>
                  <Button
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contáctanos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Leaf className="h-8 w-8" />
            <span className="text-2xl font-bold">Dispensario Premium</span>
          </div>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Tu destino confiable para productos de cannabis de la más alta calidad. Experiencia premium garantizada.
          </p>
          <Button
            onClick={() => scrollToSection("inicio")}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800 transition-all duration-300"
          >
            Regresar al Inicio
          </Button>
        </div>
      </footer>
    </div>
  )
}
