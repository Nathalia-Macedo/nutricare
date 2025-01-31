
  
// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { Search } from 'lucide-react'
// import nutricareLogo from "../Assets/logo.png"
// import { recipes } from "../Context/Data"

// const categories = [
//   "Todas",
//   "Baixa Caloria",
//   "Rica em Proteina",
//   "Sem Glúten",
//   "Vegetariana",
//   "Vegana",
//   "Sobremesa Fit",
// ]

// function RecipeCard({ recipe, index }) {
//   const cardStyles = [
//     "bg-green-100 text-green-800",
//     "bg-blue-100 text-blue-800",
//     "bg-yellow-100 text-yellow-800",
//     "bg-red-100 text-red-800",
//   ]

//   const cardStyle = cardStyles[index % cardStyles.length]

//   return (
//     <Link to={`/receita/${recipe.id}`} className="block">
//       <div
//         className={`h-full ${cardStyle} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300`}
//       >
//         <div className="relative pb-48 overflow-hidden">
//           <img
//             className="absolute inset-0 h-full w-full object-cover"
//             src={recipe.image || "/placeholder.svg"}
//             alt={recipe.title}
//             onError={(e) => {
//               e.target.onerror = null
//               e.target.src = "/placeholder.svg"
//             }}
//           />
//         </div>
//         <div className="p-4">
//           <h2 className="font-bold text-xl mb-2 line-clamp-1">{recipe.title}</h2>
//           <p className="text-sm mb-2 line-clamp-2">{recipe.description}</p>
//           <p className="text-xs font-semibold">Tempo de preparo: {recipe.prepTime}</p>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default function RecipePage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [activeCategory, setActiveCategory] = useState("Todas")
//   const [filteredRecipes, setFilteredRecipes] = useState(recipes)

//   useEffect(() => {
//     const filtered = recipes.filter((recipe) => {
//       const matchesCategory = activeCategory === "Todas" || recipe.categories.includes(activeCategory)
//       const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
//       return matchesCategory && matchesSearch
//     })
//     setFilteredRecipes(filtered)
//   }, [activeCategory, searchTerm])

//   return (
//     <div className="w-full min-h-screen bg-white">
//       <div className="w-full px-4 py-8">
//         {/* Logo and Title */}
//         <div className="text-center mb-8">
//           <img src={nutricareLogo || "/placeholder.svg"} alt="Nutricare" className="h-12 mx-auto mb-6" />
//           <h1 className="text-3xl font-bold mb-2">Nossas Receitas</h1>
//           <p className="text-gray-600">Descubra receitas saudáveis e deliciosas para todos os gostos e necessidades</p>
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-3xl mx-auto relative mb-6">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Buscar receitas"
//             className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Categories */}
//         <div className="max-w-5xl mx-auto flex flex-wrap gap-2 mb-8 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-full text-sm transition-colors ${
//                 activeCategory === category
//                   ? "bg-green-600 text-white"
//                   : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
//               }`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Recipe Grid */}
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredRecipes.map((recipe, index) => (
//               <RecipeCard key={recipe.id} recipe={recipe} index={index} />
//             ))}
//           </div>

//           {filteredRecipes.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-500">Nenhuma receita encontrada para esta categoria.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import nutricareLogo from "../Assets/logo.png"
import { recipes } from "../Context/Data"

const categories = [
  "Todas",
  "Baixa Caloria",
  "Rica em Proteina",
  "Sem Glúten",
  "Vegetariana",
  "Vegana",
  "Sobremesa Fit",
]

function RecipeCard({ recipe, index }) {
  const cardStyles = [
    "bg-green-100 text-green-800",
    "bg-blue-100 text-blue-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
  ]

  const cardStyle = cardStyles[index % cardStyles.length]

  return (
    <Link to={`/receita/${recipe.id}`} className="block">
      <div
        className={`h-full ${cardStyle} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300`}
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "/placeholder.svg"
            }}
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 line-clamp-1">{recipe.title}</h2>
          <p className="text-sm mb-2 line-clamp-2">{recipe.description}</p>
          <p className="text-xs font-semibold">Tempo de preparo: {recipe.prepTime}</p>
        </div>
      </div>
    </Link>
  )
}

export default function RecipePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)

  useEffect(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesCategory = activeCategory === "Todas" || recipe.categories.includes(activeCategory)
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredRecipes(filtered)
  }, [activeCategory, searchTerm])

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full px-4 py-4">
        {" "}
        {/* Reduced top padding */}
        {/* Logo and Title */}
        <div className="text-center mb-6">
          {" "}
          {/* Reduced bottom margin */}
          <img src={nutricareLogo || "/placeholder.svg"} alt="Nutricare" className="h-20 mx-auto mb-4" />{" "}
          {/* Increased logo size and reduced bottom margin */}
          <h1 className="text-3xl font-bold mb-2">Nossas Receitas</h1>
          <p className="text-gray-600">Descubra receitas saudáveis e deliciosas para todos os gostos e necessidades</p>
        </div>
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar receitas"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Categories */}
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Recipe Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma receita encontrada para esta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

