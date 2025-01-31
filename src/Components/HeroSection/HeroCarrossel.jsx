// import React, { useState, useEffect } from "react";
// import htmlReactParser from 'html-react-parser';  // Importando a nova biblioteca
// import slide1 from "../Assets/slide1.png";
// import slide2 from '../Assets/slide2.png';

// const slides = [
//   {
//     id: 1,
//     backgroundImage: slide1,
//     title: "Transforme sua Saúde com Nutrição Personalizada",
//     description:
//       "Receitas exclusivas, profissionais especializados e um plano nutricional feito para você. Descubra como alcançar mais energia, equilíbrio e bem-estar.",
//     features: [
//       { icon: "restaurant", text: "Receitas saudáveis e práticas para todas as necessidades" },
//       { icon: "photo_camera", text: "Consultas personalizadas com os melhores profissionais" },
//       { icon: "description", text: "Planos alimentares sob medida para seus objetivos" },
//       { icon: "event", text: "Agendamento online rápido e fácil!" },
//     ],
//     styles: {
//       title: "text-green-600",
//       description: "text-gray-700",
//       features: {
//         icon: "text-green-600",
//         text: "text-gray-700",
//       },
//     },
//   },
//   {
//     id: 2,
//     backgroundImage: slide2,
//     title: "Conheça Renata Sanches e Nossa Equipe de <br/> Nutricionistas Especializadas",
//     description:
//       "Com anos de experiência em nutrição clínica e esportiva, Renata Sanches transforma vidas com planos personalizados e um cuidado que vai além. Descubra como nossa equipe pode ajudar você a alcançar seus objetivos de saúde e bem-estar.",
//     hasButton: true,
//     buttonText: "Conheça nossa equipe",
//     buttonLink: "/equipe",
//     styles: {
//       title: "text-white",
//       description: "text-white",
//       button: "bg-white text-green-600 hover:bg-gray-100",
//     },
//   },
// ];

// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-[calc(100vh-150px)] bg-white overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {/* Background Image */}
//           <div className="absolute inset-0 w-full h-full">
//             <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] sm:backdrop-blur-none z-10"></div>
//             <img
//               src={slide.backgroundImage || "/placeholder.svg"}
//               alt={`Slide ${slide.id} background`}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Content Overlay */}
//           <div className="relative z-10 container px-4 py-10 md:py-20 flex items-center justify-center">
//             <div className="max-w-3xl">
//               <h1
//                 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${slide.styles.title}`}
//                 style={{ fontFamily: "Poppins" }}
//               >
//                 {htmlReactParser(slide.title)}  {/* Alterado para usar htmlReactParser */}
//               </h1>

//               <p
//                 className={`text-lg md:text-xl mb-8 max-w-lg ${slide.styles.description}`}
//                 style={{ fontFamily: "Poppins" }}
//               >
//                 {htmlReactParser(slide.description)}  {/* Alterado para usar htmlReactParser */}
//               </p>

//               {slide.features && (
//                 <div className="space-y-6">
//                   {slide.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-4">
//                       <span className={`material-icons ${slide.styles.features.icon}`}>
//                         {feature.icon}
//                       </span>
//                       <p
//                         className={`text-sm md:text-base ${slide.styles.features.text}`}
//                         style={{ fontFamily: "Poppins" }}
//                       >
//                         {htmlReactParser(feature.text)}  {/* Alterado para usar htmlReactParser */}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {slide.hasButton && (
//                 <button
//                   className={`mt-8 px-6 py-3 rounded-full font-medium transition-colors ${slide.styles.button}`}
//                   style={{ fontFamily: "Poppins" }}
//                 >
//                   {htmlReactParser(slide.buttonText)}  {/* Alterado para usar htmlReactParser */}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all ${
//               index === currentSlide ? "bg-green-600" : "bg-gray-300"
//             }`}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default HeroCarousel;
// import Slider from "react-slick"
// import htmlReactParser from "html-react-parser"
// import slide1 from "../../Assets/slide1.png"
// import slide2 from "../../Assets/slide2.png"

