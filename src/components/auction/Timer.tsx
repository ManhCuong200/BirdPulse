import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TimerProps {
    endTime: Date
    className?: string
}

export function Timer({ endTime, className }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState<string>("")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const diff = endTime.getTime() - now.getTime()

            if (diff <= 0) {
                setTimeLeft("Ended")
                clearInterval(interval)
                return
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diff % (1000 * 60)) / 1000)

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        }, 1000)

        return () => clearInterval(interval)
    }, [endTime])

    return (
        <div className={cn("font-mono text-lg font-bold tabular-nums", className)}>
            {timeLeft}
        </div>
    )
}
