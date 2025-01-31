import React from "react"
import { Link } from "react-router-dom"

export function AgendarConsultaButton({ className = "" }) {
  return (
    <Link
      to="/agendamento"
      className={`bg-[#27AE60] text-white px-6 py-2 rounded-md hover:bg-[#229954] transition-colors flex items-center justify-center space-x-2 ${className}`}
    >
      <i className="material-icons">event</i>
      <span>Agendar Consulta</span>
    </Link>
  )
}

