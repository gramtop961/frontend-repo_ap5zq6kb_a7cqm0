import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#335CFF]/20 selection:text-black dark:bg-black dark:text-white">
      {/* Top subtle gradient accent */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5" />

      <Navbar />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default App
