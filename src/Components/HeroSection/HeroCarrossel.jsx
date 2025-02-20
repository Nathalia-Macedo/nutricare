// "use client"

// import { useState, useEffect } from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Pagination, Autoplay } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import desktop2 from "../../Assets/desktop2.png"
// import slide4 from "../../Assets/slide4BG.png"
// import { Utensils, Users, ClipboardList, Calendar } from "lucide-react"
// import renataMobile from '../../Assets/renataMobile.png'
// const slides = [
//   {
//     id: 1,
//     desktopImage: desktop2,
//     mobileImage:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem_do_WhatsApp_de_2025-01-19_%C3%A0_s__09_LE_upscale_balanced_x4%201-Johu37f57KDuJ1EoL1mIPTHTEO8PEd.png",
//     mobileContent: {
//       title: "Transforme sua Saúde com Nutrição Personalizada",
//       description: (
//         <>
//           Receitas exclusivas,
//           <br />
//           profissionais especializados
//           <br />e um plano nutricional feito
//           <br />
//           para você.
//           <br />
//           Descubra como alcançar mais energia, equilíbrio e bem-estar.
//         </>
//       ),
//       features: [
//         {
//           text: "Receitas saudáveis e práticas para todas as necessidades",
//           icon: <Utensils className="w-6 h-6 text-[#31A431]" />,
//         },
//         {
//           text: "Consultas personalizadas com os melhores profissionais",
//           icon: <Users className="w-6 h-6 text-[#31A431]" />,
//         },
//         {
//           text: "Planos alimentares sob medida para seus objetivos",
//           icon: <ClipboardList className="w-6 h-6 text-[#31A431]" />,
//         },
//         {
//           text: "Agendamento online rápido e fácil",
//           icon: <Calendar className="w-5 h-5 text-[#31A431]" />,
//         },
//       ],
//     },
//     targetSection: "team",
//   },
//   {
//     id: 2,
//     desktopImage:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20179-KYso8EiLDRqzfN66Tac9F7rZ5KOgNM.png",
//     mobileContent: {
//       title: "Conheça Renata Sanches e Nossa Equipe de Nutricionistas Especializadas",
//       description:
//         "Com mais de 25 anos de experiência em nutrição clínica, Renata Sanches transforma vidas com plano alimentar personalizado e um cuidado que vai além. Continue com frase que já esta.",
//       image: renataMobile,
//       callToAction: "Clique aqui e conheça nossa equipe!",
//     },
//     targetSection: "profissionais",
//   },
//   {
//     id: 3,
//     desktopImage:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20174-Zq5Kg6laYMY4SAqGvRpR4gafN0EXoP.png",
//     mobileContent: {
//       title: "Cuidar da sua saúde nunca foi tão simples.",
//       description:
//         "Descubra como uma alimentação equilibrada transforma a saúde da mulher em todas as fases da vida. Dicas, insights e o olhar especializado da Dra. Érica Bastos esperam por você!",
//       callToAction: "Clique aqui e leia mais sobre isso!",
//       decorativeImage:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20197-l4YtMdjwlHKptUILvhfp7GrVxG6UME.png",
//     },
//     targetSection: "blog/3",
//   },
//   {
//     id: 4,
//     desktopImage: slide4,
//     mobileTitle: "Nossas Especialidades",
//     mobileDescription: "Conheça todos os nossos serviços especializados",
//     buttonText: "Ver Especialidades",
//     targetSection: "specialties",
//   },
// ]

// export default function HeroCarousel() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     checkMobile()
//     window.addEventListener("resize", checkMobile)

//     return () => {
//       window.removeEventListener("resize", checkMobile)
//     }
//   }, [])

//   const handleSlideClick = (targetSection) => {
//     if (targetSection === "profissionais") {
//       window.location.href = "/profissionais"
//     } else if (targetSection === "blog/3") {
//       window.location.href = "/blog/3"
//     } else {
//       const section = document.getElementById(targetSection)
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" })
//       }
//     }
//   }

//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/5571988503333", "_blank")
//   }

//   const renderMobileSlide = (slide) => {
//     if (slide.id === 1) {
//       return (
//         <div className="relative w-full h-full">
//           {/* Background Image */}
//           <img
//             src={slide.mobileImage || "/placeholder.svg"}
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Content Overlay */}
//           <div className="relative z-10 w-full h-full flex flex-col justify-between p-6">
//             <div className="space-y-4">
//               <h2 className="text-[#31A431] text-3xl font-bold leading-tight">{slide.mobileContent.title}</h2>
//               <p className="text-gray-700 text-sm font-bold">{slide.mobileContent.description}</p>
//             </div>

