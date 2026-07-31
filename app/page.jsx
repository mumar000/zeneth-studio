import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ProductCard from "@/components/store/product-card";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main>
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow fade-up">The signature edit · 2026</p>
          <h1 className="fade-up delay-1">Quietly<br /><em>remarkable.</em></h1>
          <p className="hero-intro fade-up delay-2">
            Modest silhouettes, considered details and fabric that moves with you.
            Designed for presence, never excess.
          </p>
          <div className="hero-actions fade-up delay-3">
            <Link className="button button-dark" href="#collection">Explore the collection <ArrowUpRight size={16} /></Link>
            <Link className="text-link" href="#story">Our philosophy</Link>
          </div>
          <span className="scroll-cue"><ArrowDown size={15} /> Scroll to discover</span>
        </div>
        <Link href={`/product/${products[0].slug}`} className="hero-visual" aria-label={`View ${products[0].name}`}>
          <Image src="/products/product.jpeg" alt="Black embroidered abaya with matching dupatta" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="hero-note">
            <span>01 / 06</span>
            <span>Embroidered Korean Fabric</span>
          </div>
        </Link>
      </section>

      <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>Made to be<br /><em>remembered.</em></h2>
          </div>
          <p>Considered pieces for everyday rituals and meaningful occasions. Each silhouette is finished in small batches.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-image"><Image src="/products/product.jpeg" alt="Detailed embroidery on premium black abaya" fill sizes="(max-width: 768px) 100vw, 48vw" /></div>
        <div className="story-copy">
          <p className="eyebrow">Our philosophy</p>
          <h2>Elegance that<br />speaks <em>softly.</em></h2>
          <p>We believe true luxury lives in how a garment feels: a graceful drape, a thoughtful stitch, the confidence to move through your day entirely as yourself.</p>
          <dl>
            <div><dt>01</dt><dd>Premium Korean fabric</dd></div>
            <div><dt>02</dt><dd>Hand-finished embroidery</dd></div>
            <div><dt>03</dt><dd>Made in limited quantities</dd></div>
          </dl>
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">The private list</p>
        <h2>New pieces, <em>quietly announced.</em></h2>
        <form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button type="submit">Join the list <ArrowUpRight size={16} /></button></form>
      </section>
    </main>
  );
}
