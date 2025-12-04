import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Gavel, LayoutDashboard, List, Settings, Users } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    role: "seller" | "admin"
}

export function Sidebar({ className, role }: SidebarProps) {
    const location = useLocation()

    const sellerLinks = [
        { name: "Dashboard", href: "/seller/dashboard", icon: LayoutDashboard },
        { name: "Create Auction", href: "/seller/create-auction", icon: Gavel },
        { name: "My Auctions", href: "/seller/auctions", icon: List },
        { name: "Settings", href: "/seller/settings", icon: Settings },
    ]

    const adminLinks = [
        { name: "Overview", href: "/admin/dashboard", icon: BarChart3 },
        { name: "Sellers", href: "/admin/sellers", icon: Users },
        { name: "Auctions", href: "/admin/auctions", icon: Gavel },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ]

    const links = role === "seller" ? sellerLinks : adminLinks

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        {role === "seller" ? "Seller Zone" : "Admin Panel"}
                    </h2>
                    <div className="space-y-1">
                        {links.map((link) => (
                            <Button
                                key={link.href}
                                variant={location.pathname === link.href ? "secondary" : "ghost"}
                                className="w-full justify-start"
                                asChild
                            >
                                <Link to={link.href}>
                                    <link.icon className="mr-2 h-4 w-4" />
                                    {link.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
