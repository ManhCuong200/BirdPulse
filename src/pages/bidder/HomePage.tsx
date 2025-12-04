import { HomeHero } from "@/components/home/HomeHero"
import { FeaturedAuctions } from "@/components/home/FeaturedAuctions"

export function HomePage() {
    const featuredAuctions = [
        {
            id: "1",
            title: "Vintage Rolex Submariner",
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
            currentBid: 12500,
            timeLeft: "2h 15m",
            bids: 14
        },
        {
            id: "2",
            title: "Eames Lounge Chair Original",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
            currentBid: 4200,
            timeLeft: "4h 30m",
            bids: 8
        },
        {
            id: "3",
            title: "1960s Fender Stratocaster",
            image: "https://images.unsplash.com/photo-1550985543-f4423c8d361e?w=800&q=80",
            currentBid: 8900,
            timeLeft: "1d 12h",
            bids: 23
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <HomeHero />
            <FeaturedAuctions auctions={featuredAuctions} />
        </div>
    )
}