//             {/* Features List */}
//             <div className="flex-1 flex flex-col justify-center">
//               <div className="space-y-4">
//                 {slide.mobileContent.features.map((feature, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     {feature.icon}
//                     <p className="text-gray-700 text-sm">{feature.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Button */}
//             <button
//               onClick={handleWhatsAppClick}
//               className="w-full bg-[#31A431] text-white py-3 rounded-md font-medium hover:bg-[#2b932b] transition-colors"
//             >
//               Agende sua consulta
//             </button>
//           </div>
//         </div>
//       )
//     }

//     if (slide.id === 2) {
//       return (
//         <div
//           className="relative w-full h-full bg-[#31A431] p-6 flex flex-col justify-between"
//           onClick={() => (window.location.href = "/profissionais")}
//         >
//           <div className="space-y-4">
//             <h2 className="text-white text-3xl font-bold leading-tight">{slide.mobileContent.title}</h2>
//             <p className="text-white text-sm">{slide.mobileContent.description}</p>
//             <p className="text-white text-sm font-medium">{slide.mobileContent.callToAction}</p>
//           </div>

//           <div className="space-y-6">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation()
//                 window.open("https://wa.me/5571988503333", "_blank")
//               }}
//               className="w-4/5 mx-auto block border-2 border-white text-white py-2 rounded-md font-medium hover:bg-white hover:text-[#31A431] transition-colors"
//             >
//               Agende sua consulta
//             </button>

//             <div className="w-40 h-40 mx-auto overflow-hidden rounded-2xl">
//               <img
//                 src={slide.mobileContent.image || "/placeholder.svg"}
//                 alt="Dra. Renata Sanches"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       )
//     }

//     if (slide.id === 3) {
//       return (
//         <div
//           className="relative w-full h-full bg-[#31A431] p-6 flex flex-col justify-around"
//           onClick={() => (window.location.href = "/blog/3")}
//         >
//           <div className="space-y-4">
//             <h2 className="text-white text-3xl font-bold leading-tight">{slide.mobileContent.title}</h2>
//             <p className="text-white text-sm">{slide.mobileContent.description}</p>
//             <p className="text-white text-sm font-medium">{slide.mobileContent.callToAction}</p>
//           </div>

//           <div className="relative z-20">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation()
//                 window.open("https://wa.me/5571988503333", "_blank")
//               }}
//               className="w-4/5 mx-auto block border-2 border-white text-white py-2 rounded-md font-medium hover:bg-white hover:text-[#31A431] transition-colors"
//             >
//             Agende sua consulta

//             </button>
//           </div>

//           {/* Decorative Image */}
//           <div className="absolute bottom-4 right-4 w-32 z-10">
//             <img src={slide.mobileContent.decorativeImage || "/placeholder.svg"} alt="" className="w-full h-auto" />
//           </div>
//         </div>
//       )
//     }

//     if (slide.id === 4) {
//       return (
//         <div className="relative w-full h-full bg-white p-6 flex flex-col">
//           <div className="flex-1 relative z-20">
//             <h2 className="text-3xl font-bold leading-tight mb-8">
//               Especialidades que Cuidam de Você em Cada Fase da Vida
//             </h2>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <span className="text-[#31A431] font-mono text-2xl">01</span>
//                 <p className="text-xs">Nutrição Clínica: Controle de doenças como diabetes, obesidade e hipertensão.</p>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-[#31A431] font-mono text-2xl">02</span>
//                 <p className="text-xs">Nutrição Esportiva: Dietas para alta performance e recuperação muscular</p>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-[#31A431] font-mono text-2xl">03</span>
//                 <p className="text-xs">Reeducação Alimentar: Hábitos saudáveis para o dia a dia</p>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-[#31A431] font-mono text-2xl">04</span>
//                 <p className="text-xs">Nutrição Infantil: Crescimento saudável desde cedo</p>
//               </div>
//             </div>

//             <button
//               onClick={() => window.open("https://wa.me/5571988503333", "_blank")}
//               className="w-full bg-[#31A431] text-white py-3 rounded-md font-medium hover:bg-[#2b932b] transition-colors mt-8"
//             >
//             Agende sua consulta

//             </button>
//           </div>

