import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const education = {
    degree: "Diploma in Computer Programming",
    school: "Niagara College, Toronto",
    year: "2025",
    description: "Developed strong skills in software development, app creation, and technical problem-solving.",
  };

  const experience = [
    {
      role: "UI/UX Designer",
      company: "Innovate Labs",
      description: "Designed intuitive user interfaces and conducted usability testing for various digital products.",
    },
    {
      role: "Peer Intern",
      company: "Niagara College",
      period: "2023–2025",
      description: "Assisted students with technical challenges and collaborated on development projects.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Adarsh, a tech enthusiast and recent Computer Programming graduate with a strong passion for app 
            development and UI/UX design. I love creating digital experiences that are both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Card */}
          <Card className="bg-card border-border hover:border-primary/50 transition-smooth animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-1">{education.degree}</h4>
                  <p className="text-muted-foreground">{education.school}</p>
                  <p className="text-sm text-muted-foreground mb-3">Graduating {education.year}</p>
                  <p className="text-foreground">{education.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="bg-card border-border hover:border-primary/50 transition-smooth animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Experience</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="text-xl font-semibold text-primary mb-1">{job.role}</h4>
                    <p className="text-muted-foreground mb-2">
                      {job.company}
                      {job.period && <span className="text-sm"> • {job.period}</span>}
                    </p>
                    <p className="text-foreground">{job.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Skills & <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Computer Programming", "App Development", "UI/UX Design", "Problem Solving"].map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-smooth text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-semibold text-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
