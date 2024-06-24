import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sample Website</title>
      </Head>
      <header>
        <div className="container">
          <div className="logo">Logo</div>
          <nav>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <h1>Welcome to Our Application</h1>
        <p>Discover the amazing features we offer.</p>
      </section>
      <section id="features" className="features">
        <h2>Features</h2>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </section>
      <footer>
        <div id="contact" className="container">
          <p>Contact us: email@example.com</p>
          <nav>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </Layout>
  )
}