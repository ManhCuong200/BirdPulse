import { Link } from "react-router-dom"
import { Clock, Heart, Gavel } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { Auction } from "@/types"

interface AuctionCardProps {
    auction: Auction
}

export function AuctionCard({ auction }: AuctionCardProps) {
    return (
        <Card className="group overflow-hidden border-0 bg-card shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={auction.image}
                    alt={auction.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-10">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors shadow-sm">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
                <div className="absolute bottom-3 left-3 z-10">
                    <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm border-0 hover:bg-black/70">
                        <Clock className="mr-1 h-3 w-3" /> {auction.timeLeft}
                    </Badge>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={`/auction/${auction.id}`}>
                        <Button variant="secondary" className="font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Auction
                        </Button>
                    </Link>
                </div>
            </div>

            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2 text-xs font-normal text-muted-foreground border-slate-200">
                        {auction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{auction.bids} bids</span>
                </div>
                <h3 className="line-clamp-1 text-lg font-semibold group-hover:text-primary transition-colors">
                    <Link to={`/auction/${auction.id}`}>
                        {auction.title}
                    </Link>
                </h3>
            </CardHeader>

            <CardContent className="p-4 pt-0">
                <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">Current Bid:</span>
                    <span className="text-xl font-bold text-foreground">${auction.currentBid.toLocaleString()}</span>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Link to={`/auction/${auction.id}`} className="w-full">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Place Bid <Gavel className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
