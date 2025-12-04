import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { BidActivity } from "@/types"

interface RealTimeBidFeedProps {
    activities: BidActivity[]
}

export function RealTimeBidFeed({ activities }: RealTimeBidFeedProps) {
    return (
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 animate-in slide-in-from-top-2 duration-300">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`} />
                            <AvatarFallback>{activity.user.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {activity.user}
                                <span className="ml-2 text-muted-foreground font-normal">
                                    placed a bid of
                                </span>
                                <span className="ml-1 font-bold text-primary">
                                    ${activity.amount.toLocaleString()}
                                </span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {activity.timestamp ? activity.timestamp.toLocaleTimeString() : "Just now"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}
