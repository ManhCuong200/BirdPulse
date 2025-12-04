import { useState, useEffect } from "react"
import { PageContainer } from "@/components/shared/PageContainer"
import { ProductDetails } from "@/components/auction/ProductDetails"
import { BiddingInterface } from "@/components/auction/BiddingInterface"
import { BidActivity } from "@/types"
import { toast } from "sonner"

export function AuctionRoom() {
    const [bidAmount, setBidAmount] = useState<string>("")
    const [currentBid, setCurrentBid] = useState(12500)
    const [isOutbid, setIsOutbid] = useState(false)
    const [activityLog, setActivityLog] = useState<BidActivity[]>([
        { user: "User882", amount: 12500, type: "bid", timestamp: new Date(Date.now() - 1000 * 60 * 5) },
        { user: "WatchGuy", amount: 12400, type: "bid", timestamp: new Date(Date.now() - 1000 * 60 * 15) },
    ])

    const auctionData = {
        title: "Vintage Rolex Submariner",
        description: "An exceptional example of the classic Rolex Submariner Reference 5513. This watch features the original matte dial with tritium hour markers that have aged to a beautiful creamy patina. The case remains sharp with original bevels present.",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80",
        endTime: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours from now
        seller: "VintageTimeCo",
        condition: "Excellent",
        authenticity: "Verified"
    }

    const handlePlaceBid = () => {
        const amount = parseInt(bidAmount)
        if (!amount || isNaN(amount)) {
            toast.error("Please enter a valid amount")
            return
        }

        if (amount <= currentBid) {
            toast.error("Bid must be higher than current price")
            return
        }

        setCurrentBid(amount)
        setActivityLog([{ user: "You", amount, type: "bid", timestamp: new Date() }, ...activityLog])
        setBidAmount("")
        setIsOutbid(false)
        toast.success("Bid placed successfully!")
    }

    const handleQuickBid = (amount: number) => {
        setBidAmount((currentBid + amount).toString())
    }

    const handleQuickBidAction = () => {
        const nextBid = currentBid + 100
        setCurrentBid(nextBid)
        setActivityLog([{ user: "You", amount: nextBid, type: "bid", timestamp: new Date() }, ...activityLog])
        setIsOutbid(false)
        toast.success("Quick bid placed!")
    }

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.8) {
                const newBid = currentBid + Math.floor(Math.random() * 500) + 50
                setCurrentBid(newBid)
                setActivityLog(prev => [{
                    user: `User${Math.floor(Math.random() * 1000)}`,
                    amount: newBid,
                    type: "bid",
                    timestamp: new Date()
                }, ...prev])
                setIsOutbid(true)
                toast("New bid placed!", {
                    description: `Someone just bid $${newBid.toLocaleString()}`
                })
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [currentBid])

    return (
        <PageContainer className="animate-fade-in-up">
            <div className="grid gap-8 lg:grid-cols-3">
                <ProductDetails {...auctionData} />
                <BiddingInterface
                    currentBid={currentBid}
                    bidAmount={bidAmount}
                    onBidAmountChange={setBidAmount}
                    onPlaceBid={handlePlaceBid}
                    onQuickBid={handleQuickBid}
                    isOutbid={isOutbid}
                    onQuickBidAction={handleQuickBidAction}
                    activityLog={activityLog}
                />
            </div>
        </PageContainer>
    )
}
