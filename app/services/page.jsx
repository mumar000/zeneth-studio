import ServicesDetail from "@/components/home/services-detail";

export const metadata = {
  title: "Services",
  description:
    "Brand identity, interface design, and web development for ambitious brands and focused teams.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fffcf7] pt-20 md:pt-24">
      <ServicesDetail
        headingLines={[
          "Brand, interface, and development",
          "working together as one clear system.",
        ]}
      />
    </main>
  );
}
