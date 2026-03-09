import { useState } from "react";
import { Phone, Mail, Clock, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+91 9900168682"],
    href: "https://wa.me/919900168682",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["nitaraglobals@gmail.com"],
    href: "mailto:nitaraglobals@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"],
    href: null,
  },
  {
    icon: ExternalLink,
    title: "GST Certificate",
    lines: ["Click to view our GST Registration Certificate"],
    href: "https://drive.google.com/file/d/1cmnHdIFfAwiLLF05grNvYDr4WT84AGzw/view?usp=drive_link",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. Our team will get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", country: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground">
        <div className="container relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h1 className="section-title text-primary-foreground mb-4 max-w-3xl">
              Let's Build a Lasting Spice Trade Partnership
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              Looking to source premium Indian spices for your market? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="section-title text-2xl md:text-3xl mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and our team will respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                      <Input
                        required
                        placeholder="Rakesh Kumar"
                        value={form.name}
                        onChange={update("name")}
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder="rakesh@gmail.com"
                        value={form.email}
                        onChange={update("email")}
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Country *</label>
                    <Input
                      required
                      placeholder="India"
                      value={form.country}
                      onChange={update("country")}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Tell us about your spice requirements — products, quantities (MT), packaging, and delivery destination..."
                      value={form.message}
                      onChange={update("message")}
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" size="lg" className="px-8">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4 bg-card rounded-xl p-5 border border-border">
                      <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm mb-1">{info.title}</h4>
                        {info.href ? (
                          info.title === "GST Certificate" ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              {info.lines[0]}
                            </a>
                          ) : (
                            <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                              {info.lines[0]}
                            </a>
                          )
                        ) : (
                          info.lines.map((line) => (
                            <p key={line} className="text-sm text-muted-foreground">{line}</p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="mt-6">
                <div className="bg-muted rounded-xl overflow-hidden border border-border p-6 flex flex-col items-center text-center gap-3">
                  <Mail className="h-10 w-10 text-primary" />
                  <p className="text-sm text-muted-foreground font-medium">
                    NITARA GLOBAL<br />
                    Premium Indian Spice Exporter<br />
                    <span className="text-primary font-semibold">Purity | Quality | Reliability</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
