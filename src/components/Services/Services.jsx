import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const categories = [
    {
      title: 'Men Sneakers',
      description: 'Trendy and comfortable sneakers for every occasion.',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=premium%20white%20men%20sneakers%20product%20photography&image_size=square'
    },
    {
      title: 'Men Loafers',
      description: 'Elegant loafers perfect for formal and casual wear.',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=luxury%20brown%20leather%20men%20loafers%20product%20photography&image_size=square'
    },
    {
      title: 'Men Dress Shoes',
      description: 'Sophisticated dress shoes for professional settings.',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=black%20leather%20oxford%20dress%20shoes%20premium%20product%20photo&image_size=square'
    },
    {
      title: 'Men Boots',
      description: 'Durable and stylish boots for all weather.',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=tan%20leather%20chelsea%20boots%20for%20men%20premium%20product%20photo&image_size=square'
    },
    {
      title: 'Men Sandals',
      description: 'Comfortable and stylish sandals for warm days.',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=leather%20slide%20sandals%20for%20men%20luxury%20product%20photo&image_size=square'
    },
    {
      title: 'Men Drivers',
      description: 'Casual and comfortable driving shoes.',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=navy%20blue%20leather%20driving%20shoes%20for%20men&image_size=square'
    },
  ];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.badge}>Shop Categories</div>
          <h2 className={styles.headline}>Explore Our Collections</h2>
          <p className={styles.description}>
            Find the perfect pair for every style and occasion
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.imageWrapper} style={{ backgroundImage: `url(${category.image})` }}></div>
              <h3 className={styles.title}>{category.title}</h3>
              <p className={styles.serviceDescription}>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
