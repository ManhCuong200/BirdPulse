import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

interface AuctionFiltersProps {
    priceRange: number[]
    onPriceRangeChange: (value: number[]) => void
    categories: string[]
    selectedCategories: string[]
    onCategoryChange: (category: string, checked: boolean) => void
    conditions: string[]
    selectedConditions: string[]
    onConditionChange: (condition: string, checked: boolean) => void
}

export function AuctionFilters({
    priceRange,
    onPriceRangeChange,
    categories,
    selectedCategories,
    onCategoryChange,
    conditions,
    selectedConditions,
    onConditionChange,
}: AuctionFiltersProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                                id={category}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={(checked) => onCategoryChange(category, checked as boolean)}
                            />
                            <Label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {category}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
                <Slider
                    defaultValue={[0, 50000]}
                    max={50000}
                    step={100}
                    value={priceRange}
                    onValueChange={onPriceRangeChange}
                    className="mb-4"
                />
                <div className="flex items-center justify-between">
                    <Input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => onPriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-24"
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value) || 0])}
                        className="w-24"
                    />
                </div>
            </div>
            <Separator />
            <div>
                <h3 className="mb-4 text-lg font-semibold">Condition</h3>
                <div className="space-y-3">
                    {conditions.map((condition) => (
                        <div key={condition} className="flex items-center space-x-2">
                            <Checkbox
                                id={condition}
                                checked={selectedConditions.includes(condition)}
                                onCheckedChange={(checked) => onConditionChange(condition, checked as boolean)}
                            />
                            <Label htmlFor={condition}>{condition}</Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
