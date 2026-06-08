import Image from 'next/image'

const testimonials = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
        name: 'Sarah Mitchell',
        role: 'Owner, Mitchell Dental',
        quote: 'VocalROI set up an AI phone system that books appointments while we\'re with patients. Our new patient inquiries doubled in the first month.',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/34567890?v=4',
        name: 'James Rivera',
        role: 'Broker, Rivera Realty Group',
        quote: 'Every lead gets a response within 60 seconds now. We went from losing weekend inquiries to closing deals we would have missed entirely.',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
        name: 'Aisha Patel',
        role: 'Director, Bloom Skincare',
        quote: 'The automated follow-up sequences alone paid for themselves in two weeks. Our repeat purchase rate jumped 35%.',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
        name: 'Marcus Chen',
        role: 'Founder, FitPro Coaching',
        quote: 'I was drowning in DMs and missed calls. VocalROI built a system that qualifies leads and books discovery calls on autopilot.',
    },
]

export default function Testimonials() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">What Our Clients Say</h2>
                    <p className="text-muted-foreground text-balance">Business owners who partnered with VocalROI to grow faster with AI and automation.</p>
                </div>
                <div className="@xl:grid-cols-2 mt-12 grid gap-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-card ring-border text-foreground space-y-3 rounded-2xl p-4 text-sm ring-1">
                            <div className="flex gap-3">
                                <div className="before:border-foreground/10 relative size-5 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="rounded-full object-cover"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <p className="text-sm font-medium">
                                    {testimonial.name} <span className="text-muted-foreground ml-2 font-normal">{testimonial.role}</span>
                                </p>
                            </div>

                            <p className="text-muted-foreground text-sm">{testimonial.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
