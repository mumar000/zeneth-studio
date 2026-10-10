import Link from "next/link";

export default function LegalPage({ title, intro, sections }) {
  return (
    <main id="main-content" className="px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-[700] uppercase tracking-widest text-primary">Nymbor · Updated October 11, 2026</p>
        <h1 className="mt-5 text-4xl font-[700] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-7 text-lg leading-relaxed text-neutral-700">{intro}</p>
        {sections.map(({ heading, body }) => (
          <section key={heading} className="mt-10">
            <h2 className="text-2xl font-[600] tracking-tight">{heading}</h2>
            <div className="mt-3 leading-7 text-neutral-700">{body}</div>
          </section>
        ))}
        <p className="mt-12 border-t border-black/10 pt-6 leading-7">Questions? Email <a className="break-words text-primary underline underline-offset-4" href="mailto:contact@nymbor.com">contact@nymbor.com</a>.</p>
        <nav aria-label="Legal pages" className="mt-6 flex gap-6 text-sm">
          <Link className="underline underline-offset-4" href="/privacy">Privacy</Link>
          <Link className="underline underline-offset-4" href="/terms">Terms</Link>
        </nav>
      </article>
    </main>
  );
}
