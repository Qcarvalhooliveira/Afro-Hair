import { useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react'
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
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault() // Impede o formulário de recarregar a página padrão.
    if (searchQuery.trim() !== '') {
      // Verifica se o campo de pesquisa não está vazio.
      // Redireciona o usuário para a página de resultados da pesquisa, passando a consulta como parâmetro.
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`)
    }
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Impede o evento padrão da tecla Enter.
      handleSearchSubmit(event) // Chama a função de envio.
    }
  }

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
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder={translation.header.search}
          value={searchQuery}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
        />
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
