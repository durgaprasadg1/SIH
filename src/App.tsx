import { useState, useEffect } from "react";
import { StudentDashboard } from "./components/StudentDashboard";
import { FacultyDashboard } from "./components/FacultyDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import { UploadActivity } from "./components/UploadActivity";
import { FacultyApproval } from "./components/FacultyApproval";
import { DigitalPortfolio } from "./components/DigitalPortfolio";
import { Analytics } from "./components/Analytics";
import { DesktopSidebar } from "./components/DesktopSidebar";
import { MobileNavigation } from "./components/MobileNavigation";
import { Button } from "./components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Badge } from "./components/ui/badge";
import { User, Monitor, Smartphone } from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [userRole, setUserRole] = useState<'student' | 'faculty' | 'admin'>('student');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderActiveView = () => {
    const props = { isMobile };
    
    switch (activeView) {
      case 'dashboard':
        // Render role-specific dashboard
        switch (userRole) {
          case 'student':
            return <StudentDashboard {...props} />;
          case 'faculty':
            return <FacultyDashboard {...props} />;
          case 'admin':
            return <AdminDashboard {...props} />;
          default:
            return <StudentDashboard {...props} />;
        }
      case 'upload':
        return <UploadActivity {...props} />;
      case 'approval':
        return <FacultyApproval {...props} />;
      case 'portfolio':
        return <DigitalPortfolio {...props} />;
      case 'analytics':
        return <Analytics {...props} />;
      default:
        // Default dashboard based on role
        switch (userRole) {
          case 'student':
            return <StudentDashboard {...props} />;
          case 'faculty':
            return <FacultyDashboard {...props} />;
          case 'admin':
            return <AdminDashboard {...props} />;
          default:
            return <StudentDashboard {...props} />;
        }
    }
  };

  const getViewTitle = () => {
    switch (activeView) {
      case 'dashboard':
        switch (userRole) {
          case 'student':
            return 'Student Dashboard';
          case 'faculty':
            return 'Faculty Dashboard';
          case 'admin':
            return 'Admin Dashboard';
          default:
            return 'Dashboard';
        }
      case 'upload':
        return 'Upload Activity';
      case 'approval':
        return 'Faculty Approval Panel';
      case 'portfolio':
        return 'Digital Portfolio';
      case 'analytics':
        return 'Analytics & Reports';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <DesktopSidebar 
          activeView={activeView}
          onViewChange={setActiveView}
          userRole={userRole}
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden ${isMobile ? 'pb-20' : ''}`}>
        {/* Top Header - Mobile & Demo Controls */}
        <div className="bg-white border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {isMobile && (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="font-semibold">Smart Student Hub</h1>
                    <p className="text-xs text-muted-foreground capitalize">{userRole} Portal</p>
                  </div>
                </div>
              )}
              {!isMobile && (
                <div>
                  <h1 className="text-lg font-semibold">{getViewTitle()}</h1>
                  <p className="text-sm text-muted-foreground">
                    Welcome to Smart Student Hub
                  </p>
                </div>
              )}
            </div>

            {/* Demo Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {isMobile ? <Smartphone className="h-3 w-3 mr-1" /> : <Monitor className="h-3 w-3 mr-1" />}
                  {isMobile ? 'Mobile' : 'Desktop'} View
                </Badge>
                <Select value={userRole} onValueChange={(value: 'student' | 'faculty' | 'admin') => {
                  setUserRole(value);
                  setActiveView('dashboard'); // Reset to dashboard when switching roles
                }}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          {renderActiveView()}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <MobileNavigation 
          activeView={activeView}
          onViewChange={setActiveView}
          userRole={userRole}
        />
      )}
    </div>
  );
}