import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import ecommerceImage from "@/assets/projects/ecommerce.jpg";
import aiBotImage from "@/assets/projects/ai-bot.jpg";
import fitnessAppImage from "@/assets/projects/fitness-app.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "AI", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "Full-stack MERN e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Customer Support Bot",
      category: "AI",
      description: "Intelligent chatbot with GPT-4 integration, handling 80% of customer queries automatically.",
      image: aiBotImage,
      technologies: ["Python", "OpenAI", "React", "FastAPI", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "Mobile",
      description: "React Native fitness app with workout tracking, progress analytics, and social features.",
      image: fitnessAppImage,
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "SaaS Dashboard Design",
      category: "UI/UX",
      description: "Modern dashboard design system for B2B SaaS platform with complex data visualization.",
      image: ecommerceImage,
      technologies: ["Figma", "React", "Tailwind", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
      image: ecommerceImage,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Vercel"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 6,
      title: "Restaurant Order App",
      category: "Mobile",
      description: "Cross-platform ordering app with real-time order tracking and payment processing.",
      image: fitnessAppImage,
      technologies: ["Flutter", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in modern web development, mobile apps, and AI solutions.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Highlighted work that demonstrates our capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="default" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 sm:mb-0">
              All Projects
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="transition-all"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="default" className="flex-1" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life with our proven expertise 
            and cutting-edge technology stack.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">
              Start Your Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;