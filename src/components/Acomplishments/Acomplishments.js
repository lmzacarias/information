import React, { useState } from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import 'antd/dist/antd.css';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Acomplishments = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Section>
      <SectionTitle>Libros</SectionTitle>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/0d215ba5bcefce63cdcde3629359c306.jpg?alt=media&token=fec4e276-9804-4363-be4d-dcca968b1204"
          />
          <div class="text-center lg:w-2/3 w-full">
          
            <p class="mb-8 leading-relaxed">
            Arte de proyectar en arquitectura es un manual de proyectos de
          construcción que reúne de forma sistemática los fundamentos, las
          normas y las prescripciones sobre recintos, edificios, exigencias de
          programa, relaciones espaciales, dimensiones de edificios, locales,
          estancias, instalaciones y utensilios con el ser humano como medida y
          objetivo.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-sans ...">
              <a
              href="https://drive.google.com/u/0/uc?id=13y73_o2MLef9X8iIl2EGZkXYSDZzGuhi&export=download"
              target="_blank"
              className="text-3xl"
            >
              Descargar
            </a>
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/n51xxxn.png?alt=media&token=c255a6e7-f8bd-41f6-8216-545adecd8c28"
          />
          <div class="text-center lg:w-2/3 w-full">
           
            <p class="mb-8 leading-relaxed">
            Arquitectura habitacional es el libro de plazola recomendado para aquellos que van empezando o quieren empezar en todo lo referente a la construcción
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-sans ...">
              <a
              href="https://drive.google.com/u/0/uc?id=13y73_o2MLef9X8iIl2EGZkXYSDZzGuhi&export=download"
              target="_blank"
              className="text-3xl"
            >
              Descargar
            </a>
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* <div  >
        <Boxes
          onClick={() => {
            showModal();
          }}
          style={{ cursor: 'pointer' }}
        >
          <Box>
            <BoxNum>Neufert</BoxNum>
            <BoxText>El arte de proyectar en arquitectura</BoxText>
          </Box>
        </Boxes>

        <Boxes
          onClick={() => {
            showModal();
          }}
          style={{ cursor: 'pointer' }}
        >
          <Box>
            <BoxNum>Neufert</BoxNum>
            <BoxText>Arquitectura habitacional</BoxText>
          </Box>
        </Boxes>
      </div> */}
      <Modal
        title="El arte de proyectar en arquitectura"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={() => {}}>
            <a
              href="https://drive.google.com/u/0/uc?id=13y73_o2MLef9X8iIl2EGZkXYSDZzGuhi&export=download"
              target="_blank"
              className="text-7xl"
            >
              Descargars
            </a>
          </Button>,
        ]}
      >
        <p>
          Arte de proyectar en arquitectura es un manual de proyectos de
          construcción que reúne de forma sistemática los fundamentos, las
          normas y las prescripciones sobre recintos, edificios, exigencias de
          programa, relaciones espaciales, dimensiones de edificios, locales,
          estancias, instalaciones y utensilios con el ser humano como medida y
          objetivo.
        </p>
      </Modal>
      {/* <SectionDivider/> */}
    </Section>
  );
};

export default Acomplishments;
