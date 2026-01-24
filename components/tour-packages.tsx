"use client"

import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TourModal } from "./tour-modal"
import { useState, useRef } from "react"

const packages = [
  {
    name: "Cultural Explorer",
    duration: "7 Days / 6 Nights",
    image: "/bhutan-cultural-tour-monasteries-and-prayer-flags.jpg",
    features: [
      "Tiger's Nest Monastery trek",
      "Thimphu & Paro valley tours",
      "Traditional Bhutanese cuisine",
      "Expert cultural guide",
      "4-star accommodation",
    ],
    popular: false,
    groupSize: "4-10 people",
    longDescription:
      "Immerse yourself in Bhutan's rich cultural heritage with this carefully curated week-long journey. Visit iconic monasteries, interact with local communities, and witness traditional ceremonies that have remained unchanged for centuries.",
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Airport pickup, hotel check-in, and welcome dinner" },
      { day: 2, title: "Paro Valley Tour", description: "Visit Rinpung Dzong and National Museum" },
      { day: 3, title: "Tiger's Nest Trek", description: "Hike to the iconic Taktsang Monastery" },
      { day: 4, title: "Thimphu Exploration", description: "Visit Buddha Dordenma and Tashichho Dzong" },
      { day: 5, title: "Cultural Immersion", description: "Traditional archery, textile workshops" },
      { day: 6, title: "Punakha Day Trip", description: "Visit Punakha Dzong and suspension bridge" },
      { day: 7, title: "Departure", description: "Breakfast and airport transfer" },
    ],
    included: ["Airport transfers", "All meals", "Licensed guide", "Entrance fees"],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
  },
  {
    name: "Himalayan Adventure",
    duration: "10 Days / 9 Nights",
    image: "/bhutan-trekking-adventure-himalayan-mountains.jpg",
    features: [
      "Druk Path trek experience",
      "All major dzongs & temples",
      "Hot stone bath therapy",
      "Festival participation (seasonal)",
      "Luxury boutique hotels",
      "Private transportation",
    ],
    popular: true,
    groupSize: "2-8 people",
    longDescription:
      "An epic adventure combining challenging treks with cultural exploration. Experience Bhutan's most spectacular mountain scenery while staying in comfortable accommodations and enjoying authentic local experiences.",
    itinerary: [
      { day: 1, title: "Arrive Paro", description: "Welcome to Bhutan, hotel check-in" },
      { day: 2, title: "Start Druk Path Trek", description: "Trek to Jele Dzong campsite" },
      { day: 3, title: "Trek to Jangchulakha", description: "High altitude lakes and views" },
      { day: 4, title: "Trek to Jimiling Lake", description: "Yak herder encounters" },
      { day: 5, title: "Complete Trek in Thimphu", description: "Descend to capital city" },
      { day: 6, title: "Thimphu Sightseeing", description: "Explore the capital" },
      { day: 7, title: "Punakha Valley", description: "Drive to Punakha, visit dzong" },
      { day: 8, title: "Bumthang Journey", description: "Scenic drive to spiritual heartland" },
      { day: 9, title: "Bumthang Exploration", description: "Temple tours and meditation" },
      { day: 10, title: "Departure", description: "Return to Paro for departure" },
    ],
    included: ["Trekking equipment", "Porter service", "All meals", "Luxury hotels", "Private vehicle"],
    excluded: ["International flights", "Travel insurance", "Personal gear", "Alcoholic beverages"],
  },
  {
    name: "Spiritual Journey",
    duration: "14 Days / 13 Nights",
    image: "/bhutan-meditation-retreat-peaceful-monastery.jpg",
    features: [
      "Extended monastery visits",
      "Meditation with monks",
      "Remote valley exploration",
      "Bumthang spiritual sites",
      "Traditional archery lesson",
      "5-star luxury lodges",
      "Photography workshops",
    ],
    popular: false,
    groupSize: "2-6 people",
    longDescription:
      "A transformative journey designed for those seeking deep spiritual connection. Spend extended time at monasteries, practice meditation with Buddhist monks, and explore Bhutan's most sacred sites at a contemplative pace.",
    itinerary: [
      { day: 1, title: "Arrival & Orientation", description: "Paro arrival and spiritual briefing" },
      { day: 2, title: "Paro Temples", description: "Visit Kyichu Lhakhang and local monasteries" },
      { day: 3, title: "Tiger's Nest Pilgrimage", description: "Sacred hike and meditation" },
      { day: 4, title: "Thimphu Monasteries", description: "Visit meditation centers" },
      { day: 5, title: "Punakha Spiritual Sites", description: "Chimi Lhakhang and dzong" },
      { day: 6, title: "Journey to Bumthang", description: "Drive through scenic valleys" },
      { day: 7, title: "Bumthang Day 1", description: "Jambay and Kurjey Lhakhang" },
      { day: 8, title: "Bumthang Day 2", description: "Meditation retreat with monks" },
      { day: 9, title: "Bumthang Day 3", description: "Tamshing Goemba spiritual practices" },
      { day: 10, title: "Gangtey Valley", description: "Visit Gangtey Monastery" },
      { day: 11, title: "Phobjikha Nature", description: "Nature meditation and crane watching" },
      { day: 12, title: "Return to Paro", description: "Reflection and photography" },
      { day: 13, title: "Final Blessings", description: "Closing ceremony and traditional arts" },
      { day: 14, title: "Departure", description: "Farewell breakfast and transfer" },
    ],
    included: [
      "Private meditation sessions",
      "Monk interactions",
      "5-star accommodations",
      "Professional photography guide",
      "All ceremonies and blessings",
    ],
    excluded: ["International flights", "Travel insurance", "Personal meditation items"],
  },
  {
    name: "Family Adventure",
    duration: "8 Days / 7 Nights",
    image: "/bhutan-family-tour-children-cultural-activities.jpg",
    features: [
      "Family-friendly activities",
      "Interactive cultural workshops",
      "Easy to moderate hikes",
      "Traditional archery lessons",
      "Kid-friendly accommodations",
      "Flexible itinerary",
    ],
    popular: false,
    groupSize: "Families of 3-8",
    longDescription:
      "A specially designed tour for families with children, combining cultural learning with fun activities. Experience Bhutan's magic through interactive workshops, gentle hikes, and engaging encounters with local traditions.",
    itinerary: [
      { day: 1, title: "Welcome to Bhutan", description: "Family orientation and fun activities" },
      { day: 2, title: "Paro Discovery", description: "National Museum and archery lessons" },
      { day: 3, title: "Mini Tiger's Nest Hike", description: "Hike to viewpoint (child-friendly)" },
      { day: 4, title: "Thimphu Fun Day", description: "Zoo, handicrafts, and local market" },
      { day: 5, title: "Cultural Workshops", description: "Paper making and traditional arts" },
      { day: 6, title: "Punakha Adventure", description: "River walk and dzong exploration" },
      { day: 7, title: "Farmhouse Experience", description: "Stay with local family, cooking class" },
      { day: 8, title: "Farewell", description: "Last-minute shopping and departure" },
    ],
    included: ["Child-friendly guide", "Family rooms", "Activity materials", "Snacks for kids", "Flexible dining"],
    excluded: ["International flights", "Travel insurance", "Extra activities"],
  },
  {
    name: "Photography Expedition",
    duration: "12 Days / 11 Nights",
    image: "/bhutan-photography-tour-landscapes-monks-festivals.jpg",
    features: [
      "Professional photo guide",
      "Sunrise/sunset shoots",
      "Festival photography access",
      "Remote location permits",
      "Photo editing workshops",
      "Premium accommodations",
      "Small group (max 6)",
    ],
    popular: true,
    groupSize: "2-6 photographers",
    longDescription:
      "Capture Bhutan's stunning landscapes and vibrant culture with expert guidance. This photography-focused tour takes you to the most photogenic locations at optimal times, with insider access to festivals and ceremonies.",
    itinerary: [
      { day: 1, title: "Paro Arrival", description: "Equipment check and location scouting" },
      { day: 2, title: "Tiger's Nest Dawn Shoot", description: "Early morning photography session" },
      { day: 3, title: "Paro Valley Landscapes", description: "Mountain scenery and architecture" },
      { day: 4, title: "Thimphu Street Photography", description: "Market and urban scenes" },
      { day: 5, title: "Festival Photography", description: "Exclusive festival access (seasonal)" },
      { day: 6, title: "Punakha Dzong", description: "Golden hour architectural photography" },
      { day: 7, title: "Remote Village", description: "Portrait and lifestyle photography" },
      { day: 8, title: "Bumthang Journey", description: "Scenic drive photography stops" },
      { day: 9, title: "Bumthang Monasteries", description: "Spiritual and cultural photography" },
      { day: 10, title: "Phobjikha Valley", description: "Wildlife and landscape photography" },
      { day: 11, title: "Return to Paro", description: "Final shots and editing workshop" },
      { day: 12, title: "Departure", description: "Photo review and farewell" },
    ],
    included: [
      "Professional photographer guide",
      "Location permits",
      "Editing software access",
      "Portfolio review",
      "Photo printing services",
    ],
    excluded: ["Photography equipment", "Insurance", "International flights"],
  },
]

