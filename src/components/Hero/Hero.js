import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenidos<br />
          
        </SectionTitle>
        <SectionText>
        Mi nombre es Luis Miguel Zacarias si estás aquí es porque al igual que a mi te gusta la Arquitectura y necesitas ayuda para dar tus primeros pasos y por tal razón comenzo está página para hacer una comunidad y entre todos podamos ayudarnos y crear conocimiento.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;