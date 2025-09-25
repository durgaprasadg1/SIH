import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  GraduationCap, 
  Award, 
  Activity, 
  Download, 
  Share2, 
  Bell,
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";

interface StudentDashboardProps {
  isMobile?: boolean;
}

export function StudentDashboard({ isMobile = false }: StudentDashboardProps) {
  const studentData = {
    name: "Alex Johnson",
    id: "STU2024001",
    cgpa: 3.85,
    attendance: 92,
    totalCredits: 120,
    completedCredits: 85,
    certifications: 12,
    activities: 8,
    portfolioViews: 156
  };

  const recentActivities = [
    { title: "Machine Learning Workshop", date: "2024-01-15", status: "approved" },
    { title: "Coding Competition", date: "2024-01-10", status: "pending" },
    { title: "Volunteer Teaching", date: "2024-01-05", status: "approved" }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 md:h-16 md:w-16">
            <AvatarImage src="/placeholder-avatar.jpg" alt={studentData.name} />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Welcome back, {studentData.name}</h1>
            <p className="text-muted-foreground">Student ID: {studentData.id}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">CGPA</p>
                <p className="text-lg font-semibold">{studentData.cgpa}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Attendance</p>
                <p className="text-lg font-semibold">{studentData.attendance}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <p className="text-lg font-semibold">{studentData.certifications}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Activities</p>
                <p className="text-lg font-semibold">{studentData.activities}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Academic Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5" />
              <span>Academic Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Credit Progress</span>
                <span>{studentData.completedCredits}/{studentData.totalCredits} credits</span>
              </div>
              <Progress value={(studentData.completedCredits / studentData.totalCredits) * 100} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">{studentData.cgpa}</p>
                <p className="text-sm text-muted-foreground">Current CGPA</p>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <p className="text-2xl font-bold text-accent-foreground">{studentData.attendance}%</p>
                <p className="text-sm text-muted-foreground">Attendance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
                <Badge 
                  variant={activity.status === 'approved' ? 'default' : 'secondary'}
                  className={activity.status === 'approved' ? 'bg-accent text-accent-foreground' : ''}
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Portfolio & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Certifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="text-3xl font-bold text-secondary">{studentData.certifications}</div>
              <p className="text-muted-foreground mb-4">Certificates Earned</p>
              <Button variant="outline" size="sm">
                View All Certificates
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Digital Portfolio</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 space-y-4">
              <div className="text-xl font-semibold">{studentData.portfolioViews} views</div>
              <p className="text-muted-foreground text-sm">Your portfolio has been viewed this month</p>
              <div className="flex space-x-2 justify-center">
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}