export function TourPackages() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedTour, setSelectedTour] = useState<(typeof packages)[0] | null>(null)
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
      <section id="packages" className="py-12 md:py-20 px-4 md:px-12 lg:px-24 bg-muted/30" ref={ref}>
        <div className="container mx-auto">
          <div
            className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wide mb-2">Choose Your Journey</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">Tour Packages</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto leading-relaxed px-4">
              Carefully curated experiences that showcase the best of Bhutan's natural beauty, cultural heritage, and
              spiritual traditions
            </p>
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
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`group flex-shrink-0 w-[300px] md:w-[360px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer snap-start ${pkg.popular ? "border-2 border-primary shadow-xl" : "border border-border shadow-lg"
                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedTour(pkg)}
                >
                  <CardContent className="p-0">
                    {pkg.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-1.5 md:py-2 px-3 md:px-4 text-xs md:text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="relative overflow-hidden">
                      <img
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.name}
                        className="w-full h-[200px] md:h-[240px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                      <div>
                        <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground mb-1">{pkg.name}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">{pkg.duration}</p>
                      </div>

                      <ul className="space-y-2 md:space-y-3">
                        {pkg.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground line-clamp-2">{feature}</span>
                          </li>
                        ))}
                        {pkg.features.length > 4 && (
                          <li className="text-xs md:text-sm text-primary font-medium">
                            +{pkg.features.length - 4} more features
                          </li>
                        )}
                      </ul>

                      <Button
                        className={`w-full text-sm md:text-base ${pkg.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          }`}
                        size="lg"
                      >
                        View Details
                      </Button>
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

      {selectedTour && <TourModal tour={selectedTour} isOpen={!!selectedTour} onClose={() => setSelectedTour(null)} />}
    </>
  )
}
