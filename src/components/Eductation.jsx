import { Icon, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import WorkStudyItem from './common/WorkStudyItem';

import { TbSchool } from 'react-icons/tb';

const EDUCTATION_LIST = [
  {
    id: 'CODER',
    logoURL: 'src/assets/coderhouse-logo.png',
    title: 'Coderhouse',
    subtitle: 'Curso React Js',
    yearRange: 'may.2022 - jun.2022',
  },
  {
    id: 'UTN',
    logoURL: 'src/assets/utn-logo.webp',
    title: 'UTN FRBA - Centro de e-Learning',
    subtitle: 'Profesional Webmaster - Full Stack',
    yearRange: 'ago.2021 - feb.2022',
  },
  {
    id: 'UAI',
    logoURL: 'src/assets/uai-logo.jpeg',
    title: 'UAI - Universidad Abierta Interamericana',
    subtitle: 'Analista de sistemas informáticos',
    yearRange: '2010 - 2015',
  },
];

const Eductation = () => {
  return (
    <Stack id='itemContainer'>
      <Stack
        direction={'row'}
        alignItems={'center'}
        color={useColorModeValue('gray.300', 'gray.300')}
        fontWeight={'light'}
      >
        <Icon fontSize={'2xl'} as={TbSchool} />
        <Text> Mis estudios</Text>
      </Stack>
      <VStack
        border={'1px'}
        borderRadius={'2xl'}
        alignItems={'star'}
        borderColor={useColorModeValue('gray.300', 'gray.600')}
        bgColor={useColorModeValue('hsla(0,0%,100%,.1)', 'rgba(24,24,27,.2)')}
        p={6}
        gap={5}
        width={'full'}
      >
        {EDUCTATION_LIST.map((educ) => (
          <WorkStudyItem
            key={educ.id}
            logoUrl={educ.logoURL}
            title={educ.title}
            subtitle={educ.subtitle}
            yearRange={educ.yearRange}
          />
        ))}
      </VStack>
    </Stack>
  );
};

export default Eductation;
