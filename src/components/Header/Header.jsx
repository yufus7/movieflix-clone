import React from 'react';
import './header.css';

import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import MovieImg from '../../assets/movie-img.webp';
import HeaderImg from '../../assets/header-you.jpg';

function Header() {
  return (
    <header>
      <img className='header-img' src={HeaderImg} alt='' />
      <div className='container header-container'>
        <div className='header-content'>
          <div className='header-detail'>
            <img className='movie-img' src={MovieImg} alt='' />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              officia incidunt sunt esse qui quas? Asperiores temporibus libero
              debitis obcaecati!
            </h3>
          </div>
          <div className='header-buttons'>
            <button>
              <FaPlay className='header-icon' /> Play
            </button>
            <button>
              <AiOutlineInfoCircle className='header-icon' /> More Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
