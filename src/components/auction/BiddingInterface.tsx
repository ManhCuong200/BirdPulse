import { RealTimePrice } from "@/components/realtime/RealTimePrice"
import { RealTimeBidFeed } from "@/components/realtime/RealTimeBidFeed"
import { BidActivity } from "@/types"
import { OutbidNotification } from "@/components/realtime/OutbidNotification"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BiddingInterfaceProps {
    currentBid: number
    bidAmount: string
    onBidAmountChange: (amount: string) => void
    onPlaceBid: () => void
    onQuickBid: (amount: number) => void
    isOutbid: boolean
    onQuickBidAction: () => void
    activityLog: BidActivity[]
}

export function BiddingInterface({
    currentBid,
    bidAmount,
    onBidAmountChange,
    onPlaceBid,
    onQuickBid,
    isOutbid,
    onQuickBidAction,
    activityLog
}: BiddingInterfaceProps) {
    return (
        <div className="space-y-6">
            {isOutbid && (
                <OutbidNotification
                    currentBid={currentBid}
                    onQuickBid={onQuickBidAction}
                />
            )}

            <Card className="border-2 border-primary/10 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Current Price</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <RealTimePrice price={currentBid} className="text-5xl font-black tracking-tight" />

                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                <Input
                                    type="number"
                                    placeholder={`Min ${(currentBid + 1).toLocaleString()}`}
                                    value={bidAmount}
                                    onChange={(e) => onBidAmountChange(e.target.value)}
                                    className="pl-6 text-lg h-12"
                                />
                            </div>
                            <Button size="lg" onClick={onPlaceBid} className="h-12 px-8 font-semibold shadow-lg shadow-primary/20">
                                Place Bid
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors" onClick={() => onQuickBid(100)}>
                                +$100
                            </Button>
                            <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors" onClick={() => onQuickBid(500)}>
                                +$500
                            </Button>
                            <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors" onClick={() => onQuickBid(1000)}>
                                +$1k
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        Live Activity
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <RealTimeBidFeed activities={activityLog} />
                </CardContent>
            </Card>
        </div>
    )
}
