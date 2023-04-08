import { Box, HStack, Text, VStack, useColorModeValue } from '@chakra-ui/react';

import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsEnvelope,
} from 'react-icons/bs';
import AvatarImg from '../components/AvatarImg';
import SocialMediaLink from './SocialMediaLink';

const SOCIAL = [
  {
    id: 'instagram',
    url: 'https://www.instagram.com/daniel_gianni',
    icon: BsInstagram,
    hoverColor: '#cd486b',
  },
  {
    id: 'github',
    url: 'https://github.com/giannidaniel18',
    icon: BsGithub,
    hoverColor: undefined,
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/daniel-gianni-9b203672',
    icon: BsLinkedin,
    hoverColor: '#0072b1',
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/danielgianni',
    icon: BsTwitter,
    hoverColor: '#00acee',
  },
  {
    id: 'mail',
    url: 'mailto:giannidanie92@gmail.com',
    icon: BsEnvelope,
    hoverColor: '#F56565',
  },
];

const Presentation = () => {
  return (
    <VStack alignSelf={'flex-start'} alignItems={'flex-start'} gap={4}>
      <Box>
        <AvatarImg />
      </Box>
      <VStack alignItems={'flex-start'} maxW={500}>
        <Text
          fontSize={'2xl'}
          fontWeight={'extrabold'}
          textColor={useColorModeValue('gray.700', 'gray.200')}
        >
          Daniel Gianni
        </Text>
        <Text
          fontSize={'md'}
          textColor={useColorModeValue('gray.700', 'gray.200')}
        >
          Desarrollador web Front-end viviendo en Argentina. Actualmente
          trabajando en Galicia seguros.
        </Text>
      </VStack>
      <HStack gap={5}>
        {SOCIAL.map((social) => (
          <SocialMediaLink
            key={social.id}
            url={social.url}
            icon={social.icon}
            hoverColor={social.hoverColor}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default Presentation;
