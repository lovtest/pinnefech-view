import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Bell, 
  Settings, 
  LogOut, 
  User, 
  Moon, 
  Sun,
  Shield,
  Fingerprint
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-card">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Fingerprint className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Pinnefech Glance</h1>
            <p className="text-xs text-muted-foreground">ABIS Portal</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="w-9 h-9 p-0"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="sm" className="w-9 h-9 p-0 relative">
          <Bell className="w-4 h-4" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></div>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  AO
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium">Admin Officer</p>
                <p className="text-xs text-muted-foreground">National Level</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Shield className="mr-2 h-4 w-4" />
              Security
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}