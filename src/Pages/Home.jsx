import { Stack } from '@chakra-ui/react';
import Eductation from '../components/Eductation';
import Presentation from '../components/Presentation';

function Home() {
  return (
    <>
      <Presentation />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={'full'}
        justifyContent={'space-evenly'}
      >
        <Eductation />
        <Eductation />
      </Stack>
    </>
  );
}

export default Home;
