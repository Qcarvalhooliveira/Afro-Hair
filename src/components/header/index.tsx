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
import axios from 'axios'


export function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const [userName, setUserName] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
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

  useEffect(() => {
    // O token é normalmente o indicador de que um usuário está logado
    const authToken = localStorage.getItem('authToken');
    setIsUserLoggedIn(!!authToken); // !! converte o valor para booleano
  
    // Se o authToken existe, presumimos que o nome do usuário também deve existir.
    if (authToken) {
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }
  }, []);

  const handleDeleteAccount = async () => {
    const userId = localStorage.getItem('userId');
    const authToken = localStorage.getItem('authToken');

    try {
      const response = await axios.delete(`http://localhost:3333/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      if (response.status === 202) {
        alert('Conta deletada com sucesso.');
        handleLogout(); // Chama a função de logout
      }
    } catch (error) {
      alert('Erro ao deletar a conta.');
      console.error(error);
    }
  }

  const handleLogout = () => {
    // Limpa o local storage e atualiza o estado do componente
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    setIsUserLoggedIn(false);
    setUserName('');
    navigate('/'); // Redireciona para a página inicial
  }

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
      {isUserLoggedIn && (
        <div className="user-greeting">
          <span>Hello, {userName}!</span>
          <span>
          <button className='delete-account' onClick={handleDeleteAccount}>Delete account</button>
          <button className='logout' onClick={handleLogout}>Disconnect</button>
          </span>
          
        </div>
      )}
      <div className="icons">
      <button className='login'
          title={translation.header.profile}
          onClick={handleUserIconClick}
        >
          <User size={24} />{' '}
        </button>
        <div className="icon-container">
    <button onClick={handleClickHeart} title={translation.header.liked}>
      <Heart size={24} />
      {likedCount > 0 && <span className="icon-count">{likedCount}</span>}
    </button>
  </div>
  <div className="icon-container">
    <button onClick={handleShoppingCartClick} title={translation.header.shoppingcart}>
      <Handbag size={24} />
      {shoppingCount > 0 && <span className="icon-count">{shoppingCount}</span>}
    </button>
  </div>
      </div>
       
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
          <LoginPortal className='login-portal' onClose={() => setIsLoginOpen(false)}  onLoginSuccess={(userName) => {
            setUserName(userName);
            setIsUserLoggedIn(true);
          }} />,
          portalRoot,
        )}
    </HeaderContainer>
  )
}

