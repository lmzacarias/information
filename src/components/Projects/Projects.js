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
    {/* <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer> */}
    <div>
      {/* {' '}
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
       */}
      <section class="text-gray-600 font-sans ...text-2xl">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
            <Carousel afterChange={onChange}>
            <div>
              <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/render.jpg?alt=media&token=6d4e5300-b477-4122-9ca0-73596e228880"
                />
              </div>
              <div>
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/1.jpg?alt=media&token=17b93df6-508b-44ab-9e16-e4c40b14ee32"
                />
              </div>
              <div>
              <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://firebasestorage.googleapis.com/v0/b/happy-bonita.appspot.com/o/5.jpg?alt=media&token=8afa023c-8fe2-46b7-b42a-0c11bd13ec92"
                />
              </div>
            </Carousel>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-sans...">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50 font-sans ...">
              Casa de dos plantas amobladas 
              <br class="hidden lg:inline-block font-sans ..." />
            </h1>
            <p class="mb-8 leading-relaxed">
            Este proyecto consta de una casa de dos plantas con un realce introspectivo, pero dentro de ella la casa genera espacios con gran luminosidad y un singular vinculo con la naturaleza  
            </p>
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
        </div>
      </section>
    </div>
  </Section>
);

export default Projects;
