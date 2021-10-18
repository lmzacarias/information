import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>Ayudas</SectionTitle>
      <SectionText>
        En esta sección encontraras bloques que te ayudaran a ambientar de mejor
        manera tus renders solo debes descargarlos están en formato .skp para su
        importación
      </SectionText>
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/autos.jpg?alt=media&token=1d581acd-ae9a-4589-8d76-bf35719cc45c"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-7xl mb-4">Familia de vehículos</p>
              <a
                href="https://drive.google.com/file/d/1ikvA8qStIrguTq59fsLLlsmEUfGfgrvQ/view?usp=sharing"
                target="_blank"
                class="text-indigo-500 inline-flex items-center"
              >
                Descargar
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/muebles.jpg?alt=media&token=8c31cee7-1b88-4a76-92d9-e1f9e56bf90b"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed  mb-4 text-7xl">Familia de muebles</p>
              <a
                href="https://drive.google.com/file/d/1ikvA8qStIrguTq59fsLLlsmEUfGfgrvQ/view?usp=sharing"
                target="_blank"
                class="text-indigo-500 inline-flex items-center"
              >
                Descargar
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
