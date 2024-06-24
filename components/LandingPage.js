import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Our Landing Page</h1>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
        <section id="features" className={styles.section}>
          <h2>Features</h2>
        </section>
        <section id="about" className={styles.section}>
          <h2>About</h2>
        </section>
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default LandingPage;