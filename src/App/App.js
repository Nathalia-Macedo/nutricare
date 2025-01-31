import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeaderProvider } from "../Context/HeaderContext"
import { CarouselProvider } from "../Context/CarrousselContext"
import { ServicesProvider } from "../Context/ServiceContext"
import ProfessionalProfile from "../Components/SectionProfissional"
import Home from "../Pages/Home"
import Agendamento from "../Pages/Agendamento"
import RecipesHero from "../Pages/Recipes"
import RecipePage from "../Components/RecipesPage"
import SingleRecipePage from "../Components/SingleRecipePage"
import ServiceArticle from "../Pages/ServiceArticle"
function App() {
  return (
    <BrowserRouter>
      <HeaderProvider>
        <CarouselProvider>
          <ServicesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agendamento" element={<Agendamento />} />
              <Route path="/profissionais" element={<ProfessionalProfile/>}/>
              <Route path="/receitas" element={<RecipesHero />} />
              <Route path="/services/:serviceId" element={<ServiceArticle />} />
              <Route path="/receita/:id" element={<SingleRecipePage />} />
              </Routes>
          </ServicesProvider>
        </CarouselProvider>
      </HeaderProvider>
    </BrowserRouter>
  )
}

export default App

