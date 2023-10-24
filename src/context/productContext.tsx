import { createContext, FC, useState, ReactNode, useContext } from 'react'
import product1 from '../../Imagens/Baner/Newarrivals.png'
import product2 from '../../Imagens/Baner/Meus-cachos-de-cinema.jpg'
import product3 from '../../Imagens/Baner/santo-black-poderoso.jpg'
import product4 from '../../Imagens/Baner/Babosao.jpg'
import product5 from '../../Imagens/Condicionador/Babosao.png'
import product6 from '../../Imagens/Condicionador/coco.png'
import product7 from '../../Imagens/Condicionador/santo_black.png'
import product8 from '../../Imagens/Condicionador/Meus_cachos_de_cinema.png'
import product9 from '../../Imagens/Condicionador/Meus_cachos.png'
import product10 from '../../Imagens/Condicionador/oliva.png'
import product11 from '../../Imagens/creme para pentear/Diva.png'
import product12 from '../../Imagens/creme para pentear/Black_poderoso.png'
import product13 from '../../Imagens/creme para pentear/Meus_cachos_de_cinema.png'
import product14 from '../../Imagens/creme para pentear/Meus_cachos_de_cinema_1.png'
import product15 from '../../Imagens/creme para pentear/Soltos.png'
import product16 from '../../Imagens/creme para pentear/Meu_poder.png'
import product17 from '../../Imagens/Kit/babosao.png'
import product18 from '../../Imagens/Kit/oliva.png'
import product19 from '../../Imagens/Kit/santo_black.png'
import product20 from '../../Imagens/Kit/coco.png'
import product21 from '../../Imagens/Kit/meus_cachos.png'
import product22 from '../../Imagens/Mascara_Hidratante/babosao.png'
import product23 from '../../Imagens/Mascara_Hidratante/oliva.png'
import product24 from '../../Imagens/Mascara_Hidratante/Santo_black.png'
import product25 from '../../Imagens/Mascara_Hidratante/coco.png'
import product26 from '../../Imagens/Mascara_Hidratante/cachos_de_cinema.png'
import product27 from '../../Imagens/Mascara_Hidratante/meus_cachos.png'
import product28 from '../../Imagens/Shampoo/babosao.png'
import product29 from '../../Imagens/Shampoo/oliva.png'
import product30 from '../../Imagens/Shampoo/Santo_black.png'
import product31 from '../../Imagens/Shampoo/coco.png'
import product32 from '../../Imagens/Shampoo/meus_cachos_de_cinema.png'
import product33 from '../../Imagens/Shampoo/meus_cachos.png'
// import {stripe} from '../lib/stripe'

interface Product {
  id: number
  isSelected?: boolean
  name: string
  image: string
  description: string
  price: number
  indication: string
  action: string
  activeIngredients: string
  benefits: string
  composition: string
  category: string[]
}

