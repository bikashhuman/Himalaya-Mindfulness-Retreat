"use client"

import { FileCheck, CreditCard, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: FileCheck,
    title: "Select Your Package",
    description:
      "Choose from our curated Bhutan tour packages or customize your own itinerary based on your interests and duration.",
  },
  {
    icon: CreditCard,
    title: "Contact Us",
    description:
      "Complete your booking after contacting us. We handle all visa arrangements and permits for Bhutan.",
  },
  {
    icon: Plane,
    title: "Begin Your Journey",
    description:
      "Receive your complete travel documents and arrive in Paro where your personal guide will welcome you to Bhutan.",
  },
]

export function BookingSteps() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute top-40 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="mb-8 md:mb-12">
              <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wide mb-2">Simple Process</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground text-balance">
                Book Your Bhutan Journey In 3 Steps
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex gap-4 md:gap-6 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary rounded-lg md:rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Card className="overflow-hidden shadow-2xl border border-border max-w-md mx-auto">
              <CardContent className="p-0">
                <img
                  src="/paro-valley-bhutan-mountains-and-traditional-archit.jpg"
                  alt="Bhutan Journey"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-xl text-foreground">Journey to Paro</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span>15-22 April</span>
                    <span>|</span>
                    <span>by Karma Dorji</span>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <img
                      src="/bhutan-prayer-flags-colorful-mountains.jpg"
                      alt="Bhutan"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <img
                      src="/bhutan-traditional-architecture-dzong-monastery.jpg"
                      alt="Dzong"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <img
                      src="/bhutan-cultural-dance-traditional-costume.jpg"
                      alt="Culture"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-muted-foreground text-sm">8 travelers confirmed</span>
                    <span className="text-primary font-semibold">Confirmed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="hidden sm:block absolute -bottom-8 -right-8 bg-card rounded-2xl shadow-xl p-6 max-w-[220px] border border-border">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/bhutan-tiger-s-nest-monastery-on-cliff-dramatic-mo.jpg"
                  alt="Tiger's Nest"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-muted-foreground text-xs">Next Destination</p>
                  <p className="font-semibold text-sm text-foreground">Tiger's Nest</p>
                </div>
              </div>
              <div className="text-xs text-accent font-semibold">Trekking Day 3</div>
              <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                <div className="bg-accent h-1.5 rounded-full" style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
