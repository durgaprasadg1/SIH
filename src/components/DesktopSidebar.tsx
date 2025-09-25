import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { 
  Home, 
  Upload, 
  Award, 
  User, 
  BarChart3,
  CheckSquare,
  Settings,
  LogOut,
  Bell,
  GraduationCap
} from "lucide-react";

interface DesktopSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  userRole: 'student' | 'faculty' | 'admin';
}

export function DesktopSidebar({ activeView, onViewChange, userRole }: DesktopSidebarProps) {
  const getNavigationItems = () => {
    switch (userRole) {
      case 'student':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'upload', label: 'Upload Activity', icon: Upload },
          { id: 'portfolio', label: 'Digital Portfolio', icon: User },
          { id: 'certifications', label: 'My Certifications', icon: Award }
        ];
      case 'faculty':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'approval', label: 'Approval Panel', icon: CheckSquare },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 }
        ];
      case 'admin':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'approval', label: 'Approval Panel', icon: CheckSquare },
          { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
          { id: 'users', label: 'User Management', icon: User }
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();
  const pendingCount = 8; // Mock pending notifications

  const getUserInfo = () => {
    switch (userRole) {
      case 'student':
        return { name: 'Alex Johnson', email: 'alex@university.edu', avatar: '/placeholder-avatar.jpg' };
      case 'faculty':
        return { name: 'Dr. Sarah Wilson', email: 'sarah.wilson@university.edu', avatar: '/placeholder-faculty.jpg' };
      case 'admin':
        return { name: 'Admin User', email: 'admin@university.edu', avatar: '/placeholder-admin.jpg' };
      default:
        return { name: 'User', email: 'user@university.edu', avatar: '/placeholder-avatar.jpg' };
    }
  };

  const userInfo = getUserInfo();

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground">Smart Student Hub</h2>
            <p className="text-xs text-sidebar-foreground/60 capitalize">{userRole} Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
                onClick={() => onViewChange(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                {item.label}
                {item.id === 'approval' && pendingCount > 0 && (
                  <Badge className="ml-auto bg-secondary text-secondary-foreground">
                    {pendingCount}
                  </Badge>
                )}
              </Button>
            );
          })}
        </nav>

        {/* Quick Stats for Faculty/Admin */}
        {(userRole === 'faculty' || userRole === 'admin') && (
          <div className="mt-8">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">Quick Stats</h3>
            <div className="space-y-3">
              <div className="p-3 bg-sidebar-accent rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-sidebar-accent-foreground">Pending</span>
                  <Badge variant="outline">{pendingCount}</Badge>
                </div>
              </div>
              <div className="p-3 bg-sidebar-accent rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-sidebar-accent-foreground">This Week</span>
                  <Badge variant="outline">24</Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Profile & Actions */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
            <AvatarFallback>
              {userInfo.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {userInfo.name}
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              {userInfo.email}
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notifications
            {pendingCount > 0 && (
              <Badge className="ml-auto bg-primary text-primary-foreground">
                {pendingCount}
              </Badge>
            )}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}