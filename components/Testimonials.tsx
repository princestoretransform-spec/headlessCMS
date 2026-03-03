'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const reviews = [
    {
      review: `One of the best experiences I had with any Magento development team so far. Highly dedicated Store Transform team of experienced professionals that are committed to deliver the highest standards of services.

If you are looking for a genuine resource for your next project, look no further. All the very best.`,
      name: "Sebastian Clarke"
    },
    {
      review: `Store Transform really took our Magento project to the next level with clever design & on-point creativity. They clearly understood my targeted demographic, turned my site into rocking shopping experience !!!

I will look forward to work with him in a future on new projects.`,
      name: "Garcia Taylor"
    },
    {
      review: `Working with Store transform team has been a complete pleasure. They posses enough skills to understand our core needs & functionalities, created highly customized Magento Store for our e-commerce business.

I really look forward to continuing relationship with him, definitely recommend him for our new projects.`,
      name: "Francisco Wilson"
    }
  ];

  return (
    <section className="testimonial-section">

      {/* TOP IMAGE PART */}
      <div className="testimonial-top">
        <div className="testimonial-overlay"></div>

        <div className="testimonial-heading">
          <h2>What Our Clients Say</h2>
          <p>
            Our happy clients are our greatest advocates - hear how we’ve transformed their success stories! Let me know if you'd like more options!
          </p>
        </div>
      </div>

      {/* WHITE BACKGROUND PART */}
      <div className="testimonial-bottom">

        <div className="testimonial-slider">

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 4500 }}
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
      </div>

    </section>
  );
};

export default Testimonials;