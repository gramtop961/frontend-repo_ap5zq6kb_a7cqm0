import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <section id="search" className="relative mx-auto -mt-8 max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
      >
        <div className="flex items-center gap-2 rounded-xl bg-black/60 px-4 py-3 ring-1 ring-inset ring-white/10">
          <Search className="h-5 w-5 text-sky-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 1000+ free tools, assets, and UI mockups..."
            className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none"
          />
          <kbd className="hidden rounded-md bg-white/10 px-2 py-1 text-xs text-white/70 sm:block">
            ⌘K
          </kbd>
        </div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-sky-500/10 blur-2xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>
      <p className="mt-3 px-2 text-center text-sm text-white/60">
        Type anything—our AI will surface the most relevant tools instantly.
      </p>
    </section>
  )
}
