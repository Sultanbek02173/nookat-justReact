import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import './sliderComponent.scss'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export const SliderComponent = ({ images }) => {
  const swiperRef = useRef(null);
  
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="slider_container">
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        navigation={{
          prevEl: '.custom_prev_button',
          nextEl: '.custom_next_button',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          0: {
              slidesPerView: 1
          }
        }}
      >
        {
          images &&
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='slide-img'>
                <img src={item} alt={`Slide ${index}`} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

        <div className='buttons'>
          <button className="custom_prev_button"><IoIosArrowRoundBack color='#fff' /></button>
          <button className="custom_next_button"><IoIosArrowRoundForward color='#fff' /></button>
        </div>
      
    </div>
  );
};