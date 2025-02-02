import { GraduationCap } from "lucide-react"
import renata from "../Assets/renata.png"
import { SecondaryHeader } from "./Header/SecondaryHeader"
import EricaProfile from "./EricaBastos"
import WhyChooseUs from "./PorQueNosEscolher"
import CtaSection from "./CtaSection"
import RenataSection from "./RenataSanches"
export default function ProfessionalProfile() {

  return (
    <>
      <SecondaryHeader />
      <RenataSection/>
      <EricaProfile/>
      <WhyChooseUs/>
      <CtaSection/>
    </>
  )
}

