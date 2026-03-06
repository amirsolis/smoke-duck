"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getProductImage } from "@/lib/product-images"

// Iconos adicionales para el sistema de referidos
const CopyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2"/>
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="20,6 9,17 4,12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="20,12 20,22 4,22 4,12" strokeWidth="2"/>
    <rect x="2" y="7" width="20" height="5" strokeWidth="2"/>
    <line x1="12" y1="22" x2="12" y2="7" strokeWidth="2"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" strokeWidth="2"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" strokeWidth="2"/>
  </svg>
)

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="15,18 9,12 15,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="9,6 15,12 9,18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Reemplazando iconos de lucide-react con SVG inline
const LeafIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.85 9 14 17 12V8z" />
    <path d="M3.34 7.34C8.51 5.26 14.68 3.16 22 2v6c-7.32 1.16-13.49 3.26-18.66 5.34l-.82-1.06z" />
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 2.011c-5.506 0-9.989 4.483-9.989 9.989 0 1.75.46 3.49 1.34 5.011L2.011 22l5.06-1.327c1.45.78 3.08 1.194 4.946 1.194 5.506 0 9.989-4.483 9.989-9.989S17.523 2.011 12.017 2.011zm0 18.178c-1.51 0-2.99-.41-4.28-1.18l-.31-.18-3.18.83.85-3.11-.2-.32c-.85-1.35-1.3-2.91-1.3-4.52 0-4.68 3.81-8.49 8.49-8.49s8.49 3.81 8.49 8.49-3.81 8.49-8.49 8.49zm4.66-6.36c-.26-.13-1.52-.75-1.75-.84-.24-.08-.41-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.17 1.88 2.87 4.55 4.02.64.28 1.14.44 1.53.57.64.2 1.23.17 1.69.1.52-.08.92-.33 1.05-.65.13-.32.13-.6.09-.65-.04-.06-.17-.1-.36-.18z" />
  </svg>
)

const vapesProducts = [
  {
    name: "STIIIZY",
    type: ["vape", "stiiizy"],
    strain: "Hybrid & sativa",
    description: "",
    content: "Cont. 1 g",
    price: 1400,
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
    name: "Gramlin",
    type: "vape",
    strain: "various flavors",
    content: "Cont. 1 g",
    price: 1500,
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
    name: "Kushy Punch",
    type: "vape",
    strain: "tropical punch",
    content: "Cont. 1 g",
    price: 1450,
  },
  {
    name: "Eureka AIO Tropical Twist",
    type: "vape",
    strain: "Tropical Twist",
    content: "Cont. 1 g",
  },
  {
    name: "Vape Platinum",
    type: "vape",
    strain: "hybrid & sativa",
    content: "Cont. 1 g",
    price: 1350,
  },
  {
    name: "Vape Bloom",
    type: "vape",
    strain: "sativa",
    content: "Cont. 1 g",
    price: 1450,
  },
  {
    name: "Vape Fuzzies",
    type: "vape",
    strain: "various flavors",
    content: "Cont. 1 g",
    price: 1400,
  },
]

const flowersProducts = [
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
    name: "Blue Cookies",
    type: "indoor",
    strain: "Híbrido",
    effects: ["Relajado", "Excitado", "Eufórico"],
    calmingLevel: 3.5,
    thcLevel: 4.2,
    prices: [
      { weight: "7 g", price: 700 },
      { weight: "14 g", price: 1100 },
      { weight: "28 g", price: 2000 },
    ],
  },
  {
    name: "Honey Bananas",
    type: "indoor",
    strain: "Híbrido",
    effects: ["Risueño", "Feliz", "Relajado"],
    calmingLevel: 3.5,
    thcLevel: 4,
    prices: [
      { weight: "7 g", price: 700 },
      { weight: "14 g", price: 1100 },
      { weight: "28 g", price: 2000 },
    ],
  },
  {
    name: "Supersonic",
    type: "indoor",
    strain: "Sativa",
    effects: ["Energético", "Charlatán", "Elevado"],
    calmingLevel: 4.7,
    thcLevel: 3.5,
    prices: [
      { weight: "7 g", price: 700 },
      { weight: "14 g", price: 1100 },
      { weight: "28 g", price: 2000 },
    ],
  },
]

