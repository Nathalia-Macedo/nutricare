import { AgendarConsultaButton } from "./AgendarConsultaButton"
import Footer from "./Footer"
import renata2 from "../Assets/renata2.png"
import nutricareLogo from "../Assets/logo.png"

export default function CtaSection() {
  return (
    <div className="relative bg-white">
      {/* Onda superior */}
      <div className="absolute top-0 left-0 right-0 -mt-1">
        {/* Você pode adicionar o SVG da onda aqui se desejar */}
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-0 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para iniciar sua jornada nutricional?</h2>

        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Agende uma consulta com uma de nossas especialistas e dê o primeiro passo para uma vida mais saudável
        </p>

        <div className="flex justify-center mb-16">
          <AgendarConsultaButton />
        </div>

        <div className="relative">
          <img
            src={renata2 || "/placeholder.svg"}
            alt="Profissional de saúde mostrando resultado positivo"
            className="max-w-md w-full mx-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

