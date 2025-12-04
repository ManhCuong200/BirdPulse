import { useState, useEffect } from "react"
import { PageContainer } from "@/components/shared/PageContainer"
import { DashboardMetrics } from "@/components/seller/dashboard/DashboardMetrics"
import { SalesChart } from "@/components/seller/dashboard/SalesChart"
import { RecentActivity } from "@/components/seller/dashboard/RecentActivity"

export function SellerDashboard() {
    const [stats, setStats] = useState({
        revenue: 0,
        activeAuctions: 0,
        itemsSold: 0,
        activeBidders: 0
    })

    useEffect(() => {
        // Mock API
        setStats({
            revenue: 45231.89,
            activeAuctions: 12,
            itemsSold: 573,
            activeBidders: 243
        })
    }, [])

    return (
        <PageContainer>
            <div className="flex items-center justify-between space-y-2 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="space-y-4">
                <DashboardMetrics stats={stats} />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <SalesChart />
                    <RecentActivity />
                </div>
            </div>
        </PageContainer>
    )
}
