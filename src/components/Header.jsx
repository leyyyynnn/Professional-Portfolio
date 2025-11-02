export default function Header() {
  const nav = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-white font-semibold tracking-tight">Johnlien</a>
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-zinc-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary md:inline-flex">Hire Me</a>
      </div>
    </header>
  );
}


