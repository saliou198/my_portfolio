export default function Skills() {
  const stack = [
    {
      name: "React",
      level: "Solid basics",
      width: "72%",
      detail: "Components, props, state, hooks",
    },
    {
      name: "TypeScript",
      level: "Growing",
      width: "58%",
      detail: "Types, interfaces, safer props",
    },
    {
      name: "Next.js",
      level: "Practicing",
      width: "64%",
      detail: "App Router, pages, components",
    },
    {
      name: "Tailwind CSS",
      level: "Comfortable",
      width: "76%",
      detail: "Responsive UI, spacing, states",
    },
  ];

  const strengths = [
    {
      number: "01",
      title: "Clean interfaces",
      text: "I turn ideas into readable, responsive pages that feel simple to explore.",
    },
    {
      number: "02",
      title: "Reusable components",
      text: "I think in simple blocks: sections, cards, buttons, navigation and states.",
    },
    {
      number: "03",
      title: "Steady growth",
      text: "I am learning to make projects more typed, maintainable and polished.",
    },
  ];

  return (
    <section className="mx-auto mt-24 w-[min(92%,72rem)] pb-24 text-white">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300">
            Technical expertise
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Building modern front-end experiences.
          </h2>
        </div>
        <p className="max-w-sm text-base leading-7 text-slate-300">
          A growing stack focused on what matters: clarity, interaction,
          responsive design and clean code.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/[0.09]"
            >
              <span className="text-sm font-bold text-fuchsia-300">
                {strength.number}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-white">
                {strength.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {strength.text}
              </p>
            </article>
          ))}
        </div>

        <div className="rounded-lg border border-white/10 bg-black/45 p-6 backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Current stack
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                The frameworks I am practicing the most.
              </p>
            </div>
            <span className="rounded-full border border-cyan-300/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Front-end
            </span>
          </div>

          <div className="space-y-5">
            {stack.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{skill.name}</p>
                    <p className="text-xs text-slate-400">{skill.detail}</p>
                  </div>
                  <p className="text-sm font-medium text-emerald-200">
                    {skill.level}
                  </p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300"
                    style={{ width: skill.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-4">
        {["Responsive", "Animations", "Clean layout", "Learning mindset"].map(
          (item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm"
            >
              {item}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
