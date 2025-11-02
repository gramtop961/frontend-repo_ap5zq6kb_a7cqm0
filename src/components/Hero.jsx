import { motion } from 'framer-motion'
import { Rocket, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated glow background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, 10, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl"
          animate={{
            x: [0, -15, 10, 0],
            y: [0, -10, 15, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-sky-400" />
          Introducing Megalo — your free tool directory
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          Tool Directory for makers and teams
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
        >
          Access 1000+ curated tools, free assets, and UI mockups. Use AI-powered search to instantly find exactly what you need.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-black transition hover:bg-sky-400"
          >
            <SearchIcon className="h-5 w-5" />
            Try AI Search
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <Rocket className="h-5 w-5 text-sky-300" />
            Browse tools
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur"
        >
          <ul className="grid grid-cols-2 gap-4 text-left text-sm text-white/80 sm:grid-cols-4">
            <li className="rounded-lg bg-white/5 px-3 py-2">1000+ free tools</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">Free assets</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">UI mockups</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">AI search functionality</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function SearchIcon(props) {
  // Minimal search icon to avoid extra imports
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
