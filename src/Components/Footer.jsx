// import React, { useState } from "react"
// import logo from '../Assets/logo.png'

// export default function Footer() {
//   const [altura, setAltura] = useState("")
//   const [peso, setPeso] = useState("")
//   const [resultado, setResultado] = useState(null)

//   const calcularIMC = (e) => {
//     e.preventDefault()
//     const alturaMetros = altura / 100
//     const imc = peso / (alturaMetros * alturaMetros)
//     setResultado(imc.toFixed(1).padStart(4, '0'))  }

//   return (
//     <footer style={{border:"3px solid green"}} className="bg-[#27AE60]">
//       {/* Conteúdo Principal */}
//       <div className="bg-white p-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img src={logo} alt="Nutricare" className="h-24 md:h-28 object-contain" />
//           </div>

//           {/* Links Rápidos */}
//           <div className="flex-1">
//             <h3 className="text-[#27AE60] font-semibold mb-2">Links Rápidos</h3>
//             <nav className="flex flex-col space-y-1">
//               <a href="/" className="hover:text-[#27AE60] transition-colors">
//                 Home
//               </a>
//               <a href="#sobrenos" className="hover:text-[#27AE60] transition-colors">
//                 Sobre Nós
//               </a>
//               <a href="#especialidades" className="hover:text-[#27AE60] transition-colors">
//                 Especialidades
//               </a>
//               <a href="#receitas" className="hover:text-[#27AE60] transition-colors">
//                 Receitas
//               </a>
            
//             </nav>
//           </div>

//           {/* Calculadora IMC */}
//           <div className="flex-1">
//             <h3 className="text-[#27AE60] font-semibold mb-2">Cálculo de IMC - Índice de Massa Corporal</h3>
//             <form onSubmit={calcularIMC} className="space-y-2">
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <input
//                   type="number"
//                   placeholder="Altura (cm)"
//                   value={altura}
//                   onChange={(e) => setAltura(e.target.value)}
//                   className="p-2 border rounded shadow-sm w-full"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Peso (Kg)"
//                   value={peso}
//                   onChange={(e) => setPeso(e.target.value)}
//                   className="p-2 border rounded shadow-sm w-full"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-[#27AE60] text-white px-6 py-2 rounded hover:bg-[#229954] transition-colors"
//               >
//                 Calcular IMC
//               </button>
//               {resultado && (
//                 <div className="mt-2">
//                   <span className="text-[#27AE60] font-semibold">Seu IMC é: {resultado}</span>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Copyright e Redes Sociais */}
//       <div className="bg-[#27AE60] p-4">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-white text-sm">©2025 Nutricare. Todos os direitos reservados</p>
//           <div className="flex space-x-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-200"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   fillRule="evenodd"
//                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-200"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   fillRule="evenodd"
//                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

"use client"

import { useState } from "react"
import logo from "../Assets/logo.png"

export default function Footer() {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [resultado, setResultado] = useState(null)
  const [classificacao, setClassificacao] = useState("")

  const calcularIMC = (e) => {
    e.preventDefault()
    const alturaMetros = altura / 100
    const imc = peso / (alturaMetros * alturaMetros)
    const imcFormatado = imc.toFixed(1).padStart(4, "0")
    setResultado(imcFormatado)

    // Definir a classificação com base no IMC
    const imcNumerico = Number.parseFloat(imcFormatado)
    if (imcNumerico < 18.5) {
      setClassificacao("Abaixo de 18,5 é considerado baixo peso")
    } else if (imcNumerico >= 18.5 && imcNumerico <= 24.9) {
      setClassificacao("Entre 18,5 e 24,9 é considerado normal")
    } else if (imcNumerico >= 25 && imcNumerico <= 29.9) {
      setClassificacao("Entre 25 e 29,9 é considerado sobrepeso")
    } else if (imcNumerico >= 30 && imcNumerico <= 34.9) {
      setClassificacao("Entre 30 e 34,9 é considerado obesidade grau I")
    } else if (imcNumerico >= 35 && imcNumerico <= 39.9) {
      setClassificacao("Entre 35 e 39,9 é considerado obesidade grau II")
    } else if (imcNumerico >= 40) {
      setClassificacao("Acima de 40 é considerado obesidade grau III")
    }
  }

  return (
    <footer style={{ border: "3px solid green" }} className="bg-[#27AE60]">
      {/* Conteúdo Principal */}
      <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo || "/placeholder.svg"} alt="Nutricare" className="h-24 md:h-28 object-contain" />
          </div>

          {/* Links Rápidos */}
          <div className="flex-1">
            <h3 className="text-[#27AE60] font-semibold mb-2">Links Rápidos</h3>
            <nav className="flex flex-col space-y-1">
              <a href="/" className="hover:text-[#27AE60] transition-colors">
                Home
              </a>
              <a href="#sobrenos" className="hover:text-[#27AE60] transition-colors">
                Sobre Nós
              </a>
              <a href="#especialidades" className="hover:text-[#27AE60] transition-colors">
                Especialidades
              </a>
              <a href="#receitas" className="hover:text-[#27AE60] transition-colors">
                Receitas
              </a>
            </nav>
          </div>

          {/* Calculadora IMC */}
          <div className="flex-1">
            <h3 className="text-[#27AE60] font-semibold mb-2">Cálculo de IMC - Índice de Massa Corporal</h3>
            <form onSubmit={calcularIMC} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="number"
                  placeholder="Altura (cm)"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className="p-2 border rounded shadow-sm w-full"
                />
                <input
                  type="number"
                  placeholder="Peso (Kg)"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className="p-2 border rounded shadow-sm w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-[#27AE60] text-white px-6 py-2 rounded hover:bg-[#229954] transition-colors"
              >
                Calcular IMC
              </button>
              {resultado && (
                <div className="mt-2">
                  <span className="text-[#27AE60] font-semibold">Seu IMC é: {resultado}</span>
                  {classificacao && <p className="text-gray-700 text-sm mt-1">{classificacao}</p>}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright e Redes Sociais */}
      <div className="bg-[#27AE60] p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">©2025 Nutricare. Todos os direitos reservados</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

