"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-12"
    >
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[700px] h-[400px] sm:h-[500px] md:h-[700px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-20 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          <p
            className={`text-accent font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            The Last Shangri-La
          </p>
          <h1
            className={`font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance text-foreground transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Discover the Kingdom of Bhutan
          </h1>
          <p
            className={`text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Journey to the Land of the Thunder Dragon, where ancient monasteries cling to cliff faces, prayer flags
            dance in mountain winds, and Gross National Happiness guides a nation.
          </p>

        </div>

        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <img
            src="/bhutan-tiger-s-nest-monastery-on-cliff-dramatic-mo.jpg"
            alt="Tiger's Nest Monastery Bhutan"
            className="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl border border-border hover:scale-110 transition-transform duration-300">
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">UNESCO Sites</p>
            <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">15+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
