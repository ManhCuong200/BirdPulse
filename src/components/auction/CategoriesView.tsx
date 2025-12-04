import { CategoryGrid, Category } from "@/components/auction/CategoryGrid"

interface CategoriesViewProps {
    categories: Category[]
}

export function CategoriesView({ categories }: CategoriesViewProps) {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Explore Categories</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Browse our diverse collection of premium items by category. From vintage watches to contemporary art, find exactly what you're looking for.
                </p>
            </div>

            <CategoryGrid categories={categories} />
        </div>
    )
}
