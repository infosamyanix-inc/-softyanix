import { Code, Zap, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-primary-foreground" />
                <Zap className="h-4 w-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">
                Softy<span className="text-accent">anix</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Transforming ideas into digital reality with cutting-edge MERN stack development, 
              AI chatbots, mobile apps, and stunning UI/UX design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.toLowerCase());
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">infosamyanix@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+92 (315) 065-7943</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Karachi, Sindh, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-primary-foreground/60">
            © 2026 Softyanix. All rights reserved. Built with precision and modern technology.
          </p>
          <a
            href="/privacy-policy"
            className="text-primary-foreground/60 hover:text-accent transition-colors text-sm whitespace-nowrap"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;