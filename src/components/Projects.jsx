import TrabaWhoImg from "../../assets/img/TrabaWHO.jpg";
import GabaySakunaImg from "../../assets/img/GabaySakuna.png";
import PortfolioImg from "../../assets/img/Portfolio.png";
import WhimsyImg from "../../assets/img/Whimsy.png";

export default function Projects() {
  const designSystems = [
    {
      title: "Whimsy Cafe",
      tag: "Design System",
      hint: "Playful ordering experience for a modern café collective.",
      url: "https://www.figma.com/proto/hAnHkbi3sFHaSvMi7DmH6J/Whimsy?node-id=0-1&t=0iJxdT3KcdUkHtEf-1",
      image: WhimsyImg,
      tools: ["UI Design", "Prototype", "Figma"],
    },
    {
      title: "TrabaWho",
      tag: "Design System",
      hint: "Employment platform matching blue-collar workers with safe gigs.",
      url: "https://www.figma.com/proto/52edM59GDYtuKs7OpvBo8c/TrabaWho-Design-Prototype?node-id=0-1&t=fIthIcwuTFm2krLV-1",
      image: TrabaWhoImg,
      tools: ["UI Design", "Prototype", "Figma"],
    },
  ];

  const builds = [
    {
      title: "Portfolio Site",
      tag: "React JS",
      hint: "A portfolio that grows and improves as I do.",
      url: "https://johnlien-uiux.vercel.app/",
      image: PortfolioImg,
      tools: ["React", "Vite", "Tailwind"],
    },
    {
      title: "GabaySakuna",
      tag: "Product Website",
      hint: "Disaster risk management system for Legazpi DRRMO.",
      url: "https://gabaysakuna.org",
      image: GabaySakunaImg,
      tools: ["React", "React Native", "Expo"],
    },
  ];

  const sections = [
    {
      title: "Product design & prototyping",
      subtitle: "High-fidelity prototypes, systems, and applications",
      items: designSystems,
    },
    {
      eyebrow: "Web builds",
      title: "Front-end engineering",
      subtitle: "From concept to production-ready experiences.",
      items: builds,
    },
  ];

  return (
    <section id="projects" className="section border-t border-white/5">
      {/* Section Intro - Centered */}
      <div className="mx-auto max-w-4xl space-y-6 text-center animate-fade-in-up">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <p className="text-2xl font-bold leading-tight text-zinc-300 sm:text-3xl">
          Designing for clarity—and building it
        </p>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
          Split between systems work in Figma and end-to-end web builds. Each piece balances aesthetics, accessibility, and
          user experience.
        </p>
      </div>

      <div className="mt-20 space-y-20">
        {sections.map((section, sectionIndex) => (
          <div key={section.title} className="space-y-8">
            {/* Subsection Header - Centered */}
            <div className="mb-10 text-center">
              <h3 className="heading-md mb-3 text-white">{section.title}</h3>
              <p className="mx-auto max-w-2xl text-zinc-400">{section.subtitle}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {section.items.map((project, index) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="card group flex h-full flex-col overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(59,130,246,0.25)] focus-visible:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-zinc-900/80 shadow-2xl">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="aspect-[16/10] w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute right-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-gradient-to-r from-blue-500/90 to-purple-500/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm shadow-lg">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">{project.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">{project.hint}</p>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tools?.map((tool) => (
                          <span key={tool} className="chip text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-all group-hover:gap-3 group-hover:text-blue-200">
                          View Project
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 transition-all group-hover:bg-blue-500/20 group-hover:scale-110">
                          <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


