import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface BuyNowButtonProps {
    auctionId: string;
    price: number;
    onSuccess: () => void;
}

export const BuyNowButton: React.FC<BuyNowButtonProps> = ({ auctionId, price, onSuccess }) => {
    const handleBuyNow = async () => {
        try {
            // Placeholder for API call to execute Buy Now logic
            console.log(`Buying auction ${auctionId} for ${price}`);

            // Simulate success
            onSuccess();
        } catch (error) {
            console.error("Failed to buy now:", error);
        }
    };

    return (
        <Button
            onClick={handleBuyNow}
            className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold py-2 px-4 rounded shadow-lg transform transition hover:scale-105"
        >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now for ${price.toLocaleString()}
        </Button>
    );
};
