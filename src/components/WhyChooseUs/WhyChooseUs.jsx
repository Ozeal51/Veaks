import React from 'react';
import styles from './WhyChooseUs.module.css';
import {
  FaGem,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaTag,
  FaBox,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { icon: FaGem, title: 'Premium Materials' },
    { icon: FaTruck, title: 'Free Delivery' },
    { icon: FaShieldAlt, title: 'Secure Payments' },
    { icon: FaHeadset, title: '24/7 Support' },
    { icon: FaTag, title: 'Best Prices' },
    { icon: FaBox, title: 'Easy Returns' },
  ];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.badge}>Why Choose Us</div>
          <h2 className={styles.headline}>The Veaks Advantage</h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.iconCircle}>
                <reason.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
