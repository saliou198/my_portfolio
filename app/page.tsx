"use client";
import { useState } from "react";
import TextPressure from "./TextPressure";
import FloatingLines from "./FloatingLines";
import GradualBlur from "./GradualBlur";
import NavBar from "./navBar";
import Skills from "./skills";
import Aurora from "./Aurora";

const backgroundWaves = ["top", "middle", "bottom"] as const;
const backgroundThemes = [
  {
    name: "Floating Lines",
    kind: "floatinglines",
    gradient: ["#22c55e", "#6d35f0", "#e945f5"],
    overlay: "bg-black/55",
  },
  {
    name: "Aurora",
    kind: "aurora",
    gradient: ["#38bdf8", "#22d3ee", "#14b8a6"],
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
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none">
        {activeTheme.kind === "floatinglines" && (
          <FloatingLines
            enabledWaves={[...backgroundWaves]}
            lineCount={[8, 13, 18]}
            lineDistance={[11, 7, 10]}
            bendRadius={7}
            bendStrength={-2}
          />
        )}
        {activeTheme.kind === "aurora" && (
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        )}
      </div>
      <div>
      </div>
      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${activeTheme.overlay}`}
      />
      <div className="relative z-10">
        <NavBar
          name="Saliou Dieng"
          themeName={activeTheme.name}
          themeColors={[...activeTheme.gradient]}
          onThemeChange={changeBackgroundTheme}
        />
        <main className="main flex flex-col items-center p-4 mt-20 text-white mr-40">
          <p className="mb-4 mr-40 text-7xl font-bold text-white">
            Hi! I am <br />
          </p>
          <div style={{ position: "relative", height: "100px" }}>
            <TextPressure
              text="Saliou Dieng!"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={72}
            />
          </div>
          <br />
          <p className="text-lg text-slate-300 font-bold ml-40">
            A computer science student, building skills in front-end
            development.
          </p>
        </main>
        
        <div className="mx-auto mt-10 flex w-[min(92%,72rem)] flex-wrap justify-center gap-3 sm:gap-4 md:justify-start md:pl-16">
          {techStack.map((label) => (
            <button
              key={label}
              className="cursor-pointer rounded-full border border-white/20 px-5 py-2 text-base font-semibold text-white backdrop-blur-md transition-transform duration-300 hover:scale-110 sm:text-lg"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative mt-20">
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
