import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const RateLimitWarning: React.FC = () => {
    return (
        <Alert variant="destructive" className="fixed top-4 right-4 w-auto z-50 animate-in slide-in-from-top-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                Too many requests. Please slow down.
            </AlertDescription>
        </Alert>
    );
};
