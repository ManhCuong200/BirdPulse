import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function AdminSettings() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure general platform settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="platformName">Platform Name</Label>
                        <Input id="platformName" defaultValue="BidPulse" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="supportEmail">Support Email</Label>
                        <Input id="supportEmail" defaultValue="support@bidpulse.com" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Auction Configuration</CardTitle>
                    <CardDescription>Manage global auction rules and limits.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Enable New Auctions</Label>
                            <p className="text-sm text-muted-foreground">Allow sellers to create new auctions.</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Auto-Approve Listings</Label>
                            <p className="text-sm text-muted-foreground">Automatically approve new listings without review.</p>
                        </div>
                        <Switch />
                    </div>
                    <Separator />
                    <div className="grid gap-2">
                        <Label htmlFor="commissionRate">Platform Commission Rate (%)</Label>
                        <Input id="commissionRate" type="number" defaultValue="5" className="max-w-[100px]" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Platform security settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Maintenance Mode</Label>
                            <p className="text-sm text-muted-foreground">Disable platform access for maintenance.</p>
                        </div>
                        <Switch />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button>Save Changes</Button>
            </div>
        </div>
    )
}
