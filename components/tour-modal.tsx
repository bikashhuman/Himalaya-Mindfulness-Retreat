"use client"

import { X, Check, Clock, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TourModalProps {
  tour: {
    name: string
    duration: string
    image: string
    features: string[]
    popular?: boolean
    longDescription?: string
    itinerary?: { day: number; title: string; description: string }[]
    included?: string[]
    excluded?: string[]
    groupSize?: string
  }
  isOpen: boolean
  onClose: () => void
}

export function TourModal({ tour, isOpen, onClose }: TourModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg md:rounded-xl w-full h-full md:max-w-5xl md:h-auto md:max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:grid md:grid-cols-5">
          {/* Left Sidebar */}
          <div className="md:col-span-2 bg-primary/5 p-5 md:p-8 space-y-4 md:space-y-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {tour.popular && (
                  <span className="inline-block bg-primary text-primary-foreground text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full mb-2 md:mb-3 font-semibold">
                    Most Popular
                  </span>
                )}
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-1 md:mb-2">{tour.name}</h2>
                <p className="text-sm md:text-base text-muted-foreground">{tour.duration}</p>
              </div>
              <Button variant="ghost" size="icon" className="hover:bg-white/50 h-9 w-9 flex-shrink-0" onClick={onClose}>
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
              <img src={tour.image || "/placeholder.svg"} alt={tour.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-background rounded-lg">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-xs md:text-sm">{tour.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-background rounded-lg">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Group Size</p>
                  <p className="font-semibold text-xs md:text-sm">{tour.groupSize || "2-12 people"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-background rounded-lg">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold text-xs md:text-sm">Bhutan</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="md:col-span-3 p-5 md:p-8 space-y-4 md:space-y-6">
            {/* Description */}
            <div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">Tour Overview</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {tour.longDescription ||
                  "Embark on an extraordinary journey through Bhutan's most captivating landscapes and cultural treasures. This carefully crafted tour combines adventure, spirituality, and authentic cultural experiences, offering you a deep connection with the Land of the Thunder Dragon."}
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">What's Included</h3>
              <ul className="space-y-1.5 md:space-y-2">
                {tour.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {(
                  tour.included || ["All meals during the tour", "Comfortable transportation", "English-speaking guide"]
                ).map((item, idx) => (
                  <li key={`included-${idx}`} className="flex items-start gap-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Itinerary */}
            <div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">Sample Itinerary</h3>
              <div className="space-y-2 md:space-y-3">
                {(
                  tour.itinerary || [
                    { day: 1, title: "Arrival in Paro", description: "Transfer to hotel and orientation" },
                    { day: 2, title: "Paro Valley Exploration", description: "Visit key cultural sites" },
                    { day: 3, title: "Tiger's Nest Trek", description: "Iconic monastery hike" },
                  ]
                ).map((day, idx) => (
                  <div key={idx} className="flex gap-3 md:gap-4 p-3 md:p-4 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-xs md:text-sm text-primary">D{day.day}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1">{day.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included */}
            {tour.excluded && (
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">Not Included</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {tour.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
