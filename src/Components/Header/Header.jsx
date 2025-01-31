import { useHeader } from "../../Context/HeaderContext"
import { useState } from "react"
import { AgendarConsultaButton } from "../AgendarConsultaButton"

export function Header() {
  const headerData = useHeader()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.replace("#", ""); // Remove "#" para pegar o ID correto
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false); // Fecha o menu mobile após clicar
      }
    }
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#4CAF50] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap sm:flex-nowrap justify-between items-center">
          <div className="hidden sm:flex items-center space-x-4 text-sm">
            <a href={`tel:${headerData.contactInfo.phone}`} className="flex items-center hover:text-green-100">
              <i className="material-icons text-xl mr-2">phone</i>
              {headerData.contactInfo.phone}
            </a>
            <a
              href={`https://wa.me/${headerData.contactInfo.whatsapp.replace(/\D/g, "")}`}
              className="flex items-center hover:text-green-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mdi mdi-whatsapp text-xl mr-2"></i>
              {headerData.contactInfo.whatsapp}
            </a>
            <a href={`mailto:${headerData.contactInfo.email}`} className="flex items-center hover:text-green-100">
              <i className="material-icons text-xl mr-2">email</i>
              {headerData.contactInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-4">
            <a
              href={headerData.contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-100"
            >
              <i className="material-icons text-xl">facebook</i>
            </a>
            <a
              href={headerData.contactInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-100"
            >
              <i className="mdi mdi-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={headerData.logo.src || "/placeholder.svg"} alt={headerData.logo.alt} className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
          <ul className="hidden md:flex space-x-6">
             <li>
               <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-green-600">
                 Home
               </a>
             </li>
             <li>
               <a href="#especialidades" onClick={(e) => handleNavClick(e, "#especialidades")} className="hover:text-green-600">
                 Especialidades
               </a>
             </li>
             <li>
               <a href="#receitas" onClick={(e) => handleNavClick(e, "#receitas")} className="hover:text-green-600">
                 Receitas
               </a>
             </li>
             <li>
               <a href="#sobrenos" onClick={(e) => handleNavClick(e, "#sobrenos")} className="hover:text-green-600">
                 Sobre Nós
               </a>
             </li>
           </ul>
          </nav>

          {/* Button Agendar Consulta */}
          <div className="hidden lg:block">
            <AgendarConsultaButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-green-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="material-icons text-3xl">menu</i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <nav className="flex flex-col space-y-2">
                {headerData.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, `#${item.href}`)}
                    className="text-gray-700 hover:text-green-600 transition-colors font-poppins cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <AgendarConsultaButton className="justify-center" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
