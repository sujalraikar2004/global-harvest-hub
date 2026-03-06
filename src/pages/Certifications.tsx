import { ShieldCheck, FlaskConical, AlertTriangle, Microscope, FileCheck, Leaf, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const certifications = [
  {
    icon: ShieldCheck,
    name: "EU Maximum Residue Limits (MRL)",
    full: "Pesticide Residue Compliance",
    desc: "All spice shipments are tested against EU MRL regulations for pesticide residues. Non-compliant batches are rejected before export. Full test reports available.",
  },
  {
    icon: AlertTriangle,
    name: "Aflatoxin & Mycotoxin Control",
    full: "EU Contaminant Regulation (EC) No 1881/2006",
    desc: "Strict Aflatoxin B1, B2, G1, G2 and Ochratoxin A testing in line with EU maximum limits for spices. Accredited lab certificates provided with each shipment.",
  },
  {
    icon: FlaskConical,
    name: "Heavy Metal Limits",
    full: "Lead, Cadmium & Other Contaminants",
    desc: "Testing for heavy metal contaminants including Lead (Pb), Cadmium (Cd), and Mercury (Hg) to meet EU food safety regulations for spices and dried herbs.",
  },
  {
    icon: Microscope,
    name: "Microbiological Safety Standards",
    full: "E. coli, Salmonella & Yeast/Mold",
    desc: "Rigorous microbiological testing confirming absence of Salmonella (in 25g), E. coli, and Yeast & Mold within EU permissible limits before any shipment is cleared.",
  },
  {
    icon: FileCheck,
    name: "Certificate of Analysis (COA)",
    full: "Accredited Laboratory Testing",
    desc: "A Certificate of Analysis from accredited laboratories is available upon request for every shipment, covering all physical, chemical, and microbiological parameters.",
  },
  {
    icon: Leaf,
    name: "Phytosanitary Compliance",
    full: "Plant Health & Quarantine Standards",
    desc: "Full compliance with international phytosanitary requirements. Phytosanitary certificates, fumigation certificates, and health certificates issued for every export.",
  },
];
    icon: Leaf,
    name: "Global G.A.P.",
    full: "Good Agricultural Practices",
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
            EU Compliance & Quality Standards
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            Every spice shipment from NITARA GLOBAL meets EU food safety regulations, backed by accredited lab testing and full documentation.
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
              At NITARA GLOBAL, quality is embedded in every step of our process. From sourcing and cleaning
              to grading and packaging, we ensure every spice shipment meets strict EU food safety standards.
              Our dedicated quality team coordinates accredited lab testing, and a Certificate of Analysis (COA)
              is available upon request for every shipment we dispatch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link to="/contact">
                  Request COA / Quality Report <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 gap-2">
                <a
                  href="https://drive.google.com/file/d/1cmnHdIFfAwiLLF05grNvYDr4WT84AGzw/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  View GST Certificate
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Certifications;
