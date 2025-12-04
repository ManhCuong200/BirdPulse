import { PageContainer } from "@/components/shared/PageContainer"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutStats } from "@/components/about/AboutStats"
import { AboutValues } from "@/components/about/AboutValues"
import { AboutCTA } from "@/components/about/AboutCTA"

export function AboutPage() {
    return (
        <PageContainer className="animate-fade-in-up">
            <div className="space-y-16 py-8">
                <AboutHero />
                <AboutStats />
                <AboutValues />
                <AboutCTA />
            </div>
        </PageContainer>
    )
}
