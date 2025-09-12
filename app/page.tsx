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

const vapesProducts = [
  {
    name: "STIIIZY 40s Blue Dream",
    type: ["vape", "stiiizy"],
    strain: "blue dream",
    description: "",
    content: "Cont. 1 pz",
  },
  {
    name: "CAKE OG Classics Hawaiian Guava",
    type: "vape",
    strain: "hawaiian guava",
    description: "",
    content: "Cont. 1 g",
  },
  {
    name: "BOUTIQ Switch Hawaiian Snow Sour Slush",
    type: "vape",
    strain: "hawaiian snow",
    content: "Cont. 1 g",
  },
  {
    name: "CAKE Designer Distillate Strawberry Mango",
    type: "vape",
    strain: "strawberry mango",
    content: "Cont. 1.25 g",
  },
  {
    name: "The Cure Company Papaya",
    type: "vape",
    strain: "papaya",
    content: "Cont. 1 g",
  },
  {
    name: "8-BIT BUDS Infused Live Rosin Piña Colada",
    type: "vape",
    strain: "piña colada",
    content: "Cont. 1 g",
  },
  {
    name: "Cure Injoy Strawnana",
    type: "vape",
    strain: "strawnana",
    content: "Cont. 1 g",
  },
  {
    name: "Muha Meds Live Resin Sour Diesel",
    type: "vape",
    strain: "sour diesel",
    content: "Cont. 1 g",
  },
  {
    name: "Cali Clear Sour Diesel",
    type: "vape",
    strain: "sour diesel",
    content: "Cont. 1 g",
  },
  {
    name: "Crystal Clear Blue Dream",
    type: "vape",
    strain: "blue dream",
    content: "Cont. 1 g",
  },
  {
    name: "DAB DADDY Thin Mint Cookies x Jealousy",
    type: "vape",
    strain: "thin mint cookies",
    content: "Cont. 1 g",
  },
  {
    name: "Gramlin Sour Apple Pie",
    type: "vape",
    strain: "sour apple pie",
    content: "Cont. 1 g",
  },
  {
    name: "Pretty Dope Strawberry Mimosa",
    type: "vape",
    strain: "strawberry mimosa",
    content: "Cont. 1 g",
  },
  {
    name: "Side Hustle Blue Dream",
    type: "vape",
    strain: "blue dream",
    content: "Cont. 1 g",
  },
  {
    name: "Gelato Green Crack",
    type: "vape",
    strain: "green crack",
    content: "Cont. 1 g",
  },
  {
    name: "Cabo Canabotanica",
    type: "vape",
    strain: "hybrid",
    content: "Cont. 1 g",
  },
  {
    name: "BIG CHIEF Pineapple Express",
    type: "vape",
    strain: "pineapple express",
    content: "Cont. 1 g",
  },
  {
    name: "West Coast Cure Orange Creamsicle",
    type: "vape",
    strain: "orange creamsicle",
    content: "Cont. 1 g",
  },
  {
    name: "Kushy Punch Blue Raspberry",
    type: "vape",
    strain: "blue raspberry",
    content: "Cont. 1 g",
  },
  {
    name: "Eureka AIO Tropical Twist",
    type: "vape",
    strain: "Tropical Twist",
    content: "Cont. 1 g",
  },
]

