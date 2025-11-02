export default function Projects() {
  const figma = [
    { title: "Game Cafe Website", tag: "Design System", hint: "Figma prototype", url: "https://www.figma.com" },
    { title: "Job Finding Platform", tag: "Design System", hint: "Figma file", url: "https://www.figma.com" },
  ];
  const websites = [
    { title: "Portfolio Site", tag: "React JS", hint: "Personal Portfolio Website", url: "https://example.com" },
    { title: "GabaySakuna", tag: "React JS", hint: "Disaster Risk Management System", url: "https://gabaysakuna.com" },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="heading-lg">Projects</h2>
      <p className="subtle mt-2">A selection of design and build work.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-semibold text-zinc-100">Figma</h3>
          <div className="grid gap-4">
            {figma.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-visible card p-5 transition duration-200 hover:border-blue-500/30 hover:bg-zinc-900 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
                aria-label={`Open ${p.title}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 -z-10 opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_55%)]"
                />
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="subtle text-sm">{p.hint}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge">{p.tag}</span>
                    <svg
                      className="h-4 w-4 text-blue-300 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-zinc-100">Websites</h3>
          <div className="grid gap-4">
            {websites.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-visible card p-5 transition duration-200 hover:border-blue-500/30 hover:bg-zinc-900 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
                aria-label={`Open ${p.title}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 -z-10 opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_55%)]"
                />
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="subtle text-sm">{p.hint}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge">{p.tag}</span>
                    <svg
                      className="h-4 w-4 text-blue-300 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


