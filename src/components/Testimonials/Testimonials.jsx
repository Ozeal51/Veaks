import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp',
      quote:
        'Veaks transformed our business with their exceptional digital solutions. Their team is professional, talented, and dedicated to excellence.',
    },
    {
      name: 'Sarah Johnson',
      company: 'InnovateCo',
      quote:
        'Working with Veaks was an absolute pleasure. They delivered beyond our expectations and created a product that truly stands out.',
    },
    {
      name: 'Michael Brown',
      company: 'GlobalSolutions',
      quote:
        'The quality of work and attention to detail is unmatched. Veaks is our go-to partner for all digital projects.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.badge}>Testimonials</div>
          <h2 className={styles.headline}>What Our Clients Say</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}></div>
                  <div>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.companyName}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
