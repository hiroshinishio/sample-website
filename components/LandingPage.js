import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
        <section id="features" className={styles.section}>
          <h2>Features</h2>
          <p>Our key features...</p>
        </section>
        <section id="testimonials" className={styles.section}>
          <h2>Testimonials</h2>
          <p>What our users say...</p>
        </section>
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>Get in touch...</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Follow us on social media...</p>
      </footer>
    </div>
  )
}