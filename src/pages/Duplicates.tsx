import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, AlertTriangle, Check, X, Eye } from "lucide-react";

export default function Duplicates() {
  const duplicates = [
    {
      id: 1,
      primary: { name: "John Doe", id: "GH-2024-001234", confidence: "99.2%" },
      duplicate: { name: "John D. Doe", id: "GH-2024-005678", confidence: "99.2%" },
      type: "Fingerprint + Face",
      status: "Pending"
    },
    {
      id: 2,
      primary: { name: "Jane Smith", id: "GH-2024-002345", confidence: "97.8%" },
      duplicate: { name: "Jane S. Smith", id: "GH-2024-006789", confidence: "97.8%" },
      type: "Fingerprint",
      status: "Under Review"
    },
    {
      id: 3,
      primary: { name: "Robert Johnson", id: "GH-2024-003456", confidence: "95.5%" },
      duplicate: { name: "Bob Johnson", id: "GH-2024-007890", confidence: "95.5%" },
      type: "Face Recognition",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Duplicate Detection</h1>
              <p className="text-muted-foreground">Review and resolve potential duplicate records</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="w-8 h-8 text-warning" />
                  <div>
                    <p className="text-2xl font-bold">342</p>
                    <p className="text-sm text-muted-foreground">Pending Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Check className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">1,248</p>
                    <p className="text-sm text-muted-foreground">Resolved This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <X className="w-8 h-8 text-destructive" />
                  <div>
                    <p className="text-2xl font-bold">89</p>
                    <p className="text-sm text-muted-foreground">False Positives</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Duplicate Records */}
          <div className="space-y-4">
            {duplicates.map((duplicate) => (
              <Card key={duplicate.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Potential Duplicate #{duplicate.id}</CardTitle>
                    <Badge variant={duplicate.status === 'Pending' ? 'destructive' : 'secondary'}>
                      {duplicate.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Primary Record */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-primary">Primary Record</h4>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-2xl">👤</span>
                        </div>
                        <div>
                          <h5 className="font-semibold">{duplicate.primary.name}</h5>
                          <p className="text-sm text-muted-foreground">ID: {duplicate.primary.id}</p>
                          <p className="text-sm text-muted-foreground">Match: {duplicate.primary.confidence}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Record
                      </Button>
                    </div>

                    {/* Duplicate Record */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-warning">Potential Duplicate</h4>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-2xl">👤</span>
                        </div>
                        <div>
                          <h5 className="font-semibold">{duplicate.duplicate.name}</h5>
                          <p className="text-sm text-muted-foreground">ID: {duplicate.duplicate.id}</p>
                          <p className="text-sm text-muted-foreground">Match: {duplicate.duplicate.confidence}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Record
                      </Button>
                    </div>
                  </div>

                  {/* Match Information */}
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm"><strong>Match Type:</strong> {duplicate.type}</p>
                    <p className="text-sm"><strong>Confidence Score:</strong> {duplicate.primary.confidence}</p>
                    <p className="text-sm"><strong>Detection Date:</strong> {new Date().toLocaleDateString()}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <Button className="flex-1">
                      Merge Records
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Flag for Review
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      Dismiss as False Positive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}