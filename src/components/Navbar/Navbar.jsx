import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sneakers', href: '#services' },
    { name: 'Loafers', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoText}>VEAKS</span>
        </a>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.navLink}
              data-aos="fade-down"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className={styles.ctaButtons}>
          <Button variant="outline" size="sm">
            Get Started
          </Button>
          <Button variant="primary" size="sm">
            Book Consultation
          </Button>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className={styles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className={styles.mobileButtons}>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
            <Button variant="primary" size="sm">
              Book Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
