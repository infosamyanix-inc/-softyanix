import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-accent" />
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            Last updated: March 14, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/">
          <Button variant="outline" className="mb-10 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-gray max-w-none space-y-10 text-foreground">

          {/* Intro */}
          <section>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At <strong>Softyanix</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or contact us about our services.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
            <ul className="space-y-3 text-muted-foreground list-none">
              {[
                { title: "Contact Information", desc: "Your name, email address, phone number, and company name when you fill out our contact form or request a quote." },
                { title: "Project Details", desc: "Information about your project requirements, budget range, and timeline preferences." },
                { title: "Usage Data", desc: "Anonymous data about how you interact with our website, including pages visited, time spent, and referral sources." },
                { title: "Communication Records", desc: "Records of our correspondence if you contact us by email or through our website." },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  <span><strong className="text-foreground">{title}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-muted-foreground list-none">
              {[
                "Respond to your enquiries and provide requested services",
                "Send you project proposals, quotes, and updates",
                "Improve our website, services, and client experience",
                "Comply with legal obligations",
                "Send occasional updates about our services (only with your consent)",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              3. How We Share Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We <strong className="text-foreground">do not sell, trade, or rent</strong> your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4 list-none">
              {[
                "With trusted service providers who assist in delivering our services (e.g., email platforms), bound by confidentiality agreements.",
                "When required by law, regulation, or valid legal process.",
                "To protect the rights, safety, or property of Softyanix, our clients, or others.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              4. Cookies & Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and understand how visitors interact with our site. You can control cookies through your browser settings. Disabling cookies may affect certain functionality of this website.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              5. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              6. Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as is necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Contact form submissions are retained for up to 2 years unless you request earlier deletion.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              7. Your Rights
            </h2>
            <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
            <ul className="space-y-2 text-muted-foreground list-none">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate or incomplete data",
                "Request deletion of your personal data",
                "Withdraw consent to marketing communications at any time",
                "Lodge a complaint with a data protection authority",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:infosamyanix@gmail.com" className="text-accent hover:underline font-medium">
                infosamyanix@gmail.com
              </a>.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              8. Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their individual privacy policies.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              9. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how we protect your information.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3 mb-5">
              10. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:
            </p>
            <div className="mt-4 p-6 bg-muted/40 rounded-xl border border-border space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Softyanix</strong></p>
              <p>📧 <a href="mailto:infosamyanix@gmail.com" className="text-accent hover:underline">infosamyanix@gmail.com</a></p>
              <p>📞 +92 (315) 065-7943</p>
              <p>📍 Karachi, Sindh, Pakistan</p>
            </div>
          </section>

        </div>

        {/* Back button bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
