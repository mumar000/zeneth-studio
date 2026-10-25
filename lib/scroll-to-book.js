export const LOAD_CALENDAR_EVENT = "nymbor:load-calendar";

// Scrolls to the page's #book section (through Lenis when it's running) and
// starts loading the calendar early. Returns false when the page has none.
export function scrollToBook() {
  const target = document.getElementById("book");
  if (!target) return false;
  window.dispatchEvent(new Event(LOAD_CALENDAR_EVENT));

  if (window.lenis) {
    window.lenis.scrollTo(target, { offset: -88, duration: 0.45 });
  } else {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  return true;
}
