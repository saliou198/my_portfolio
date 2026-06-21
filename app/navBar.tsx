"use client";

import Link from "next/link";

type NavBarProps = {
  name: string;
  themeName: string;
  themeColors: string[];
  onThemeChange: () => void;
};

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/#skills", label: "Skills", featured: true },
];

export default function NavBar({
  name,
  themeName,
  themeColors,
  onThemeChange,
}: NavBarProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-[999] w-full border-b border-white/10 bg-black/10 px-4 py-2.5 text-white backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[78rem] flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
        <Link
          href="/#home"
          className="cursor-target text-[clamp(1.05rem,1.8vw,1.35rem)] font-bold text-white no-underline transition duration-200 hover:text-white/85"
        >
          {name}
        </Link>
        <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 sm:w-auto sm:justify-end md:gap-x-5">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-target rounded-lg px-3 py-1.5 text-[clamp(0.9rem,1.35vw,1.1rem)] font-medium no-underline transition duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 ${
                  link.featured
                    ? "border border-white/35 bg-white/[0.03] text-white shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                    : "border border-transparent text-white/75"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* <button
            type="button"
            onClick={onThemeChange}
            aria-label={`Change background theme. Current theme: ${themeName}`}
            className="cursor-target flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[clamp(0.85rem,1.1vw,1rem)] font-semibold text-white no-underline backdrop-blur-md transition duration-300 hover:border-white/45 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          > */}
            {/* <span className="flex -space-x-1" aria-hidden="true">
              {themeColors.map((color) => (
                <span
                  key={color}
                  className="h-3 w-3 rounded-full border border-white/40"
                  style={{ backgroundColor: color }}
                />
              ))}
            </span> */}
            {/* <span>{themeName}</span> */}
          {/* </button> */}
        </div>
      </div>
    </nav>
  );
}