//           {/* Decorative Image */}
//           <div className="absolute bottom-0 left-0 right-0 w-full z-10">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-view-healthy-diet-salad-with-grilled-chicken-broccoli-cauliflower-tomato-lettuce-avocado-lettuce-removebg-preview%202-eyJwtuLgTBTQSvOmMGSI09slI5aWKn.png"
//               alt=""
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       )
//     }

//     // Renderização padrão para outros slides mobile
//     return (
//       <div className="relative w-full h-full flex flex-col justify-center items-center px-6 text-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">{slide.mobileTitle}</h2>
//         <p className="text-black mb-8">{slide.mobileDescription}</p>
//         <button
//           onClick={() => handleSlideClick(slide.targetSection)}
//           className="bg-[#31A431] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2b932b] transition-colors"
//         >
//           {slide.buttonText}
//         </button>
//       </div>
//     )
//   }

//   const renderDesktopSlide = (slide) => (
//     <div className="relative w-full h-full cursor-pointer" onClick={() => handleSlideClick(slide.targetSection)}>
//       <img src={slide.desktopImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
//     </div>
//   )

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 15000 }}
//       className="w-full h-screen [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-green-500"
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.id}>{isMobile ? renderMobileSlide(slide) : renderDesktopSlide(slide)}</SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import styled from "styled-components"
import desktop2 from "../../Assets/desktop2.png"
import slide4 from "../../Assets/slide4BG.png"
import { Utensils, Users, ClipboardList, Calendar } from "lucide-react"
import renataMobile from '../../Assets/renataMobile.png'

// Dados dos slides
const slides = [
  {
    id: 1,
    desktopImage: desktop2,
    mobileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem_do_WhatsApp_de_2025-01-19_%C3%A0_s__09_LE_upscale_balanced_x4%201-Johu37f57KDuJ1EoL1mIPTHTEO8PEd.png",
    mobileContent: {
      title: "Transforme sua Saúde com Nutrição Personalizada",
      description: (
        <>
          Receitas exclusivas,
          <br />
          profissionais especializados
          <br />e um plano nutricional feito
          <br />
          para você.
          <br />
          Descubra como alcançar mais energia, equilíbrio e bem-estar.
        </>
      ),
      features: [
        {
          text: "Receitas saudáveis e práticas para todas as necessidades",
          icon: <Utensils className="w-6 h-6 text-[#31A431]" />,
        },
        {
          text: "Consultas personalizadas com os melhores profissionais",
          icon: <Users className="w-6 h-6 text-[#31A431]" />,
        },
        {
          text: "Planos alimentares sob medida para seus objetivos",
          icon: <ClipboardList className="w-6 h-6 text-[#31A431]" />,
        },
        {
          text: "Agendamento online rápido e fácil",
          icon: <Calendar className="w-5 h-5 text-[#31A431]" />,
        },
      ],
    },
    targetSection: "team",
  },
  {
    id: 2,
    desktopImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20179-KYso8EiLDRqzfN66Tac9F7rZ5KOgNM.png",
    mobileContent: {
      title: "Conheça Renata Sanches e Nossa Equipe de Nutricionistas Especializadas",
      description:
        "Com mais de 25 anos de experiência em nutrição clínica, Renata Sanches transforma vidas com plano alimentar personalizado e um cuidado que vai além. Continue com frase que já esta.",
      image: renataMobile,
      callToAction: "Clique aqui e conheça nossa equipe!",
    },
    targetSection: "profissionais",
  },
  {
    id: 3,
    desktopImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20174-Zq5Kg6laYMY4SAqGvRpR4gafN0EXoP.png",
    mobileContent: {
      title: "Cuidar da sua saúde nunca foi tão simples.",
      description:
        "Descubra como uma alimentação equilibrada transforma a saúde da mulher em todas as fases da vida. Dicas, insights e o olhar especializado da Dra. Érica Bastos esperam por você!",
      callToAction: "Clique aqui e leia mais sobre isso!",
      decorativeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20197-l4YtMdjwlHKptUILvhfp7GrVxG6UME.png",
    },
    targetSection: "blog/3",
  },
  {
    id: 4,
    desktopImage: slide4,
    mobileTitle: "Nossas Especialidades",
    mobileDescription: "Conheça todos os nossos serviços especializados",
    buttonText: "Ver Especialidades",
    targetSection: "specialties",
  },
]

// Estilos com styled-components
const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;

  .swiper-slide {
    height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background: white;
  }

  .swiper-pagination-bullet-active {
    background: green;
  }

  @media (max-width: 768px) {
    .swiper-slide {
      height: 100vh !important;
    }
  }
