import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://himalayamindfulnessretreat.bt"),
  title: "Himalaya Mindfulness Retreat Tours & Travels - Discover Bhutan | Premium Tours",
  description:
    "Experience the magic of Bhutan with Himalaya Mindfulness Retreat Tours & Travels. Explore ancient monasteries, pristine valleys, and immerse yourself in Gross National Happiness. Book your transformative journey to the Last Himalayan Kingdom today.",
  keywords: [
    "Bhutan tours",
    "Bhutan travel",
    "Tiger's Nest monastery",
    "Bhutan vacation packages",
    "Himalayan travel",
    "cultural tours Bhutan",
    "Paro Taktsang",
    "Thimphu tours",
    "Bhutan trekking",
    "spiritual tourism",
    "Gross National Happiness",
    "Bhutan festivals",
    "mindfulness retreat",
    "Himalaya tours",
  ],
  authors: [{ name: "Himalaya Mindfulness Retreat Tours & Travels" }],
  creator: "Himalaya Mindfulness Retreat",
  publisher: "Himalaya Mindfulness Retreat Tours & Travels",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himalayamindfulnessretreat.bt",
    siteName: "Himalaya Mindfulness Retreat Tours & Travels",
    title: "Himalaya Mindfulness Retreat - Discover Bhutan Premium Tours",
    description:
      "Experience the magic of Bhutan with premium guided tours. Explore ancient monasteries, pristine valleys, and immerse yourself in Gross National Happiness.",
    images: [
      {
        url: "/bhutan-tiger-s-nest-monastery-on-cliff-dramatic-mo.jpg",
        width: 1200,
        height: 630,
        alt: "Tiger's Nest Monastery in Bhutan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalaya Mindfulness Retreat - Discover Bhutan Premium Tours",
    description:
      "Experience the magic of Bhutan with premium guided tours. Explore ancient monasteries and pristine valleys.",
    images: ["/bhutan-tiger-s-nest-monastery-on-cliff-dramatic-mo.jpg"],
  },
  alternates: {
    canonical: "https://himalayamindfulnessretreat.bt",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F766E" },
    { media: "(prefers-color-scheme: dark)", color: "#0F766E" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Himalaya Mindfulness Retreat Tours & Travels",
              description:
                "Premium Bhutan tour operator offering cultural experiences, trekking, spiritual journeys, and mindfulness retreats in the Land of the Thunder Dragon.",
              url: "https://himalayamindfulnessretreat.bt",
              telephone: "+975-17-123-456",
              email: "info@himalayamindfulness.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Norzin Lam",
                addressLocality: "Thimphu",
                addressCountry: "BT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.4728",
                longitude: "89.6393",
              },
              areaServed: {
                "@type": "Country",
                name: "Bhutan",
              },
              priceRange: "$$$",
              sameAs: [
                "https://www.facebook.com/himalayamindfulness",
                "https://www.instagram.com/himalayamindfulness",
                "https://twitter.com/himalayamindfulness",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
