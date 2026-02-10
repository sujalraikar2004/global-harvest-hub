import { Link } from "react-router-dom";
import { Shield, Truck, Award, Leaf, ArrowRight, Globe, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-vegetables.jpg";
import { motion } from "framer-motion";

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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Fresh vegetables for export" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,5%)]/90 via-[hsl(150,30%,8%)]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,30%,5%)]/60 via-transparent to-[hsl(150,30%,5%)]/30" />
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] float-slow" />
        <div className="absolute bottom-1/3 right-[30%] w-48 h-48 rounded-full bg-accent/10 blur-[80px] float-delayed" />

        <div className="container relative z-10 pt-20 pb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Trusted Since 2013
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Fresh Vegetables Exported Worldwide with{" "}
              <span className="text-shimmer">Trust & Quality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl"
            >
              Reliable import & export solutions connecting farmers to global markets.
              Premium quality, competitive pricing, and seamless logistics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Button asChild size="lg" className="text-base px-8 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-hero-outline text-base px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="trust-badge">
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="h-6 w-6 text-white/50 scroll-indicator" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background leaf-pattern">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Why Us
            </span>
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
                <div className="bg-card rounded-2xl p-8 text-center product-card-hover border border-border group glow-border">
                  <div className="w-14 h-14 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-5 icon-glow group-hover:scale-110 transition-transform duration-300">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Range
            </span>
            <h2 className="section-title mb-4">Our Premium Products</h2>
            <p className="section-subtitle mx-auto">
              Hand-picked, quality-inspected vegetables ready for international markets.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden product-card-hover border border-border group">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover image-zoom"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
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
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container relative z-10 text-primary-foreground">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Impact in Numbers</h2>
            <p className="text-lg opacity-70">A decade of delivering excellence across continents</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="stat-card">
                  <div className="text-4xl md:text-6xl font-heading font-extrabold mb-2 drop-shadow-sm">{stat.value}</div>
                  <div className="text-sm opacity-80 font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background leaf-pattern">
        <div className="container">
          <ScrollReveal>
            <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden glow-border bg-card">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  🤝 Let's Partner
                </span>
                <h2 className="section-title mb-4">Ready to Source Premium Vegetables?</h2>
                <p className="section-subtitle mx-auto mb-8">
                  Partner with FreshFields Global for reliable supply, competitive pricing,
                  and world-class logistics support.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="px-8 shadow-lg shadow-primary/20">
                    <Link to="/contact">
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8">
                    <Link to="/about">Learn About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
