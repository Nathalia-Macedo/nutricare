import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { recipes } from "../Context/Data"

export default function RecipeDetailsPage() {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === parseInt(id || '0'))
  const suggestedRecipe = recipes.find(r => r.id !== recipe?.id) || recipes[0]

  if (!recipe) {
    return <div className="text-center py-12">Receita não encontrada.</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6">
        <ArrowLeft className="mr-2" />
        Voltar para todas as receitas
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={recipe.image || "/placeholder.svg"} 
          alt={recipe.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-4">{recipe.description}</p>
          <p className="text-sm font-semibold mb-4">Tempo de preparo: {recipe.prepTime}</p>
          
          <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
          <ul className="list-disc pl-5 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">{ingredient}</li>
            ))}
          </ul>
          
          <h2 className="text-xl font-semibold mb-2">Instruções:</h2>
          <ol className="list-decimal pl-5 mb-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">{instruction}</li>
            ))}
          </ol>
          
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">Sugestão de Receita</h2>
            <Link to={`/receita/${suggestedRecipe.id}`} className="block">
              <div className="bg-green-100 rounded-lg p-4 hover:bg-green-200 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{suggestedRecipe.title}</h3>
                <p className="text-gray-600">{suggestedRecipe.description}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}