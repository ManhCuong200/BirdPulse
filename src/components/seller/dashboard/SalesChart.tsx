import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SalesChart() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    Chart Placeholder (Recharts or similar library would go here)
                </div>
            </CardContent>
        </Card>
    )
}
