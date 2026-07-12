import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Code, 
  Palette, 
  Bot, 
  Smartphone,
  ArrowRight,
  Heart,
  Lightbulb,
  Rocket
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "3+", label: "Years Experience", icon: TrendingUp }
  ];

  const skills = [
    { name: "React & Next.js", level: 95, icon: Code },
    { name: "Node.js & Express", level: 90, icon: Code },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "AI & Machine Learning", level: 80, icon: Bot },
    { name: "Mobile Development", level: 88, icon: Smartphone },
    { name: "Cloud & DevOps", level: 82, icon: Rocket }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with clients as partners, ensuring transparency throughout the process."
    },
    {
      icon: Rocket,
      title: "Quality & Speed",
      description: "We deliver high-quality solutions without compromising on development speed."
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started as a solo freelancer specializing in React development."
    },
    {
      year: "2022", 
      title: "Expanding Horizons",
      description: "Added AI/ML and mobile app development to our service offerings."
    },
    {
      year: "2023",
      title: "Growing Team",
      description: "Formed strategic partnerships and expanded our capabilities."
    },
    {
      year: "2024",
      title: "Softyanix Today",
      description: "A trusted partner for startups and enterprises worldwide."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About Softyanix
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're a passionate software house dedicated to transforming ideas into 
                digital reality. From solo startup to trusted partner, we've been 
                crafting exceptional digital experiences since 2021.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label} 
                    className="text-center p-6 hover:shadow-medium transition-shadow animate-scale-in"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-0">
                      <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 gradient-card shadow-medium animate-fade-in">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes by creating innovative, scalable, 
                and user-centric digital solutions that drive growth and success in 
                the modern digital landscape.
              </p>
            </Card>
            
            <Card className="p-8 gradient-card shadow-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the go-to software house for companies seeking cutting-edge 
                technology solutions, known for our innovation, reliability, and 
                exceptional client partnerships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Years of experience across modern technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 hover:shadow-medium transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <skill.icon className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right mt-2">
                    <Badge variant="outline">{skill.level}%</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="p-8 hover:shadow-accent transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup to trusted software partner
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent/20" />
            {timeline.map((item, index) => (
              <div 
                key={item.year} 
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <CardContent className="p-0">
                    <Badge className="mb-3 bg-accent text-accent-foreground">{item.year}</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life 
            with our expertise and passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;