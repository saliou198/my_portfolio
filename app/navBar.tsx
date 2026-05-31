import Link from "next/link";

export default function NavBar({ name }: { name: string }) {
  return (
    <nav className="mx-auto  flex w-[min(92%,72rem)] items-center justify-between gap-4 rounded-lg bg-transparent px-5 py-3 text-[clamp(0.9rem,1.3vw,1.05rem)]">
      <Link href="/" className="text-[clamp(1rem,2vw,1.35rem)] font-bold text-grey dark:text:black">
        {name}
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
        <Link href="/about" className="text-white dark:text:white hover:underline">
          About
        </Link> 
        <Link href="/projects" className="text-white dark:text:white hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-white dark:text:white  hover:underline">
          Contact
        </Link>
        <Link
          href="/skills"
          className="rounded-sm border border-black/25 px-3 py-1 text-white hover:bg-black/5 hover:underline focus:outline-none focus:ring-2 focus:ring-black/30 dark:border-white/30 dark:text:black dark:hover:bg-black/10"
        >
          Skills
        </Link>
      </div>
    </nav>
  );
}
