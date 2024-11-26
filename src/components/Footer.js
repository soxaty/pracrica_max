import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './Footer.module.css';

const Footer = () => {
  const defaultState = {
    center: [55.71753, 37.62551], // Координаты для Dubininskaya Ulitsa, 96, Moscow
    zoom: 16,
  };

  return (
    <footer className={styles.footer}>
      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Contact</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>Phone</h3>
            <p>+7 (499) 350-66-04</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Address</h3>
            <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Working Hours</h3>
            <p>24 hours a day</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Socials</h3>
            <p>Chat</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Find Us</h2>
        <div className={styles.map}>
          <YMaps>
            <Map defaultState={defaultState} width="100%" height="300px">
              <Placemark geometry={defaultState.center} />
            </Map>
          </YMaps>
        </div>
      </section>

      <div className={styles.footerContent}>
        <p>&copy; 2024 Garden Shop. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
