import { Timer } from "@/components/auction/Timer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle2, Send } from "lucide-react"

export interface BidActivity {
    user: string
    amount: number
    type: "bid"
}

interface AuctionRoomViewProps {
    auction: {
        title: string
        description: string
        image: string
        endTime: Date
        currentBid: number
        minBid: number
        reserveMet: boolean
    }
    bidAmount: string
    onBidAmountChange: (amount: string) => void
    onPlaceBid: () => void
    activityLog: BidActivity[]
}

export function AuctionRoomView({
    auction,
    bidAmount,
    onBidAmountChange,
    onPlaceBid,
    activityLog
}: AuctionRoomViewProps) {
    return (
        <div className="container py-8">
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column: Image & Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
                        <img
                            src={auction.image}
                            alt={auction.title}
                            className="h-[400px] w-full object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-bold">{auction.title}</h1>
                                <p className="text-muted-foreground">Ref. 5513 - Circa 1970</p>
                            </div>
                            <Badge variant="secondary" className="text-lg px-4 py-1">
                                <Timer endTime={auction.endTime} />
                            </Badge>
                        </div>

                        <Separator />

                        <div className="prose max-w-none dark:prose-invert">
                            <h3>Description</h3>
                            <p>{auction.description}</p>
                            <h3>Condition Report</h3>
                            <ul>
                                <li>Dial: Excellent original condition</li>
                                <li>Case: Sharp lugs, minor scratches consistent with age</li>
                                <li>Movement: Serviced in 2023, running within COSC specs</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column: Bidding & Chat */}
                <div className="space-y-6">
                    <Card className="border-2 border-primary/10">
                        <CardHeader>
                            <CardTitle>Current Bid</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center">
                                <span className="text-4xl font-bold text-primary">${auction.currentBid.toLocaleString()}</span>
                                {auction.reserveMet && <p className="text-sm text-muted-foreground">Reserve Met</p>}
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Minimum Bid</span>
                                    <span>${auction.minBid.toLocaleString()}</span>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="outline" className="flex-1" onClick={() => onBidAmountChange(auction.minBid.toString())}>
                                        + $100
                                    </Button>
                                    <Button variant="outline" className="flex-1" onClick={() => onBidAmountChange((auction.minBid + 400).toString())}>
                                        + $500
                                    </Button>
                                    <Button variant="outline" className="flex-1" onClick={() => onBidAmountChange((auction.minBid + 900).toString())}>
                                        + $1k
                                    </Button>
                                </div>
                                <div className="flex space-x-2">
                                    <Input
                                        type="number"
                                        placeholder="Custom amount"
                                        value={bidAmount}
                                        onChange={(e) => onBidAmountChange(e.target.value)}
                                    />
                                    <Button className="w-24" onClick={onPlaceBid}>Bid</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-[400px] flex flex-col">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium">Live Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto space-y-4">
                            {activityLog.map((log, i) => (
                                <div key={i} className="flex items-center space-x-2 text-sm">
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">New Bid</Badge>
                                    <span className="font-semibold">{log.user}</span>
                                    <span className="text-muted-foreground">bid ${log.amount.toLocaleString()}</span>
                                </div>
                            ))}
                            <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">Reserve price met</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                                <span className="text-muted-foreground">2 hours left</span>
                            </div>
                        </CardContent>
                        <div className="p-4 border-t mt-auto">
                            <form className="flex space-x-2">
                                <Input placeholder="Ask a question..." className="flex-1" />
                                <Button size="icon" type="submit">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
