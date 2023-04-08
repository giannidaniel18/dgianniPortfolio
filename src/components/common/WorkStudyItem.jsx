import { Avatar, Box, Text, useColorModeValue } from '@chakra-ui/react';

const WorkStudyItem = ({ logoUrl, title, subtitle, yearRange }) => {
  return (
    <Box display={'flex'} gap={4}>
      <Avatar name={title} src={logoUrl} />
      <Box>
        <Text
          fontWeight={'bold'}
          fontSize={{ base: 'md', md: 'lg' }}
          textColor={useColorModeValue('gray.700', 'gray.200')}
        >
          {title}
        </Text>
        <Text
          textColor={useColorModeValue('gray.600', 'gray.300')}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {subtitle}
        </Text>
        <Text
          textColor={useColorModeValue('gray.500', 'gray.400')}
          fontSize={{ base: 'xs', md: 'sm' }}
        >
          | {yearRange}
        </Text>
      </Box>
    </Box>
  );
};

export default WorkStudyItem;
