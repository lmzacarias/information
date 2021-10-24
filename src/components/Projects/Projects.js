import React from 'react';

import 'antd/dist/antd.css';
import { Card, Avatar, Carousel } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import { projects } from '../../constants/constants';
import AspectRatio from '../AspectRatio';
const { Meta } = Card;

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />

    <SectionTitle main>Proyectos</SectionTitle>

    <div>
      <Carousel afterChange={onChange}>
        <div>
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/render.jpg?alt=media&token=6d4e5300-b477-4122-9ca0-73596e228880"
              alt="vehicle"
              className="w-full"
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </AspectRatio>
        </div>
        <div>
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/1.jpg?alt=media&token=17b93df6-508b-44ab-9e16-e4c40b14ee32"
              alt="vehicle"
              className="w-full"
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </AspectRatio>
        </div>
        <div>
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/5.jpg?alt=media&token=8afa023c-8fe2-46b7-b42a-0c11bd13ec92"
              alt="vehicle"
              className="w-full"
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </AspectRatio>
        </div>
      </Carousel>
      <section class="text-gray-600 font-sans ...text-2xl">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  font-sans ...">
                <a
                  href="https://drive.google.com/file/d/1ikvA8qStIrguTq59fsLLlsmEUfGfgrvQ/view?usp=sharing"
                  target="_blank"
                  className="text-3xl"
                >
                  Descargar
                </a>
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded  font-sans ...">
                Button
              </button> */}
            </div>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-sans...">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50 font-sans ...">
              Diseñó de casa de 2 plantas introspectiva
              <br class="hidden lg:inline-block font-sans ..." />
            </h1>
            <p class="mb-8 leading-relaxed">
              Este proyecto consta de una casa de dos plantas con la
              particularidad que tiene un enfoque Introspectivo, los espacios
              interiores por el contrario tienen un vinculo con la naturaleza al
              igual que grandes espacios con gran luminosidad
            </p>
          
       
            <span>Herramientas usadas:</span> <br />
            <span>Revit 2020</span> <br />
            <span>Skechup 2019</span> <br />
            <span>Lumion 8</span> <br />


          </div>
        </div>
      </section>
    </div>
    <div>
      <Carousel afterChange={onChange}>
        <div>
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/2%20proyecto.jpg?alt=media&token=326b16b0-b0a4-4dc7-bf5f-c44cb0bb988e"
              alt="vehicle"
              className="w-full"
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </AspectRatio>
        </div>
        <div>
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/3%20proyect.jpg?alt=media&token=e8c4c30a-4869-4e15-9c2e-5a6527553805"
              alt="vehicle"
              className="w-full"
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </AspectRatio>
        </div>
        <div>
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/proy%205.jpg?alt=media&token=ed6d048d-5aa5-4b51-a5d7-ad5795361691"
              alt="vehicle"
              className="w-full"
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </AspectRatio>
        </div>
      </Carousel>
      <section class="text-gray-600 font-sans ...text-2xl">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  font-sans ...">
                <a
                  href="https://drive.google.com/file/d/1ikvA8qStIrguTq59fsLLlsmEUfGfgrvQ/view?usp=sharing"
                  target="_blank"
                  className="text-3xl"
                >
                  Descargar
                </a>
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded  font-sans ...">
                Button
              </button> */}
            </div>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-sans...">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50 font-sans ...">
              Diseñó de casa de 2 plantas con detalles en madera para la fachada
              <br class="hidden lg:inline-block font-sans ..." />
            </h1>
            <p class="mb-8 leading-relaxed">
            <span>Archivo incluye:</span> <br />
              <span>Plano de Cimientos</span> <br />
              <span>Planta Baja</span><br />
              <span>Planta Alta</span><br />
              <span>Corte A-A</span><br />
              <span> Corte B-B</span><br />
              <span>Elevación Principal</span><br />
              <span>Elevación Lateral</span>
                 <span>Herramientas usadas:</span> <br />
            <span>Revit 2020</span> <br />
            <span>Skechup 2019</span> <br />
            <span>Lumion 8</span> <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  </Section>
);

export default Projects;
