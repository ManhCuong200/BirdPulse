import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ActiveBidsListProps {
    bids: Array<{
        id: string
        title: string
        bidAmount: number
        status: string
        endTime: string
    }>
}

export function ActiveBidsList({ bids }: ActiveBidsListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Active Bids</CardTitle>
                <CardDescription>Auctions you are currently participating in.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {bids.map((bid) => (
                        <div key={bid.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <h4 className="font-semibold">{bid.title}</h4>
                                <p className="text-sm text-muted-foreground">Ends in: {bid.endTime}</p>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">${bid.bidAmount.toLocaleString()}</div>
                                <Badge variant={bid.status === "Winning" ? "default" : "destructive"}>
                                    {bid.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
