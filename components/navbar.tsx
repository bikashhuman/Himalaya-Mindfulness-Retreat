"use client"

import type React from "react"

import { Mountain, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  const [prevSectionIndex, setPrevSectionIndex] = useState(0)
  const [isManualScrolling, setIsManualScrolling] = useState(false)

  // Map section names to indices for direction calculation
  const sectionIndices: Record<string, number> = {
    home: 0,
    service: 1,
    destinations: 2,
    packages: 3,
    contact: 4,
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (isManualScrolling) return

      const sections = ["home", "service", "destinations", "packages", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeSection !== section) {
              const newIndex = sectionIndices[section]
              const currentIndex = sectionIndices[activeSection]

              if (newIndex > currentIndex) {
                setSlideDirection("right") // Moving forward (left-to-right visual flow) uses slide-in-from-left
              } else {
                setSlideDirection("left") // Moving backward (right-to-left visual flow) uses slide-in-from-right
              }
              setActiveSection(section)
            }
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, isManualScrolling])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      setIsManualScrolling(true)
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offsetTop, behavior: "smooth" })

      const newIndex = sectionIndices[href.substring(1)]
      const currentIndex = sectionIndices[activeSection]

      if (newIndex > currentIndex) {
        setSlideDirection("right")
      } else {
        setSlideDirection("left")
      }
      setActiveSection(href.substring(1))

      setTimeout(() => {
        setIsManualScrolling(false)
      }, 1000)
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: "#home", label: "Home", section: "home" },
    { href: "#service", label: "Service", section: "service" },
    { href: "#destinations", label: "Destinations", section: "destinations" },
    { href: "#packages", label: "Packages", section: "packages" },
    { href: "#contact", label: "Contact Us", section: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-12 lg:px-24 py-4 md:py-6 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-background/95 shadow-lg" : "backdrop-blur-sm bg-background/50"
        }`}
    >
      <div className="flex items-center gap-2 md:gap-3">
        <img
          src="/himalaya-mindfulness-retreat.png"
          alt="Himalaya Mindfulness Retreat Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
        <span className="font-serif font-bold text-lg md:text-2xl text-foreground">Himalaya Mindfulness Retreat</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.section}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`text-foreground hover:text-primary transition-colors font-medium relative ${activeSection === link.section ? "text-primary" : ""
              }`}
          >
            {link.label}
            {activeSection === link.section && (
              <span
                className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-primary animate-in duration-300 ${slideDirection === "right" ? "slide-in-from-left" : "slide-in-from-right"
                  }`}
              />
            )}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-6 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium ${activeSection === link.section ? "text-primary bg-primary/5" : ""
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
