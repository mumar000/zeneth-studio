import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

const RETURN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/works", label: "View our work" },
  { href: "/contact", label: "Start a project" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-[#fffcf7] px-6 py-32 text-center">
      <div className="mx-auto max-w-3xl">
        <p
          className="text-sm font-[700] uppercase tracking-[0.18em] text-primary"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Error 404
        </p>
        <h1
          className="mt-5 text-5xl font-[700] leading-none tracking-[-0.05em] text-[#1a1a1a] md:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          This page is off the map.
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/60 md:text-lg"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          The address may have changed, or the page may no longer be available.
        </p>
        <nav
          aria-label="404 recovery links"
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {RETURN_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-12 items-center justify-center rounded-[10px] border-2 border-black px-5 py-3 text-sm font-[700] uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
                index === 0
                  ? "bg-primary text-white hover:bg-[var(--accent-yellow)] hover:text-black"
                  : "bg-white text-black hover:bg-black/5"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
