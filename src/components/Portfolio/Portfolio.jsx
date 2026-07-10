import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Portfolio.module.css';
import Button from '../Button/Button';

const Portfolio = () => {
  const products = [
    { 
      title: 'Harlem Black Leather Sneakers', 
      category: 'Sneakers',
      price: '₦25,000',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=black%20leather%20sneakers%20premium%20product%20photography&image_size=square_hd'
    },
    { 
      title: 'Fulton Brown Leather Loafers', 
      category: 'Loafers',
      price: '₦35,000',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=tan%20brown%20leather%20loafers%20for%20men%20premium%20product%20photo&image_size=square_hd'
    },
    { 
      title: 'Giliard Navy Suede Chelsea Boots', 
      category: 'Boots',
      price: '₦40,000',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=navy%20suede%20chelsea%20boots%20men%20premium%20product%20photography&image_size=square_hd'
    },
    { 
      title: 'Alejandro Black Oxford Dress Shoes', 
      category: 'Dress Shoes',
      price: '₦45,000',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=black%20oxford%20dress%20shoes%20premium%20product%20photo&image_size=square_hd'
    },
    { 
      title: 'Hubert Leon Tan Leather Drivers', 
      category: 'Drivers',
      price: '₦44,000',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=tan%20leather%20driving%20shoes%20for%20men%20premium%20product&image_size=square_hd'
    },
    { 
      title: 'Daza Navy Leather Sandals', 
      category: 'Sandals',
      price: '₦30,000',
      image: 'https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=navy%20leather%20slide%20sandals%20for%20men%20luxury%20product%20photography&image_size=square_hd'
    },
  ];

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.badge}>Top Picks</div>
          <h2 className={styles.headline}>Featured Products</h2>
        </div>

        <div className={styles.desktopGrid} data-aos="fade-up" data-aos-delay="100">
          {products.map((product, index) => (
            <div key={product.title} className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className={styles.cardContent}>
                <div className={styles.category}>{product.category}</div>
                <h3 className={styles.title}>{product.title}</h3>
                <div className={styles.price}>{product.price}</div>
                <Button variant="primary" size="sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobileSlider}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
          >
            {products.map((product) => (
              <SwiperSlide key={product.title}>
                <div className={styles.card}>
                  <div className={styles.cardImage} style={{ backgroundImage: `url(${product.image})` }}></div>
                  <div className={styles.cardContent}>
                    <div className={styles.category}>{product.category}</div>
                    <h3 className={styles.title}>{product.title}</h3>
                    <div className={styles.price}>{product.price}</div>
                    <Button variant="primary" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
