import React from 'react';


const Landing = () => (
  <div className="container mx-auto px-4">
    <header className="bg-blue-500 text-white p-4">
      <h1>Welcome to Our Landing Page</h1>
    </header>
    <main className={styles.main}>
      <section className={styles.section}>
        <h2>About Us</h2>
        <p>Description about the company.</p>
      </section>
      <section className={styles.section}>
        <h2>Services</h2>
        <p>Details of the services provided.</p>
      </section>
      <section className={styles.section}>
        <h2>Contact</h2>
        <p>How to contact us.</p>
      </section>
    </main>
    <footer className={styles.footer}>
      <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
  </div>
);

export default Landing;
