import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import fitnessApp from "@/assets/fitness-app.jpg";
import ecommerceWeb from "@/assets/ecommerce-web.jpg";
import aiChatbot from "@/assets/ai-chatbot.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Fitness Tracker App",
      category: "Mobile App Development",
      description: "Cross-platform mobile app using React Native with real-time workout tracking, personalized goals, and social sharing features.",
      image: fitnessApp,
      tags: ["React Native", "Mobile", "Health Tech"],
      stats: "1,000+ beta downloads",
    },
    {
      title: "E-Commerce Website Redesign",
      category: "Web Design & Development",
      description: "Responsive website redesign with HTML/CSS/JavaScript, integrated payment gateways, and improved user experience.",
      image: ecommerceWeb,
      tags: ["HTML", "CSS", "JavaScript", "E-Commerce"],
      stats: "40% improved load times",
    },
    {
      title: "AI-Powered Educational Chatbot",
      category: "AI & Web Development",
      description: "Web-based chatbot built with Python/Flask featuring NLP for personalized learning experiences.",
      image: aiChatbot,
      tags: ["Python", "Flask", "AI", "NLP"],
      stats: "Deployed for online academy",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in app development, web design, and UI/UX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group card-3d animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
                  {project.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-xs rounded-full text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-primary font-medium">{project.stats}</span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:text-primary transition-smooth"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:text-primary transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
