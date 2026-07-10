import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './TrustedCompanies.module.css';

const TrustedCompanies = () => {
  const companies = [
    'Bankers',
    'Civil Servants',
    'Business people',
    'Fathers',
    'Community leaders',
    'Ploiticians',
    'Men of God',
    'Every Moving man',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title} data-aos="fade-up">
          Trusted by Many
        </p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1400: { slidesPerView: 8 },
          }}
          className={styles.swiper}
        >
          {[...companies, ...companies].map((company, index) => (
            <SwiperSlide key={`${company}-${index}`}>
              <div className={styles.companyLogo}>{company}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedCompanies;
