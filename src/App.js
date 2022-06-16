import React from 'react';
import '@fontsource/raleway/500.css';
import '@fontsource/lusitana/700.css'
import {
  ChakraProvider,
  Flex,
  Box,
  useBoolean,
} from '@chakra-ui/react';
import TopNavBar from './components/TopNavBar';
import theme from './theme'
import Home from './layouts/Home';
import Menu from './layouts/Menu';
import Contact from './layouts/Contact'

function App() {
  const [home, setHome] = useBoolean(true)
   const [menu, setMenu] = useBoolean();
    const [contact, setContact] = useBoolean();

      function onClickLog(name) {
                  setHome.off();
                  setMenu.off();
                  setContact.off();
        if(name === "Home"){
          setHome.toggle();
        } else if(name === "Menu"){
          setMenu.toggle();
        } else {
          setContact.toggle();
        }
      }

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" justify="center" padding={5}>
        <TopNavBar onClick={onClickLog} />
      </Flex>
      {home ? <Home /> : <></>}
      {menu ? <Menu /> : <></>}
      {contact ? <Contact /> : <></>}
      <Box height="3vh" width="auto" />
    </ChakraProvider>
  );
}

export default App;
