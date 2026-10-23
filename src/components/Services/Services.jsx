import React from 'react';
import styles from './Services.module.css';
import serviceSneakers from '../../assets/IMG-20260725-WA0002.jpg';
import serviceLoafers from '../../assets/IMG-20260725-WA0003.jpg';
import serviceDressShoes from '../../assets/IMG-20260725-WA0004.jpg';
import serviceBoots from '../../assets/IMG-20260725-WA0005.jpg';
import serviceSandals from '../../assets/IMG-20260725-WA0006.jpg';
import serviceDrivers from '../../assets/IMG-20260725-WA0007.jpg';

const Services = () => {
  const categories = [
    {
      title: 'Men Sneakers',
      description: 'Trendy and comfortable sneakers for every occasion.',
      image: serviceSneakers
    },
    {
      title: 'Men Loafers',
      description: 'Elegant loafers perfect for formal and casual wear.',
      image: serviceLoafers
    },
    {
      title: 'Men Dress Shoes',
      description: 'Sophisticated dress shoes for professional settings.',
      image: serviceDressShoes
    },
    {
      title: 'Men Boots',
      description: 'Durable and stylish boots for all weather.',
      image: serviceBoots
    },
    {
      title: 'Men Sandals',
      description: 'Comfortable and stylish sandals for warm days.',
      image: serviceSandals
    },
    {
      title: 'Men Drivers',
      description: 'Casual and comfortable driving shoes.',
      image: serviceDrivers
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
