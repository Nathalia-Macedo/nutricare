import { GraduationCap } from "lucide-react"
import Erica from '../Assets/Erica.png'
import { Link } from "react-router-dom"
import {useEffect} from 'react'
export default function EricaProfile() {
  useEffect(() => {
    console.log('Erica montado');
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row-reverse gap-8 md:gap-12">
      <div className="relative flex-1 md:-mr-8">
        <img
          src={Erica}
          alt="Dra. Érica Bastos"
          className="relative z-10 w-full h-auto object-cover"
        />
      </div>

      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Dra. Érica Bastos</h3>
          <p className="text-green-600 font-medium">Nutricionista Clínica e Esportiva</p>
        </div>

        <p className="text-gray-600">
          Especialista em saúde da mulher, com foco em TPM, Menopausa, SOP, Endometriose, Mioma, Emagrecimento e
          Fertilidade. Atendimento online e presencial.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Saúde da Mulher</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nutrição Esportiva</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nutrição Funcional</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Infertilidade</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-green-600" />
            <span>Graduada em Nutrição - UNEB</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="text-green-600" />
            <span>Especialização em Nutrição Esportiva Funcional - VP Consultoria</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="text-green-600" />
            <span>Especialização em Nutrição Clínica e Terapia Nutricional - GANEP</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="text-green-600" />
            <span>Formação em Coaching Nutricional</span>
          </div>
        </div>

        <Link
          to="/agendamento?profissional=erica-bastos"
          className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors text-center"
        >
          Agendar consulta com Érica
        </Link>
      </div>
    </div>
  )
}

