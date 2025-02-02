import { useParams, Link } from "react-router-dom"
import { useServices } from "../Context/ServiceContext"
import { Calendar, ChevronLeft, Clock } from 'lucide-react'
import { SecondaryHeader } from "../Components/Header/SecondaryHeader"
import { AgendarConsultaButton } from "../Components/AgendarConsultaButton"
import { useNavigate } from "react-router-dom"
import Footer from "../Components/Footer"
export default function ServiceArticle() {
  const { serviceId } = useParams()
  const { services } = useServices()
    const navigate = useNavigate()
  const service = services.find((s) => s.link === `/services/${serviceId}`)

  if (!service) {
    return <div>Artigo não encontrado</div>
  }

  const paragraphs = service.articleText.split("\n\n").filter((p) => p.trim())

  // Artigos relacionados mockados (você pode mover isso para o contexto depois)
  const relatedArticles = [
    {
      title: "Nutrição na Gravidez: O que você precisa saber",
      description: "Descubra os nutrientes essenciais para uma gravidez saudável",
      link: "/services/gestante",
    },
    {
      title: "Combatendo a TPM com alimentação",
      description: "Alimentos que podem ajudar a aliviar os sintomas da TPM",
      link: "/services/saude-mulher",
    },
    {
      title: "Menopausa e Nutrição: Mantendo-se saudável",
      description: "Dicas nutricionais para uma transição suave e saudável",
      link: "/services/menopausa",
    },
  ]
  const handleBackToHome = () => {
    navigate('/')
    setTimeout(() => {
      const especialidadesSection = document.getElementById('especialidades')
      if (especialidadesSection) {
        especialidadesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Aguarda 100ms para garantir que a página inicial tenha carregado
  }
  return (
    <>
      <SecondaryHeader />
      <div className="container mx-auto px-4 py-4">
         <Link  onClick={handleBackToHome}
     to="/" 
     className="inline-flex items-center text-[#31A431] hover:text-[#2b932b] transition-colors"
   >
     <ChevronLeft className="w-5 h-5 mr-1" />
     Voltar para tela Inicial
   </Link>
      </div>
      <div className="relative bg-white min-h-screen">
        {/* Background Decorations */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20(2)-s7iKwZVD0IiUPMgjlrEujNjvXpnxoK.png"
          alt=""
          className="absolute left-0 top-0 w-48 opacity-20 z-0"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20(3)-9QwQZyRzXBWwkxe6LQr91a78qEKz9a.png"
          alt=""
          className="absolute right-0 bottom-0 w-48 opacity-20"
        />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={service.articleImage || service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
  <span className="flex items-center">
    <Calendar className="w-4 h-4 mr-1" />
    22 jun 2023
  </span>
  <span className="flex items-center">
    <Clock className="w-4 h-4 mr-1" />
    5min de leitura
  </span>
</div>
                  <div className="prose max-w-none space-y-6">
                    {paragraphs.map((paragraph, index) => (
                      <div
                        key={index}
                        className={`relative pl-6 ${
                          index % 2 === 0
                            ? 'before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#31A431]'
                            : ""
                        }`}
                      >
                        <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-4">
                {/* Appointment Card */}
                <div className="bg-[#E8FFE8] rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Agende sua consulta</h3>
                  <p className="text-gray-600 mb-4">Cuide da sua saúde com uma consulta especializada</p>
                  <p className="text-gray-600 mb-6">
                    Descubra como uma alimentação equilibrada pode transformar sua saúde. Agende uma consulta
                    personalizada hoje mesmo!
                  </p>
              <AgendarConsultaButton/>
                </div>

                {/* Related Articles Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Artigos Relacionados</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article, index) => (
                      <a key={index} href={article.link} className="block">
                        <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                        <p className="text-sm text-gray-500">{article.description}</p>
                      </a>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-2 px-4 border border-[#31A431] text-[#31A431] rounded-lg hover:bg-[#E8FFE8] transition-colors">
                    Ver todos os artigos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

