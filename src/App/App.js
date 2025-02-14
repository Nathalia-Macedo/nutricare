import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeaderProvider } from "../Context/HeaderContext"
import { CarouselProvider } from "../Context/CarrousselContext"
import { ServicesProvider } from "../Context/ServiceContext"
import { BlogPostsProvider } from "../Context/BlogsContext"
import ProfissionaisPage from "../Pages/ProfissionalPage"
import Home from "../Pages/Home"
import RecipesHero from "../Pages/Recipes"
import SingleRecipePage from "../Components/SingleRecipePage"
import ServiceArticle from "../Pages/ServiceArticle"
import BioimpedanciaPage from "../Pages/Bioimpedância"
import BlogPage from "../Pages/BlogPage"
import BlogPost from "../Components/BlogPost"
function App() {
  return (
    <BrowserRouter>
      <HeaderProvider>
        <CarouselProvider>
          <ServicesProvider>
            <BlogPostsProvider>
              <div className="min-h-screen flex flex-col">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profissionais" element={<ProfissionaisPage />} />
                  <Route path="/receitas" element={<RecipesHero />} />
                  <Route path="/services/:serviceId" element={<ServiceArticle />} />
                  <Route path="/receita/:id" element={<SingleRecipePage />} />
                  <Route path="/bioimpedancia" element={<BioimpedanciaPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
              </div>
            </BlogPostsProvider>
          </ServicesProvider>
        </CarouselProvider>
      </HeaderProvider>
    </BrowserRouter>
  )
}

export default App

