"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
    content: "Cont. 1 g",
  },
  {
    name: "BOUTIQ Switch Hawaiian Snow Sour Slush",
    type: "vape cartridge",
    strain: "hawaiian snow",
    content: "Cont. 1 g",
  },
  {
    name: "CAKE Designer Distillate Strawberry Mango",
    type: "vape cartridge",
    strain: "strawberry mango",
    content: "Cont. 1.25 g",
  },
  {
    name: "The Cure Company Papaya",
    type: "vape cartridge",
    strain: "papaya",
    content: "Cont. 1 g",
  },
  {
    name: "8-BIT BUDS Infused Live Rosin Piña Colada",
    type: "vape cartridge",
    strain: "piña colada",
    content: "Cont. 1 g",
  },
  {
    name: "Cure Injoy Strawnana",
    type: "vape cartridge",
    strain: "strawnana",
    content: "Cont. 1 g",
  },
  {
    name: "Muha Meds Live Resin Sour Diesel",
    type: "vape cartridge",
    strain: "sour diesel",
    content: "Cont. 1 g",
  },
  {
    name: "Cali Clear Sour Diesel",
    type: "vape cartridge",
    strain: "sour diesel",
    content: "Cont. 1 g",
  },
  {
    name: "Crystal Clear Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
    content: "Cont. 1 g",
  },
  {
    name: "DAB DADDY Thin Mint Cookies x Jealousy",
    type: "vape cartridge",
    strain: "thin mint cookies",
    content: "Cont. 1 g",
  },
  {
    name: "Gramlin Sour Apple Pie",
    type: "vape cartridge",
    strain: "sour apple pie",
    content: "Cont. 1 g",
  },
  {
    name: "Pretty Dope Strawberry Mimosa",
    type: "vape cartridge",
    strain: "strawberry mimosa",
    content: "Cont. 1 g",
  },
  {
    name: "Side Hustle Blue Dream",
    type: "vape cartridge",
    strain: "blue dream",
    content: "Cont. 1 g",
  },
  {
    name: "Gelato Green Crack",
    type: "vape cartridge",
    strain: "green crack",
    content: "Cont. 1 g",
  },
  {
    name: "Cabo Canabotanica",
    type: "vape cartridge",
    strain: "hybrid",
    content: "Cont. 1 g",
  },
  {
    name: "BIG CHIEF Pineapple Express",
    type: "vape cartridge",
    strain: "pineapple express",
    content: "Cont. 1 g",
  },
  {
    name: "West Coast Cure Orange Creamsicle",
    type: "vape cartridge",
    strain: "orange creamsicle",
    content: "Cont. 1 g",
  },
  {
    name: "Kushy Punch Blue Raspberry",
    type: "gummies",
    strain: "blue raspberry",
    content: "Cont. 1 g",
  },
  {
    name: "Eureka AIO Tropical Twist",
    type: "gummies",
    strain: "Tropical Twist",
    content: "Cont. 1 g",
  },
]

