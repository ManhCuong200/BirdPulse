import { useState, useEffect } from "react"
import { PageContainer } from "@/components/shared/PageContainer"
import { AdminMetrics } from "@/components/admin/dashboard/AdminMetrics"
import { SystemOverview } from "@/components/admin/dashboard/SystemOverview"

export function AdminDashboard() {
    const [stats, setStats] = useState({
        revenue: 0,
        activeUsers: 0,
        sales: 0,
        activeNow: 0
    })

    useEffect(() => {
        // Mock API
        setStats({
            revenue: 145231.89,
            activeUsers: 2350,
            sales: 12234,
            activeNow: 573
        })
    }, [])

    return (
        <PageContainer>
            <div className="flex items-center justify-between space-y-2 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
            </div>
            <div className="space-y-4">
                <AdminMetrics stats={stats} />
                <SystemOverview />
            </div>
        </PageContainer>
    )
}
