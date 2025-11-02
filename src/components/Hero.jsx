import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const PPLX_BLUE = '#335CFF'

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
      {/* Content */}
      <div>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: PPLX_BLUE }} />
          Megalo — The Only AI Tool Directory You Need
        </motion.div>
        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-5 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl"
        >
          Search niche tools from a directory of 1200+ with AI
        </motion.h1>
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
          className="mt-4 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70"
        >
          AI search to help you find them • Create flashcards • Summarize notes • Chat with AI. Upload documents and images — all in one place.
        </motion.p>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <motion.a
            whileHover={prefersReduced ? {} : { y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: PPLX_BLUE }}
          >
            <Rocket className="h-4 w-4" />
            Get Started
          </motion.a>
          <motion.a
            whileHover={prefersReduced ? {} : { y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            Explore features
          </motion.a>
        </motion.div>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 6 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-2 text-xs text-black/70 dark:text-white/60"
        >
          <Badge>100% Free</Badge>
          <Badge>1000+ Tools</Badge>
          <Badge>Unlimited Uploads</Badge>
          <Badge>AI Powered</Badge>
        </motion.div>
      </div>

      {/* Spline Scene */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
        whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/5 md:h-[520px]"
      >
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient overlay that does not block interaction */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-[0.04] dark:from-black" />
      </motion.div>
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-black/10 bg-white px-3 py-1 transition-colors dark:border-white/10 dark:bg-white/10">
      <span className="text-[11px] font-medium text-black/70 dark:text-white/70">{children}</span>
    </span>
  )
}