const flowersProducts = [
  {
    name: "Blue Runtz",
    type: "cannabis flower",
    strain: "Híbrido",
    description: "",
    effects: ["Relajado", "Hormigueo", "Eufórico"],
    calmingLevel: 2.5,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 1300 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3300 },
    ],
  },
  {
    name: "Gak Bx1",
    type: "cannabis flower",
    strain: "Híbrido",
    description: "",
    effects: ["Energético", "Charlatán", "Feliz"],
    calmingLevel: 3.5,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 1300 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3300 },
    ],
  },
  {
    name: "Golden Goat",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Energético", "Enfocado", "Elevado"],
    calmingLevel: 4.5,
    thcLevel: 3.5,
    prices: [
      { weight: "7 g", price: 750 },
      { weight: "14 g", price: 1300 },
      { weight: "28 g", price: 2500 },
    ],
  },
  {
    name: "Guava",
    type: "cannabis flower",
    strain: "Sativa",
    effects: ["Charlatán", "Enfocado", "Energético"],
    calmingLevel: 4,
    thcLevel: 3.5,
    prices: [
      { weight: "7 g", price: 700 },
      { weight: "14 g", price: 1100 },
      { weight: "28 g", price: 2000 },
    ],
  },
  {
    name: "Lantz",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Enfocado", "Eufórico", "Relajado"],
    calmingLevel: 2.5,
    thcLevel: 4.5,
    prices: [
      { weight: "7 g", price: 700 },
      { weight: "14 g", price: 1100 },
      { weight: "28 g", price: 2000 },
    ],
  },
  {
    name: "Mt. Hood Magic",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Eufórico", "Elevado", "Creativo"],
    calmingLevel: 4,
    thcLevel: 3.75,
    prices: [
      { weight: "7 g", price: 750 },
      { weight: "14 g", price: 1300 },
      { weight: "28 g", price: 2500 },
    ],
  },
  {
    name: "Mixed Berry",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Excitado", "Creativo", "Hambriento"],
    calmingLevel: 2.5,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 1300 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3300 },
    ],
  },
  {
    name: "OG Diesel Kush",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Charlatán", "Feliz", "Creativo"],
    calmingLevel: 3.5,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 1500 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3600 },
    ],
  },
  {
    name: "Skittlez Mintz",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Risueño", "Charlatán", "Hambriento"],
    calmingLevel: 3.5,
    thcLevel: 5,
    prices: [
      { weight: "7 g", price: 1300 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3300 },
    ],
  },
  {
    name: "Agent Orange",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Enfocado", "Elevado", "Feliz"],
    calmingLevel: 4.5,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 1300 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3300 },
    ],
  },
  {
    name: "Red Bullz",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Excitado", "Energético", "Enfocado"],
    calmingLevel: 4.5,
    thcLevel: 3,
    prices: [
      { weight: "7 g", price: 1500 },
      { weight: "14 g", price: 1800 },
      { weight: "28 g", price: 3600 },
    ],
  },
  {
    name: "White Runtz",
    type: "cannabis flower",
    strain: "Híbrido",
    effects: ["Relajado", "Hormigueo", "Eufórico"],
    calmingLevel: 2.5,
    thcLevel: 3.5,
    prices: [
      { weight: "7 g", price: 1000 },
      { weight: "14 g", price: 1650 },
      { weight: "28 g", price: 3000 },
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
    Energético: "⚡",
    Charlatán: "💬",
    Feliz: "😊",
    Hormigueo: "🌟",
    Elevado: "🚀",
    Creativo: "🎨",
    Excitado: "🔥",
    Hambriento: "🍽️",
    Risueño: "😄",
  }

  return (
    <div className="mb-3">
      <h4 className="text-sm font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">Efectos principales</h4>
      <div className="space-y-1">
        {effects.map((effect, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <span className="mr-2">{effectIcons[effect as keyof typeof effectIcons] || "🌿"}</span>
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

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

const getDailyPromo = () => {
  const today = new Date()
  const dayOfMonth = today.getDate()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Días específicos del mes (7, 14, 21, 28)
  if ([7, 14, 21, 28].includes(dayOfMonth)) {
    return {
      title: "Promo del Día",
      text: "7g por $500 en las flores Green House (Lantz, Mt. Hood Magic, Guava y Golden Goat) y 7g por $777 en cualquier flor Indoor (todas las demás del catálogo) - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white",
    }
  }

  // Martes (día 2)
  if (dayOfWeek === 2) {
    return {
      title: "Promo del Día - Martes",
      text: "Los prerolados STIIIZY y Sluggers en $1150 - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white",
    }
  }

  // Jueves (día 4)
  if (dayOfWeek === 4) {
    return {
      title: "Promo del Día - Jueves",
      text: "Todos los vapes en $1150 - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white",
    }
  }

  return null
}

export default function DispensarioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dailyPromo = getDailyPromo()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-green-50">
      {dailyPromo && (
        <div className={`${dailyPromo.bgColor} ${dailyPromo.textColor} py-3 px-4 text-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 container mx-auto">
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <span className="font-bold text-sm md:text-base">{dailyPromo.title}:</span>
              <span className="text-sm md:text-base">{dailyPromo.text}</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="top-0 z-50 bg-white backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/smoke-duck-logo.png"
                alt="Smoke Duck Logo"
                className="h-17 w-17 rounded-full object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("vapes")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
              >
                VAPES
              </button>
              <button
                onClick={() => scrollToSection("flowers")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
              >
                FLOWERS
              </button>
              <button
                onClick={() => scrollToSection("promos")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
              >
                PROMOS
              </button>
            </nav>

            {/* Mobile Navigation */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
            >
              <ChevronDownIcon className="w-6 h-6" />
            </button>
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-green-200 pt-4">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("vapes")}
                    className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
                  >
                    VAPES
                  </button>
                  <button
                    onClick={() => scrollToSection("flowers")}
                    className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
                  >
                    FLOWERS
                  </button>
                  <button
                    onClick={() => scrollToSection("promos")}
                    className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
                  >
                    PROMOS
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="px-4 relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/images/smoke-duck-hero-bg.jpg')",
        }}
      >
        <div className="container mx-auto text-center relative z-10 h-full flex items-end justify-center min-h-screen pb-20 font-bold text-black">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("vapes")}
                className="bg-black text-white px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full hover:bg-white hover:text-black font-header"
              >
                VER VAPES
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("flowers")}
                className="bg-black text-white px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full hover:bg-white hover:text-black font-header"
              >
                VER FLOWERS
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
              VAPES
            </h3>
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
                  <h3 className="font-card text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                    {product.name}
                  </h3>
                  {product.strain && (
                    <div className="font-card w-fit bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded-full font-semibold transition-all duration-300 cursor-default text-sm mb-0">
                      {toTitleCase(product.strain)}
                    </div>
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
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
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
      <section id="flowers" className="py-16 px-4 bg-white/100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              FLOWERS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flowersProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-gray-100"
              >
                <CardHeader className="p-4">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <ProductImage productName={product.name} category="flowers" alt={product.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-card text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                    {product.name}
                  </h3>
                  {product.strain && (
                    <div className="font-card w-fit bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded-full font-semibold transition-all duration-300 cursor-default text-sm mb-2">
                      {toTitleCase(product.strain)}
                    </div>
                  )}
                  {product.description && (
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
                  )}
                  {product.effects && renderEffects(product.effects)}
                  {product.calmingLevel && renderLevelBar(product.calmingLevel, "Calmante", "Energizante")}
                  {product.thcLevel &&
                    product.name !== "Gak Bx1" &&
                    product.name !== "Red Bullz" &&
                    renderLevelBar(product.thcLevel, "Bajo contenido de THC", "Alto contenido de THC")}
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2 mb-4">
                    {product.prices?.map((priceOption, priceIndex) => (
                      <div key={priceIndex} className="flex justify-between items-center bg-green-50 rounded-lg p-2">
                        <span className="text-sm font-medium text-gray-700">{priceOption.weight}</span>
                        <span className="text-lg font-bold text-green-600">${priceOption.price}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => openWhatsApp(product.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
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

      {/* Promos Section */}
      <section id="promos" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700">PROMOS</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">¡Aprovecha nuestras promociones especiales!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Promo Mensual */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-700 text-white border-0">
              <CardHeader className="p-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Promoción Mensual</h3>
                  <p className="text-green-100 text-sm font-bold">Días 7, 14, 21 y 28 de cada mes</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2 text-white">🏠 Green House</h4>        
                    <p className="text-sm text-green-200 mt-1 font-semibold">
                    Lantz, Mt. Hood Magic, Guava y Golden Goat
                    </p>
                    <p className="text-2xl font-bold text-white">7g por $500</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2 text-white">🏢 Indoor</h4>
                    <p className="text-sm text-green-200 mt-1 font-semibold">Todas las demás flores del catálogo</p>
                    <p className="text-2xl font-bold text-white">7g por $777</p>
                  </div>
                </div>
               
              </CardContent>
            </Card>

            {/* Promo Martes */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-700 text-white border-0">
              <CardHeader className="p-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚬</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Martes de Prerolados</h3>
                  <p className="text-green-100 text-sm font-bold">Todos los martes</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="font-bold mb-2 text-white">💨 Prerolados Premium</h4>
                  <p className="text-sm text-green-100 font-semibold">STIIIZY y Sluggers</p>
                  <p className="text-2xl font-bold text-white mt-2">$1,150</p>
                </div>
          
              </CardContent>
            </Card>

            {/* Promo Jueves */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-700 text-white border-0">
              <CardHeader className="p-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Jueves de Vapes</h3>
                  <p className="text-green-100 text-sm font-bold">Todos los jueves</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="font-bold mb-2 text-white">🔥 Todos los Vapes</h4>
                  <p className="text-sm text-green-100 font-semibold">Cualquier vape del catálogo</p>
                  <p className="text-2xl font-bold text-white mt-2">$1,150</p>
                </div>
             
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-2">📱 ¿Cómo aplicar las promociones?</h4>
              <p className="text-gray-600">
                Da clic en el vape o flower que te interese para que nos contactes por 
                WhatsApp para confirmar tu pedido, coméntanos que estás interesado en la promo para aplicar el descuento correspondiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-75 text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <img
                src="/images/smoke-duck-logo.png"
                alt="Smoke Duck Logo"
                className="h-20 w-20 rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-gray-800">SMOKE DUCK</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <button
              onClick={() => scrollToSection("vapes")}
              className="bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              VAPES
            </button>
            <button
              onClick={() => scrollToSection("flowers")}
              className="bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              FLOWERS
            </button>
            <button
              onClick={() => scrollToSection("promos")}
              className="bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              PROMOS
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">© 2025 Smoke Duck. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
