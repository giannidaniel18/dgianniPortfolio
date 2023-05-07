import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Links = [
  { href: '/', tag: 'About' },
  { href: '/projects', tag: 'Projects' },
  { href: '/contact', tag: 'Contact' },
];

const NavLink = ({ href, tag }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={'full'}
    to={href}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('purple.400', 'purple.900'),
      textColor: useColorModeValue('white', undefined),
    }}
  >
    {tag}
  </Link>
);

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'none'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>DG</Box>
          <HStack
            spacing={8}
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
          >
            <HStack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.tag} href={link.href} tag={link.tag} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              bg={'none'}
              onClick={toggleColorMode}
              px={0}
              rounded={'full'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('purple.400', 'purple.900'),
                textColor: useColorModeValue('white', undefined),
              }}
            >
              {colorMode === 'light' ? (
                <MoonIcon w={4} h={'auto'} />
              ) : (
                <SunIcon w={4} h={'auto'} />
              )}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.tag} href={link.href} tag={link.tag} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