`

const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ textColor }) => textColor || "inherit"};
`

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

const SlideButton = styled.button`
  width: 100%;
  background-color: #31a431;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2b932b;
  }
`

const BorderButton = styled.button`
  width: 80%;
  margin: 0 auto;
  border: 2px solid white;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #31a431;
  }
`

export default function HeroCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleSlideClick = (targetSection) => {
    if (targetSection === "profissionais") {
      window.location.href = "/profissionais"
    } else if (targetSection === "blog/3") {
      window.location.href = "/blog/3"
    } else {
      const section = document.getElementById(targetSection)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5571988503333", "_blank")
  }

  const renderMobileSlide = (slide) => {
    switch (slide.id) {
      case 1:
        return (
          <SlideContent>
            <SlideImage src={slide.mobileImage} alt="" />
            <div className="space-y-4">
              <h2 className="text-[#31A431] text-3xl font-bold leading-tight">{slide.mobileContent.title}</h2>
              <p className="text-gray-700 text-sm font-bold">{slide.mobileContent.description}</p>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4">
                {slide.mobileContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {feature.icon}
                    <p className="text-gray-700 text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <SlideButton onClick={handleWhatsAppClick}>Agende sua consulta</SlideButton>
          </SlideContent>
        )
      case 2:
        return (
          <SlideContent bgColor="#31A431" textColor="white" onClick={() => handleSlideClick(slide.targetSection)}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-tight">{slide.mobileContent.title}</h2>
              <p className="text-sm">{slide.mobileContent.description}</p>
              <p className="text-sm font-medium">{slide.mobileContent.callToAction}</p>
            </div>
            <div className="space-y-6">
              <BorderButton
                onClick={(e) => {
                  e.stopPropagation()
                  handleWhatsAppClick()
                }}
              >
                Agende sua consulta
              </BorderButton>
              <div className="w-40 h-40 mx-auto overflow-hidden rounded-2xl">
                <img src={slide.mobileContent.image} alt="Dra. Renata Sanches" className="w-full h-full object-cover" />
              </div>
            </div>
          </SlideContent>
        )
      case 3:
        return (
          <SlideContent bgColor="#31A431" textColor="white" onClick={() => handleSlideClick(slide.targetSection)}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-tight">{slide.mobileContent.title}</h2>
              <p className="text-sm">{slide.mobileContent.description}</p>
              <p className="text-sm font-medium">{slide.mobileContent.callToAction}</p>
            </div>
            <div className="flex-1 flex items-end">
              <BorderButton
                onClick={(e) => {
                  e.stopPropagation()
                  handleWhatsAppClick()
                }}
              >
                Agende sua consulta
              </BorderButton>
            </div>
            <div className="absolute bottom-4 right-4 w-32 z-10">
              <img src={slide.mobileContent.decorativeImage} alt="" className="w-full h-auto" />
            </div>
          </SlideContent>
        )
      case 4:
        return (
          <SlideContent bgColor="white" textColor="black">
            <div className="flex-1 relative z-20">
              <h2 className="text-3xl font-bold leading-tight mb-8">
                Especialidades que Cuidam de Você em Cada Fase da Vida
              </h2>
              <div className="space-y-6">
                {[
                  "Nutrição Clínica: Controle de doenças como diabetes, obesidade e hipertensão.",
                  "Nutrição Esportiva: Dietas para alta performance e recuperação muscular",
                  "Reeducação Alimentar: Hábitos saudáveis para o dia a dia",
                  "Nutrição Infantil: Crescimento saudável desde cedo",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-[#31A431] font-mono text-2xl">{`0${index + 1}`}</span>
                    <p className="text-xs">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <SlideButton onClick={handleWhatsAppClick}>Agende sua consulta</SlideButton>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-view-healthy-diet-salad-with-grilled-chicken-broccoli-cauliflower-tomato-lettuce-avocado-lettuce-removebg-preview%202-eyJwtuLgTBTQSvOmMGSI09slI5aWKn.png"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </SlideContent>
        )
      default:
        return null
    }
  }

  const renderDesktopSlide = (slide) => (
    <SlideContent onClick={() => handleSlideClick(slide.targetSection)}>
      <SlideImage src={slide.desktopImage} alt="" />
    </SlideContent>
  )

  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {isMobile ? renderMobileSlide(slide) : renderDesktopSlide(slide)}
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}