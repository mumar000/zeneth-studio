import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ product, index }) {
  return (
    <article className={`product-card product-card-${index + 1}`}>
      <Link className="product-image" href={`/product/${product.slug}`}>
        {product.label && <span className="product-badge">{product.label}</span>}
        <Image src="/products/product.jpeg" alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectPosition: product.crop || "center 45%" }} />
        <span className="quick-view">View piece <ArrowUpRight size={15} /></span>
      </Link>
      <div className="product-meta">
        <div><h3><Link href={`/product/${product.slug}`}>{product.name}</Link></h3><p>{product.subtitle}</p></div>
        <span>{formatPrice(product.price)}</span>
      </div>
    </article>
  );
}
