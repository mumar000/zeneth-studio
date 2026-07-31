export const products = [
  {
    slug: "premium-korean-embroidery-abaya",
    name: "Ayla Embroidered Abaya",
    subtitle: "Premium Korean Fabric · With Dupatta",
    price: 6000,
    label: "Signature piece",
    description: "Grace meets elegance in our beautifully crafted premium Korean fabric abaya, featuring delicate embroidery and a matching embroidered dupatta. Designed with a fluid fall and an easy, refined silhouette.",
    colors: [{ name: "Noir", hex: "#171715" }, { name: "Mocha", hex: "#6d5548" }, { name: "Olive", hex: "#555647" }],
    sizes: ["54", "56"],
    chest: "24–25 inches",
  },
  { slug: "noor-open-abaya", name: "Noor Open Abaya", subtitle: "Soft Nida · Layered Cut", price: 5500, label: "New", crop: "center 36%" },
  { slug: "mahra-sleeve-abaya", name: "Mahra Sleeve Abaya", subtitle: "Korean Fabric · Cuff Detail", price: 5200, crop: "center 55%" },
  { slug: "safa-occasion-abaya", name: "Safa Occasion Abaya", subtitle: "Hand Embellished · With Scarf", price: 6800, label: "Limited", crop: "center 73%" },
  { slug: "layla-everyday-abaya", name: "Layla Everyday Abaya", subtitle: "Breathable Nida · Relaxed Fit", price: 4800, crop: "center 24%" },
  { slug: "reem-panelled-abaya", name: "Reem Panelled Abaya", subtitle: "Korean Fabric · Fluid Drape", price: 5900, crop: "center 64%" },
];

export function formatPrice(price) {
  return `PKR ${new Intl.NumberFormat("en-PK").format(price)}`;
}
