import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to='/'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to='/tv-shows'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                };
              }}
            >
              TV Shows
            </NavLink>
            <NavLink
              to='/movies'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                };
              }}
            >
              Movies
            </NavLink>
            <NavLink
              to='/new-popular'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                };
              }}
            >
              New & Popular
            </NavLink>
            <NavLink
              to='/my-list'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                };
              }}
            >
              My List
            </NavLink>
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
              <NavLink
                to='/'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/tv-shows'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
              >
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/movies'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new-popular'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
              >
                New & Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/my-list'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
