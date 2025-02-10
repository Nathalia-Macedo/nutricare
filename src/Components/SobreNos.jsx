import React from "react"
import image1 from '../Assets/sobreNos1.png'
import image2 from '../Assets/sobreNos2.png'
import { Link } from "react-router-dom"
export default function AboutSection() {
  return (
    <section id="sobrenos" className="bg-green-600 py-16 px-4 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Images Column */}
          <div className="md:w-1/2 space-y-4 mb-8 md:mb-0">
            <img
              src={image1}
              alt="Mesa de trabalho com notebook e alimentos saudáveis"
              className="w-full h-auto rounded-[32px] max-w-[400px] mx-auto"
            />
            <img
              src={image2}
              alt="Profissionais da Nutricare"
              className="w-full h-auto rounded-[32px] max-w-[400px] mx-auto"
            />
          </div>

          {/* Content Column */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Quem Somos</h2>
            <p className="text-lg mb-8 leading-relaxed font-poppins">
            Acreditamos que a nutrição é a base para uma vida plena e com energia. Por isso, desde 2010, a Nutricare se dedica a transformar a vida de nossos pacientes, através de um cuidado nutricional completo e personalizado.
<br/><br/>
Nossas Nutricionistas são especialistas, experientes e apaixonados pela nutrição está comprometida em ajudar você a conquistar mais saúde, bem-estar e qualidade de vida, através de planos alimentares personalizados e acompanhamento contínuo.
<br/><br/>
Aqui na Nutricare vamos ajudar a alcançar seus objetivos de forma sustentável e prazerosa, seja emagrecer, ganhar massa muscular, controlar doenças crônicas ou simplesmente aprender a se alimentar de forma mais saudável.<br/><br/>
Com a Nutricare, você terá:
<br/><br/>
•	Acompanhamento individualizado e personalizado para suas necessidades e objetivos.
<br/>
•	Plano alimentar completo e adaptado às suas preferências e estilo de vida.<br/>
•	Suporte e motivação para alcançar seus resultados e manter hábitos saudáveis a longo prazo.<br/>
•	Resultados comprovados e uma vida mais leve e saudável.<br/><br/>
Nutricare: invista na sua saúde e bem-estar, e conquiste a vida que você merece!
            </p>
           
             <Link className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors font-poppins" to="/profissionais"> Conheça nossas Profissionais</Link> 
           
          </div>
        </div>
      </div>
    </section>
  )
}

