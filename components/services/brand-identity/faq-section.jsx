import Reveal from "@/components/reveal";
import Faq from "./faq";
import { faqs } from "./content";
import { SectionHead } from "./section-heading";

export default function FaqSection() {
  return (
    <section
      aria-labelledby="faq-title"
      className="px-5 pb-16 sm:px-6 md:pb-28"
    >
      <div className="mx-auto max-w-[880px]">
        <SectionHead
          label="Questions"
          title="Straight answers."
          id="faq-title"
        />
        <Reveal>
          <Faq items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
