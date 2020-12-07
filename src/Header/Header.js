import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase/firebase';

function Header() {
  const [{ basket, user, search }, dispatch] = useStateValue();    // destructuring the state
  const login = () => {
    if (user) {
      auth.signOut();
    }
  }
  const handleChange = (event) => {
    const searchItem = event.target.value;
    dispatch({
      type: 'SET_INPUT',
      item: searchItem
    })
  }

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" onChange={handleChange} value={search}/>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option__lineOne">Hello</span>
            <span className="header__option__lineTwo">{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__option__basket">
            <ShoppingBasketIcon />
            <span className="header__option__lineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
