import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell, CheckCircle2, AlertCircle } from "lucide-react"

interface Notification {
    id: string
    title: string
    message: string
    type: "info" | "success" | "warning"
    time: string
}

interface NotificationListProps {
    notifications: Notification[]
}

export function NotificationList({ notifications }: NotificationListProps) {
    return (
        <div className="space-y-4">
            {notifications.map((notification) => (
                <Alert key={notification.id} className="bg-card">
                    {notification.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : notification.type === "warning" ? (
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                    ) : (
                        <Bell className="h-4 w-4 text-blue-500" />
                    )}
                    <AlertTitle className="flex items-center justify-between">
                        {notification.title}
                        <span className="text-xs text-muted-foreground font-normal">{notification.time}</span>
                    </AlertTitle>
                    <AlertDescription>
                        {notification.message}
                    </AlertDescription>
                </Alert>
            ))}
        </div>
    )
}
