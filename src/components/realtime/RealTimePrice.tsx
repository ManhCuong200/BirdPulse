import { useEffect, useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface RealTimePriceProps {
    price: number
    className?: string
}

export function RealTimePrice({ price, className }: RealTimePriceProps) {
    const [prevPrice, setPrevPrice] = useState(price)
    const [direction, setDirection] = useState<"up" | "down" | null>(null)

    useEffect(() => {
        if (price > prevPrice) {
            setDirection("up")
        } else if (price < prevPrice) {
            setDirection("down")
        }

        const timer = setTimeout(() => setDirection(null), 2000)
        setPrevPrice(price)

        return () => clearTimeout(timer)
    }, [price, prevPrice])

    return (
        <div className={cn("flex items-center", className)}>
            <span className={cn(
                "text-4xl font-bold transition-colors duration-300",
                direction === "up" && "text-green-600",
                direction === "down" && "text-red-600"
            )}>
                ${price.toLocaleString()}
            </span>
            {direction === "up" && <ArrowUp className="ml-2 h-6 w-6 text-green-600 animate-bounce" />}
            {direction === "down" && <ArrowDown className="ml-2 h-6 w-6 text-red-600 animate-bounce" />}
        </div>
    )
}
