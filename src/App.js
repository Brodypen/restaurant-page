import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,
} from '@chakra-ui/react';
import TopNavBar from './components/TopNavBar';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" justify="center" padding={5}>
        <TopNavBar></TopNavBar>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
