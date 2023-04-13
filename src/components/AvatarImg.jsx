import { Image } from '@chakra-ui/react';

const AvatarImg = () => {
  return (
    <Image
      shadow={'xl'}
      rounded={'full'}
      boxSize='70px'
      objectFit='cover'
      name='Daniel Gianni Avatar'
      src='/assets/avatarportfolio.png'
      transition={'ease-in-out, 0.5s'}
      _hover={{
        width: '120px',
        height: '120px',
        content: 'url("/assets/dg1.png")',
      }}
    />
  );
};

export default AvatarImg;
