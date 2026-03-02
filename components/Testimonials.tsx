'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialItem {
  review?: string;
  name?: string;
}

const Testimonials = () => {

  const reviews: TestimonialItem[] = [
    {
      review: `Working with Store transform team has been a complete pleasure. They posses enough skills to understand our core needs & functionalities, created highly customized Magento Store for our e-commerce business.
      I really look forward to continuing relationship with him, definitely recommend him for our new projects.`,
      name: "Francisco Wilson"
    },
    {
      review: `Store Transform team exceeded all of my expectations. They not only perform required tasks quickly, but also does research, spends time in understanding our entire project, and suggesting us clever alternatives where needed.
      Will rehire again for further work.`,
      name: "Zachary Moore"
    },
    {
      review: `Store Transform is an excellent development team. They are extremely creative with a great technical sensibility. They clearly understood our business goals or objectives, design a beautiful Magento Ecommerce store for us.
      I am very happy with their work and will definitely hire them for next job.`,
      name: "Robinson Walker"
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay"></div>

      <div className="testimonial-container">

        <div className="testimonial-header">
          <h2>What Our Clients Say</h2>
          <p>
            Our happy clients are our greatest advocates - hear how we’ve transformed their success stories!
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p>{item.review}</p>
                <h5>{item.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;