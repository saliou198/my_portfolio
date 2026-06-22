"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Camera,
  Gamepad,
} from "lucide-react";
import Shuffle from './reactbits components/Shuffle';
import FloatingLines from "./reactbits components/FloatingLines";
import GradualBlur from "./reactbits components/GradualBlur";
import NavBar from "./navBar";
import Skills from "./skills";
import Aurora from "./reactbits components/Aurora";
import TargetCursor from "./reactbits components/TargetCursor";
import LiquidEther from "./reactbits components/liquidEther";

const backgroundThemes = [
  {
    name: "Aurora",
    kind: "aurora",
    gradient: ["#7cff67", "#B497CF", "#5227FF"],
    overlay: "bg-slate-950/55",
  },
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

const contactDetails = [
  {
    number: "01",
    label: "Email",
    value: "salioudieng2808@gmail.com",
    href: "mailto:salioudieng2808@gmail.com",
    icon: Mail,
  },
  {
    number: "02",
    label: "WhatsApp",
    value: "+221 78 702 56 23",
    href: "https://wa.me/221787025623",
    icon: MessageCircle,
  },
  {
    number: "03",
    label: "Base",
    value: "Senegal",
    href: undefined,
    icon: MapPin,
  },
];

const networkLinks = [
  {
    label: "LinkedIn",
    value: "/in/saliou-dieng",
    href: "https://www.linkedin.com/in/saliou-dieng-18389033a/",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "@saliou198",
    href: "https://github.com/saliou198",
    icon: Code2,
  },
  {
    label: "Instagram",
    value: "sliou19___",
    href: "https://www.instagram.com/sliou19___",
    icon: Camera,
  },
  {
    label: "Discord",
    value: "peacen_love",
    href: "https://discord.com/users/peacen_love",
    icon: Gamepad,
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
          <div className="h-[clamp(4.5rem,18vw,7rem)] w-full max-w-[48rem]">
             <Shuffle
              text="Saliou Dieng"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className = "text-7xl font-bold"
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
                className="cursor-target rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:border-emerald-300/35 hover:bg-white/[0.08] sm:p-5"
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
                className="cursor-target rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
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
          <div className="mb-10 flex items-center gap-4 border-t border-white/10 pt-8">
            <span className="h-11 w-11 border border-white/15 bg-white/[0.04] shadow-[0_0_24px_rgba(124,255,103,0.08)]" />
            <div className="h-px flex-1 bg-white/10" />
            <p className="hidden text-xs font-semibold uppercase tracking-[0.32em] text-slate-400 sm:block">
              Status: active
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <div className="border-l border-white/10 pl-6 sm:pl-10">
                <p className="max-w-xl text-[clamp(1.65rem,4.6vw,2.55rem)] font-semibold leading-tight text-white">
                  Open to opportunities, collaborations, and technical
                  conversations.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-300 backdrop-blur-xl sm:text-sm">
                  <span className="h-3 w-3 bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.75)]" />
                  Available for hire
                </div>
              </div>

              <div className="mt-12 space-y-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="text-sm font-semibold text-slate-500">
                        {item.number}
                      </span>
                      <span className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.22em] text-white sm:text-lg">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 text-emerald-200/80"
                          strokeWidth={1.7}
                        />
                        {item.label}
                      </span>
                      <span className="col-span-2 min-w-0 break-words text-left text-base font-medium text-slate-300 sm:col-auto sm:text-right sm:text-lg">
                        {item.value}
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="cursor-target grid grid-cols-[2.5rem_1fr] items-center gap-x-4 gap-y-3 rounded-lg border border-white/10 bg-black/20 px-4 py-5 no-underline backdrop-blur-xl transition duration-300 hover:border-emerald-300/35 hover:bg-white/[0.07] sm:grid-cols-[3rem_1fr_minmax(12rem,auto)] sm:px-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="cursor-target grid grid-cols-[2.5rem_1fr] items-center gap-x-4 gap-y-3 rounded-lg border border-white/10 bg-black/20 px-4 py-5 backdrop-blur-xl transition duration-300 hover:border-emerald-300/35 hover:bg-white/[0.07] sm:grid-cols-[3rem_1fr_minmax(12rem,auto)] sm:px-6"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-fuchsia-200/80">
                Network
              </p>
              <div className="space-y-3">
                {networkLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="cursor-target group grid grid-cols-[2.25rem_1fr_1.5rem] items-center gap-x-4 gap-y-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-5 no-underline backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/35 hover:bg-white/[0.075] sm:grid-cols-[2.5rem_1fr_auto_1.5rem] sm:px-6"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-slate-400 transition duration-300 group-hover:text-fuchsia-200"
                        strokeWidth={1.7}
                      />
                      <span className="text-base font-semibold uppercase tracking-[0.18em] text-white sm:text-lg">
                        {link.label}
                      </span>
                      <span className="col-span-2 col-start-2 min-w-0 break-words text-left text-sm text-slate-400 transition duration-300 group-hover:text-slate-200 sm:col-auto sm:col-start-auto sm:text-right sm:text-base">
                        {link.value}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-slate-500 transition duration-300 group-hover:text-emerald-200"
                        strokeWidth={1.8}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <a
                  href="mailto:salioudieng2808@gmail.com"
                  className="cursor-target flex items-center justify-between gap-5 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(124,255,103,0.08),rgba(180,151,207,0.09),rgba(82,39,255,0.14))] px-5 py-6 no-underline backdrop-blur-xl transition duration-300 hover:border-emerald-300/35 hover:bg-white/[0.08]"
                >
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.32em] text-slate-400">
                      Direct message
                    </span>
                    <span className="mt-2 block text-xl font-semibold text-white">
                      Let&apos;s build something clean.
                    </span>
                  </span>
                  <Mail
                    aria-hidden="true"
                    className="h-7 w-7 shrink-0 text-emerald-200"
                    strokeWidth={1.7}
                  />
                </a>
              </div>
            </div>
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
