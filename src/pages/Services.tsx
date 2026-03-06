import { Link } from "react-router-dom";
import {
  Ship, FlaskConical, ClipboardCheck, PackageCheck,
  FileText, ShieldCheck, CheckCircle, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const exportServices = [
  { icon: Ship, title: "Bulk Spice Export", desc: "Efficient handling and dispatch of large-volume spice shipments via sea freight to European and international destinations." },
  { icon: FlaskConical, title: "EU Compliance Testing", desc: "All shipments undergo EU MRL, Aflatoxin, Mycotoxin, Heavy Metal, and Microbiological testing with accredited COA reports." },
  { icon: ClipboardCheck, title: "Cleaning & Grading", desc: "Modern cleaning and grading machinery ensures consistent purity, color, aroma, and flavor specifications in every batch." },
  { icon: PackageCheck, title: "Custom Packaging & Labeling", desc: "Export-grade 25 kg / 50 kg PP bags, multi-wall paper bags, and private label packaging tailored to buyer requirements." },
];

const commercialDocs = [
  "Commercial Invoice",
  "Packing List",
  "Sales Contract",
  "Proforma Invoice",
];

const shippingDocs = [
  "Bill of Lading / Airway Bill",
  "Shipping Bill",
  "Freight Invoice",
];

const regulatoryDocs = [
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "Fumigation Certificate (if required)",
  "Health Certificate",
  "Certificate of Analysis (COA)",
  "EU MRL Compliance Report",
];

const financialDocs = [
  "Letter of Credit (if applicable)",
  "Bank Realization Certificate",
];

const processSteps = [
  { step: "01", title: "Inquiry & Quotation", desc: "Share your spice requirements and receive a competitive bulk quote within 24 hours." },
  { step: "02", title: "Sourcing & Grading", desc: "We source from India's finest spice-growing regions and run multi-stage cleaning and grading." },
  { step: "03", title: "Testing & Documentation", desc: "Lab-certified COA, Phytosanitary, and EU compliance documents prepared for every shipment." },
  { step: "04", title: "Shipping & Delivery", desc: "Timely bulk dispatch to European and international ports with full tracking support." },
];

const DocGroup = ({ title, items }: { title: string; items: string[] }) => (
  <ScrollReveal>
    <div className="bg-card rounded-xl p-6 border border-border h-full">
      <h3 className="font-heading font-bold text-base mb-4 text-primary">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </ScrollReveal>
);

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
            End-to-End Spice Export Solutions
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            From sourcing India's finest spices to delivering fully compliant bulk shipments — we handle every step of the export process.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Export Services */}
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal className="mb-12">
          <h2 className="section-title text-3xl mb-3">Export Services</h2>
          <p className="section-subtitle">Comprehensive solutions for seamless bulk spice export operations.</p>
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

    {/* Export Documentation */}
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="section-title text-3xl">Export Documentation</h2>
              <p className="section-subtitle mt-1">Complete documentation checklist for every shipment.</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DocGroup title="Commercial Documents" items={commercialDocs} />
          <DocGroup title="Shipping Documents" items={shippingDocs} />
          <DocGroup title="Regulatory Documents" items={regulatoryDocs} />
          <DocGroup title="Financial Documents" items={financialDocs} />
        </div>
      </div>
    </section>

    {/* Quality & Compliance Banner */}
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="flex gap-5 bg-card rounded-xl p-8 border border-border max-w-3xl mx-auto text-center flex-col items-center">
            <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">Storage Conditions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Store in a cool, dry place · Keep away from moisture and direct sunlight · Recommended Temperature: Below 25°C
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
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
