import React, { useState } from 'react';
import './navbar.css';

import Logo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png';
import { HiOutlineSearch } from 'react-icons/hi';
import { GoBell } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseLeave = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='navbar' onMouseLeave={handleMouseLeave}>
      <div className='container nav-container'>
        <div className='nav-left'>
          <img className='nav-logo' src={Logo} alt='' />
          <div className='nav-menu'>
            <a href='/#'>Home</a>
            <a href='/#'>TV Shows</a>
            <a href='/#'>Movies</a>
            <a href='/#'>New & Popular</a>
            <a href='/#'>My List</a>
          </div>
        </div>
        <div className='nav-right'>
          <GiHamburgerMenu
            className='nav-icon hamburger'
            onClick={toggleMobileMenu}
          />
          <img className='nav-profile' src={Avatar} alt='' />
          <div className='nav-items'>
            <HiOutlineSearch className='nav-icon' />
            <a href='/#'>Kids</a>
            <a href='/#'>DVD</a>
            <GoBell className='nav-icon' />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='mobile-menu'>
          <ul>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <a href='/#'>TV Shows</a>
            </li>
            <li>
              <a href='/#'>Movies</a>
            </li>
            <li>
              <a href='/#'>New & Popular</a>
            </li>
            <li>
              <a href='/#'>My List</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
