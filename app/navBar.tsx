"use client";

import Link from "next/link";

type NavBarProps = {
  name: string;
  themeName: string;
  themeColors: string[];
  onThemeChange: () => void;
};

export default function NavBar({
  name,
  themeName,
  themeColors,
  onThemeChange,
}: NavBarProps) {
  return (
    <nav className="mx-auto flex w-[min(92%,72rem)] flex-col items-start justify-between gap-4 bg-transparent px-2 py-4 text-[clamp(0.9rem,1.3vw,1.05rem)] sm:flex-row sm:items-center">
      <Link
        href="/"
        className="cursor-target text-[clamp(1rem,2vw,1.35rem)] font-bold text-white"
      >
        {name}
      </Link>
      <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 sm:w-auto sm:justify-end">
        <Link
          href="/about"
          className="cursor-target text-white hover:underline"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="cursor-target text-white hover:underline"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="cursor-target text-white hover:underline"
        >
          Contact
        </Link>
        <Link
          href="/skills"
          className="cursor-target rounded-sm border border-white/30 px-3 py-1 text-white hover:bg-white/10 hover:underline focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Skills
        </Link>
        <button
          type="button"
          onClick={onThemeChange}
          aria-label={`Change background theme. Current theme: ${themeName}`}
          className="cursor-target flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/45 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <span className="flex -space-x-1" aria-hidden="true">
            {themeColors.map((color) => (
              <span
                key={color}
                className="h-3 w-3 rounded-full border border-white/40"
                style={{ backgroundColor: color }}
              />
            ))}
          </span>
          <span>{themeName}</span>
        </button>
      </div>
    </nav>
  );
}
