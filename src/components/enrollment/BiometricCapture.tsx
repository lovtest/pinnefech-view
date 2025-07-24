import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Fingerprint, 
  Camera, 
  Eye, 
  CheckCircle, 
  AlertCircle,
  RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BiometricType {
  id: string;
  name: string;
  icon: React.ElementType;
  status: "pending" | "capturing" | "complete" | "error";
  quality?: number;
}

const biometricTypes: BiometricType[] = [
  { id: "fingerprint", name: "Fingerprint", icon: Fingerprint, status: "complete", quality: 95 },
  { id: "facial", name: "Facial Recognition", icon: Camera, status: "capturing", quality: 78 },
  { id: "iris", name: "Iris Scan", icon: Eye, status: "pending" }
];

export default function BiometricCapture() {
  const [currentCapture, setCurrentCapture] = useState<string | null>("facial");

  const getStatusBadge = (status: string, quality?: number) => {
    switch (status) {
      case "complete":
        return <Badge className="bg-success text-success-foreground">Complete</Badge>;
      case "capturing":
        return <Badge className="bg-warning text-warning-foreground">Capturing...</Badge>;
      case "error":
        return <Badge className="bg-destructive text-destructive-foreground">Failed</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-primary" />
          Biometric Capture
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Capture Interface */}
        <div className="bg-gradient-subtle rounded-lg p-8 text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-card rounded-full border-4 border-dashed border-border flex items-center justify-center">
            <Camera className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Facial Recognition Capture</h3>
          <p className="text-muted-foreground mb-4">Please look directly at the camera</p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Recapture
            </Button>
            <Button>
              <CheckCircle className="w-4 h-4 mr-2" />
              Accept
            </Button>
          </div>
        </div>

        {/* Quality Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Image Quality</span>
            <span className="font-medium">78%</span>
          </div>
          <Progress value={78} className="h-2" />
          <p className="text-xs text-muted-foreground">
            Minimum quality: 70% • Current: Good
          </p>
        </div>

        {/* Biometric Status List */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">Capture Progress</h4>
          {biometricTypes.map((biometric) => (
            <div 
              key={biometric.id}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg border transition-all",
                currentCapture === biometric.id ? "border-primary bg-primary/5" : "border-border"
              )}
            >
              <div className="flex items-center gap-3">
                <biometric.icon className={cn(
                  "w-5 h-5",
                  biometric.status === "complete" ? "text-success" :
                  biometric.status === "capturing" ? "text-warning" :
                  biometric.status === "error" ? "text-destructive" : "text-muted-foreground"
                )} />
                <div>
                  <p className="text-sm font-medium">{biometric.name}</p>
                  {biometric.quality && (
                    <p className="text-xs text-muted-foreground">Quality: {biometric.quality}%</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(biometric.status)}
                {getStatusBadge(biometric.status, biometric.quality)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}