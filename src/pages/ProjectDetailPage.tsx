import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero image banner */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex items-end pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/#projects">
              <Button variant="ghost" className="mb-4 text-primary-foreground/80 hover:text-primary-foreground gap-2 -ml-2">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
              {project.featured && <Badge variant="outline" className="text-primary-foreground border-primary-foreground/40">Featured</Badge>}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              {project.longDescription}
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-card border border-border/50 rounded-xl text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="p-6 bg-card border border-border/50 rounded-2xl sticky top-24 space-y-4">
              <h3 className="text-lg font-bold text-foreground">Project Links</h3>
              <Button className="w-full gap-2" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
              <Button variant="outline" className="w-full gap-2" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> View Code
                </a>
              </Button>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Like what you see?</p>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/#contact">Get a Similar Project →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
