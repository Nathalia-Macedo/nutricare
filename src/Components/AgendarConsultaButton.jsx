// import React from "react"
// import { Link } from "react-router-dom"

// export function AgendarConsultaButton({ className = "" }) {
//   return (
//     <Link
//       to="/agendamento"
//       className={`bg-[#27AE60] text-white px-6 py-2 rounded-md hover:bg-[#229954] transition-colors flex items-center justify-center space-x-2 ${className}`}
//     >
//       <i className="material-icons">event</i>
//       <span>Agendar Consulta</span>
//     </Link>
//   )
// }

export function AgendarConsultaButton({ className = "" }) {
  const phoneNumber = "5571988503333" // Format: country code (55) + DDD (71) + number without special characters
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#27AE60] text-white px-6 py-2 rounded-md hover:bg-[#229954] transition-colors flex items-center justify-center space-x-2 ${className}`}
    >
      <i className="material-icons"></i>
      <span>Agendar Consulta</span>
    </a>
  )
}

