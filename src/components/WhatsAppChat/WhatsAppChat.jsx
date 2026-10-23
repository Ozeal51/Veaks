import React from 'react';
import styles from './WhatsAppChat.module.css';

const WHATSAPP_NUMBER = '2348122126138';
const DEFAULT_MESSAGE = encodeURIComponent('Hello Veaks, I would like to make an enquiry about your shoes.');

const WhatsAppChat = () => {
  return (
    <a
      className={styles.floatingButton}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className={styles.icon} aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img" focusable="false">
          <path d="M19.11 17.26c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.17.27-.69.86-.84 1.03-.15.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.58-.64 1.8-1.26.22-.62.22-1.15.15-1.26-.06-.11-.24-.18-.51-.31Z" />
          <path d="M16 .8C7.61.8.8 7.61.8 16c0 2.83.77 5.49 2.13 7.76L.8 31.2l7.64-2c2.18 1.2 4.68 1.9 7.56 1.9 8.39 0 15.2-6.81 15.2-15.2S24.39.8 16 .8Zm0 27.55c-2.47 0-4.78-.67-6.76-1.85l-.48-.29-4.53 1.18 1.21-4.42-.31-.5a12.28 12.28 0 0 1-1.91-6.47C3.22 9.09 9.09 3.22 16 3.22S28.78 9.09 28.78 16 22.91 28.35 16 28.35Z" />
        </svg>
      </span>
      <span className={styles.label}>WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppChat;
