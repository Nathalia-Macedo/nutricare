import { Calendar, Award, Users } from "lucide-react"
import {useEffect} from 'react'
const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 group">
    <div className="flex justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
      <Icon className="w-16 h-16 text-white" />
    </div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-white/90 text-base lg:text-lg">{description}</p>
  </div>
)

export default function WhyChooseUs() {
  useEffect(() => {
    console.log('Por que nos escolher montado');
  }, []);
  return (
    <div className="relative bg-green-600 pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-20">
          Por que Escolher Nossas
          <br />
          Profissionais?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={Calendar}
            title="Atendimento Personalizado"
            description="Planos nutricionais adaptados às suas necessidades e objetivos específicos."
          />
          <Card
            icon={Award}
            title="Experiência Comprovada"
            description="Anos de prática clínica e formação acadêmica de excelência."
          />
          <Card
            icon={Users}
            title="Abordagem Holística"
            description="Consideramos todos os aspectos da sua saúde e estilo de vida."
          />
        </div>
      </div>

      {/* Onda decorativa */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

