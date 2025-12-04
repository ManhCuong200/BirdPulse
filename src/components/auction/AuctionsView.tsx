import { AuctionFilters } from "@/components/auction/AuctionFilters"
import { AuctionGrid } from "@/components/auction/AuctionGrid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Auction } from "@/types"

interface AuctionsViewProps {
    searchQuery: string
    onSearchChange: (value: string) => void
    priceRange: number[]
    onPriceRangeChange: (value: number[]) => void
    categories: string[]
    selectedCategories: string[]
    onCategoryChange: (category: string, checked: boolean) => void
    conditions: string[]
    selectedConditions: string[]
    onConditionChange: (condition: string, checked: boolean) => void
    auctions: Auction[]
}

export function AuctionsView({
    searchQuery,
    onSearchChange,
    priceRange,
    onPriceRangeChange,
    categories,
    selectedCategories,
    onCategoryChange,
    conditions,
    selectedConditions,
    onConditionChange,
    auctions
}: AuctionsViewProps) {
    return (
        <div className="flex flex-col space-y-8">
            {/* Header & Search Logic */}
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Browse Auctions</h1>
                    <p className="text-muted-foreground">Find unique items from verified sellers.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search items..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>

                    {/* Mobile Filter Sheet */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="lg:hidden">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Filters</SheetTitle>
                                <SheetDescription>Refine your search results.</SheetDescription>
                            </SheetHeader>
                            <div className="mt-4">
                                <AuctionFilters
                                    priceRange={priceRange}
                                    onPriceRangeChange={onPriceRangeChange}
                                    categories={categories}
                                    selectedCategories={selectedCategories}
                                    onCategoryChange={onCategoryChange}
                                    conditions={conditions}
                                    selectedConditions={selectedConditions}
                                    onConditionChange={onConditionChange}
                                />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Desktop Filters */}
                <div className="hidden lg:block">
                    <AuctionFilters
                        priceRange={priceRange}
                        onPriceRangeChange={onPriceRangeChange}
                        categories={categories}
                        selectedCategories={selectedCategories}
                        onCategoryChange={onCategoryChange}
                        conditions={conditions}
                        selectedConditions={selectedConditions}
                        onConditionChange={onConditionChange}
                    />
                </div>

                {/* Results Grid */}
                <div className="lg:col-span-3">
                    <AuctionGrid auctions={auctions} />
                </div>
            </div>
        </div>
    )
}
