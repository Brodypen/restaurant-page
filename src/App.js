import React from 'react';
import '@fontsource/raleway/500.css';
import '@fontsource/lusitana/700.css'
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import TopNavBar from './components/TopNavBar';
import theme from './theme'
import HomeSwiper from './components/HomeSwiper';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" justify="center" padding={5} >
        <TopNavBar />
      </Flex>
      <HomeSwiper />
    </ChakraProvider>
  );
}

export default App;
