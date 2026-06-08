/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import LogoCloud from "@/components/logo-cloud-2"
import Features from "@/components/features-2"
import Content from "@/components/content-3"
import Stats from "@/components/stats-2"
import Team from "@/components/team-1"
import Testimonials from "@/components/testimonials-1"
import CallToAction from "@/components/call-to-action-3"
import Footer from "@/components/footer-2"

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-background">
          <div className="relative pt-16 pb-32">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="mt-4 mask-radial-from-35% mask-radial-to-75% pointer-events-none relative mx-auto aspect-[3/2] max-w-xl opacity-75 mix-blend-darken">
                <div className="bg-background absolute inset-0 mix-blend-overlay" />
<img
  src="/Gemini_Generated_Image_8opqwl8opqwl8opq-removebg-preview.png"
  alt="phone"
  className="not-dark:invert dark:mix-blend-lighten"
  width={1340}
  height={560}
/>
              </div>
              <div className="mx-auto mt-4 max-w-md text-center">
<h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
  Just speak. We handle the rest.
</h1>
<p className="text-muted-foreground mt-4 text-balance">
  Never miss an appointment - just speak and it&apos;s booked.
</p>

<Button asChild className="mt-6 pr-1.5">
  <Link href="https://calendly.com/odiljonovbekzod86/meeting-1-1">
    <span className="text-nowrap">Book Appointment</span>
    <ChevronRight className="opacity-50" />
  </Link>
</Button>
              </div>
            </div>
          </div>
        </section>
        <LogoCloud />
        <Features />
        <Content />
        <Stats />
        <Team />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
