import { Stack } from '@chakra-ui/react';
import Eductation from '../components/Eductation';
import Presentation from '../components/Presentation';
import WorkHistory from '../components/WorkHistory';

function Home() {
  return (
    <>
      <Presentation />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={'full'}
        justifyContent={'space-between'}
      >
        <WorkHistory />
        <Eductation />
      </Stack>
    </>
  );
}

export default Home;
