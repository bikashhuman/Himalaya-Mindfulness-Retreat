"use client"

import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { DestinationModal } from "./destination-modal"
import { useState, useRef } from "react"

const destinations = [
  {
    name: "Paro Valley",
    duration: "5 Days",
    image: "/paro-valley-bhutan-mountains-and-traditional-archit.jpg",
    description: "Tiger's Nest & Ancient Temples",
    rating: 4.9,
    bestTime: "Mar-May, Sep-Nov",
    longDescription:
      "Paro Valley is home to some of Bhutan's most iconic landmarks, including the legendary Tiger's Nest Monastery. This stunning valley offers a perfect blend of natural beauty and cultural richness, with traditional farmhouses dotting the landscape against a backdrop of soaring Himalayan peaks.",
    highlights: [
      "Taktsang Palphug Monastery (Tiger's Nest)",
      "Rinpung Dzong and traditional architecture",
      "National Museum of Bhutan",
      "Kyichu Lhakhang - oldest temple",
      "Scenic mountain views and hiking trails",
      "Traditional farmhouse experiences",
    ],
    activities: ["Trekking", "Cultural Tours", "Photography", "Temple Visits", "Hiking"],
  },
  {
    name: "Punakha Valley",
    duration: "7 Days",
    image: "/punakha-dzong-fortress-bhutan-riverside-monastery.jpg",
    description: "Royal Dzongs & Rice Terraces",
    rating: 4.8,
    bestTime: "Oct-Apr",
    longDescription:
      "The ancient capital of Bhutan, Punakha Valley is renowned for its majestic dzong situated at the confluence of two rivers. The valley's subtropical climate creates lush rice terraces and a verdant landscape that contrasts beautifully with the architectural grandeur of its fortresses.",
    highlights: [
      "Punakha Dzong - Palace of Great Happiness",
      "Suspension bridge walk over Mo Chhu river",
      "Chimi Lhakhang fertility temple",
      "Khamsum Yulley Namgyal Chorten",
      "White-water rafting opportunities",
      "Scenic rice terrace photography",
    ],
    activities: ["River Rafting", "Temple Tours", "Photography", "Village Walks", "Cultural Experiences"],
  },
  {
    name: "Bumthang Valley",
    duration: "10 Days",
    image: "/bumthang-valley-bhutan-spiritual-heartland-temples.jpg",
    description: "Spiritual Heartland",
    rating: 5.0,
    bestTime: "Apr-Jun, Sep-Nov",
    longDescription:
      "Known as the spiritual heartland of Bhutan, Bumthang comprises four valleys filled with ancient temples and monasteries. This region offers deep insights into Bhutanese Buddhism and traditional rural life, with opportunities for meditation and spiritual exploration.",
    highlights: [
      "Jakar Dzong - fortress of the white bird",
      "Jambay Lhakhang - 7th century temple",
      "Kurjey Lhakhang monastery complex",
      "Tamshing Goemba meditation center",
      "Swiss Cheese and Red Panda Beer tasting",
      "Traditional textile weaving demonstrations",
    ],
    activities: ["Meditation", "Spiritual Tours", "Cultural Immersion", "Textile Shopping", "Nature Walks"],
  },
  {
    name: "Thimphu Capital",
    duration: "4 Days",
    image: "/thimphu-bhutan-capital-city-valley.jpg",
    description: "Modern Culture Meets Tradition",
    rating: 4.7,
    bestTime: "Year Round",
    longDescription:
      "Bhutan's capital city beautifully balances modern development with traditional culture. From the giant Buddha statue overlooking the valley to bustling weekend markets, Thimphu offers a unique glimpse into contemporary Bhutanese life while maintaining its cultural heritage.",
    highlights: [
      "Buddha Dordenma - massive golden statue",
      "Tashichho Dzong government complex",
      "Weekend market with local crafts",
      "Traditional paper making factory",
      "Folk Heritage Museum",
      "Memorial Chorten - iconic landmark",
    ],
    activities: ["City Tours", "Shopping", "Museums", "Cultural Shows", "Local Cuisine"],
  },
  {
    name: "Haa Valley",
    duration: "8 Days",
    image: "/haa-valley-bhutan-pristine-mountains-forests.jpg",
    description: "Hidden Gem Paradise",
    rating: 4.9,
    bestTime: "May-Sep",
    longDescription:
      "One of Bhutan's most pristine and least visited valleys, Haa Valley offers unspoiled natural beauty and authentic cultural experiences. Surrounded by mountains and dense forests, this valley provides a peaceful retreat and opportunities for adventure.",
    highlights: [
      "Pristine alpine environment",
      "Sacred mountain peaks",
      "Nomadic herder experiences",
      "Haa Dzong and ancient temples",
      "Mountain biking trails",
      "Wildlife spotting opportunities",
    ],
    activities: ["Mountain Biking", "Trekking", "Wildlife Watching", "Cultural Tours", "Photography"],
  },
  {
    name: "Phobjikha Valley",
    duration: "6 Days",
    image: "/phobjikha-valley-bhutan-black-necked-cranes-winter.jpg",
    description: "Black-Necked Crane Sanctuary",
    rating: 4.8,
    bestTime: "Nov-Feb",
    longDescription:
      "A glacial valley on the western slopes of the Black Mountains, Phobjikha is famous as the winter home of endangered black-necked cranes. The valley's natural beauty and conservation efforts make it a must-visit for nature lovers.",
    highlights: [
      "Black-necked crane observation",
      "Gangtey Monastery hiking",
      "Nature trail through forests",
      "Traditional farmhouse stays",
      "Crane festival (November)",
      "Pristine valley landscapes",
    ],
    activities: ["Bird Watching", "Nature Walks", "Photography", "Monastery Visits", "Eco-Tourism"],
  },
]

export function Destinations() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedDestination, setSelectedDestination] = useState<(typeof destinations)[0] | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <section id="destinations" className="py-12 md:py-20 px-4 md:px-12 lg:px-24 relative" ref={ref}>
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

        <div className="container mx-auto">
          <div
            className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wide mb-2">Must Visit</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">Top Destinations</h2>
          </div>

          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg h-10 w-10 md:h-12 md:w-12"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </Button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-12 md:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {destinations.map((destination, index) => (
                <Card
                  key={index}
                  className={`group flex-shrink-0 w-[280px] md:w-[340px] overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer snap-start ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedDestination(destination)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-[240px] md:h-[320px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium">{destination.name}</span>
                      </div>
                      <h3 className="font-serif font-semibold text-lg md:text-xl text-foreground line-clamp-2">
                        {destination.description}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg h-10 w-10 md:h-12 md:w-12"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </>
  )
}
