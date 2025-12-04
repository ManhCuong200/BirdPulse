import { ProfileView } from "@/components/bidder/ProfileView"
import { useState } from "react"

export function ProfilePage() {
    const [user] = useState({
        name: "John Doe",
        email: "john@example.com",
        avatar: "/avatars/01.png",
        role: "bidder"
    })

    const [myBids] = useState([
        {
            id: "1",
            title: "Vintage Rolex Submariner",
            bidAmount: 12500,
            status: "Winning",
            endTime: "2h 15m"
        },
        {
            id: "2",
            title: "Modern Art Collection",
            bidAmount: 3400,
            status: "Outbid",
            endTime: "5h 30m"
        }
    ])

    return <ProfileView user={user} myBids={myBids} />
}
