import React, { useEffect, useRef, useState } from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
  const stats = [
    { number: 100, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Clients' },
    { number: 8, suffix: '+', label: 'Years Experience' },
    { number: 20, suffix: '+', label: 'Countries Served' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const AnimatedCounter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={styles.statItem}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.number}>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
