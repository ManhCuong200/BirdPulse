export function AboutStats() {
    const stats = [
        { label: "Active Users", value: "50K+" },
        { label: "Auctions Completed", value: "120K+" },
        { label: "Countries Served", value: "85+" },
        { label: "Total Volume", value: "$25M+" },
    ]

    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-2 p-6 bg-secondary/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
            ))}
        </section>
    )
}
