export interface TranslationData {
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
    liked: string;
    menu: string;
    profile: string;
    shoppingcart: string;
    search: string;
   }
   LoginPortal: {
    signUp: string;
    singIn: string,
    password: string;
    login: string;
    forgotPassword: string;
    email: string;
   }
   dropdownMenu: {
    conditioner: string;
    leaveIn: string;
    kit: string;
    treatment: string;
    shampoo: string;

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
      LoginPortal: {
        signUp: "Sing up",
        singIn: "Sing in",
        password: "Password",
        login: "Login",
        forgotPassword: "Forgot Password?",
        email: "Email",
    },
      header: {
          home: "Home",
          liked: "Liked",
          menu: "Menu",
          profile: "Profile",
          shoppingcart: "Shopping Cart",
          search: "Search",
      },
      dropdownMenu: {
        conditioner: "Conditioner",
        leaveIn: "Leave-In Conditioner",
        kit: "Kit",
        treatment: "Treatment Cream",
        shampoo: "Shampoo",
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
    LoginPortal: {
        signUp: "S'inscrire",
        singIn: "Se connecter",
        password: "Mot de passe",
        login: "Se connecter",
        forgotPassword: "Mot de passe oublie?",
        email: "E-mail",
    },
      header: {
          home: "Accueil",
          liked: "Favoris",
          menu: "Menu",
          profile: "Profil",
          shoppingcart: "Panier",
          search: "Rechercher",
      },
      dropdownMenu: {
        conditioner: "Après-shampoing",
        leaveIn: "Après-shampoing sans rinçage",
        kit: "Coffret",
        treatment: "Creme de traitement",
        shampoo: "Shampoing",
      }
    },
    pt: {
        footer: {
            language: "Idioma",
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
          LoginPortal: {
            signUp: "Cadastre-se",
            singIn: "Entrar",
            password: "Senha",
            login: "Entrar",
            forgotPassword: "Esqueceu a senha?",
            email: "E-mail",

        },
          header: {
              home: "Início",
              liked: "Favoritos",
              menu: "Menu",
              profile: "Perfil",
              shoppingcart: "Carrinho",
              search: "Pesquisar",
          },
          dropdownMenu: {
            conditioner: "Condicionador",
            leaveIn: "Creme para Pentear",
            kit: "Kit",
            treatment: "Creme de tratamento",
            shampoo: "Shampoo",
          }
    }
  };
  
  