import { Box, chakra, Flex, useColorModeValue } from '@chakra-ui/react';

const LineWithDot = () => {
  return (
    <Flex
      pos='relative'
      alignItems='center'
      mr={{ base: '45px', md: '70px' }}
      ml={{ base: '-55px', md: '-55px' }}
    >
      <chakra.span
        position='absolute'
        left='50%'
        height='calc(100% + 10px)'
        border='1px solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top='0px'
      ></chakra.span>
      <Box pos='relative' p='5px'>
        <Box
          pos='absolute'
          top='0'
          left='1px'
          bottom='0'
          right='0'
          width='100%'
          height='100%'
          backgroundSize='cover'
          backgroundRepeat='no-repeat'
          backgroundPosition='center center'
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius='100px'
          backgroundImage='none'
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default LineWithDot;
