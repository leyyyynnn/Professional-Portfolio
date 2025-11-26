export default function About() {
  const highlights = [
    {
      title: "Clarity first",
      desc: "Crisp hierarchy, purposeful motion, and inclusive patterns people understand quickly.",
    },
    {
      title: "Systems thinking",
      desc: "Reusable components, tokens, and documentation that keep teams aligned while building fast.",
    },
    {
      title: "Reliable handoff",
      desc: "Readable specs, accessibility notes, and paired dev sessions to de-risk build time.",
    },
  ];

  const experiences = [
    {
      title: "UI/UX and Front End Developer",
      org: "Independent / Freelance",
      period: "2025 — Present",
      summary: "Partnering with civic orgs and student founders to build responsive dashboards and brand sites.",
    },
    {
      title: "BSIT · Web & Mobile Applications",
      org: "FEU Institute of Technology",
      period: "2022 — 2026",
      summary: "Freelance UI/UX designer specializing in modern, user-focused interfaces and responsive web and mobile design.",
    },
  ];

  const tools = [
    {
      name: "Figma",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
        </svg>
      )
    },
    {
      name: "VS Code",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
      )
    },
    {
      name: "HTML",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    },
    {
      name: "CSS",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      )
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: "React",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-60 12 12)"/>
        </svg>
      )
    },
    {
      name: "React Native",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-60 12 12)"/>
          <rect x="10" y="2" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="10" y="18" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="2" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="18" y="10" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
        </svg>
      )
    }
  ];

  const focusAreas = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive, user-centered digital experiences through research and design.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Frontend Development",
      desc: "Building responsive, performant web applications with modern frameworks and tools.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      desc: "Ensuring reliability through comprehensive testing and quality control processes.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Project Management",
      desc: "Leading cross-functional teams to deliver projects on time and within scope.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="section border-t border-white/5">
      {/* Introduction - Centered */}
      <div className="mx-auto max-w-4xl space-y-6 text-center animate-fade-in-up">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          About
        </h2>
        <p className="text-2xl font-bold leading-tight text-zinc-300 sm:text-3xl">
          Structure and soul for every interface
        </p>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
          I'm <span className="font-bold text-white">Johnlien Falculan</span>, a UI/UX designer and frontend developer currently pursuing BSIT at FEU Institute of Technology. 
          I transform complex product ideas into accessible, high-performing experiences that teams can maintain and scale.
        </p>
      </div>

      {/* Experience Timeline - Full Width */}
      <div className="mt-20">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-3 text-blue-200">Experience</p>
          <h3 className="heading-md mb-3 text-white">Professional Journey</h3>
          <p className="mx-auto max-w-2xl text-zinc-400">Building experience through meaningful work</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="surface group relative overflow-hidden p-8 transition-all hover:shadow-[0_40px_100px_rgba(59,130,246,0.3)] animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-60"></div>
              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      {index === 0 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      )}
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-300">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {exp.period}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="mb-2 text-2xl font-black text-white">{exp.title}</h4>
                  <p className="text-base font-semibold text-blue-300">{exp.org}</p>
                </div>
                <p className="leading-relaxed text-zinc-300">{exp.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Expertise - Full Width Grid */}
      <div className="mt-20">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-3 text-blue-200">What I Do</p>
          <h3 className="heading-md mb-3 text-white">Core Expertise</h3>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Specialized skills that drive successful digital products
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="surface group p-8 text-center transition-all hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(59,130,246,0.25)] animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                <div className="text-blue-400">
                  {area.icon}
                </div>
              </div>
              <p className="mb-3 text-xl font-bold text-white">{area.title}</p>
              <p className="text-sm leading-relaxed text-zinc-400">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Growth Section */}
      <div className="mt-20">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-3 text-blue-200">My Toolkit</p>
          <h3 className="heading-md mb-3 text-white">Skills & Capabilities</h3>
          <p className="mx-auto max-w-2xl text-zinc-400">Tools I use and skills I'm developing</p>
        </div>

        {/* Tools - Infinite Horizontal Scroll */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll flex gap-8 md:gap-12">
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <div
                key={`${tool.name}-1`}
                className="group flex flex-shrink-0 flex-col items-center gap-3 transition-all hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <div className="h-8 w-8 text-blue-400">
                    {tool.icon}
                  </div>
                </div>
                <p className="text-sm font-semibold text-zinc-400 transition-colors group-hover:text-white">
                  {tool.name}
                </p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div
                key={`${tool.name}-2`}
                className="group flex flex-shrink-0 flex-col items-center gap-3 transition-all hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <div className="h-8 w-8 text-blue-400">
                    {tool.icon}
                  </div>
                </div>
                <p className="text-sm font-semibold text-zinc-400 transition-colors group-hover:text-white">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



