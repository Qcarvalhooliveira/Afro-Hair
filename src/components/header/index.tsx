import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './styles';
import logo from '../../assets/afro_hair_logo.png';
import { User, Heart, Handbag, List, MagnifyingGlass } from 'phosphor-react';
import  { DropdownMenu }  from '../dropdownMenu/index.tsx';
import LoginPortal from '../LoginPortal/index.tsx';


export function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const isUserLoggedIn = true; // Assume you have a way to check if the user is logged in

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleShoppingCartClick = () => {
    if (isUserLoggedIn) {
      navigate('/checkout');
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleUserIconClick = () => {
    setIsLoginOpen(true);
  };

  const portalRoot = document.getElementById('portal-root');


    return (
    <HeaderContainer>
      <button className="menu" title="menu" onClick={handleMenuClick}>
        <List size={24} />
      </button>
      <button className="Home" onClick={handleLogoClick} title="Home">
        <img src={logo} alt="afrohairLogo" />
      </button>
      <div>
        <button title="profile" onClick={handleUserIconClick}>
          <User size={24} />{' '}
        </button>
        <button title="liked">
          <Heart size={24} />
        </button>
        <button onClick={handleShoppingCartClick} title="shoppingcart">
          <Handbag size={24} />
        </button>
      </div>
      <form action="">
        <input type="text" placeholder="Search" />
        <MagnifyingGlass size={12} className="search-icon" />
      </form>

      {portalRoot !== null && (
        createPortal(menuOpen ? <DropdownMenu isOpen={menuOpen} /> : null, portalRoot)
      )}

      {isLoginOpen &&
        portalRoot !== null &&
        createPortal(<LoginPortal onClose={() => setIsLoginOpen(false)} />, portalRoot)}
    </HeaderContainer>
  );
}
