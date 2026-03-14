import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, projectFilters } from "@/data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-shell section-soft scroll-mt-24">
      <div className="content-wrap">
        <div className="text-center mb-20">
          <h2 className="section-heading mb-6">Our Projects</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise in modern web development, mobile apps, and AI solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="h-1 w-8 bg-gradient-to-r from-accent to-primary rounded-full" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden card-hover border-border/50 bg-card/95"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-72 bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
                    Featured
                  </Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" asChild className="rounded-full">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> View
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild className="rounded-full">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-foreground flex-1">{project.title}</h3>
                    <Badge variant="outline" className="whitespace-nowrap">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">View Case Study →</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects with Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4 sm:mb-0">All Projects</h3>
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {projectFilters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
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
              className="group hover:shadow-medium transition-[transform,box-shadow] duration-200 hover:-translate-y-1"
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
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="default" className="flex-1" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" /> Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/projects/${project.slug}`}>Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
