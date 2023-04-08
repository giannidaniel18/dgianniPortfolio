import { Container } from '@chakra-ui/react';
import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container p={{ md: '20' }} gap={20} maxW='1500px' centerContent>
        {children}
      </Container>
    </>
  );
};

export default Layout;
