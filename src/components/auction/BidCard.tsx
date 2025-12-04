import { Link } from "react-router-dom"
import { Clock, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BidCardProps {
    id: string
    title: string
    image: string
    currentBid: number
    timeLeft: string
    bids: number
}

export function BidCard({ id, title, image, currentBid, timeLeft, bids }: BidCardProps) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute right-2 top-2 bg-black/50 hover:bg-black/70">
                    <Clock className="mr-1 h-3 w-3" />
                    {timeLeft}
                </Badge>
            </div>
            <CardHeader className="p-4">
                <div className="flex items-start justify-between">
                    <h3 className="line-clamp-1 text-lg font-semibold hover:underline">
                        <Link to={`/auction/${id}`}>{title}</Link>
                    </h3>
                    <Button variant="ghost" size="icon" className="-mr-2 -mt-2 h-8 w-8 text-muted-foreground">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">Current Bid</p>
                        <p className="text-xl font-bold text-primary">${currentBid.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground">{bids} bids</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                    <Link to={`/auction/${id}`}>Place Bid</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
