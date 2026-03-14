import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Send, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactServices, budgetRanges, timelineOptions, contactInfo, contactBenefits } from "@/data/contact";

interface ContactSectionProps {
  onScrollTo: (id: string) => void;
}

const ContactSection = ({ onScrollTo }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "",
    budget: "", timeline: "", message: "",
  });

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network error");
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", company: "", service: "", budget: "", timeline: "", message: "" });
    } catch {
      toast({ title: "Error sending message", description: "Please try again or contact us directly.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-shell section-soft scroll-mt-24">
      <div className="content-wrap">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Let's Build Something Amazing</h2>
          <p className="section-subheading mb-12 max-w-3xl mx-auto">
            Ready to transform your idea into reality? Get in touch for a free
            consultation and detailed project proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-large bg-card/95 card-hover border-border/50 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-accent to-primary" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Start Your Project</CardTitle>
                <p className="text-muted-foreground text-base">
                  Tell us about your project and we'll get back to you with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-border/50 focus:border-accent" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-border/50 focus:border-accent" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-semibold">Company Name</Label>
                    <Input id="company" placeholder="Your Company Inc." value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="border-border/50 focus:border-accent" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-semibold">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(v) => handleInputChange("service", v)}>
                        <SelectTrigger className="border-border/50"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {contactServices.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              <div className="flex items-center"><s.icon className="h-4 w-4 mr-2" />{s.label}</div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="font-semibold">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(v) => handleInputChange("budget", v)}>
                        <SelectTrigger className="border-border/50"><SelectValue placeholder="Select budget" /></SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-semibold">Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(v) => handleInputChange("timeline", v)}>
                      <SelectTrigger className="border-border/50"><SelectValue placeholder="When do you need this?" /></SelectTrigger>
                      <SelectContent>
                        {timelineOptions.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">Project Details *</Label>
                    <Textarea id="message" rows={6} value={formData.message}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-border/50 focus:border-accent" required />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-glow font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-medium bg-card/95 border-border/50">
              <div className="h-1 bg-gradient-to-r from-primary to-accent" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Get in Touch</CardTitle>
                <p className="text-muted-foreground text-sm">Multiple ways to reach us for your convenience.</p>
              </CardHeader>
              <CardContent className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                      <p className="text-foreground font-semibold text-sm mt-1">{item.info}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-medium bg-gradient-to-br from-accent/8 via-primary/5 to-accent/5 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg"><Star className="h-5 w-5 text-accent" /></div>
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactBenefits.map((item) => (
                  <div key={item} className="flex items-center space-x-3 group">
                    <div className="p-1 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="section-heading mb-4">Frequently Asked Questions</h3>
            <p className="section-subheading">Common questions about our process and services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { question: "How much does a project cost?", answer: "Project costs vary based on complexity and scope. We provide detailed quotes after understanding your requirements." },
              { question: "How long does development take?", answer: "Timeline depends on project scope. Simple projects: 2-4 weeks, Complex applications: 2-6 months." },
              { question: "Do you provide ongoing support?", answer: "Yes, we offer maintenance packages and 24/7 support to keep your application running smoothly." },
              { question: "Can you work with my existing team?", answer: "Absolutely! We're flexible and can integrate with your existing development team or work independently." },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden border-t border-primary-foreground/10 mt-24">
        <div className="relative content-wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Next Product?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Get a free consultation today.
          </p>
          <Button size="lg" variant="secondary" onClick={() => onScrollTo("contact")}>
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
