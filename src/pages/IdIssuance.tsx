import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Search, Printer, Eye, Clock } from "lucide-react";

export default function IdIssuance() {
  const printQueue = [
    { id: "ID001", name: "John Doe", status: "Printing", time: "2 min ago" },
    { id: "ID002", name: "Jane Smith", status: "Queued", time: "5 min ago" },
    { id: "ID003", name: "Robert Johnson", status: "Completed", time: "10 min ago" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">ID Card Issuance</h1>
              <p className="text-muted-foreground">Print and manage ID cards</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Search and Select Citizen */}
            <Card>
              <CardHeader>
                <CardTitle>Search Citizen Record</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Search by name, ID number, or phone" className="flex-1" />
                  <Button>
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">ID: GH-2024-001234</p>
                      <p className="text-sm text-muted-foreground">DOB: 1990-05-15</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview Card
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Printer className="w-4 h-4 mr-2" />
                      Print Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ID Card Preview */}
            <Card>
              <CardHeader>
                <CardTitle>ID Card Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-6 text-primary-foreground aspect-[1.6/1] flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-sm">REPUBLIC OF GHANA</h3>
                      <p className="text-xs opacity-90">NATIONAL IDENTIFICATION</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-2xl">🇬🇭</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-16 h-20 bg-white/90 rounded"></div>
                    <div className="flex-1">
                      <h4 className="font-bold">JOHN DOE</h4>
                      <p className="text-sm opacity-90">ID: GH-2024-001234</p>
                      <p className="text-sm opacity-90">DOB: 15/05/1990</p>
                      <p className="text-sm opacity-90">Valid: 2034</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    Edit Design
                  </Button>
                  <Button className="flex-1">
                    <Printer className="w-4 h-4 mr-2" />
                    Add to Queue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Print Queue */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Print Queue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {printQueue.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{item.id}</span>
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={item.status === 'Completed' ? 'default' : item.status === 'Printing' ? 'secondary' : 'outline'}>
                        {item.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}