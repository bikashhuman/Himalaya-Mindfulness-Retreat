"use client"

import { Mountain, Users, Camera, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Mountain,
    title: "Himalayan Treks",
    description:
      "Experience breathtaking treks through pristine valleys and ancient mountain passes with expert guides.",
  },
  {
    icon: Sparkles,
    title: "Cultural Tours",
    description: "Immerse yourself in Bhutan's rich Buddhist heritage with visits to sacred monasteries and dzongs.",
  },
  {
    icon: Camera,
    title: "Festival Experiences",
    description:
      "Witness vibrant Tshechu festivals with masked dances and traditional celebrations throughout the year.",
  },
  {
    icon: Users,
    title: "Custom Itineraries",
    description: "Tailored journeys designed around your interests, from meditation retreats to adventure expeditions.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="service" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wide mb-2">Our Services</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Premium Bhutan Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-foreground">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
