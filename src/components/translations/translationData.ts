interface TranslationData {
    footer: {
      language: string;
      contact: string;
      aboutUs: string;
      links: string;
      mode: string;
      horaire: string
    };
    // Outras chaves e traduções aqui
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
      },
      // ...
    },
    // ...
  };
  
  