import React, { useEffect,useRef } from 'react';
import RenataSection from '../Components/RenataSanches';
import EricaProfile from '../Components/EricaBastos';
import WhyChooseUs from '../Components/PorQueNosEscolher';
import CtaSection from '../Components/CtaSection';
import Header from '../Components/Header/Header';
const ProfissionaisPage = () => {
   
  return (
    <>
    <Header/>
      <RenataSection />
      <EricaProfile />
      <WhyChooseUs />
      <CtaSection />
    </>
  );
};

export default ProfissionaisPage;