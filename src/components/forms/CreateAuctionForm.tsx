import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    title: z.string().min(5, {
        message: "Title must be at least 5 characters.",
    }),
    description: z.string().min(20, {
        message: "Description must be at least 20 characters.",
    }),
    startPrice: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Starting price must be a valid number greater than 0.",
    }),
    reservePrice: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Reserve price must be a valid number greater than 0.",
    }),
    startDate: z.string().refine((date) => new Date(date) > new Date(), {
        message: "Start date must be in the future.",
    }),
    endDate: z.string(),
}).refine((data) => new Date(data.endDate) > new Date(data.startDate), {
    message: "End date must be after start date.",
    path: ["endDate"],
})

type FormValues = z.infer<typeof formSchema>

interface CreateAuctionFormProps {
    onSubmit: (data: FormValues) => void
    onCancel: () => void
}

export function CreateAuctionForm({ onSubmit, onCancel }: CreateAuctionFormProps) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            startPrice: "",
            reservePrice: "",
            startDate: "",
            endDate: "",
        },
    })

    return (
        <div className="px-6 space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Item Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Vintage Rolex Submariner" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your item in detail..."
                                        className="min-h-[100px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="startPrice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Starting Price ($)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reservePrice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Reserve Price ($)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Date</FormLabel>
                                    <FormControl>
                                        <Input type="datetime-local" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Date</FormLabel>
                                    <FormControl>
                                        <Input type="datetime-local" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid gap-2">
                        <FormLabel>Images</FormLabel>
                        <Input type="file" multiple />
                        <p className="text-[0.8rem] text-muted-foreground">
                            Upload images of your item.
                        </p>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                        <Button variant="outline" type="button" onClick={onCancel}>Cancel</Button>
                        <Button type="submit">Create Auction</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
