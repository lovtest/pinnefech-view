import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard,
  UserPlus,
  CreditCard,
  Search,
  Users,
  FileText,
  MapPin,
  Shield,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  Eye,
  Scan
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    description: "System overview"
  },
  {
    title: "Enrollment",
    icon: UserPlus,
    href: "/enrollment",
    description: "Biometric registration"
  },
  {
    title: "ID Issuance",
    icon: CreditCard,
    href: "/id-issuance",
    description: "Card printing"
  },
  {
    title: "Search & Match",
    icon: Search,
    href: "/search",
    description: "Biometric verification"
  },
  {
    title: "Duplicates",
    icon: Users,
    href: "/duplicates",
    description: "Review conflicts"
  },
  {
    title: "Audit Logs",
    icon: FileText,
    href: "/audit",
    description: "System activity"
  },
  {
    title: "Locations",
    icon: MapPin,
    href: "/locations",
    description: "Multi-level access"
  },
  {
    title: "Security",
    icon: Shield,
    href: "/security",
    description: "Access control"
  }
];

const biometricTypes = [
  { name: "Fingerprint", icon: Fingerprint, count: "45,231" },
  { name: "Facial", icon: Scan, count: "43,892" },
  { name: "Iris", icon: Eye, count: "41,567" }
];

export default function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={cn(
      "bg-card border-r border-border transition-all duration-300 flex flex-col shadow-card",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Collapse Toggle */}
      <div className="p-4 border-b border-border flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 p-0"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            onClick={() => navigate(item.href)}
            className={cn(
              "w-full justify-start h-11 px-3 text-left font-normal",
              "hover:bg-accent/50 hover:text-accent-foreground",
              location.pathname === item.href && "bg-accent text-accent-foreground",
              collapsed && "px-2"
            )}
          >
            <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
            {!collapsed && (
              <div className="flex flex-col items-start">
                <span className="text-sm">{item.title}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </div>
            )}
          </Button>
        ))}
      </nav>

      {/* Biometric Status */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Biometric Status
          </h4>
          <div className="space-y-2">
            {biometricTypes.map((type) => (
              <div key={type.name} className="flex items-center justify-between p-2 rounded-md bg-muted/30">
                <div className="flex items-center gap-2">
                  <type.icon className="w-4 h-4 text-accent" />
                  <span className="text-xs">{type.name}</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">{type.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}