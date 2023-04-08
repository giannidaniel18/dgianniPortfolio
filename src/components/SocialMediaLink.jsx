import { Icon, Link, useColorModeValue } from '@chakra-ui/react';

const SocialMediaLink = ({ url, icon, hoverColor }) => {
  return (
    <Link href={url} isExternal>
      <Icon
        fontSize={25}
        _hover={{
          transform: 'translateY(-3px)',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-in-out',
          color: hoverColor,
        }}
        textColor={useColorModeValue('gray.700', 'gray.300')}
        as={icon}
      />
    </Link>
  );
};

export default SocialMediaLink;
