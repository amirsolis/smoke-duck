// Configuración de imágenes de productos
export const productImages = {
  // Vapes - Reemplaza estas URLs con tus imágenes reales
  vapes: {
    "STIIIZY 40s Blue Dream": "https://drive.google.com/uc?id=1ZmyG6upGYAquS6GQmvk-vJ0SIngR5-t_",
    "CAKE OG Classics Hawaiian Guava": "/images/vapes/cake-hawaiian-guava.jpg", // Placeholder hasta que tengas la imagen correcta
    "BOUTIQ switch Hawaiian Snow Sour Slush": "/images/vapes/boutiq-hawaiian-snow.jpg",
    "Camino Sours Watermelon Spritz": "/images/vapes/camino-watermelon.jpg",
    "CAKE Designer Distillate Strawberry Mango": "/images/vapes/cake-strawberry-mango.jpg",
    "The Cure Company Papaya": "/images/vapes/cure-papaya.jpg",
    "Camino Uplifting Pineapple Habanero": "/images/vapes/camino-pineapple.jpg",
    "8-BIT BUDS Infused Live Rosin Piña Colada": "/images/vapes/8bit-pina-colada.jpg",
    "Cure Injoy Strawnana": "/images/vapes/cure-strawnana.jpg",
    "Muha Meds Live Resin Sour Diesel": "/images/vapes/muha-sour-diesel.jpg",
    "Cali Clear Sour Diesel": "/images/vapes/cali-clear-sour-diesel.jpg",
    "Crystal Clear Blue Dream": "/images/vapes/crystal-clear-blue-dream.jpg",
    "DAB DADDY Thin Mint Cookies x Jealousy": "/images/vapes/dab-daddy-thin-mint.jpg",
    "Gramlin Sour Apple Pie": "/images/vapes/gramlin-apple-pie.jpg",
    "Pretty Dope Strawberry Mimosa": "/images/vapes/pretty-dope-strawberry.jpg",
    "Side Hustle Blue Dream": "/images/vapes/side-hustle-blue-dream.jpg",
    "Gelato Green Crack": "/images/vapes/gelato-green-crack.jpg",
    "Cabo Canabotanica": "/images/vapes/cabo-canabotanica.jpg",
    "BIG CHIEF Pineapple Express": "/images/vapes/big-chief-pineapple.jpg",
    "West Coast Cure Orange Creamsicle": "/images/vapes/west-coast-orange.jpg",
    "Kushy Punch Blue Raspberry": "/images/vapes/kushy-punch-blue.jpg",
  },

  // Flowers - Reemplaza estas URLs con tus imágenes reales
  flowers: {
    "RUNTZ OG": "/images/flowers/runtz-og.jpg",
    "DANTE'S INFERNO": "/images/flowers/dantes-inferno.jpg",
    GENOLADE: "/images/flowers/genolade.jpg",
    SIRI: "/images/flowers/siri.jpg",
    "GOLDEN GAS": "/images/flowers/golden-gas.jpg",
    "THE SOUP": "/images/flowers/the-soup.jpg",
    RAINBOW: "/images/flowers/rainbow.jpg",
    "DRIPPIN' AIN'T EASY": "/images/flowers/drippin-aint-easy.jpg",
    LEMONCHERRY: "/images/flowers/lemoncherry.jpg",
    "LAZEL FUEL": "/images/flowers/lazel-fuel.jpg",
    "POP TARTZ": "/images/flowers/pop-tartz.jpg",
    "ALL GAS": "/images/flowers/all-gas.jpg",
    "F. BERRIES": "/images/flowers/f-berries.jpg",
    "HEAD HUNTER": "/images/flowers/head-hunter.jpg",
    "PERMANENT OCTANE": "/images/flowers/permanent-octane.jpg",
    "VICE CITY": "/images/flowers/vice-city.jpg",
  },
}

// Función para verificar si la imagen existe
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: "HEAD" })
    return response.ok
  } catch {
    return false
  }
}

// Función para obtener imagen del producto
export const getProductImage = async (productName: string, category: "vapes" | "flowers"): Promise<string> => {
  const image = productImages[category][productName]

  // Debug: mostrar en consola qué imagen se está buscando
  console.log(`🔍 Buscando imagen para: "${productName}" en categoría: "${category}"`)
  console.log(`📁 Ruta mapeada: ${image || "No encontrada"}`)

  // Si hay imagen personalizada, verificar si existe
  if (image) {
    console.log(`🌐 Verificando si existe: ${image}`)
    const exists = await checkImageExists(image)
    console.log(`✅ Imagen existe: ${exists}`)

    if (exists) {
      return image
    } else {
      console.warn(`⚠️ Imagen no encontrada en: ${image}`)
    }
  }

  // Si no hay imagen personalizada o no existe, usar placeholder
  const query = `${category === "vapes" ? "cannabis vape cartridge" : "cannabis flower buds"} ${productName} product photography`
  const fallback = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(query)}`
  console.log(`🔄 Usando fallback: ${fallback}`)
  return fallback
}

// Imagen por defecto si no se encuentra
export const getDefaultImage = (category: "vapes" | "flowers"): string => {
  const query =
    category === "vapes"
      ? "cannabis vape cartridge product photography professional"
      : "cannabis flower buds product photography professional"
  return `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(query)}`
}
