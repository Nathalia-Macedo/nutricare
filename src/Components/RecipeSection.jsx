import { Link } from "react-router-dom"
import "../Components/Recipe.css"
import RecipeCard from "./RecipeCard"
import { recipes } from "../Context/Data"
// export default function RecipesSection() {
//   return (
//     <div id="receitas" className="relative bg-white">
//       {/* Faixa verde superior com recorte circular */}
//       <div className="relative h-24 bg-green-600">
//         <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nutricare-removebg-preview%20(1)%201-pWpCtMvqXNpkAZZsQOAC7ljl8O95Wi.png"
//             alt="Nutricare Logo"
//             className="w-8 h-8"
//           />
//         </div>
//       </div>

//       {/* Folha decorativa */}
//       <div className="absolute top-0 right-0 w-24 md:w-32 lg:w-40">
//         <img
//           src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plant-herb-texture-lush-background-removebg-preview%205-VtMkAuTodhTlNwNHDbbVvL8cT4xazX.png"
//           alt="Decorative Leaf"
//           className="w-full h-auto"
//         />
//       </div>

//       {/* Conteúdo principal */}
//       <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {recipes.slice(0, 3).map((recipe) => (
//             <RecipeCard key={recipe.id} {...recipe} />
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             to="/receitas"
//             className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-block"
//           >
//             Ver todas as receitas
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function RecipesSection() {
  return (
    <div id="receitas" className="relative bg-white">
      {/* Faixa verde superior com recorte circular */}
      <div className="relative h-24 bg-green-600">
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nutricare-removebg-preview%20(1)%201-pWpCtMvqXNpkAZZsQOAC7ljl8O95Wi.png"
            alt="Nutricare Logo"
            className="w-8 h-8"
          />
        </div>
      </div>

      {/* Folha decorativa */}
      <div className="absolute top-0 right-0 w-24 md:w-32 lg:w-40">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plant-herb-texture-lush-background-removebg-preview%205-VtMkAuTodhTlNwNHDbbVvL8cT4xazX.png"
          alt="Decorative Leaf"
          className="w-full h-auto"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/receitas"
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-block"
          >
            Ver todas as receitas
          </Link>
        </div>
      </div>
    </div>
  )
}

