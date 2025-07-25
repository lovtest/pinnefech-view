import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Filter, Calendar, User, Shield, AlertTriangle } from "lucide-react";

export default function Audit() {
  const auditLogs = [
    {
      id: 1,
      timestamp: "2024-01-20 14:30:25",
      user: "admin@gma.gov.gh",
      action: "Biometric Enrollment",
      resource: "Citizen ID: GH-2024-001234",
      status: "Success",
      ip: "192.168.1.100"
    },
    {
      id: 2,
      timestamp: "2024-01-20 14:28:15",
      user: "operator@gma.gov.gh",
      action: "ID Card Print",
      resource: "Card ID: C-001234",
      status: "Success",
      ip: "192.168.1.101"
    },
    {
      id: 3,
      timestamp: "2024-01-20 14:25:42",
      user: "supervisor@gma.gov.gh",
      action: "Duplicate Resolution",
      resource: "Duplicate Case: #D-342",
      status: "Completed",
      ip: "192.168.1.102"
    },
    {
      id: 4,
      timestamp: "2024-01-20 14:20:18",
      user: "operator@gma.gov.gh",
      action: "Failed Login Attempt",
      resource: "Authentication System",
      status: "Failed",
      ip: "192.168.1.103"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Audit Logs</h1>
              <p className="text-muted-foreground">System activity monitoring and compliance tracking</p>
            </div>
          </div>

          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters & Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Input placeholder="Search by user or action..." />
                </div>
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Action Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enrollment">Enrollment</SelectItem>
                      <SelectItem value="print">ID Print</SelectItem>
                      <SelectItem value="search">Search</SelectItem>
                      <SelectItem value="login">Login</SelectItem>
                      <SelectItem value="duplicate">Duplicate Resolution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input type="date" />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button>Apply Filters</Button>
                <Button variant="outline">Reset</Button>
                <Button variant="outline" className="ml-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <User className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-muted-foreground">Total Actions Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">98.7%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="w-8 h-8 text-warning" />
                  <div>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-sm text-muted-foreground">Failed Attempts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Audit Log Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={log.status === 'Success' || log.status === 'Completed' ? 'default' : 'destructive'}>
                            {log.status}
                          </Badge>
                          <span className="font-medium">{log.action}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{log.resource}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>User: {log.user}</span>
                          <span>IP: {log.ip}</span>
                          <span>Time: {log.timestamp}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More Logs</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}