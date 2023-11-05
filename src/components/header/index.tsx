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
  
  
//  function setIsLoginError (arg0: boolean) {
//    throw new Error('Function not implemented.')
//  }
  

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

  

  //  const handleCreateUserSubmit = (event: FormEvent) => {
  //    event.preventDefault();
  //    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
  //      // Chame a função createUser para criar o usuário
  //      createUser({name, email, password});
  //    } else {
  //      // Exiba uma mensagem de erro se os campos estiverem vazios
  //      // Por exemplo: setIsCreateUserError(true);
  //    }
  //  };



//  const handleLogin = async (email, password) => {
//    try {
//      const response = await axios.post('/api/login', {
//        email: email,
//        password: password,
//      });
 //   
 //     if (response.status === 200) {
 //       // Login bem-sucedido
 //       // Redirecione o usuário para a página apropriada ou atualize o estado do aplicativo
 //       navigate('/');
 //     } else {
 //        setIsLoginError(true);
 //     }
 //   } catch (error) {
 //     // Lide com erros de solicitação
 //     console.error('Failed to make your login. Please try again.', error);
 //   }
 // };

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

    if (isLoginOpen) {
      
      if (target && !target.closest('.login')) {
        setIsLoginOpen(false);
      }
    }
  };

  document.addEventListener('click', closePortalsOnOutsideClick);

  return () => {
    document.removeEventListener('click', closePortalsOnOutsideClick);
  };
}, [menuOpen, isLoginOpen]);




  const portalRoot = document.getElementById('portal-root')

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
          <LoginPortal onClose={() => setIsLoginOpen(false)} />,
          portalRoot,
        )}
    </HeaderContainer>
  )
}

