import { Icon, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import WorkStudyItem from './common/WorkStudyItem';

import { MdWorkOutline } from 'react-icons/md';

const WORKHISTORY_LIST = [
  {
    id: 'GS',
    logoURL: 'src/assets/gs-logo.jpeg',
    title: 'Galicia Seguros',
    subtitle: 'Desarrollador Front-End',
    yearRange: 'may.2022 - Actualidad',
    subcharges: [
      {
        title: 'Analista técnico funcional',
        yearRange: 'ene.2021 - may.2022',
      },
      {
        title: 'Analista técnico de mejora continua',
        yearRange: 'ago.2019 - ene.2021',
      },
    ],
  },
  {
    id: 'YPF',
    logoURL: 'src/assets/ypf-logo.jpeg',
    title: 'YPF',
    subtitle: 'Analista Senior - Seguridad SAP',
    yearRange: 'jul.2016 - abr.2019',
  },
  {
    id: 'EY',
    logoURL: 'src/assets/ey-logo.jpg',
    title: 'Ernst & Young',
    subtitle: 'Consultor TI - Auditorías Internas & Externas - Segurdad SAP',
    yearRange: 'jul.2015 - ago.2019',
  },
];

const WorkHistory = () => {
  return (
    <Stack id='itemContainer' width={{ md: '70%' }}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        color={useColorModeValue('gray.300', 'gray.300')}
        fontWeight={'light'}
      >
        <Icon fontSize={'2xl'} as={MdWorkOutline} />
        <Text> Mi experiencia laboral</Text>
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
        {WORKHISTORY_LIST.map((work) => (
          <WorkStudyItem
            key={work.id}
            logoUrl={work.logoURL}
            title={work.title}
            subtitle={work.subtitle}
            yearRange={work.yearRange}
            subcharges={work.subcharges}
          />
        ))}
      </VStack>
    </Stack>
  );
};

export default WorkHistory;
