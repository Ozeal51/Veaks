import React from 'react';
import styles from './Footer.module.css';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.company}>
            <div className={styles.logo}>VEAKS</div>
            <p className={styles.description}>
              Premium men's footwear for the modern gentleman. Step into luxury with our exclusive collections.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}><FaFacebook /></a>
              <a href="#" className={styles.socialLink}><FaTwitter /></a>
              <a href="#" className={styles.socialLink}><FaLinkedinIn /></a>
              <a href="#" className={styles.socialLink}><FaInstagram /></a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Shop</h4>
            <ul className={styles.links}>
              <li><a href="#services">Sneakers</a></li>
              <li><a href="#services">Loafers</a></li>
              <li><a href="#services">Dress Shoes</a></li>
              <li><a href="#services">Boots</a></li>
              <li><a href="#services">Sandals</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Help</h4>
            <ul className={styles.links}>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Contact</h4>
            <ul className={styles.links}>
              <li>info@veaks.com</li>
              <li>+234 8122126138</li>
              <li>Kubwa, Abuja</li>
              <li> Nigeria</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © 2026 Veaks. All Rights Reserved.
          </div>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
