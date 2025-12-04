import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSidebar } from "@/components/bidder/ProfileSidebar"
import { ActiveBidsList } from "@/components/bidder/ActiveBidsList"
import { ProfileSettings } from "@/components/settings/ProfileSettings"
import { SecuritySettings } from "@/components/settings/SecuritySettings"
import { NotificationSettings } from "@/components/settings/NotificationSettings"
import { AppearanceSettings } from "@/components/settings/AppearanceSettings"
import { useState } from "react"
import { User, Shield, Bell, Palette } from "lucide-react"

interface ProfileViewProps {
    user: {
        name: string
        email: string
        avatar: string
        role: string
    }
    myBids: Array<{
        id: string
        title: string
        bidAmount: number
        status: string
        endTime: string
    }>
}

export function ProfileView({ user, myBids }: ProfileViewProps) {
    const [activeTab, setActiveTab] = useState("bids")

    return (
        <div className="container py-10">
            <div className="flex flex-col gap-8 md:flex-row">
                <ProfileSidebar user={user} onEditProfile={() => setActiveTab("settings")} />

                <div className="flex-1">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="bids">My Bids</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>

                        <TabsContent value="bids" className="space-y-4">
                            <ActiveBidsList bids={myBids} />
                        </TabsContent>

                        <TabsContent value="settings">
                            <Tabs defaultValue="profile" className="w-full">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <aside className="md:w-1/4">
                                        <TabsList className="flex flex-col h-auto items-stretch bg-transparent p-0 gap-2">
                                            <TabsTrigger value="profile" className="justify-start data-[state=active]:bg-muted">
                                                <User className="mr-2 h-4 w-4" />
                                                Profile
                                            </TabsTrigger>
                                            <TabsTrigger value="security" className="justify-start data-[state=active]:bg-muted">
                                                <Shield className="mr-2 h-4 w-4" />
                                                Security
                                            </TabsTrigger>
                                            <TabsTrigger value="notifications" className="justify-start data-[state=active]:bg-muted">
                                                <Bell className="mr-2 h-4 w-4" />
                                                Notifications
                                            </TabsTrigger>
                                            <TabsTrigger value="appearance" className="justify-start data-[state=active]:bg-muted">
                                                <Palette className="mr-2 h-4 w-4" />
                                                Appearance
                                            </TabsTrigger>
                                        </TabsList>
                                    </aside>
                                    <div className="flex-1">
                                        <TabsContent value="profile" className="mt-0">
                                            <ProfileSettings user={user} />
                                        </TabsContent>
                                        <TabsContent value="security" className="mt-0">
                                            <SecuritySettings />
                                        </TabsContent>
                                        <TabsContent value="notifications" className="mt-0">
                                            <NotificationSettings />
                                        </TabsContent>
                                        <TabsContent value="appearance" className="mt-0">
                                            <AppearanceSettings />
                                        </TabsContent>
                                    </div>
                                </div>
                            </Tabs>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
