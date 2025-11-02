export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12">
      <div className="mt-16 rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
        <p className="text-sm text-black/70 dark:text-white/70">
          Created by <span className="font-medium">Divyanshu Mhatre</span> • <a id="terms" href="#" className="underline decoration-dotted underline-offset-4 hover:text-black dark:hover:text-white">Terms</a>
        </p>
        <p className="mt-2 text-xs text-black/50 dark:text-white/50">© {new Date().getFullYear()} Megalo. All rights reserved.</p>
      </div>
    </footer>
  )
}
