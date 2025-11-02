import heroImg from "../../assets/img/hero-img-portfolio.png";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="bg-app">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-16 md:grid-cols-2 md:gap-12 md:pt-20">
          <div>
            <span className="badge">Open to work</span>
            <h1 className="heading-xl mt-4">Where design meets performance</h1>
            <p className="mt-4 max-w-prose text-zinc-400">
              Focused on usability, performance, and accessibility to deliver seamless user experiences.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">View Work</a>
              <a className="inline-flex items-center justify-center rounded-lg border border-zinc-800 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-900/60">
                Download CV
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="card p-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent flex items-center justify-center">
                <img src={heroImg} alt="Portrait" className="h-full w-auto object-contain scale-100 md:scale-120" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div className="card p-3 text-center"><p className="font-semibold">2</p><p className="subtle">Years</p></div>
                <div className="card p-3 text-center"><p className="font-semibold">5</p><p className="subtle">Projects</p></div>
                <div className="card p-3 text-center"><p className="font-semibold">100%</p><p className="subtle">Project Success Rate</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-blue-700/10 blur-3xl" />
      </div>
    </section>
  );
}


