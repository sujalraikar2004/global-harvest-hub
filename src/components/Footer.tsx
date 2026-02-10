import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/countries", label: "Countries We Serve" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact Us" },
];

const services = [
  "Bulk Vegetable Export",
  "Cold Storage Handling",
  "Quality Inspection",
  "Custom Packaging",
  "Logistics Support",
  "Customs Clearance",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-heading font-bold">FreshFields Global</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Connecting farmers to global markets with premium quality vegetables.
              Trusted by importers and distributors across 25+ countries worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm opacity-70">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Plot 42, APMC Market, Vashi, Navi Mumbai, Maharashtra 400703, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 22 2784 5600</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@freshfieldsglobal.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} FreshFields Global. All rights reserved.</p>
          <p>Designed for global trade excellence</p>
        </div>
      </div>
    </footer>
  );
}
