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

import { Seller } from "@/types"

interface SellersTableProps {
    sellers: Seller[]
    onVerify: (id: string) => void
    onBan: (id: string) => void
}

export function SellersTable({ sellers, onVerify, onBan }: SellersTableProps) {
    return (
        <div className="px-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Seller Management</h2>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Auctions</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sellers.map((seller) => (
                            <TableRow key={seller.id}>
                                <TableCell className="font-medium">{seller.name}</TableCell>
                                <TableCell>{seller.email}</TableCell>
                                <TableCell>
                                    <Badge variant={seller.status === "Verified" ? "default" : "secondary"}>
                                        {seller.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{seller.auctions}</TableCell>
                                <TableCell>{seller.rating}</TableCell>
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
                                            <DropdownMenuItem>View details</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => onVerify(seller.id)}>Verify seller</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive" onClick={() => onBan(seller.id)}>Ban seller</DropdownMenuItem>
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
