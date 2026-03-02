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

interface TestimonialsProps {
  title?: string;
  description?: string;
  reviews?: TestimonialItem[];
}

const Testimonials = ({
  title = "What Our Clients Say",
  description = "Our happy clients are our greatest advocates - hear how we’ve transformed their success stories!",
  reviews = []
}: TestimonialsProps) => {

  const defaultReviews = [
    {
      review: "Store Transform team exceeded all of my expectations. They not only perform required tasks quickly, but also does research and suggests clever alternatives where needed.",
      name: "Zachary Moore"
    },
    {
      review: "Store Transform is an excellent development team. Extremely creative with great technical sensibility.",
      name: "Robinson Walker"
    },
    {
      review: "One of the best experiences I had with any Magento development team so far.",
      name: "Sebastian Clarke"
    }
  ];

  const displayReviews = reviews.length ? reviews : defaultReviews;

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay"></div>

      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>{title}</h2>
          <p>{description}</p>
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
          {displayReviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p className="testimonial-text">{item.review}</p>
                <h5 className="testimonial-name">{item.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;