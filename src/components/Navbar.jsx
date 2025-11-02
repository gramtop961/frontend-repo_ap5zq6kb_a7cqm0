import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const PPLX_BLUE = '#335CFF'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/10" />
          <span className="text-lg font-semibold tracking-tight text-black dark:text-white">Megalo</span>
        </a>
        <div className="flex items-center gap-4">
          <span className="hidden rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/70 dark:border-white/10 dark:text-white/70 md:inline">Free Forever</span>
          <a href="#terms" className="hidden text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white md:inline">Terms</a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-black transition hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: PPLX_BLUE }}
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}
