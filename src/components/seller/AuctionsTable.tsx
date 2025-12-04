import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

import { Auction } from "@/types"

interface AuctionsTableProps {
    auctions: Auction[]
    onCreateNew: () => void
    onEdit: (id: string) => void
    onDelete: (id: string) => void
}

export function AuctionsTable({ auctions, onCreateNew, onEdit, onDelete }: AuctionsTableProps) {
    return (
        <div className="px-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Manage Auctions</h2>
                <Button onClick={onCreateNew}>Create New</Button>
            </div>

            {auctions.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-muted/10">
                    <p className="text-muted-foreground mb-4">No auctions found.</p>
                    <Button onClick={onCreateNew}>Create your first auction</Button>
                </div>
            ) : (
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Current Bid</TableHead>
                                <TableHead>Bids</TableHead>
                                <TableHead>End Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {auctions.map((auction) => (
                                <TableRow key={auction.id}>
                                    <TableCell className="font-medium">{auction.title}</TableCell>
                                    <TableCell>
                                        <Badge variant={auction.status === "Active" ? "default" : "secondary"}>
                                            {auction.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>${auction.currentBid.toLocaleString()}</TableCell>
                                    <TableCell>{auction.bids}</TableCell>
                                    <TableCell>{auction.endDate}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => onEdit(auction.id)}>Edit details</DropdownMenuItem>
                                                <DropdownMenuItem>View bids</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive" onClick={() => onDelete(auction.id)}>End auction</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    )
}
