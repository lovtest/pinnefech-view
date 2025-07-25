import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, Lock, AlertTriangle, Eye, UserCheck, Settings } from "lucide-react";

export default function Security() {
  const securitySettings = [
    {
      title: "Two-Factor Authentication",
      description: "Require 2FA for all admin accounts",
      enabled: true,
      critical: true
    },
    {
      title: "Session Timeout",
      description: "Auto-logout after 30 minutes of inactivity",
      enabled: true,
      critical: false
    },
    {
      title: "IP Whitelisting",
      description: "Restrict access to approved IP addresses",
      enabled: false,
      critical: true
    },
    {
      title: "Audit Logging",
      description: "Log all system activities and user actions",
      enabled: true,
      critical: true
    }
  ];

  const activeUsers = [
    { name: "John Admin", role: "System Administrator", lastActive: "2 min ago", status: "Online" },
    { name: "Jane Operator", role: "Enrollment Officer", lastActive: "5 min ago", status: "Online" },
    { name: "Bob Supervisor", role: "Regional Supervisor", lastActive: "1 hour ago", status: "Away" },
    { name: "Alice Auditor", role: "System Auditor", lastActive: "3 hours ago", status: "Offline" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Security & Access Control</h1>
              <p className="text-muted-foreground">System security settings and user management</p>
            </div>
          </div>

          {/* Security Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">Secure</p>
                    <p className="text-sm text-muted-foreground">System Status</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <UserCheck className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="w-8 h-8 text-warning" />
                  <div>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Security Alerts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Lock className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {securitySettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{setting.title}</h4>
                        {setting.critical && (
                          <Badge variant="destructive" className="text-xs">Critical</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`setting-${index}`}
                        checked={setting.enabled}
                        onCheckedChange={() => {}}
                      />
                      <Label htmlFor={`setting-${index}`} className="sr-only">
                        {setting.title}
                      </Label>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full">
                  Save Security Settings
                </Button>
              </CardContent>
            </Card>

            {/* Active Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Active User Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">{user.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{user.name}</h4>
                          <p className="text-xs text-muted-foreground">{user.role}</p>
                          <p className="text-xs text-muted-foreground">Last active: {user.lastActive}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={
                          user.status === 'Online' ? 'default' : 
                          user.status === 'Away' ? 'secondary' : 'outline'
                        }>
                          {user.status}
                        </Badge>
                        <Button size="sm" variant="ghost" className="ml-2">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  View All Users
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Security Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Recent Security Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 border-l-4 border-l-warning">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Multiple Failed Login Attempts</h4>
                      <p className="text-sm text-muted-foreground">IP: 192.168.1.203 attempted login 5 times</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                    <Badge variant="secondary">Medium Risk</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 border-l-4 border-l-destructive">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Unusual Access Pattern Detected</h4>
                      <p className="text-sm text-muted-foreground">User accessed system from new location</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                    <Badge variant="destructive">High Risk</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 border-l-4 border-l-success">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Security Scan Completed</h4>
                      <p className="text-sm text-muted-foreground">Daily security scan found no vulnerabilities</p>
                      <p className="text-xs text-muted-foreground">3 hours ago</p>
                    </div>
                    <Badge>Info</Badge>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}