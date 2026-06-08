import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Mail } from 'lucide-react'

export default function CallToAction() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="@xl:text-left grid items-center gap-8 text-center">
                    <div>
                        <h2 className="text-balance font-serif text-3xl font-medium md:text-4xl">Ready to Get More Customers?</h2>
                        <p className="text-muted-foreground mt-3 text-balance">Book a free strategy call and we&apos;ll show you exactly how AI and automation can grow your business.</p>
                    </div>

                    <div className="@max-xl:mx-auto @max-md:flex-col flex w-full max-w-sm gap-2">
                        <div className="ring-input not-dark:bg-card focus-within:ring-ring/15 focus-within:border-primary relative flex flex-1 items-center overflow-hidden rounded-md border border-transparent ring focus-within:ring-[3px]">
                            <Mail className="text-muted-foreground pointer-events-none absolute left-2.5 size-3.5" />
                            <input
                                type="email"
                                placeholder="you@yourbusiness.com"
                                autoComplete="email"
                                className="autofill:bg-primary h-8 w-full bg-transparent pl-8 pr-2.5 text-sm outline-none"
                            />
                        </div>
                        <Button
                            asChild
                            className="shrink-0 pr-1.5">
                            <Link href="https://calendly.com/odiljonovbekzod86/meeting-1-1">
                                Book a Call
                                <ChevronRight className="opacity-50" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
