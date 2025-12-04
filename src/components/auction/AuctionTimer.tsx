import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface AuctionTimerProps {
    endDate: Date
    className?: string
}

export function AuctionTimer({ endDate, className }: AuctionTimerProps) {
    const [timeLeft, setTimeLeft] = useState<string>("")
    const [isUrgent, setIsUrgent] = useState(false)

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +endDate - +new Date()

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((difference / 1000 / 60) % 60)
                const seconds = Math.floor((difference / 1000) % 60)

                setIsUrgent(difference < 1000 * 60 * 5) // Less than 5 minutes

                if (days > 0) return `${days}d ${hours}h`
                if (hours > 0) return `${hours}h ${minutes}m`
                return `${minutes}m ${seconds}s`
            }
            return "Ended"
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        setTimeLeft(calculateTimeLeft())

        return () => clearInterval(timer)
    }, [endDate])

    return (
        <div className={cn("flex items-center font-mono text-sm font-medium", isUrgent ? "text-destructive animate-pulse" : "text-muted-foreground", className)}>
            <Clock className="mr-2 h-4 w-4" />
            <span>{timeLeft}</span>
        </div>
    )
}
