import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import mobile from "../../Assets/mobile3.png"
import desktop2 from "../../Assets/desktop2.png"
import mobile2 from '../../Assets/mobile2.png'
import mobile1 from '../../Assets/mobile.png'
import desktop4 from '../../Assets/desktop4.png'
const slides = [
  {
    id: 1,
    desktopImage: desktop2,
    mobileImage: mobile,
    targetSection: "team",
  },
  {
    id: 2,
    desktopImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20179-KYso8EiLDRqzfN66Tac9F7rZ5KOgNM.png",
  mobileImage:
   mobile2,
  targetSection: "team",
  },
  {
    id: 3,
    desktopImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20174-Zq5Kg6laYMY4SAqGvRpR4gafN0EXoP.png",
    mobileImage:
    mobile1,
    targetSection: "about",
  },
  {
    id: 4,
    desktopImage:
    desktop4,
    mobileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20178-qlxmMzTmj9YSWmauHWzxbJCg82S3VN.png",
    targetSection: "specialties"
  },
]

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-screen [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-green-500"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full cursor-pointer" onClick={() => scrollToSection(slide.targetSection)}>
            <img
              src={isMobile ? slide.mobileImage : slide.desktopImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

