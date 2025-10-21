import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-muted border border-primary/20">
              <span className="text-sm text-primary">Available for opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Adarsh Kumar Gaund</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Aspiring App Developer & UI/UX Designer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Creating innovative digital experiences through intuitive design and cutting-edge technology.
              Passionate about transforming ideas into elegant, user-centric solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-smooth glow-teal"
                asChild
              >
                <a href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="mailto:techadarsh365@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/techadarsh365"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/techadarsh365"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
              <img
                src={profileImage}
                alt="Adarsh Kumar Gaund"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
