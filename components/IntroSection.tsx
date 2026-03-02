'use client';

export default function IntroSection() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* LEFT CONTENT */}
        <div className="services-left">
          <h2>
            Transform Your Business with..
            <br />
            <span>Our Tailored Services</span>
          </h2>

          <p>
            At Store Transform, we provide more than just digital services—we
            provide a competitive edge through the power of AI. We are a
            leading provider of AI-powered 360-degree digital solutions, from
            web design and development to marketing.
          </p>

          <p>
            With years of experience working with leading brands, our holistic,
            AI-driven approach creates impactful online presences that drive
            sales and enhance brand visibility with unmatched efficiency.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="services-right">

          <div className="bottom-row">
            <img
              src="https://storetransform.com/wp-content/uploads/2025/12/Group-1.webp"
              alt="AI Marketing"
            />
          </div>

        </div>
      </div>

     <style jsx>{`
  .hire-section {
    background: #000;
    padding: 100px 0;
    color: #fff;
  }

  .hire-container {
    width: 90%;
    max-width: 1300px;
    margin: auto;
    text-align: center;
  }

  /* Heading White Proper */
  .hire-header h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #ffffff;
  }

  /* Description Light White */
  .hire-header p {
    max-width: 800px;
    margin: 0 auto 70px;
    font-size: 18px;
    line-height: 1.7;
    color: #d1d1d1;
  }

  .hire-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }

  /* Card Proper White Background */
  .hire-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 24px 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    transition: 0.3s ease;
  }

  /* Icon Size */
  .hire-card img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  /* Card Text Proper Black */
  .hire-card h5 {
    font-size: 20px;
    font-weight: 600;
    color: #111111;
  }

  .hire-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(255, 75, 43, 0.25);
  }

  /* Tablet */
  @media (max-width: 992px) {
    .hire-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .hire-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
    </section>
  );
}

