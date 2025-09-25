import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Award, 
  Activity,
  Download,
  FileText,
  Calendar,
  Target,
  Zap
} from "lucide-react";

interface AnalyticsProps {
  isMobile?: boolean;
}

export function Analytics({ isMobile = false }: AnalyticsProps) {
  const overviewStats = {
    totalStudents: 1247,
    totalActivities: 3856,
    totalCertifications: 892,
    averageActivitiesPerStudent: 3.1,
    monthlyGrowth: 15.2
  };

  const semesterData = [
    { semester: "Fall 2022", activities: 450, certifications: 120, students: 380 },
    { semester: "Spring 2023", activities: 520, certifications: 145, students: 420 },
    { semester: "Fall 2023", activities: 680, certifications: 180, students: 520 },
    { semester: "Spring 2024", activities: 780, certifications: 220, students: 580 },
    { semester: "Fall 2024", activities: 920, certifications: 280, students: 640 }
  ];

  const categoryData = [
    { name: "Certifications", value: 35, color: "#4A90E2" },
    { name: "Workshops", value: 25, color: "#FFD699" },
    { name: "Competitions", value: 15, color: "#C1F0C1" },
    { name: "Volunteer Work", value: 12, color: "#ff6b6b" },
    { name: "Internships", value: 8, color: "#845ec2" },
    { name: "Other", value: 5, color: "#95a5a6" }
  ];

  const monthlyTrends = [
    { month: "Jan", submissions: 120, approvals: 95, rejections: 15 },
    { month: "Feb", submissions: 135, approvals: 110, rejections: 18 },
    { month: "Mar", submissions: 150, approvals: 125, rejections: 20 },
    { month: "Apr", submissions: 165, approvals: 140, rejections: 22 },
    { month: "May", submissions: 180, approvals: 155, rejections: 18 },
    { month: "Jun", submissions: 145, approvals: 125, rejections: 15 }
  ];

  const departmentData = [
    { department: "Computer Science", activities: 450, students: 180 },
    { department: "Engineering", activities: 380, students: 152 },
    { department: "Business", activities: 320, students: 128 },
    { department: "Design", activities: 280, students: 112 },
    { department: "Sciences", activities: 250, students: 100 }
  ];

  const topPerformers = [
    { name: "Alex Johnson", activities: 15, certifications: 8, department: "Computer Science" },
    { name: "Sarah Chen", activities: 14, certifications: 7, department: "Engineering" },
    { name: "Mike Davis", activities: 13, certifications: 6, department: "Business" },
    { name: "Emma Wilson", activities: 12, certifications: 7, department: "Design" },
    { name: "James Brown", activities: 11, certifications: 5, department: "Sciences" }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into student activities and engagement
          </p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="current-semester">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-semester">Current Semester</SelectItem>
              <SelectItem value="last-semester">Last Semester</SelectItem>
              <SelectItem value="academic-year">Academic Year</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{overviewStats.totalStudents.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Students</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Activity className="h-5 w-5 text-secondary" />
            </div>
            <div className="text-2xl font-bold">{overviewStats.totalActivities.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Activities</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <div className="text-2xl font-bold">{overviewStats.totalCertifications}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{overviewStats.averageActivitiesPerStudent}</div>
            <div className="text-sm text-muted-foreground">Avg per Student</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent">+{overviewStats.monthlyGrowth}%</div>
            <div className="text-sm text-muted-foreground">Monthly Growth</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Semester Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Activities by Semester</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={semesterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="activities" fill="#4A90E2" name="Activities" />
                <Bar dataKey="certifications" fill="#FFD699" name="Certifications" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Activity Categories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Monthly Submission Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="submissions" 
                  stroke="#4A90E2" 
                  strokeWidth={2}
                  name="Submissions"
                />
                <Line 
                  type="monotone" 
                  dataKey="approvals" 
                  stroke="#C1F0C1" 
                  strokeWidth={2}
                  name="Approvals"
                />
                <Line 
                  type="monotone" 
                  dataKey="rejections" 
                  stroke="#ff6b6b" 
                  strokeWidth={2}
                  name="Rejections"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Department Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="department" type="category" width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="activities" fill="#4A90E2" name="Activities" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>Top Performing Students</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((student, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{student.name}</div>
                    <div className="text-sm text-muted-foreground">{student.department}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="font-semibold text-primary">{student.activities}</div>
                    <div className="text-xs text-muted-foreground">Activities</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-secondary">{student.certifications}</div>
                    <div className="text-xs text-muted-foreground">Certificates</div>
                  </div>
                  <Badge variant="outline">
                    Top {Math.round(((5 - index) / 5) * 100)}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-medium">Growth Trend</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Activity submissions increased by 15.2% this month, with certifications leading the growth.
              </p>
            </div>
            
            <div className="p-4 bg-secondary/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-4 w-4 text-secondary" />
                <span className="font-medium">Top Category</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Certifications account for 35% of all activities, showing strong professional development focus.
              </p>
            </div>
            
            <div className="p-4 bg-accent/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-4 w-4 text-accent" />
                <span className="font-medium">Engagement</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Computer Science students are the most active with an average of 4.2 activities per student.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}