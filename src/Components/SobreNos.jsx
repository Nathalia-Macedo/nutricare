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
              Na Nutricare, acreditamos que o verdadeiro cuidado vai além da consulta. Por isso, oferecemos um
              atendimento completo que começa antes mesmo de sua primeira visita e continua após o acompanhamento
              inicial. Nosso objetivo é garantir que você tenha o suporte necessário para alcançar e manter uma vida
              saudável. Com profissionais dedicados e planos personalizados, estamos prontos para transformar sua
              jornada de saúde em um sucesso!
            </p>
           
             <Link className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors font-poppins" to="/profissionais"> Conheça nossas Profissionais</Link> 
           
          </div>
        </div>
      </div>
    </section>
  )
}

