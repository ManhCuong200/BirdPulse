import { PageContainer } from "@/components/shared/PageContainer"
import { CategoriesView } from "@/components/auction/CategoriesView"
import { Category } from "@/components/auction/CategoryGrid"
import { Watch, Palette, Music, Armchair, Gem, Car, Coins, Shirt } from "lucide-react"

// Mock Data
const CATEGORIES: Category[] = [
    { name: "Watches", icon: Watch, count: 124, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950" },
    { name: "Art", icon: Palette, count: 85, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950" },
    { name: "Jewelry", icon: Gem, count: 230, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950" },
    { name: "Furniture", icon: Armchair, count: 64, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950" },
    { name: "Music", icon: Music, count: 42, color: "text-green-500", bg: "bg-green-50 dark:bg-green-950" },
    { name: "Cars", icon: Car, count: 18, color: "text-red-500", bg: "bg-red-50 dark:bg-red-950" },
    { name: "Collectibles", icon: Coins, count: 156, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-950" },
    { name: "Fashion", icon: Shirt, count: 98, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950" },
]

export function CategoriesPage() {
    return (
        <PageContainer className="animate-fade-in-up">
            <CategoriesView categories={CATEGORIES} />
        </PageContainer>
    )
}
