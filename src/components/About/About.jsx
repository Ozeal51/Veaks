import React from 'react';
import styles from './About.module.css';
import aboutImageOne from '../../assets/IMG-20260725-WA0010.jpg';
import aboutImageTwo from '../../assets/IMG-20260725-WA0012.jpg';
import aboutImageThree from '../../assets/IMG-20260725-WA0013.jpg';

const About = () => {
  const features = [
    { title: 'Premium Quality', icon: '✨' },
    { title: 'Authentic Brands', icon: '✅' },
    { title: 'Fast Delivery', icon: '🚚' },
    { title: 'Easy Returns', icon: '🔄' },
  ];

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageCollage} data-aos="fade-right">
          <div className={styles.image1} style={{
            backgroundImage: `url(${aboutImageOne})`
          }}></div>
          <div className={styles.image2} style={{
            backgroundImage: `url(${aboutImageTwo})`
          }}></div>
          <div className={styles.image3} style={{
            backgroundImage: `url(${aboutImageThree})`
          }}></div>
        </div>

        <div className={styles.content} data-aos="fade-left">
          <div className={styles.badge}>About Us</div>
          <h2 className={styles.headline}>Who We Are</h2>
          <p className={styles.description}>
            Veaks is a premium men's footwear brand, offering exclusive collections of shoes, loafers, dress shoes, and more. We curate only the finest, handcrafted pieces for the modern gentleman. CEO ( Victor Akpa )
          </p>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={feature.title} className={styles.featureCard} data-aos="fade-up" data-aos-delay={index * 100}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureTitle}>{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
