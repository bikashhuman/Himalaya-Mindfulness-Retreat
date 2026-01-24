"use client"

import { X, MapPin, Clock, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DestinationModalProps {
  destination: {
    name: string
    duration: string
    image: string
    description: string
    longDescription?: string
    highlights?: string[]
    bestTime?: string
    activities?: string[]
    rating?: number
  }
  isOpen: boolean
  onClose: () => void
}

export function DestinationModal({ destination, isOpen, onClose }: DestinationModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg md:rounded-xl w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image - Reduced height for mobile */}
        <div className="relative h-56 md:h-80 overflow-hidden rounded-t-lg md:rounded-t-xl">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white h-9 w-9 md:h-10 md:w-10"
            onClick={onClose}
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
            <h2 className="font-serif font-bold text-2xl md:text-4xl mb-1 md:mb-2">{destination.name}</h2>
            <p className="text-sm md:text-lg text-white/90">{destination.description}</p>
          </div>
        </div>

        {/* Content - Reduced padding for mobile */}
        <div className="p-4 md:p-8 space-y-4 md:space-y-6">
          {/* Quick Info - Responsive grid for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground">Duration</p>
                <p className="font-semibold text-xs md:text-sm text-foreground">{destination.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground">Location</p>
                <p className="font-semibold text-xs md:text-sm text-foreground">Bhutan</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground">Rating</p>
                <p className="font-semibold text-xs md:text-sm text-foreground">{destination.rating || "4.9"} / 5</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-muted/50 rounded-lg">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground">Best Time</p>
                <p className="font-semibold text-xs md:text-sm text-foreground">{destination.bestTime || "Mar-May"}</p>
              </div>
            </div>
          </div>

          {/* Description - Smaller font for mobile */}
          <div>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground mb-2 md:mb-3">
              About This Destination
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {destination.longDescription ||
                "Experience the breathtaking beauty and rich cultural heritage of this stunning destination. From ancient monasteries perched on cliff edges to pristine valleys surrounded by snow-capped peaks, this journey offers an unforgettable glimpse into Bhutan's magical landscape and warm hospitality."}
            </p>
          </div>

          {/* Highlights - Better mobile layout */}
          <div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {(
                destination.highlights || [
                  "Visit ancient monasteries and temples",
                  "Trek through pristine mountain valleys",
                  "Experience traditional Bhutanese culture",
                  "Enjoy panoramic Himalayan views",
                  "Interact with local communities",
                  "Taste authentic Bhutanese cuisine",
                ]
              ).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities - Smaller tags for mobile */}
          <div>
            <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">Activities</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {(
                destination.activities || ["Trekking", "Cultural Tours", "Photography", "Meditation", "Nature Walks"]
              ).map((activity, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
