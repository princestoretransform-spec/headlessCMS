'use client';

import Image from 'next/image';

export default function ServicesDetailed() {

  const services = [
    {
      image: "https://storetransform.com/wp-content/uploads/2025/12/worksss.webp",
      title: "Health & Wellness Chatbot",
      text: "Developed Echo AI, a custom AI-powered chatbot that provides mental health consultation and peace. We leveraged AI to deliver empathetic, personalized conversations; the result is an increase in user engagement and improved mental wellness scores."
    },
    {
      image: "https://storetransform.com/wp-content/uploads/2025/12/works.webp",
      title: "Aviation Consultancy Industry",
      text: "Led the WordPress development for Seven Collective, crafting a dynamic and responsive website that effectively showcases their innovative consultancy services. Implemented SEO best practices and optimized site performance to drive business growth."
    },
    {
      image: "https://storetransform.com/wp-content/uploads/2025/12/workss.webp",
      title: "Personal Care Industry",
      text: "Executed a comprehensive Shopify development project for Better Man Labs, focusing on a user-friendly online store. Implemented custom features and optimized the site for performance, resulting in enhanced customer engagement and increased sales."
    },
    {
      image: "https://storetransform.com/wp-content/uploads/2025/12/sb-works.webp",
      title: "Home Decor Industry",
      text: "Implemented comprehensive SEO strategies for the Superior Brand website. Conducted competitor analysis and keyword research to identify opportunities, resulting in a significant boost in organic traffic and improved search visibility."
    }
  ];

  return (
    <section className="work-section">
      <div className="work-container">

        {/* Title */}
        <div className="work-header">
          <h2>Our Work</h2>
          <p>
            We transform innovative ideas into powerful digital realities.
            Explore our work to see how we've helped businesses achieve
            their vision through our work.
          </p>
        </div>

        {/* Grid */}
        <div className="work-grid">
          {services.map((item, index) => (
            <div className="work-card" key={index}>
              <div className="work-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                />
              </div>

              <div className="work-content">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}