import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { LucideIcon } from "lucide-react"

export interface Category {
    name: string
    icon: LucideIcon
    count: number
    color: string
    bg: string
}

interface CategoryGridProps {
    categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
                <Link key={category.name} to={`/auctions?category=${category.name}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                        <CardHeader className="text-center pb-2">
                            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${category.bg} group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className={`h-8 w-8 ${category.color}`} />
                            </div>
                            <CardTitle className="text-xl">{category.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-muted-foreground">{category.count} active auctions</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
