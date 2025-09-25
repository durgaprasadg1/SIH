import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { 
  Download, 
  Share2, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Activity,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Star,
  TrendingUp
} from "lucide-react";

interface DigitalPortfolioProps {
  isMobile?: boolean;
}

export function DigitalPortfolio({ isMobile = false }: DigitalPortfolioProps) {
  const studentData = {
    name: "Alex Johnson",
    id: "STU2024001",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    program: "Bachelor of Computer Science",
    year: "Final Year",
    gpa: 3.85,
    location: "New York, NY",
    website: "alexjohnson.dev",
    profileImage: "/placeholder-avatar.jpg"
  };

  const academicData = {
    courses: [
      { name: "Advanced Algorithms", grade: "A", credits: 3 },
      { name: "Machine Learning", grade: "A-", credits: 4 },
      { name: "Database Systems", grade: "A", credits: 3 },
      { name: "Software Engineering", grade: "B+", credits: 4 }
    ],
    totalCredits: 120,
    completedCredits: 95,
    gpa: 3.85
  };

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Jan 2024",
      credentialId: "AWS-CP-2024-001",
      verified: true
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "Dec 2023",
      credentialId: "GA-2023-456",
      verified: true
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "Nov 2023",
      credentialId: "META-RD-789",
      verified: true
    }
  ];

  const activities = [
    {
      title: "Hackathon Winner - 1st Place",
      organization: "TechFest 2024",
      date: "Jan 2024",
      description: "Led a team of 4 to develop an AI-powered student assistance app",
      skills: ["React", "Node.js", "OpenAI API", "MongoDB"]
    },
    {
      title: "Teaching Assistant",
      organization: "Computer Science Department",
      date: "Sep 2023 - Present",
      description: "Assisted in CS101 and CS201 courses, mentoring 50+ students",
      skills: ["Teaching", "Python", "Problem Solving"]
    },
    {
      title: "Community Coding Workshop",
      organization: "Local Community Center",
      date: "Aug 2023",
      description: "Organized and taught coding basics to 30 high school students",
      skills: ["Teaching", "Community Service", "JavaScript"]
    }
  ];

  const internships = [
    {
      title: "Software Development Intern",
      company: "TechCorp Inc.",
      duration: "Jun 2023 - Aug 2023",
      description: "Developed microservices for e-commerce platform, improved performance by 30%",
      technologies: ["Java", "Spring Boot", "Docker", "AWS"],
      achievements: ["Reduced API response time by 30%", "Implemented automated testing"]
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      duration: "Jan 2023 - Mar 2023",
      description: "Built responsive web applications using React and TypeScript",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
      achievements: ["Launched 3 customer-facing features", "Achieved 98% test coverage"]
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Digital Portfolio</h1>
          <p className="text-muted-foreground">
            Auto-generated comprehensive student portfolio
          </p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share Link
          </Button>
        </div>
      </div>

      {/* Portfolio Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Avatar className="h-32 w-32">
              <AvatarImage src={studentData.profileImage} alt={studentData.name} />
              <AvatarFallback className="text-2xl">AJ</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h2 className="text-3xl font-bold">{studentData.name}</h2>
                <p className="text-lg text-muted-foreground">{studentData.program}</p>
                <p className="text-primary">Student ID: {studentData.id}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{studentData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{studentData.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{studentData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{studentData.website}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{studentData.gpa}</div>
                  <div className="text-sm text-muted-foreground">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{certifications.length}</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{activities.length}</div>
                  <div className="text-sm text-muted-foreground">Activities</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5" />
            <span>Academic Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">{academicData.gpa}</div>
              <div className="text-sm text-muted-foreground">Cumulative GPA</div>
            </div>
            <div className="text-center p-4 bg-secondary/20 rounded-lg">
              <div className="text-2xl font-bold">{academicData.completedCredits}</div>
              <div className="text-sm text-muted-foreground">Credits Completed</div>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <div className="text-2xl font-bold">{Math.round((academicData.completedCredits / academicData.totalCredits) * 100)}%</div>
              <div className="text-sm text-muted-foreground">Progress</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Degree Progress</span>
              <span>{academicData.completedCredits}/{academicData.totalCredits} credits</span>
            </div>
            <Progress value={(academicData.completedCredits / academicData.totalCredits) * 100} className="h-3" />
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Recent Courses</h4>
            {academicData.courses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div className="font-medium">{course.name}</div>
                  <div className="text-sm text-muted-foreground">{course.credits} credits</div>
                </div>
                <Badge variant="outline" className="font-semibold">
                  {course.grade}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Certifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{cert.title}</h4>
                    {cert.verified && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activities & Volunteering */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Activities & Volunteering</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="font-medium">{activity.title}</h4>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{activity.date}</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary">{activity.organization}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Internships */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5" />
            <span>Internships & Work Experience</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <div key={index} className="border-l-4 border-secondary pl-4 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-medium">{internship.title}</h4>
                    <p className="text-sm font-medium text-primary">{internship.company}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{internship.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{internship.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium mb-2">Key Achievements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2">
                          <TrendingUp className="h-3 w-3 text-accent" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground">
            This portfolio was auto-generated by Smart Student Hub • Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}