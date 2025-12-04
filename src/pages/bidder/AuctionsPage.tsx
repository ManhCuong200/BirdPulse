import { useState, useEffect } from "react"
import { PageContainer } from "@/components/shared/PageContainer"
import { AuctionsView } from "@/components/auction/AuctionsView"
import { Auction } from "@/types"

// Mock Data Service
const MOCK_AUCTIONS: Auction[] = [
    {
        id: "1",
        title: "Vintage Rolex Submariner",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        currentBid: 12500,
        timeLeft: "2h 15m",
        bids: 14,
        category: "Watches"
    },
    {
        id: "2",
        title: "Eames Lounge Chair Original",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
        currentBid: 4200,
        timeLeft: "4h 30m",
        bids: 8,
        category: "Furniture"
    },
    {
        id: "3",
        title: "1960s Fender Stratocaster",
        image: "https://images.unsplash.com/photo-1550985543-f4423c8d361e?w=800&q=80",
        currentBid: 8900,
        timeLeft: "1d 12h",
        bids: 23,
        category: "Music"
    },
    {
        id: "4",
        title: "Abstract Oil Painting",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?w=800&q=80",
        currentBid: 1500,
        timeLeft: "5h 45m",
        bids: 5,
        category: "Art"
    },
    {
        id: "5",
        title: "Rare First Edition Book",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
        currentBid: 3200,
        timeLeft: "3d 10h",
        bids: 12,
        category: "Collectibles"
    },
    {
        id: "6",
        title: "Diamond Tennis Bracelet",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        currentBid: 5600,
        timeLeft: "12h 20m",
        bids: 18,
        category: "Jewelry"
    }
]

const CATEGORIES = ["Watches", "Art", "Jewelry", "Furniture", "Collectibles", "Music"]
const CONDITIONS = ["New", "Excellent", "Good", "Fair"]

export function AuctionsPage() {
    // State for filters
    const [priceRange, setPriceRange] = useState([0, 50000])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedConditions, setSelectedConditions] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState("")

    // State for data
    const [auctions, setAuctions] = useState<Auction[]>(MOCK_AUCTIONS)

    // Logic: Filter auctions when state changes
    useEffect(() => {
        const filtered = MOCK_AUCTIONS.filter(auction => {
            const matchesSearch = auction.title.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesPrice = auction.currentBid >= priceRange[0] && auction.currentBid <= priceRange[1]
            const matchesCategory = selectedCategories.length === 0 || (auction.category && selectedCategories.includes(auction.category))
            // Note: Mock data doesn't have condition, assuming all match for now or adding condition to mock data

            return matchesSearch && matchesPrice && matchesCategory
        })
        setAuctions(filtered)
    }, [searchQuery, priceRange, selectedCategories, selectedConditions])

    // Handlers
    const handleCategoryChange = (category: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, category])
        } else {
            setSelectedCategories(selectedCategories.filter(c => c !== category))
        }
    }

    const handleConditionChange = (condition: string, checked: boolean) => {
        if (checked) {
            setSelectedConditions([...selectedConditions, condition])
        } else {
            setSelectedConditions(selectedConditions.filter(c => c !== condition))
        }
    }

    return (
        <PageContainer className="animate-fade-in-up">
            <AuctionsView
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                categories={CATEGORIES}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                conditions={CONDITIONS}
                selectedConditions={selectedConditions}
                onConditionChange={handleConditionChange}
                auctions={auctions}
            />
        </PageContainer>
    )
}
