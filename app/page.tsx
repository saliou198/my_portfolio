"use client";
import { useState } from "react";
import TextPressure from "./reactbits components/TextPressure";
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
      <button>peace n love</button>

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
        <main className="mx-auto w-[min(92%,72rem)] px-2 pt-28 text-white sm:pt-24 md:pt-24">
          <p className="mb-4 max-w-3xl text-[clamp(2.75rem,12vw,4.5rem)] font-bold leading-[0.95] text-white">
            Hi! I am <br />
          </p>
          <div className="relative h-[clamp(4.5rem,18vw,7rem)] w-full max-w-[48rem]">
            <TextPressure
              text="Saliou Dieng!"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              className="cursor-target"
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={42}
            />
          </div>
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
      </div>
      <div className="relative z-10 mt-20">
        <Skills />
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  );
}
