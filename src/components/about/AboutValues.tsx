import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Award } from "lucide-react"

export function AboutValues() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose BidPulse?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4 pt-6">
                        <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold">Secure & Trusted</h3>
                        <p className="text-muted-foreground">
                            Every seller is verified, and every transaction is protected. We prioritize your safety above all else.
                        </p>
                    </CardContent>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4 pt-6">
                        <div className="mx-auto w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                            <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h3 className="text-xl font-bold">Premium Quality</h3>
                        <p className="text-muted-foreground">
                            We curate our listings to ensure only the finest items make it to our platform. Quality you can trust.
                        </p>
                    </CardContent>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-4 pt-6">
                        <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                            <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold">Global Reach</h3>
                        <p className="text-muted-foreground">
                            Bid from anywhere, anytime. Our platform brings the world's treasures right to your fingertips.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