const preRoladosProducts = [
  {
    name: "Smoke Duck",
    type: "prerolado",
    strain: "pre rolado infusionado",
    description: "",
    content: "Cont. 5 cigarros",
    price: 800,
  },
  {
    name: "Stiiizy 2.5g",
    type: ["prerolado", "stiiizy"],
    strain: "pre rolado infusionado",
    description: "",
    content: "Cont. 5 cigarros",
    price: 1550,
  },
  {
    name: "Stiiizy 1g",
    type: ["prerolado", "stiiizy"],
    strain: "pre rolado infusionado",
    description: "",
    content: "Cont. 1 cigarro",
    price: 850,
  },
  {
    name: "Baby Jeeters 2.5g",
    type: "prerolado",
    strain: "pre rolado infusionado",
    description: "",
    content: "Cont. 5 cigarros",
    price: 1750,
  },
  {
    name: "Moon Rock Presidencial 1g",
    type: "prerolado",
    strain: "pre rolado infusionado",
    description: "",
    content: "Cont. 1 cigarro",
    price: 950,
  },
]

const gomitasProducts = [
  {
    name: "Good Tide",
    type: "gomitas",
    strain: "gomitas",
    description: "",
    content: "Cont. 10 gomitas",
    price: 950,
  },
  {
    name: "Stiiizy",
    type: ["gomitas", "stiiizy"],
    strain: "gomitas",
    description: "",
    content: "Cont. 10 gomitas",
    price: 950,
  },
  {
    name: "Drops",
    type: "gomitas",
    strain: "gomitas",
    description: "",
    content: "Cont. 2 gomitas",
    price: 850,
  },
]

const accesoriosProducts = [
  {
    name: "Conos RAW",
    type: "accesorio",
    strain: "classic",
    description: "",
    content: "Cont. 3 paq",
    price: 70,
  },
  {
    name: "Papel para rolar G-Rollz",
    type: "accesorio",
    strain: "organic hemp",
    description: "",
    content: "Cont. 50 unidades (sabanas)",
    price: 60,
  },
  {
    name: "GRAV Classic Spoon",
    type: "accesorio",
    strain: "sandblasted spoon",
    description: "",
    content: "Cont. 1 pieza",
    price: 450,
  },
  {
    name: "GRAV Mini Classic Sherlock",
    type: "accesorio",
    strain: "vidrio",
    description: "",
    content: "Cont. 1 pieza",
    price: 400,
  },
  {
    name: "Puffco Plus Pen",
    type: "accesorio",
    strain: "vape all in one",
    description: "",
    content: "Cont. 1 pieza",
    price: 1500,
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
}: { productName: string; category: "vapes" | "flowers" | "prerolados" | "gomitas" | "accesorios"; alt: string }) => {
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
      title: "Martes de Prerolados",
      text: "Todos los prerolados con 20% de descuento - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white",
    })
  }

  // Jueves (día 4)
  if (dayOfWeek === 4) {
    promos.push({
      title: "Jueves de Vapes",
      text: "Todos los vapes con 20% de descuento - Pregunta por tu promo",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-600",
      textColor: "text-white",
    })
  }

  return promos.length > 0 ? promos : null
}