const flowersProducts = [
  {
    name: "Blue Runtz",
    type: "indoor",
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
    type: "indoor",
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
    type: "green house",
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
    type: "green house",
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
    type: "green house",
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
    type: "green house",
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
    type: "indoor",
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
    type: "indoor",
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
    type: "indoor",
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
    type: "indoor",
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
    type: "indoor",
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
    type: "indoor",
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
  const phoneNumber = "5215573551881"
  const message = `Hola! Estoy interesado en el ${productName}. ¿Podrías darme más información?`
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
        <div
          className="bg-green-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
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

const getDailyPromos = () => {
  const today = new Date()
  const dayOfMonth = today.getDate()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  const promos = []

  // Días específicos del mes (7, 14, 21, 28)
  if ([7, 14, 21, 28].includes(dayOfMonth)) {
    promos.push({
      title: "Promo del Día",
      text: "7g por $500 en las flores Green House y 7g por $777 en cualquier flor Indoor",
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
      textColor: "text-white",
    })
  }

  // Martes (día 2)
  if (dayOfWeek === 2) {
    promos.push({
      title: "Promo del Día",
      text: "Los prerolados STIIIZY y Sluggers en $1150 - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white",
    })
  }

  // Jueves (día 4)
  if (dayOfWeek === 4) {
    promos.push({
      title: "Promo del Día",
      text: "Todos los vapes en $1150 - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-600",
      textColor: "text-white",
    })
  }

  return promos.length > 0 ? promos : null
}

const getPromotionalPrice = (product: any, category: "vapes" | "flowers") => {
  const today = new Date()
  const dayOfMonth = today.getDate()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  if (category === "vapes") {
    // Martes: productos type "stiiizy" a $1150
    if (dayOfWeek === 2) {
      const types = Array.isArray(product.type) ? product.type : [product.type]
      if (types.includes("stiiizy")) {
        return { originalPrice: 1400, promoPrice: 1150, hasPromo: true }
      }
    }

    // Jueves: todos los vapes a $1150
    if (dayOfWeek === 4) {
      return { originalPrice: 1400, promoPrice: 1150, hasPromo: true }
    }

    return { originalPrice: 1400, promoPrice: null, hasPromo: false }
  }

  if (category === "flowers") {
    // Días 7, 14, 21, 28: green house 7g por $500, indoor 7g por $777
    if ([7, 14, 21, 28].includes(dayOfMonth)) {
      if (product.type === "green house") {
        return {
          originalPrice: product.prices[0].price,
          promoPrice: 500,
          hasPromo: true,
          weight: "7g",
        }
      }
      if (product.type === "indoor") {
        return {
          originalPrice: product.prices[0].price,
          promoPrice: 777,
          hasPromo: true,
          weight: "7g",
        }
      }
    }

    return { originalPrice: null, promoPrice: null, hasPromo: false }
  }

  return { originalPrice: null, promoPrice: null, hasPromo: false }
}

const PriceDisplay = ({ product, category }: { product: any; category: "vapes" | "flowers" }) => {
  const priceInfo = getPromotionalPrice(product, category)

  if (category === "vapes") {
    if (priceInfo.hasPromo) {
      return (
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-600">${priceInfo.promoPrice}</span>
          <span className="text-sm text-gray-500 line-through">${priceInfo.originalPrice}</span>
        </div>
      )
    }
    return <span className="text-2xl font-bold text-green-600">${priceInfo.originalPrice}</span>
  }

  if (category === "flowers") {
    if (priceInfo.hasPromo) {
      return (
        <div className="space-y-2 mb-4">
          {/* Precio promocional destacado */}
          <div className="flex justify-between items-center bg-green-100 border-2 border-green-500 rounded-lg p-3">
            <span className="text-sm font-bold text-green-800"> {priceInfo.weight} </span>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-600">${priceInfo.promoPrice}</span>
              <span className="text-sm text-gray-500 line-through">${priceInfo.originalPrice}</span>
            </div>
          </div>
          {/* Otros precios normales */}
          {product.prices?.slice(1).map((priceOption: any, priceIndex: number) => (
            <div key={priceIndex + 1} className="flex justify-between items-center bg-green-50 rounded-lg p-2">
              <span className="text-sm font-medium text-gray-700">{priceOption.weight}</span>
              <span className="text-lg font-bold text-green-600">${priceOption.price}</span>
            </div>
          ))}
        </div>
      )
    }

    // Precios normales sin promoción
    return (
      <div className="space-y-2 mb-4">
        {product.prices?.map((priceOption: any, priceIndex: number) => (
          <div key={priceIndex} className="flex justify-between items-center bg-green-50 rounded-lg p-2">
            <span className="text-sm font-medium text-gray-700">{priceOption.weight}</span>
            <span className="text-lg font-bold text-green-600">${priceOption.price}</span>
          </div>
        ))}
      </div>
    )
  }

  return null
}

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25m3 8.25v-1.5a3 3 0 00-3-3H6.75a3 3 0 00-3 3v1.5m3 0V15a2.25 2.25 0 002.25 2.25h9A2.25 2.25 0 0021 15v-2.25M3 12h18m-9-4.5v9m4.5-4.5v4.5m-9-4.5v4.5"
    />
  </svg>
)

const VapeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
)

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    />
  </svg>
)

