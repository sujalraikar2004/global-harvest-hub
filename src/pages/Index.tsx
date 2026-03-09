import { Link } from "react-router-dom";
import { Shield, Truck, Award, Leaf, ArrowRight, Globe, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products } from "@/data/products";
const heroImage = "https://res.cloudinary.com/derz8ikfc/image/upload/v1773038044/mfrbnnfkhbg7j5squgpj.jpg";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Shield, label: "EU Compliant" },
  { icon: Truck, label: "Global Shipping" },
  { icon: Award, label: "Lab Tested" },
];

const whyUs = [
  {
    icon: Leaf,
    title: "Strong Sourcing Network",
    desc: "Direct sourcing from India's finest spice-growing regions ensures consistent quality in every shipment.",
  },
  {
    icon: Shield,
    title: "EU MRL Compliance",
    desc: "Full compliance with European Union Maximum Residue Limits, Aflatoxin, Heavy Metal, and Microbiological standards.",
  },
  {
    icon: Globe,
    title: "Modern Grading Systems",
    desc: "State-of-the-art cleaning and grading equipment delivering consistent color, aroma, and purity specifications.",
  },
  {
    icon: Award,
    title: "Consistent Aroma & Purity",
    desc: "Rigorous quality checks at every stage ensuring uniform flavor, purity, and freshness across all batches.",
  },
];

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "15+", label: "Countries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "5K+", label: "Tons Exported Annually" },
];

const Index = () => {
  const featured = products.slice(0, 6);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Premium Indian spices for export" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,5%)]/95 via-[hsl(150,30%,8%)]/85 to-[hsl(150,30%,5%)]/70 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,30%,5%)]/80 via-[hsl(150,30%,5%)]/40 to-[hsl(150,30%,5%)]/50 md:via-transparent md:to-[hsl(150,30%,5%)]/30" />
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] float-slow" />
        <div className="absolute bottom-1/3 right-[30%] w-48 h-48 rounded-full bg-accent/10 blur-[80px] float-delayed" />

        <div className="container relative z-10 pt-20 pb-12 px-4 md:px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-primary/30 text-white text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-primary/40 backdrop-blur-md">
                <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5" />
                Trusted Brand
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.15] mb-4 md:mb-6"
            >
              Premium Indian Spices Exported with{" "}
              <span className="text-shimmer">Purity & Reliability</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 leading-relaxed max-w-xl"
            >
              Authentic Indian spices for European and global markets.
              Strict EU compliance, hygienic processing, and consistent quality in every shipment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-14"
            >
              <Button asChild size="lg" className="text-sm md:text-base px-6 md:px-8 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-6 md:px-8 text-white bg-white/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2 md:gap-3"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="trust-badge text-xs md:text-sm">
                  <badge.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
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
      <section className="section-padding py-16 md:py-28 bg-background leaf-pattern">
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Why Us
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">NITARA GLOBAL</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mx-auto max-w-2xl">
              We combine deep sourcing expertise with strict quality control to deliver
              the finest Indian spices to markets worldwide.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 text-center product-card-hover border border-border group glow-border">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl gradient-green flex items-center justify-center mx-auto mb-4 md:mb-5 icon-glow group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-base md:text-lg mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding py-16 md:py-28" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Range
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Our Premium Spice Range</h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mx-auto max-w-2xl">
              Hand-graded, lab-tested spices sourced from India's finest growing regions, ready for international markets.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
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
                  <div className="p-3 md:p-5">
                    <span className="text-[10px] md:text-xs font-semibold text-primary bg-primary/10 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-semibold text-sm md:text-base mt-2 md:mt-3 mb-1">{product.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">{product.origin}</p>
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
      <section className="relative overflow-hidden section-padding py-16 md:py-28">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container relative z-10 text-primary-foreground px-4">
          <ScrollReveal className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Our Impact in Numbers</h2>
            <p className="text-base md:text-lg opacity-80">Delivering excellence across continents since 2020</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="stat-card p-4 md:p-6">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-1 md:mb-2 drop-shadow-sm">{stat.value}</div>
                  <div className="text-xs md:text-sm opacity-80 font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding py-16 md:py-28 bg-muted/30">
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="section-title mb-4">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Trusted by businesses worldwide for quality and reliability
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border product-card-hover">
                <div className="flex items-center gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  "Outstanding quality and timely delivery. NITARA GLOBAL has become our trusted partner for spice imports. Their EU compliance documentation is impeccable!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    MK
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Mohammed Khalid</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">Dubai Spice Trading Co.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border product-card-hover">
                <div className="flex items-center gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  "We've been sourcing cumin and coriander from NITARA GLOBAL for 2 years. Their purity levels and competitive pricing are unmatched in the European market."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    SP
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Sarah Peterson</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">European Spice Imports Ltd.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border product-card-hover">
                <div className="flex items-center gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  "Reliable, professional, and always delivering to spec. Their COA reports and phytosanitary certificates save us significant compliance work."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    RK
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Rajesh Kumar</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">Singapore Imports</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding py-16 md:py-28 bg-background">
        <div className="container px-4">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="section-title mb-4">From Source to Shipment</h2>
            <p className="section-subtitle mx-auto">
              A seamless four-step process ensuring premium spice quality at every stage
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-green flex items-center justify-center mx-auto icon-glow">
                    <span className="text-2xl md:text-3xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent hidden lg:block -z-10"></div>
                </div>
                <h3 className="font-heading font-semibold text-base md:text-lg mb-2">Sourcing</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Direct from India's finest spice-growing regions</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-green flex items-center justify-center mx-auto icon-glow">
                    <span className="text-2xl md:text-3xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent hidden lg:block -z-10"></div>
                </div>
                <h3 className="font-heading font-semibold text-base md:text-lg mb-2">Cleaning & Grading</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Modern machinery for purity, color, and aroma grading</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-green flex items-center justify-center mx-auto icon-glow">
                    <span className="text-2xl md:text-3xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent hidden lg:block -z-10"></div>
                </div>
                <h3 className="font-heading font-semibold text-base md:text-lg mb-2">Lab Testing</h3>
                <p className="text-xs md:text-sm text-muted-foreground">EU MRL, Aflatoxin, and Microbiological compliance checks</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-green flex items-center justify-center mx-auto icon-glow">
                    <span className="text-2xl md:text-3xl font-bold text-white">4</span>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-base md:text-lg mb-2">Export</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Timely delivery to European and global markets</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-28 bg-background leaf-pattern">
        <div className="container px-4">
          <ScrollReveal>
            <div className="relative rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden glow-border bg-card">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-[60px] md:blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-accent/5 rounded-full blur-[40px] md:blur-[60px]" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6">
                  🤝 Let's Partner
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">Ready to Source Premium Indian Spices?</h2>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground mx-auto mb-6 md:mb-8 max-w-2xl">
                  Partner with NITARA GLOBAL for authentic Indian spices, full EU compliance,
                  and reliable bulk export with every shipment.
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <Button asChild size="lg" className="px-6 md:px-8 shadow-lg shadow-primary/20 text-sm md:text-base">
                    <Link to="/contact">
                      Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-6 md:px-8 text-sm md:text-base">
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
