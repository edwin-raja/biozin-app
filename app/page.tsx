import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Mission from './components/Mission'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Contact />
      <Footer />
    </main>
  )
}

