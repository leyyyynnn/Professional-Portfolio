import heroImg from "../../assets/img/hero-img-portfolio.png";
import resumePdf from "../../assets/img/Falculan_Johnlien_Resume.pdf";

export default function Hero() {

  const stack = ["Figma", "React", "React Native", "HTML", "CSS", "JavaScript"];

  const stats = [
    { label: "Years crafting", value: "2+" },
    { label: "Projects completed", value: "5" },
    { label: "Success rate", value: "100%" },
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="bg-app">
        <div className="section">
          {/* Main Hero - Centered Full Width */}
          <div className="min-h-[calc(100vh-96px)] flex flex-col justify-between py-12">
            {/* Top Section: Name, Role, Status */}
            <div className="mb-8 text-center animate-fade-in-up">
              <h1 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Johnlien <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">Falculan</span>
              </h1>
              
              <p className="mb-6 text-2xl font-bold text-zinc-300 sm:text-3xl">UI/UX Designer & Frontend Developer</p>
              
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-400">
                Crafting elegant, accessible digital experiences through user-centered design 
                and modern web development
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="surface group p-8 text-center transition-all hover:scale-105 hover:shadow-[0_30px_80px_rgba(59,130,246,0.25)]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <p className="mb-2 bg-gradient-to-br from-blue-400 to-blue-200 bg-clip-text text-3xl font-black text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <a className="btn-primary group text-base animate-bounce-in" href="#contact" style={{ animationDelay: '0.2s' }}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#projects" className="link-ghost group text-base animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Work
              </a>
              <a href={resumePdf} download="Falculan_Johnlien_Resume.pdf" className="link-ghost group text-base animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Tech Stack Inline */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Stack:</span>
              {stack.map((tool, index) => (
                <span 
                  key={tool} 
                  className="chip transition-all hover:scale-110 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-100"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl" />
      </div>
    </section>
  );
}


