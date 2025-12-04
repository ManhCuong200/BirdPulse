import { AuctionsTable } from "@/components/seller/AuctionsTable"
import { Auction } from "@/types"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function ManageAuctions() {
    const [auctions, setAuctions] = useState<Auction[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        // Mock API
        setAuctions([
            {
                id: "1",
                title: "Vintage Rolex Submariner",
                status: "Active",
                currentBid: 12500,
                bids: 45,
                endDate: "2024-06-15",
                image: "/placeholder.jpg",
                timeLeft: "2 days"
            },
            {
                id: "2",
                title: "Modern Art Collection",
                status: "Active",
                currentBid: 3400,
                bids: 12,
                endDate: "2024-06-16",
                image: "/placeholder.jpg",
                timeLeft: "3 days"
            },
            {
                id: "3",
                title: "Rare Gibson Les Paul",
                status: "Draft",
                currentBid: 0,
                bids: 0,
                endDate: "-",
                image: "/placeholder.jpg",
                timeLeft: "-"
            },
        ])
    }, [])

    const handleCreateNew = () => {
        navigate("/seller/create-auction")
    }

    const handleEdit = (id: string) => {
        console.log("Edit", id)
    }

    const handleDelete = (id: string) => {
        console.log("Delete", id)
    }

    return <AuctionsTable auctions={auctions} onCreateNew={handleCreateNew} onEdit={handleEdit} onDelete={handleDelete} />
}
