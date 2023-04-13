import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `'Helvetica', sans-serif`,
    body: `Helvetica, sans-serif`,
  },
  colors: {
    // primary: '#cda5f3',
    // primaryDark: '#8674aa',
    // primaryLight: '#dba5f3',
    // secondary: '#7481a8',
    // secondaryDark: '#4e597e',
    // secondaryLight: '#a6b8f3',
  },
  styles: {
    global: (props) => ({
      'html, body, #root , App': {
        bgGradient: mode(
          'linear-gradient(135deg, #edf2f7 0%, #edf2f7 18%, #edf2f7 36%, #e8e0f5 75%, #cabdeb 100%)',
          'linear-gradient(135deg, #171923 0%, #2b213b 80%, #2b213b 86%, #311d48 94%, #311d48 100%)'
        )(props),
      },
    }),
  },
});
