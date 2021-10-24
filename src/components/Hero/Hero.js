import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenidos
          <br />
        </SectionTitle>
        <SectionText>
          Mi nombre es Luis Miguel Zacarias si estás aquí es porque al igual que
          a mi te gusta la Arquitectura y necesitas ayuda para dar tus primeros
          pasos y por tal razón comenzo está página para hacer una comunidad y
          entre todos podamos ayudarnos y crear conocimiento.
        </SectionText>
        <SectionText>
        Al igual que a ustedes hay algo que los motivo a estudiar Arquitectura en mi caso fue un aspecto que muchas veces es ignorado y es como los
          espacios influencian hábitos y rutinas dentro de la sociedad si pudiésemos ayudar a construir mejores espacios para que la gente viva mejor, eso ayudaría a que muchos barrios del Ecuador mejoren y
          vean su vida un poco diferente, la tarea no es fácil, pero con mucho esfuerzo podremos lograrlo. 🚀
        </SectionText>
        <Button onClick={props.handleClick}>Empecemos</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
