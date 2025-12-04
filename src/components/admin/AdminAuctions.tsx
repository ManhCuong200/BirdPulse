import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Trash2, Ban, CheckCircle } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MOCK_ALL_AUCTIONS = [
    {
        id: "1",
        title: "Vintage Rolex Submariner",
        seller: "John Doe",
        status: "Active",
        currentBid: 12500,
        bids: 14,
        endTime: "2h 15m"
    },
    {
        id: "2",
        title: "Eames Lounge Chair Original",
        seller: "Jane Smith",
        status: "Active",
        currentBid: 4200,
        bids: 8,
        endTime: "4h 30m"
    },
    {
        id: "3",
        title: "Suspicious Item #99",
        seller: "Unknown User",
        status: "Flagged",
        currentBid: 100,
        bids: 1,
        endTime: "1d 12h"
    },
    {
        id: "4",
        title: "Completed Auction Item",
        seller: "Alice Cooper",
        status: "Ended",
        currentBid: 5600,
        bids: 22,
        endTime: "Ended"
    }
]

export function AdminAuctions() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Manage Auctions</h3>
                <Button>Export Data</Button>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Seller</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Current Bid</TableHead>
                            <TableHead>Bids</TableHead>
                            <TableHead>End Time</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {MOCK_ALL_AUCTIONS.map((auction) => (
                            <TableRow key={auction.id}>
                                <TableCell className="font-medium">{auction.title}</TableCell>
                                <TableCell>{auction.seller}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        auction.status === "Active" ? "default" :
                                            auction.status === "Flagged" ? "destructive" :
                                                "secondary"
                                    }>
                                        {auction.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>${auction.currentBid.toLocaleString()}</TableCell>
                                <TableCell>{auction.bids}</TableCell>
                                <TableCell>{auction.endTime}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Open menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Contact Seller</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-green-600">
                                                <CheckCircle className="mr-2 h-4 w-4" /> Approve
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-orange-600">
                                                <Ban className="mr-2 h-4 w-4" /> Suspend
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
