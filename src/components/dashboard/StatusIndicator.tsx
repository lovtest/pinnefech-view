import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "offline" | "warning" | "maintenance";
  label: string;
  description?: string;
  className?: string;
}

export default function StatusIndicator({ 
  status, 
  label, 
  description,
  className 
}: StatusIndicatorProps) {
  const statusConfig = {
    online: {
      color: "bg-success",
      textColor: "text-success",
      bgColor: "bg-success-light"
    },
    offline: {
      color: "bg-destructive",
      textColor: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    warning: {
      color: "bg-warning",
      textColor: "text-warning",
      bgColor: "bg-warning-light"
    },
    maintenance: {
      color: "bg-info",
      textColor: "text-info",
      bgColor: "bg-info-light"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={cn(
      "flex items-center gap-3 p-3 rounded-lg",
      config.bgColor,
      className
    )}>
      <div className={cn("w-3 h-3 rounded-full", config.color)}></div>
      <div className="flex-1">
        <p className={cn("text-sm font-medium", config.textColor)}>{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}