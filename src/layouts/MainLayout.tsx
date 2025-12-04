import { Navbar } from "@/components/shared/Navbar"
import { Outlet } from "react-router-dom"
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher"

export function MainLayout() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased relative">
            <div className="fixed top-4 right-20 z-50">
                <LanguageSwitcher />
            </div>
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by BidPulse Team. The source code is available on GitHub.
                    </p>
                </div>
            </footer>
        </div>
    )
}
