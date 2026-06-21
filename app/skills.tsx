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

  return (
    <section
      id="skills"
      className="mx-auto mt-24 w-[min(92%,72rem)] scroll-mt-36 pb-24 text-white"
    >
      <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:tracking-[0.32em]">
            Technical expertise
          </p>
          <h2 className="text-[clamp(2rem,7vw,3.25rem)] font-bold leading-tight text-white">
            Building modern front-end experiences.
          </h2>
        </div>
        <p className="max-w-sm text-base leading-7 text-slate-300">
          A growing stack focused on what matters: clarity, interaction,
          responsive design and clean code.
        </p>
      </div>

      <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(124,255,103,0.08),rgba(180,151,207,0.08),rgba(82,39,255,0.12))] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6 md:p-7">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Current stack
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              The frameworks I am practicing the most.
            </p>
          </div>
          <span className="w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Front-end
          </span>
        </div>

        <div className="space-y-6">
          {stack.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{skill.name}</p>
                  <p className="text-xs text-slate-400">{skill.detail}</p>
                </div>
                <p className="text-sm font-medium text-emerald-200">
                  {skill.level}
                </p>
              </div>
              <div className="h-3 overflow-hidden rounded-full border border-white/10 bg-black/35">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-fuchsia-300 to-violet-500 shadow-[0_0_18px_rgba(180,151,207,0.45)]"
                  style={{ width: skill.width }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-4 gap-2" aria-hidden="true">
          {stack.map((skill) => (
            <div key={`${skill.name}-marker`}>
              <div
                className="rounded-full bg-white/15"
                style={{ height: "2px", width: skill.width }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