interface CartItem {
  id: number
  name: string
  image: string
  description: string
  price?: number
  quantity: number
}
interface ProductsContextType {
  products: Product[]
  cart: CartItem[]
  addToCart: (product: Product) => void
}
type ProductsProviderProps = {
  children: ReactNode
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
)

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const products: Product[] = [
    {
      id: 1,
      name: 'banner1',
      image: product1,
      description: 'Newarrivals',
      category: ['banner'],
      indication: 'No described.',
      action: 'No described.',
      activeIngredients: 'No described..',
      benefits: 'No described.',
      composition: 'No described.',
      price: 0,
    },

    {
      id: 2,
      name: 'banner2',
      image: product2,
      description: 'Newarrivals - meus cachos de cinema',
      category: ['banner'],
      indication: 'No described.',
      action: 'No described.',
      activeIngredients: 'No described..',
      benefits: 'No described.',
      composition: 'No described.',
      price: 0,
    },

    {
      id: 3,
      name: 'banner3',
      image: product3,
      description: 'Newarrivals - santo-black-poderoso',
      category: ['banner'],
      indication: 'No described.',
      action: 'No described.',
      activeIngredients: 'No described..',
      benefits: 'No described.',
      composition: 'No described.',
      price: 0,
    },

    {
      id: 4,
      name: 'banner4',
      image: product4,
      description: 'Newarrivals - Babosao',
      category: ['banner'],
      indication: 'No described.',
      action: 'No described.',
      activeIngredients: 'No described..',
      benefits: 'No described.',
      composition: 'No described.',
      price: 0,
    },

    {
      id: 5,
      name: 'product5',
      image: product5,
      description: 'Novex Super Babosão Conditioner 300ML',
      category: ['Conditioner'],
      indication: 'Suitable for all hair types',
      action:
        'Aloe Vera is a moisturizing agent that provides shine and softness to the hair.',
      activeIngredients: 'Aloe Vera (Aloe barbadensis) and Hydrovance.',
      benefits:
        'Hydrovance is an active ingredient that works on the hair fiber from the cuticle to the core, providing hydration, repair, strengthening, improved feel, frizz & volume control, natural look, and softness.',
      composition:
        'AQUA (Water), CETEARYL ALCOHOL, ZEA MAYS STARCH (Corn Starch), BUTYROSPERMUM PARKII BUTTER (Shea Butter), GLYCINE SOJA OIL (Soybean Oil), CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM (Perfume), ALCOHOL, HYDROXYETHYL UREA, BENZOIC ACID, BHT, CETEARETH-60 MYRISTYL GLYCOL, ALOE BARBADENSIS LEAF EXTRACT (Aloe Vera Leaf Extract), HEXYL CINNAMAL, SORBIC ACID, LINALOOL, BUTYLPHENYL METHYLPROPIONAL, SORBITOL, D-LIMONENE, TOCOPHERYL ACETATE, LACTIC ACID, POTASSIUM SORBATE, SODIUM BENZOATE.',
      price: 9.99,
    },

    {
      id: 6,
      name: 'product6',
      image: product6,
      description: 'Novex Coconut Oil Conditioner 300ML',
      category: ['Conditioner'],
      indication: 'Recommended for dry hair.',
      action: 'Leaves hair deeply hydrated, soft, and with a stunning shine.',
      activeIngredients: 'Coconut Oil.',
      benefits:
        'Its nourishing action is ideal for all hair types. In addition to deeply penetrating the strands, Coconut Oil is excellent for providing added softness, hydration, protection, and shine.',
      composition:
        'AQUA (Water), CETEARYL ALCOHOL, GLYCERIN, ZEA MAYS STARCH (Corn Starch), GLYCINE SOJA OIL (Soybean Oil), CETRIMONIUM CHLORIDE, ALCOHOL, BENZYL ALCOHOL, PARFUM (Perfume), BUTYROSPERMUM PARKII BUTTER (Shea Butter), HYDROXYETHYL UREA, BENZOIC ACID, COCOS NUCIFERA OIL (Coconut Oil), BHT (Butylated Hydroxytoluene), SORBIC ACID, PEG-90M, LINALOOL, HYDROGENATED CASTOR OIL/SEBACIC ACID COPOLYMER, LACTIC ACID, PHENOXYETHANOL, TOCOPHERYL ACETATE',
      price: 9.99,
    },

    {
      id: 7,
      name: 'product7',
      image: product7,
      description: 'Novex My Powerful Holy Black Curls Conditioner 300ML',
      category: ['Conditioner'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'Hydrated curls, no split ends, with shine and volume.',
      activeIngredients: 'Baobab Seed Oil',
      benefits: 'Baobab Seed Oil has a high hydrating power.',
      composition:
        'AQUA (Water), CETEARYL ALCOHOL, ZEA MAYS STARCH (Corn Starch), BUTYROSPERMUM PARKII BUTTER (Shea Butter), CETRIMONIUM CHLORIDE, GLYCINE SOJA OIL (Soybean Oil), PARFUM (Perfume), BENZYL ALCOHOL, ALCOHOL, HYDROXYETHYL UREA, CETEARETH-60 MYRISTYL GLYCOL, BENZOIC ACID, BHT, D-LIMONENE, HEXYL CINNAMAL, SORBIC ACID, LINALOOL, BUTYLPHENYL METHYLPROPIONAL, CITRONELLOL, LACTIC ACID, ADANSONIA DIGITATA OIL (Baobab Seed Oil).',
      price: 9.99,
    },

    {
      id: 8,
      name: 'product8',
      image: product8,
      description: 'Novex My Cinema Curls Conditioner 300ML',
      category: ['Conditioner'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'Soft curls, full of shine.',
      activeIngredients:
        'Pure Oils: Argan, Coconut, Flaxseed, Sunflower, Avocado, and Olive',
      benefits:
        'Soft, silky, and lively hair. Wonderful perfume and radiating shine.',
      composition:
        'AQUA (Water), CETEARYL ALCOHOL, BUTYROSPERMUM PARKII BUTTER (Shea Butter), ZEA MAYS STARCH (Corn Starch), CETRIMONIUM CHLORIDE, GLYCINE SOJA OIL (Soybean Oil), PARFUM (Perfume), BENZYL ALCOHOL, ALCOHOL, HYDROXYETHYL UREA, HEXYL CINNAMAL, DISODIUM EDTA, BENZOIC ACID, BHT, CETEARETH-60 MYRISTYL GLYCOL, HYDROXYCITRONELLAL, SORBIC ACID, LINALOOL, D-LIMONENE, LACTIC ACID, HELIANTHUS ANNUUS SEED OIL (Sunflower Seed Oil), HYDROLYZED WHEAT PROTEIN, HYDROLYZED SOY PROTEIN, HYDROLYZED CORN PROTEIN, LINUM USITATISSIMUM SEED OIL (Flaxseed Oil), COCOS NUCIFERA OIL (Coconut Oil), PHENOXYETHANOL, OLEA EUROPAEA FRUIT OIL (Olive Oil), PERSEA GRATISSIMA OIL (Avocado Oil), ARGANIA SPINOSA KERNEL OIL (Argan Oil), MACADAMIA TERNIFOLIA SEED OIL, ROSMARINUS OFFICINALIS LEAF EXTRACT (Rosemary Leaf Extract).',
      price: 9.99,
    },

    {
      id: 9,
      name: 'product9',
      image: product9,
      description: 'Novex My Curls Conditioner 300ML',
      category: ['Conditioner'],
      indication:
        'Suitable for curly, dry, oily, combination, chemically treated, or dyed hair',
      action:
        'This special blend of oils will bring more hydration, nourishment, and a powerful anti-frizz action to your curls.',
      activeIngredients: 'Cranberry and Nutri-functional Oils',
      benefits: 'Memorizing effect.',
      composition:
        'AQUA (Water), CETEARYL ALCOHOL, BUTYROSPERMUM PARKII BUTTER (Shea Butter), ZEA MAYS STARCH (Corn Starch), GLYCINE SOJA OIL (Soybean Oil), CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM (Perfume), ALCOHOL, HYDROXYETHYL UREA, BENZOIC ACID, BHT, CETEARETH-60 MYRISTYL GLYCOL, SORBIC ACID, HEXYL CINNAMAL, LACTIC ACID, TOCOPHERYL ACETATE, HELIANTHUS ANNUUS SEED OIL (Sunflower Seed Oil), GLYCERIN, LINUM USITATISSIMUM SEED OIL (Flaxseed Oil), COCOS NUCIFERA OIL (Coconut Oil), OLEA EUROPAEA FRUIT OIL (Olive Oil), PERSEA GRATISSIMA OIL (Avocado Oil), ARGANIA SPINOSA KERNEL OIL (Argan Oil), MACADAMIA TERNIFOLIA SEED OIL, LYCIUM BARBARUM FRUIT EXTRACT (Goji Berry Fruit Extract), VACCINIUM MYRTILLUS FRUIT EXTRACT (Blueberry Fruit Extract), VACCINIUM MACROCARPON FRUIT EXTRACT (Cranberry Fruit Extract), ROSMARINUS OFFICINALIS LEAF EXTRACT (Rosemary Leaf Extract), SODIUM BENZOATE, POTASSIUM SORBATE.',
      price: 9.99,
    },

    {
      id: 10,
      name: 'product10',
      image: product10,
      description: 'Novex Olive Oil and Rosemary Conditioner 300ML',
      category: ['Conditioner'],
      indication: 'Recommended for weak, dry, and brittle hair.',
      action: 'Nourished, hydrated hair that is delightfully soft!.',
      activeIngredients: 'Olive Oil and Rosemary',
      benefits: 'Free of Parabens, Petrolatums, and Silicones.',
      composition:
        'AQUA (Water), CETEARYL ALCOHOL, GLYCINE SOJA OIL (Soybean Oil), GLYCERIN, BENZYL ALCOHOL, ZEA MAYS STARCH (Corn Starch), CETRIMONIUM CHLORIDE, ALCOHOL, BUTYROSPERMUM PARKII BUTTER (Shea Butter), PARFUM (Perfume), HYDROXYETHYL UREA, OLEA EUROPAEA FRUIT OIL (Olive Oil), BENZOIC ACID, PROPYLENE GLYCOL, BHT, HEXYL CINNAMAL, SORBIC ACID, PEG-90M, ROSMARINUS OFFICINALIS LEAF EXTRACT (Rosemary Leaf Extract), BENZYL SALICYLATE, LINALOOL, PHENOXYETHANOL, HYDROGENATED CASTOR OIL/SEBACIC ACID COPOLYMER, LACTIC ACID, TOCOPHERYL ACETATE, CI 15510 (Orange Dye 15510), SODIUM SULFATE, CI 47005 (Quinoline Yellow Aluminum Lake), CI 42090 (Brilliant Blue), CI 19140 (Tartrazine Yellow).',
      price: 9.99,
    },

    {
      id: 11,
      name: 'product11',
      image: product11,
      description: 'Novex My Intense Curls Leave-In Conditioner 500ML',
      category: ['Leave-In', 'Best Seller'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'You with a fabulous curl!',
      activeIngredients: 'Curl Memorizing Effect and Sunscreen Protection.',
      benefits: 'Free of salt, sulfate, and parabens.',
      composition:
        'AQUA, CETEARYL ALCOHOL, PARAFFINUM LIQUIDUM, GLYCERIN, PETROLATUM, CETRIMONIUM CHLORIDE, BEHENTRIMONIUM CHLORIDE, POLYQUATERNIUM-55, CYCLOPENTASILOXANE, DMDM HYDANTOIN, PHENOXYETHANOL, PARFUM, AMYL CINNAMAL, BENZYL BENZOATE, CINNAMAL, CINNAMYL ALCOHOL, CITRAL, COUMARIN, D-LIMONENE, EUGENOL, HEXYL CINNAMAL, LINALOOL, CETEARETH-20, HYDROXYETHYLCELLULOSE, ALPHA-ISOMETHYL IONONE, BENZYL SALICYLATE, BUTYLPHENYL METHYLPROPIONAL, CITRONELLOL, GERANIOL, HYDROXYCITRONELLAL, HYDROXYISOHEXYL 3-CYCLOHEXENE-CARBOXALDEHYDE, DISODIUM EDTA, HYDROXYETHYL UREA, DIMETHICONE, BHT, ACHILLEA MILLEFOLIUM EXTRACT, ACHYROCLINE SATUREIODES FLOWER EXTRACT, FABIANA IMBRICATA LEAF / STEM EXTRACT, VERBASCUM THAPSUS EXTRACT, ARGININE, ARGANIA SPINOSA KERNEL OIL, BUTYROSPERM PARKII BUTTER, MACADAMIA TERNIFOLIA SEED OIL, OLEA EUROPAEA FRUIT OIL, LYCIUM BARBARUM FRUIT EXTRACT, SODIUM PCA, VACCINIUM MACROCARPON FRUIT EXTRACT, VACCINIUM MYRTILLUS FRUIT EXTRACT, BUTYLENE GLYCOL, POTASSIUM SORBATE, SODIUM BENZOATE, RHODIOLA ROSEA ROOT EXTRACT, ROSA CENTIFOLIA FLOWER EXTRACT, ROSA GALLICA FLOWER EXTRACT, BENZYL ALCOHOL.',
      price: 7.0,
    },

    {
      id: 12,
      name: 'product12',
      image: product12,
      description:
        'Novex My Powerful Holy Black Curls Leave-In Conditioner 500ML',
      category: ['Leave-In'],
      indication: 'For wavy, curly, and kinky hair.',
      action:
        'Its formula is enriched with the potent Baobab Seed Oil, known for its miraculous hydrating power',
      activeIngredients: 'Baobab Seed Oil.',
      benefits: 'Free of parabens, petrolatum, silicones, and sulfates.',
      composition:
        'AQUA, CETEARYL ALCOHOL, ISOPROPYL MYRISTATE, GLYCERIN, BUTYROSPERMUM PARKII BUTTER, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM, ALCOHOL, CETEARETH-20, DICAPRYLYL CARBONATE, HYDROXYETHYLCELLULOSE, DISODIUM EDTA, BENZOIC ACID, BHT, HYDROXYETHYL UREA, D-LIMONENE, HEXYL CINNAMAL, POLYQUATERNIUM-55, SORBIC ACID, PEG-90M, LINALOOL, BUTYLPHENYL METHYLPROPIONAL, SODIUM ACETATE, PHENOXYETHANOL, CITRONELLOL, ALPHA-ISOMETHYL IONONE, ADANSONIA DIGITATA OIL, CELLULOSE, CAPRYLYL GLYCOL, CITRAL, GERANIOL, TOCOPHEROL.',
      price: 7.99,
    },

    {
      id: 13,
      name: 'product13',
      image: product13,
      description: 'Novex My Cinema Curls Leave-In Conditioner 1KG',
      category: ['Leave-In'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'You are the star!',
      activeIngredients:
        'Olive Oil, Coconut Oil, Argan Oil, and Macadamia Oil.',
      benefits:
        'Luscious, shiny, and bouncy curls, soft to the touch and beautifully scented.',
      composition:
        'AQUA, CETEARYL ALCOHOL, GLYCERIN, GLYCINE SOJA OIL, PROPYLENE GLYCOL, GLYCERYL STEARATE, BUTYROSPERMUM PARKII BUTTER, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM, ALCOHOL, CETEARETH-20, HYDROXYETHYLCELLULOSE, DISODIUM EDTA, HEXYL CINNAMAL, POLYURETHANE-14, BENZOIC ACID, BHT, HYDROXYETHYL UREA, AMP-ACRYLATES COPOLYMER, SORBIC ACID, HYDROXYCITRONELLAL, LINALOOL, SODIUM ACETATE, D-LIMONENE, PEG-90M, PHENOXYETHANOL, CITRONELLOL, CELLULOSE, COUMARIN, FABIANA IMBRICATA LEAF/STEM EXTRACT, ACHILLEA MILLEFOLIUM EXTRACT, ACHYROCLINE SATUREIODES FLOWER EXTRACT, VERBASCUM THAPSUS EXTRACT, HELIANTHUS ANNUUS SEED OIL, ARGININE, CITRAL, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, HYDROLYZED WHEAT PROTEIN, SODIUM PCA, BENZYL BENZOATE, HYDROLYZED SOY PROTEIN, HYDROLYZED CORN PROTEIN, GERANIOL, AMYL CINNAMAL, PERSEA GRATISSIMA OIL, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, OLEA EUROPAEA FRUIT OIL, AMYLCINNAMYL ALCOHOL, CINNAMYL ALCOHOL, CINNAMAL, ROSMARINUS OFFICINALIS LEAF EXTRACT, BENZYL SALICYLATE.',
      price: 12.99,
    },

    {
      id: 14,
      name: 'product14',
      image: product14,
      description: 'Novex My Cinema Curls Leave-In Conditioner 500ML',
      category: ['Leave-In'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'You are the star!',
      activeIngredients:
        'Olive Oil, Coconut Oil, Argan Oil, and Macadamia Oil.',
      benefits:
        'Luscious, shiny, and bouncy curls, soft to the touch and beautifully scented.',
      composition:
        'AQUA, CETEARYL ALCOHOL, GLYCERIN, GLYCINE SOJA OIL, PROPYLENE GLYCOL, GLYCERYL STEARATE, BUTYROSPERMUM PARKII BUTTER, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM, ALCOHOL, CETEARETH-20, HYDROXYETHYLCELLULOSE, DISODIUM EDTA, HEXYL CINNAMAL, POLYURETHANE-14, BENZOIC ACID, BHT, HYDROXYETHYL UREA, AMP-ACRYLATES COPOLYMER, SORBIC ACID, HYDROXYCITRONELLAL, LINALOOL, SODIUM ACETATE, D-LIMONENE, PEG-90M, PHENOXYETHANOL, CITRONELLOL, CELLULOSE, COUMARIN, FABIANA IMBRICATA LEAF/STEM EXTRACT, ACHILLEA MILLEFOLIUM EXTRACT, ACHYROCLINE SATUREIODES FLOWER EXTRACT, VERBASCUM THAPSUS EXTRACT, HELIANTHUS ANNUUS SEED OIL, ARGININE, CITRAL, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, HYDROLYZED WHEAT PROTEIN, SODIUM PCA, BENZYL BENZOATE, HYDROLYZED SOY PROTEIN, HYDROLYZED CORN PROTEIN, GERANIOL, AMYL CINNAMAL, PERSEA GRATISSIMA OIL, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, OLEA EUROPAEA FRUIT OIL, AMYLCINNAMYL ALCOHOL, CINNAMYL ALCOHOL, CINNAMAL, ROSMARINUS OFFICINALIS LEAF EXTRACT, BENZYL SALICYLATE.',
      price: 9.99,
    },

    {
      id: 15,
      name: 'product15',
      image: product15,
      description: 'Novex My Loose Curls Leave-In Conditioner 500ML',
      category: ['Leave-In'],
      indication: 'Recommended for curly hair.',
      action: 'You rocking those powerful curls!',
      activeIngredients: 'Enriched with Cranberry.',
      benefits:
        'With Curl Memory Effect. Sun Protection. Free of salt, sulfates, parabens, silicones, and petrolatum.',
      composition:
        'AQUA, CETEARYL ALCOHOL, ISOPROPYL PALMITATE, BUTYROSPERMUM PARKII BUTTER, CETRIMONIUM CHLORIDE, GLYCINE SOJA OIL, BENZYL ALCOHOL, GLYCERIN, PARFUM, ALCOHOL, HYDROXYETHYL UREA, DIISOPROPYL ADIPATE, CETEARETH-20, HYDROXYETHYLCELLULOSE, DISODIUM EDTA, CETEARETH-60 MYRISTYL GLYCOL, BENZOIC ACID, BHT, SORBIC ACID, PEG-90M, SODIUM ACETATE, HEXYL CINNAMAL, PHENOXYETHANOL, BUTYLPHENYL METHYLPROPIONAL, BENZYL SALICYLATE, LINALOOL, HELIANTHUS ANNUUS SEED OIL, D-LIMONENE, CELLULOSE, COUMARIN, ALPHA-ISOMETHYL IONONE, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, GERANIOL, HYDROXYCITRONELLAL, VERBASCUM THAPSUS EXTRACT, FABIANA IMBRICATA LEAF/STEM EXTRACT, ACHILLEA MILLEFOLIUM EXTRACT, ACHYROCLINE SATUREIODES FLOWER EXTRACT, ARGININE, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, OLEA EUROPAEA FRUIT OIL, PERSEA GRATISSIMA OIL, CITRONELLOL, SODIUM PCA, BENZYL BENZOATE, VACCINIUM MYRTILLUS FRUIT EXTRACT, VACCINIUM MACROCARPON FRUIT EXTRACT, LYCIUM BARBARUM FRUIT EXTRACT, CITRAL, AMYL CINNAMAL, ROSMARINUS OFFICINALIS LEAF EXTRACT, POTASSIUM SORBATE, SODIUM BENZOATE, EUGENOL, ISOEUGENOL.',
      price: 7.0,
    },

    {
      id: 16,
      name: 'product16',
      image: product16,
      description: 'Novex My Vibrant Curls Leave-In Conditioner 500ML',
      category: ['Leave-In', 'Best Seller'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, or dyed hair.',
      action: 'Your powerful curls!',
      activeIngredients: 'With sun protection.',
      benefits: 'Curl memory effect. Free of salt, sulfates, and parabens.',
      composition:
        'AQUA, CETEARYL ALCOHOL, PARAFFINUM LIQUIDUM, GLYCERIN, PETROLATUM, CETRIMONIUM CHLORIDE, BEHENTRIMONIUM CHLORIDE, CYCLOPENTASILOXANE, DMDM HYDANTOIN, PHENOXYETHANOL, POLYQUATERNIUM-55, CETEARETH-20, HYDROXYETHYLCELLULOSE, PARFUM, ALPHA-ISOMETHYL IONONE, AMYL CINNAMAL, BENZYL ALCOHOL, BENZYL BENZOATE, BUTYLPHENYL METHYLPROPIONAL, CITRAL, CITRONELLOL, D-LIMONENE, GERANIOL, HEXYL CINNAMAL, LINALOOL, BENZYL SALICYLATE, COUMARIN, EUGENOL, HYDROXYCITRONELLAL, HYDROXYISOHEXYL 3-CYCLOHEXENE-CARBOXALDEHYDE, BENZYL CINNAMATE, CINNAMAL, CINNAMYL ALCOHOL, ISOEUGENOL, DISODIUM EDTA, HYDROXYETHYL UREA, DIMETHICONE, BHT, ACHILLEA MILLEFOLIUM EXTRACT, ACHYROCLINE SATUREIODES FLOWER EXTRACT, FABIANA IMBRICATA LEAF / STEM EXTRACT, VERBASCUM THAPSUS EXTRACT, ARGININE, ARGANIA SPINOSA KERNEL OIL, COCOS NUCIFERA OIL, SODIUM PCA, BUTYLENE GLYCOL, RHODIOLA ROSEA ROOT EXTRACT, ROSA CENTIFOLIA FLOWER EXTRACT, ROSA GALLICA FLOWER EXTRACT, GARDENIA TAHITENSIS FLOWER EXTRACT, LYCIUM BARBARUM FRUIT EXTRACT, VACCINIUM MACROCARPON FRUIT EXTRACT, VACCINIUM MYRTILLUS FRUIT EXTRACT, POTASSIUM SORBATE, SODIUM BENZOATE.',
      price: 7.0,
    },

    {
      id: 17,
      name: 'product17',
      image: product17,
      description: 'Novex Super Babosão Treatment Kit',
      category: ['Kit'],
      indication: 'Recommended for repair and hydration of dry hair.',
      action:
        'Hair super hydrated, revitalized, and shiny. You with an extra dose of power!',
      activeIngredients: 'Aloe Vera and Hydrovance.',
      benefits:
        'Aloe Vera is a hydrating active ingredient that provides shine and softness to the hair.',
      composition: 'No described',
      price: 24.99,
    },

    {
      id: 18,
      name: 'product18',
      image: product18,
      description: 'Novex Olive Oil and Rosemary Treatment Kit',
      category: ['Kit'],
      indication: 'Recommended for weak, dry, and brittle hair.',
      action: 'Hair restored, hydrated, and protected at any time.',
      activeIngredients: 'Olive Oil and Rosemary.',
      benefits:
        'Penetrates deeply into the hair fiber, providing deep hydration, nourishment, softness, and protection.',
      composition: 'No described',
      price: 24.99,
    },

    {
      id: 19,
      name: 'product19',
      image: product19,
      description: 'Novex My Powerful Holy Black Curls Daily Treatment Kit',
      category: ['Kit'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, dyed, dull, split ends, and frizzy hair.',
      action: 'Hydrated, soft, shiny hair without split ends, knots, or frizz.',
      activeIngredients: 'Baobab Seed Oil.',
      benefits:
        'Ideal for curly hair suffering from dryness and easily absorbed, Baobab Seed Oil stands out for its highly moisturizing action and fantastic emollient power.',
      composition: 'No described',
      price: 24.99,
    },

    {
      id: 20,
      name: 'product20',
      image: product20,
      description: 'Novex Coconut Oil Refill Treatment Kit',
      category: ['Kit'],
      indication:
        'Recommended for curly, dry, combination, chemically treated, and colored hair.',
      action: 'You empowered to shine.',
      activeIngredients: 'Coconut Oil.',
      benefits:
        'We all know that coconut water is a wonder. The delicious coconut pulp is no secret either. Besides that, coconut oil brings many benefits to the health and beauty of hair.',
      composition: 'No described',
      price: 24.99,
    },

    {
      id: 21,
      name: 'product21',
      image: product21,
      description: 'Novex My Curls Kit',
      category: ['Kit', 'Best Seller'],
      indication:
        'Suitable for curly, dry, oily, combination, chemically treated, or dyed hair',
      action:
        'This special blend of oils will bring more hydration, nourishment, and a powerful anti-frizz action to your curls.',
      activeIngredients: 'Cranberry and Nutri-functional Oils',
      benefits: 'Memorizing effect.',
      composition: 'No described',
      price: 35.0,
    },

    {
      id: 22,
      name: 'product22',
      image: product22,
      description: 'Novex Super Babosão Treatment Cream 400g',
      category: ['Treatment'],
      indication: 'Suitable for all hair types.',
      action: 'You with an extra dose of power!',
      activeIngredients: 'Aloe Vera and Hydrovance.',
      benefits:
        'Aloe Vera is a moisturizing agent that provides shine and softness to the hair. Hydrovance is an active ingredient that acts on the hair fiber from the cuticle to the medulla, providing hydration, repair, strengthening, improved sensory feel, frizz & volume control, natural appearance, and softness.',
      composition:
        'AQUA, CETEARYL ALCOHOL, ZEA MAYS STARCH, BUTYROSPERMUM PARKII BUTTER, GLYCINE SOJA OIL, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM, ALCOHOL, HYDROXYETHYL UREA, BENZOIC ACID, BHT, CETEARETH-60 MYRISTYL GLYCOL, ALOE BARBADENSIS LEAF EXTRACT, HEXYL CINNAMAL, SORBIC ACID, LINALOOL, BUTYLPHENYL METHYLPROPIONAL, SORBITOL, D-LIMONENE, TOCOPHERYL ACETATE, LACTIC ACID, POTASSIUM SORBATE, SODIUM BENZOATE.',
      price: 12.99,
    },

    {
      id: 23,
      name: 'product23',
      image: product23,
      description: 'Novex Olive Oil and Rosemary Treatment Cream 400g',
      category: ['Treatment', 'Best Seller'],
      indication: 'Recommended for weak, dry, and brittle hair.',
      action: 'Hydrated, nourished, and protected hair.',
      activeIngredients: 'Olive Oil and Rosemary.',
      benefits: 'Deep hydration, softness, health, nutrition, and protection.',
      composition:
        'AQUA (WATER), CETEARYL ALCOHOL, BUTYROSPERMUM PARKII BUTTER (SHEA BUTTER), ZEA MAYS STARCH (CORN STARCH), GLYCINE SOJA OIL (SOYBEAN OIL), GLYCERIN, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, ALCOHOL, PARFUM (FRAGRANCE), HYDROXYETHYL UREA, PROPYLENE GLYCOL, BENZOIC ACID, BHT, OLEA EUROPAEA FRUIT OIL (OLIVE OIL), CETEARETH-60 MYRISTYL GLYCOL, SORBIC ACID, HEXYL CINNAMAL, ROSMARINUS OFFICINALIS LEAF EXTRACT (ROSEMARY LEAF EXTRACT), BENZYL SALICYLATE, LINALOOL, TOCOPHERYL ACETATE (VITAMIN E ACETATE), LACTIC ACID, CI 15510 (ORANGE COLORANT 15510), PHENOXYETHANOL, SODIUM SULFATE, CI 47005 (QUINOLINE YELLOW ALUMINUM LAKE), CI 42090 (BRIGHT BLUE), CI 19140 (TARTRAZINE YELLOW).',
      price: 12.99,
    },

    {
      id: 24,
      name: 'product24',
      image: product24,
      description: 'Novex My Powerful Holy Black Curls Treatment Cream 400g',
      category: ['Treatment'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, dyed, dull, split ends, and frizzy hair.',
      action: 'Hydrated, soft, shiny hair with no split ends, knots, or frizz.',
      activeIngredients: 'Baobab Seed Oil.',
      benefits:
        'Ideal for curly hair suffering from dryness and easily absorbed, Baobab Seed Oil is renowned for its highly moisturizing action and fantastic emollient power.',
      composition:
        'AQUA, CETEARYL ALCOHOL, ZEA MAYS STARCH, BUTYROSPERMUM PARKII BUTTER, CETRIMONIUM CHLORIDE, GLYCINE SOJA OIL, PARFUM, BENZYL ALCOHOL, ALCOHOL, HYDROXYETHYL UREA, CETEARETH-60 MYRISTYL GLYCOL, BENZOIC ACID, BHT, D-LIMONENE, HEXYL CINNAMAL, SORBIC ACID, LINALOOL, BUTYLPHENYL METHYLPROPIONAL, CITRONELLOL, LACTIC ACID, ADANSONIA DIGITATA OIL.',
      price: 12.99,
    },

    {
      id: 25,
      name: 'product25',
      image: product25,
      description: 'Novex Coconut Oil Treatment Cream 400g',
      category: ['Treatment'],
      indication: 'Recommended for dry hair.',
      action: 'Hair super hydrated, soft, and with a lot of shine.',
      activeIngredients: '100% Pure Vegetable Coconut Oil.',
      benefits:
        'Nutrition, Hydration, Revitalization, Softness, Protection, and Shine.',
      composition:
        'AQUA (WATER), CETEARYL ALCOHOL, BUTYROSPERMUM PARKII BUTTER (SHEA BUTTER), ZEA MAYS STARCH (CORN STARCH), GLYCINE SOJA OIL (SOYBEAN OIL), GLYCERIN, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM (FRAGRANCE), ALCOHOL, HYDROXYETHYL UREA, BENZOIC ACID, BHT, COCOS NUCIFERA OIL (COCONUT OIL), CETEARETH-60 MYRISTYL GLYCOL, SORBIC ACID, LINALOOL, LACTIC ACID, TOCOPHERYL ACETATE.',
      price: 12.99,
    },

    {
      id: 26,
      name: 'product26',
      image: product26,
      description: 'Novex My Cinema Curls Treatment Cream 400g',
      category: ['Treatment'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action:
        'You smile once again and continue looking beautiful, confident, and powerful. ',
      activeIngredients:
        'Purest Oils: Argan, Coconut, Flaxseed, Sunflower, Avocado, and Olive.',
      benefits:
        'Soft, hydrated, silky, and vibrant hair. Wonderful fragrance and radiant shine.',
      composition:
        'AQUA, CETEARYL ALCOHOL, BUTYROSPERMUM PARKII BUTTER, ZEA MAYS STARCH, CETRIMONIUM CHLORIDE, GLYCINE SOJA OIL, PARFUM, BENZYL ALCOHOL, ALCOHOL, HYDROXYETHYL UREA, HEXYL CINNAMAL, DISODIUM EDTA, BENZOIC ACID, BHT, CETEARETH-60 MYRISTYL GLYCOL, HYDROXYCITRONELLAL, SORBIC ACID, LINALOOL, D-LIMONENE, LACTIC ACID, HELIANTHUS ANNUUS SEED OIL, HYDROLYZED WHEAT PROTEIN, HYDROLYZED SOY PROTEIN, HYDROLYZED CORN PROTEIN, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, PHENOXYETHANOL, OLEA EUROPAEA FRUIT OIL, PERSEA GRATISSIMA OIL, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, ROSMARINUS OFFICINALIS LEAF EXTRACT.',
      price: 12.99,
    },

    {
      id: 27,
      name: 'product27',
      image: product27,
      description: 'Novex My Curls Treatment Cream 400g',
      category: ['Treatment'],
      indication: 'For all hair types.',
      action:
        'Hydrates and defines curls, controlling volume and reducing frizz. ',
      activeIngredients:
        'With a blend of Nutrifunctional Oils and Cranberry Extract.',
      benefits:
        'Curly hair requires a lot of hydration, so Novex has combined 6 nutrifunctional oils into one product:Olive, Argan, Ojon, Monoi, Coconut, and Shea.',
      composition:
        'AQUA, CETEARYL ALCOHOL, BUTYROSPERMUM PARKII BUTTER, ZEA MAYS STARCH, GLYCINE SOJA OIL, CETRIMONIUM CHLORIDE, BENZYL ALCOHOL, PARFUM, ALCOHOL, HYDROXYETHYL UREA, BENZOIC ACID, BHT, CETEARETH-60 MYRISTYL GLYCOL, SORBIC ACID, HEXYL CINNAMAL, LACTIC ACID, TOCOPHERYL ACETATE, HELIANTHUS ANNUUS SEED OIL, GLYCERIN, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, OLEA EUROPAEA FRUIT OIL, PERSEA GRATISSIMA OIL, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, LYCIUM BARBARUM FRUIT EXTRACT, VACCINIUM MYRTILLUS FRUIT EXTRACT, VACCINIUM MACROCARPON FRUIT EXTRACT, ROSMARINUS OFFICINALIS LEAF EXTRACT, SODIUM BENZOATE, POTASSIUM SORBATE.',
      price: 12.99,
    },

    {
      id: 28,
      name: 'product28',
      image: product28,
      description: 'Vitay Super Babosão Shampoo 300ML',
      category: ['Shampoo'],
      indication: 'Recommended for all hair types.',
      action: 'You with an extra dose of power!',
      activeIngredients: 'Aloe Vera and Hydrovance.',
      benefits:
        'Aloe Vera is a hydrating active ingredient that provides shine and softness to the hair.',
      composition:
        'AQUA, SODIUM LAURETH SULFATE, COCAMIDOPROPYL BETAINE, POTASSIUM CHLORIDE, GLYCOL DISTEARATE, COCAMIDE DEA, PARFUM, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, BENZYL ALCOHOL, PHENOXYETHANOL, DISODIUM EDTA, CHLORPHENESIN, BHT, HYDROXYETHYL UREA, ALOE BARBADENSIS LEAF EXTRACT, HEXYL CINNAMAL, GLYCERIN, POLYQUATERNIUM-7, LINALOOL, LACTIC ACID, BUTYLPHENYL METHYLPROPIONAL, SORBITOL, D-LIMONENE, SODIUM BENZOATE, POTASSIUM SORBATE.',
      price: 9.99,
    },

    {
      id: 29,
      name: 'product29',
      image: product29,
      description: 'Vitay Olive Oil and Rosemary Hydration Shampoo 300ML',
      category: ['Shampoo'],
      indication: 'Recommended for weak, dry, and brittle hair.',
      action: 'Nourished, hydrated hair that is deliciously soft.',
      activeIngredients: 'Olive Oil and Rosemary.',
      benefits: 'Free of Parabens, Silicones, and Petrolatums.',
      composition:
        'AQUA (WATER), SODIUM LAURETH SULFATE, COCAMIDOPROPYL BETAINE, COCAMIDE DEA, POTASSIUM CHLORIDE, BENZYL ALCOHOL, PARFUM (FRAGRANCE), GLYCOL DISTEARATE, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, LAURETH-4, PHENOXYETHANOL, DISODIUM EDTA, CHLORPHENESIN, DMDM HYDANTOIN, PROPYLENE GLYCOL, BHT, GLYCERIN, POLYQUATERNIUM-7, LACTIC ACID, HEXYL CINNAMAL, ROSMARINUS OFFICINALIS LEAF EXTRACT, BENZYL SALICYLATE, BENZOIC ACID, LINALOOL, SODIUM BENZOATE, TOCOPHERYL ACETATE, OLEA EUROPAEA FRUIT OIL.',
      price: 9.99,
    },

    {
      id: 30,
      name: 'product30',
      image: product30,
      description: 'Vitay Novex My Powerful Holy Black Curls Shampoo 300ML',
      category: ['Shampoo'],
      indication:
        'Suitable for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'Hydrated curls, free of split ends, with shine and volume.',
      activeIngredients: 'Baobab Seed Oil.',
      benefits:
        'Completely free: no parabens, petrolatum, silicones, and sulfates.',
      composition:
        'LAQUA, DISODIUM LAURETH SULFOSUCCINATE, COCAMIDE DEA, COCAMIDOPROPYL BETAINE, GLYCERIN, LAURYL GLUCOSIDE, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, PARFUM, PEG/PPG-120/10 TRIMETHYLOLPROPANE TRIOLEATE, LAURETH-2, GLYCOL DISTEARATE, BENZYL ALCOHOL, PHENOXYETHANOL, POLYQUATERNIUM-7, COCO-GLUCOSIDE, DISODIUM EDTA, POTASSIUM CHLORIDE, CHLORPHENESIN, SODIUM BENZOATE, BHT, GLYCERYL STEARATE, GLYCERYL OLEATE, D-LIMONENE, HEXYL CINNAMAL, LINALOOL, BUTYLPHENYL METHYLPROPIONAL, CITRIC ACID, BENZOIC ACID, ADANSONIA DIGITATA OIL.',
      price: 9.99,
    },

    {
      id: 31,
      name: 'product31',
      image: product31,
      description: 'Vitay Coconut Oil Shampoo 300ML',
      category: ['Shampoo' , 'Best Seller'],
      indication: 'Recommended for dry hair.',
      action: 'Hair super hydrated, soft, and with a lot of shine.',
      activeIngredients: 'Coconut Oil.',
      benefits:
        'That coconut water is a wonder, we all know. That coconut pulp is delicious, it has no secret to anyone.',
      composition:
        'AQUA (WATER), SODIUM LAURETH SULFATE, COCAMIDOPROPYL BETAINE, COCAMIDE DEA, POTASSIUM CHLORIDE, PARFUM (FRAGRANCE), GLYCOL DISTEARATE, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, BENZYL ALCOHOL, LAURETH-4, PHENOXYETHANOL, DISODIUM EDTA, CHLORPHENESIN, DMDM HYDANTOIN, BHT, GLYCERIN, POLYQUATERNIUM-7, LACTIC ACID, LINALOOL, BENZOIC ACID, SODIUM BENZOATE, COCOS NUCIFERA OIL (COCONUT OIL).',
      price: 9.99,
    },

    {
      id: 32,
      name: 'product32',
      image: product32,
      description: 'Vitay Novex My Cinema Curls Shampoo 300ML',
      category: ['Shampoo'],
      indication:
        'Recommended for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'Soft, silky, vibrant hair with a radiating shine.',
      activeIngredients:
        'With 6 Purest Oils: Argan, Coconut, Flaxseed, Sunflower, Avocado, and Olive.',
      benefits:
        'Free from parabens, petroleum derivatives, silicones, and sulfates.',
      composition:
        'AQUA, DISODIUM LAURETH SULFOSUCCINATE, COCAMIDE DEA, COCAMIDOPROPYL BETAINE, GLYCERIN, LAURYL GLUCOSIDE, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, PEG/PPG-120/10 TRIMETHYLOLPROPANE TRIOLEATE, LAURETH-2, PARFUM, GLYCOL DISTEARATE, BENZYL ALCOHOL, PHENOXYETHANOL, POLYQUATERNIUM-7, COCO-GLUCOSIDE, POTASSIUM CHLORIDE, DISODIUM EDTA, HEXYL CINNAMAL, CHLORPHENESIN, SODIUM BENZOATE, BHT, GLYCERYL STEARATE, GLYCERYL OLEATE, HYDROXYCITRONELLAL, LINALOOL, D-LIMONENE, CITRIC ACID, BENZOIC ACID, HYDROLYZED WHEAT PROTEIN, HYDROLYZED SOY PROTEIN, HYDROLYZED CORN PROTEIN, BUTYROSPERMUM PARKII BUTTER, HELIANTHUS ANNUUS SEED OIL, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, OLEA EUROPAEA FRUIT OIL, PERSEA GRATISSIMA OIL, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, ROSMARINUS OFFICINALIS LEAF EXTRACT.',
      price: 9.99,
    },

    {
      id: 33,
      name: 'product33',
      image: product33,
      description: 'Vitay My Curls Shampoo 300ML',
      category: ['Shampoo', 'Best Seller'],
      indication:
        'Suitable for curly, dry, oily, combination, chemically treated, and dyed hair.',
      action: 'You are ready to enjoy life with well-hydrated hair.',
      activeIngredients: 'Cranberry and Nutrifunctional Oils.',
      benefits:
        'The benefits that oils can bring to hair are well-known. That is why Vitay has combined the properties of various types of these nutrifunctional actives (olive, argan, ojon, monoi, coconut, and shea) in one product.',
      composition:
        'AQUA, DISODIUM LAURETH SULFOSUCCINATE, COCAMIDE DEA, COCAMIDOPROPYL BETAINE, LAURYL GLUCOSIDE, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, PARFUM, LAURETH-2, PEG/PPG-120/10 TRIMETHYLOLPROPANE TRIOLEATE, GLYCOL DISTEARATE, BENZYL ALCOHOL, PHENOXYETHANOL, POLYQUATERNIUM-7, COCO-GLUCOSIDE, POTASSIUM CHLORIDE, DISODIUM EDTA, CHLORPHENESIN, SODIUM BENZOATE, BHT, GLYCERIN, GLYCERYL OLEATE, GLYCERYL STEARATE, HEXYL CINNAMAL, CITRIC ACID, BENZOIC ACID, BUTYROSPERMUM PARKII BUTTER, HELIANTHUS ANNUUS SEED OIL, LINUM USITATISSIMUM SEED OIL, COCOS NUCIFERA OIL, VACCINIUM MACROCARPON FRUIT EXTRACT, LYCIUM BARBARUM FRUIT EXTRACT, VACCINIUM MYRTILLUS FRUIT EXTRACT, ARGANIA SPINOSA KERNEL OIL, MACADAMIA TERNIFOLIA SEED OIL, OLEA EUROPAEA FRUIT OIL, PERSEA GRATISSIMA OIL, POTASSIUM SORBATE, ROSMARINUS OFFICINALIS LEAF EXTRACT.',
      price: 9.99,
    },
  ]

  const addToCart = (product: Product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id)
    if (productIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[productIndex].quantity += 1
      setCart(updatedCart)
    } else {
      const updatedProduct = { ...product, quantity: 1 }
      setCart([...cart, updatedProduct])
    }
    console.log(cart)
  }

  return (
    <ProductsContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductsContext.Provider>
  )
}
