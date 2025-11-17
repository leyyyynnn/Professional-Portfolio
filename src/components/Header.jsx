import resumePdf from "../../assets/img/Falculan_Johnlien_Resume.pdf";

export default function Header() {
  const nav = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-2xl shadow-lg shadow-black/10">
      <div className="layout-container py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="#hero" className="group flex items-center gap-3 text-white transition-transform hover:scale-105">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-sm font-bold tracking-tight text-white shadow-lg shadow-blue-500/20 transition-all group-hover:shadow-xl group-hover:shadow-blue-500/30">
              JF
            </span>
            <span className="flex flex-col text-sm font-semibold leading-tight">
              Johnlien Falculan
              <span className="text-xs font-normal uppercase tracking-wider text-zinc-400">Portfolio</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2 py-1 shadow-inner shadow-black/20 md:flex"
            aria-label="Primary navigation"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href={resumePdf}
              className="link-ghost hidden sm:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
            <a href="#contact" className="btn-primary group">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Let's Talk
              <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <nav
          className="mt-3 flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/5 bg-white/5 px-2 py-2 text-sm text-zinc-300 md:hidden"
          aria-label="Primary navigation mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-1.5 font-medium transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}


