import { useParams, Link, useNavigate } from "react-router-dom"
import {useEffect} from 'react'
import { ArrowRight, Clock, Users, ArrowLeft } from "lucide-react"
import { recipes } from "../Context/Data"
import Header from "./Header/Header"
import Footer from "../Components/Footer"
export default function SingleRecipePage() {
  
  const { id } = useParams()
  const currentIndex = recipes.findIndex((r) => r.id === Number.parseInt(id))
  const suggestedRecipe = recipes[(currentIndex + 1) % recipes.length]
  const recipe = recipes.find((r) => r.id === Number.parseInt(id))
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const handleBackToRecipes = () => {
    navigate('/receitas')
    setTimeout(() => {
      const recipesSection = document.getElementById("receitas")
      if (recipesSection) {
        recipesSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  if (!recipe) {
    return <div className="text-center py-12">Receita não encontrada.</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={handleBackToRecipes}
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para as receitas
          </button>

          <h1 className="text-4xl font-bold mb-6 text-green-600">{recipe.title}</h1>
          <div className="mb-8 relative">
            <img
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-600 mr-2" />
                <span>4 porções</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 text-lg">{recipe.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Ingredientes</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Instruções</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p>{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Receita Sugerida</h2>
            <Link
              to={`/receita/${suggestedRecipe.id}`}
              className="flex items-center justify-between hover:bg-green-100 p-4 rounded-lg transition-colors"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{suggestedRecipe.title}</h3>
                <p className="text-gray-600">{suggestedRecipe.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-green-600" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

