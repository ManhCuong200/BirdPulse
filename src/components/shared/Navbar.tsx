import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Gavel, Bell, User, Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(true) // Mock auth state

    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-white/20 dark:border-slate-800/50">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            BidPulse
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/auctions" className="text-muted-foreground hover:text-primary transition-colors">
                            Auctions
                        </Link>
                        <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                            Categories
                        </Link>
                        <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                            About
                        </Link>
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
                    <div className="relative w-full">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search for items..."
                            className="w-full pl-9 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200/50 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10" onClick={() => navigate("/notifications")}>
                                <Bell className="h-5 w-5 text-muted-foreground" />
                                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950" />
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                                        <User className="h-5 w-5 text-muted-foreground" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/seller/dashboard")}>
                                        Seller Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/admin/dashboard")}>
                                        Admin Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600" onClick={() => setIsLoggedIn(false)}>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" onClick={() => navigate("/login")}>
                                Log in
                            </Button>
                            <Button onClick={() => navigate("/register")}>
                                Sign up
                            </Button>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link to="/auctions" className="text-lg font-medium">
                                    Auctions
                                </Link>
                                <Link to="/categories" className="text-lg font-medium">
                                    Categories
                                </Link>
                                <Link to="/about" className="text-lg font-medium">
                                    About
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
