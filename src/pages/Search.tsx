import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, Upload, Fingerprint, Eye, Scan } from "lucide-react";

export default function Search() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <SearchIcon className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Biometric Search & Match</h1>
              <p className="text-muted-foreground">Search and verify biometric records</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 1:N Search */}
            <Card>
              <CardHeader>
                <CardTitle>1:N Search (Find Duplicates)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Fingerprint className="w-6 h-6" />
                    Scan Fingerprint
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Scan className="w-6 h-6" />
                    Capture Face
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Eye className="w-6 h-6" />
                    Scan Iris
                  </Button>
                </div>
                
                <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Upload biometric sample or use scanner</p>
                  <Button variant="outline" className="mt-4">
                    Browse Files
                  </Button>
                </div>

                <Button className="w-full">
                  <SearchIcon className="w-4 h-4 mr-2" />
                  Search Database
                </Button>
              </CardContent>
            </Card>

            {/* 1:1 Verification */}
            <Card>
              <CardHeader>
                <CardTitle>1:1 Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Enter ID number to verify against" />
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">ID: GH-2024-001234</p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Verify Against This Record
                  </Button>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Verification Result</h4>
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <div className="flex items-center justify-between">
                      <span>Match Confidence</span>
                      <Badge>98.7%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-success h-2 rounded-full w-[98.7%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <Card>
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-muted rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">John Doe</h4>
                        <p className="text-sm text-muted-foreground">ID: GH-2024-001234</p>
                        <p className="text-sm text-muted-foreground">DOB: 1990-05-15</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">99.2% Match</Badge>
                      <p className="text-sm text-muted-foreground mt-1">Fingerprint match</p>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-muted rounded-full"></div>
                      <div>
                        <h4 className="font-semibold">Jane Smith</h4>
                        <p className="text-sm text-muted-foreground">ID: GH-2024-001235</p>
                        <p className="text-sm text-muted-foreground">DOB: 1992-03-22</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">76.4% Match</Badge>
                      <p className="text-sm text-muted-foreground mt-1">Partial match</p>
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