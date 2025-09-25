import { Button } from "./ui/button";
import { 
  Home, 
  Upload, 
  Award, 
  User, 
  BarChart3,
  CheckSquare
} from "lucide-react";

interface MobileNavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
  userRole: 'student' | 'faculty' | 'admin';
}

export function MobileNavigation({ activeView, onViewChange, userRole }: MobileNavigationProps) {
  const getNavigationItems = () => {
    switch (userRole) {
      case 'student':
        return [
          { id: 'dashboard', label: 'Home', icon: Home },
          { id: 'upload', label: 'Upload', icon: Upload },
          { id: 'portfolio', label: 'Portfolio', icon: User },
          { id: 'certifications', label: 'Awards', icon: Award }
        ];
      case 'faculty':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'approval', label: 'Approvals', icon: CheckSquare },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 }
        ];
      case 'admin':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'approval', label: 'Approvals', icon: CheckSquare },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'users', label: 'Users', icon: User }
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}