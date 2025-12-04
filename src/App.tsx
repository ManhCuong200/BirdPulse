import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { HomePage } from '@/pages/bidder/HomePage'
import { AuctionRoom } from '@/pages/bidder/AuctionRoom'
import { PaymentPage } from '@/pages/bidder/PaymentPage'
import { NotificationsPage } from '@/pages/bidder/NotificationsPage'
import { SellerDashboard } from '@/pages/seller/SellerDashboard'
import { CreateAuction } from '@/pages/seller/CreateAuction'
import { ManageAuctions } from '@/pages/seller/ManageAuctions'
import { AdminDashboard } from '@/pages/admin/AdminDashboard'
import { SellerList } from '@/pages/admin/SellerList'
import { AdminAuctionsPage } from '@/pages/admin/AdminAuctionsPage'
import { AdminSettingsPage } from '@/pages/admin/AdminSettingsPage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { ProfilePage } from '@/pages/bidder/ProfilePage'
import { AuctionsPage } from '@/pages/bidder/AuctionsPage'
import { CategoriesPage } from '@/pages/bidder/CategoriesPage'
import { AboutPage } from '@/pages/bidder/AboutPage'

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    {/* Auth Routes */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />


                    // ... imports

                    {/* Bidder / Public Routes */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/auctions" element={<AuctionsPage />} />
                        <Route path="/categories" element={<CategoriesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/auction/:id" element={<AuctionRoom />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/notifications" element={<NotificationsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Route>

                    {/* Seller Routes */}
                    <Route path="/seller" element={<DashboardLayout role="seller" />}>
                        <Route index element={<Navigate to="/seller/dashboard" replace />} />
                        <Route path="dashboard" element={<SellerDashboard />} />
                        <Route path="create-auction" element={<CreateAuction />} />
                        <Route path="auctions" element={<ManageAuctions />} />
                    </Route>

                    {/* Admin Routes */}
                    <Route path="/admin" element={<DashboardLayout role="admin" />}>
                        <Route index element={<Navigate to="/admin/dashboard" replace />} />
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="sellers" element={<SellerList />} />
                        <Route path="auctions" element={<AdminAuctionsPage />} />
                        <Route path="settings" element={<AdminSettingsPage />} />
                    </Route>
                </Routes>
            </Router>
            <Toaster />
        </ThemeProvider>
    )
}

export default App
