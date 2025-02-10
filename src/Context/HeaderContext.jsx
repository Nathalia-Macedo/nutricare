"use client"

import { createContext, useContext } from "react"

const HeaderContext = createContext()

const defaultHeaderData = {
  contactInfo: {
    phone: "(71)3354-1824",
    whatsapp: "(71)98850-3333",
    email: "contato.nutricare1@gmail.com",
    socialMedia: {
      facebook: "https://facebook.com/nutricare",
      instagram: "https://instagram.com/nutricare",
    },
  },
  logo: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nutricare-removebg-preview-CgZ2diJEiY18lWAO62n68stiPESM6Y.png",
    alt: "Nutricare",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Especialidades", href: "especialidades" },
    { label: "Sobre Nós", href: "sobrenos" },
    { label: "Receitas", href: "receitas" },
    { label: "Blog", href: "blog" },
  ],
}

export function HeaderProvider({ children }) {
  return <HeaderContext.Provider value={defaultHeaderData}>{children}</HeaderContext.Provider>
}

export function useHeader() {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider")
  }
  return context
}

