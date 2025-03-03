import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import Success from "./success"

const formSchema = z.object({
    referrerName: z.string().min(2).max(50),
    referrerEmail: z.string().email(),
    refereeName: z.string().min(2).max(50),
    refereeEmail: z.string().email(),
    courseName: z.string().min(2)
})

export default function ReferralForm() {
    const [referralCode, setReferralCode] = useState<String | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            referrerName: "",
            referrerEmail: "",
            refereeName: "",
            refereeEmail: "",
            courseName: "",
        },
    })

    const loading = form.formState.isSubmitting

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/createReferral`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const res = await response.json()

            if (!response.ok) {
                throw new Error(res.message)
            }

            toast.success("Referral created successfully")
            setReferralCode(res.referral.referralCode)

        } catch (error: any) {
            console.log(error);
            toast.error(error.message ?? "An error occurred while creating referrals")
        }


    }

    if (referralCode) {
        return <Success referralCode={referralCode} />
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col items-center gap-10">
                <FormField
                    control={form.control}
                    name="referrerName"
                    render={({ field }) => (
                        <FormItem className="w-full h-12">
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="referrerEmail"
                    render={({ field }) => (
                        <FormItem className="w-full h-12">
                            <FormControl>
                                <Input placeholder="example@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="refereeName"
                    render={({ field }) => (
                        <FormItem className="w-full h-12">
                            <FormControl>
                                <Input placeholder="Your friend's name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="refereeEmail"
                    render={({ field }) => (
                        <FormItem className="w-full h-12">
                            <FormControl>
                                <Input placeholder="friend@gmailcom" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                        <FormItem className="w-full h-12">
                            <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Course name" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Dsa with java">DSA with java</SelectItem>
                                    <SelectItem value="MERN stack">MERN stack</SelectItem>
                                    <SelectItem value="MEAN stack">MEAN stack</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={`${loading ? "w-20 rounded-full" : "w-1/2"} transition-all`}>{
                    loading ? <Loader2 className=" animate-spin" /> : "Submit"
                }</Button>

            </form>
        </Form>
    )

}