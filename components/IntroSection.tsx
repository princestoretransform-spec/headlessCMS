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
        .services-section {
          padding: 90px 0;
        }

        .services-container {
          width: 90%;
          max-width: 1300px;
          margin: auto;
          display: flex;
          gap: 70px;
          align-items: center;
        }

        .services-left {
          flex: 1;
        }

        .services-left h2 {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 25px;
        }

        .services-left h2 span {
          color: #ff4b2b;
        }

        .services-left p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 20px;
          color: #333;
        }

        .services-right {
          flex: 1;
        }

        .top-row {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
        }

        .top-row img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
        }

        .bottom-row img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .services-container {
            flex-direction: column;
          }

          .services-left h2 {
            font-size: 30px;
          }

          .top-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}