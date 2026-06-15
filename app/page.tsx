"use client";
import sclae from "motion/react";

import { scale } from "motion/react";
import FloatingLines from "./FloatingLines";
import NavBar from "./navBar";
import Skills from "./skills";

const backgroundWaves = ["top", "middle", "bottom"] as const;
const backgroundGradient = ["#22c55e", "#6d35f0", "#e945f5"];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none">
        <FloatingLines
          enabledWaves={[...backgroundWaves]}
          lineCount={[8, 13, 18]}
          lineDistance={[11, 7, 10]}
          bendRadius={7}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          parallaxStrength={0.12}
          animationSpeed={0.85}
          linesGradient={backgroundGradient}
          mixBlendMode="screen"
        />
      </div>
      <div className="fixed inset-0 z-0 bg-black/55 pointer-events-none" />
      <div className="relative z-10">
        <NavBar name="My portfolio" />
        <main className="main flex flex-col items-center p-4 mt-20 text-white mr-40">
          <p className="mb-4 mr-40 text-7xl font-bold text-white">
            Hi! I am <br />
          </p>
          <h1 className="mr-70 text-6xl font-bold bg-clip-text  p-3 rounded">
            Saliou Dieng
          </h1>
          <br />
          <p className="text-lg text-slate-300 font-bold ml-40">A computer science student, building skills in front-end development.</p>
        </main>
        <div className="flex flex-wrap gap-10 mt-10 ml-70">
          {["react", "typescript", "nextjs", "Tailwind Css"].map((label) => (
            <button
              key={label}
              className = "px-4 py-2 text-lg text-white pointer cursor-pointer rounded-full border border-white/20  backdrop-blur-md hover:scale-110 font-semibold transition-transform duration-300"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative mt-20">
        <Skills />
      </div>
    </div>
  );
}