// // Import css files for react-slick
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const slides = [
//   {
//     id: 1,
//     backgroundImage: slide1,
//     title: "Transforme sua Saúde com Nutrição Personalizada",
//     description:
//       "Receitas exclusivas, profissionais especializados e um plano nutricional feito para você. Descubra como alcançar mais energia, equilíbrio e bem-estar.",
//     features: [
//       { icon: "restaurant", text: "Receitas saudáveis e práticas para todas as necessidades" },
//       { icon: "photo_camera", text: "Consultas personalizadas com os melhores profissionais" },
//       { icon: "description", text: "Planos alimentares sob medida para seus objetivos" },
//       { icon: "event", text: "Agendamento online rápido e fácil!" },
//     ],
//     styles: {
//       title: "text-green-600",
//       description: "text-gray-700",
//       features: {
//         icon: "text-green-600",
//         text: "text-gray-700",
//       },
//     },
//   },
//   {
//     id: 2,
//     backgroundImage: slide2,
//     title: "Conheça Renata Sanches e Nossa Equipe de <br/> Nutricionistas Especializadas",
//     description:
//       "Com anos de experiência em nutrição clínica e esportiva, Renata Sanches transforma vidas com planos personalizados e um cuidado que vai além. Descubra como nossa equipe pode ajudar você a alcançar seus objetivos de saúde e bem-estar.",
//     hasButton: true,
//     buttonText: "Conheça nossa equipe",
//     buttonLink: "/equipe",
//     styles: {
//       title: "text-white",
//       description: "text-white",
//       button: "bg-white text-green-600 hover:bg-gray-100",
//     },
//   },
// ]

// const HeroCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     adaptiveHeight: true,
//   }

//   return (
//     <Slider {...settings} className="hero-carousel">
//       {slides.map((slide) => (
//         <div key={slide.id} className="relative w-full min-h-[calc(100vh-150px)] bg-white">
//           <div className="absolute inset-0 w-full h-full">
//             <div className="absolute inset-0 bg-black/10 z-10"></div>
//             <img
//               src={slide.backgroundImage || "/placeholder.svg"}
//               alt={`Slide ${slide.id} background`}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="relative z-10 container mx-auto px-4 py-10 md:py-20 flex items-center justify-center min-h-[calc(100vh-150px)]">
//             <div className="max-w-3xl">
//               <h1
//                 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ${slide.styles.title}`}
//                 style={{ fontFamily: "Poppins" }}
//               >
//                 {htmlReactParser(slide.title)}
//               </h1>

//               <p
//                 className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-8 max-w-lg ${slide.styles.description}`}
//                 style={{ fontFamily: "Poppins" }}
//               >
//                 {htmlReactParser(slide.description)}
//               </p>

//               {slide.features && (
//                 <div className="space-y-3 sm:space-y-6">
//                   {slide.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-2 sm:gap-4">
//                       <span className={`material-icons text-xl sm:text-2xl ${slide.styles.features.icon}`}>
//                         {feature.icon}
//                       </span>
//                       <p
//                         className={`text-xs sm:text-sm md:text-base ${slide.styles.features.text}`}
//                         style={{ fontFamily: "Poppins" }}
//                       >
//                         {htmlReactParser(feature.text)}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {slide.hasButton && (
//                 <button
//                   className={`mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors ${slide.styles.button}`}
//                   style={{ fontFamily: "Poppins" }}
//                 >
//                   {htmlReactParser(slide.buttonText)}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   )
// }

// export default HeroCarousel

import Slider from "react-slick"
import htmlReactParser from "html-react-parser"
import slide1 from "../../Assets/slide1.png"
import slide2 from "../../Assets/slide2.png"
import slide3 from "../../Assets/slide3.png"

// Import css files for react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slides = [
  {
    id: 1,
    backgroundImage: slide1,
    title: "Transforme sua Saúde com Nutrição Personalizada",
    description:
      "Receitas exclusivas, profissionais especializados e um plano nutricional feito para você. Descubra como alcançar mais energia, equilíbrio e bem-estar.",
    features: [
      { icon: "restaurant", text: "Receitas saudáveis e práticas para todas as necessidades" },
      { icon: "photo_camera", text: "Consultas personalizadas com os melhores profissionais" },
      { icon: "description", text: "Planos alimentares sob medida para seus objetivos" },
      { icon: "event", text: "Agendamento online rápido e fácil!" },
    ],
    styles: {
      title: "text-green-600",
      description: "text-gray-700",
      features: {
        icon: "text-green-600",
        text: "text-gray-700",
      },
    },
  },
  {
    id: 2,
    backgroundImage: slide2,
    title: "Conheça Renata Sanches e Nossa Equipe de <br/> Nutricionistas Especializadas",
    description:
      "Com anos de experiência em nutrição clínica e esportiva, Renata Sanches transforma vidas com planos personalizados e um cuidado que vai além. Descubra como nossa equipe pode ajudar você a alcançar seus objetivos de saúde e bem-estar.",
    hasButton: true,
    buttonText: "Conheça nossa equipe",
    buttonLink: "/equipe",
    styles: {
      title: "text-white",
      description: "text-white",
      button: "bg-white text-green-600 hover:bg-gray-100",
    },
  },
  {
    id: 3,
    backgroundImage: slide3,
    title: "Cuidar da sua saúde nunca foi tão simples.",
    description:
      "Descubra como uma alimentação equilibrada transforma a saúde da mulher em todas as fases da vida. Dicas, insights e o olhar especializado da Dra. Érica Bastos esperam por você.",
    hasButton: true,
    buttonText: "Leia nosso Blog",
    buttonLink: "/blog",
    styles: {
      title: "text-white",
      description: "text-white",
      button: "bg-white text-black hover:bg-gray-100",
    },
  },
]

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  return (
    <Slider {...settings} className="hero-carousel">
      {slides.map((slide) => (
        <div key={slide.id} className="relative w-full min-h-[calc(100vh-150px)] bg-white">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <img
              src={slide.backgroundImage || "/placeholder.svg"}
              alt={`Slide ${slide.id} background`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-10 md:py-20 flex items-center min-h-[calc(100vh-150px)]">
            <div className="max-w-3xl">
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ${slide.styles.title}`}
                style={{ fontFamily: "Poppins" }}
              >
                {htmlReactParser(slide.title)}
              </h1>

              <p
                className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-8 max-w-lg ${slide.styles.description}`}
                style={{ fontFamily: "Poppins" }}
              >
                {htmlReactParser(slide.description)}
              </p>

              {slide.features && (
                <div className="space-y-3 sm:space-y-6">
                  {slide.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 sm:gap-4">
                      <span className={`material-icons text-xl sm:text-2xl ${slide.styles.features.icon}`}>
                        {feature.icon}
                      </span>
                      <p
                        className={`text-xs sm:text-sm md:text-base ${slide.styles.features.text}`}
                        style={{ fontFamily: "Poppins" }}
                      >
                        {htmlReactParser(feature.text)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {slide.hasButton && (
                <button
                  className={`mt-6 sm:mt-8 px-8 py-3 rounded-lg font-medium transition-colors ${slide.styles.button} w-48 text-sm`}
                  style={{ fontFamily: "Poppins" }}
                >
                  {htmlReactParser(slide.buttonText)}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default HeroCarousel

