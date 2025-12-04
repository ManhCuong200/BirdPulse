export interface Auction {
    id: string
    title: string
    image: string
    currentBid: number
    timeLeft: string
    bids: number
    category?: string
    description?: string
    seller?: string
    condition?: string
    authenticity?: string
    endTime?: Date
    status?: string
    endDate?: string
}

export interface BidActivity {
    user: string
    amount: number
    type: "bid" | "outbid" | "win"
    timestamp?: Date
}

export interface Seller {
    id: string
    name: string
    email: string
    status: string
    auctions: number
    rating: string | number
}
