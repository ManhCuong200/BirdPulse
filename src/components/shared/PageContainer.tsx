import { cn } from "@/lib/utils"

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
    return (
        <div className={cn("container mx-auto px-4 py-8 md:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    )
}
