import React from 'react';
import './trend.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import movieData from '../../assets/movie/movieData.json';

function Trend() {
  return (
    <div className='trend'>
      <div className='container trend-container'>
        <h2>Trending Now</h2>
        <div>
          <Swiper
            autoplay={false}
            slidesPerView={6}
            slidesPerGroup={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              321: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              641: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 15,
              },
              961: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 15,
              },
              1281: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              1601: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
            }}
          >
            {movieData.map((movie, index) => (
              <SwiperSlide className='carousel-slide' key={index}>
                <img src={movie.image} alt={movie.title} />
                <div className='carousel-movie-details'>
                  <h3>{movie.title}</h3>
                  <h4>Quality: {movie.quality}</h4>
                  <button>Watch Now</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Trend;
