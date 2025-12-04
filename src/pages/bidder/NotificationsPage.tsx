import { PageContainer } from "@/components/shared/PageContainer"
import { NotificationList } from "@/components/notifications/NotificationList"

export function NotificationsPage() {
    const notifications = [
        {
            id: "1",
            title: "Auction Won!",
            message: "Congratulations! You have won the auction for 'Vintage Rolex Submariner'.",
            type: "success" as const,
            time: "2 mins ago"
        },
        {
            id: "2",
            title: "Outbid Alert",
            message: "You have been outbid on 'Modern Art Collection'. Place a new bid now!",
            type: "warning" as const,
            time: "1 hour ago"
        },
        {
            id: "3",
            title: "New Feature Available",
            message: "Check out our new 'Auto-Bid' feature to never miss a deal.",
            type: "info" as const,
            time: "1 day ago"
        }
    ]

    return (
        <PageContainer>
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                <p className="text-muted-foreground mt-2">Stay updated with your auction activities.</p>
            </div>
            <NotificationList notifications={notifications} />
        </PageContainer>
    )
}
