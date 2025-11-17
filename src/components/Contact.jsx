import resumePdf from "../../assets/img/Falculan_Johnlien_Resume.pdf";

export default function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: "falculanjohnlien@gmail.com",
      href: "mailto:falculanjohnlien@gmail.com",
      hint: "Replies within 24h",
    },
    {
      label: "LinkedIn",
      value: "johnlien-falculan",
      href: "https://www.linkedin.com/in/johnlien-falculan-218596339/",
      hint: "Connect & message",
    },
    {
      label: "Résumé",
      value: "Download PDF",
      href: resumePdf,
      hint: "Full experience",
      download: true,
    },
  ];

  return (
    <section id="contact" className="section border-t border-white/5">
      {/* Section Intro - Centered */}
      <div className="mx-auto max-w-4xl space-y-6 text-center animate-fade-in-up">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Contact
        </h2>
        <p className="text-2xl font-bold leading-tight text-zinc-300 sm:text-3xl">
          Let's build something thoughtful
        </p>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
          Tell me about your product goals, timelines, and success metrics. I'll respond with next steps, a quick scope
          check, and availability.
        </p>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.85fr_1fr]">
        <div className="surface space-y-8 p-8 transition-all hover:shadow-[0_40px_100px_rgba(59,130,246,0.2)] animate-slide-in-left-scroll">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <svg className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Prefer direct contact?</p>
                <p className="text-sm text-zinc-400">Fast response guaranteed</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                download={method.download}
                className="card group flex items-center gap-4 p-5 text-sm text-white transition-all hover:scale-[1.02] hover:border-blue-500/40 hover:bg-blue-500/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 transition-all group-hover:bg-blue-500/20">
                  {method.label === "Email" && (
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  )}
                  {method.label === "LinkedIn" && (
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {method.label === "Résumé" && (
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{method.label}</p>
                  <p className="mt-0.5 font-semibold text-white group-hover:text-blue-200 transition-colors">{method.value}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400">{method.hint}</span>
                  <svg className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm">
              <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-white">Timezone</p>
                <p className="text-zinc-400">GMT+8 · Manila, PH</p>
              </div>
            </div>
          </div>
        </div>

        <form className="surface space-y-6 p-8 transition-all hover:shadow-[0_40px_100px_rgba(59,130,246,0.2)] animate-slide-in-right-scroll">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Send a Message</p>
                <p className="text-sm text-zinc-400">I'll reply within 24 hours</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300" htmlFor="contact-name">
                Your Name *
              </label>
              <input 
                id="contact-name" 
                name="name" 
                autoComplete="name" 
                className="form-input" 
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-300" htmlFor="contact-email">
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="form-input"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300" htmlFor="contact-details">
              Project Details *
            </label>
            <textarea
              id="contact-details"
              name="details"
              rows="6"
              className="form-input resize-none"
              placeholder="Tell me about your project, goals, timeline, and budget..."
              required
            />
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
            <div className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm leading-relaxed text-zinc-300">
                Prefer email? Reach me directly at{" "}
                <a className="font-semibold text-blue-300 transition-colors hover:text-blue-200" href="mailto:falculanjohnlien@gmail.com">
                  falculanjohnlien@gmail.com
                </a>
              </p>
            </div>
          </div>
          <button type="submit" className="btn-primary group w-full text-base sm:w-auto">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}



