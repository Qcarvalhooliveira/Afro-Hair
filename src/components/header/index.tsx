import { useState, ChangeEvent, FormEvent, KeyboardEvent, useEffect} from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/afro_hair_logo.png'
import { User, Heart, Handbag, List, MagnifyingGlass } from 'phosphor-react'
import { DropdownMenu } from '../dropdownMenu/index.tsx'
import { LoginPortal } from '../LoginPortal/index.tsx'
import { useLanguage } from '../../context/LanguageContext.tsx'
import { useProducts } from '../../context/productContext'
import { useLikedProducts } from '../../context/likedContext.tsx'


export function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const portalRoot = document.getElementById('portal-root');
  
  

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

  const handleUserIconClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsLoginOpen(true)
  }

  const handleClickHeart = () => {
    setLiked(!liked);
  
    if (!liked) {
      // Aqui você pode adicionar lógica para adicionar o produto aos "liked" (talvez usando Redux ou outro sistema de gerenciamento de estado).
      // Por enquanto, vou apenas redirecionar o usuário para a página "liked" como um exemplo.
      navigate('/liked');
    }
  }


useEffect(() => {
  const closePortalsOnOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (menuOpen) {
     
      if (target && !target.closest('.menu')) {
        setMenuOpen(false);
      }
    }

    if (isLoginOpen && portalRoot && !portalRoot.contains(target)  ) {
  
        setIsLoginOpen(false);
      
       
      
    }
  };

  document.addEventListener('click', closePortalsOnOutsideClick);

  return () => {
    document.removeEventListener('click', closePortalsOnOutsideClick);
  };
}, [menuOpen, isLoginOpen, portalRoot]);


  const { translation } = useLanguage()

  const { cart } = useProducts()
  const shoppingCount = cart.reduce((total, item) => total + item.quantity, 0)
  const {likedProducts} = useLikedProducts()
  const likedCount = likedProducts.length

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
        <button className='login'
          title={translation.header.profile}
          onClick={handleUserIconClick}
        >
          <User size={24} />{' '}
        </button>
        <button 
          onClick={handleClickHeart}
          title={translation.header.liked}>
          <Heart size={24} />
          {likedCount > 0 && <span className="liked-count">{likedCount}</span>}
        </button>
        <button
          onClick={handleShoppingCartClick}
          title={translation.header.shoppingcart}
        >
          <Handbag size={24} />
          {shoppingCount > 0 && <span className="shopping-count">{shoppingCount}</span>}
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
          <LoginPortal className='login-portal' onClose={() => setIsLoginOpen(false)} />,
          portalRoot,
        )}
    </HeaderContainer>
  )
}

