import React from 'react';
import '@fontsource/raleway/500.css';
import '@fontsource/lusitana/700.css'
import {
  ChakraProvider,
  Flex,
  Box,
} from '@chakra-ui/react';
import TopNavBar from './components/TopNavBar';
import theme from './theme'
import Home from './layouts/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" justify="center" padding={5} >
        <TopNavBar />
      </Flex>

      <Home/>
      <Box height="3vh" width='auto'/>
    </ChakraProvider>
  );
}

export default App;
