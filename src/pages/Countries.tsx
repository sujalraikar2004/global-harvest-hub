import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const regions = [
  {
    region: "Middle East",
    countries: [
      { flag: "🇦🇪", name: "United Arab Emirates", products: "Onion, Potato, Tomato, Green Chilli" },
      { flag: "🇸🇦", name: "Saudi Arabia", products: "Onion, Carrot, Cabbage, Okra" },
      { flag: "🇴🇲", name: "Oman", products: "Potato, Tomato, Beans, Capsicum" },
      { flag: "🇶🇦", name: "Qatar", products: "Mixed Fresh Vegetables" },
      { flag: "🇰🇼", name: "Kuwait", products: "Onion, Potato, Carrot" },
      { flag: "🇧🇭", name: "Bahrain", products: "Tomato, Green Chilli, Okra" },
    ],
  },
  {
    region: "Europe",
    countries: [
      { flag: "🇬🇧", name: "United Kingdom", products: "Organic Vegetables, Okra, Drumstick" },
      { flag: "🇩🇪", name: "Germany", products: "Organic Carrot, Beans, Capsicum" },
      { flag: "🇳🇱", name: "Netherlands", products: "Fresh Vegetables, Re-export Hub" },
      { flag: "🇫🇷", name: "France", products: "Organic Produce, Seasonal Items" },
    ],
  },
  {
    region: "Asia Pacific",
    countries: [
      { flag: "🇸🇬", name: "Singapore", products: "Premium Fresh Vegetables" },
      { flag: "🇲🇾", name: "Malaysia", products: "Onion, Potato, Green Chilli" },
      { flag: "🇯🇵", name: "Japan", products: "Organic & Specialty Vegetables" },
      { flag: "🇭🇰", name: "Hong Kong", products: "Mixed Fresh & Organic Range" },
    ],
  },
  {
    region: "South Asia & Africa",
    countries: [
      { flag: "🇮🇳", name: "India (Domestic)", products: "Pan-India Distribution Network" },
      { flag: "🇱🇰", name: "Sri Lanka", products: "Onion, Potato, Carrot" },
      { flag: "🇲🇺", name: "Mauritius", products: "Mixed Fresh Vegetables" },
      { flag: "🇰🇪", name: "Kenya", products: "Onion, Potato" },
    ],
  },
];

const Countries = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-foreground">
      <div className="container relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Global Reach
          </span>
          <h1 className="section-title text-primary-foreground mb-4 max-w-3xl">
            Countries We Serve
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            Our distribution network spans across 25+ countries, connecting Indian farms to tables around the world.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Regions */}
    <section className="section-padding bg-background">
      <div className="container space-y-20">
        {regions.map((region, ri) => (
          <div key={region.region}>
            <ScrollReveal>
              <h2 className="section-title text-2xl md:text-3xl mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full inline-block" />
                {region.region}
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.countries.map((country, ci) => (
                <ScrollReveal key={country.name} delay={ci * 0.08}>
                  <div className="bg-card rounded-xl p-6 border border-border product-card-hover group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl">{country.flag}</span>
                      <h3 className="font-heading font-bold text-lg">{country.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Key Products: </span>
                      {country.products}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-green text-primary-foreground">
      <div className="container text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Country?</h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto mb-8">
            We're always expanding our reach. Contact us to discuss supply to your region.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link to="/contact">
              Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Countries;
