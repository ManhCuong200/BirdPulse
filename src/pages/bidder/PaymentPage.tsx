import { PageContainer } from "@/components/shared/PageContainer"
import { PaymentForm } from "@/components/payment/PaymentForm"
import { OrderSummary } from "@/components/payment/OrderSummary"

export function PaymentPage() {
    return (
        <PageContainer>
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
                <p className="text-muted-foreground mt-2">Complete your purchase securely.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <PaymentForm />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </PageContainer>
    )
}
