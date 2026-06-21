"use client";
import { useState } from "react";

import BlurText from "./reactbits components/BlurText";
import FloatingLines from "./reactbits components/FloatingLines";
import GradualBlur from "./reactbits components/GradualBlur";
import NavBar from "./navBar";
import Skills from "./skills";
import Aurora from "./reactbits components/Aurora";
import TargetCursor from "./reactbits components/TargetCursor";
import LiquidEther from "./reactbits components/liquidEther";

const backgroundThemes = [
  {
    name: "Liquid Ether",
    kind: "liquidether",
    gradient: ["#5227FF", "#FF9FFC", "#B497CF"],
    overlay: "bg-slate-950/55",
  },
  {
    name: "Floating Lines",
    kind: "floatinglines",
    gradient: ["#c522c0", "#7b7171", "#474047"],
    overlay: "bg-black/55",
  },
  {
    name: "Aurora",
    kind: "aurora",
    gradient: ["#7cff67", "#B497CF", "#5227FF"],
    overlay: "bg-slate-950/55",
  },
] as const;

const techStack = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

const aboutHighlights = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern, responsive interfaces with React, Next.js and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Linux",
    text: "At home on the command line, system administration and bare-metal setups.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    text: "Exploring networking, hardening and secure infrastructure from the ground up.",
  },
];

const projectCards = [
  {
    title: "Portfolio Website",
    text: "A polished personal site with animated backgrounds, smooth sections and responsive UI.",
  },
  {
    title: "Interactive UI",
    text: "Reusable components, clean layouts and motion details built with front-end tools.",
  },
  {
    title: "Systems Practice",
    text: "Small Linux and cybersecurity labs to understand how real systems behave.",
  },
];

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0);

  const activeTheme = backgroundThemes[themeIndex];

  const changeBackgroundTheme = () => {
    setThemeIndex((current) => (current + 1) % backgroundThemes.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <div className="fixed inset-0 z-0 h-dvh w-screen pointer-events-none">
        {activeTheme.kind === "liquidether" && (
          <LiquidEther
            colors={[...activeTheme.gradient]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        )}
        {activeTheme.kind === "floatinglines" && (
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[8, 13, 18]}
            lineDistance={[11, 7, 10]}
            bendRadius={8}
            bendStrength={-2}
            interactive
            parallax
            animationSpeed={1}
            linesGradient={[...activeTheme.gradient]}
          />
        )}
        {activeTheme.kind === "aurora" && (
          <Aurora
            colorStops={[...activeTheme.gradient]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        )}
      </div>
      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${activeTheme.overlay}`}
      />
      <NavBar
        name="Saliou Dieng"
        themeName={activeTheme.name}
        themeColors={[...activeTheme.gradient]}
        onThemeChange={changeBackgroundTheme}
      />
      <div className="relative z-10">
        <main
          id="home"
          className="mx-auto w-[min(92%,72rem)] scroll-mt-36 px-2 pt-36 text-white sm:pt-28 md:pt-32"
        >
          <p className="mb-4 max-w-3xl text-[clamp(2.75rem,12vw,4.5rem)] font-bold leading-[0.95] text-white">
            Hi! I am <br />
          </p>
          <BlurText
            text="Saliou Dieng!"
            delay={95}
            animateBy="letters"
            direction="top"
            stepDuration={0.32}
            className="cursor-target min-h-20 max-w-3xl text-5xl font-bold leading-none text-white sm:min-h-24 sm:text-6xl md:min-h-28 md:text-7xl"
          />
          <p className="mt-6 max-w-2xl text-base font-bold leading-7 text-slate-300 sm:text-lg">
            A computer science student, building skills in front-end
            development.
          </p>
        </main>

        <div className="mx-auto mt-10 flex w-[min(92%,72rem)] flex-wrap justify-start gap-3 px-2 sm:gap-4">
          {techStack.map((label) => (
            <button
              key={label}
              className="cursor-target rounded-full border border-white/20 px-5 py-2 text-base font-semibold text-white backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:text-lg"
            >
              {label}
            </button>
          ))}
        </div>

        <section
          id="about"
          className="mx-auto mt-20 grid w-[min(92%,64rem)] scroll-mt-36 gap-6 px-2 text-white lg:grid-cols-[0.9fr_1fr] lg:items-start"
        >
          <div>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.34em] text-emerald-300">
              About me
            </p>
            <h2 className="max-w-xl text-[clamp(2rem,4.7vw,3.25rem)] font-bold leading-none text-white">
              Computer science student, building in the open.
            </h2>
            <p className="mt-5 max-w-xl text-[clamp(0.95rem,1.45vw,1.05rem)] leading-7 text-slate-300">
              I'm Saliou Dieng, a Computer Science student at DAUST. I build
              skills across web development, Linux and cybersecurity, turning
              ideas into clean, responsive interfaces while getting comfortable
              on the command line and curious about how systems are secured.
            </p>
          </div>

          <div className="space-y-4">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5"
              >
                <span className="text-sm font-bold text-fuchsia-300">
                  {item.number}
                </span>
                <h3 className="mt-4 text-[clamp(1.1rem,1.9vw,1.35rem)] font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[clamp(0.88rem,1.3vw,0.98rem)] leading-6 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto mt-28 w-[min(92%,72rem)] scroll-mt-36 px-2 text-white"
        >
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Projects
            </p>
            <h2 className="text-[clamp(2.25rem,8vw,3.75rem)] font-bold leading-tight text-white">
              Small builds, real practice.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {project.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <Skills />

        <section
          id="contact"
          className="mx-auto mt-20 w-[min(92%,72rem)] scroll-mt-36 px-2 pb-32 text-white"
        >
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300">
              Contact
            </p>
            <h2 className="text-[clamp(2rem,7vw,3.25rem)] font-bold leading-tight text-white">
              Open to front-end projects, Linux practice and cybersecurity
              learning.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              I like steady, practical work: clear interfaces, reliable
              systems and projects that make the next idea easier to build.
            </p>
          </div>
        </section>
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="2rem"
        strength={1}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  );
}
