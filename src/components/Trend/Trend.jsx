import React from 'react';
import './trend.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Trend() {
  return (
    <div className='trend'>
      <div className='container trend-container'>
        <h2>Trending Now</h2>
        <article>
          <Swiper
            autoplay={false}
            slidesPerView={6}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
            // breakpoints={{
            //   576: {
            //     width: 576,
            //     slidesPerView: 1,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //   },
            //   992: {
            //     width: 992,
            //     slidesPerView: 3,
            //   },
            //   1200: {
            //     width: 1200,
            //     slidesPerView: 4,
            //   },
            //   1400: {
            //     width: 1400,
            //     slidesPerView: 5,
            //   },
            // }}
          >
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://c4.wallpaperflare.com/wallpaper/294/512/920/tv-show-stranger-things-caleb-mclaughlin-charlie-heaton-wallpaper-preview.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://leadergamer.com.tr/app/uploads/2019/12/the_witcher_netflix_promos-2.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://22dakika.org/wp-content/uploads/2021/07/Ask-101-afis.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://i0.wp.com/i0.wp.com/dizigom.tv/wp-content/uploads/2023/01/women-at-war-bolum-63352329.jpg?resize=231,130?resize=500,282'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://cdn1.img.sputniknews.com.tr/img/103717/72/1037177295_0:0:1280:720_1920x0_80_0_0_689cb2eafc14e74de43cdd0345cd34fe.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://c4.wallpaperflare.com/wallpaper/294/512/920/tv-show-stranger-things-caleb-mclaughlin-charlie-heaton-wallpaper-preview.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://leadergamer.com.tr/app/uploads/2019/12/the_witcher_netflix_promos-2.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://22dakika.org/wp-content/uploads/2021/07/Ask-101-afis.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://i0.wp.com/i0.wp.com/dizigom.tv/wp-content/uploads/2023/01/women-at-war-bolum-63352329.jpg?resize=231,130?resize=500,282'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
            <SwiperSlide className='carousel-slide'>
              <img
                src='https://cdn1.img.sputniknews.com.tr/img/103717/72/1037177295_0:0:1280:720_1920x0_80_0_0_689cb2eafc14e74de43cdd0345cd34fe.jpg'
                alt='1'
              />
              <article className='carousel-movie-details'>
                <h3>Movie Name</h3>
                <h4>Quality: HD</h4>
                <button>Watch Now</button>
              </article>
            </SwiperSlide>
          </Swiper>
        </article>
      </div>
    </div>
  );
}

export default Trend;
