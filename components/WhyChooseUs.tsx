'use client';

export default function WhyChooseUs() {

  const logos = [
    "https://storetransform.com/wp-content/uploads/2025/12/upwork.webp",
    "https://storetransform.com/wp-content/uploads/2025/12/magento.webp",
    "https://storetransform.com/wp-content/uploads/2025/12/wordpress-expert.webp",
    "https://storetransform.com/wp-content/uploads/2025/12/google-marketing.webp",
    "https://storetransform.com/wp-content/uploads/2025/12/woocommerce.webp",
    "https://storetransform.com/wp-content/uploads/2025/12/shopify-expert.webp"
  ];

  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <h2>
            Why Choose <span>Store Transform?</span>
          </h2>

          <p>
            We’re your all-in-one business partner, offering a complete suite of services
            from design to development and marketing with the power of AI.
            We eliminate the hassle of juggling multiple agencies by providing
            a 360-degree solution under one roof. Our mission is to transform
            your business by building custom, innovative solutions that drive real,
            measurable success.
          </p>

          <p>
            Our team of experts is dedicated to a results-driven approach.
            We leverage AI-powered services to enhance our strategies,
            creating smarter campaigns and more personalized user experiences.
            By partnering with us, you gain a team committed to your vision.
          </p>

          <p>
            We focus on helping you achieve business goals, ensuring our
            partnership is not just a service but a strategic advantage.
          </p>
        </div>

        {/* RIGHT LOGO GRID */}
        <div className="why-right">
          {logos.map((logo, index) => (
            <div className="why-card" key={index}>
              <img src={logo} alt="Certification Logo" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}