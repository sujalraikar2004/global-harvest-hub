import { useState } from "react";
import { MapPin, Package, Clock, CalendarCheck } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products, categories, type ProductCategory } from "@/data/products";

const Products = () => {
  const [active, setActive] = useState<"All" | ProductCategory>("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground">
        <div className="container relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Our Products
            </span>
            <h1 className="section-title text-primary-foreground mb-4 max-w-3xl">
              Premium Export-Grade Vegetables
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Sourced directly from India's finest farms. Quality-inspected, professionally packed, and ready for global markets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          {/* Category Filter */}
          <ScrollReveal className="flex flex-wrap gap-3 mb-12 justify-center">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat as "All" | ProductCategory)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={(i % 4) * 0.08}>
                <div className="bg-card rounded-xl overflow-hidden product-card-hover border border-border group">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover image-zoom"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg mt-3 mb-3">{product.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{product.origin}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{product.packaging}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>Shelf Life: {product.shelfLife}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{product.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
