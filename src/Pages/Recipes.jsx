import { Clock, Utensils, Coffee } from 'lucide-react'
import RecipePage from "../Components/RecipesPage"
import { SecondaryHeader } from "../Components/Header/SecondaryHeader"
import Footer from "../Components/Footer"

export default function RecipesHero() {
  return (
    <>
      <SecondaryHeader />
      <div className="relative bg-[#FFB84D] overflow-hidden">
        {/* Curved bottom - adjusted height and curve */}
        <div 
          className="absolute bottom-0 left-0 right-0" 
          style={{
            height: '180px',
            background: 'white',
            borderTopLeftRadius: '100% 180px',
            borderTopRightRadius: '100% 180px',
            transform: 'translateY(50%)',
            zIndex: 10
          }}
        />

        {/* Content container */}
        <div className="container mx-auto px-4 py-16 pb-32 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-20">
            {/* Text content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Receitas Saudáveis para Transformar o seu dia!
              </h1>

              <p className="text-gray-800 text-lg">
                Delicie-se com opções práticas, nutritivas e criadas por especialistas para cuidar da sua saúde sem abrir
                mão do sabor.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">Fácil de Preparar</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Utensils className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">Nutrição Completa</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Coffee className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">Sabor Incrível</span>
                </div>
              </div>
            </div>

            {/* Image - hidden on mobile */}
            <div className="hidden md:block relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rb_79651%201-3RESiRRaEEk4OAY6dSUZFn0Glyah57.png"
                alt="Prato saudável com omelete e espinafre"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative leaves */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rb_31321%205-GvE7tpWbQMbbunbNCs91DKRP9ku65l.png"
              alt=""
              className="absolute w-8 md:w-12 blur-[1px] animate-float"
              style={{
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
      <RecipePage />
      <Footer />
    </>
  )
}