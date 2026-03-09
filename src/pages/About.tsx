import { Link } from "react-router-dom";
import { Target, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import aboutImage from "@/assets/about-warehouse.jpg";

const milestones = [
  { year: "2020", text: "NITARA GLOBAL founded by Disha Vinayak Hattikatti — a professional exporter of high-quality Indian spices, supplying premium agricultural products to European and international markets." },
  { year: "2021", text: "Built strong sourcing networks across India's premier spice belts and invested in modern cleaning and grading systems to ensure consistency in aroma, color, flavor, and purity." },
  { year: "2022", text: "First bulk shipments to European buyers — cumin, coriander, turmeric, and paprika — with full EU MRL compliance, Aflatoxin testing, and Certificate of Analysis (COA) support from accredited laboratories." },
  { year: "2023", text: "Expanded core product range to 9 spices: Cumin Seeds, Coriander Seeds, Turmeric, Paprika Powder, Black Pepper, Cinnamon, Dry Ginger, Mustard Seeds, and Dry Red Chili." },
  { year: "2024", text: "Established comprehensive export documentation support — including Phytosanitary Certificates, Certificate of Origin, EU MRL Compliance Reports, and private label packaging — serving 15+ countries worldwide." },
];

const reasons = [
  "Direct sourcing from India's premier spice-growing regions",
  "Full EU MRL and Aflatoxin compliance on every shipment",
  "Modern cleaning and grading systems for consistent purity",
  "COA from accredited laboratories available upon request",
  "Hygienic processing meeting EU microbiological standards",
  "Flexible bulk packaging with private label options",
];

const About = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative pt-32 pb-20 bg-foreground">
      <div className="container relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h1 className="section-title text-primary-foreground mb-4 max-w-3xl">
            Authentic Indian Spices, Delivered to the World
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            From India's richest spice-growing regions to dinner tables across Europe and beyond.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={aboutImage} alt="NITARA GLOBAL warehouse operations" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="section-title text-3xl md:text-4xl mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NITARA GLOBAL was founded in 2020 by Disha Vinayak Hattikatti with a clear purpose — to bring India's
              finest spices to European and international markets with the quality, purity, and reliability that
              global buyers demand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Starting with core spices like cumin, coriander, and turmeric, we have built strong sourcing networks
              across India's premier spice belts — Rajasthan, Gujarat, Andhra Pradesh, Kerala, and beyond. Our
              modern cleaning and grading systems ensure every batch meets precise specifications for aroma,
              color, flavor, and purity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We pride ourselves on full EU food safety compliance — including MRL testing, Aflatoxin and
              Mycotoxin controls, Heavy Metal limits, and Microbiological standards — backed by COA documentation
              from accredited laboratories. Our success is built on trust, consistency, and a relentless
              commitment to our global partners.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card rounded-xl p-10 border border-border h-full">
              <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized and trusted spice export company known for reliability,
                compliance, and excellence in every shipment we dispatch.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-card rounded-xl p-10 border border-border h-full">
              <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver authentic, high-quality Indian spices that meet international standards while
                building long-term partnerships with global buyers through transparency, consistency, and
                unwavering commitment to food safety.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Timeline */}
    {/* <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title mb-4">Our Journey</h2>
          <p className="section-subtitle mx-auto">Key milestones that shaped NITARA GLOBAL.</p>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 0.08}>
              <div className="flex gap-6 pb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-green flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <div className="font-heading font-bold text-lg text-primary mb-1">{m.year}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}

    {/* Why Choose Us */}
    {/* <section className="section-padding gradient-green text-primary-foreground">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NITARA GLOBAL?</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 bg-primary-foreground/10 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{r}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-10">
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link to="/contact">
              Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section> */}
  </Layout>
);

export default About;
