export default function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 pb-12">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/70 backdrop-blur sm:flex-row sm:text-left">
        <p>
          Megalo — Tool Directory • Built for creators. <span className="text-sky-400">Free forever.</span>
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#search" className="hover:text-white">Search</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Megalo. All rights reserved.</p>
    </footer>
  )
}
