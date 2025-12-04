import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OutbidNotificationProps {
    onQuickBid: () => void
    currentBid: number
}

export function OutbidNotification({ onQuickBid, currentBid }: OutbidNotificationProps) {
    return (
        <Alert variant="destructive" className="animate-in slide-in-from-top-5 duration-500 shadow-lg border-destructive/50 bg-destructive/10">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>You've been outbid!</AlertTitle>
            <AlertDescription className="flex items-center justify-between mt-2">
                <span>Current highest bid is ${currentBid.toLocaleString()}</span>
                <Button variant="destructive" size="sm" onClick={onQuickBid}>
                    Bid ${(currentBid + 100).toLocaleString()}
                </Button>
            </AlertDescription>
        </Alert>
    )
}
