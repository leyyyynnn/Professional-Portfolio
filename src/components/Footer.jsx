export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="subtle text-sm">© {new Date().getFullYear()} Johnlien. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a className="text-zinc-400 hover:text-zinc-200" href="https://www.linkedin.com/in/johnlien-falculan-218596339/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-zinc-400 hover:text-zinc-200" href="https://github.com/leyyyynnn" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}


