import { AdminSettings } from "@/components/admin/AdminSettings"
import { PageContainer } from "@/components/shared/PageContainer"

export function AdminSettingsPage() {
    return (
        <PageContainer>
            <div className="flex items-center justify-between space-y-2 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Platform Settings</h2>
            </div>
            <AdminSettings />
        </PageContainer>
    )
}
