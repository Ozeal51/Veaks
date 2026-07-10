import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.badge} data-aos="fade-up">
            ✨ Premium Men's Footwear
          </div>
          <h1 className={styles.headline} data-aos="fade-up" data-aos-delay="100">
            Step into Luxury with Premium Men's Shoes
          </h1>
          <p className={styles.subheadline} data-aos="fade-up" data-aos-delay="200">
            Discover exclusive collections of loafers, dress shoes, and more. Handcrafted for the modern gentleman.
          </p>
          <div className={styles.buttons} data-aos="fade-up" data-aos-delay="300">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              View Collections
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.floatingCards}>
            <motion.div
              className={styles.glassCard}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.cardIcon}>👟</div>
              <div className={styles.cardTitle}>Sneakers</div>
            </motion.div>
            <motion.div
              className={`${styles.glassCard} ${styles.card2}`}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className={styles.cardIcon}>👞</div>
              <div className={styles.cardTitle}>Loafers</div>
            </motion.div>
            <motion.div
              className={`${styles.glassCard} ${styles.card3}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className={styles.cardIcon}>🥾</div>
              <div className={styles.cardTitle}>Boots</div>
            </motion.div>
          </div>
          <div className={styles.dashboard} style={{
            backgroundImage: 'url(https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=luxury%20black%20leather%20men%20sneakers%20on%20dark%20background%20premium%20product%20photography&image_size=square_hd)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
