import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import { Link as reactLink } from 'react-router-dom';

const ProjectCard = ({ projectData }) => {
  const {
    projectName,
    projectDescription,
    websiteLink,
    githubLink,
    technologies,
    miniature,
  } = projectData;
  return (
    <Card
      _hover={{ borderColor: 'gray.500' }}
      bg={'transparent'}
      direction={{ base: 'column' }}
      maxW={{ base: '400px' }}
      variant={'outline'}
      overflow='hidden'
      rounded={'2xl'}
    >
      <Image
        p={2}
        rounded={'3xl'}
        objectFit='cover'
        maxW={{ base: '400px' }}
        src={miniature}
      />

      <CardBody>
        <Heading size='md'>{projectName}</Heading>
        <Text py='2' size={'xs'}>
          {projectDescription}
        </Text>
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          gap={2}
          justifyContent={'flex-start'}
          marginInlineStart={0}
        >
          {technologies.map((tech) => (
            <Tag
              marginInlineStart={['0!important']}
              w={'auto'}
              placeContent={'center'}
              bgColor={tech.color}
              key={tech.title}
              color={tech.switchColorText ? 'gray.700' : undefined}
            >
              <TagLeftIcon boxSize='12px' as={tech.icon} />
              <TagLabel>{tech.title}</TagLabel>
            </Tag>
          ))}
        </Stack>
      </CardBody>

      <CardFooter gap={2} justifyContent={'end'}>
        <Button
          size={'sm'}
          as={reactLink}
          target='_blank'
          to={websiteLink}
          variant='solid'
          bg={'gray.600'}
          color={'whiteAlpha.900'}
          leftIcon={<GoLinkExternal />}
          _hover={{
            color: useColorModeValue('gray', undefined),
            bg: useColorModeValue('gray.300', 'gray.700'),
          }}
        >
          Website
        </Button>
        <Button
          size={'sm'}
          as={reactLink}
          target='_blank'
          to={githubLink}
          variant='solid'
          bg={'gray.600'}
          color={'whiteAlpha.900'}
          leftIcon={<BsGithub />}
          _hover={{
            color: useColorModeValue('gray', undefined),
            bg: useColorModeValue('gray.300', 'gray.700'),
          }}
        >
          Github
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