export default function DispensarioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dailyPromos = getDailyPromos()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const openWhatsAppFooter = () => {
    const phoneNumber = "5255434372364"
    const message = "Hola! Me gustaría obtener más información sobre sus productos."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-green-50">
      {dailyPromos && (
        <div className="relative z-50">
          {dailyPromos.map((promo, index) => (
            <div
              key={index}
              className={`${promo.bgColor} ${promo.textColor} py-3 px-4 text-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 container mx-auto">
                <div className="flex items-center justify-center space-x-2 animate-pulse">
                  <span className="font-bold text-sm md:text-base">{promo.title}:</span>
                  <span className="text-sm md:text-base">{promo.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <header className="relative z-40 bg-white backdrop-blur-sm shadow-sm">
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
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
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
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/smoke-duck-logo.png"
                  alt="Smoke Duck Logo"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-xl font-bold text-gray-800">SMOKE DUCK</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="bg-gray-600 block h-0.5 w-6 rounded-sm rotate-45 translate-y-0"></span>
                  <span className="bg-gray-600 block h-0.5 w-6 rounded-sm -rotate-45 -translate-y-0.5"></span>
                </div>
              </button>
            </div>
            <nav className="p-6 bg-white">
              <div className="flex flex-col space-y-6">
                <button
                  onClick={() => scrollToSection("vapes")}
                  className="text-left text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100"
                >
                  VAPES
                </button>
                <button
                  onClick={() => scrollToSection("flowers")}
                  className="text-left text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100"
                >
                  FLOWERS
                </button>
                <button
                  onClick={() => scrollToSection("promos")}
                  className="text-left text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100"
                >
                  PROMOS
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="px-4 relative bg-cover bg-center bg-no-repeat min-h-[70vh] md:min-h-screen"
        style={{
          backgroundImage: "url('/images/smoke-duck-hero-bg.jpg')",
        }}
      >
        <div className="container mx-auto text-center relative z-10 h-full flex items-end justify-center min-h-[70vh] md:min-h-screen pb-20 font-bold text-black">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("vapes")}
                className="bg-black text-white px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full hover:bg-white hover:text-black font-header w-full sm:w-auto mx-7 sm:mx-0"
              >
                VER VAPES
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("flowers")}
                className="bg-black text-white px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full hover:bg-white hover:text-black font-header w-full sm:w-auto mx-7 sm:mx-0"
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
                    <PriceDisplay product={product} category="vapes" />
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

          <div className="text-center mt-8">
            <Button
              onClick={() => openWhatsApp("Quiero preguntar por todos los productos de vapes")}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              Pregunta por todos los productos
            </Button>
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
            {flowersProducts
              .sort((a, b) => a.prices[0].price - b.prices[0].price)
              .map((product, index) => (
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
                    <PriceDisplay product={product} category="flowers" />
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

          <div className="text-center mt-8">
            <Button
              onClick={() => openWhatsApp("Quiero preguntar por todos los productos de flowers")}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              Pregunta por todos los productos
            </Button>
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                  <img
                    src="https://res.cloudinary.com/dmfczq42y/image/upload/v1755130016/blue-runtz_dsey5w.jpg"
                    alt="OG Diesel Kush"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-card text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                  Promoción de Flowers
                </h3>
                <div className="font-card w-fit bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded-full font-semibold transition-all duration-300 cursor-default text-sm mb-0">
                  Días 7, 14, 21 y 28
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-bold text-green-800 text-sm">Green House</h4>
                    <p className="text-xs text-gray-600 mt-1">Lantz, Mt. Hood Magic, Guava y Golden Goat</p>
                    <p className="text-lg font-bold text-green-600">7g por $500</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-bold text-green-800 text-sm">Indoor</h4>
                    <p className="text-xs text-gray-600 mt-1">Todas las demás flores del catálogo</p>
                    <p className="text-lg font-bold text-green-600">7g por $777</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promo Martes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                  <img
                    src="https://i.imgur.com/gL2oPH6.jpeg"
                    alt="STIIIZY 40s Blue Dream"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-card text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                  Martes de Prerolados
                </h3>
                <div className="font-card w-fit bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded-full font-semibold transition-all duration-300 cursor-default text-sm mb-0">
                  Todos los martes
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-green-800 mb-2">Prerolados</h4>
                  <p className="text-sm text-gray-600 font-semibold">STIIIZY y Sluggers</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">$1,150</p>
                </div>
              </CardContent>
            </Card>

            {/* Promo Jueves */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                  <img
                    src="https://i.imgur.com/HvcPOHl.jpeg"
                    alt="BIG CHIEF Pineapple Express"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-card text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                  Jueves de Vapes
                </h3>
                <div className="font-card w-fit bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded-full font-semibold transition-all duration-300 cursor-default text-sm mb-0">
                  Todos los jueves
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-green-800 mb-2">Todos los Vapes</h4>
                  <p className="text-sm text-gray-600 font-semibold">Cualquier vape del catálogo</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">$1,150</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-2">¿Cómo aplicar las promociones?</h4>
              <p className="text-gray-600">
                Da clic en el vape o flower que te interesa para contáctarnos por WhatsApp, coméntanos que estás
                interesado en la promo y te aplicamos el descuento correspondiente.
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
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button
              onClick={() => scrollToSection("vapes")}
              className="w-full sm:w-32 bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              VAPES
            </button>
            <button
              onClick={() => scrollToSection("flowers")}
              className="w-full sm:w-32 bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              FLOWERS
            </button>
            <button
              onClick={() => scrollToSection("promos")}
              className="w-full sm:w-32 bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              PROMOS
            </button>
            <button
              onClick={openWhatsAppFooter}
              className="w-full sm:w-32 bg-green-600 text-white hover:bg-green-700 px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-green-600 flex items-center justify-center"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              WHATSAPP
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
