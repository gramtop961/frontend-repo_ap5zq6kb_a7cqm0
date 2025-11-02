import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Top gradient header glow */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-sky-500/20 to-transparent" />

      <header className="relative">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-sky-500" />
            <span className="text-xl font-bold tracking-tight text-white">Megalo</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#search" className="hover:text-white">AI Search</a>
            <a href="#" className="rounded-md bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Sign in</a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <SearchBar />
        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default App
