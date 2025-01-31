import { useServices } from "../Context/ServiceContext"
import ServiceCard from "./ServiceCard"

export default function ServicesList() {
  const { services } = useServices()

  if (!services || !Array.isArray(services)) {
    return <div>Carregando serviços...</div>
  }

  return (
    <>
      <div className="relative w-full bg-white pt-[40px]">
        {/* Decorative images */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plant-herb-texture-lush-background-removebg-preview%204-ZFHP93GWMUE3lpRNt4EBRsGUVknrSP.png"
          alt="Decorative leaf"
          className="absolute left-0 top-0 w-32 h-auto z-10"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rb_27689%201-AtXbpyAm9rZXULl2WKE1B4zufJf2Zx.png"
          alt="Decorative apple"
          className="absolute right-0 top-0 w-32 h-auto z-10"
        />
        {/* Wave effect */}
        <div className="w-full" style={{ transform: "translateY(1px)" }}>
          <svg
            viewBox="0 0 1440 120"
            className="w-full block"
            preserveAspectRatio="none"
            style={{
              display: "block",
              verticalAlign: "bottom",
            }}
          >
            <path
              fill="black"
              d="M0,0L48,5.3C96,11,192,21,288,26.7C384,32,480,32,576,37.3C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      <div id="especialidades" className="bg-black w-full py-16" style={{ marginTop: "-2px" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-10 text-center md:text-left">Nossas Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-start">
            {services.map((service) => (
              <div key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

