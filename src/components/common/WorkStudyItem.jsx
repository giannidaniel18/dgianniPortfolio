import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import LineWithDot from './LineWithDot';

const WorkStudyItem = ({ logoUrl, title, subtitle, yearRange, subcharges }) => {
  console.log(subcharges);
  return (
    <Box display={'flex'} gap={6}>
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
        <Box>
          {subcharges &&
            subcharges.map((subcharg) => (
              <Flex key={subcharg.title} mt={2}>
                <LineWithDot />
                <Box>
                  <Text
                    textColor={useColorModeValue('gray.600', 'gray.300')}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    {subcharg.title}
                  </Text>

                  <Text
                    textColor={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={{ base: 'xs', md: 'sm' }}
                  >
                    | {subcharg.yearRange}
                  </Text>
                </Box>
              </Flex>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkStudyItem;
