import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Simple Landing Page using Next.js" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="home" className={styles.section}>
          <h1>Welcome to Our Application</h1>
          <p>Discover the amazing features and benefits we offer.</p>
        </section>
        <section id="features" className={styles.section}>
          <h2>Features</h2>
          <p>Our application provides the following features...</p>
        </section>
        <section id="benefits" className={styles.section}>
          <h2>Benefits</h2>
          <p>Using our application brings the following benefits...</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Our Application. All rights reserved.</p>
      </footer>
    </div>
  )
}