const getPromotionalPrice = (product: any, category: "vapes" | "flowers" | "prerolados") => {
  const today = new Date()
  const dayOfMonth = today.getDate()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  if (category === "vapes") {
    const productPrice = product.price || 1400

    // Jueves: todos los vapes con 20% de descuento
    if (dayOfWeek === 4) {
      const promoPrice = Math.round(productPrice * 0.8)
      return { originalPrice: productPrice, promoPrice, hasPromo: true }
    }

    return { originalPrice: productPrice, promoPrice: null, hasPromo: false }
  }

  if (category === "prerolados") {
    const productPrice = product.price || 800

    // Martes: todos los prerolados con 20% de descuento
    if (dayOfWeek === 2) {
      const promoPrice = Math.round(productPrice * 0.8)
      return { originalPrice: productPrice, promoPrice, hasPromo: true }
    }

    return { originalPrice: productPrice, promoPrice: null, hasPromo: false }
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

const PriceDisplay = ({ product, category }: { product: any; category: "vapes" | "flowers" | "prerolados" }) => {
  const priceInfo = getPromotionalPrice(product, category)

  if (category === "vapes" || category === "prerolados") {
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
      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 00-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    />
  </svg>
)

export default function DispensarioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dailyPromos = getDailyPromos()
  
  // Estado para el carrusel de vapes
  const [vapesCarouselIndex, setVapesCarouselIndex] = useState(0)
  const vapesPerPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : typeof window !== "undefined" && window.innerWidth < 1024 ? 2 : typeof window !== "undefined" && window.innerWidth < 1280 ? 3 : 4
  const totalVapesPages = Math.ceil(vapesProducts.length / vapesPerPage)

  const nextVapesSlide = () => {
    setVapesCarouselIndex((prev) => (prev + 1) % totalVapesPages)
  }

  const prevVapesSlide = () => {
    setVapesCarouselIndex((prev) => (prev - 1 + totalVapesPages) % totalVapesPages)
  }
  
  // Estados para el sistema de referidos
  const searchParams = useSearchParams()
  const [referralName, setReferralName] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [linkCopied, setLinkCopied] = useState(false)
  const [textCopied, setTextCopied] = useState(false)
  const [showReferralModal, setShowReferralModal] = useState(false)
  const [referralModalShown, setReferralModalShown] = useState(false)
  const [referredName, setReferredName] = useState("")
  const [referredPhone, setReferredPhone] = useState("")
  const [referrerCode, setReferrerCode] = useState("")
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [registrationError, setRegistrationError] = useState(false)

  // Detectar parametro ref en URL
  useEffect(() => {
    const refCode = searchParams.get("ref")
    if (refCode && !referralModalShown) {
      setReferrerCode(refCode)
      setShowReferralModal(true)
      setReferralModalShown(true)
    }
  }, [searchParams, referralModalShown])

  // Generar codigo de referido
  const generateReferralCode = () => {
    if (referralName.trim()) {
      const code = `DUCK-${referralName.trim().toUpperCase().replace(/\s+/g, "-")}`
      setGeneratedCode(code)
    }
  }

  // Copiar link al portapapeles
  const copyReferralLink = () => {
    if (generatedCode) {
      const link = `smokeduck2024.com/?ref=${generatedCode}`
      navigator.clipboard.writeText(link)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    }
  }

  // Copiar texto sugerido
  const copySuggestedText = () => {
    if (generatedCode) {
      const text = `Oye! Compra en Smoke Duck con mi link y los dos ganamos 🦆🔥 Usa mi link para que yo acumule mis 5 referidos y gane 7g de regalo (te compartiré de mi regalo🫶🏻) smokeduck2024.com/?ref=${generatedCode}`
      navigator.clipboard.writeText(text)
      setTextCopied(true)
      setTimeout(() => setTextCopied(false), 2000)
    }
  }

  // Abrir WhatsApp para reclamar regalo
  const claimReward = () => {
    if (generatedCode) {
      const phoneNumber = "5215573551881"
      const message = `Hola Smoke Duck! 🦆 Quiero reclamar mis 7g de regalo, ya referí a 5 amigos con mi código ${generatedCode} 🎁`
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    }
  }

  // Confirmar registro de referido
  const confirmReferral = async () => {
    const phoneNumber = "5215573551881"
    
    // Enviar datos al Google Apps Script (no-cors)
    try {
      fetch("https://script.google.com/macros/s/AKfycbyGNfdLYzKl1jdFdH7QUudBOc5jjABmekADTtTHyxPHthmeXU3emHBpE_IOectzyun8/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: referredName,
          numero: referredPhone,
          codigoReferidor: referrerCode,
        }),
      })
      setRegistrationError(false)
    } catch (error) {
      setRegistrationError(true)
    }

    // Cerrar modal
    setShowReferralModal(false)
    
    // Mostrar toast de exito
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 4000)

    // Abrir WhatsApp con mensaje prellenado
    const message = `Hola Smoke Duck! 🦆 Me recomendaron con el código ${referrerCode}. Mi nombre es ${referredName} y mi número es ${referredPhone} — quiero hacer un pedido 🛒`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

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
      {/* Modal de Referido */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowReferralModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Alguien te recomendó Smoke Duck</h3>
              <p className="text-gray-600 text-sm">Registra tus datos para que tu amigo reciba su regalo</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre o apodo</label>
                <input
                  type="text"
                  value={referredName}
                  onChange={(e) => setReferredName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tu número de WhatsApp</label>
                <input
                  type="tel"
                  value={referredPhone}
                  onChange={(e) => setReferredPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10 dígitos"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <Button
              onClick={confirmReferral}
              disabled={!referredName.trim() || referredPhone.length !== 10}
              className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar y ver el catálogo
            </Button>
          </div>
        </div>
      )}

      {/* Toast de éxito */}
      {showSuccessToast && (
        <div className="fixed bottom-4 right-4 z-[100] animate-in slide-in-from-bottom fade-in duration-300">
          <div className={`${registrationError ? "bg-yellow-500" : "bg-green-600"} text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3`}>
            <span className="text-2xl">{registrationError ? "😊" : "🎉"}</span>
            <span className="font-medium">
              {registrationError 
                ? "Hubo un problema al registrar, pero igual puedes contactarnos" 
                : "¡Registro exitoso! Tu amigo acumuló un referido"}
            </span>
          </div>
        </div>
      )}

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
                onClick={() => scrollToSection("prerolados")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
              >
                PRE ROLADOS
              </button>
              <button
                onClick={() => scrollToSection("gomitas")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
              >
                GOMITAS
              </button>
              <button
                onClick={() => scrollToSection("accesorios")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium font-header"
              >
                ACCESORIOS
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
              <div className="flex flex-col space-y-6 justify-center items-end">
                <button
                  onClick={() => scrollToSection("vapes")}
                  className="w-full max-w-xs text-right text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100 py-2"
                >
                  VAPES
                </button>
                <button
                  onClick={() => scrollToSection("flowers")}
                  className="w-full max-w-xs text-right text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100 py-2"
                >
                  FLOWERS
                </button>
                <button
                  onClick={() => scrollToSection("prerolados")}
                  className="w-full max-w-xs text-right text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100 py-2"
                >
                  PRE ROLADOS
                </button>
                <button
                  onClick={() => scrollToSection("gomitas")}
                  className="w-full max-w-xs text-right text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100 py-2"
                >
                  GOMITAS
                </button>
                <button
                  onClick={() => scrollToSection("accesorios")}
                  className="w-full max-w-xs text-right text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100 py-2"
                >
                  ACCESORIOS
                </button>
                <button
                  onClick={() => scrollToSection("promos")}
                  className="w-full max-w-xs text-right text-lg text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg border-b border-gray-100 py-2"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("vapes")}
                className="bg-black text-white px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full hover:bg-white hover:text-black font-header w-full sm:w-auto"
              >
                VER VAPES
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("flowers")}
                className="bg-black text-white px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full hover:bg-white hover:text-black font-header w-full sm:w-auto"
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

          {/* Carrusel de Vapes */}
          <div className="relative">
            {/* Flechas de navegacion */}
            <button
              onClick={prevVapesSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
            </button>
            <button
              onClick={nextVapesSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
            </button>

            {/* Contenedor del carrusel con scroll horizontal */}
            <div className="overflow-hidden mx-6 md:mx-10">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${vapesCarouselIndex * 100}%)` }}
              >
                {/* Agrupar productos en paginas */}
                {Array.from({ length: Math.ceil(vapesProducts.length / 4) }).map((_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {vapesProducts.slice(pageIndex * 4, (pageIndex + 1) * 4).map((product, index) => (
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
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de pagina */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(vapesProducts.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVapesCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    vapesCarouselIndex === index 
                      ? "bg-green-600 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir a pagina ${index + 1}`}
                />
              ))}
            </div>
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

      {/* Pre Rolados Section */}
      <section id="prerolados" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              PRE ROLADOS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {preRoladosProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm flex flex-col"
              >
                <CardHeader className="p-4 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                    <ProductImage productName={product.name} category="prerolados" alt={product.name} />
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
                    <PriceDisplay product={product} category="prerolados" />
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
              onClick={() => openWhatsApp("Quiero preguntar por todos los pre rolados")}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              Pregunta por todos los productos
            </Button>
          </div>
        </div>
      </section>

      {/* Gomitas Section */}
      <section id="gomitas" className="py-16 px-4 bg-white/100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              GOMITAS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gomitasProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm flex flex-col"
              >
                <CardHeader className="p-4 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                    <ProductImage productName={product.name} category="gomitas" alt={product.name} />
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
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
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
              onClick={() => openWhatsApp("Quiero preguntar por todas las gomitas")}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              Pregunta por todos los productos
            </Button>
          </div>
        </div>
      </section>

      {/* Accesorios Section */}
      <section id="accesorios" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              ACCESORIOS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accesoriosProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm flex flex-col"
              >
                <CardHeader className="p-4 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                    <ProductImage productName={product.name} category="accesorios" alt={product.name} />
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
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
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
              onClick={() => openWhatsApp("Quiero preguntar por todos los accesorios")}
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
                <Button
                  onClick={() => openWhatsApp("Quiero preguntar por la promoción de flowers")}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Pregunta por tu promo
                </Button>
              </CardContent>
            </Card>

            {/* Promo Martes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                  <img
                    src="https://res.cloudinary.com/dmfczq42y/image/upload/v1772670780/Smoke_Duck_5_cigarros_lmid50.png"
                    alt="Prerolados"
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
                  <p className="text-sm text-gray-600 font-semibold">Todos los prerolados con</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">20% de descuento</p>
                </div>
                <Button
                  onClick={() => openWhatsApp("Quiero preguntar por la promoción de prerolados")}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Pregunta por tu promo
                </Button>
              </CardContent>
            </Card>

            {/* Promo Jueves */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                  <img
                    src="https://res.cloudinary.com/dmfczq42y/image/upload/v1772674479/Vape_Stiiizy_gjn1v1.png"
                    alt="Vapes"
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
                  <h4 className="font-bold text-green-800 mb-2">Vapes</h4>
                  <p className="text-sm text-gray-600 font-semibold">Todos los vapes con</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">20% de descuento</p>
                </div>
                <Button
                  onClick={() => openWhatsApp("Quiero preguntar por la promoción de vapes")}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Pregunta por tu promo
                </Button>
              </CardContent>
            </Card>

            {/* Promo Referidos */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-3 w-full aspect-square">
                  <img
                    src="https://res.cloudinary.com/dmfczq42y/image/upload/v1755130018/orange_xarkce.jpg"
                    alt="Agent Orange - Invita a tus amigos"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-card text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                  Invita a tus amigos y Gana
                </h3>
                <div className="font-card w-fit bg-white text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded-full font-semibold transition-all duration-300 cursor-default text-sm mb-0">
                  Todos los días
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-green-800 mb-2">Gana con Smoke Duck</h4>
                  <p className="text-sm text-gray-600 font-semibold">Invita a 5 amigos a que compren en Smoke Duck y</p>
                  <p className="text-xl font-bold text-green-600 mt-2">gana 7g de regalo, ¡gratis!</p>
                </div>

                {/* Campo para generar codigo */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tu nombre o apodo</label>
                    <input
                      type="text"
                      value={referralName}
                      onChange={(e) => setReferralName(e.target.value)}
                      placeholder="Escribe tu nombre"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <Button
                    onClick={generateReferralCode}
                    disabled={!referralName.trim()}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Generar mi link de referido
                  </Button>

                  {generatedCode && (
                    <div className="space-y-3 pt-2">
                      {/* Link generado */}
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Tu link de referido:</p>
                        <div className="flex items-center justify-between">
                          <code className="text-xs text-green-700 font-mono break-all">smokeduck2024.com/?ref={generatedCode}</code>
                          <button
                            onClick={copyReferralLink}
                            className="ml-2 p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex-shrink-0"
                          >
                            {linkCopied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
                          </button>
                        </div>
                        {linkCopied && <p className="text-xs text-green-600 mt-1">¡Copiado!</p>}
                      </div>

                      {/* Texto sugerido */}
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Texto sugerido para compartir:</p>
                        <p className="text-xs text-gray-700 mb-2">
                          Oye! Compra en Smoke Duck con mi link y los dos ganamos 🦆🔥 Usa mi link para que yo acumule mis 5 referidos y gane 7g de regalo (te compartiré de mi regalo🫶🏻)
                        </p>
                        <button
                          onClick={copySuggestedText}
                          className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-xs font-medium flex items-center justify-center"
                        >
                          {textCopied ? (
                            <>
                              <CheckIcon className="w-4 h-4 mr-1" />
                              ¡Copiado!
                            </>
                          ) : (
                            <>
                              <CopyIcon className="w-4 h-4 mr-1" />
                              Copiar texto
                            </>
                          )}
                        </button>
                      </div>

                      {/* Boton reclamar regalo */}
                      <Button
                        onClick={claimReward}
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-full border-0 text-sm"
                      >
                        <GiftIcon className="w-4 h-4 mr-2" />
                        Reclamar mi regalo 🎁
                      </Button>
                    </div>
                  )}
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
              onClick={() => scrollToSection("prerolados")}
              className="w-full sm:w-32 bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              PRE ROLADOS
            </button>
            <button
              onClick={() => scrollToSection("gomitas")}
              className="w-full sm:w-32 bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              GOMITAS
            </button>
            <button
              onClick={() => scrollToSection("accesorios")}
              className="w-full sm:w-32 bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-semibold transition-all duration-300 rounded-lg border-2 border-black"
            >
              ACCESORIOS
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
