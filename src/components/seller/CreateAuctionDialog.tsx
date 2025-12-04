import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreateAuctionForm } from "@/components/forms/CreateAuctionForm"
import { useState } from "react"
import { toast } from "sonner"

interface CreateAuctionDialogProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    trigger?: React.ReactNode
}

export function CreateAuctionDialog({ open, onOpenChange, trigger }: CreateAuctionDialogProps) {
    const [internalOpen, setInternalOpen] = useState(false)

    const isControlled = open !== undefined
    const isOpen = isControlled ? open : internalOpen
    const setIsOpen = isControlled ? onOpenChange : setInternalOpen

    const handleSubmit = (data: any) => {
        console.log("Creating auction...", data)
        // API call would go here
        toast.success("Auction created successfully!")
        setIsOpen?.(false)
    }

    const handleCancel = () => {
        setIsOpen?.(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create New Auction</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to list your item for auction.
                    </DialogDescription>
                </DialogHeader>
                <CreateAuctionForm onSubmit={handleSubmit} onCancel={handleCancel} />
            </DialogContent>
        </Dialog>
    )
}
