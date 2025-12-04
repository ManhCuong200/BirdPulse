import { SellersTable } from "@/components/admin/SellersTable"
import { Seller } from "@/types"
import { useState, useEffect } from "react"

export function SellerList() {
    const [sellers, setSellers] = useState<Seller[]>([])

    useEffect(() => {
        // Mock API
        setSellers([
            {
                id: "1",
                name: "John Doe",
                email: "john@example.com",
                status: "Verified",
                auctions: 12,
                rating: 4.8,
            },
            {
                id: "2",
                name: "Jane Smith",
                email: "jane@example.com",
                status: "Pending",
                auctions: 0,
                rating: "-",
            },
            {
                id: "3",
                name: "Bob Wilson",
                email: "bob@example.com",
                status: "Verified",
                auctions: 45,
                rating: 4.9,
            },
        ])
    }, [])

    const handleVerify = (id: string) => {
        console.log("Verify", id)
    }

    const handleBan = (id: string) => {
        console.log("Ban", id)
    }

    return <SellersTable sellers={sellers} onVerify={handleVerify} onBan={handleBan} />
}
