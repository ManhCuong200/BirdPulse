import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { AuctionCard } from "@/components/auction/AuctionCard"
import { PageContainer } from "@/components/shared/PageContainer"

import { Auction } from "@/types"

interface FeaturedAuctionsProps {
    auctions: Auction[]
}

export function FeaturedAuctions({ auctions }: FeaturedAuctionsProps) {
    return (
        <section className="w-full py-12 md:py-24 bg-secondary/30">
            <PageContainer>
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Featured Auctions</h2>
                        <p className="text-muted-foreground mt-1">Curated items ending soon</p>
                    </div>
                    <Button variant="outline" className="group" asChild>
                        <Link to="/auctions">
                            View All
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {auctions.map((auction, index) => (
                        <div key={auction.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <AuctionCard auction={auction} />
                        </div>
                    ))}
                </div>
            </PageContainer>
        </section>
    )
}
