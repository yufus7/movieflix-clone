import React from 'react';
import './navbar.css';

import Logo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png';
import { HiOutlineSearch } from 'react-icons/hi';
import { GoBell } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container nav-container'>
        <div className='nav-left'>
          <img className='nav-logo' src={Logo} alt='' />
          <div className='nav-menu'>
            <a href='#'>Home</a>
            <a href='#'>TV Shows</a>
            <a href='#'>Movies</a>
            <a href='#'>New & Popular</a>
            <a href='#'>My List</a>
          </div>
        </div>
        <div className='nav-right'>
          <GiHamburgerMenu className='nav-icon hamburger' />
          <img className='nav-profile' src={Avatar} alt='' />
          <div className='nav-items'>
            <HiOutlineSearch className='nav-icon' />
            <a href='#'>Kids</a>
            <a href='#'>DVD</a>
            <GoBell className='nav-icon' />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
