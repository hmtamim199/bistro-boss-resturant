import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import silde1 from '../../../assets/home/slide1.jpg'
import silde2 from '../../../assets/home/slide2.jpg'
import silde3 from '../../../assets/home/slide3.jpg'
import silde4 from '../../../assets/home/slide4.jpg'
import silde5 from '../../../assets/home/slide5.jpg'


const Category = () => {
  return (

    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={silde1} alt="" />
        <h2 className='text-4xl uppercase text-white -mt-16  text-center'>SALADS</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={silde2} alt="" />
        <h2 className='text-4xl uppercase text-white -mt-16  text-center'>pizzas</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={silde3} alt="" />
        <h2 className='text-4xl uppercase text-white -mt-16  text-center'>soupe</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={silde4} alt="" />
        <h2 className='text-4xl uppercase text-white -mt-16  text-center'>deserts</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={silde5} alt="" />
        <h2 className='text-4xl uppercase text-white -mt-16  text-center'>SALADS</h2>
      </SwiperSlide>

    </Swiper>

  );
};

export default Category;