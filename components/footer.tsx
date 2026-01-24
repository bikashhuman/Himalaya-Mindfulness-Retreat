import { Facebook, Instagram, Twitter, Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/himalaya-mindfulness-retreat.png"
                  alt="Himalaya Mindfulness Retreat Logo"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <span className="font-serif font-bold text-xl text-foreground">
                Himalaya Mindfulness Retreat
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Your gateway to the Kingdom of Bhutan. Experience authentic culture, pristine nature, and spiritual
              transformation through mindful travel.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#service" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#packages" className="text-muted-foreground hover:text-primary transition-colors">
                  Tour Packages
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Paro Valley
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Thimphu City
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Punakha Dzong
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Tiger's Nest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span>
                <a href="mailto:himalayamindfulnessretreat@gmail.com" className="hover:text-primary transition-colors break-all">
                  himalayamindfulnessretreat@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span>
                <a href="tel:+97517890334" className="hover:text-primary transition-colors">
                  +975 17 890 334
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="font-semibold text-foreground">Address:</span>
                <span>
                  Norzin Lam, Thimphu,
                  <br />
                  Kingdom of Bhutan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Himalaya Mindfulness Retreat Tours & Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="https://www.instagram.com/bikash2.88?igsh=azllNHU0b2g0ZnVk"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
