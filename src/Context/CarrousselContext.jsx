"use client"

import { createContext, useContext, useState } from "react"

const CarouselContext = createContext()

const heroSlides = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20164%20(1)-Wc1doLUIYCx0Ph8licOcDiWHJUh2Dx.png",
    alt: "Transforme sua Saúde com Nutrição Personalizada",
  },
  // More slides can be added here later
]

export function CarouselProvider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <CarouselContext.Provider
      value={{
        slides: heroSlides,
        currentSlide,
        nextSlide,
        previousSlide,
        goToSlide,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider")
  }
  return context
}

