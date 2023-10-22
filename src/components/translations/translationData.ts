interface TranslationData {
    footer: {
      language: string;
      contact: string;
      aboutUs: string;
      links: string;
      mode: string;
      horaire: string;
      aboutUsDescription: string;
      darkMode: string;
      lightMode: string;
      barbieMode: string;
    };
   header: {
    home: string;
   }
  }
  
  export const translationData: Record<string, TranslationData> = {
    en: {
      footer: {
        language: "Language",
        contact: "Contact",
        aboutUs: "About us",
        links: "Links",
        mode: "Mode",
        horaire: "Monday to Friday, from 9am to 5pm.",
        aboutUsDescription: "Welcome to Afrohair, your premier destination for high-quality hair products tailored to the unique needs of afro-textured hair. We are passionate about celebrating the beauty and diversity of natural hair, and our mission is to provide a curated selection of products that enhance and nourish afro hair.",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        barbieMode: "Barbie Mode",


        
      },
      header: {
          home: "Home"
      }
    },

    fr: {
      footer: {
        language: "Langue",
        contact: "Contact",
        aboutUs: "À Propos",
        links: "Liens",
        mode: "Mode",
        horaire: "Du lundi au vendredi, de 9h00 à 17h30.",
        aboutUsDescription: "Bienvenue chez Afrohair, votre destination de choix pour des produits capillaires de haute qualité adaptés aux besoins uniques des cheveux afro-texturés. Nous sommes passionnés par la célébration de la beauté et de la diversité des cheveux naturels, et notre mission est de proposer une sélection de produits qui améliorent et nourrissent les cheveux afro.",
        darkMode: "Mode Sombre",
        lightMode: "Mode Lumineux",
        barbieMode: "Mode Barbie",
    },
      header: {
          home: "Accueil"
      }
    },
    pt: {
        footer: {
            language: "idioma",
            contact: "Contato",
            aboutUs: "Sobre nos",
            links: "Links",
            mode: "Modo",
            horaire: "De segunda à sexta-feira, de 9h00 à 17h30.",
            aboutUsDescription: "Bem-vindo ao Afrohair, seu destino principal para produtos capilares de alta qualidade, adaptados às necessidades únicas dos cabelos afro-texturizados. Somos apaixonados por celebrar a beleza e a diversidade dos cabelos naturais, e nossa missão é fornecer uma seleção cuidadosamente elaborada de produtos que realçam e nutrem os cabelos afro.",
            darkMode: "Modo Escuro",
            lightMode: "Modo Claro",
            barbieMode: "Modo Barbie",
          },
          header: {
              home: "Início"
          }
    }
  };
  
  