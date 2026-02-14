import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SwiperGallery = ({ images }) => {
  return (
    <div className="container-swiper">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: -20, // Bring images closer
          depth: 200,   // Create depth for 3D-like effect
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default SwiperGallery;