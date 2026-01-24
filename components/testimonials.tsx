"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronUp, ChevronDown } from "lucide-react"

const testimonials = [
  {
    name: "Emily Richardson",
    location: "California, USA",
    image: "/professional-woman-smiling.png",
    text: "Bhutan exceeded every expectation. The Tiger's Nest trek was spiritual and transformative. Our guide's knowledge of Buddhism and local culture made every moment meaningful. This journey changed my perspective on life.",
  },
  {
    name: "James Morrison",
    location: "London, UK",
    image: "/professional-man-smiling.png",
    text: "The attention to detail was extraordinary. From luxury accommodations to authentic cultural experiences, every element was perfectly curated. Watching the sunrise over the Himalayas from our hotel was unforgettable.",
  },
  {
    name: "Sophia Chen",
    location: "Singapore",
    image: "/young-woman-traveler-smiling-portrait.jpg",
    text: "As a solo traveler, I felt completely safe and welcomed. The Tshechu festival was mesmerizing, and the meditation sessions with monks brought such peace. Bhutan is truly the happiest place on Earth.",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wide mb-2">Testimonials</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 md:mb-12">
              Traveler Experiences
            </h2>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                      idx === activeIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                  aria-label="Previous testimonial"
                  disabled={activeIndex === 0}
                >
                  <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </button>
                <button
                  onClick={() => setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                  aria-label="Next testimonial"
                  disabled={activeIndex === testimonials.length - 1}
                >
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] md:min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`${
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute top-0 left-0 pointer-events-none"
                } transition-all duration-500 border border-border shadow-xl`}
              >
                <CardContent className="p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
