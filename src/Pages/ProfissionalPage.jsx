import React, { useEffect,useRef } from 'react';
import RenataSection from '../Components/RenataSanches';
import EricaProfile from '../Components/EricaBastos';
import WhyChooseUs from '../Components/PorQueNosEscolher';
import CtaSection from '../Components/CtaSection';
import { SecondaryHeader } from '../Components/Header/SecondaryHeader';

const ProfissionaisPage = () => {
   
  return (
    <>
    <SecondaryHeader/>
      <RenataSection />
      <EricaProfile />
      <WhyChooseUs />
      <CtaSection />
    </>
  );
};

export default ProfissionaisPage;