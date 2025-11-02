import { Layers, Search, Sparkles, MessageSquare } from 'lucide-react'

const PPLX_BLUE = '#335CFF'

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Everything you need</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">Two powerful areas designed to supercharge your productivity.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* AI Playground */}
        <Card>
          <Header icon={<Sparkles className="h-5 w-5" />} title="AI Playground" />
          <ul className="mt-3 space-y-2 text-sm text-black/80 dark:text-white/80">
            <li className="flex items-center gap-2"><Dot /> Flashcard creation</li>
            <li className="flex items-center gap-2"><Dot /> Note summaries</li>
            <li className="flex items-center gap-2"><Dot /> AI chat</li>
            <li className="flex items-center gap-2"><Dot /> Free document upload (unlimited)</li>
            <li className="flex items-center gap-2"><Dot /> Free image upload (unlimited)</li>
          </ul>
        </Card>
        {/* Tool Directory */}
        <Card>
          <Header icon={<Search className="h-5 w-5" />} title="Tool Directory" />
          <ul className="mt-3 space-y-2 text-sm text-black/80 dark:text-white/80">
            <li className="flex items-center gap-2"><Dot /> 1000+ free tools</li>
            <li className="flex items-center gap-2"><Dot /> Free assets</li>
            <li className="flex items-center gap-2"><Dot /> UI mockups</li>
            <li className="flex items-center gap-2"><Dot /> AI search functionality</li>
            <li className="flex items-center gap-2"><Dot /> Easy tool discovery</li>
          </ul>
        </Card>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat>100% Free</Stat>
        <Stat>1000+ Tools</Stat>
        <Stat>Unlimited Uploads</Stat>
        <Stat>AI Powered</Stat>
      </div>

      <div id="get-started" className="mt-10 flex items-center justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: PPLX_BLUE }}
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
      {children}
    </div>
  )
}

function Header({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-lg" style={{ backgroundColor: PPLX_BLUE + '1a' }}>
        <div className="text-black dark:text-white" style={{ color: PPLX_BLUE }}>{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
    </div>
  )
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: PPLX_BLUE }} />
}

function Stat({ children }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-medium text-black/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
      {children}
    </div>
  )
}
