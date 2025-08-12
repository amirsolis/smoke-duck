"use client"

import { useState, useEffect } from "react"
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
import { getProductImage } from "@/lib/product-images"

// Reemplazando iconos de lucide-react con SVG inline
const LeafIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.85 9 14 17 12V8z" />
    <path d="M3.34 7.34C8.51 5.26 14.68 3.16 22 2v6c-7.32 1.16-13.49 3.26-18.66 5.34l-.82-1.06z" />
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const vapesProducts = [
  {
    name: "STIIIZY 40s Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
    description: "",
    content: "Cont. 1 pz",
  },
  {
    name: "CAKE OG Classics Hawaiian Guava",
    type: "vape cartridge",
    strain: "hawaiian guava",
    description: "",
    content: "Cont. 0.5g",
  },
  {
    name: "BOUTIQ switch Hawaiian Snow Sour Slush",
    type: "vape cartridge",
    strain: "hawaiian snow",
    content: "Cont. 1g",
  },
  {
    name: "Camino Sours Watermelon Spritz",
    type: "gummies",
    strain: "watermelon",
    content: "Cont. 100mg",
  },
  {
    name: "CAKE Designer Distillate Strawberry Mango",
    type: "vape cartridge",
    strain: "strawberry mango",
    content: "Cont. 0.8g",
  },
  {
    name: "The Cure Company Papaya",
    type: "vape cartridge",
    strain: "papaya",
    content: "Cont. 1g",
  },
  {
    name: "Camino Uplifting Pineapple Habanero",
    type: "gummies",
    strain: "pineapple habanero",
    content: "Cont. 100mg",
  },
  {
    name: "8-BIT BUDS Infused Live Rosin Piña Colada",
    type: "vape cartridge",
    strain: "piña colada",
    content: "Cont. 0.5g",
  },
  {
    name: "Cure Injoy Strawnana",
    type: "vape cartridge",
    strain: "strawnana",
    content: "Cont. 1g",
  },
  {
    name: "Muha Meds Live Resin Sour Diesel",
    type: "vape cartridge",
    strain: "sour diesel",
    content: "Cont. 1g",
  },
  {
    name: "Cali Clear Sour Diesel",
    type: "vape cartridge",
    strain: "sour diesel",
    content: "Cont. 0.8g",
  },
  {
    name: "Crystal Clear Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
    content: "Cont. 1g",
  },
  {
    name: "DAB DADDY Thin Mint Cookies x Jealousy",
    type: "vape cartridge",
    strain: "thin mint cookies",
    content: "Cont. 0.5g",
  },
  {
    name: "Gramlin Sour Apple Pie",
    type: "vape cartridge",
    strain: "sour apple pie",
    content: "Cont. 1g",
  },
  {
    name: "Pretty Dope Strawberry Mimosa",
    type: "vape cartridge",
    strain: "strawberry mimosa",
    content: "Cont. 0.8g",
  },
  {
    name: "Side Hustle Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
    content: "Cont. 1g",
  },
  {
    name: "Gelato Green Crack",
    type: "vape cartridge",
    strain: "green crack",
    content: "Cont. 0.5g",
  },
  {
    name: "Cabo Canabotanica",
    type: "vape cartridge",
    strain: "hybrid",
    content: "Cont. 1g",
  },
  {
    name: "BIG CHIEF Pineapple Express",
    type: "vape cartridge",
    strain: "pineapple express",
    content: "Cont. 1g",
  },
  {
    name: "West Coast Cure Orange Creamsicle",
    type: "vape cartridge",
    strain: "orange creamsicle",
    content: "Cont. 0.8g",
  },
  {
    name: "Kushy Punch Blue Raspberry",
    type: "gummies",
    strain: "blue raspberry",
    content: "Cont. 100mg",
  },
]

