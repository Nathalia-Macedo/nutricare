import { Clock, Activity, BarChartIcon as ChartBar, Scale, Heart, Zap } from "lucide-react"
import { AgendarConsultaButton } from "../Components/AgendarConsultaButton"
import Footer from "../Components/Footer"
import bio from '../Assets/bio.png'
import bio2 from '../Assets/bio2.png'
import Header from "../Components/Header/Header"
export default function BioimpedanciaPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Conheça seu corpo em detalhes com exame de bioimpedância InBody270
                </h1>
                <p className="text-xl text-gray-600">
                  Descubra sua composição corporal de forma precisa e rápida. Em apenas 15 segundos, você terá uma
                  análise completa que vai transformar sua jornada de saúde.
                </p>
                <div className="pt-4">
                  <AgendarConsultaButton className="text-lg" />
                </div>
              </div>
              <div className="relative">
                <img
                  src={bio}
                  alt="InBody270 Bioimpedância"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Por que fazer a Bioimpedância?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-green-100 rounded-full">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Rápido e Indolor</h3>
                <p className="text-gray-600">Exame completo em apenas 15 segundos, sem qualquer desconforto</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-green-100 rounded-full">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Precisão Avançada</h3>
                <p className="text-gray-600">Tecnologia multifrequencial para resultados extremamente precisos</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-green-100 rounded-full">
                  <ChartBar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Resultados Detalhados</h3>
                <p className="text-gray-600">
                  Análise completa da sua composição corporal em formato fácil de entender
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como funciona o exame?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Preparação Simples</h3>
                    <p className="text-gray-600">
                      Basta subir na plataforma, segurar os eletrodos e manter-se em posição por alguns segundos
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Análise Rápida</h3>
                    <p className="text-gray-600">O equipamento realiza a análise completa em apenas 15 segundos</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Resultados Imediatos</h3>
                    <p className="text-gray-600">
                      Receba um relatório completo com todos os dados da sua composição corporal
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={bio2}
                  alt="Demonstração do exame"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">O que você descobre com o exame?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Scale, title: "Composição Corporal", desc: "Água, proteína, minerais e massa de gordura" },
                { icon: Heart, title: "Análise Segmentada", desc: "Massa magra e gordura de cada parte do corpo" },
                { icon: Zap, title: "Metabolismo", desc: "Taxa metabólica basal e nível de gordura visceral" },
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg space-y-4">
                  <div className="inline-block p-3 bg-green-100 rounded-full">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para conhecer melhor seu corpo?</h2>
            <p className="text-xl text-white mb-8">
              Agende sua consulta hoje mesmo e faça seu exame de bioimpedância com nossas especialistas
            </p>
            <AgendarConsultaButton style={{color:"green", backgroundColor:"wite"}} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

