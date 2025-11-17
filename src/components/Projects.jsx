import TrabaWhoImg from "../../assets/img/TrabaWHO.jpg";
import GabaySakunaImg from "../../assets/img/GabaySakuna.png";
import PortfolioImg from "../../assets/img/Portfolio.png";
import WhimsyImg from "../../assets/img/Whimsy.png";

export default function Projects() {
  const figma = [
    {
      title: "Whimsy Cafe",
      tag: "Design System",
      hint: "Figma prototype",
      url: "https://www.figma.com/proto/hAnHkbi3sFHaSvMi7DmH6J/Whimsy?node-id=0-1&t=0iJxdT3KcdUkHtEf-1",
      image: WhimsyImg,
    },
    {
      title: "TrabaWho",
      tag: "Design System",
      hint: "Figma prototype",
      url: "https://www.figma.com/proto/52edM59GDYtuKs7OpvBo8c/TrabaWho-Design-Prototype?node-id=0-1&t=fIthIcwuTFm2krLV-1",
      image: TrabaWhoImg,
    },
  ];
  const websites = [
    {
      title: "Portfolio Site",
      tag: "React JS",
      hint: "Personal Portfolio Website",
      url: "https://johnlien-uiux.vercel.app/",
      image: PortfolioImg,
    },
    {
      title: "GabaySakuna",
      tag: "React JS",
      hint: "Disaster Risk Management",
      url: "https://gabaysakuna.com",
      image: GabaySakunaImg,
    },
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
                <div className="flex items-center gap-4">
                  {p.image && (
                    <div className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900/60">
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 items-start justify-between gap-4">
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
                <div className="flex items-center gap-4">
                  {p.image && (
                    <div className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900/60">
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 items-start justify-between gap-4">
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


