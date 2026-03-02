'use client';

import Link from 'next/link';

interface HireItem {
  hire_developers_icon_image_new?: string;
  hire_developers_heading_new?: string;
  hire_developers_link_url_new?: {
    url: string;
  };
}

interface HireDevelopersProps {
  title?: string;
  description?: string;
  items?: HireItem[];
}

export default function HireDevelopers({
  title = "Hire Our Experts",
  description = "Our team is a collective of specialized minds, each a leader in their field. We bring deep knowledge and proven expertise to every project, ensuring your success.",
  items = []
}: HireDevelopersProps) {

  const defaultItems = [
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/Frame-404-e1758104761909.webp",
      hire_developers_heading_new: "Ai Expert",
      hire_developers_link_url_new: { url: "/contact-us/" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/st-wodpres.webp",
      hire_developers_heading_new: "WordPress Expert",
      hire_developers_link_url_new: { url: "/hire-wordpress-developer/" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/shopify.webp",
      hire_developers_heading_new: "Shopify Expert",
      hire_developers_link_url_new: { url: "/hire-shopify-developer/" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/st-mageto.webp",
      hire_developers_heading_new: "Magento Expert",
      hire_developers_link_url_new: { url: "/hire-magento-developer/" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/seo1.webp",
      hire_developers_heading_new: "SEO Expert",
      hire_developers_link_url_new: { url: "/search-engine-optimization/" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/ppc.webp",
      hire_developers_heading_new: "PPC Expert",
      hire_developers_link_url_new: { url: "/ppc-advertising/" }
    }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <section className="hire-section">
      <div className="hire-container">

        <div className="hire-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="hire-grid">
          {displayItems.map((item, index) => (
            <Link
              href={item.hire_developers_link_url_new?.url || '#'}
              key={index}
              className="hire-card"
            >
              <img
                src={item.hire_developers_icon_image_new}
                alt={item.hire_developers_heading_new}
              />
              <h5>{item.hire_developers_heading_new}</h5>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hire-section {
          background: #000;
          padding: 90px 0;
          color: #fff;
        }

        .hire-container {
          width: 90%;
          max-width: 1300px;
          margin: auto;
          text-align: center;
        }

        .hire-header h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .hire-header p {
          max-width: 800px;
          margin: 0 auto 60px;
          font-size: 18px;
          line-height: 1.6;
          color: #ccc;
        }

        .hire-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .hire-card {
          background: #f3f3f3;
          border-radius: 18px;
          padding: 22px 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: #000;
          transition: 0.3s ease;
        }

        .hire-card img {
          width: 55px;
          height: 55px;
          object-fit: contain;
        }

        .hire-card h5 {
          font-size: 20px;
          font-weight: 600;
        }

        .hire-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
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

          .hire-card {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}