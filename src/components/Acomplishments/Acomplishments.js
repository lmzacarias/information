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
      <div  >
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
      </div>
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
            >
              Descargar
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
