import { Button } from "@/components/ui/button"
import { ArrowRight, Gavel, ShieldCheck, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function HomeHero() {
    const navigate = useNavigate()

    return (
        <section className="relative overflow-hidden py-20 lg:py-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>

            <div className="container relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        The #1 Premium Auction Marketplace
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 animate-fade-in-up [animation-delay:200ms]">
                        Discover Rare Items & <br />
                        <span className="text-gradient">Bid with Confidence</span>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up [animation-delay:400ms] max-w-2xl mx-auto">
                        Join thousands of collectors and enthusiasts. Experience real-time bidding, secure transactions, and verified authenticity on BidPulse.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
                        <Button size="lg" className="h-12 px-8 text-lg shadow-glow" onClick={() => navigate("/auctions")}>
                            Start Bidding <Gavel className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg" onClick={() => navigate("/about")}>
                            Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-fade-in-up [animation-delay:800ms]">
                        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
                            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 mb-4">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Real-Time Bidding</h3>
                            <p className="text-sm text-muted-foreground">Experience the thrill of live auctions with instant updates.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
                            <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 mb-4">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Verified Sellers</h3>
                            <p className="text-sm text-muted-foreground">Every item is authenticated by our expert team.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
                            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-4">
                                <Gavel className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
                            <p className="text-sm text-muted-foreground">Your transactions are protected with bank-grade security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
