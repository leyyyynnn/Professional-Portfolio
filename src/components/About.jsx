export default function About() {
  const highlights = [
    { title: "Focused", desc: "Crisp interfaces with clear hierarchy and purpose." },
    { title: "Performant", desc: "Ship fast UIs with sensible defaults and clean code." },
    { title: "Accessible", desc: "Design with inclusivity and usability in mind." },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="heading-lg">About</h2>
      <p className="subtle mt-2 max-w-prose">
        I’m a designer and frontend engineer who cares about detail, speed, and polish. I bring ideas
        to life with modern, maintainable code and a strong sense for clean visuals.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="card p-6">
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="subtle mt-2">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



