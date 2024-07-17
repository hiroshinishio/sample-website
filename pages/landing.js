export default function Landing() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to the Landing Page
                </h1>
                <p className="mt-3 text-2xl">
                    Get started by exploring the landing page.
                </p>
            </main>
        </div>
    )
}
import React from 'react';
import styles from './landing.module.css';

const Landing = () => (
  <div className={styles.container}>
    <header className={styles.header}>
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
