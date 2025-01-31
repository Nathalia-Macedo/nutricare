import React from "react"
import { Header } from "../Components/Header/Header"
import HeroCarousel from "../Components/HeroSection/HeroCarrossel"
import AboutSection from "../Components/SobreNos"
import ServicesList from "../Components/ServiceList"
import Footer from "../Components/Footer"
import RecipesSection from "../Components/RecipeSection"
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <Header />
      {/* <HeroCarousel/> */}
      <AboutSection />
      <RecipesSection/>
      <ServicesList />
      <Footer />
    </div>
  )
}

