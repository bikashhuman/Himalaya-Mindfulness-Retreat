import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { TourPackages } from "@/components/tour-packages"
import { BookingSteps } from "@/components/booking-steps"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <TourPackages />
      <BookingSteps />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
