// import { useState } from "react"
// import { Header } from "../Components/Header/Header"
// import Footer from "../Components/Footer"

// export default function Agendamento() {
//   const [formData, setFormData] = useState({
//     nome: "",
//     telefone: "",
//     email: "",
//     profissional: "",
//     especialidade: "",
//   })

//   const profissionais = {
//     "": [],
//     "erica-bastos": ["Nutrição esportiva", "Nutrição clínica", "Reeducação alimentar", "Consulta"],
//     "renata-sanches": ["Nutrição clínica", "Nutrição infantil", "Consulta"],
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => {
//       const newData = { ...prev, [name]: value }
//       if (name === "profissional") {
//         newData.especialidade = ""
//       }
//       return newData
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Aqui você pode adicionar a lógica para enviar para o WhatsApp
//     console.log("Dados do formulário:", formData)
//   }

//   return (
//     <div className="min-h-screen bg-[#27AE60]">
//       <Header />

//       <main className="container mx-auto px-4 py-8">
//         <div className="text-center text-white mb-8">
//           <h1 className="text-3xl font-bold mb-4">Agende sua Consulta</h1>
//           <p className="max-w-2xl mx-auto">
//             Dê o primeiro passo para uma vida mais saudável. Preencha o formulário abaixo e entraremos em contato via
//             WhatsApp para confirmar seu agendamento.
//           </p>
//         </div>

//         <div className="max-w-2xl mx-auto bg-[#229954] p-8 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="nome" className="block text-white mb-2">
//                 Nome Completo
//               </label>
//               <input
//                 type="text"
//                 id="nome"
//                 name="nome"
//                 value={formData.nome}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white"
//                 placeholder="Digite o seu nome completo"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="telefone" className="block text-white mb-2">
//                 Telefone
//               </label>
//               <input
//                 type="tel"
//                 id="telefone"
//                 name="telefone"
//                 value={formData.telefone}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white"
//                 placeholder="(73) 99999-9999"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-white mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white"
//                 placeholder="seu@email.com"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="profissional" className="block text-white mb-2">
//                   Profissional
//                 </label>
//                 <select
//                   id="profissional"
//                   name="profissional"
//                   value={formData.profissional}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white bg-white"
//                   required
//                 >
//                   <option value="">Selecione o profissional</option>
//                   <option value="erica-bastos">Dra. Érica Bastos</option>
//                   <option value="renata-sanches">Dra. Renata Sanches</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="especialidade" className="block text-white mb-2">
//                   Especialidade
//                 </label>
//                 <select
//                   id="especialidade"
//                   name="especialidade"
//                   value={formData.especialidade}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white bg-white"
//                   required
//                   disabled={!formData.profissional}
//                 >
//                   <option value="">Selecione a especialidade</option>
//                   {profissionais[formData.profissional].map((esp) => (
//                     <option key={esp} value={esp}>
//                       {esp}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-white text-[#27AE60] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition-colors duration-300"
//             >
//               Agendar Consulta
//             </button>
//           </form>
//         </div>

//         <p className="text-center text-white mt-6">
//           Ao clicar em "Agendar Consulta", você será redirecionado para o WhatsApp para confirmar seu agendamento.
//         </p>
//       </main>
//       <Footer />
//     </div>
//   )
// }

import { useState, useEffect } from "react"
import { Header } from "../Components/Header/Header"
import Footer from "../Components/Footer"
import { useLocation } from "react-router-dom"

export default function Agendamento() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    profissional: "",
    especialidade: "",
  })

  const profissionais = {
    "": [],
    "erica-bastos": ["Nutrição esportiva", "Nutrição clínica", "Reeducação alimentar"],
    "renata-sanches": ["Nutrição clínica", "Nutrição infantil", "Consulta"],
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const newData = { ...prev, [name]: value }
      if (name === "profissional") {
        newData.especialidade = ""
      }
      return newData
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar para o WhatsApp
    console.log("Dados do formulário:", formData)
  }

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const prefilledProfissional = searchParams.get("profissional")

  useEffect(() => {
    if (prefilledProfissional) {
      setFormData((prev) => ({
        ...prev,
        profissional: prefilledProfissional,
      }))
    }
  }, [prefilledProfissional])

  return (
    <div className="min-h-screen bg-[#27AE60]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl font-bold mb-4">Agende sua Consulta</h1>
          <p className="max-w-2xl mx-auto">
            Dê o primeiro passo para uma vida mais saudável. Preencha o formulário abaixo e entraremos em contato via
            WhatsApp para confirmar seu agendamento.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#229954] p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-white mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white"
                placeholder="Digite o seu nome completo"
                required
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-white mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white"
                placeholder="(73) 99999-9999"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="profissional" className="block text-white mb-2">
                  Profissional
                </label>
                <select
                  id="profissional"
                  name="profissional"
                  value={formData.profissional || ""} // Added default value
                  onChange={handleChange}
                  className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white bg-white"
                  required
                >
                  <option value="">Selecione o profissional</option>
                  <option value="erica-bastos">Dra. Érica Bastos</option>
                  <option value="renata-sanches">Dra. Renata Sanches</option>
                </select>
              </div>

              <div>
                <label htmlFor="especialidade" className="block text-white mb-2">
                  Especialidade
                </label>
                <select
                  id="especialidade"
                  name="especialidade"
                  value={formData.especialidade}
                  onChange={handleChange}
                  className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-white bg-white"
                  required
                  disabled={!formData.profissional}
                >
                  <option value="">Selecione a especialidade</option>
                  {profissionais[formData.profissional].map((esp) => (
                    <option key={esp} value={esp}>
                      {esp}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#27AE60] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition-colors duration-300"
            >
              Agendar Consulta
            </button>
          </form>
        </div>

        <p className="text-center text-white mt-6">
          Ao clicar em "Agendar Consulta", você será redirecionado para o WhatsApp para confirmar seu agendamento.
        </p>
      </main>
      <Footer />
    </div>
  )
}

