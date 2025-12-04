import { AuctionCard } from "@/components/auction/AuctionCard"

import { Auction } from "@/types"

interface AuctionGridProps {
    auctions: Auction[]
}

export function AuctionGrid({ auctions }: AuctionGridProps) {
    if (auctions.length === 0) {
        return (
            <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed">
                <div className="text-center">
                    <h3 className="text-lg font-semibold">No auctions found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {auctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
            ))}
        </div>
    )
}
