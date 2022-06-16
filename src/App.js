import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import HamburgerMenu from './components/HamburgerMenu';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <HamburgerMenu/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
