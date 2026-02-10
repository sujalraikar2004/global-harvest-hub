import { Link } from "react-router-dom";
import {
  Ship, Snowflake, ClipboardCheck, PackageCheck,
  FileText, Truck, Warehouse, ShieldCheck, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const exportServices = [
  { icon: Ship, title: "Bulk Export Handling", desc: "Efficient handling and dispatch of large-volume vegetable shipments via sea, air, and road freight to global destinations." },
  { icon: Snowflake, title: "Cold Storage & Cold Chain", desc: "Temperature-controlled storage and transportation ensuring produce freshness from farm to destination port." },
  { icon: ClipboardCheck, title: "Quality Inspection & Grading", desc: "Multi-stage quality checks including visual inspection, lab testing, and grading as per international standards." },
  { icon: PackageCheck, title: "Custom Packaging & Labeling", desc: "Export-grade packaging with buyer-specific labeling, barcoding, and compliance with destination country regulations." },
];

const importServices = [
  { icon: FileText, title: "Customs Clearance", desc: "Complete documentation and customs clearance support for hassle-free import of vegetables at destination ports." },
  { icon: Truck, title: "International Logistics", desc: "Door-to-door logistics coordination including freight forwarding, port handling, and last-mile delivery." },
  { icon: Warehouse, title: "Warehousing & Distribution", desc: "Strategic warehousing solutions with inventory management and distribution to local markets and retailers." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Full support with phytosanitary certificates, fumigation, and compliance with importing country's food safety laws." },
];

const processSteps = [
  { step: "01", title: "Inquiry & Quotation", desc: "Share your requirements and receive a competitive quote within 24 hours." },
  { step: "02", title: "Sourcing & Quality Check", desc: "We source from certified farms and run multi-level quality inspections." },
  { step: "03", title: "Packaging & Documentation", desc: "Export-grade packing with all necessary certificates and trade documents." },
  { step: "04", title: "Shipping & Delivery", desc: "Cold chain logistics ensure your produce arrives fresh at the destination." },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-foreground">
      <div className="container relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h1 className="section-title text-primary-foreground mb-4 max-w-3xl">
            End-to-End Import & Export Solutions
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            From farm sourcing to doorstep delivery — we manage every step of the global vegetable supply chain.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Export Services */}
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal className="mb-12">
          <h2 className="section-title text-3xl mb-3">Export Services</h2>
          <p className="section-subtitle">Comprehensive solutions for seamless vegetable export operations.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {exportServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="flex gap-5 bg-card rounded-xl p-8 border border-border product-card-hover">
                <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Import Services */}
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container">
        <ScrollReveal className="mb-12">
          <h2 className="section-title text-3xl mb-3">Import Services</h2>
          <p className="section-subtitle">Reliable import support for buyers sourcing vegetables from India.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {importServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="flex gap-5 bg-card rounded-xl p-8 border border-border product-card-hover">
                <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title mb-4">How We Work</h2>
          <p className="section-subtitle mx-auto">A streamlined 4-step process from inquiry to delivery.</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-5xl font-heading font-extrabold text-primary/20 mb-3">{s.step}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-14">
          <Button asChild size="lg" className="px-8">
            <Link to="/contact">
              Start Your Order <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Services;
