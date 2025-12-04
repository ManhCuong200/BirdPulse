import { CreateAuctionForm } from "@/components/forms/CreateAuctionForm"
import { PageContainer } from "@/components/shared/PageContainer"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function CreateAuction() {
    const navigate = useNavigate()

    const handleSubmit = (data: any) => {
        console.log("Creating auction...", data)
        // API call
        toast.success("Auction created successfully!")
        navigate("/seller/auctions")
    }

    const handleCancel = () => {
        navigate("/seller/dashboard")
    }

    return (
        <PageContainer className="animate-fade-in-up">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Create New Listing</h1>
                <p className="text-muted-foreground mt-2">Fill in the details below to list your item for auction.</p>
            </div>
            <CreateAuctionForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </PageContainer>
    )
}
