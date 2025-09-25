import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  Users, 
  GraduationCap, 
  Award, 
  TrendingUp,
  AlertTriangle,
  Server,
  Activity,
  BarChart3,
  Settings,
  Shield,
  Database,
  UserCheck,
  FileText,
  Calendar
} from "lucide-react";

interface AdminDashboardProps {
  isMobile?: boolean;
}

export function AdminDashboard({ isMobile = false }: AdminDashboardProps) {
  const systemStats = {
    totalUsers: 1247,
    activeStudents: 892,
    facultyMembers: 45,
    totalActivities: 3856,
    pendingApprovals: 23,
    systemUptime: "99.8%",
    storageUsed: 85
  };

  const recentAlerts = [
    {
      id: 1,
      type: "warning",
      message: "High volume of submissions in CS department",
      time: "2 hours ago",
      severity: "medium"
    },
    {
      id: 2,
      type: "info",
      message: "Monthly backup completed successfully",
      time: "4 hours ago",
      severity: "low"
    },
    {
      id: 3,
      type: "error",
      message: "Failed login attempts detected",
      time: "6 hours ago",
      severity: "high"
    }
  ];

  const departmentStats = [
    { name: "Computer Science", students: 320, faculty: 12, activities: 1205, growth: "+15%" },
    { name: "Engineering", students: 280, faculty: 10, activities: 980, growth: "+8%" },
    { name: "Business", students: 180, faculty: 8, activities: 750, growth: "+12%" },
    { name: "Design", students: 150, faculty: 6, activities: 620, growth: "+20%" },
    { name: "Sciences", students: 130, faculty: 9, activities: 580, growth: "+5%" }
  ];

  const topPerformers = [
    { name: "Dr. Sarah Wilson", role: "Faculty", metric: "96% approval rate", department: "CS" },
    { name: "Alex Johnson", role: "Student", metric: "15 activities", department: "CS" },
    { name: "Prof. Michael Chen", role: "Faculty", metric: "2.1h avg review", department: "Engineering" },
    { name: "Emma Davis", role: "Student", metric: "12 certifications", department: "Business" }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-secondary" />;
      default:
        return <Activity className="h-4 w-4 text-primary" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-destructive bg-destructive/10';
      case 'medium':
        return 'border-secondary bg-secondary/10';
      default:
        return 'border-primary bg-primary/10';
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 md:h-16 md:w-16">
            <AvatarImage src="/placeholder-admin.jpg" alt="Admin User" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">System Overview</h1>
            <p className="text-muted-foreground">Smart Student Hub Administration</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Database className="h-4 w-4 mr-2" />
            Backup
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-lg font-semibold">{systemStats.totalUsers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Students</p>
                <p className="text-lg font-semibold">{systemStats.activeStudents}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Faculty</p>
                <p className="text-lg font-semibold">{systemStats.facultyMembers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Activities</p>
                <p className="text-lg font-semibold">{systemStats.totalActivities}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-lg font-semibold">{systemStats.pendingApprovals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Server className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Uptime</p>
                <p className="text-lg font-semibold">{systemStats.systemUptime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Storage</p>
                <p className="text-lg font-semibold">{systemStats.storageUsed}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Department Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{dept.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <span>{dept.students} students</span>
                    <span>{dept.faculty} faculty</span>
                    <span>{dept.activities} activities</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="outline" 
                    className="bg-accent/20 text-accent-foreground"
                  >
                    {dept.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>System Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className={`p-3 border rounded-lg ${getAlertColor(alert.severity)}`}>
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Analytics & Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>System Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>CPU Usage</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Memory Usage</span>
                <span>78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage Usage</span>
                <span>{systemStats.storageUsed}%</span>
              </div>
              <Progress value={systemStats.storageUsed} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <div className="text-xl font-bold text-primary">45ms</div>
                <div className="text-xs text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <div className="text-xl font-bold text-accent-foreground">99.8%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Top Performers</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{performer.name}</div>
                    <div className="text-sm text-muted-foreground">{performer.department}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="outline"
                    className={performer.role === 'Faculty' ? 'text-primary' : 'text-secondary'}
                  >
                    {performer.role}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">
                    {performer.metric}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Administrative Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Manage Users</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <Database className="h-6 w-6" />
              <span className="text-sm">Database</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <Shield className="h-6 w-6" />
              <span className="text-sm">Security</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <Settings className="h-6 w-6" />
              <span className="text-sm">Settings</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Maintenance</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Health Check</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-accent/20 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                <span className="font-medium">Database</span>
              </div>
              <p className="text-sm text-muted-foreground">Operational</p>
            </div>
            
            <div className="p-4 bg-accent/20 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                <span className="font-medium">API Services</span>
              </div>
              <p className="text-sm text-muted-foreground">Operational</p>
            </div>
            
            <div className="p-4 bg-secondary/20 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                <span className="font-medium">File Storage</span>
              </div>
              <p className="text-sm text-muted-foreground">High Usage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}