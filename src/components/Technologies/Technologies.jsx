import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Instaladores de programas</SectionTitle>
    <SectionText>
      Aquí podrás encontrar los programas usados en la carrera de Arquitectura
    </SectionText>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap:'wrap' }}>
      <Card
        style={{ width: 300, marginTop:40 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/AutoCAD-cover.jpg?alt=media&token=1bd60a10-8454-4658-8cf6-b247b1ca3552"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
         
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
         
          title="AutoCad 2020"
          description="El software de diseño AutoCAD permite la creación y edición profesional de geometría 2D y modelos 3D con sólidos, superficies y objetos"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop:40 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/autodesk_revit_2021_blog-1280x640.jpg?alt=media&token=74a681f7-1609-4ca2-809c-b8c8533c01f6"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
 
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Revit 2021"
          description="Revit es un software de BIM que agrupa todas las disciplinas de arquitectura, ingeniería y construcción en un entorno de modelado unificado para crear proyectos más eficientes y rentables"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop:40 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/SketchUp-Pro-2019-Kalici-Lisans--1-Yillik-Abonelik-Dahil-89.jpg?alt=media&token=7cd58e92-1e56-4c8c-8393-ced50bfb6cb4"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          
          title="Sketchup 2020"
          description="Sketchup le permite al usuario que haga uso de él de manera intuitiva y flexible, lo cual facilita el manejo en gran cantidad si lo comparamos con un par de los programas mas conocidos en el rubro del modelado 3D"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop:40 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/deal-page-467x316-lumion.jpg?alt=media&token=4d362cb5-ee7f-4ce4-8210-79672fab3ea4"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
        
          title="Lumion 10"
          description="Lumion es un software de representación arquitectónica que facilita la comunicación de los proyectos para que se traduzcan en experiencias y emociones"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop:40 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/image.png?alt=media&token=ed946b3a-ca0e-42d3-bcb9-a04f65d22aee"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Archicad 23"
          description="Software de dibujo asistido por computador de la categoría BIM o modelado de información de construcción"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop:40 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/maxresdefault.jpg?alt=media&token=bb61def0-f7ba-43b4-8345-a7ec9f3dc5a4"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
  
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
         
          title="Enscape"
          description="Enscape es un programa de renderización en tiempo real y realidad virtual. Se utiiliza principalmente en arquitectura, ingeniería y otros campos de construcción"
        />
      </Card>
    </div>
    <br />
    <br />
    <SectionDivider />
  </Section>
);

export default Technologies;
