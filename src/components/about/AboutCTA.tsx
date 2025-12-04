import { Button } from "@/components/ui/button"

export function AboutCTA() {
    return (
        <section className="bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Bidding?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Join thousands of other collectors and enthusiasts today. Create your account and place your first bid in minutes.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg" variant="secondary" className="font-semibold">
                    Browse Auctions
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                    Become a Seller
                </Button>
            </div>
        </section>
    )
}
