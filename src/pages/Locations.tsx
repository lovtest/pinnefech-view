import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Users, Activity } from "lucide-react";

export default function Locations() {
  const locations = [
    {
      id: 1,
      name: "Greater Accra Regional Office",
      type: "Regional",
      address: "Liberation Road, Accra",
      operators: 15,
      enrollments: 425231,
      status: "Active"
    },
    {
      id: 2,
      name: "Kumasi District Center",
      type: "District",
      address: "Kejetia, Kumasi",
      operators: 8,
      enrollments: 312456,
      status: "Active"
    },
    {
      id: 3,
      name: "Tamale Northern Office",
      type: "Regional",
      address: "Central Market Area, Tamale",
      operators: 6,
      enrollments: 198734,
      status: "Maintenance"
    },
    {
      id: 4,
      name: "Cape Coast District",
      type: "District",
      address: "Commercial Street, Cape Coast",
      operators: 5,
      enrollments: 187892,
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Location Management</h1>
              <p className="text-muted-foreground">Multi-level access control and regional oversight</p>
            </div>
          </div>

          {/* Overview Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Building className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">16</p>
                    <p className="text-sm text-muted-foreground">Regional Offices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">216</p>
                    <p className="text-sm text-muted-foreground">District Centers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-muted-foreground">Active Operators</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Activity className="w-8 h-8 text-warning" />
                  <div>
                    <p className="text-2xl font-bold">98.3%</p>
                    <p className="text-sm text-muted-foreground">System Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Hierarchy */}
          <Card>
            <CardHeader>
              <CardTitle>National Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-primary/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold">National Headquarters</h3>
                        <p className="text-sm text-muted-foreground">Accra, Ghana</p>
                      </div>
                    </div>
                    <Badge>National</Badge>
                  </div>
                </div>

                <div className="ml-8 space-y-3">
                  {locations.map((location) => (
                    <div key={location.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className={`w-5 h-5 ${location.type === 'Regional' ? 'text-accent' : 'text-muted-foreground'}`} />
                          <div>
                            <h4 className="font-semibold">{location.name}</h4>
                            <p className="text-sm text-muted-foreground">{location.address}</p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                              <span>{location.operators} operators</span>
                              <span>{location.enrollments.toLocaleString()} enrollments</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={location.status === 'Active' ? 'default' : 'secondary'}>
                            {location.status}
                          </Badge>
                          <Badge variant="outline" className="ml-2">
                            {location.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Manage Access
                        </Button>
                        <Button size="sm" variant="outline">
                          System Status
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Regional Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Greater Accra</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Enrollments</span>
                        <span className="font-medium">425,231</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Success Rate</span>
                        <span className="font-medium text-success">99.1%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Operators</span>
                        <span className="font-medium">15 active</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Ashanti</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Enrollments</span>
                        <span className="font-medium">312,456</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Success Rate</span>
                        <span className="font-medium text-success">98.7%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Operators</span>
                        <span className="font-medium">12 active</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Northern</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Enrollments</span>
                        <span className="font-medium">198,734</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Success Rate</span>
                        <span className="font-medium text-warning">96.2%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Operators</span>
                        <span className="font-medium">8 active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}