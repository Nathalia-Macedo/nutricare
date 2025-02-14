// import React from "react"
// import { useHeader } from "../../Context/HeaderContext"
// import { useState } from "react"
// import { AgendarConsultaButton } from "../AgendarConsultaButton"
// import { Link, useLocation } from "react-router-dom"

// export function Header() {
//   const headerData = useHeader()
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const location = useLocation()

//   const isHomePage = location.pathname === "/"

//   const handleNavClick = (e, href) => {
//     e.preventDefault()

//     if (isHomePage) {
//       if (href === "#home") {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//       } else {
//         const id = href.replace("#", "")
//         const element = document.getElementById(id)

//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" })
//           setMobileMenuOpen(false)
//         }
//       }
//     } else {
//       // If not on home page, navigate to home page with the specific section
//       window.location.href = `/${href}`
//     }
//   }

//   const renderNavItem = (href, label) => {
//     if (isHomePage) {
//       return (
//         <a href={href} onClick={(e) => handleNavClick(e, href)} className="hover:text-green-600">
//           {label}
//         </a>
//       )
//     } else {
//       return (
//         <Link to={`/${href}`} className="hover:text-green-600">
//           {label}
//         </Link>
//       )
//     }
//   }

//   return (
//     <header className="w-full">
//       {/* Top bar */}
//       <div className="bg-[#4CAF50] text-white py-2">
//         <div className="container mx-auto px-4 flex flex-wrap sm:flex-nowrap justify-between items-center">
//           <div className="hidden sm:flex items-center space-x-4 text-sm">
//             <a href={`tel:${headerData.contactInfo.phone}`} className="flex items-center hover:text-green-100">
//               <i className="material-icons text-xl mr-2">phone</i>
//               {headerData.contactInfo.phone}
//             </a>
//             <a
//               href={`https://wa.me/${headerData.contactInfo.whatsapp.replace(/\D/g, "")}`}
//               className="flex items-center hover:text-green-100"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="mdi mdi-whatsapp text-xl mr-2"></i>
//               {headerData.contactInfo.whatsapp}
//             </a>
//             <a href={`mailto:${headerData.contactInfo.email}`} className="flex items-center hover:text-green-100">
//               <i className="material-icons text-xl mr-2">email</i>
//               {headerData.contactInfo.email}
//             </a>
//           </div>
//           <div className="flex items-center space-x-4 sm:space-x-4">
//             <a
//               href={headerData.contactInfo.socialMedia.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-100"
//             >
//               <i className="material-icons text-xl">facebook</i>
//             </a>
//             <a
//               href={headerData.contactInfo.socialMedia.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-100"
//             >
//               <i className="mdi mdi-instagram text-xl"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main header */}
//       <div className="bg-white py-4 shadow-sm">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <img src={headerData.logo.src || "/placeholder.svg"} alt={headerData.logo.alt} className="h-16 w-auto" />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             <ul className="hidden md:flex space-x-6">
//               <li>{renderNavItem("#home", "Home")}</li>
//               <li>{renderNavItem("#sobrenos", "Sobre Nós")}</li>
//               <li>
//                 <Link to="/profissionais" className="hover:text-green-600">
//                   Conheça nossas profissionais
//                 </Link>
//               </li>
//               <li>{renderNavItem("#especialidades", "Especialidades")}</li>
//               <li>{renderNavItem("#receitas", "Receitas")}</li>
//               <li>
//                 <Link to="/bioimpedancia" className="hover:text-green-600">
//                   Bioimpedância
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Button Agendar Consulta */}
//           <div className="hidden lg:block">
//             <AgendarConsultaButton />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-700 hover:text-green-600"
//             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <i className="material-icons text-3xl">menu</i>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="bg-white py-4 shadow-md">
//             <div className="container mx-auto px-4 flex flex-col space-y-4">
//               <nav className="flex flex-col space-y-2">
//                 {headerData.navigation.map((item) => (
//                   <React.Fragment key={item.href}>{renderNavItem(`#${item.href}`, item.label)}</React.Fragment>
//                 ))}
//                 <Link
//                   to="/profissionais"
//                   className="text-gray-700 hover:text-green-600 transition-colors font-poppins cursor-pointer"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Conheça nossas profissionais
//                 </Link>
//                 <Link
//                   to="/bioimpedancia"
//                   className="text-gray-700 hover:text-green-600 transition-colors font-poppins cursor-pointer"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Bioimpedância
//                 </Link>
//               </nav>
//               <AgendarConsultaButton className="justify-center" />
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }
"use client"

import React from "react"
import { useHeader } from "../../Context/HeaderContext"
import { useState } from "react"
import { AgendarConsultaButton } from "../AgendarConsultaButton"
import { Link, useLocation } from "react-router-dom"

function Header() {
  const headerData = useHeader()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === "/"

  const handleNavClick = (e, href) => {
    e.preventDefault()

    if (isHomePage) {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const id = href.replace("#", "")
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setMobileMenuOpen(false)
        }
      }
    } else {
      // If not on home page, navigate to home page with the specific section
      window.location.href = `/${href}`
    }
  }

  const renderNavItem = (href, label) => {
    if (isHomePage) {
      return (
        <a href={href} onClick={(e) => handleNavClick(e, href)} className="hover:text-green-600">
          {label}
        </a>
      )
    } else {
      return (
        <Link to={`/${href}`} className="hover:text-green-600">
          {label}
        </Link>
      )
    }
  }

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
          <Link to="/" className="flex-shrink-0">
            <img src={headerData.logo.src || "/placeholder.svg"} alt={headerData.logo.alt} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="hidden md:flex space-x-6">
              <li>{renderNavItem("#home", "Home")}</li>
              <li>{renderNavItem("#sobrenos", "Sobre Nós")}</li>
              <li>
                <Link to="/profissionais" className="hover:text-green-600">
                  Conheça nossas profissionais
                </Link>
              </li>
              <li>{renderNavItem("#especialidades", "Especialidades")}</li>
              <li>{renderNavItem("#receitas", "Receitas")}</li>
              <li>
                <Link to="/bioimpedancia" className="hover:text-green-600">
                  Bioimpedância
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-600">
                  Blog
                </Link>
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
                  <React.Fragment key={item.href}>{renderNavItem(`#${item.href}`, item.label)}</React.Fragment>
                ))}
                <Link
                  to="/profissionais"
                  className="text-gray-700 hover:text-green-600 transition-colors font-poppins cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Conheça nossas profissionais
                </Link>
                <Link
                  to="/bioimpedancia"
                  className="text-gray-700 hover:text-green-600 transition-colors font-poppins cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bioimpedância
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-green-600 transition-colors font-poppins cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
              <AgendarConsultaButton className="justify-center" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;
