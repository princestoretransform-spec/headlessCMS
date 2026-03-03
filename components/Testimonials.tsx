'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const reviews = [
    {
      text: "Store Transform really took our Magento project to the next level with clever design & on-point creativity. They clearly understood my targeted demographic and turned my site into a rocking shopping experience. I will look forward to work with him in a future on new projects.",
      name: "Garcia Taylor"
    },
    {
      text: "Working with Store transform team has been a complete pleasure. They posses enough skills to understand our core needs & functionalities and created highly customized Magento Store for our e-commerce business.",
      name: "Francisco Wilson"
    },
    {
      text: "Store Transform team exceeded all of my expectations. They not only perform required tasks quickly, but also does research and suggests clever alternatives where needed. Will rehire again for further work.",
      name: "Zachary Moore"
    }
  ];

  return (
    <section className="testimonial-wrapper">

      {/* Top Background */}
      <div className="testimonial-bg">
        <div className="overlay"></div>
        <div className="testimonial-heading">
          <h2>What Our Clients Say</h2>
          <p>
            Our happy clients are our greatest advocates - hear how we’ve transformed their success stories! Let me know if you'd like more options!
          </p>
        </div>
      </div>

      {/* Slider Area */}
      <div className="testimonial-slider-area">

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p>{item.text}</p>
                <h4>{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;