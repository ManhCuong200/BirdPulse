import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function NotificationSettings() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <div className="text-sm text-muted-foreground">
                            Receive emails about your account activity.
                        </div>
                    </div>
                    <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base">Bid Alerts</Label>
                        <div className="text-sm text-muted-foreground">
                            Get notified when you are outbid.
                        </div>
                    </div>
                    <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base">Auction Endings</Label>
                        <div className="text-sm text-muted-foreground">
                            Get notified when watched auctions are ending.
                        </div>
                    </div>
                    <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base">Marketing Emails</Label>
                        <div className="text-sm text-muted-foreground">
                            Receive emails about new features and promotions.
                        </div>
                    </div>
                    <Switch />
                </div>
            </CardContent>
        </Card>
    )
}
