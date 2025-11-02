import { motion } from 'framer-motion'
import { Search, Layers, Boxes, Sparkles } from 'lucide-react'

const features = [
  {
    title: '1000+ free tools',
    desc: 'Carefully curated utilities for design, dev, and growth — all free.',
    icon: Boxes,
  },
  {
    title: 'Free assets',
    desc: 'Icons, illustrations, and templates to speed up your workflow.',
    icon: Layers,
  },
  {
    title: 'UI mockups',
    desc: 'Ready-to-use mockups and components to prototype faster.',
    icon: Search,
  },
  {
    title: 'AI search',
    desc: 'Natural language search finds exactly what you need instantly.',
    icon: Sparkles,
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto mt-20 max-w-6xl px-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Everything in one place</h2>
        <p className="mt-3 text-white/70">Easy discovery with powerful AI to guide your search.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500/20 text-sky-300 ring-1 ring-inset ring-sky-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
