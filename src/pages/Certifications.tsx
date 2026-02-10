import { ShieldCheck, Award, Leaf, FileCheck, Bug, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const certifications = [
  {
    icon: ShieldCheck,
    name: "ISO 22000:2018",
    full: "Food Safety Management System",
    desc: "Internationally recognized standard ensuring our food safety management system meets the highest global benchmarks for safe food production and handling.",
  },
  {
    icon: Award,
    name: "APEDA Registered",
    full: "Agricultural & Processed Food Products Export Development Authority",
    desc: "Official registration with India's apex export promotion body for agricultural products, ensuring compliance with all export regulations.",
  },
  {
    icon: Leaf,
    name: "Global G.A.P.",
    full: "Good Agricultural Practices",
    desc: "Certification confirming that our sourcing farms follow responsible agricultural practices covering food safety, sustainability, and worker welfare.",
  },
  {
    icon: FileCheck,
    name: "FSSAI Licensed",
    full: "Food Safety and Standards Authority of India",
    desc: "Licensed by India's food safety regulatory body, ensuring all products meet national food safety and quality standards before export.",
  },
  {
    icon: Bug,
    name: "HACCP Certified",
    full: "Hazard Analysis & Critical Control Points",
    desc: "Systematic preventive approach to food safety that addresses physical, chemical, and biological hazards in our production and supply chain.",
  },
  {
    icon: ShieldCheck,
    name: "Phytosanitary Compliance",
    full: "Plant Health & Quarantine Standards",
    desc: "Full compliance with international phytosanitary requirements, with certified pest-free and fumigation documentation for every shipment.",
  },
];

const Certifications = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-foreground">
      <div className="container relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Quality Standards
          </span>
          <h1 className="section-title text-primary-foreground mb-4 max-w-3xl">
            Certifications & Quality Assurance
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            Every product we export is backed by internationally recognized certifications and rigorous quality protocols.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Certifications Grid */}
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-8 border border-border product-card-hover h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-5">
                  <cert.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">{cert.name}</h3>
                <p className="text-xs text-primary font-semibold mb-3">{cert.full}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{cert.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Quality Commitment */}
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container">
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-10 md:p-16 text-center border border-border shadow-lg max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="section-title text-2xl md:text-3xl mb-4">Our Quality Commitment</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Quality isn't just a department — it's woven into every step of our process. From farm audits and
              pre-harvest inspections to post-harvest quality checks and cold chain monitoring, we ensure that
              every vegetable leaving our facility meets the exacting standards of international buyers. Our
              dedicated quality team conducts over 20 checkpoints before any shipment is cleared for export.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link to="/contact">
                Request Quality Report <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Certifications;
