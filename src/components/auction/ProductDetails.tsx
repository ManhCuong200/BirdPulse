import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Eye, Share2, Shield } from "lucide-react"
import { AuctionTimer } from "@/components/auction/AuctionTimer"

interface ProductDetailsProps {
    title: string
    description: string
    image: string
    endTime: Date
    seller: string
    condition: string
    authenticity: string
}

export function ProductDetails({
    title,
    description,
    image,
    endTime,
    seller,
    condition,
    authenticity
}: ProductDetailsProps) {
    return (
        <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted shadow-sm group">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">24 watching</span>
                    </div>
                    <div className="bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border shadow-sm">
                        <AuctionTimer endDate={endTime} />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                        <Button variant="ghost" size="icon">
                            <Share2 className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="font-medium text-foreground">{seller}</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <Badge variant="secondary">{condition}</Badge>
                        <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50 dark:bg-green-950/20">{authenticity}</Badge>
                    </div>
                </div>

                <Separator />

                <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
