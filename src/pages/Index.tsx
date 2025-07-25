import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import StatusIndicator from "@/components/dashboard/StatusIndicator";
import BiometricCapture from "@/components/enrollment/BiometricCapture";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  UserCheck, 
  AlertTriangle, 
  Printer,
  Activity,
  Shield,
  MapPin,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden h-48">
            <img 
              src={heroImage} 
              alt="ABIS System" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
              <div className="p-8 text-primary-foreground">
                <h1 className="text-3xl font-bold mb-2">Pinnefech Glance ABIS</h1>
                <p className="text-lg opacity-90">National Automated Biometric Identification System</p>
                <p className="text-sm opacity-75 mt-2">Secure • Reliable • Government-Grade</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Enrollments"
              value="1,247,892"
              change="+12.5% this month"
              changeType="positive"
              icon={Users}
            />
            <MetricCard
              title="Biometric Matches"
              value="98.7%"
              change="Success rate"
              changeType="positive"
              icon={UserCheck}
            />
            <MetricCard
              title="Duplicate Detections"
              value="342"
              change="Pending review"
              changeType="neutral"
              icon={AlertTriangle}
            />
            <MetricCard
              title="ID Cards Printed"
              value="1,189,445"
              change="95.3% completion"
              changeType="positive"
              icon={Printer}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <StatusIndicator 
                  status="online" 
                  label="Biometric Scanner Network"
                  description="All 45 stations operational"
                />
                <StatusIndicator 
                  status="online" 
                  label="Database Server"
                  description="Response time: 0.2ms"
                />
                <StatusIndicator 
                  status="warning" 
                  label="ID Card Printer Queue"
                  description="3 printers in maintenance"
                />
                <StatusIndicator 
                  status="online" 
                  label="Backup Systems"
                  description="Last sync: 5 minutes ago"
                />
              </CardContent>
            </Card>

            {/* Regional Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Regional Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Greater Accra</span>
                    <span className="text-sm font-medium">425,231</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ashanti</span>
                    <span className="text-sm font-medium">312,456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Northern</span>
                    <span className="text-sm font-medium">198,734</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Western</span>
                    <span className="text-sm font-medium">187,892</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => console.log('Navigate to regions view')}
                >
                  View All Regions
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm">Batch enrollment completed</p>
                    <p className="text-xs text-muted-foreground">Kumasi Center - 2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-info mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm">Security audit initiated</p>
                    <p className="text-xs text-muted-foreground">System Admin - 15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm">Monthly report generated</p>
                    <p className="text-xs text-muted-foreground">Auto-generated - 1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Biometric Capture Demo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BiometricCapture />
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => console.log('Navigate to enrollment')}
                >
                  <Users className="w-6 h-6" />
                  New Enrollment
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => console.log('Navigate to verification')}
                >
                  <UserCheck className="w-6 h-6" />
                  Verify Identity
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => console.log('Navigate to ID printing')}
                >
                  <Printer className="w-6 h-6" />
                  Print ID Card
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => console.log('Navigate to security audit')}
                >
                  <Shield className="w-6 h-6" />
                  Security Audit
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
