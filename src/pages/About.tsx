import { Link } from "react-router-dom";
import { Target, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import aboutImage from "@/assets/about-warehouse.jpg";

const milestones = [
  { year: "2013", text: "Founded in Navi Mumbai with a vision to connect Indian farmers with global markets." },
  { year: "2015", text: "First international shipment to the UAE — 200 tons of premium onions and potatoes." },
  { year: "2017", text: "Expanded operations to 10+ countries across the Middle East and Southeast Asia." },
  { year: "2019", text: "Achieved ISO 22000 certification and launched organic vegetable export division." },
  { year: "2021", text: "Opened cold storage facilities in Gujarat and Maharashtra with 5,000 MT capacity." },
  { year: "2024", text: "Serving 25+ countries with an annual export volume exceeding 50,000 metric tons." },
];

const reasons = [
  "Direct farm-to-port sourcing with complete traceability",
  "State-of-the-art cold chain infrastructure",
  "Dedicated quality inspection at every stage",
  "Competitive pricing with flexible packaging options",
  "24/7 logistics tracking and customer support",
  "Full compliance with international food safety standards",
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
            A Decade of Delivering Freshness Across the Globe
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            From humble beginnings in Mumbai's APMC market to becoming a trusted name in global vegetable trade.
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
              <img src={aboutImage} alt="FreshFields warehouse operations" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="section-title text-3xl md:text-4xl mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FreshFields Global was founded in 2013 by a team of agricultural trade professionals who saw an
              opportunity to bridge the gap between India's abundant farming regions and the growing demand for
              quality vegetables in international markets.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Starting with just onion and potato exports to the UAE, we have steadily grown into a full-service
              import-export company handling over 50,000 metric tons of fresh and organic vegetables annually.
              Our network now spans 25+ countries across the Middle East, Europe, Asia, and Africa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We take pride in our farm-to-fork traceability, ensuring every vegetable we export meets the
              highest standards of quality, hygiene, and freshness. Our success is built on trust, consistency,
              and a relentless commitment to our partners worldwide.
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
                To become the most trusted vegetable sourcing partner for importers and distributors worldwide,
                setting benchmarks in quality, sustainability, and operational excellence in the global fresh
                produce trade industry.
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
                To deliver farm-fresh, quality-inspected vegetables to every corner of the world through
                sustainable sourcing practices, advanced cold chain logistics, and an unwavering commitment
                to food safety and customer satisfaction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title mb-4">Our Journey</h2>
          <p className="section-subtitle mx-auto">Key milestones that shaped FreshFields Global.</p>
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
    </section>

    {/* Why Choose Us */}
    <section className="section-padding gradient-green text-primary-foreground">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FreshFields Global?</h2>
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
    </section>
  </Layout>
);

export default About;
