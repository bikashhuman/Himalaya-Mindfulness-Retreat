import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="relative bg-primary rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Subscribe For Travel Inspiration
            </h2>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Receive exclusive Bhutan travel tips, festival updates, and special offers delivered to your inbox
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-primary-foreground text-foreground border-0 rounded-lg px-6 py-6 text-base"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-8 whitespace-nowrap font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
