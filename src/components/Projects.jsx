import { SimpleGrid, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import {
  SiVite,
  SiFirebase,
  SiHandlebarsdotjs,
  SiExpress,
  SiPassport,
} from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';

const ARRAY_PROJECTS = [
  {
    idPrject: 'indihDesign',
    projectName: 'Indih Design',
    miniature: '/assets/projects/indihdesign-mini.png',
    projectDescription:
      'Proyecto e-ccommerce realizado en el curso de CoderHouse para la compra de bijouterie  ',
    websiteLink: 'https://indih-design-gianni.vercel.app/',
    githubLink: 'https://github.com/giannidaniel18/indih-design-gianni',
    technologies: [
      { title: 'ReactJS', color: '#61DBFB', icon: FaReact },
      { title: 'Firebase', color: '#FFA611', icon: SiFirebase },
      { title: 'Vite', color: 'purple.300', icon: SiVite },
      { title: 'ChacraUI', color: 'teal.300', icon: AiTwotoneThunderbolt },
    ],
  },
  {
    idPrject: 'dgKinesio',
    projectName: 'Dg Kinesio',
    miniature: '/assets/projects/indihdesign-mini.png',
    projectDescription:
      'Proyecto creado para la administración y seguimiento de pacientes de un centro de Kinesiología ',
    websiteLink: '',
    githubLink: 'https://github.com/giannidaniel18/dgKinessio',
    technologies: [
      { title: 'NodeJs', color: '#38A169', icon: FaNodeJs },
      { title: 'Express', icon: SiExpress, switchColorText: false },
      { title: 'HandleBars', color: '#DD6B20', icon: SiHandlebarsdotjs },
      { title: 'Mysql', color: '#0987A0', icon: GrMysql },
      { title: 'PassportJS', color: '#38A169', icon: SiPassport },
    ],
  },
];

const Projects = () => {
  return (
    <VStack alignItems={'flex-start'} gap={4}>
      <VStack alignItems={'flex-start'}>
        <Text
          fontSize={'2xl'}
          fontWeight={'extrabold'}
          textColor={useColorModeValue('gray.700', 'gray.200')}
        >
          Proyectos realizados
        </Text>
        <Text
          fontSize={'md'}
          textColor={useColorModeValue('gray.700', 'gray.200')}
        >
          Estos son algunos de los proyectos que he realizado de carácter
          personal con fines académicos
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={2}>
        {ARRAY_PROJECTS.map((proj) => (
          <ProjectCard key={proj.idPrject} projectData={proj} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
