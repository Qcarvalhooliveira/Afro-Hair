import {
  Clock,
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  PhoneCall,
  FacebookLogo,
  TwitterLogo,
  Moon,
  Sun,
} from 'phosphor-react'
import brasil from '../../../Imagens/icons/brazil.png'
import france from '../../../Imagens/icons/france.png'
import eua from '../../../Imagens/icons/united-states.png'
import {
  AboutUs,
  Contact,
  FooterContainer,
  Language,
  Links,
  Mode,
} from './styles'
import { HighHeel } from '@phosphor-icons/react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface ThemesType {
  toggleDarkTheme: () => void
  toggleBarbieTheme: () => void
  toggleLightTheme: () => void
}

export function Footer({
  toggleDarkTheme,
  toggleBarbieTheme,
  toggleLightTheme,
}: ThemesType) {
  
  const {  changeLanguage, translation } = useLanguage();
 
  return (
    <FooterContainer>
      <Language>
        <h4>{translation.footer.language}</h4>
        <button onClick={() => changeLanguage('pt')}>
          <img src={brasil} alt="brazil flag" /> <p>Português</p>
        </button>
        <button onClick={() => changeLanguage('fr')}>
          <img src={france} alt="france flag" /> <p>Français</p>
        </button>
        <button onClick={() => changeLanguage('en')}>
          <img src={eua} alt="united-states flag" /> <p>English</p>
        </button>
      </Language>
      <Contact>
        <h4>{translation.footer.contact}</h4>
        <section>
          <div>
            <Clock size={22} />
            <p>{translation.footer.horaire}</p>
          </div>
          <div>
            <div>
              <PhoneCall size={22} />
            </div>
            <div className="phoneNumber">
              <p>(33) 01 55 53 08 76 </p> <p> (33) 06 56 00 01 83</p>
            </div>
          </div>
          <div>
            <a href="https://outlook.live.com/owa/?path=/mail/action/compose&to=afro.hair@outlook.fr" target="_blank">
              <EnvelopeSimple size={22} /> <p> afro.hair@outlook.fr </p>
            </a>
          </div>
          <div>
            <MapPin size={22} /> <p> 30 Av. d'Italie, 75013 Paris</p>
          </div>
        </section>
      </Contact>

      <AboutUs>
        <h4>{translation.footer.aboutUs}</h4>
        <p>
          {translation.footer.aboutUsDescription}
        </p>
      </AboutUs>

      <Links>
        <h4>{translation.footer.links}</h4>
        <section>
          <button>
          <a href="https://www.facebook.com/profile.php?id=61552162576566" target="_blank">
             <FacebookLogo size={22} /> <p>@afrohair</p>
          </a>
          </button>
          <button>
            <a href='https://www.instagram.com/afrohairnovex/' target="_blank">
            <InstagramLogo size={22} /> <p>@afrohair</p>
          </a>
          </button>
          <button>
          <a href="https://twitter.com/AfroHairNovex" target="_blank">
             <TwitterLogo size={22} /> <p>@afrohair</p>
          </a>
          </button>
        </section>
      </Links>

      <Mode>
        <h4>{translation.footer.mode}</h4>
        <section>
          <button onClick={toggleDarkTheme}>
            <Moon size={22} />
            <p>{translation.footer.darkMode}</p>
          </button>
          <button onClick={toggleLightTheme}>
            <Sun size={22} />
            <p>{translation.footer.lightMode}</p>
          </button>
          <button onClick={toggleBarbieTheme}>
            <HighHeel size={22} />
            <p>{translation.footer.barbieMode}</p>
          </button>
        </section>
      </Mode>
    </FooterContainer>
  )
}
