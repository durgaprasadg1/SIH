import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  CheckSquare, 
  Clock, 
  Users, 
  FileText, 
  TrendingUp,
  AlertCircle,
  Award,
  Calendar,
  Eye,
  MessageSquare,
  Star
} from "lucide-react";

interface FacultyDashboardProps {
  isMobile?: boolean;
}

export function FacultyDashboard({ isMobile = false }: FacultyDashboardProps) {
  const facultyData = {
    name: "Dr. Sarah Wilson",
    department: "Computer Science Department",
    email: "sarah.wilson@university.edu",
    totalSubmissions: 45,
    pendingReviews: 8,
    approvedToday: 6,
    avgReviewTime: "2.3 hours",
    coursesSupervised: 3
  };

  const pendingSubmissions = [
    {
      id: 1,
      studentName: "Alex Johnson",
      studentId: "STU2024001",
      activity: "AWS Cloud Practitioner Certification",
      submittedAt: "2 hours ago",
      priority: "high",
      category: "Certification"
    },
    {
      id: 2,
      studentName: "Sarah Chen",
      studentId: "STU2024002",
      activity: "Machine Learning Workshop",
      submittedAt: "4 hours ago",
      priority: "medium",
      category: "Workshop"
    },
    {
      id: 3,
      studentName: "Mike Davis",
      studentId: "STU2024003",
      activity: "Hackathon Participation",
      submittedAt: "1 day ago",
      priority: "low",
      category: "Competition"
    }
  ];

  const recentActivities = [
    { action: "Approved", student: "Emma Wilson", activity: "React Course", time: "30 min ago" },
    { action: "Reviewed", student: "James Brown", activity: "Volunteer Work", time: "1 hour ago" },
    { action: "Commented", student: "Lisa Garcia", activity: "Research Project", time: "2 hours ago" },
    { action: "Approved", student: "Tom Anderson", activity: "Internship Report", time: "3 hours ago" }
  ];

  const weeklyStats = [
    { day: "Mon", submissions: 12, reviews: 10 },
    { day: "Tue", submissions: 8, reviews: 8 },
    { day: "Wed", submissions: 15, reviews: 12 },
    { day: "Thu", submissions: 10, reviews: 9 },
    { day: "Fri", submissions: 6, reviews: 6 },
    { day: "Sat", submissions: 3, reviews: 3 },
    { day: "Sun", submissions: 2, reviews: 2 }
  ];

  const courses = [
    { name: "CS101 - Intro to Programming", students: 45, pendingActivities: 3 },
    { name: "CS301 - Data Structures", students: 32, pendingActivities: 2 },
    { name: "CS401 - Software Engineering", students: 28, pendingActivities: 3 }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 md:h-16 md:w-16">
            <AvatarImage src="/placeholder-faculty.jpg" alt={facultyData.name} />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Welcome back, {facultyData.name}</h1>
            <p className="text-muted-foreground">{facultyData.department}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messages
          </Button>
          <Button size="sm">
            <CheckSquare className="h-4 w-4 mr-2" />
            Review Queue
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
                <p className="text-lg font-semibold">{facultyData.pendingReviews}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Approved Today</p>
                <p className="text-lg font-semibold">{facultyData.approvedToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Review Time</p>
                <p className="text-lg font-semibold">{facultyData.avgReviewTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-lg font-semibold">105</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Reviews */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Pending Reviews</span>
              </div>
              <Badge variant="outline">{pendingSubmissions.length} pending</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingSubmissions.map((submission) => (
              <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium">{submission.studentName}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        submission.priority === 'high' ? 'border-red-200 text-red-800' :
                        submission.priority === 'medium' ? 'border-yellow-200 text-yellow-800' :
                        'border-green-200 text-green-800'
                      }`}
                    >
                      {submission.priority} priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{submission.studentId}</p>
                  <p className="text-sm font-medium">{submission.activity}</p>
                  <p className="text-xs text-muted-foreground">{submission.submittedAt}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm">
                    Review
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Submissions
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.action === 'Approved' ? 'bg-accent' :
                  activity.action === 'Reviewed' ? 'bg-primary' :
                  'bg-secondary'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}</span> {activity.student}'s {activity.activity}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Course Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Supervised Courses</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{course.name}</h4>
                  <Badge variant="outline">{course.students} students</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {course.pendingActivities} pending activities
                  </span>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>This Week's Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">96%</div>
                <div className="text-sm text-muted-foreground">Review Completion Rate</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Reviews Completed</span>
                    <span>48/52</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <div className="font-semibold text-accent-foreground">56</div>
                    <div className="text-xs text-muted-foreground">Total Reviews</div>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <div className="font-semibold">2.1h</div>
                    <div className="text-xs text-muted-foreground">Avg Time</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <CheckSquare className="h-6 w-6" />
              <span className="text-sm">Bulk Review</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Export Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm">Messages</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}