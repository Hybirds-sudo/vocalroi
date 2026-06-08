import { Lightbulb, Pencil, PencilRuler } from 'lucide-react'

export default function Content() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">How We Help You Grow</h2>
                    <p className="text-muted-foreground">VocalROI combines AI with proven growth strategy to fill your pipeline, speed up sales, and keep customers coming back.</p>
                </div>
                <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3 border-t pt-6">
                        <Lightbulb className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Attract More Leads</span> AI-powered ads, landing pages, and outreach that bring qualified prospects to your door.
                        </p>
                    </div>

                    <div className="space-y-3 border-t pt-6">
                        <Pencil className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Convert Faster</span> Smart chatbots and voice agents that answer questions, book appointments, and move buyers forward.
                        </p>
                    </div>

                    <div className="space-y-3 border-t pt-6">
                        <PencilRuler className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Automate Everything</span> End-to-end workflows that nurture leads, send reminders, and re-engage past customers on autopilot.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
