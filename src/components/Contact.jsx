export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="heading-lg">Contact</h2>
      <p className="subtle mt-2">Have a project in mind? Let’s talk.</p>

      <form className="card mt-8 space-y-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="subtle text-sm">Name</label>
            <input className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
          </div>
          <div>
            <label className="subtle text-sm">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="subtle text-sm">Message</label>
          <textarea rows="5" className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tell me a bit about your project" />
        </div>
        <div className="flex items-center justify-between">
          <p className="subtle text-sm">Or email directly: <a className="text-blue-400 hover:text-blue-300" href="mailto:you@example.com">falculanjohnlien@gmail.com</a></p>
          <button type="submit" className="btn-primary">Send Message</button>
        </div>
      </form>
    </section>
  );
}



