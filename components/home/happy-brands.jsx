import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

const byId = Object.fromEntries(testimonials.map((testimonial) => [testimonial.id, testimonial]));
const featured = byId["lauren-kuhn"];
const reviews = ["max-kolb", "evan-jones", "drew-ayasse", "darcey-self", "bienvinido-onia"].map((id) => byId[id]);

function ClientSignature({ testimonial, featured: isFeatured = false, className = "", as: Tag = "figcaption" }) {
  return (
    <Tag className={`flex min-h-14 items-center gap-3.5 max-md:min-h-12 max-md:gap-3 ${className}`}>
      {testimonial.avatar ? (
        <Image
          src={testimonial.avatar}
          width={56}
          height={56}
          alt={testimonial.name}
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-black/10 max-md:h-12 max-md:w-12"
        />
      ) : (
        <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#7221fc]/15 bg-[#eee6fc] text-sm font-[600] tracking-[0.04em] text-[#5421a3] max-md:h-12 max-md:w-12">
          {testimonial.name.split(" ").map((part) => part[0]).join("")}
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-[15px] font-[600] leading-5 tracking-[-0.02em] text-[#21182d]">{testimonial.name}</span>
        <span className={`mt-1 block text-[12px] leading-[1.5] ${isFeatured ? "text-[#514163]" : "text-[#665e70]"}`}>{testimonial.role}</span>
      </span>
    </Tag>
  );
}

export default function HappyBrands() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative z-10 w-full px-4 py-16 sm:px-6 md:px-10 md:py-28 max-md:py-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-8 border-t border-[#21182d]/15 pt-6 text-center md:mb-12 max-md:mb-6 max-md:pt-5">
          <div>
            <p className="text-[11px] font-[700] uppercase tracking-[0.16em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>Client testimonials</p>
            <h2 id="testimonials-heading" className="mt-4 text-[clamp(36px,4.3vw,64px)] font-[600] leading-[1.05] tracking-[-0.045em] text-[#21182d] max-md:mt-3 max-md:text-[clamp(34px,9vw,44px)]" style={{ fontFamily: "var(--font-display)" }}>
              Good work.<br />Lasting relationships.
            </h2>
          </div>
        </div>

        <figure className="grid gap-7 rounded-[20px] border border-[#7221fc]/15 bg-[#e6d9fb] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 lg:p-10 max-md:gap-4 max-md:rounded-[18px] max-md:p-5">
          <figcaption className="flex flex-col items-start justify-between gap-7 max-md:gap-4">
            <div>
              <span aria-hidden="true" className="block h-12 text-[84px] leading-none text-[#7221fc] max-md:h-8 max-md:text-[64px]" style={{ fontFamily: "Georgia, serif" }}>“</span>
              <p className="mt-5 max-w-[230px] text-[28px] font-[500] leading-[1.12] tracking-[-0.035em] text-[#21182d] max-md:mt-2 max-md:text-[24px]" style={{ fontFamily: "var(--font-display)" }}>The Coastal Edit<br />By Lauren</p>
            </div>
            <ClientSignature testimonial={featured} featured as="div" />
          </figcaption>
          <blockquote className="border-t border-[#7221fc]/15 pt-6 text-[16px] leading-[1.8] tracking-[-0.015em] text-[#30233e] sm:text-[18px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 max-md:pt-4 max-md:text-[15px] max-md:leading-[1.7]">
            <p>“{featured.quote}”</p>
          </blockquote>
        </figure>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-6 max-md:mt-3 max-md:gap-3">
          {reviews.map((testimonial, index) => (
            <figure key={testimonial.id} className={`flex min-w-0 flex-col rounded-[20px] border border-[#21182d]/15 bg-[#fffdf8] p-6 sm:p-8 max-md:rounded-[18px] max-md:p-5 ${index < 2 ? "md:col-span-3" : "md:col-span-6 lg:col-span-2"}`}>
              <span aria-hidden="true" className="mb-5 block h-6 text-[48px] leading-none text-[#9874cb] max-md:mb-3 max-md:h-5 max-md:text-[40px]" style={{ fontFamily: "Georgia, serif" }}>“</span>
              <blockquote className="mb-8 text-[16px] leading-[1.8] tracking-[-0.015em] text-[#302b36] max-md:mb-6 max-md:text-[15px] max-md:leading-[1.7]">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <ClientSignature testimonial={testimonial} className="mt-auto border-t border-[#21182d]/10 pt-5 max-md:pt-4" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
