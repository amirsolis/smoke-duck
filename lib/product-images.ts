// Configuración de imágenes de productos
export const productImages = {
  // Vapes - Reemplaza estas URLs con tus imágenes reales
  vapes: {
    "STIIIZY 40s Blue Dream": "https://i.imgur.com/gL2oPH6.jpeg",
    "CAKE OG Classics Hawaiian Guava": "https://i.imgur.com/MJEM85y.jpeg", // Placeholder hasta que tengas la imagen correcta
    "BOUTIQ Switch Hawaiian Snow Sour Slush": "https://i.imgur.com/8mGYvnD.jpeg",
    "Camino Sours Watermelon Spritz": "https://i.imgur.com/LyIQz1A.jpeg",
    "CAKE Designer Distillate Strawberry Mango": "https://i.imgur.com/kEtcQmA.jpeg",
    "The Cure Company Papaya": "https://i.imgur.com/hJhIGsU.jpeg",
    "Camino Uplifting Pineapple Habanero": "https://i.imgur.com/Z0J5Eek.png",
    "8-BIT BUDS Infused Live Rosin Piña Colada": "https://i.imgur.com/CeTx2le.jpeg",
    "Cure Injoy Strawnana": "https://i.imgur.com/O89kPAJ.jpeg",
    "Muha Meds Live Resin Sour Diesel": "https://i.imgur.com/Q77UCqe.jpeg",
    "Cali Clear Sour Diesel": "https://i.imgur.com/OKLcTf9.jpeg",
    "Crystal Clear Blue Dream": "https://i.imgur.com/uGF1Dy9.jpeg",
    "DAB DADDY Thin Mint Cookies x Jealousy": "https://i.imgur.com/TC5z8Ua.jpeg",
    "Gramlin Sour Apple Pie": "https://i.imgur.com/x3tVLzB.jpeg",
    "Pretty Dope Strawberry Mimosa": "https://i.imgur.com/lydWuLp.jpeg",
    "Side Hustle Blue Dream": "https://i.imgur.com/OII0pZF.jpeg",
    "Gelato Green Crack": "https://i.imgur.com/mGD5Lsh.jpeg",
    "Cabo Canabotanica": "https://i.imgur.com/xhxxKUr.jpeg",
    "BIG CHIEF Pineapple Express": "https://i.imgur.com/6J2TblT.jpeg",
    "West Coast Cure Orange Creamsicle": "https://i.imgur.com/HvcPOHl.jpeg",
    "Kushy Punch Blue Raspberry": "https://i.imgur.com/ZmMd3tN.jpeg",
    "Eureka AIO Tropical Twist": "https://i.imgur.com/73reAmY.jpeg" ,
  },

  // Flowers - Reemplaza estas URLs con tus imágenes reales
  flowers: {
    "Blue Runtz": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130016/blue-runtz_dsey5w.jpg",
    "Gak Bx1": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130015/BX1_hssgl7.jpg",
    "Golden Goat": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130015/golden_bybcia.jpg",
    "Guava": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130016/guava_nvfsle.jpg",
    "Lantz": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130015/lantz_zb3mqy.jpg",
    "Mt. Hood Magic": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130016/magic_php2y6.jpg",
    "Mixed Berry": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130017/mixi_mntlsf.jpg",
    "OG Diesel Kush": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130018/oggi_e8j44k.jpg",
    "Skittlez Mintz": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130017/OGGL-SKITTLEZ_nwbbjw.jpg",
    "Agent Orange": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130018/orange_xarkce.jpg",
    "Red Bullz": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130018/redbull_qnikdf.jpg",
    "White Runtz": "https://res.cloudinary.com/dmfczq42y/image/upload/v1755130018/white-runtz_wxojlc.jpg",
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
