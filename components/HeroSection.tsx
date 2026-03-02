"use client";

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-bg">
        <div className="hero-overlay"></div>

        <div className="hero-content"> 
          <p className="hero-welcome">
            Welcome to Store Transform
          </p>

          <h1 className="hero-heading">
            Driving Innovation with
            <br />
            <span>Agile AI-Enhanced</span> Digital Solutions
          </h1>

          <p className="hero-subtext">
            Unleash Your Brand’s Full Potential with{" "}
            <span>360° Services All Under One Roof</span> – Let’s Soar to
            New Heights Together
          </p>

          <a href="#" className="bt-btn chat-boat-btn">
            Get Instant Assistance
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Exact banner height (header = 90px approx) */
        .hero-wrapper {
          height: calc(100vh - 90px);
          width: 100%;
        }

        .hero-bg {
          position: relative;
          height: 70%;
          width: 100%;
          background-image: url("https://storetransform.com/wp-content/uploads/2025/12/United-st.gif");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Exact overlay darkness */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.50);
        }

        .hero-heading{
          color: #fff;
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 0 20px;
          // gap: 10px;
        }

        .hero-welcome {
          font-size: 18px;
          font-weight: 500;
          // margin-bottom: 18px;
          letter-spacing: 0.5px;
        }

        /* Exact main heading size */
        .hero-heading {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.2;
          // margin-bottom: 22px;
        }

        .hero-heading span {
          color: #ff4b2b;
        }

        /* Exact sub text */
        .hero-subtext {
          font-size: 20px;
          max-width: 900px;
          line-height: 1.6;
          // margin-bottom: 38px;
        }

        .hero-subtext span {
          color: #ff4b2b;
        }

       
        /* Responsive */
        @media (max-width: 992px) {
          .hero-heading {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 30px;
          }

          .hero-subtext {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}   