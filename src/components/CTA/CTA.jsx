import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';
import Button from '../Button/Button';

const CTA = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <h2 className={styles.headline}>Ready to Build Something Amazing?</h2>
          <p className={styles.description}>
            Let's collaborate to turn your vision into reality with cutting-edge technology
          </p>
          <Button variant="primary" size="lg">
            Start Your Project
          </Button>
        </div>
        <div className={styles.particles}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
