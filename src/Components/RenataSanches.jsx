import { Link } from "react-router-dom"
import { GraduationCap } from "lucide-react";
import renata from '../Assets/renata.png'
function RenataSection(){
    return(
<div  className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="relative flex-1 md:-ml-8">
          <img
            src={renata || "/placeholder.svg"}
            alt="Professional healthcare provider"
            className="relative z-10 w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">Nossos Profissionais</h2>

          <p className="text-gray-600">
            Conheça nossa equipe de nutricionistas altamente qualificadas, dedicadas a proporcionar o melhor atendimento
            e orientação nutricional personalizada para você.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dra. Renata Sanches</h3>
            <p className="text-green-600 font-medium">Nutricionista Clínica e Diretora Técnica</p>

            <p className="text-gray-600">
              Especialista em diabetes, obesidade e hipertensão, com vasta experiência em nutrição clínica e gestão de
              unidades de alimentação.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Diabetes</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Obesidade</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Hipertensão</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nutrição Clínica</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-green-600" />
                <span>Nutricionista formada pela UFBA</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-green-600" />
                <span>Pós-Graduação em Nutrição Clínica - IPCE</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-green-600" />
                <span>Pós-Graduação em Educadores em Diabetes - Unip</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>CRN5/1814</span>
              </div>
            </div>

            <Link
            to="/agendamento?profissional=renata-sanches"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors"
          >   Agendar consulta com Renata
          </Link>
          </div>
        </div>
      </div>
    )
    
}

export default RenataSection;