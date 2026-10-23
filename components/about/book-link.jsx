"use client";

import { scrollToBook } from "@/lib/scroll-to-book";

export default function BookLink({ className, children }) {
  return (
    <a
      href="#book"
      onClick={(event) => {
        if (scrollToBook()) event.preventDefault();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