const flowersProducts = [
  {
    name: "RUNTZ OG",
    type: "cannabis flower",
    strain: "runtz",
    description: "Una variedad premium con sabores dulces y efectos potentes.",
    effects: ["Eufórico", "Relajado"],
    calmingLevel: 3,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 500 },
      { weight: "14 g", price: 900 },
      { weight: "28 g", price: 1800 },
    ],
  },
  {
    name: "DANTE'S INFERNO",
    type: "cannabis flower",
    strain: "hybrid",
    description: "Intenso y ardiente, perfecto para usuarios experimentados.",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 2,
    thcLevel: 5,
    prices: [
      { weight: "7 g", price: 600 },
      { weight: "14 g", price: 1100 },
      { weight: "28 g", price: 2000 },
    ],
  },
  {
    name: "GENOLADE",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico"],
    calmingLevel: 3,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 450 },
      { weight: "14 g", price: 850 },
      { weight: "28 g", price: 1600 },
    ],
  },
  {
    name: "SIRI",
    type: "cannabis flower",
    strain: "sativa",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 1,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 400 },
      { weight: "14 g", price: 750 },
      { weight: "28 g", price: 1400 },
    ],
  },
  {
    name: "GOLDEN GAS",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 550 },
      { weight: "14 g", price: 1000 },
      { weight: "28 g", price: 1900 },
    ],
  },
  {
    name: "THE SOUP",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Relajado"],
    calmingLevel: 4,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 480 },
      { weight: "14 g", price: 900 },
      { weight: "28 g", price: 1700 },
    ],
  },
  {
    name: "RAINBOW",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico"],
    calmingLevel: 3,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 420 },
      { weight: "14 g", price: 800 },
      { weight: "28 g", price: 1500 },
    ],
  },
  {
    name: "DRIPPIN' AIN'T EASY",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 520 },
      { weight: "14 g", price: 950 },
      { weight: "28 g", price: 1800 },
    ],
  },
  {
    name: "LEMONCHERRY",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Enfocado"],
    calmingLevel: 2,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 460 },
      { weight: "14 g", price: 870 },
      { weight: "28 g", price: 1650 },
    ],
  },
  {
    name: "LAZEL FUEL",
    type: "cannabis flower",
    strain: "sativa",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 1,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 580 },
      { weight: "14 g", price: 1050 },
      { weight: "28 g", price: 2000 },
    ],
  },
  {
    name: "POP TARTZ",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico"],
    calmingLevel: 3,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 440 },
      { weight: "14 g", price: 820 },
      { weight: "28 g", price: 1550 },
    ],
  },
  {
    name: "ALL GAS",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 5,
    prices: [
      { weight: "7 g", price: 650 },
      { weight: "14 g", price: 1200 },
      { weight: "28 g", price: 2200 },
    ],
  },
  {
    name: "F. BERRIES",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Relajado"],
    calmingLevel: 4,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 470 },
      { weight: "14 g", price: 880 },
      { weight: "28 g", price: 1680 },
    ],
  },
  {
    name: "HEAD HUNTER",
    type: "cannabis flower",
    strain: "sativa",
    effects: ["Enfocado", "Energizante"],
    calmingLevel: 1,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 560 },
      { weight: "14 g", price: 1020 },
      { weight: "28 g", price: 1950 },
    ],
  },
  {
    name: "PERMANENT OCTANE",
    type: "cannabis flower",
    strain: "indica",
    effects: ["Relajado"],
    calmingLevel: 5,
    thcLevel: 5,
    prices: [
      { weight: "7 g", price: 620 },
      { weight: "14 g", price: 1150 },
      { weight: "28 g", price: 2100 },
    ],
  },
  {
    name: "VICE CITY",
    type: "cannabis flower",
    strain: "hybrid",
    effects: ["Eufórico", "Enfocado"],
    calmingLevel: 2,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 540 },
      { weight: "14 g", price: 980 },
      { weight: "28 g", price: 1850 },
    ],
  },
]

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

const ProductImage = ({
  productName,
  category,
  alt,
}: { productName: string; category: "vapes" | "flowers"; alt: string }) => {
  const [imageSrc, setImageSrc] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const src = await getProductImage(productName, category)
        setImageSrc(src)
      } catch (error) {
        console.error(`Error obteniendo imagen para ${productName}:`, error)
        const fallback = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(`cannabis ${category} ${productName}`)}`
        setImageSrc(fallback)
      } finally {
        setIsLoading(false)
      }
    }

    loadImage()
  }, [productName, category])

  if (isLoading) {
    return (
      <div className="w-full h-40 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Cargando...</span>
      </div>
    )
  }

  return (
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      onError={(e) => {
        console.error(`❌ Error cargando imagen final para ${productName}:`, {
          src: (e.target as HTMLImageElement).src,
          error: e.type,
        })
        const target = e.target as HTMLImageElement
        target.src = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(`cannabis ${category} ${productName}`)}`
      }}
      onLoad={() => console.log(`✅ Imagen cargada exitosamente para: ${productName}`)}
    />
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
              <LeafIcon className="h-8 w-8 text-green-600" />
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
                    Productos <ChevronDownIcon className="ml-1 h-4 w-4" />
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
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
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
                  <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                    <ProductImage productName={product.name} category="vapes" alt={product.name} />
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
                    <span className="text-2xl font-bold text-green-600">$1,400</span>
                    {product.content && (
                      <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                        {product.content}
                      </span>
                    )}
                  </div>
                  <Button
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
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
                    <ProductImage productName={product.name} category="flowers" alt={product.name} />
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

                  <div className="space-y-2 mt-auto mb-3">
                    {product.prices.map((priceOption, priceIndex) => (
                      <div
                        key={priceIndex}
                        className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                      >
                        <span className="text-sm font-medium text-gray-700">{priceOption.weight}</span>
                        <span className="text-lg font-bold text-purple-600">${priceOption.price}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
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
            <LeafIcon className="h-8 w-8" />
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
