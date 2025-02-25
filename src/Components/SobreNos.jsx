import image1 from "../Assets/sobreNos1.png"
import image2 from "../Assets/sobreNos2.png"
import { Link } from "react-router-dom"

export default function AboutSection() {
  return (
    <section id="sobrenos" className="bg-green-600 py-16 px-4 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
          {/* Images Column */}
          <div className="lg:w-1/2 space-y-8 mb-8 lg:mb-0 flex flex-col items-center">
            <img
              src={image1 || "/placeholder.svg"}
              alt="Mesa de trabalho com notebook e alimentos saudáveis"
              className="w-full h-auto rounded-[32px] max-w-[500px] shadow-lg"
            />
            <img
              src={image2 || "/placeholder.svg"}
              alt="Profissionais da Nutricare"
              className="w-full h-auto rounded-[32px] max-w-[500px] shadow-lg"
            />
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Quem Somos</h2>
            <div className="text-lg mb-8 leading-relaxed font-poppins space-y-4">
              <p>
                Acreditamos que a nutrição é a base para uma vida plena e com energia. Por isso, desde 2010, a Nutricare
                se dedica a transformar a vida de nossos pacientes, através de um cuidado nutricional completo e
                personalizado.
              </p>
              <p>
                Nossas Nutricionistas são especialistas, experientes e apaixonadas pela nutrição, estão comprometidas em
                ajudar você a conquistar mais saúde, bem-estar e qualidade de vida, através de planos alimentares
                personalizados e acompanhamento contínuo.
              </p>
              <p>
                Aqui na Nutricare vamos ajudar a alcançar seus objetivos de forma sustentável e prazerosa, seja
                emagrecer, ganhar massa muscular, controlar doenças crônicas ou simplesmente aprender a se alimentar de
                forma mais saudável.
              </p>
              <p>Com a Nutricare, você terá:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acompanhamento individualizado e personalizado para suas necessidades e objetivos.</li>
                <li>Plano alimentar completo e adaptado às suas preferências e estilo de vida.</li>
                <li>Suporte e motivação para alcançar seus resultados e manter hábitos saudáveis a longo prazo.</li>
                <li>Resultados comprovados e uma vida mais leve e saudável.</li>
              </ul>
              <p>Nutricare: invista na sua saúde e bem-estar, e conquiste a vida que você merece!</p>
            </div>

            <Link
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors font-poppins"
              to="/profissionais"
            >
              Conheça nossas Profissionais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

