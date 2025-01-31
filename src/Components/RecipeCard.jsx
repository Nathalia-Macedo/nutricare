// import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
// export default function RecipeCard({ id, image, title }) {

//   const navigate = useNavigate()

//   const handleClick = () => {
//     navigate(`/receita/${id}`)
//     window.scrollTo(0, 0)
//   }
//   return (
//     <div className="bg-white rounded-[32px] shadow-md hover:shadow-lg transition-all duration-300">
//       <div className="p-6 flex flex-col items-center">
//         <div className="w-48 h-48 rounded-full border-8 border-gray-50 shadow-inner overflow-hidden mb-4">
//           <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
//         </div>
//         <h3 className="text-green-600 font-medium text-lg mb-3 text-center">{title}</h3>
//         <Link onClick={handleClick} to={`/receita/${id}`} className="text-gray-600 hover:text-green-600 transition-colors text-sm">
//           Ver Receita Completa
//         </Link>
//       </div>
//     </div>
//   )
// }

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function RecipeCard({ id, image, title }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/receita/${id}`)
    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      className="bg-white rounded-[32px] shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="p-6 flex flex-col items-center">
        <motion.div
          className="w-48 h-48 rounded-full border-8 border-gray-50 shadow-inner overflow-hidden mb-4"
          whileHover={{
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </motion.div>
        <h3 className="text-green-600 font-medium text-lg mb-3 text-center">{title}</h3>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          <Link
            onClick={handleClick}
            to={`/receita/${id}`}
            className="text-gray-600 hover:text-green-600 transition-colors text-sm"
          >
            Ver Receita Completa
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

