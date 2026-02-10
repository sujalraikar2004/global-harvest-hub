import { Link } from "react-router-dom";
import { Shield, Truck, Award, Leaf, ArrowRight, Globe, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-vegetables.jpg";

const trustBadges = [
  { icon: Shield, label: "ISO Certified" },
  { icon: Truck, label: "Global Shipping" },
  { icon: Award, label: "Quality Assured" },
];

const whyUs = [
  {
    icon: Leaf,
    title: "Farm-Fresh Quality",
    desc: "Direct sourcing from certified farms ensures the freshest produce reaches your doorstep.",
  },
  {
    icon: Truck,
    title: "Cold Chain Logistics",
    desc: "End-to-end temperature-controlled supply chain preserving freshness across continents.",
  },
  {
    icon: Globe,
    title: "25+ Countries Served",
    desc: "A robust distribution network spanning the Middle East, Europe, Asia, and beyond.",
  },
  {
    icon: Award,
    title: "Certified Standards",
    desc: "ISO 22000, Global GAP, and APEDA certified operations for uncompromised safety.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "25+", label: "Countries Served" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "50K+", label: "Tons Exported Annually" },
];

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Fresh vegetables for export" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay))/85%] to-[hsl(var(--hero-overlay))/50%]" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
                🌿 Trusted Since 2013
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Fresh Vegetables Exported Worldwide with{" "}
                <span className="text-primary">Trust & Quality</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Reliable import & export solutions connecting farmers to global markets.
                Premium quality, competitive pricing, and seamless logistics.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-hero-outline text-base px-8">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="trust-badge">
                    <badge.icon className="h-4 w-4" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title mb-4">
              Why Choose <span className="text-primary">FreshFields Global</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We combine agricultural expertise with world-class logistics to deliver
              the freshest vegetables to markets worldwide.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-8 text-center product-card-hover border border-border">
                  <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title mb-4">Our Premium Products</h2>
            <p className="section-subtitle mx-auto">
              Hand-picked, quality-inspected vegetables ready for international markets.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <div className="bg-card rounded-xl overflow-hidden product-card-hover border border-border">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover image-zoom"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-semibold mt-3 mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.origin}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-green text-primary-foreground section-padding">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="stat-card">
                  <div className="text-4xl md:text-5xl font-heading font-extrabold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-10 md:p-16 text-center border border-border shadow-lg">
              <h2 className="section-title mb-4">Ready to Source Premium Vegetables?</h2>
              <p className="section-subtitle mx-auto mb-8">
                Partner with FreshFields Global for reliable supply, competitive pricing,
                and world-class logistics support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
