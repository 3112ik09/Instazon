import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import FaceIcon from '@mui/icons-material/Face';
// import ShoppingBasketIcon from '@mui/icons-material';
function Header () {

  const [{basket , user} , dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img  className ="header__logo"
        src="images/ll.png"/>
        </Link>
        <div className="header__search">
            <input className = "header__searchInput"/>
            {/* logo */}
            <SearchIcon className="header__searchLogo"/>

        </div>
        <FaceIcon />
        <div className='header__nav'>
        <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className='header__option'>
              <span className='header__optionlineOne'> Hello {!user ? 'Guest' : user.email}</span>
              <span className='header__optionlineTwo'> {user ? 'Sign Out' : 'Sign In'} </span>
            </div>
        </Link>
            <div className='header__option'>
            <span className='header__optionlineOne'> Your</span>
            <span className='header__optionlineTwo'> Basket</span>

        </div>
        <Link to='/c'> 
            <div className ="header__optionBasket">
              <ShoppingBasketIcon />
              <span className='header__optionLineTwo header__optionBasketCount'> {basket?.length} </span>
            </div>
        </Link>

        </div>
    </div>
  )
}

export default Header 