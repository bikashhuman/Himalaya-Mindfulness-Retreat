"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden bg-muted/30" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-primary font-medium text-sm md:text-base uppercase tracking-wider mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about your Bhutan journey? Our travel experts are here to help you plan the perfect
            experience tailored to your desires.
          </p>
        </div>

        <div className="max-w-4xl mx-auto items-start">
          {/* Contact Info Card */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-serif font-bold text-2xl text-foreground mb-6 text-center">
                Let's Plan Your Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Whether you're dreaming of trekking to Tiger's Nest, experiencing a traditional festival, or seeking
                spiritual renewal, we'll craft the perfect itinerary for you.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-muted/50 transition-colors text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Us</p>
                    <a
                      href="mailto:himalayamindfulnessretreat@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      himalayamindfulnessretreat@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-muted/50 transition-colors text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Call Us</p>
                    <a
                      href="tel:+97517890334"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      +975 17 890 334
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-xl hover:bg-muted/50 transition-colors text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Visit Us</p>
                    <p className="text-muted-foreground text-sm">
                      Norzin Lam, Thimphu
                      <br />
                      Kingdom of Bhutan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
