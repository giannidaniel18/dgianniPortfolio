import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
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
      bg={'transparent'}
      direction={{ base: 'column' }}
      maxW={{ base: '400px' }}
      variant={'outline'}
      overflow='hidden'
    >
      <Image
        p={2}
        rounded={'2xl'}
        objectFit='cover'
        maxW={{ base: '400px' }}
        src={miniature}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{projectName}</Heading>
          <Text py='2' size={'xs'}>
            {projectDescription}
          </Text>
          <SimpleGrid minChildWidth='88px' gap={2}>
            {technologies.map((tech) => (
              <Tag
                placeContent={'center'}
                bgColor={tech.color}
                key={tech.title}
                color={tech.switchColorText ? 'gray.700' : undefined}
              >
                <TagLeftIcon boxSize='12px' as={tech.icon} />
                <TagLabel>{tech.title}</TagLabel>
              </Tag>
            ))}
          </SimpleGrid>
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
      </Stack>
    </Card>
  );
};

export default ProjectCard;
