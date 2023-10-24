import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/afro_hair_logo.png'
import { User, Heart, Handbag, List, MagnifyingGlass } from 'phosphor-react'
import { DropdownMenu } from '../dropdownMenu/index.tsx'
import LoginPortal from '../LoginPortal/index.tsx'
import { useLanguage } from '../../context/LanguageContext.tsx'
import { useProducts } from '../../context/productContext'

export function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const isUserLoggedIn = true // Para fazer mais tarde, verificar o login
  const handleLogoClick = () => {
    navigate('/')
  }

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleShoppingCartClick = () => {
    if (isUserLoggedIn) {
      navigate('/checkout')
    } else {
      setIsLoginOpen(true)
    }
  }

  const handleUserIconClick = () => {
    setIsLoginOpen(true)
  }

  const portalRoot = document.getElementById('portal-root')

  const { translation } = useLanguage()

  const { cart } = useProducts()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <HeaderContainer>
      <button
        className="menu"
        title={translation.header.menu}
        onClick={handleMenuClick}
      >
        <List size={24} />
      </button>
      <button
        className="Home"
        onClick={handleLogoClick}
        title={translation.header.home}
      >
        <img src={logo} alt="afrohairLogo" />
      </button>
      <div>
        <button
          title={translation.header.profile}
          onClick={handleUserIconClick}
        >
          <User size={24} />{' '}
        </button>
        <button title={translation.header.liked}>
          <Heart size={24} />
        </button>
        <button
          onClick={handleShoppingCartClick}
          title={translation.header.shoppingcart}
        >
          <Handbag size={24} />{' '}
          {itemCount > 0 && <span className="item-count">{itemCount}</span>}
        </button>
      </div>
      <form action="">
        <input type="text" placeholder={translation.header.search} />
        <MagnifyingGlass size={12} className="search-icon" />
      </form>

      {portalRoot !== null &&
        createPortal(
          menuOpen ? <DropdownMenu isOpen={menuOpen} /> : null,
          portalRoot,
        )}

      {isLoginOpen &&
        portalRoot !== null &&
        createPortal(
          <LoginPortal onClose={() => setIsLoginOpen(false)} />,
          portalRoot,
        )}
    </HeaderContainer>
  )
}
