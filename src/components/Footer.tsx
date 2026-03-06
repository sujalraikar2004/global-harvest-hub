import { Link } from "react-router-dom";
import { Flame, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
];

const services = [
  "Bulk Spice Export",
  "Cleaning & Grading",
  "EU Compliance Testing",
  "Custom Packaging",
  "Export Documentation",
  "Phytosanitary Services",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-primary" />
              <span className="text-xl font-heading font-bold">NITARA GLOBAL</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Premium Indian spice exporter delivering authentic flavors to European
              and international markets. Purity, Quality, Reliability — in every shipment.
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
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 99001 68682</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>Nitaraglobals@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <ExternalLink className="h-4 w-4 shrink-0" />
                <a
                  href="https://drive.google.com/file/d/1cmnHdIFfAwiLLF05grNvYDr4WT84AGzw/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:opacity-100 transition-all underline underline-offset-2"
                >
                  View GST Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} NITARA GLOBAL. All rights reserved.</p>
          <p>Premium Indian Spice Exporter — Purity | Quality | Reliability</p>
        </div>
      </div>
    </footer>
  );
}
